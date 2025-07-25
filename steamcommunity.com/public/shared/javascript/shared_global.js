
Steam = {
	sm_bInitialized: false,
	sm_bUserInClient: false,
	sm_bUserInGameOverlay: false,
	sm_bUserInTenfootBrowser: false,
	sm_bUserInMobileChat: false,
	sm_bUserInMobileApp: false,

	BIsUserInSteamClient: function()
	{
		if ( !Steam.sm_bInitialized )
			Steam.Init();

		return Steam.sm_bUserInClient;
	},

	BIsUserInGameOverlay: function()
	{
		if ( !Steam.sm_bInitialized )
			Steam.Init();

		return Steam.sm_bUserInGameOverlay
	},

	BIsUserInSteamTenfootBrowser: function()
	{
		if ( !Steam.sm_bInitialized )
			Steam.Init();

		return Steam.sm_bUserInTenfootBrowser;
	},

	BIsUserInClientOrOverlay: function()
	{
		if ( !Steam.sm_bInitialized )
			Steam.Init();

		return Steam.sm_bUserInClient || Steam.sm_bUserInGameOverlay;
	},

	BIsUserInSteamMobileChat: function()
	{
		if ( !Steam.sm_bInitialized )
			Steam.Init();

		return Steam.sm_bUserInMobileChat;
	},

	BIsUserInSteamMobileApp: function()
	{
		if ( !Steam.sm_bInitialized )
			Steam.Init();

		return Steam.sm_bUserInMobileApp;
	},

	GetClientPackageVersion: function()
	{
		if ( !Steam.BIsUserInClientOrOverlay() )
			return 0;

		if ( typeof navigator != 'undefined' && navigator.userAgent )
		{
			var matches = navigator.userAgent.match( /Valve Steam [^\/]*\/([0-9]*)/ );
			if ( matches && matches.length == 2 )
				return matches[1];
		}

		return 0;
	},

	Init: function()
	{
		var fnCheckAgent = function( strUAMatch, strURLParam )
		{
			if ( window.location.href.match( '[?&]' + strURLParam + '=' ) )
				return true;

			if ( typeof navigator != 'undefined' && navigator.userAgent && navigator.userAgent.indexOf( strUAMatch ) != -1 )
				return true;

			return false;
		};

		Steam.sm_bUserInTenfootBrowser = fnCheckAgent( 'Valve Steam Tenfoot', 'force_tenfoot_client_view' );
		Steam.sm_bUserInGameOverlay = fnCheckAgent( 'Valve Steam GameOverlay', 'force_overlay_view' );
		Steam.sm_bUserInClient = Steam.sm_bUserInTenfootBrowser || fnCheckAgent( 'Valve Steam Client', 'force_client_view' );
		Steam.sm_bUserInMobileChat = fnCheckAgent( 'Valve Steam Mobile Chat', 'force_mobile_chat_view' );
		Steam.sm_bUserInMobileApp = fnCheckAgent( 'Valve Steam App', 'force_mobile_app_view' );

		Steam.sm_bInitialized = true;
	},

	LinkInNewWindow: function( $A )
	{
		if ( Steam.BIsUserInSteamClient() && !Steam.BIsUserInSteamTenfootBrowser() )
			$A.attr( 'href', 'steam://openurl_external/' + $A.attr('href') );
		else
			$A.attr( 'target', '_blank' );
	}
};

function OpenFriendChat( steamid, accountid )
{
	if ( Steam.BIsUserInClientOrOverlay() )
	{
		window.location = 'steam://friends/message/' + steamid;
	}
	else if ( Steam.BIsUserInSteamMobileChat() )
	{
		window.location = 'steamchatmobile://friend/' + steamid;
	}
	else if ( Steam.BIsUserInSteamMobileApp() )
	{
				window.location = 'https://steamcommunity.com/chat/friend/' + steamid;
	}
	else if ( typeof ClientConnectionAPI !== 'undefined' )
	{
		ClientConnectionAPI.OpenFriendChatDialog( steamid ).then( function( result ) {
			if ( !result.success )
			{
				PromptContinueToWebChat( result, function() {
					OpenFriendChatInWebChat( steamid, accountid );
				}, 'steam://friends/message/' + steamid );
			}
		});
	}
	else
	{
		OpenFriendChatInWebChat( steamid, accountid );
	}
}

function OpenFriendChatInWebChat( steamid, accountid )
{
	LaunchWebChat( { friend: accountid }, {command: 'ShowFriendChatDialog', steamid: steamid} );
}

function OpenGroupChat( steamid )
{
	if ( Steam.BIsUserInSteamMobileChat() )
	{
		window.location = 'steamchatmobile://group/' + steamid;
	}
	else if ( Steam.BIsUserInSteamMobileApp() )
	{
				window.location = 'https://steamcommunity.com/chat/group/' + steamid;
	}
	else if ( !Steam.BIsUserInClientOrOverlay() && typeof ClientConnectionAPI !== 'undefined' )
	{
		ClientConnectionAPI.OpenFriendChatDialog( steamid ).then( function( result ) {
			if ( !result.success )
			{
				PromptContinueToWebChat( result, function() {
					LaunchWebChat( null, {command: 'ShowFriendChatDialog', steamid: steamid} );
				}, 'steam://friends/joinchat/' + steamid );
			}
		});
	}
	else
	{
		window.location = 'steam://friends/joinchat/' + steamid;
	}
}

function PromptContinueToWebChat( result, fnLaunchWebchat, steamURL )
{
	ShowConfirmDialog( 'Got Steam?', 'We couldn\'t find Steam running on your machine.  Would you like to launch web chat?',
		'Use web chat' , null, 'Get Steam' ).done( function( choice ) {
			if ( choice == 'OK' )
				fnLaunchWebchat();
			else
				window.location = 'https://store.steampowered.com/about/'
	});
}


// proto functions used to accept an id or an element.
// This can be used to migrate them to returning jquery instead of proto-wrapped element
function $JFromIDOrElement( elem )
{
	if ( elem instanceof jQuery )
		return elem;
	else if ( typeof elem == 'string' )
		return $J('#' + elem.replace( /\./, '\\.' ) );
	else
		return $J( elem );
}

/**	Show a popup dialog like confirm(), with two buttons.  Clicking ok resolves with done(), cancel or closing the window resolves with fail()
 *
 * @param strTitle			Title bar text
 * @param strDescription	Message text
 * @param strOKButton		Text to show on OK button (default "OK")
 * @param strCancelButton	Text to show on Cancel button (default "Cancel")
 * @param strSecondaryActionButton	Add a secondary ok button (three buttons total).  Resolves with done() like OK but passes 'SECONDARY' as argument to handler
 * @returns CModal
 */
function ShowConfirmDialog( strTitle, strDescription, strOKButton, strCancelButton, strSecondaryActionButton, rgModalParams )
{
	if ( !strOKButton )
		strOKButton = 'OK';
	if ( !strCancelButton )
		strCancelButton = 'Cancel';

	var deferred = new jQuery.Deferred();
	var fnOK = function() { deferred.resolve( 'OK' ); };
	var fnSecondary = function() { deferred.resolve( 'SECONDARY' ); };
	var fnCancel = function( bWasCancelButton ) { deferred.reject( bWasCancelButton ); };

	var rgButtons = [];

	var $OKButton = _BuildDialogButton( strOKButton, true );
	$OKButton.click( fnOK );
	rgButtons.push( $OKButton );

	if ( strSecondaryActionButton )
	{
		var $SecondaryActionButton = _BuildDialogButton( strSecondaryActionButton, false, {strClassName: 'btn_blue_steamui btn_medium' } );
		$SecondaryActionButton.click( fnSecondary );
		rgButtons.push( $SecondaryActionButton );
	}

	var $CancelButton = _BuildDialogButton( strCancelButton );
	$CancelButton.click( function() { fnCancel( true ); } );
	rgButtons.push( $CancelButton );

	var Modal = _BuildDialog( strTitle, strDescription, rgButtons, fnCancel, rgModalParams );
	Modal.Show();

	_BindOnEnterKeyPressForDialog( Modal, deferred, fnOK );

	deferred.always( function() { Modal.Dismiss(); } );
	// attach the deferred's events to the modal
	deferred.promise( Modal );

	return Modal;
}

/**	Show a dialog with a single button, like alert().  Button click or closing the modal resolve deferred with done().
 *
 * @param strTitle			Title bar text
 * @param strDescription	Message text
 * @param strOKButton		Text on the OK button ("OK" by default)
 * @returns CModal
 */
function ShowAlertDialog( strTitle, strDescription, strOKButton, rgModalParams )
{
	if ( !strOKButton )
		strOKButton = 'OK';

	var deferred = new jQuery.Deferred();
	var fnOK = function( bWasCancelButton ) { deferred.resolve( bWasCancelButton ); };

	var $OKButton = _BuildDialogButton( strOKButton );
	$OKButton.click( function() { fnOK( true ); } );

	var Modal = _BuildDialog( strTitle, strDescription, [ $OKButton ], fnOK, rgModalParams );
	deferred.always( function() { Modal.Dismiss(); } );
	Modal.Show();

	_BindOnEnterKeyPressForDialog( Modal, deferred, fnOK );

	// attach the deferred's events to the modal
	deferred.promise( Modal );

	return Modal;

}

/**	Show a popup dialog.  Has no buttons.  Closing the dialog resolves deferred with done().
 *
 * @param strTitle			Title bar text
 * @param strDescription	Message text
 * @param rgModalParams		See CModal
 * @returns CModal
 */
function ShowDialog( strTitle, strDescription, rgModalParams )
{
	var deferred = new jQuery.Deferred();
	var fnOK = function() { deferred.resolve(); };

	var Modal = _BuildDialog( strTitle, strDescription, [], fnOK, rgModalParams );
	deferred.always( function() { Modal.Dismiss(); } );
	Modal.Show();

	// attach the deferred's events to the modal
	deferred.promise( Modal );

	return Modal;
}

/**
 * Show a dialog, but take the arguments as an object a la React.
 * @returns CModal
 */
function ShowPromptDialogWithProps( rgParams )
{
	let { strOKButton, strCancelButton, strTitle, strDescription, defaultValue, inputType, inputMaxSize, bNoPromiseDismiss, bInputReadOnly } = rgParams;
	if ( !strOKButton )
		strOKButton = 'OK';
	if ( !strCancelButton )
		strCancelButton = 'Cancel';
	if ( !inputType )
		inputType = 'text';

	var $Body = $J('<form/>');
	var $Input = $J('<input/>', {type: inputType, 'class': '' } ).val( defaultValue );
	if ( inputMaxSize )
	{
		$Input.attr( 'maxlength', inputMaxSize );
	}
	if ( bInputReadOnly )
	{
		$Input.attr( 'readonly', true );
	}
	$Body.append( $J('<div/>', {'class': 'newmodal_prompt_description' } ).append( strDescription ) );
	$Body.append( $J('<div/>', {'class': 'newmodal_prompt_input gray_bevel for_text_input fullwidth' } ).append( $Input ) );

	var deferred = new jQuery.Deferred();
	var fnOK = function() { deferred.resolve( $Input.val() ); };
	var fnCancel = function() { deferred.reject(); };

	$Body.submit( function( event ) { event.preventDefault(); fnOK(); } );

	var elButtonLabel = $J( '<span/>' ).text( strOKButton );
	var $OKButton = $J('<button/>', {type: 'submit', 'class': 'btn_green_white_innerfade btn_medium' } ).append( elButtonLabel );
	$OKButton.click( fnOK );
	var $CancelButton = _BuildDialogButton( strCancelButton );
	$CancelButton.click( fnCancel );

	var Modal = _BuildDialog( strTitle, $Body, [ $OKButton, $CancelButton ], fnCancel, rgParams );
	if( !bNoPromiseDismiss )
		deferred.always( function() { Modal.Dismiss(); } );

	Modal.Show();

	$Input.focus();

	// attach the deferred's events to the modal
	deferred.promise( Modal );

	return Modal;
}

/**
 * A wrapper around ShowDialogPrompt to be compatible with existing code. Prefer ShowPromptDialogWithProps instead.
 * @returns CModal
 */
function ShowPromptDialog( strTitle, strDescription, strOKButton, strCancelButton, rgModalParams, defaultValue )
{
	let rgParams = {};
	if ( rgModalParams )
		Object.assign( rgParams, rgModalParams );
	rgParams.strTitle = strTitle;
	rgParams.strDescription = strDescription;
	rgParams.strOKButton = strOKButton;
	rgParams.strCancelButton = strCancelButton;
	rgParams.defaultValue = defaultValue;
	return ShowPromptDialogWithProps( rgParams );
}

/**
 * @returns CModal
 */
function ShowPromptWithTextAreaDialog( strTitle, strInitialText, strOKButton, strCancelButton, textAreaMaxLength, strDescription )
{
	if ( !strOKButton )
		strOKButton = 'OK';
	if ( !strCancelButton )
		strCancelButton = 'Cancel';

	var $Body = $J('<form/>');
	var $TextArea = $J('<textarea/>', { 'class': 'newmodal_prompt_textarea' } );
	$TextArea.text( strInitialText );
	if ( textAreaMaxLength )
	{
		$TextArea.attr( 'maxlength', textAreaMaxLength );
		$TextArea.bind( "keyup change",
			function()
			{
				var str = $J(this).val();
				var mx = parseInt($J(this).attr('maxlength'));
				if (str.length > mx)
				{
					$J(this).val(str.substr(0, mx));
					return false;
				}
			}
		);
	}

	if ( strDescription )
	{
		$Body.append( $J('<div/>', {'class': 'newmodal_prompt_with_textarea newmodal_prompt_description' } ).text( strDescription ) );
	}

	$Body.append( $J('<div/>', {'class': 'newmodal_prompt_with_textarea gray_bevel fullwidth' } ).append( $TextArea ) );

	var deferred = new jQuery.Deferred();
	var fnOK = function() { deferred.resolve( $TextArea.val() ); };
	var fnCancel = function() { deferred.reject(); };

	$Body.submit( function( event ) { event.preventDefault(); fnOK(); } );

	var elButtonLabel = $J( '<span/>' ).text( strOKButton );
	var $OKButton = $J('<button/>', {type: 'submit', 'class': 'btn_green_white_innerfade btn_medium' } ).append( elButtonLabel );
	$OKButton.click( fnOK );
	var $CancelButton = _BuildDialogButton( strCancelButton );
	$CancelButton.click( fnCancel );

	var Modal = _BuildDialog( strTitle, $Body, [ $OKButton, $CancelButton ], fnCancel );
	deferred.always( function() { Modal.Dismiss(); } );
	Modal.Show();

	$TextArea.focus();

	// attach the deferred's events to the modal
	deferred.promise( Modal );

	return Modal;
}

/**
 * @returns CModal
 */
function ShowEditablePrompt( strTitle, obj, onOk, onCancel)
{
	strEditButton = 'Edit';
	strOKButton = 'OK';
	strCancelButton = 'Cancel';

	var $Body = $J('<form/>');
	var $TextArea = $J('<textarea/>', {'class': 'newmodal_prompt_textarea', 'id': 'json_window'});
	$TextArea[0].readOnly = true;
	$TextArea.text( JSON.stringify(obj, null, 2) );
	$Body.append( $J('<div/>', {'class': 'newmodal_prompt_with_textarea gray_bevel fullwidth ' } ).append( $TextArea ) );

	$Body.submit( function( event ) { event.preventDefault(); fnOK(); } );

	var elButtonLabel = $J( '<span/>' ).text( strOKButton );
	var deferredAction = new jQuery.Deferred();

	var editButtonLabel = $J( '<span/>' ).text( strEditButton );
	var $EditButton = $J('<button/>', {type: 'button', 'class': 'btn_darkred_white_innerfade btn_medium' } ).append( editButtonLabel );
	$EditButton.click( function() {
		$EditButton[0].disable();
		$OKButton[0].enable();
		$TextArea[0].readOnly = false;
		$TextArea.focus();
	})

	var $OKButton = $J('<button/>', {type: 'submit', 'class': 'btn_green_white_innerfade btn_medium' } ).append( elButtonLabel );
	$OKButton.click( function() { deferredAction.resolve( $TextArea.val() ); } );
	$OKButton[0].disabled = true;

	fnCancel = function() { deferredAction.reject(); };
	var $CancelButton = _BuildDialogButton( strCancelButton );
	$CancelButton.click( fnCancel );

	var Modal = _BuildDialog( strTitle, $Body, [ $EditButton, $OKButton, $CancelButton ], fnCancel );
	deferredAction.always( function() { Modal.Dismiss(); } );

	if (onOk)
		deferredAction.done(onOk);
	if (onCancel)
		deferredAction.fail(onCancel);

	Modal.Show();

	$TextArea.focus();

	// attach the deferred's events to the modal
	deferredAction.promise( Modal );

	return Modal;
}

/**
 * @returns CModal
 */
function ShowBlockingWaitDialog( strTitle, strDescription )
{
	var deferred = new jQuery.Deferred();
	var fnOK = function() { deferred.resolve(); };

	var container = $J('<div/>', {'class': 'waiting_dialog_container'} );
	var throbber = $J('<div/>', {'class': 'waiting_dialog_throbber'} );
	container.append( throbber );
	container.append( strDescription );
	if ( !strDescription )
	{
		container.addClass( 'waiting_dialog_centered' );
	}

	var Modal = _BuildDialog( strTitle, container, [], fnOK, { bExplicitDismissalOnly: true } );
	deferred.always( function() { Modal.Dismiss(); } );
	Modal.Show();

	// attach the deferred's events to the modal
	deferred.promise( Modal );

	return Modal;
}

function _BindOnEnterKeyPressForDialog( Modal, deferred, fnOnEnter )
{
	var fnOnKeyUp = function( event ) {
		if ( Modal.BIsActiveModal() && !event.isDefaultPrevented() && event.which == 13 && ( !event.target || event.target.nodeName != 'TEXTAREA' ) )
			fnOnEnter();
	};
	$J(document).on( 'keyup.SharedConfirmDialog', fnOnKeyUp );
	deferred.always( function() { $J(document).off( 'keyup.SharedConfirmDialog' ); } );
}

/**
 * @returns CModal
 * @private
 */
function _BuildDialog( strTitle, strDescription, rgButtons, fnOnCancel, rgModalParams )
{
	var $Dialog = $J('<div/>', {'class': 'newmodal'} );
	var $CloseButton = $J('<div/>', {'class': 'newmodal_close', 'data-panel': '{"focusable":true,"clickOnActivate":true}' } );
	var $Header = ( $J('<div/>', {'class': 'newmodal_header' }) );
	var $TopBar = ( $J('<div/>', {'class': 'modal_top_bar' }) );
	if ( strTitle )
		$Header.append( $CloseButton ).append( $J('<div/>', {'class': 'title_text' } ).text( strTitle ) );
    if ( rgModalParams && rgModalParams.strSubTitle ) {
        var $SubTitle = (rgModalParams.strSubTitle);
        $Header.append( $J('<div/>', {'class': 'subtitle_text' } ).text( $SubTitle ) )
    }
	$Header = $J('<div/>', {'class': 'newmodal_header_border'}).append( $Header );
	$Dialog.append( $TopBar ).append( $Header );
	var $Content = $J('<div/>', {'class': 'newmodal_content' } );
	$Content.append( $J('<div/>').append( strDescription ) );

	if ( rgButtons.length > 0 )
	{
		var $Buttons = $J('<div/>', {'class': 'newmodal_buttons', 'data-panel': '{"flow-children":"row"}' } );
		$Content.append( $Buttons );
		for( var i = 0; i < rgButtons.length; i++ )
		{
			var $Button = rgButtons[i];
			if ( i == 0 )
				$Button.attr( 'data-panel', '{"autoFocus":true,"focusable":true,"clickOnActivate":true}' );
			else
				$Button.attr( 'data-panel', '{"focusable":true,"clickOnActivate":true}' );
			$Buttons.append( $Button );
		}
	}

	$Dialog.append( $J('<div/>', {'class': 'newmodal_content_border' } ).append( $Content ) );

	if ( rgModalParams && rgModalParams.bExplicitDismissalOnly )
		$CloseButton.hide();

	var Modal = new CModal( $Dialog, rgModalParams );
	if ( fnOnCancel )
	{
		Modal.OnDismiss( fnOnCancel );
		$CloseButton.click( function() { Modal.Dismiss(); } );
	}

	// on responsive pages, the 'newmodal' element covers the whole viewable area (so that we can control scrolling
	// if the modal is very tall).  If the modal doesn't cover the whole area, we dismiss on clicks to this background
	//	area
	if ( Modal.m_fnBackgroundClick )
	{
		$Dialog.click( function(e) { if ( e.target == this ) Modal.m_fnBackgroundClick(); } );
	}

	Modal.SetRemoveContentOnDismissal( true );

	return Modal;
}

function _BuildDialogButton( strText, bActive, rgOptions )
{
	if ( !rgOptions )
		rgOptions = {};

	var strClassName = bActive ? 'btn_green_steamui btn_medium' : 'btn_grey_steamui btn_medium';
	if ( rgOptions.strClassName )
		strClassName = rgOptions.strClassName;

	var elButtonLabel = $J( '<span/>' ).html( strText );
	var elButton = $J('<div/>', {'class': strClassName } ).append( elButtonLabel );
	return elButton;
}

/**	Implemented for Gamepad: show content in a fullscreen, borderless, modal which gets navigation support.
 *  Used on the app details page to show screenshots in full screen.
 *  Closing the dialog resolves deferred with done().
 *
 * @returns CModal
 */
function GPShowFullScreenModal( content )
{
	var deferred = new jQuery.Deferred();
	var fnOK = function() { deferred.resolve(); };

	var Modal = _BuilGPFullScreenModal( content, fnOK );
	deferred.always( function() { Modal.Dismiss(); } );
	Modal.Show();

	// attach the deferred's events to the modal
	deferred.promise( Modal );

	return Modal;
}

function _BuilGPFullScreenModal( content, fnOnCancel )
{
		var $Dialog = $J('<div/>').append( $J('<div/>', {'style': 'display:flex'} ).append( content ) );
	var Modal = new CModal( $Dialog );

	Modal.SetRemoveContentOnDismissal( true );
	if ( fnOnCancel )
	{
		Modal.OnDismiss( fnOnCancel );
	}

	return Modal;
}

/* modal params:
	bExplicitDismissalOnly - by default, clicking outside of the modal dismisses it.  Set this to true to override that behavior
	bIgnoreResizeEvents - don't resize the modal when the window resizes
 */

function CModal( $Content, rgParams )
{
	rgParams = rgParams || {};

	this.m_$Content = $Content;
	this.m_bVisible = false;

	this.m_bIgnoreResizeEvents = rgParams.bIgnoreResizeEvents;
	this.m_fnSizing = null;
	this.m_fnBackgroundClick = null;
	this.m_fnOnResize = null;
	this.m_bDismissOnBackgroundClick = !rgParams.bExplicitDismissalOnly;
	this.m_nMaxWidth = rgParams.nMaxWidth || 0;
	this.m_nMaxHeight = rgParams.nMaxHeight || 0;

	this.m_fnOnDismiss = null;
	this.m_fnGPOnCloseModal = null;
	this.m_bRemoveContentOnDismissal = false;

	this.m_nInitialOffsetTop = $J(window).scrollTop();
	this.m_nInitialOffsetLeft = $J(window).scrollLeft();
	this.m_$Content.css( 'position', 'fixed' );
	this.m_$Content.css( 'z-index', 1000 );

	/* default gamepad behavior is B button closes the dialog */
	if ( !this.m_$Content.attr('panel' ) )
		this.m_$Content.attr( 'data-panel', '{"onCancelButton":"CModal.DismissActiveModal()"}' );

	this.m_$StandardContent = null;
	this.m_$SizedContent = null;
	this.OnContentChanged();	//this will look for StandardContent and SizedContent in the modal body


	var _modal = this;
	this.m_fnBackgroundClick = function() { if ( _modal.BIsActiveModal() && _modal.m_bDismissOnBackgroundClick ) { _modal.Dismiss(); } };
	this.m_fnOnEscapeKeyPress = function( event ) { if ( _modal.BIsActiveModal() && event.which == 27 ) _modal.m_fnBackgroundClick(); };
	this.m_fnSizing = function() { _modal.AdjustSizing(); };

	/* make sure the content is parented correctly */
	$J(document.body).append( this.m_$Content );
}

CModal.prototype.OnDismiss = function( fn )
{
	this.m_fnOnDismiss = fn;
};

CModal.prototype.OnResize = function( fn )
{
	this.m_fnOnResize = fn;
};

/**
 * @returns jQuery
 */
CModal.prototype.GetContent = function ()
{
	return this.m_$Content;
};

CModal.prototype.GetBoundOnResizeEvent = function()
{
	// in case someone outside needs to tell the modal to resize on certain events (eg images or iframes loading in the modal)
	return this.m_fnSizing;
};

CModal.prototype.OnContentChanged = function()
{
	// make sure we're holding the right elements
	this.m_$StandardContent = this.m_$Content.find( '.newmodal_content' );
	if ( !this.m_$StandardContent.length )
		this.m_$StandardContent = this.m_$Content;
	this.m_$SizedContent = this.m_$Content.find( '.newmodal_sized_content' );
};

CModal.prototype.SetRemoveContentOnDismissal = function ( bRemoveContent )
{
	this.m_bRemoveContentOnDismissal = bRemoveContent;
};

CModal.prototype.SetDismissOnBackgroundClick = function ( bDismissOnBackgroundClick )
{
	this.m_bDismissOnBackgroundClick = bDismissOnBackgroundClick;
};

CModal.prototype.SetMaxWidth = function ( nMaxWidth )
{
	this.m_nMaxWidth = nMaxWidth;
	if ( this.m_bVisible )
		this.AdjustSizing();
};

CModal.prototype.SetMaxHeight = function ( nMaxHeight )
{
	this.m_nMaxHeight = nMaxHeight;
	if ( this.m_bVisible )
		this.AdjustSizing();
};

CModal.prototype.AdjustSizing = function( duration )
{
	if ( !this.m_$Content )
		return;

	var bResponsiveScreen = window.UseTouchFriendlyMode && UseTouchFriendlyMode();
	var bUseTabletScreenMode = window.UseTabletScreenMode && window.UseTabletScreenMode();

	var nViewportWidth = document.compatMode === 'BackCompat' ? document.body.clientWidth : $J(window).width();
	var nViewportHeight = document.compatMode === 'BackCompat' ? document.body.clientHeight : $J(window).height();

	var nMaxWidth = Math.max( nViewportWidth - ( bResponsiveScreen? 24 : 80 ), bResponsiveScreen ? 200 : 500 );
	var nMaxHeight = Math.floor( nViewportHeight - 120 );

	if ( this.m_nMaxWidth && nMaxWidth > this.m_nMaxWidth )
	{
		nMaxWidth = this.m_nMaxWidth;
	}

	if ( this.m_nMaxHeight && nMaxHeight > this.m_nMaxHeight )
	{
		nMaxHeight = this.m_nMaxHeight;
	}

	// if the modal has a 'newmodal_sized_content' div, it wants to be the max height, so set it now
	//	before we compute height	( "- 18" is a fudge for a possible horizontal scrollbar )
	this.m_$SizedContent.css( 'min-height', ( nMaxHeight - 18 ) + 'px' );
	if ( this.m_fnOnResize )
	{
		this.m_fnOnResize( nMaxWidth - 40, nMaxHeight );
	}

	if ( !duration )
	{
		// set sizes right away so we can calculate a good left and top
		this.m_$Content.css( 'max-width',  nMaxWidth + 'px' );
		if ( !bResponsiveScreen )
		{
			this.m_$StandardContent.css( 'max-height',  nMaxHeight + 'px' );
		}
		else
		{
			this.m_$StandardContent.css( 'max-height', '' );
		}
	}

	var nContentWidth = this.m_$Content.width();
	var nContentHeight = this.m_$Content.height();
	var nLeft = Math.max( Math.floor( ( nViewportWidth - nContentWidth ) / 2 ), 12 );
	var nTop = Math.max( Math.floor( ( nViewportHeight - nContentHeight ) / 2 ), 12 );

	// only use absolute position on mobile screens
	if ( bResponsiveScreen && !bUseTabletScreenMode )
	{
		nLeft += this.m_nInitialOffsetLeft;
		nTop += this.m_nInitialOffsetTop;
		this.m_$Content.css( 'position', 'absolute' );
	}
	else
	{
		this.m_$Content.css( 'position', 'fixed' );
	}

	if ( duration )
	{
		this.m_$Content.animate( { 'max-width': nMaxWidth, left: nLeft, top: nTop }, duration );
		this.m_$StandardContent.animate( {'max-height': nMaxHeight }, duration );
	}
	else
	{
		this.m_$Content.css( 'left', nLeft );
		this.m_$Content.css( 'top', nTop );
	}
};

CModal.prototype.Show = function()
{
	if ( this.m_bVisible )
		return;

	CModal.ShowModalBackground();

	if ( !this.m_bIgnoreResizeEvents )
	{
		$J(window).on( 'resize', null, this.m_fnSizing );
	}
	CModal.s_$Background.on( 'click.CModal', this.m_fnBackgroundClick );
	$J(document).on( 'keyup.CModal', this.m_fnOnEscapeKeyPress );

	this.AdjustSizing();

	// if we're in gamepad, notify gamepad navigation of the modal
	if ( typeof GPOnShowingModalWindow === "function" )
		this.m_fnGPOnCloseModal = GPOnShowingModalWindow( this.m_$Content.get( 0 ) );

	this.m_$Content.show();

	// resize as any child image elements load in.
	this.m_$Content.find('img').load( this.m_fnSizing );

	this.m_bVisible = true;
	CModal.PushActiveModal( this );

	var _this = this;
	if ( typeof GPNavFocusChild !== 'undefined' )
		window.setTimeout( function() { GPNavFocusChild( _this.m_$Content ) }, 1 );	};

CModal.prototype.Dismiss = function()
{
	if ( !this.m_bVisible )
		return;

	this.m_bVisible = false;

	// tell gamepad navigation we're closing this modal
	if ( this.m_fnGPOnCloseModal )
	{
		this.m_fnGPOnCloseModal();
		this.m_fnGPOnCloseModal = null;
	}

	this.m_$Content.hide();

	if ( !this.m_bIgnoreResizeEvents )
	{
		$J(window).off( 'resize', null, this.m_fnSizing );
	}

	if ( this.m_fnOnDismiss )
		this.m_fnOnDismiss();

	if ( this.m_bRemoveContentOnDismissal )
	{
		this.m_$Content.remove();
		this.m_$Content = null;
	}

	CModal.PopActiveModal( this );
	if ( !CModal.s_rgModalStack.length )
	{
		CModal.s_$Background.off( 'click.CModal', this.m_fnBackgroundClick );
		$J(document).off( 'keyup.CModal', this.m_fnOnEscapeKeyPress );
		CModal.HideModalBackground();
	}
};

CModal.prototype.BIsActiveModal = function()
{
	return CModal.s_rgModalStack.length && CModal.s_rgModalStack[ CModal.s_rgModalStack.length - 1 ] == this;
};

/* static */
CModal.ShowModalBackground = function()
{
	if ( !CModal.s_$Background )
	{
		CModal.s_$Background = $J('<div/>', {'class': 'newmodal_background'});
		CModal.s_$Background.css( 'opacity', 0 );
		$J(document.body).append( CModal.s_$Background );
	}
	CModal.s_$Background.stop();	// stop running animations
	CModal.s_$Background.fadeTo( 200, 0.8 );
};

CModal.HideModalBackground = function()
{
	if ( CModal.s_$Background )
	{
		CModal.s_$Background.stop();	// stop running animations
		CModal.s_$Background.fadeOut( 200, 0 );
	}
};

CModal.s_rgModalStack = [];
CModal.GetActiveModal = function()
{
	if ( CModal.s_rgModalStack.length )
		return CModal.s_rgModalStack[CModal.s_rgModalStack.length-1];
	else
		return null;
};
CModal.DismissActiveModal = function()
{
	if ( CModal.s_rgModalStack.length )
		CModal.s_rgModalStack[CModal.s_rgModalStack.length-1].Dismiss();
};

CModal.PushActiveModal = function( Modal )
{
	for ( var i = 0; i < CModal.s_rgModalStack.length; i++ )
	{
		// push below background
		CModal.s_rgModalStack[i].m_$Content.css( 'z-index', 899 );
	}
	CModal.s_rgModalStack.push( Modal );
};

CModal.PopActiveModal = function( Modal )
{
	for ( var i = 0; i < CModal.s_rgModalStack.length; i++ )
	{
		if ( CModal.s_rgModalStack[i] == Modal )
		{
			CModal.s_rgModalStack.splice( i, 1 );
			break;
		}
	}

	if ( CModal.s_rgModalStack.length )
		CModal.s_rgModalStack[ CModal.s_rgModalStack.length - 1 ].m_$Content.css( 'z-index', 1000 );
};

// this will set the right headers for a cross-domain request to community
function GetDefaultCommunityAJAXParams( path, method )
{
	var rgParams = { url: 'https://steamcommunity.com/' + path };
	if ( method )
		rgParams.type = method;

	// if this js file was hosted off the store, add CORS request headers
	if ( window.location.href.indexOf( 'https://steamcommunity.com/' ) != 0 )
	{
		rgParams.crossDomain = true;
		rgParams.xhrFields = { withCredentials: true };
	}
	return rgParams;
}

function CrossDomainPost( url, params )
{
		return $J.ajax( {
		type: 'post',
		url: url,
		data: params,
		crossDomain: true,
		xhrFields: { withCredentials: true }
	} );
}

// spped of the miniprofile fading in and out
var MINIPROFILE_ANIM_SPEED = 150;
// how long the mouse must remain over an element before we'll make an AJAX call
var MINIPROFILE_DELAY_BEFORE_AJAX = 100;
// the delay before we'll show the hover, must be longer than DELAY_BEFORE_AJAX
var MINIPROFILE_DELAY_BEFORE_SHOW = 250;

function CDelayedAJAXData( strURL, msDelayBeforeAJAX )
{
	this.m_$Data = null;
	this.m_bAJAXFailed = false;
	this.m_timerDelayedAJAX = null;
	this.m_bAJAXRequestMade = false;
	this.m_msDelayBeforeAJAX = msDelayBeforeAJAX;
	this.m_strURL = strURL;

	this.m_fnOnAJAXComplete = null;
}

CDelayedAJAXData.prototype.GetAJAXParams = function()
{
	return GetDefaultCommunityAJAXParams( this.m_strURL, 'GET' );
};

CDelayedAJAXData.prototype.QueueAjaxRequestIfNecessary = function()
{
	if ( !this.m_$Data && !this.m_bAJAXRequestMade )
	{
		var _this = this;
		this.m_timerDelayedAJAX = window.setTimeout( function() {
			_this.m_timerDelayedAJAX = null;
			_this.m_bAJAXRequestMade = true;
			var rgAJAXParams = _this.GetAJAXParams();
			$J.ajax( rgAJAXParams )
				.done( function(data) {
					_this.m_$Data = $J(data);
					if ( _this.m_fnOnAJAXComplete )
						_this.m_fnOnAJAXComplete();
				}).fail( function() {
					_this.m_bAJAXFailed = true;
				});
		}, this.m_msDelayBeforeAJAX );
	}
};

CDelayedAJAXData.prototype.CancelAJAX = function()
{
	if ( this.m_timerDelayedAJAX )
		window.clearTimeout( this.m_timerDelayedAJAX );

	this.m_fnOnAJAXComplete = null;
};

CDelayedAJAXData.prototype.RunWhenAJAXReady = function( fnOnReady )
{
	if ( this.m_$Data )
		fnOnReady();
	else if ( !this.m_bAJAXFailed )
	{
		this.m_fnOnAJAXComplete = fnOnReady;
		this.QueueAjaxRequestIfNecessary();
	}
	// if ajax failed we will not call fnOnReady
};

CDelayedAJAXData.prototype.Show = function( $HoverContent )
{
	$HoverContent.children().detach();
	$HoverContent.append( this.m_$Data );
};

// time the cookie preferences popup waits before appearing
var	COOKIE_PREFERENCES_POPUP_DELAY = 4000;

function InitCookiePreferencesPopup()
{
	
	var $popupDialog = $J( '#cookiePrefPopup' );
	if ( $popupDialog.length == 0 )
	{
		$AllowURL = encodeURI( 'https://store.steampowered.com/' + 'account/ajaxsetcookiepreferences');

		var $CPopupContent = $J( "<style>\n.replyButton {\n\twidth: 100%;\n    text-align: center;\n    margin-bottom: 4px;\n}\n\n.buttonGroup {\n\tflex: 18%;\n\tmargin-left: 20px;\n\tmargin-right: 0px;\n}\n.cookieMessage {\n\tflex: 85%;\n\tmargin: auto;\n}\n.popupTextTitle {\n\tpadding-bottom: 10px;\n    font-size: 13px;\n    line-height: 17px;\n    color: #c6d4df;\n}\n.popupTextTitle a {\n    text-decoration: underline;\n}\n.cookiepreferences_popup {\n\tdisplay: none;\n\tposition: fixed;\n\tbottom: 0;\n\twidth: 100%;\n\tz-index: 2000;\n\tpadding-top: 10px;\n}\n.cookiepreferences_popup_content {\n\tdisplay: flex;\n    box-sizing: border-box;\n\twidth: 90%;\n\tmargin: auto;\n\tmargin-bottom: 20px;\n\tpadding: 16px 16px 10px 16px;\n    max-width: 980px;\n\tbackground: linear-gradient(90.85deg, #333840 0.58%, #25282E 74.92%);\n\tbox-shadow: 0px 0px 10px #000000;\n    border-left: 2px solid #00CCFF;\n}\n@media all and (max-width: 910px) {\n    body.responsive_page .cookiepreferences_popup_content {\n        flex-direction: column;\n    }\n    body.responsive_page .cookiepreferences_popup_content .cookieMessage {\n        margin-bottom: 20px;\n    }\n    body.responsive_page .cookiepreferences_popup_content .buttonGroup {\n        flex-direction: row;\n        margin-left: 0px;\n    }\n    body.responsive_page .cookiepreferences_popup_content .buttonGroup .replyButton {\n        width: unset;\n    }\n}\n<\/style>\n\n<div id=\"cookiePrefPopup\" class=\"cookiepreferences_popup\">\n\t<div class=\"cookiepreferences_popup_content\">\n\t\t<div class=\"cookieMessage\">\n\t\t\t<div class=\"popupTextTitle\">Do you mind if we use optional cookies to provide you personalized content and to analyze site traffic?<\/div>\n\t\t\t<div class=\"popupTextTitle\">We don't use a lot of cookies; you can see and manage them at any time on our <a href=\"https:\/\/store.steampowered.com\/account\/cookiepreferences\">Cookie Settings page<\/a>. If you click 'Accept All,' you consent to the use of cookies on Steam websites. Learn more about cookies in our <a href=\"https:\/\/store.steampowered.com\/privacy_agreement\">Privacy Policy<\/a>.<\/div>\n\t\t<\/div>\n\t\t<div class=\"buttonGroup\">\n\t\t\t<div id=\"acceptAllButton\" class=\"btn_blue_steamui btn_medium replyButton\"><span>Accept All<\/span><\/div>\n\t\t\t<div id=\"rejectAllButton\" class=\"btn_grey_steamui btn_medium replyButton\"><span>Reject All<\/span><\/div>\n\t\t<\/div>\n\t<\/div>\n<\/div>\n" );

		var $onAcceptButton = $CPopupContent.find( '#acceptAllButton' );
		var $onRejectButton = $CPopupContent.find( '#rejectAllButton' );

		if ( $onAcceptButton.length == 0 || $onRejectButton.length == 0 )
		{
			// template appears broken
			console.error("unable to display preferences popup");
			return;
		}

		var fnPostPreference = function ( bAllowChoice )
		{
			$J.ajax( { type: "POST",
						url: $AllowURL,
						data: { bAllow: bAllowChoice, sessionid: g_sessionID },
						crossDomain: true,
						xhrFields: { withCredentials: true }
			} ).done( function ( data )
			{
				if ( data && data.transfer_urls && data.transfer_params )
				{
					for ( var i = 0; i < data.transfer_urls.length; i++ )
					{
						$J.ajax( { type: "POST",
									url: data.transfer_urls[i],
									data: { transfer_params: data.transfer_params },
									crossDomain: true,
									xhrFields: { withCredentials: true }
						} );
					}
				}
			});
			$J( '#cookiePrefPopup' ).hide();

		}

		$onAcceptButton.on('click', '', function() {
			fnPostPreference( 1 );
		} );

		$onRejectButton.on('click', '', function ()
		{
			fnPostPreference( 0 );
		} );

		$J('body').append( $CPopupContent );

		timerCookiePopup = window.setTimeout( function() {
			$J("#cookiePrefPopup").show();
		}, COOKIE_PREFERENCES_POPUP_DELAY );
	}
}

// The /miniprofile/ is cacheable. We need to specify the origin URL of the request to avoid CORS see cl 5773210
function InitMiniprofileHovers( origin )
{
	var $Hover = $J('<div/>', {'class': 'miniprofile_hover'} );
	var $HoverContent = $J('<div/>', {'class': 'miniprofile_hover_inner shadow_content'} );

	$Hover.append( $J('<div class="shadow_ul"></div><div class="shadow_top"></div><div class="shadow_ur"></div><div class="shadow_left"></div><div class="shadow_right"></div><div class="shadow_bl"></div><div class="shadow_bottom"></div><div class="shadow_br"></div>'), $HoverContent );

	$Hover.hide();
	$J(document.body).append( $Hover );

	var fnDataFactory = function( key ) {
    // key is either a number (accountid) or a string of "accountid_appid"
		var rgKey = typeof key === "string" ? key.split( /_/ ) : [ key ];
		var strURL = 'miniprofile/' + rgKey[0];

		if ( rgKey[1] )
        {
			strURL += '?appid=' + rgKey[1];

			if( origin )
			{
				strURL += '&origin=' + origin;
			}
        }
		else if( origin )
		{
			strURL += '?origin=' + origin;
		}

		return new CDelayedAJAXData( strURL, MINIPROFILE_DELAY_BEFORE_AJAX );
	};

	var fnReadKey = function ( $Target ) {
		var appid = $Target.parents('[data-miniprofile-appid]').first().data('miniprofile-appid');
		if( appid  )
		{
			return $Target.data('miniprofile') + '_' + appid;
		}
		else
		{
			return $Target.data('miniprofile')
		}
	};

	var rgCallbacks = BindAJAXHovers( $Hover, $HoverContent, {
		fnDataFactory: fnDataFactory,
		fnPositionHover: PositionMiniprofileHover,
		fnReadKey: fnReadKey,
		strDataName: 'miniprofile',
		strURLMatch: 'miniprofile'
	}  );
}

function _RegisterAJAXHoverHideFunction( fnHide )
{
	if ( typeof g_rgfnHideAJAXHover == 'undefined' )
	{
		g_rgfnHideAJAXHover = [];
		$J(window).blur( HideAJAXHovers );
	}

	g_rgfnHideAJAXHover.push( fnHide );
}

function HideAJAXHovers()
{
	if ( typeof g_rgfnHideAJAXHover != 'undefined' )
	{
		for ( var i = 0; i < g_rgfnHideAJAXHover.length; i++ )
			g_rgfnHideAJAXHover[i]();
	}
}

function BindAJAXHovers( $Hover, $HoverContent, oParams )
{
	var fnDataFactory = oParams.fnDataFactory;
	var fnPositionHover = oParams.fnPositionHover || PositionMiniprofileHover;
	var strDataName = oParams.strDataName;
	var strURLMatch = oParams.strURLMatch;
	var fnReadKey = function( $Element ) { return $Element.data( strDataName ); };
	if ( oParams.fnReadKey )
		fnReadKey = oParams.fnReadKey;
	var strSelector = oParams.strSelector || '[data-' + strDataName + ']';
	var nDelayBeforeShow = oParams.nDelayBeforeShow || MINIPROFILE_DELAY_BEFORE_SHOW;

	// indexed by accountid
	var rgHoverData = {};
	var HoverTarget = null;
	var timerHover = null;

	var fnOnHover = function( $Target, key ) {

		var bHoverVisible = ( $Hover.css('display') != 'none' );

		var HoverData = rgHoverData[key];
		if ( !HoverData )
		{
			HoverData = rgHoverData[key] = fnDataFactory( key );
		}

		if ( HoverTarget == HoverData && bHoverVisible )
		{
			//really only want to do this while fading out
			$Hover.stop();
			fnPositionHover( $Hover, $Target );
			$Hover.show();	// PositionMiniprofile toggles visibility
			$Hover.fadeTo( MINIPROFILE_ANIM_SPEED, 1.0 );
		}
		else if ( !timerHover || HoverData != HoverTarget )
		{
			// this is the new target
			if ( HoverTarget && HoverTarget != HoverData )
				HoverTarget.CancelAJAX();
			HoverTarget = HoverData;

			if ( timerHover )
			{
				window.clearTimeout( timerHover );
				timerHover = null;
			}

			HoverData.QueueAjaxRequestIfNecessary();

			timerHover = window.setTimeout( function() {
				window.clearTimeout( timerHover );
				timerHover = null;

				HoverData.RunWhenAJAXReady( function() {
					HoverData.Show( $HoverContent );
					$Hover.stop();
					$Hover.css( 'opacity', '' ); //clean up jquery animation
					fnPositionHover( $Hover, $Target );
					$Hover.fadeIn( MINIPROFILE_ANIM_SPEED );
					var videoElem = $Hover.find( 'video' );
					if ( videoElem.length != 0 )
					{
						var playPromise = videoElem[0].play();
						if ( playPromise )
						{
							playPromise.catch( function( e ) {
							} );
						}
					}
				} );
			}, nDelayBeforeShow );
		}
	};

	var fnCancelHover = function( key )
	{
		var bHoverVisible = ( $Hover.css('display') != 'none' );

		if ( key )
		{
			var HoverData = rgHoverData[key];
			if ( HoverData )
			{
				HoverData.CancelAJAX();
			}
		}

		if ( timerHover )
		{
			window.clearTimeout( timerHover );
			timerHover = null;
		}

		if ( bHoverVisible )
		{
			$Hover.stop();
			$Hover.fadeOut( MINIPROFILE_ANIM_SPEED );
		}
	};

	var strEventNamespace = 'AjaxHover' + strDataName;
	$J(document ).on( 'mouseenter.' + strEventNamespace + ' touchend.' + strEventNamespace, strSelector, function(e) {
		var $Target = $J(this);
		fnOnHover( $Target, fnReadKey( $Target) );

		// Prevent click if we're sticky
		if ( typeof $Target.data('stickyhover') !== 'undefined' )
		{
			e.preventDefault();
		}
	} );
	$J(document ).on( 'click.' + strEventNamespace + ' mouseleave.' + strEventNamespace, strSelector, function(e) {
		var $Target = $J(this);

		// Cancel if we're not sticky
		if ( typeof $Target.data('stickyhover') == 'undefined' )
		{
			fnCancelHover();
		}
	} );
	// Cancel when clicking/touching elsewhere regardless if sticky
	$J(document ).on( 'click', null, fnCancelHover );

	// register this hover so HideAJAXHovers() can hide it when invoked
	_RegisterAJAXHoverHideFunction( fnCancelHover );

	return {
		fnCancelHover: fnCancelHover
	};
}

function PositionMiniprofileHover( $Hover, $Target, oParams )
{
	if ( !oParams )
		oParams = {};
	var bPreferRightSide = oParams.bPreferRightSide || false;
	var nPxArrowOverlap = ( oParams.nPxArrowOverlap != undefined ) ? oParams.nPxArrowOverlap : 2;

	$Hover.css( 'visibility', 'hidden' );
	$Hover.show();

	var offset = $Target.offset();
	$Hover.css( 'left', offset.left + 'px' );
	$Hover.css( 'top', offset.top + 'px');

	var $HoverBox = $Hover.children( '.shadow_content' );
	if ( !$HoverBox.length )
		$HoverBox = $J( $Hover.children()[0] );

	var $HoverArrowLeft = $Hover.children( '.hover_arrow.left' );
	var $HoverArrowRight = $Hover.children( '.hover_arrow.right' );

	var nWindowScrollTop = $J(window).scrollTop();
	var nWindowScrollLeft = $J(window).scrollLeft();
	var nViewportWidth = $J(window).width();
	var nViewportHeight = $J(window).height();

		var $HoverArrow = $HoverArrowRight;
	var nBoxRightViewport = ( offset.left - nWindowScrollLeft ) + $Target.outerWidth() + $HoverBox.width() + 14;
	var nSpaceRight = nViewportWidth - nBoxRightViewport;
	var nSpaceLeft = offset.left - $Hover.width();
	if ( ( ( nSpaceLeft > 0 || nSpaceLeft > nSpaceRight ) && !bPreferRightSide ) || ( bPreferRightSide && nSpaceRight < 14 && nSpaceLeft > nSpaceRight ) )
	{
				$Hover.css( 'left', ( offset.left - $Hover.width() + nPxArrowOverlap + 3 ) + 'px' );
		$HoverArrowLeft.hide();
		$HoverArrowRight.show();
	}
	else
	{
				$Hover.css( 'left', ( offset.left + $Target.outerWidth() - nPxArrowOverlap ) + 'px' );
		$HoverArrow = $HoverArrowLeft;
		$HoverArrowLeft.show();
		$HoverArrowRight.hide();
	}

	var nTopAdjustment = 0;

			if ( $Target.height() < 48 )
		nTopAdjustment = Math.floor( $Target.height() / 2 ) - 24;
	var nDesiredHoverTop = offset.top - 15 + nTopAdjustment;
	$Hover.css( 'top', nDesiredHoverTop + 'px' );

	// see if the hover is cut off by the bottom of the window, and bump it up if neccessary
	var nTargetTopViewport = ( offset.top - nWindowScrollTop ) + nTopAdjustment;
	if ( nTargetTopViewport + $HoverBox.height() + 35 > nViewportHeight )
	{
		var nViewportAdjustment = ( $HoverBox.height() + 35 ) - ( nViewportHeight - nTargetTopViewport );

		// if the hover has the "in-game" block at the bottom, we need to have more space at the bottom of the hover
		//	so that the arrow will appear in the blue part of the hover.  This means the game info may be off-screen below.
		var bHaveInGameInfo = $HoverBox.find('.miniprofile_ingame').length > 0;
		var nHoverBoxBottomMinimum = ( bHaveInGameInfo ? 78 : 24 );	// the minimum amount of space we need below the arrow
		nViewportAdjustment = Math.min( $HoverBox.height() - nHoverBoxBottomMinimum, nViewportAdjustment );

		var nViewportAdjustedHoverTop = offset.top - nViewportAdjustment;
		$Hover.css( 'top', nViewportAdjustedHoverTop + 'px' );

		// arrow is normally offset 30pixels.  we move it down the same distance we moved the hover up, so it is "fixed" to where it was initially
		$HoverArrow.css( 'top', ( 30 + nDesiredHoverTop - nViewportAdjustedHoverTop ) + 'px' );
	}
	else
	{
		$HoverArrow.css( 'top', '' );
	}

	$Hover.hide();
	$Hover.css( 'visibility', '' );
}


/* Emoticon hovers */

function CEmoticonDelayedAJAXData( strEmoticonName, msDelayBeforeAJAX )
{
	CDelayedAJAXData.apply( this, [ 'economy/emoticonhover/' + strEmoticonName + '/jsonp.js', msDelayBeforeAJAX ]);
	this.m_strEmoticonName = strEmoticonName;
}

// subclass CDelayedAJAXData so we can request via JSONP
CEmoticonDelayedAJAXData.prototype = new CDelayedAJAXData;
CEmoticonDelayedAJAXData.prototype.constructor = CEmoticonDelayedAJAXData;

CEmoticonDelayedAJAXData.prototype.GetAJAXParams = function()
{
	return {
		url: 'https://community.fastly.steamstatic.com/' + this.m_strURL,
		dataType: 'jsonp',
		jsonpCallback: 'OnLoadEmoticon_' + this.m_strEmoticonName,	//consistent name for cachability
		cache: true,
		data: {l: 'english' }
	}
};

function InitEmoticonHovers()
{
	var $Hover = $J('<div/>', {'class': 'emoticon_hover'} );
	var $HoverContent = $J('<div/>', {'class': 'emoticon_hover_content'} );
	$Hover.append( $HoverContent, $J('<div/>', {'class': 'hover_arrow left emoticon_hover_arrow' } ), $J('<div/>', {'class': 'hover_arrow right emoticon_hover_arrow' } ) );
	$Hover.hide();

	var fnOneTimeEmoticonSetup = function() {
		$J(document.body).append( $Hover );
	};

	var fnReadKey = function ( $Element ) {
		if ( $Element.data('emoticon') )
		{
			return $Element.data('emoticon');
		}
		else if ( $Element.attr( 'src' ) )
		{
			var rgMatches = $Element.attr( 'src' ).match( 'emoticon/(.*)$' );
			if ( rgMatches && rgMatches[1] )
			{
				var strEmoticon = rgMatches[1];
				if ( strEmoticon.length > 1 )
				{
					if ( strEmoticon[0] == ':' )
						strEmoticon = strEmoticon.substr( 1 );
					if ( strEmoticon[ strEmoticon.length - 1 ] == ':' )
						strEmoticon = strEmoticon.substr( 0, strEmoticon.length - 1 );
				}
				return strEmoticon;
			}
		}

		return null;
	};

	var fnDataFactory = function( key )	{
		if ( fnOneTimeEmoticonSetup )
		{
			fnOneTimeEmoticonSetup();
			fnOneTimeEmoticonSetup = null;
		}

		return new CEmoticonDelayedAJAXData( key, 50 );
	};

	var rgCallbacks = BindAJAXHovers( $Hover, $HoverContent, {
		fnDataFactory: fnDataFactory,
		fnPositionHover: function( $Hover, $Target ) {
			PositionMiniprofileHover( $Hover, $Target, {
				bPreferRightSide: true,
				nPxArrowOverlap: 0
			} );
			//slide it down a little for emoticon option popup
			if ( $Target.hasClass('emoticon_option') )
				$Hover.css( 'top', parseInt( $Hover.css('top') ) + 5 );
		},
		fnReadKey: fnReadKey,
		strSelector: 'img.emoticon',
		strURLMatch: 'emoticonhover',
		nDelayBeforeShow: 50
	} );

	window.DismissEmoticonHover = rgCallbacks.fnCancelHover;
}

function V_EscapeRegExp( str )
{
	return str.replace( /[.*+?^${}()|[\]\\]/g, '\\$&' );
}

function V_EscapeHTML( str )
{
	return String(str).replace( /&/g, '&amp;' ).replace( /["]/g, '&quot;' ).replace( /[']/g, '&#39;' ).replace( /</g, '&lt;').replace( />/g, '&gt;');
}

function v_trim( str )
{
	if ( str.trim )
		return str.trim();
	else
	{
		return str.replace(/^\s+/, '').replace(/\s+$/, '');
	}
}

function V_ParseJSON( str )
{
	if ( typeof JSON == 'object' && JSON.parse )
		return JSON.parse( str );	// built-in / json2.js
	else
		str.evalJSON();				// prototype
}

function V_ToJSON( object )
{
	if ( typeof JSON == 'object' && JSON.stringify )
		return JSON.stringify( object );	// built-in / json2.js
	else
		Object.toJSON( object );				// prototype
}

function V_IsJSON( str )
{
	try
	{
		if( typeof JSON == 'object' && JSON.parse )
		{
			var o = JSON.parse(str);
			if ( o !== null )
				return true;

		} else {
			return str.isJSON();
		}
	}
	catch (e) { }
	return false;
}


function V_GetCookie( strCookieName )
{
	var rgMatches = document.cookie.match( '(^|; )' + strCookieName + '=([^;]*)' );
	if ( rgMatches && rgMatches[2] )
		return rgMatches[2];
	else
		return null;
}


function V_GetDecodedCookie( strCookieName )
{
	var value = V_GetCookie( strCookieName );
	return value && decodeURIComponent( value );
}

function V_SetCookie( strCookieName, strValue, expiryInDays, path )
{
	if ( !path )
		path = '/';

	var strDate = '';

	if( typeof expiryInDays != 'undefined' && expiryInDays )
	{
		var dateExpires = new Date();
		dateExpires.setTime( dateExpires.getTime() + 1000 * 60 * 60 * 24 * expiryInDays );
		strDate = '; expires=' + dateExpires.toGMTString();
	}

	document.cookie = strCookieName + '=' + strValue + strDate + ';path=' + path;
}

function _GetStorageFromCookie()
{
	var oStorage = {};

	var strStorageJSON = V_GetCookie( 'storage' );
	if ( strStorageJSON )
	{
		try {
			oStorage = V_ParseJSON(decodeURIComponent(strStorageJSON));
		}
		catch (e) {
			oStorage = {};
		}
	}

	return oStorage;
}

function BInsideIFrame()
{
	try
	{
		return window.self !== window.top;
	}
	catch( e )
	{
		return true;
	}
}

function SetValueLocalStorage( strPreferenceName, value )
{
	if ( !BInsideIFrame() && window.localStorage )
	{
		window.localStorage[strPreferenceName] = value;
	}
	else
	{
		var oStorage = _GetStorageFromCookie();

		oStorage[strPreferenceName] = value;

		V_SetCookie( 'storage', encodeURIComponent( V_ToJSON( oStorage ) ), 365 )
	}
}

function UnsetValueLocalStorage( strPreferenceName )
{
	if ( !BInsideIFrame() && window.localStorage )
	{
		delete window.localStorage[strPreferenceName];
	}
	else
	{
		var oStorage = _GetStorageFromCookie();

		delete oStorage[strPreferenceName];

		V_SetCookie( 'storage', encodeURIComponent( V_ToJSON( oStorage ) ), 365 )
	}
}

function GetValueLocalStorage( strPreferenceName, defaultValue )
{
	if ( !BInsideIFrame() && window.localStorage )
	{
		return window.localStorage[strPreferenceName] || defaultValue;
	}
	else
	{
		var oStorage = _GetStorageFromCookie();

		return oStorage[strPreferenceName] || defaultValue;
	}
}

function DynamicLink_PlayYouTubeVideoInline( elem, videoid )
{
	var el = $J(elem);
	var youtubeurl = location.protocol + '//www.youtube.com/embed/' + videoid + '?showinfo=0&autohide=1&fs=1&hd=1&modestbranding=1&rel=0&showsearch=0&wmode=direct&autoplay=1';
	var wrapper = $J( '<div/>', { 'class': 'dynamiclink_youtubeviewvideo' } );
	var embed_wrapper = $J( '<div/>', { 'class' : 'dynamiclink_youtubeviewvideoembedded', 'frameborder' : '0' } );
	var iframeContent = $J( '<iframe/>', { 'frameborder' : '0', src: youtubeurl, 'allowfullscreen': '' } );
	if ( el.length )
	{
		embed_wrapper.append( iframeContent );
		wrapper.append( embed_wrapper );
		el.after( wrapper );
		el.remove();
	}
}

function DynamicLink_PlayVimeoVideoInline( elem, videoid )
{
	var el = $J(elem);
	var videourl = 'https://player.vimeo.com/video/' + videoid + '?badge=0&autopause=0&autoplay=1&player_id=0';
	var wrapper = $J( '<div/>', { 'class': 'dynamiclink_youtubeviewvideo' } );
	var embed_wrapper = $J( '<div/>', { 'class' : 'dynamiclink_youtubeviewvideoembedded', 'frameborder' : '0' } );
	var iframeContent = $J( '<iframe/>', { 'frameborder' : '0', src: videourl, webkitallowfullscreen : '', mozallowfullscreen : '', allowfullscreen : '' } );
	if ( el.length )
	{
		embed_wrapper.append( iframeContent );
		wrapper.append( embed_wrapper );
		el.after( wrapper );
		el.remove();
	}
}

function DynamicLink_ShowSketchfabModelInline( elem, details )
{
	var url = "https://sketchfab.com/models/" + details.modelid + "/embed?autostart=1";
	var el = $J(elem);
	var wrapper = $J( '<div/>', { 'class' : 'dynamiclink_sketchfabmodelembedded', 'frameborder' : '0' } );
	var iframeContent = $J( '<iframe/>', { 'frameborder' : '0', "mozallowfullscreen" : true, "webkitallowfullscreen" : true, src: url } );
	if ( el.length )
	{
		wrapper.append( iframeContent );
		el.after( wrapper );
		el.remove();
	}
}

function ReplaceDynamicLink( id, strHTML )
{
	var el = $J('#'+id);
	if ( el.length && strHTML.length > 0 )
	{
		var newEl = $J( strHTML );
		el.after( newEl );
		el.remove();

		if ( typeof window['HandleNewDynamicLink'] === "function" )
		{
			HandleNewDynamicLink( newEl );
		}
	}
}

function ShowBannedDynamicLink( el )
{
	el = $J( el );
	if ( el.length > 0 )
	{
		var bannedContentURL = el.data( 'bannedurl' );
		var link = $J( "<a>", { href: bannedContentURL, text: bannedContentURL } );
		el.html( link );
		el.attr( 'onclick', '' );
	}
}



function CScrollOffsetWatcher( el, fnCallback )
{
	this.m_$Element = $J(el);
	this.nOffsetTop = this.m_$Element.offset().top;
	this.nBufferHeight = 500;

	this.nOffsetTopTrigger = this.nOffsetTop - this.nBufferHeight;

	this.fnOnHit = fnCallback;

	CScrollOffsetWatcher.RegisterWatcher( this );
}

CScrollOffsetWatcher.prototype.SetBufferHeight = function( nHeight )
{
	this.nBufferHeight = nHeight;
	this.Recalc();
};

CScrollOffsetWatcher.prototype.Recalc = function()
{
	this.nOffsetTop = this.m_$Element.offset().top;
	this.nOffsetTopTrigger = this.nOffsetTop - this.nBufferHeight;
};

CScrollOffsetWatcher.sm_rgWatchers = [];
CScrollOffsetWatcher.m_nTimeoutInitialLoad = 0;
CScrollOffsetWatcher.RegisterWatcher = function( Watcher )
{
	var bHadWatchers = CScrollOffsetWatcher.sm_rgWatchers.length > 0;

	// keep the list sorted by offset trigger
	var iInsertionPoint;
	for( iInsertionPoint = CScrollOffsetWatcher.sm_rgWatchers.length; iInsertionPoint > 0 ; iInsertionPoint-- )
	{
		if ( Watcher.nOffsetTopTrigger > CScrollOffsetWatcher.sm_rgWatchers[iInsertionPoint - 1].nOffsetTopTrigger )
			break;
	}
	CScrollOffsetWatcher.sm_rgWatchers.splice( iInsertionPoint, 0, Watcher );

	if ( !bHadWatchers )
	{
		$J(window).on( 'scroll.ScrollOffsetWatcher', CScrollOffsetWatcher.OnScroll );

		var nRecalcTimer = 0;
		$J(window).on( 'resize.ScrollOffsetWatcher', function() {
			if ( nRecalcTimer )
				window.clearTimeout( nRecalcTimer );
			nRecalcTimer = window.setTimeout( CScrollOffsetWatcher.ForceRecalc, 500 );
		} );
	}

	// use a 1ms timeout to roll these together as much as possible on page load
	if ( !CScrollOffsetWatcher.m_nTimeoutInitialLoad )
		CScrollOffsetWatcher.m_nTimeoutInitialLoad = window.setTimeout( function() { CScrollOffsetWatcher.OnScroll(); CScrollOffsetWatcher.m_nTimeoutInitialLoad = 0; }, 1 );
};

CScrollOffsetWatcher.ForceRecalc = function()
{
	for ( var i = 0; i < CScrollOffsetWatcher.sm_rgWatchers.length; i++ )
	{
		CScrollOffsetWatcher.sm_rgWatchers[i].Recalc();
	}

	CScrollOffsetWatcher.OnScroll();
};

CScrollOffsetWatcher.OnScroll = function()
{
	var supportPageOffset = window.pageYOffset !== undefined;
	var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");

	var nScrollY = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
	var nOffsetBottom = nScrollY + window.innerHeight;

	for( let i = CScrollOffsetWatcher.sm_rgWatchers.length - 1; i >= 0; i-- )
	{
		var Watcher = CScrollOffsetWatcher.sm_rgWatchers[i];
		if ( nOffsetBottom > Watcher.nOffsetTopTrigger )
		{
			// make sure the page hasn't changed and we really need to show content
			Watcher.Recalc();
			if ( nOffsetBottom > Watcher.nOffsetTopTrigger )
			{
				Watcher.fnOnHit();
				CScrollOffsetWatcher.sm_rgWatchers.splice( i, 1 );
			}
		}
	}

	if ( CScrollOffsetWatcher.sm_rgWatchers.length === 0 )
	{
		$J(window).off( 'scroll.ScrollOffsetWatcher' );
		$J(window).off( 'resize.ScrollOffsetWatcher' );
	}
};

function LoadImageGroupOnScroll( elTarget, strGroup )
{
	var $Element = $J( '#' + elTarget );
	if ( $Element.length )
		new CScrollOffsetWatcher( $Element, function() { LoadDelayedImages(strGroup); } );
}

function LoadDelayedImages( group, bForce )
{
	if ( ( typeof g_rgDelayedLoadImages != 'undefined' && g_rgDelayedLoadImages[group] ) || bForce )
	{
		$J('[data-delayed-image-group=' + group + ']').each( function()
		{
			$J(this).attr('src', $J(this).attr('data-delayed-image') );
		});

		delete g_rgDelayedLoadImages[group];
	}
}

WebStorage = {
	GetLocal: function ( key, bSessionOnly )
	{
		var type = ( bSessionOnly ) ? 'session' : 'local';

		if ( !window[type + 'Storage'] )
			return WebStorage.GetCookie( key );

		var storage = window[type + 'Storage'];
		var value;
		try {
			value = storage.getItem(key);
		} catch(err) {
			// storage.getItem can throw SecurityError based on user's browser setting.
			value = null;
		}

		try {
			value = V_ParseJSON( value );
		} catch(err){
			return null;
		}

		if( value == null )
		{
			// Check if we have the value stored in a cookie instead. If so, move that to LS and remove the cookie
			value = V_GetCookie( key );
			if( value != null )
			{
				WebStorage.SetLocal( key, value, bSessionOnly );
				WebStorage.ClearCookie( key );
			}
		}
		return value;
	},
	GetLocalSession: function( key )
	{
		return WebStorage.GetLocal( key, true );
	},
	SetLocal: function ( key, value, bSessionOnly )
	{
		var type = ( bSessionOnly ) ? 'session' : 'local';

		if ( !window[type + 'Storage'] )
			return WebStorage.SetCookie( key, value, ( bSessionOnly ) ? null : 365 );

		value = V_ToJSON( value );

		var storage = window[type + 'Storage'];
		storage.setItem( key, value );
	},
	SetLocalSession: function( key, value )
	{
		WebStorage.SetLocal( key, value, true );
	},
	GetCookie: function( key )
	{
		var keyValue = V_GetCookie( key );
		if ( keyValue )
			keyValue = decodeURIComponent( keyValue );

		return V_IsJSON( keyValue ) ? V_ParseJSON( keyValue ) : keyValue;
	},
	SetCookie: function( key, value, duration )
	{
		value = encodeURIComponent( V_ToJSON( value ) );
		V_SetCookie( key, value, duration );
	},
	ClearCookie: function( key )
	{
		WebStorage.SetCookie(key, null, -1 );
	},
	RemoveLocal : function ( key, bSessionOnly )
	{
		var type = ( bSessionOnly ) ? 'session' : 'local';

		if ( !window[type + 'Storage'] )
			return WebStorage.ClearCookie( key );

		var storage = window[type + 'Storage'];

		storage.removeItem( key );
	}
};

// takes an integer
function v_numberformat( n, decimals, strDecimalSymbol, strThousandsSeperator )
{
	if ( typeof strDecimalSymbol == 'undefined' && typeof strThousandsSeperator == 'undefined' && typeof Number != 'undefined' && typeof Number.toLocaleString != 'undefined' )
	{
		var options = {};
		if ( typeof decimals != 'undefined' && decimals !== 0 )
		{
			options.minimumFractionDigits = decimals;
			options.maximumFractionDigits = decimals;
		}

		var num = new Number(n);
		try
		{
			return num.toLocaleString( false, options );
		}
		catch( e )
		{
			return num.toString();
		}
	}

	var str = '' + ( n ? n : 0 );
	var len = str.indexOf( '.' );
	if ( len == -1 )
		len = str.length;
	var out = '';
	for ( var i = 0; i < len; i++ )
	{
		var c = str.charAt(i);
		out += c;
		if ( i < len - 1 && (len - i - 1) % 3 == 0 && c != '-' )
			out += ( typeof strThousandsSeperator == 'undefined' ? ',' : strThousandsSeperator );
	}
	if ( ( len < str.length || decimals ) && typeof decimals != 'undefined' && decimals !== 0 )
	{
		len++;
		out += ( typeof strDecimalSymbol == 'undefined' ? ',' : strDecimalSymbol );
		for ( var i = 0; i < ( decimals ? decimals : str.length - len ); i++ )
		{
			if ( len + i < str.length )
				out += str.charAt( len + i );
			else
				out += '0';
		}
	}

	return out;
}


function v_shuffle( rgArray )
{
	for ( var i = 0; i < rgArray.length; i++ )
	{
		var iSwap = Math.floor( Math.random() * ( rgArray.length - i ) + i );
		if ( iSwap != i )
		{
			var temp = rgArray[iSwap];
			rgArray[iSwap] = rgArray[i];
			rgArray[i] = temp;
		}
	}

	return rgArray;
}


function UpdateFormattedNumber( element, delta )
{
	var $Element = $J(element);
	$Element.text( v_numberformat( parseInt( $Element.text().replace( /,/, '' ) ) + delta ) );
}

function RateAnnouncement( rateURL, gid, bVoteUp, clanID )
{
	if ( bVoteUp && $J('#VoteUpBtn_' + gid).hasClass( "btn_active" ) )
	{
		return;
	}
	if ( !bVoteUp && $J('#VoteDownBtn_' + gid).hasClass( "btn_active" ) )
	{
		return;
	}

	rateURL = rateURL + gid;
	$J.post( rateURL, {
			'voteup' : bVoteUp,
			'clanid' : clanID,
			'sessionid' : g_sessionID
		}
	).done( function( json ) {

		var votesUpCount = $J('#VotesUpCount_' + gid);
		if ( votesUpCount )
		{
			var increment = 0;
			if ( bVoteUp )
			{
				increment = 1;
			}
			else if ( $J('#VoteUpBtn_' + gid).hasClass( 'btn_active' ) )
			{
				increment = -1;
			}
			UpdateFormattedNumber( votesUpCount, increment );

			if ( parseInt( votesUpCount.html().replace(/,/g, '') ) == 0 )
			{
				$J('#VotesUpCountContainer_' + gid).hide();
			}
			else
			{
				$J('#VotesUpCountContainer_' + gid).show();
			}
		}

		if ( bVoteUp )
		{
			$J('#VoteUpBtn_' + gid).addClass( "btn_active" );
			$J('#VoteDownBtn_' + gid).removeClass( "btn_active" );
		}
		else
		{
			$J('#VoteDownBtn_' + gid).addClass( "btn_active" );
			$J('#VoteUpBtn_' + gid).removeClass( "btn_active" );
		}



	} )
	.fail( function( jqxhr ) {
		var responseJSON = jqxhr.responseText.evalJSON();
		switch ( responseJSON.success )
		{
			case 21:
				ShowAlertDialog( 'Error', 'You must be logged in to perform that action.' );
				break;
			case 24:
				ShowAlertDialog( 'Error',
					'Your account does not meet the requirements to use this feature. <a class="whiteLink" href="https://help.steampowered.com/en/wizard/HelpWithLimitedAccount" target="_blank" rel="noreferrer">Visit Steam Support</a> for more information.'
				);
				break;
			case 15:
				ShowAlertDialog( 'Error', 'You do not have permission to perform that action.' );
				break;
			default:
				ShowAlertDialog( 'Error', 'There was an error encountered while processing your request: ' + responseJSON.success );
				break;
		}
	} );
	return false;
}

function GetResponsiveHeaderFixedOffsetAdjustment()
{
	// for responsive pages - we need to adjust for the menu
	var $ResponsiveHeader = $J('.responsive_header:visible');
	if ( $ResponsiveHeader.length && $ResponsiveHeader.css('position') == 'fixed' )
		return $ResponsiveHeader.outerHeight();
	else
		return 0;
}

/* Scroll to an element if it's not already in view.  If it's at the bottom of the viewport, then it will be
 scrolled to the top if less than nRequiredPixelsToShow are visible (defaults to the height of the element)
 */
function ScrollToIfNotInView( elem, nRequiredPixelsToShow, nSpacingBefore, nAnimationSpeed )
{
	var $Elem = $JFromIDOrElement(elem);

	if ( typeof nSpacingBefore == 'undefined' )
		nSpacingBefore = 0;

	// for responsive pages - we need to adjust for the menu
	nSpacingBefore += GetResponsiveHeaderFixedOffsetAdjustment();

	var elemTop = $Elem.offset().top;
	var nViewportOffsetTop = elemTop - $J(window).scrollTop();
	var bNeedToScroll = false;
	if ( nViewportOffsetTop < 0 )
	{
		bNeedToScroll = true;
	}
	else
	{
		if ( !nRequiredPixelsToShow )
			nRequiredPixelsToShow = $Elem.outerHeight();

		var nViewportOffsetBottom = nViewportOffsetTop + nRequiredPixelsToShow;

		if ( nViewportOffsetBottom > $J(window).height() )
			bNeedToScroll = true;
	}

	if ( bNeedToScroll )
	{
		if ( nSpacingBefore )
			nViewportOffsetTop -= nSpacingBefore;

		if ( typeof nAnimationSpeed != 'undefined' )
			$J('html, body' ).animate( {scrollTop: nViewportOffsetTop}, nAnimationSpeed );
		else
			window.scrollBy( 0, nViewportOffsetTop );
	}
}


function CAjaxInfiniteScrollingControls( rgSearchData, url )
{
	this.m_strActionURL = null;
	this.m_cPageSize = null;
	this.m_strElementPrefix = "";
	this.m_strClassPrefix = "";
	this.m_StrRowsId = "";
	this.m_rgStaticParams = null;

	this.m_bLoading = false;

	this.m_fnPreRequestHandler = null;
	this.m_fnResponseHandler = null;
	this.m_fnPageChangingHandler = null;
	this.m_fnPageChangedHandler = null;
	this.m_fnRawScrollHandler = null;

	this.m_LoadingDialog = null;
	this.m_bRestoringScrollTop = false;

	this.m_strActionURL = url;

	this.m_strQuery = rgSearchData['query'];
	this.m_cTotalCount = rgSearchData['total_count'];
	this.m_iCurrentPage = rgSearchData['page'] || 0;
	this.m_cPageSize = rgSearchData['pagesize'];
	this.m_cMaxPages = Math.ceil( this.m_cTotalCount / this.m_cPageSize );

	this.m_iTriggerHeight = rgSearchData['trigger_height'] || 750;	// How many px from the bottom should we trigger a page load.

	this.m_iCooldownTime = 0;       // ms from the epoch when we can next update.
	this.m_iCooldownInterval = 200; // Minimum time (in ms) between updates

	if ( rgSearchData['prefix'] )
		this.m_strElementPrefix = rgSearchData['prefix'];

	// Rows element name that's updated when we scroll.
	this.m_StrRowsId = this.m_strElementPrefix + 'Rows';

	if ( rgSearchData['class_prefix'] )
		this.m_strClassPrefix = rgSearchData['class_prefix'];

	// We want our handlers to get a copy of our infiniteScroll object when they're called, so we save it
	// into a var and build a closure around it.
	var thisControl = this;

	// By saving the bound scroll-handler to a variable, we can then unload it when our search
	// options are upadated.
	this.m_fnRawScrollHandler = function() { thisControl.OnScroll() };
	$J(document).scroll( this.m_fnRawScrollHandler );

	// If we have a _scroll_top element, then set our OnUnload handler.
	if ( $J( "#" + this.m_strElementPrefix + '_scroll_top').length )
		window.addEventListener('beforeunload', function() { thisControl.OnUnload() } );

	// Optional: Dynamic data returned from the last request, to provided to the next request. Lets them
	// being stringed together with some memory
	this.m_rgDynamicData = null;

	this.RestoreScrollTop( true );
}

CAjaxInfiniteScrollingControls.prototype.DoneRestoreScrollTop = function()
{
	this.ClearLoadingDialog();
	this.m_bRestoringScrollTop = false;
};

CAjaxInfiniteScrollingControls.prototype.ClearLoadingDialog = function()
{
	if ( this.m_LoadingDialog )
	{
		this.m_LoadingDialog.Dismiss();
		this.m_LoadingDialog = null;
	}
};

// Stops this infinite scroll handler.
CAjaxInfiniteScrollingControls.prototype.Stop = function()
{
	// Clear loading notifiers.
	this.ClearLoadingDialog();
	this.HideThrobber();

	// Clear scheduled scroll, if there is one.
	if ( this.m_oScheduledScroll )
		clearTimeout( this.m_oScheduledScroll );

	// Unhook scroll handler.
	$J(document).off( "scroll", this.m_fnRawScrollHandler );

	// TODO: Do we need to call or clear BeforeUnload?
};

CAjaxInfiniteScrollingControls.prototype.RestoreScrollTop = function( bForce )
{
	this.m_bRestoringScrollTop |= bForce;
	if ( !this.m_bRestoringScrollTop )
	{
		return;
	}
	var scrollTopPrevious = parseInt( $J( "#" + this.m_strElementPrefix + '_scroll_top').val() );
	if ( scrollTopPrevious )
	{
		var viewport = document.viewport.getDimensions(); // Gets the viewport as an object literal
		var windowHeight = viewport.height; // Usable window height
		var bodyHeight = $(document.body).getHeight();

		// done?
		if ( scrollTopPrevious < bodyHeight - windowHeight )
		{
			this.DoneRestoreScrollTop();
			window.scrollTo( 0, scrollTopPrevious );
		}
		else
		{
			if ( this.m_LoadingDialog == null )
			{
				this.m_LoadingDialog = ShowBlockingWaitDialog( 'Please Wait', 'Returning to where you were last on this page...' );
			}
			window.scrollTo( 0, scrollTopPrevious );
		}
	}
};

CAjaxInfiniteScrollingControls.prototype.OnUnload = function()
{
	var scrollOffset = document.viewport.getScrollOffsets();
	var scrollTop = scrollOffset.top;
	$J( "#" + this.m_strElementPrefix + '_scroll_top').val( scrollTop );
};

CAjaxInfiniteScrollingControls.prototype.OnScroll = function()
{
	if ( this.m_bLoading )
		return;

	var iNow = new Date().getTime();

	// How soon can we scroll?
	var iScrollWait = this.m_iCooldownTime - iNow;

	// If we haven't reached our cooldown, do nothing.
	if ( iScrollWait > 0 )
	{
		// console.log("InfiniScrolling too fast; engaging throttle");

		// Schedule a scroll event for when they would be allowed to scroll. Without this, the
		// user needs to jiggle their scrollbar.
		if ( this.m_oScheduledScroll == null )
		{
			this.m_oScheduledScroll = setTimeout( this.m_fnRawScrollHandler, iScrollWait );
			this.ShowThrobber(); // Show throbber while waiting to begin load.
		}

		return;
	}

	this.m_oScheduledScroll = null;

	// The bottom of our screen is equal to how far we've scrolled, plus the height of our window.
	var nCurrentScroll = $J(window).scrollTop() + $J(window).height();

	var rows = $J('#' + this.m_StrRowsId);
	var offset = rows.offset();

	// The bottom of our content is the height of our results, plus its offset from the top of the page.
	// We want to trigger a load this.m_iTriggerHeight before the user sees that.
	var nTriggerPoint = rows.height() + offset.top - this.m_iTriggerHeight;

	if ( nCurrentScroll >  nTriggerPoint )
	{
		this.m_iCooldownTime = iNow + this.m_iCooldownInterval;

		this.NextPage();
	}
};

CAjaxInfiniteScrollingControls.prototype.GetActionURL = function( action )
{
	var url = this.m_strActionURL + action + '/';
	return url;
};

CAjaxInfiniteScrollingControls.prototype.SetPreRequestHandler = function( fnHandler )
{
	this.m_fnPreRequestHandler = fnHandler;
};

CAjaxInfiniteScrollingControls.prototype.SetResponseHandler = function( fnHandler )
{
	this.m_fnResponseHandler = fnHandler;
};

CAjaxInfiniteScrollingControls.prototype.SetPageChangingHandler = function ( fnHandler )
{
	this.m_fnPageChangingHandler = fnHandler;
};

CAjaxInfiniteScrollingControls.prototype.SetPageChangedHandler = function ( fnHandler )
{
	this.m_fnPageChangedHandler = fnHandler;
};

CAjaxInfiniteScrollingControls.prototype.SetStaticParameters = function ( rgParams )
{
	this.m_rgStaticParams = rgParams;
};

CAjaxInfiniteScrollingControls.prototype.OnAJAXComplete = function()
{
	this.m_bLoading = false;
};

CAjaxInfiniteScrollingControls.prototype.NextPage = function()
{
	if ( this.m_iCurrentPage < this.m_cMaxPages - 1 ) {
		this.LoadPage( this.m_iCurrentPage + 1 );
	}
	else
	{
		// We're reached the end of our results!
		this.Stop();
	}

};

CAjaxInfiniteScrollingControls.prototype.LoadPage = function( iPage, bForce )
{
	if ( typeof( bForce )== 'undefined' || !bForce )
	{
		if ( this.m_bLoading || iPage >= this.m_cMaxPages || iPage < 0 )
		{
			return false;
		}
		else if ( iPage == this.m_iCurrentPage )
		{
			this.RestoreScrollTop( false );
		}
	}

	var params = {
		query: this.m_strQuery,
		start: this.m_cPageSize * iPage,
		count: this.m_cPageSize,
		dynamic_data: this.m_rgDynamicData,
	};

	if ( this.m_rgStaticParams != null )
	{
		for ( var sParamName in this.m_rgStaticParams )
		{

			if ( typeof sParamName != "string" )
				continue;

			var typeOfParam = typeof this.m_rgStaticParams[sParamName];

			if ( typeOfParam != "string" && typeOfParam != "number" && typeOfParam != "boolean" )
				continue;

			params[sParamName] = this.m_rgStaticParams[sParamName];
		}
	}

	if ( this.m_fnPageChangingHandler != null )
		this.m_fnPageChangingHandler( iPage );

	if ( this.m_fnPreRequestHandler != null )
		this.m_fnPreRequestHandler( params );

	this.ShowThrobber();

	this.m_bLoading = true;

	new Ajax.Request( this.GetActionURL( '' ), {
		method: 'get',
		parameters: params,
		onSuccess: this.OnResponseRenderResults.bind( this ),
		onComplete: this.OnAJAXComplete.bind( this )
	});

	return true;
};

CAjaxInfiniteScrollingControls.prototype.GetThrobber = function() {
	// NB: This is using prototype, *not* jQuery, hence the lack of 'J'.
	return $(this.m_strElementPrefix + '_loading');
};

CAjaxInfiniteScrollingControls.prototype.HideThrobber = function() {
	var throbber = this.GetThrobber();

	if (throbber)
		throbber.hide();
};

CAjaxInfiniteScrollingControls.prototype.ShowThrobber = function() {
	var throbber = this.GetThrobber();

	if (throbber)
		throbber.show();
};

CAjaxInfiniteScrollingControls.prototype.OnResponseRenderResults = function( transport )
{

	if ( transport.responseJSON && transport.responseJSON.success )
	{
		this.HideThrobber();

		if ( typeof RecordAJAXPageView !== "undefined" )
		{
			RecordAJAXPageView( transport.request.url );
		}

		var response = transport.responseJSON;
		this.m_cTotalCount = response.total_count;
		this.m_cMaxPages = Math.ceil( response.total_count / this.m_cPageSize );
		this.m_iCurrentPage = Math.floor( response.start / this.m_cPageSize );

		if ( this.m_iCurrentPage != 0 && this.m_cTotalCount <= response.start )
		{
			// this page is no longer valid, flip back a page (deferred so that the AJAX handler exits and reset m_bLoading)
			this.DoneRestoreScrollTop();
			return;
		}

		var elResults = $(this.m_StrRowsId);

		elResults.insert( response.results_html );

		this.m_rgDynamicData = ( response.dynamic_data ) ? response.dynamic_data : null;

		if ( this.m_fnResponseHandler != null )
		{
			this.m_fnResponseHandler( response );
		}

		if ( this.m_fnPageChangedHandler != null )
			this.m_fnPageChangedHandler( this.m_iCurrentPage, elResults );

		this.m_bLoading = false;
		if ( this.m_iCurrentPage < this.m_cMaxPages - 1 )
		{
			this.RestoreScrollTop( false );
		}
		else
		{
			this.DoneRestoreScrollTop();
		}
	}
	else
	{
		this.DoneRestoreScrollTop();
	}
};

function CAjaxPagingControls( rgSearchData, url )
{
	this.m_strActionURL = null;
	this.m_cPageSize = null;
	this.m_strElementPrefix = "";
	this.m_strClassPrefix = "";
	this.m_rgStaticParams = null;

	this.m_strQuery = null;
	this.m_cTotalCount = 0;
	this.m_iCurrentPage = 0;
	this.m_cMaxPages = 0;
	this.m_bLoading = false;

	this.m_fnPreRequestHandler = null;
	this.m_fnResponseHandler = null;
	this.m_fnPageChangingHandler = null;
	this.m_fnPageChangedHandler = null;


	this.m_strActionURL = url;

	this.m_strQuery = rgSearchData['query'];
	this.m_cTotalCount = rgSearchData['total_count'];
	this.m_iCurrentPage = 0;
	this.m_cPageSize = rgSearchData['pagesize'];
	this.m_cMaxPages = Math.ceil( this.m_cTotalCount / this.m_cPageSize );
	this.m_strDefaultAction = typeof rgSearchData['action'] != 'undefined' ? rgSearchData['action'] : 'render';
	this.m_rgAvailableSizes = [];

	if ( rgSearchData['prefix'] )
		this.m_strElementPrefix = rgSearchData['prefix'];

	if ( rgSearchData['class_prefix'] )
		this.m_strClassPrefix = rgSearchData['class_prefix'];

	$(this.m_strElementPrefix + '_btn_prev').observe( 'click', this.PrevPage.bind( this ) );
	$(this.m_strElementPrefix + '_btn_next').observe( 'click', this.NextPage.bind( this ) );
	var elPageSizeCtn = $(this.m_strElementPrefix + '_paging_size_ctn');
	for( var i = 0; elPageSizeCtn && i < $( elPageSizeCtn ).children.length; ++i )
	{
		$(this.m_strElementPrefix + '_paging_size_' + i ).observe( 'click', this.OnChangeSize.bind( this ) );

		this.m_rgAvailableSizes.push( $( elPageSizeCtn ).children[i].dataset.size );
	}

	this.UpdatePagingDisplay();
}

CAjaxPagingControls.prototype.GetActionURL = function( action )
{
	var url = action ? this.m_strActionURL + action + '/' : this.m_strActionURL;
	return url;
};

CAjaxPagingControls.prototype.SetPreRequestHandler = function( fnHandler )
{
	this.m_fnPreRequestHandler = fnHandler;
};

CAjaxPagingControls.prototype.SetResponseHandler = function( fnHandler )
{
	this.m_fnResponseHandler = fnHandler;
};

CAjaxPagingControls.prototype.SetPageChangingHandler = function ( fnHandler )
{
	this.m_fnPageChangingHandler = fnHandler;
};

CAjaxPagingControls.prototype.SetPageChangedHandler = function ( fnHandler )
{
	this.m_fnPageChangedHandler = fnHandler;
};

CAjaxPagingControls.prototype.SetStaticParameters = function ( rgParams )
{
	this.m_rgStaticParams = rgParams;
};

CAjaxPagingControls.prototype.OnAJAXComplete = function()
{
	this.m_bLoading = false;
};

CAjaxPagingControls.prototype.OnChangeSize = function( event )
{
	if( event.target && event.target.dataset.size != this.m_cPageSize )
	{
		this.m_cPageSize = event.target.dataset.size;
		this.GoToPage( 0, true );
	}
};

CAjaxPagingControls.prototype.NextPage = function()
{
	if ( this.m_iCurrentPage < this.m_cMaxPages - 1 )
		this.GoToPage( this.m_iCurrentPage + 1 );
};

CAjaxPagingControls.prototype.PrevPage = function()
{
	if ( this.m_iCurrentPage > 0 )
		this.GoToPage( this.m_iCurrentPage - 1 );
};

CAjaxPagingControls.prototype.GoToPage = function( iPage, bForce )
{
	if ( typeof( bForce )== 'undefined' || !bForce )
	{
		if ( this.m_bLoading || iPage >= this.m_cMaxPages || iPage < 0 || iPage == this.m_iCurrentPage )
			return false;
	}

	var params = {
		query: this.m_strQuery,
		start: this.m_cPageSize * iPage,
		count: this.m_cPageSize
	};

	if ( this.m_rgStaticParams != null )
	{
		for ( var sParamName in this.m_rgStaticParams )
		{
			if ( typeof sParamName != "string" )
				continue;

			params[sParamName] = this.m_rgStaticParams[sParamName];
		}
	}

	if ( this.m_fnPageChangingHandler != null )
		this.m_fnPageChangingHandler( iPage );

	if ( this.m_fnPreRequestHandler != null )
		this.m_fnPreRequestHandler( params );

	this.m_bLoading = true;
	new Ajax.Request( this.GetActionURL( this.m_strDefaultAction ), {
		method: 'get',
		parameters: params,
		onSuccess: this.OnResponseRenderResults.bind( this ),
		onComplete: this.OnAJAXComplete.bind( this )
	});

	return true;
};

CAjaxPagingControls.prototype.OnResponseRenderResults = function( transport )
{
	if ( transport.responseJSON && transport.responseJSON.success )
	{
		if ( typeof RecordAJAXPageView !== "undefined" )
		{
			RecordAJAXPageView( transport.request.url );
		}

		var response = transport.responseJSON;
		this.m_cTotalCount = response.total_count;
		this.m_cMaxPages = Math.ceil( response.total_count / this.m_cPageSize );
		this.m_iCurrentPage = Math.floor( response.start / this.m_cPageSize );

		if ( this.m_iCurrentPage != 0 && this.m_cTotalCount <= response.start )
		{
			// this page is no longer valid, flip back a page (deferred so that the AJAX handler exits and reset m_bLoading)
			this.GoToPage.bind( this, this.m_iCurrentPage - 1 ).defer();

			return;
		}

		var elResults = $(this.m_strElementPrefix + 'Rows');

		if( elResults)
			elResults.update( response.results_html );

		if ( this.m_fnResponseHandler != null )
			this.m_fnResponseHandler( response );

		this.UpdatePagingDisplay();

		ScrollToIfNotInView( $(this.m_strElementPrefix + 'Table'), 40 );
	}
};

CAjaxPagingControls.prototype.UpdatePagingDisplay = function()
{
	var elemNoResults = $(this.m_strElementPrefix + '_no_results');
	if ( this.m_cTotalCount == 0 )
	{
		$(this.m_strElementPrefix + '_ctn').hide();
		if ( elemNoResults )
			elemNoResults.show();
	}
	else
	{
		$(this.m_strElementPrefix + '_ctn').show();
		if ( elemNoResults )
			elemNoResults.hide();

		$(this.m_strElementPrefix + '_total').update( v_numberformat( this.m_cTotalCount ) );
		$(this.m_strElementPrefix + '_start').update( v_numberformat( this.m_iCurrentPage * this.m_cPageSize + 1 ) );
		$(this.m_strElementPrefix + '_end').update( Math.min( ( this.m_iCurrentPage + 1 ) * this.m_cPageSize, this.m_cTotalCount ) );
	}

		if( this.m_rgAvailableSizes && this.m_rgAvailableSizes.length > 0 )
	{
		if( this.m_cTotalCount <= this.m_rgAvailableSizes[0] )
		{
			$(this.m_strElementPrefix + '_per_page_ctn').hide();
		}
		else
		{
			$(this.m_strElementPrefix + '_per_page_ctn').show();
		}
	}

	if ( this.m_cMaxPages <= 1 )
	{
		$(this.m_strElementPrefix + '_controls').hide();
	}
	else
	{
		$(this.m_strElementPrefix + '_controls').show();
		if ( this.m_iCurrentPage > 0 )
			$(this.m_strElementPrefix + '_btn_prev').removeClassName('disabled');
		else
			$(this.m_strElementPrefix + '_btn_prev').addClassName('disabled');

		if ( this.m_iCurrentPage < this.m_cMaxPages - 1 )
			$(this.m_strElementPrefix + '_btn_next').removeClassName('disabled');
		else
			$(this.m_strElementPrefix + '_btn_next').addClassName('disabled');

		var elPageLinks = $(this.m_strElementPrefix + '_links');
		elPageLinks.update('');
		// we always show first, last, + 3 page links closest to current page
		var cPageLinksAheadBehind = 2;
		var firstPageLink = Math.max( this.m_iCurrentPage - cPageLinksAheadBehind, 1 );
		var lastPageLink = Math.min( this.m_iCurrentPage + (cPageLinksAheadBehind*2) + ( firstPageLink - this.m_iCurrentPage ), this.m_cMaxPages - 2 );

		if ( lastPageLink - this.m_iCurrentPage < cPageLinksAheadBehind )
			firstPageLink = Math.max( this.m_iCurrentPage - (cPageLinksAheadBehind*2) + ( lastPageLink - this.m_iCurrentPage ), 1 );

		this.AddPageLink( elPageLinks, 0 );
		if ( firstPageLink != 1 )
			elPageLinks.insert( ' ... ' );

		for ( var iPage = firstPageLink; iPage <= lastPageLink; iPage++ )
		{
			this.AddPageLink( elPageLinks, iPage );
		}

		if ( lastPageLink != this.m_cMaxPages - 2 )
			elPageLinks.insert( ' ... ' );
		this.AddPageLink( elPageLinks, this.m_cMaxPages - 1 );
	}

		if( this.m_rgAvailableSizes.indexOf( this.m_cPageSize ) > -1 )
	{
		for( var i = 0; i < this.m_rgAvailableSizes.length; ++ i )
		{
			var elSizeItem = $(this.m_strElementPrefix + '_paging_size_' + i );
			if( elSizeItem.dataset.size == this.m_cPageSize )
			{
				elSizeItem.addClassName( 'size_selected' );
			}
			else
			{
				elSizeItem.removeClassName( 'size_selected' );
			}
		}
	}

	if ( this.m_fnPageChangedHandler != null )
		this.m_fnPageChangedHandler( this.m_iCurrentPage );
};

CAjaxPagingControls.prototype.AddPageLink = function( elPageLinks, iPage )
{
	var el = new Element( 'span', {'class': ( this.m_strClassPrefix != "" ? this.m_strClassPrefix : this.m_strElementPrefix ) + '_paging_pagelink' } );
	el.update( (iPage + 1) + ' ' );

	if ( iPage == this.m_iCurrentPage )
		el.addClassName( 'active' );
	else
		el.observe( 'click', this.GoToPage.bind( this, iPage ) );

	elPageLinks.insert( el );
};


function CSlider( $Container, $Grabber, args )
{
	this.m_$Container = $Container;
	this.m_$Grabber = $Grabber || $Container.find('.handle');
	this.m_nMinVal = args.min || 0;
	this.m_nMaxVal = args.max || 100;
	this.m_nIncrement = args.increment || 1;
	this.m_nValue = args.value || 0;
	this.m_fnOnChange = args.fnOnChange || function( value, bInDrag ) {};

	this.m_$Grabber.css( 'position', 'absolute' );
	this.CalcRatios();
	this.SetValue( this.m_nValue );

	var fnGetPageX = function( event )
	{
		if ( event.type.indexOf( 'touch' ) == 0 )
		{
			var TouchEvent = event.originalEvent;
			var rgTouches = TouchEvent ? TouchEvent.touches : null;
			if ( !rgTouches || rgTouches.length < 1 )
				return event.pageX || 0;	//probably wrong
			return rgTouches[0].pageX || 0;
		}
		else
		{
			return event.pageX || 0;
		}
	};

	var _this = this;
	this.m_$Container.on( 'mousedown touchstart', function( event ) {
		_this.CalcRatios();

		if ( !_this.m_$Grabber.is( event.target ) )
		{
			// jump the grabber to this position and start the drag
			var nPosition = fnGetPageX( event ) - _this.m_$Container.offset().left;
			// we want the grabber centered under the mosue if possible
			nPosition -= Math.floor( _this.m_$Grabber.width() / 2 );
			var nNewPosition = Math.min( Math.max( nPosition, 0 ), _this.m_nWidth );

			_this.m_$Grabber.css('left', nNewPosition + 'px' );
			_this.m_nValue = nNewPosition / _this.m_flRatio;
			if ( _this.m_nIncrement > 1 && _this.m_nValue < _this.m_nMaxVal ) {
				//_this.m_nValue += _this.m_nIncrement - 1;
				_this.m_nValue = parseInt(_this.m_nValue / _this.m_nIncrement) * _this.m_nIncrement;
			}

			_this.m_fnOnChange( _this.m_nValue, true );
		}
		var nInitialPosition = parseInt( _this.m_$Grabber.css('left') );
		var nStartDragX = fnGetPageX( event );

		$J(document).on( 'mousemove.CSlider touchmove.CSlider', function( event ) {
			var nDelta = fnGetPageX( event ) - nStartDragX;

			var nNewPosition = Math.min( Math.max( nInitialPosition + nDelta, 0 ), _this.m_nWidth );

			_this.m_$Grabber.css('left', nNewPosition + 'px' );
			_this.m_nValue = nNewPosition / _this.m_flRatio;
			if ( _this.m_nIncrement > 1  && _this.m_nValue < _this.m_nMaxVal ) {
				//_this.m_nValue += _this.m_nIncrement - 1;
				_this.m_nValue = parseInt(_this.m_nValue / _this.m_nIncrement) * _this.m_nIncrement;
			}

			_this.m_fnOnChange( _this.m_nValue, true );
		});
		$J(document).on( 'mouseup.CSlider touchend.CSlider', function( event ) {
			$J(document).off('.CSlider');
			_this.m_fnOnChange( _this.m_nValue, false );
		});

		event.preventDefault();
	});
}

CSlider.prototype.CalcRatios = function()
{
	var nGrabberWidth = this.m_$Grabber.width();
	this.m_nWidth = this.m_$Container.width() - nGrabberWidth;

	this.m_flRatio = this.m_nWidth / ( this.m_nMaxVal - this.m_nMinVal );
};

CSlider.prototype.SetValue = function( nValue, nAnimationSpeed )
{
	this.m_nValue = Math.min( Math.max( nValue, this.m_nMinVal ), this.m_nMaxVal );

	var nNewPosition = Math.floor( ( this.m_nValue - this.m_nMinVal ) * this.m_flRatio );

	this.m_$Grabber.stop();
	if ( nAnimationSpeed )
		this.m_$Grabber.animate( {left: nNewPosition }, nAnimationSpeed );
	else
		this.m_$Grabber.css( 'left',  nNewPosition + 'px' );
};

CSlider.prototype.GetValue = function()
{
	return this.m_nValue;
};

CSlider.prototype.GetMin = function()
{
	return this.m_nMinVal;
};

CSlider.prototype.GetMax = function()
{
	return this.m_nMaxVal;
};

CSlider.prototype.SetRange = function( nMinVal, nMaxVal, nValue )
{
	this.m_nMinVal = nMinVal;
	this.m_nMaxVal = nMaxVal;
	if ( typeof nValue != 'undefined' )
		this.m_nValue = nValue;
	this.CalcRatios();
	this.SetValue( this.m_nValue );
};

CSlider.prototype.SetIncrement = function( nIncrement )
{
	this.m_nIncrement = nIncrement;
};

function CScrollSlider( $Scroll, $Container, $Grabber, args )
{
	this.m_$Scroll = $Scroll;
	this.m_$SliderCtn = $Container;

	var $Slider = $Container.children('.slider');

	this.m_Slider = new CSlider( $Slider.length ? $Slider : $Container, $Grabber, { fnOnChange: $J.proxy( this.OnSliderChange, this )} );

	this.m_$Scroll.css('overflowX', 'scroll');
	// add momentum on iOS
	this.m_$Scroll.css('-webkit-overflow-scrolling', 'touch');

	var _this = this;
	var bDidInitialRecalc = false;
	this.m_$Scroll.on( 'scroll.ScrollSlider', function() {
		if ( !bDidInitialRecalc )
		{
			// we don't want to do this all the time, but on some browsers the first call to
			//	update ranges is too early and values don't compute correctly.
			_this.UpdateRanges();
			bDidInitialRecalc = true;
		}
		_this.m_Slider.SetValue( _this.m_$Scroll.scrollLeft() );
	});
	$J(window).on('resize.ScrollSlider', function() {
		_this.UpdateRanges();
	} );
	this.m_$Scroll.on( 'v_contentschanged', function() {
		_this.UpdateRanges();
	} );

	this.UpdateRanges();
}

CScrollSlider.prototype.SetValue = function( value, nAnimationSpeed ) {
	if ( nAnimationSpeed )
	{
		this.m_$Scroll.stop().animate( {'scrollLeft': value }, nAnimationSpeed );
	}
	else
	{
		this.m_$Scroll.stop().scrollLeft( value );
	}
};

CScrollSlider.prototype.GetValue = function() {
	return this.m_Slider.GetValue();
};

CScrollSlider.prototype.UpdateRanges = function()
{
	var nParentWidth = this.m_$Scroll.width();
	var nScrollWidth = this.m_$Scroll[0].scrollWidth;

	if ( nScrollWidth <= nParentWidth )
	{
		this.m_$SliderCtn.hide();
	}
	else
	{
		this.m_Slider.SetRange( 0, nScrollWidth - nParentWidth, this.m_$Scroll.scrollLeft() );
		this.m_$SliderCtn.show();
	}
};

CScrollSlider.prototype.OnSliderChange = function( value, bInDrag )
{
	this.m_$Scroll.stop().scrollLeft( value );
};

function IsValidEmailAddress( email )
{
	var email_regex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
	return ( email != '' && email_regex.test(email) );
}


(function ($) {
  $.deparam = function (params, coerce) {
    var obj = {},
        coerce_types = { 'true': !0, 'false': !1, 'null': null };

    $.each(params.replace(/\+/g, ' ').split('&'), function (j,v) {
      var param = v.split('='),
          key = decodeURIComponent(param[0]),
          val,
          cur = obj,
          i = 0,

          keys = key.split(']['),
          keys_last = keys.length - 1;

      if (/\[/.test(keys[0]) && /\]$/.test(keys[keys_last])) {
        keys[keys_last] = keys[keys_last].replace(/\]$/, '');

        keys = keys.shift().split('[').concat(keys);

        keys_last = keys.length - 1;
      } else {
        keys_last = 0;
      }

      if (param.length === 2) {
        val = decodeURIComponent(param[1]);

        if (coerce) {
          val = val && !isNaN(val)              ? +val              // number
              : val === 'undefined'             ? undefined         // undefined
              : coerce_types[val] !== undefined ? coerce_types[val] // true, false, null
              : val;                                                // string
        }

        if ( keys_last ) {
          for (; i <= keys_last; i++) {
            key = keys[i] === '' ? cur.length : keys[i];

						if ( typeof cur != 'object' )
				break;

            cur = cur[key] = i < keys_last
              ? cur[key] || (keys[i+1] && isNaN(keys[i+1]) ? {} : [])
              : val;
          }

        } else {

          if ($.isArray(obj[key])) {
            obj[key].push( val );

          } else if (obj[key] !== undefined) {
            obj[key] = [obj[key], val];

          } else {
            obj[key] = val;
          }
        }

      } else if (key) {
        obj[key] = coerce
          ? undefined
          : '';
      }
    });

    return obj;
  };
})(jQuery);

/**
 * Generic search field that handles:
 * 1.) Showing default text if the input field is empty
 * 2.) When the input field gets focus, the text field clears
 * 3.) Adding CSS class to the input field when it is default text
 * 4.) When the user presses return/enter in  the field
 *
 * Call ClearIfDefaultValue() before submitting the form
 */
function SearchFieldWithText( elemID, defaultSearchText, onEnterFunc, defaultTextCSSClass )
{
	var elem = $( elemID );

	this.elem = elem;
	this.defaultSearchText = defaultSearchText;
	this.defaultTextCSSClass = defaultTextCSSClass;
	this.onEnterFunc = onEnterFunc;

	Event.observe( elem, 'click', this.handleClickOrFocus.bind(this));
	Event.observe( elem, 'focus', this.handleClickOrFocus.bind(this));
	Event.observe( elem, 'blur', this.handleBlur.bind(this));
	Event.observe( elem, 'keypress', this.handleKeypress.bind(this));
	Event.observe( elem.form, 'submit', this.ClearIfDefaultValue.bind(this));

	this.handleBlur();
}

SearchFieldWithText.prototype.handleClickOrFocus = function()
{
	if ( this.elem.value == this.defaultSearchText )
	{
		this.elem.value = '';
		if ( this.defaultTextCSSClass )
			this.elem.removeClassName( this.defaultTextCSSClass );
	}
};

SearchFieldWithText.prototype.handleBlur = function()
{
	if ( this.elem.value == '')
	{
		this.elem.value = this.defaultSearchText;
		if ( this.defaultTextCSSClass )
			this.elem.addClassName( this.defaultTextCSSClass );
	}
};

SearchFieldWithText.prototype.handleKeypress = function()
{
	if ( !this.onEnterFunc )
		return;

	var keyCode = null;
	if( event.which )
	{
		keyCode = event.which;
	}
	else if( event.keyCode )
	{
		keyCode = evt.keyCode;
	}
	if ( 13 == keyCode )
	{
		this.onEnterFunc();
	}
};

SearchFieldWithText.prototype.ClearIfDefaultValue = function()
{
	if ( this.elem.value == this.defaultSearchText )
	{
		this.elem.value = '';
	}
};


function CWebAPI( strWebAPIHost, strSecureWebAPIHost, strOAuth2Token )
{
	this.m_strHost = strWebAPIHost;
	this.m_strSecureWebAPIHost = strSecureWebAPIHost;
	this.m_strOAuth2Token = strOAuth2Token;
}

CWebAPI.prototype.BuildURL = function( strInterface, strMethod, bSecure, strVersion )
{
	if ( !strVersion )
		strVersion = 'v0001';

	var strURL = ( bSecure ? this.m_strSecureWebAPIHost : this.m_strHost );
	strURL += strInterface + '/' + strMethod + '/' + strVersion + '/';

	return strURL;
};

CWebAPI.prototype.ExecJSONP = function( strInterface, strMethod, rgParams, bSecure, strVersion, cTimeoutSecs )
{
	rgParams.access_token = this.m_strOAuth2Token;

	var rgJQueryParams = {
		url: this.BuildURL( strInterface, strMethod, bSecure, strVersion ),
		dataType: 'jsonp',
		jsonp: 'jsonp',				data: rgParams
	};

	if ( cTimeoutSecs )
		rgJQueryParams['timeout'] = cTimeoutSecs * 1000;

	return $J.ajax( rgJQueryParams );

	/*
	// using jsonp plugin instead of built-in jquery jsonp handling.  this library supposedly
	//	works around the firefox "waiting for host..." issue, but it doesn't work.
	return $J.jsonp({
		url: this.BuildURL( strInterface, strMethod, bSecure, strVersion ),
		callbackParameter: 'jsonp',				data: rgParams
	});
	*/
};

// Send a "beacon", which is specifically intended for use in OnUnload events (as outsdanding AJAX/JSONP requests may be cancelled)
// as of sept 2015, only chrome and firefox support this, no iOS or IE support.  Check for support before calling.
// Beacons are (per spec) always a POST request, and always include CORS headers.  WebAPI respondes properly to CORS for Valve domains.
CWebAPI.prototype.ExecBeacon = function( strInterface, strMethod, rgParams, bSecure, strVersion )
{
	rgParams.access_token = this.m_strOAuth2Token;

	var fdParams = new FormData();
	for ( var key in rgParams )
		fdParams.append( key, rgParams[key] );

	navigator.sendBeacon( this.BuildURL( strInterface, strMethod, bSecure, strVersion ), fdParams );
};


CWebAPI.prototype.ExecPOST = function( strInterface, strMethod, rgParams, bSecure, strVersion )
{
	rgParams.access_token = this.m_strOAuth2Token;
	rgParams.format = 'json';

	return $J.ajax( {
		url: this.BuildURL( strInterface, strMethod, bSecure, strVersion ),
		type: 'POST',
		data: rgParams
	});
};

// register some events to dismiss popup (ie, user clicking elsewhere on the window, escape)
//   cleans up event binds afterwards.  clicks to children of "elemIgnore" will not dismiss popup
function RegisterPopupDismissal( dismissFunc, elemIgnore )
{
	var $Ignore = $JFromIDOrElement( elemIgnore );
	// delay registration by one frame so that we don't catch the event that triggered this popup.
	window.setTimeout( function() {
		$J(document).on('click.RegisterPopupDismissal keydown.RegisterPopupDismissal', function (event) {

			if (event.keyCode && event.keyCode != 27 /* KEY_ESC */) {
				return;
			}
			var elem = $J(event.target);

			if ( $Ignore.length && $J.contains( $Ignore[0], elem[0] ) )
				return;

			dismissFunc();
			UnregisterPopupDismissal( elemIgnore );
		});

		// support gamepad B button to dismiss
		$Ignore.on( 'vgp_oncancel', function ( event ) {
			dismissFunc();
			UnregisterPopupDismissal( elemIgnore );

			event.stopPropagation();
			event.preventDefault();
		});
	}, 1 );
}

/* Cleanup function for the above RegisterPopupDismissal()
   This needs to be accessible to popup owners so they can call this if they're closing the popup */
function UnregisterPopupDismissal( elemIgnore )
{
	$J(document).off( '.RegisterPopupDismissal' );

	if ( elemIgnore )
	{
		// unregister gamepad B button press handling
		$JFromIDOrElement( elemIgnore ).off( 'vgp_oncancel' );
	}
}


function ShowMenu( elemLink, elemPopup, align, valign, bLinkHasBorder )
{
	var $Popup = $JFromIDOrElement(elemPopup);

	// If we're in tablet screen mode put the menu content in a modal dialog
	var bUseTabletScreenMode = window.UseTabletScreenMode && window.UseTabletScreenMode();
	if ( bUseTabletScreenMode )
	{
		// detach this element and when the dialog closes re-attach to the document body
		$Popup.detach();
		var originalPopupPosition = $Popup.css( 'position' );
		$Popup.css( 'position', 'static' ); // clear possible absolute positioning
		$Popup.show();

		ShowDialog( '', $Popup ).always(
			function() {
				// save it away again for later
				$Popup.hide();
				$Popup.css( 'position', originalPopupPosition ); // restore positioning
				$J( document.body ).append( $Popup );
			}
		);

		return;
	}

	var $Link = $JFromIDOrElement(elemLink);
	if ( $Link.hasClass('focus') )
	{
		HideMenu( elemLink, elemPopup );
		return;
	}

	AlignMenu( $Link, $Popup, align, valign, bLinkHasBorder );

	ShowWithFade( $Popup );
	$Link.addClass('focus');
	RegisterPopupDismissal( function() { HideMenu( elemLink, elemPopup ); }, $Popup );

	// If we use this control on gamepad (haven't found an example yet we're going to keep) then we'll need to
	// add calling: GPOnShowingModalWindow( $Popup[0] ).  See shared_responsive_adapter.js for example
}

function HideMenu( elemLink, elemPopup )
{
	var $Link = $JFromIDOrElement(elemLink);
	var $Popup = $JFromIDOrElement(elemPopup);

	$Link.data( 'menu-active', false );
	HideWithFade( $Popup );
	$Link.removeClass( 'focus' );

	UnregisterPopupDismissal( elemPopup );
}

function HideMenuFast( elemLink, elemPopup )
{
	var $Link = $JFromIDOrElement(elemLink);
	var $Popup = $JFromIDOrElement(elemPopup);

	$Popup.hide();
	$Link.removeClass( 'focus' );

	UnregisterPopupDismissal( elemPopup );
}


function RegisterFlyout( elemLink, elemPopup, align, valign, bLinkHasBorder )
{
	var $Link = $JFromIDOrElement( elemLink );
	var $Popup = $JFromIDOrElement( elemPopup );

	$Link.on( 'mouseenter', function( event ) {
		FlyoutMenu( $Link, $Popup, align, valign, bLinkHasBorder );
	});

	$Link.add( $Popup ).on( 'mouseleave', function( event ) {
		HideFlyoutMenu( event, $Link, $Popup );
	});
}

function UseSmallScreenMenu()
{
	// the new mobile app uses the small screen menu regardless of screen size
	return ( window.UseSmallScreenMode && window.UseSmallScreenMode() ) || ( window.UseNewMobileAppMode && window.UseNewMobileAppMode() );
}

function FlyoutMenu( elemLink, elemPopup, align, valign, bLinkHasBorder, elemAlternateAlignTo )
{
	var $Link = $JFromIDOrElement(elemLink);
	var $Popup = $JFromIDOrElement(elemPopup);

	if ( !$Popup.is(':visible') || $Popup.css('opacity') < 1.0 )
	{
		if ( $Popup.hasClass( 'responsive_slidedown') && UseSmallScreenMenu() )
		{
			$Popup.stop().slideDown();
		}
		else
		{
			// Responsive mode calls slideDown, which applies position: relative to the element and we need to clear it.
			// This will only happen if the user interacted with the menu in the responsive mode, then resized
			// their window to be large and hovered the elements.
			$Popup.css( { position: '' } );
			AlignMenu( $Link, $Popup, align, valign, bLinkHasBorder, elemAlternateAlignTo || null );
			ShowWithFade( $Popup );
		}

		$Link.addClass('focus');
	}

}

function HideFlyoutMenu( event, elemLink, elemPopup )
{
	var $Link = $JFromIDOrElement(elemLink);
	var $Popup = $JFromIDOrElement(elemPopup);

	if ( !$Link.hasClass('focus') )
		return;

	if ( event )
	{
		var reltarget = $J( event.relatedTarget );
		if ( !reltarget.length ||
			( $Link.length && $J.contains( $Link[0], reltarget[0] ) ) ||
			( $Popup.length && $J.contains( $Popup[0], reltarget[0] ) ) ||
			$Link.is( reltarget ) )
			return;
	}
	// start hiding in a little bit, have to let the fade in animation start before we can cancel it

	if ( $Popup.hasClass( 'responsive_slidedown') && UseSmallScreenMenu() )
		$Popup.stop().slideUp();
	else
		window.setTimeout( function() { HideWithFade( $Popup ); }, 33 );

	$Link.removeClass('focus');
	$J(document).off('.FlyoutDismiss');
}

function AlignMenu( elemLink, elemPopup, align, valign, bLinkHasBorder, elemAlternateAlignTo )
{
	var align = align ? align : 'left';

	// alternate align to is used to align the genre menu on the store; it's only used for horizontal alignment,
	// trying to align to it vertically messes up responsive view.
	var $LinkVertical = $JFromIDOrElement(elemLink);
	var $LinkHorizontal = elemAlternateAlignTo ? $JFromIDOrElement(elemAlternateAlignTo) : $LinkVertical;

	var $Popup = $JFromIDOrElement(elemPopup);


	var offsetLinkVertical = $LinkVertical.offset();
	var offsetLinkHorizontal = $LinkHorizontal.offset();
	var nWindowScrollTop = $J(window).scrollTop();
	var nViewportHeight = $J(window).height();

	var nLinkViewportTop = offsetLinkVertical.top - nWindowScrollTop;

	// add a little bit of padding so we don't position it flush to an edge if possible
	var nPopupHeight = $Popup.height() + 8;

	if ( !valign )
	{
		//if there's not enough room between our spot and the top of the document, we definitely want to drop down
		if ( nWindowScrollTop + offsetLinkVertical.top < nPopupHeight )
		{
			valign = 'bottom';
		}
		else
		{
			var nSpaceAbove = nLinkViewportTop;
			var nSpaceBelow = nViewportHeight - ( nLinkViewportTop + $LinkVertical.height() );
			//otherwise we only want to drop down if we've got enough space below us (measured based on view area)
			// or if there's not enough space above to pop in either direction and there's more space below
			if ( nSpaceBelow > nPopupHeight || ( nSpaceAbove < nPopupHeight && nSpaceBelow > nSpaceAbove ) )
				valign = 'bottom';
			else
				valign = 'top';

		}
	}

	var borderpx = bLinkHasBorder ? 1 : 0;
	var shadowpx = $Popup.hasClass( 'popup_block_new' ) ? 0 : 12;
	var offsetLeft = 0;

	if ( align == 'left' )
	{
		//elemPopup.style.left = ( elemLink.positionedOffset()[0] - 12 ) + 'px';
		offsetLeft = -shadowpx - borderpx;
	}
	else if ( align == 'right' )
	{
		//elemPopup.style.left = ( elemLink.positionedOffset()[0] + elemLink.getWidth() - elemPopup.getWidth() + 13 ) + 'px';
		offsetLeft = $LinkHorizontal.outerWidth() - $Popup.outerWidth() + shadowpx + borderpx;
	}
	else if ( align == 'leftsubmenu' )
	{
		//elemPopup.style.left = ( elemLink.positionedOffset()[0] - elemPopup.getWidth() + 12 ) + 'px';
		offsetLeft = -$Popup.outerWidth() + shadowpx - borderpx;
	}
	else if ( align == 'rightsubmenu' )
	{
		//elemPopup.style.left = ( elemLink.positionedOffset()[0] + elemLink.getWidth() - 12 ) + 'px';
		offsetLeft = $LinkHorizontal.outerWidth()  - shadowpx + 2 * borderpx;
	}

	var offsetTop = 0;
	if ( valign == 'bottom' )
	{
		//elemPopup.style.top = ( elemLink.positionedOffset()[1] + elemLink.getHeight() - 12 ) + 'px';
		offsetTop = $LinkVertical.outerHeight() - shadowpx;
	}
	else if ( valign == 'top' )
	{
		//elemPopup.style.top = ( elemLink.positionedOffset()[1] - elemPopup.getHeight() + 12 ) + 'px';
		offsetTop = -$Popup.outerHeight() + shadowpx;
	}
	else if ( valign == 'bottomsubmenu' )
	{
		//elemPopup.style.top = ( elemLink.positionedOffset()[1] - 12 ) + 'px';
		offsetTop = -shadowpx;
	}


	var bPopupHidden = !$Popup.is(':visible');

	if ( bPopupHidden )
	{
		// IE can't do this with display: none elements
		$Popup.css( 'visibility', 'hidden' );
		$Popup.show();
	}

	$Popup.offset( {
		top: Math.max( offsetLinkVertical.top + offsetTop, 0 ),
		left: Math.max( offsetLinkHorizontal.left + offsetLeft, 0 )
	});

	if ( bPopupHidden )
	{
		// restore visibility
		$Popup.hide();
		$Popup.css( 'visibility', 'visible' );
	}
}

function BindAutoFlyoutEvents()
{
	var fnShowFlyout = function( $Tab, bIsHover, bTakeFocus )
	{
		var $Content = $J('#' + $Tab.data('flyout') );
		var bResponsiveSlidedownMenu = UseSmallScreenMenu() && $Content.hasClass('responsive_slidedown');

		if ( !$Content.length || $Content.data('flyout-event-running') ||
			(bIsHover && bResponsiveSlidedownMenu ) )
			return;

		$Content.data( 'flyout-event-running', true );
		window.setTimeout( function() { $Content.data('flyout-event-running', false ); }, 1 );

		if ( $Content.is(':visible') )
		{
			if ( !bIsHover )
				HideFlyoutMenu( null, $Tab, $Content );

			return;
		}

		if ( !$Content.data('flyout-events-bound') )
		{
			$Content.on('mouseleave.Flyout', function( e ) {
				if ( UseSmallScreenMenu() && $Content.hasClass('responsive_slidedown') )
					return;

				if ( $Tab.is( e.relatedTarget ) || $J.contains( $Tab[0], e.relatedTarget ) )
					return;

				HideFlyoutMenu( null, $Tab, $Content );
			});

			$Content.add($Tab).on('vgp_oncancel', function( e ) {
				HideFlyoutMenu( null, $Tab, $Content );
				if ( typeof GPNavFocusChild != 'undefined' )
					GPNavFocusChild( $Tab );
			});

			$Content.on('vgp_onblur', function( e ) {
				var node = e.originalEvent.detail.focusedNode;
				console.log( node );
				if ( !node || !$J.contains( e.currentTarget, node.Element ) )
					HideFlyoutMenu( null, $Tab, $Content );
			});

			$Content.data('flyout-events-bound', true );
		}


		FlyoutMenu( $Tab, $Content, $Tab.data('flyout-align'), $Tab.data('flyout-valign'), false, $Tab.data('flyout-align-to-element' ) );

		if ( bTakeFocus && typeof GPNavFocusChild !== 'undefined' )
		{
			window.setTimeout( function() {
				console.log( 'Request focus in', $Content[0] );
				GPNavFocusChild( $Content );
			}, 5 );
		}

		if ( window.UseTouchFriendlyMode && window.UseTouchFriendlyMode() )
		{
			window.setTimeout( function() {
				$J(document).on('click.FlyoutDismiss', function(e) {
					if ( $J.contains( $Content[0], e.target ) || $Content.is( e.target ) )
						return;

					HideFlyoutMenu( null, $Tab, $Content );
					e.preventDefault();
				});
			}, 1 );
		}
	};

	$J(document).on( 'mouseenter.Flyout click.Flyout', '.flyout_tab', function(e) {
		var $Tab = $J(this);
		var msDelay = $Tab.data('flyout-delay');

		var bIsHover = e.type == 'mouseenter';

		if ( !bIsHover || !msDelay )
		{
			fnShowFlyout( $Tab, bIsHover );
		}
		else if ( !$Tab.data( 'iFlyoutInterval' ) )
		{
			var fnCleanupFlyoutInterval = function() {
				$Tab.removeData( 'iFlyoutInterval' );
				$Tab.off( 'mouseleave.FlyoutCancel' );
			}
			$Tab.on( 'mouseleave.FlyoutCancel', function(e) {
				window.clearTimeout( $Tab.data('iFlyoutInterval') );
				fnCleanupFlyoutInterval();
			});
			$Tab.data( 'iFlyoutInterval', window.setTimeout( function() {
				fnCleanupFlyoutInterval();
				fnShowFlyout( $Tab, bIsHover );
			}, msDelay ) );
		}

	});

	$J(document).on('mouseleave.Flyout', '.flyout_tab', function(e) {
		var $Tab = $J(this);
		var $Content = $J('#' + $Tab.data('flyout') );
		var bResponsiveSlidedownMenu = UseSmallScreenMenu() && $Content.hasClass('responsive_slidedown');

		if ( !$Content.length || $Content.data('flyout-event-running') || bResponsiveSlidedownMenu ||
			$Content.is( e.relatedTarget ) || $J.contains( $Content[0], e.relatedTarget ) )
			return;

		if ( $Content.is(':visible') )
		{
			HideFlyoutMenu( null, $Tab, $Content );

			return;
		}
	});

		$J(document).on('vgp_onok', '.flyout_tab', function( e ) {
		fnShowFlyout( $J(this), false, true );
		e.stopPropagation();
	});
}

function PollOnUserActionAfterInterval( strNamespace, nPollInterval, fnCallback, nPollImmediateInterval )
{
	var bCallbackInvoked = false;
	var tsLastUserAction = $J.now();
	var fnInvokeCallbackOnNextUserAction;

	var strEvents = ['touchstart','mousemove','focus','scroll',''].join( '.' + strNamespace + ' ' );

	var fnDoPoll = function() {
		if ( !bCallbackInvoked )
			fnCallback();
		bCallbackInvoked = true;
		fnInvokeCallbackOnNextUserAction();
	};

	fnInvokeCallbackOnNextUserAction = function() {
		window.setTimeout( function() {
			bCallbackInvoked = false;
			if ( nPollImmediateInterval && $J.now() <= tsLastUserAction + nPollImmediateInterval )
			{
				fnDoPoll();
			}
			else
			{
				$J(window).on( strEvents, function() {
					$J(window ).off( '.' + strNamespace );
					tsLastUserAction = $J.now();
					fnDoPoll();
				});
			}
		}, nPollInterval );
	};

	fnInvokeCallbackOnNextUserAction();
}

var DELAY_BETWEEN_NOTIFICATION_COUNT_POLLS_MS = 60 * 1000;
function EnableNotificationCountPolling()
{
	PollOnUserActionAfterInterval( 'NotificationCountPoll', DELAY_BETWEEN_NOTIFICATION_COUNT_POLLS_MS, UpdateNotificationCounts );
}

function UpdateNotificationCounts()
{
	if ( window.RefreshSteamNotifications )
		window.RefreshSteamNotifications();
}

function PostToURLWithSession( url, rgParams )
{
	var $Form = $J('<form/>', {'action': url, 'method': 'POST' } );

	// site must set this js var or pass to this function
	if ( typeof g_sessionID != 'undefined' )
		$Form.append( $J('<input/>', {'type': 'hidden', 'name': 'sessionid', 'value': g_sessionID } ) );

	if ( rgParams )
	{
		for ( var name in rgParams )
			$Form.append( $J('<input/>', {'type': 'hidden', 'name': name, 'value': rgParams[name] } ) );
	}
	$Form.appendTo( 'body' );
	$Form.submit();
}


function ShowWithFade( elem, speed )
{
	var $Elem = $JFromIDOrElement(elem);

	$Elem.stop();
	$Elem.fadeTo( speed || 200, 1.0 );	//fadeTo rather than fadeIn in case it was already in a fade
}

function HideWithFade( elem, speed )
{
	var $Elem = $JFromIDOrElement(elem);

	$Elem.stop();
	$Elem.fadeOut( speed || 200 );
}


function LaunchWebChat( params, paramsFriendsUI )
{
	var winChat = window.open( '', 'SteamWebChat', 'height=790,width=1015,resize=yes,scrollbars=yes' );
	if ( !winChat )
	{
		// popup blocked - this sometimes happens when chat is initiated from the store.  just roll with it.
		return;
	}

	var bNewPopup = false;
	var bCrossOrigin = false;

	try {
		bNewPopup = (winChat.location ==  'about:blank' );
	}
	catch ( e )
	{
		// cross-origin exception on http pages etc
		bCrossOrigin = true;
	}

	if ( bNewPopup )
	{
		if ( params )
			SetValueLocalStorage( 'rgChatStartupParam', V_ToJSON( params ) );

		if ( paramsFriendsUI )
		{
			var fnBoundMessageListener = function( event )
			{
				if ( event.source == winChat && event.data == "FriendsUIReady" &&
					event.origin == 'https://steamcommunity.com')
				{
					winChat.postMessage( paramsFriendsUI, 'https://steamcommunity.com/' );
					window.removeEventListener( 'message', fnBoundMessageListener );
				}
			};
			window.addEventListener( 'message', fnBoundMessageListener );
		}

		// created a new window, set the url
		winChat.location = 'https://steamcommunity.com/chat/';
	}
	else
	{
		if ( params && !bCrossOrigin && winChat.OnWebchatLaunchURL )
			winChat.OnWebchatLaunchURL( params );

		if ( paramsFriendsUI )
			winChat.postMessage( paramsFriendsUI, 'https://steamcommunity.com/' );
	}
	winChat.focus();
}

function ShowSupportAlerts(url)
{
	window.open( url, 'SupportAlerts', 'height=700,width=700,resize=yes,scrollbars=yes' );
}

function UnlockFamilyView( strURL )
{
	window.location = strURL;
}

function LockFamilyView( bStore )
{

	var urlFirst = '';
	var urlSecond = '';
	if ( bStore )
	{
		urlFirst = 'https://store.steampowered.com/';
		urlSecond = 'https://steamcommunity.com/';
	}
	else
	{
		urlFirst = 'https://steamcommunity.com/';
		urlSecond = 'https://store.steampowered.com/';
	}

	ShowConfirmDialog( 'Return to Family View',
		'Are you sure you want to return to Family View?',
		'Return to Family View'
	).done( function() {
		ShowBlockingWaitDialog( 'Return to Family View' );

		CrossDomainPost( urlFirst + '/parental/ajaxlock', {} ).then( function() {
			$J.when(
									CrossDomainPost( 'https://checkout.steampowered.com/parental/ajaxlock', {} ),
								CrossDomainPost( 'https://steam.tv/parental/ajaxlock', {} ),
				CrossDomainPost( urlSecond + 'parental/ajaxlock', {} )
			).always( function()
			{
				window.location = urlFirst;
			} );
		});
	} );
}

function setTimezoneCookies()
{
	var now = new Date();
	var expire = new Date();

	// One year expiration, this way we don't need to wait at least one page
	// load to have accurate timezone info each session, but only each time the user
	// comes with cleared cookies
	expire.setTime( now.getTime() + 3600000*24*365 );
	var tzOffset = now.getTimezoneOffset() * -1 * 60;
	var isDST = 0;

	var sameSite = '';
	if ( window.location.protocol == 'https' )
		sameSite = '; Secure; SameSite=None;'
	document.cookie = "timezoneOffset=" + tzOffset + "," + isDST + ";expires="+expire.toGMTString() + ";path=/" + sameSite;
}

function FlushStyleChanges( element )
{
	$J( element ).css( 'opacity');
}

var k_EScrollbarDirectionVertical = 1;
var k_EScrollbarDirectionHorizontal = 2;

window.VScrollbar = function( eleTarget, eleHandle, direction )
{
	this.m_eleHandle = eleHandle;
	this.m_eleTarget = eleTarget;

	var instance = this;

	var propOffset, propSize, propOuterSize, propDimension, propPage, directionInvert, propOffsetEvent;

	if( direction == k_EScrollbarDirectionVertical)
	{
		propOffset = 'top';
		propSize = 'height';
		propOuterSize = 'outerHeight';
		propDimension = 'y';
		propPage = 'pageY';
		propOffsetEvent = 'offsetY';
	} else if( direction == k_EScrollbarDirectionHorizontal )
	{
		propOffset = 'left';
		propSize = 'width';
		propOuterSize = 'outerWidth';
		propDimension = 'x';
		propPage = 'pageX';
		propOffsetEvent = 'offsetX';

		this.m_eleTarget.first().css({'white-space': 'nowrap'});
	}

	// Set up some CSS properties we need
	this.m_eleHandle.css({position: 'absolute'});
	if( this.m_eleHandle.parent().css('position') == 'static' )
		this.m_eleHandle.parent().css({position: 'relative'}); // Needs to be relative or absolute, only set it if we didn't do it in CSS
	this.m_eleTarget.css({position: 'relative', float: 'left'});
	this.m_eleTarget.css(propOffset, '0px');
	this.m_eleTarget.addClass('animating');
	this.m_eleTarget.parent().addClass('v_scrollbar_target');
	this.m_eleTarget.parent().css({position: 'relative', overflow: 'hidden'});
	this.m_nDesiredPosition = 0;
	this.m_flPercent = 0;


	var funcUpdate = function( bDisableTransitions )
	{
		var bScrolled = true;
		if( instance.m_eleTarget[propSize]() - instance.m_eleTarget.parent()[propSize]() <= 0 )
		{
			instance.m_eleHandle.parent().addClass('disabled');
			instance.m_flPercent = 0;
			bScrolled = false;
		} else
			instance.m_eleHandle.parent().removeClass('disabled');

		if( instance.m_flPercent < 0 )
			instance.m_flPercent = 0;

		if( instance.m_flPercent > 1 )
			instance.m_flPercent = 1;


		var percent = instance.m_flPercent;

		if( bDisableTransitions )
			instance.DisableTransitions();

		instance.m_nDesiredPosition = -percent * ( instance.m_eleTarget[propSize]() - instance.m_eleTarget.parent()[propSize]());

		// Update container
		instance.m_eleTarget[0].style[propOffset] = instance.m_nDesiredPosition + 'px';

		// Update scroll handle
		var handleMax = instance.m_eleHandle.parent()[propSize]() - instance.m_eleHandle[propOuterSize]();
		instance.m_eleHandle[0].style[propOffset] = ( percent * handleMax ) + 'px';

		if( bDisableTransitions )
			instance.EnableTransitions();

		return bScrolled;
	};

	var funcMouseMove = function( event ) {
		var localDimension = event[propPage] - instance.m_eleHandle.parent().offset()[propOffset];
		var localMax = instance.m_eleHandle.parent()[propSize]() - instance.m_eleHandle[propOuterSize]();

		var percent = localDimension / localMax;
		instance.m_flPercent = percent;

		if( funcUpdate(true) )
			event.preventDefault();


	};

	$J(eleTarget).bind('mousewheel DOMMouseScroll',function( event ){
		var delta = event.originalEvent.wheelDelta || event.originalEvent.detail * -12;

		var localY = instance.m_nDesiredPosition * -1;
		var localMax = instance.m_eleTarget[propOuterSize]() - instance.m_eleTarget.parent()[propSize]();

		if( localY <= 0 && delta > 0 || localY == localMax && delta < 0 )
			return;

		localY -= delta;

		if( localY < 0 ) localY = 0;
		if( localY > localMax  ) localY = localMax;

		var percent = localY / localMax;

		instance.m_flPercent = percent;

		if( funcUpdate() )
			event.preventDefault();
	});

	$J(eleHandle.parent()).bind('click',function( event ){
		var localY = instance.m_eleTarget.position()[propOffset] * -1;
		var localMax = instance.m_eleTarget[propOuterSize]() - instance.m_eleTarget.parent()[propSize]();

		var step = instance.m_eleTarget.parent()[propSize]();

		if( event[propOffsetEvent] < instance.m_eleHandle.position()[propOffset] )
			step *= -1;

		localY += step;

		if( localY < 0 ) localY = 0;
		if( localY > localMax  ) localY = localMax;

		var percent = localY / localMax;

		instance.m_flPercent = percent;

		if( funcUpdate() )
			event.preventDefault();
	});

	eleHandle.mousedown(function( event ){
		$J(window).bind('mousemove.scroll', funcMouseMove);
		event.stopPropagation();
	});

	eleHandle.click(function( event ){
		event.stopPropagation();
	});

	$J(window).mouseup(function( event ){
		$J(window).unbind('mousemove.scroll');
		event.stopPropagation();
	});

	// Resets scroll position to 0 and updates the window. Useful when adding/removing elements or resizing the scroll area
	this.Reset = function() {
		instance.m_flPercent = 0;

		return funcUpdate(true);
	};

	// Ensures target element is visible. This is taken from position() (NOT OFFSET) so the element must be a direct child of the scroll area
	this.EnsureVisible = function( ele ) {
		var $ele = $J(ele);
		var eleSize = $ele[propOuterSize](true);
		var minEdge = $ele.position()[propOffset] - (eleSize * 0.5);
		var maxEdge = minEdge + (eleSize * 2);


		var viewportMax = instance.m_eleTarget[propOuterSize]() - instance.m_eleTarget.parent()[propSize]();
		var viewportSize = instance.m_eleTarget.parent()[propSize]();
		var viewportPosition = instance.m_eleTarget.position()[propOffset] * -1;

		if( viewportPosition > minEdge )
			instance.m_flPercent = minEdge / viewportMax;
		else if( ( viewportPosition + viewportSize ) < maxEdge )
			instance.m_flPercent = ( maxEdge - viewportSize ) / viewportMax;

		return funcUpdate();
	};

	this.EnableTransitions = function() {
		instance.m_eleTarget.addClass('animating');
	};

	this.DisableTransitions = function() {
		instance.m_eleTarget.removeClass('animating');
	};

	funcUpdate(true);


};

function InitAutoComplete( elInput, fnSearch, fnOnChange )
{
	return new CAutoComplete( elInput, fnSearch, fnOnChange );
}

function CAutoComplete( elInput, fnSearch, fnOnChange )
{
	this.m_bSuppresseNextKeyUp = false;
	this.m_hSearchTimeout = 0;
	this.m_strLastSearch = '';

	this.m_$Input = $J( elInput );
	this.m_fnSearch = fnSearch;
	this.m_fnOnChange = fnOnChange;

		var strName = this.m_$Input.attr( 'name' );
	if ( !strName )
		strName = 'unknown';

	strName = strName + '_autocomplete';

	this.m_$Popup = $J ( '<div class="' + strName + '"></div>' );
	this.m_$Popup.css( 'width', this.m_$Input.outerWidth() + 'px' );
	this.m_$Input.after( this.m_$Popup );
	this.m_$Popup.hide();

	var _this = this;
	this.m_$Input.on( 'keydown.autocomplete', function( event ) { _this.OnInputKeyDown( event ); } );
	this.m_$Input.on( 'keyup.autocomplete', function( event ) { _this.OnInputKeyUp( event ); } );
	this.m_$Input.on( 'blur.autocomplete', function( event ) { _this.OnInputBlur( event ); } );
	this.m_$Input.on( 'change input paste', function( event ) { _this.OnInputChange( event ); } );

	this.m_$Popup.on( 'mousedown.autocomplete', function( event ) { _this.m_$Popup.data( 'mousedown', true ); } );
	this.m_$Popup.on( 'mouseup.autocomplete', function( event ) { _this.m_$Popup.data( 'mousedown', false ); } );
}

CAutoComplete.KEY_ENTER = 13;
CAutoComplete.KEY_UP = 38;
CAutoComplete.KEY_DOWN = 40;

CAutoComplete.prototype.OnInputChange = function( event )
{
		if ( this.m_fnOnChange )
		this.m_fnOnChange( this.m_$Input, null );

	if ( this.m_hSearchTimeout == 0 )
	{
		var _this = this;
		var fnDoSearch = function()
		{
			_this.m_hSearchTimeout = 0;
			var strSearch = _this.m_$Input.val();
			if ( strSearch == _this.m_strLastSearch )
				return;

			_this.m_strLastSearch = strSearch;
			_this.m_fnSearch( _this.m_$Input, strSearch, function( $Contents ) { _this.SetPopupContents( $Contents ); } );
		};

		this.m_hSearchTimeout = window.setTimeout( fnDoSearch, 300 );
	}
}

CAutoComplete.prototype.SetPopupContents = function( $Contents )
{
	if ( !$Contents )
	{
		this.ClosePopup();
		return;
	}

	this.m_$Popup.html( '' );
	this.m_$Popup.append( $Contents );

	var _this = this;
	this.m_$Popup.children().on( 'click.autocomplete', function( event ) { _this.SelectSuggestion( $J( this ) ); } );
	this.m_$Popup.show();
}

CAutoComplete.prototype.OnInputBlur = function( event )
{
	if ( !this.m_$Popup.data( 'mousedown' ) )
		this.ClosePopup();
}

CAutoComplete.prototype.SelectSuggestion = function( $Suggestion )
{
	if ( $Suggestion.length == 0 )
		return;

	this.m_$Input.val( $Suggestion.data( 'suggestion' ) );
	if ( this.m_fnOnChange )
		this.m_fnOnChange( this.m_$Input, $Suggestion );

	this.ClosePopup();
	this.m_$Input.focus();
}

CAutoComplete.prototype.ClosePopup = function()
{
	if ( this.m_hSearchTimeout != 0 )
	{
		window.clearTimeout( this.m_hSearchTimeout );
		this.m_hSearchTimeout = 0;
	}

	this.m_strLastSearch = '';
	this.m_$Popup.hide();
}

CAutoComplete.prototype.OnInputKeyDown = function( event )
{
	var $CurSuggestion = this.m_$Popup.children('.focus');
	var $NewSuggestion = $J();

	if ( event.keyCode == CAutoComplete.KEY_ENTER )
	{
		this.SelectSuggestion( $CurSuggestion );
		this.m_bSuppressNextKeyUp = true;
		event.preventDefault();
		return;
	}

	if ( event.keyCode == CAutoComplete.KEY_UP || event.keyCode == CAutoComplete.KEY_DOWN )
	{
		if ( event.keyCode == CAutoComplete.KEY_UP )
		{
			if ( $CurSuggestion.length )
				$NewSuggestion = $CurSuggestion.prev();
			if ( !$NewSuggestion.length )
				$NewSuggestion = this.m_$Popup.children( 'div:last-child' );
		}
		else
		{
			if ( $CurSuggestion.length )
				$NewSuggestion = $CurSuggestion.next();
			if ( !$NewSuggestion.length )
				$NewSuggestion = this.m_$Popup.children( 'div:first-child' );
		}

		if ( $NewSuggestion.length  )
		{
			$CurSuggestion.removeClass( 'focus' );
			$NewSuggestion.addClass( 'focus' );
		}

				event.preventDefault();
	}
}

CAutoComplete.prototype.OnInputKeyUp = function( event )
{
	if ( this.m_bSuppressNextKeyUp && event.keyCode == CAutoComplete.KEY_ENTER )
	{
		this.m_bSuppressNextKeyUp = false;
		event.preventDefault();
	}
}



function GetCurrentScrollPercentage()
{
	var s = $J(window).scrollTop();
	var d = $J(document).height();
	var c = $J(window).height();
	var scrollPercent = (s / (d-c)) * 100;
	return scrollPercent;
}

// @elemID id of the element
// @fixedOffsetTop offset from the top when fixed
// @bScrollWithPageIfTooTall if the element is taller than the page, then it will "scroll" with the page if this is true
// @docHeightOffset if bScrollWithPageIfTooTall is set to true, then this is how much the document height is reduced by (recommend this to be 130 for the typical footer)
function FixedElementOnScrollWrapper ( elemID, fixedOffsetTop, bScrollWithPageIfTooTall, docHeightOffset, params )
{
	params = $J.extend( {
		fixedClass: null
	}, params );

	this.fixedElement = $( elemID );
	this.$FixedElement = $JFromIDOrElement( elemID );
	this.fixedOffsetTop = typeof fixedOffsetTop != "undefined" ? fixedOffsetTop : 0;
	this.bScrollWithPageIfTooTall = typeof bScrollWithPageIfTooTall != "undefined" ? bScrollWithPageIfTooTall : false;
	this.docHeightOffset = typeof docHeightOffset != "undefined" ? docHeightOffset : 0;
	this.homePosn = { x: this.fixedElement.cumulativeOffset()[0], y: this.fixedElement.cumulativeOffset()[1] };
	this.fixedClass = params.fixedClass;


	this.$FixedElementPadding = $J('<div/>', {'class': 'FixedElementOnScrollWrapper_padding', 'id': 'ScrollWrapperPadding_' + elemID } ).hide();
	this.fixedElement.insert( { before: this.$FixedElementPadding[0] } );

	var _this = this;
	$J(window).on( 'scroll.FixedElementOnScrollWrapper hashchange.FixedElementOnScrollWrapper', function() { _this.handleScroll() } );
	$J(window).on( 'resize.FixedElementOnScrollWrapper', function() { _this.handleScroll( true /* force recalc */ ) } );
	this.handleScroll();
}

FixedElementOnScrollWrapper.prototype.BIsFixed = function()
{
	if ( this.fixedClass )
		return this.$FixedElement.hasClass( this.fixedClass );
	else
		return this.$FixedElement.css( 'position' ) == 'fixed';
}

FixedElementOnScrollWrapper.prototype.handleScroll = function( bForceRecalc )
{
	this.scrollOffset = document.viewport.getScrollOffsets().top;
	var offsetTop = this.fixedOffsetTop + GetResponsiveHeaderFixedOffsetAdjustment();

	if ( bForceRecalc && !this.BIsFixed() )
		this.homePosn = { x: this.fixedElement.cumulativeOffset()[0], y: this.fixedElement.cumulativeOffset()[1] };

	if ( this.scrollOffset > ( this.homePosn.y - offsetTop ) )
	{
		if ( !this.BIsFixed() || bForceRecalc )
		{
			if ( this.fixedClass )
				this.$FixedElement.addClass( this.fixedClass );
			else
				this.$FixedElement.css( 'position', 'fixed' );

			this.fixedElement.style.top = offsetTop + 'px';
			this.fixedElement.style.left = this.homePosn.x;

			// jquery show() sets display to block, which prevents css from hiding this element if needed.
			this.$FixedElementPadding.css( 'display', '' );
			this.$FixedElementPadding.css( 'height', this.fixedElement.getHeight() + 'px' );
		}

		if ( this.bScrollWithPageIfTooTall )
		{
			// this forces the element to scroll off the page, but there's enough that isn't on the page, "scroll" this guy percentage-wise
			var elemHeight = this.fixedElement.getHeight() + offsetTop;
			if ( elemHeight > document.viewport.getHeight() )
			{
				var currentScrollPercentage = GetCurrentScrollPercentage();
				var heightDiff = elemHeight - ( document.viewport.getHeight() - this.docHeightOffset );
				offsetTop -= Math.floor( heightDiff * currentScrollPercentage / 100 );
				this.fixedElement.style.top = offsetTop + 'px';
			}
		}
	}
	else
	{
		if ( this.BIsFixed() )
		{
			if ( this.fixedClass )
				this.$FixedElement.removeClass( this.fixedClass );
			else
				this.$FixedElement.css( 'position', '' );

			this.$FixedElement.css( 'top', '' ).css( 'left', '' );
			this.$FixedElementPadding.css( 'display', 'none' );
		}
	}
}

// general text suggestion control

// fnSuggestForTerm will be called with two values, the current string to get suggestions for,
//	and the callback to invoke with the new values.  You should always invoke the callback per call
//	to fnSuggestForTerm, but can delay due to ajax if needed.

// supported options:
//	bDoEmptySearchOnFirstFocus - run a search for "" (or whatever is in the box) when the text input is first interacted with
function CTextInputSuggest( $InputElement, fnSuggestForTerm, fnOnSuggest, strCssClass, opts )
{
	this.Init( $InputElement, fnSuggestForTerm, fnOnSuggest, strCssClass, opts );
}

CTextInputSuggest.prototype.Init = function( $InputElement, fnSuggestForTerm, fnOnSuggest, strCssClass, opts )
{
	opts = opts ? opts : {};
	if( !strCssClass )
		strCssClass = 'popup_block_new';
	this.m_bHaveSuggestions = false;
	this.m_$Input = $InputElement;
	this.m_fnSuggestForTerm = fnSuggestForTerm;
	this.m_fnOnSuggest = fnOnSuggest || function( term ) {};
	this.m_strLastVal = opts.bDoEmptySearchOnFirstFocus ? undefined : '';	// '' is the value in the input when it's empty
	this.m_align = 'left';
	this.m_valign = 'bottom';

	this.m_$Focus = $J();
	this.m_strLastFocusVal = null;

	this.m_nNextRequestID = 1;
	this.m_nRequestIDRecvd = 0;


	this.m_$SuggestionsCtn = $J('<div/>', {'class': strCssClass, style: 'display: none;' } );
	this.m_$Suggestions = $J('<div/>', {'class': 'popup_body popup_menu' } );
	this.m_$SuggestionsCtn.append( this.m_$Suggestions );

	this.m_$SuggestionsCtn.hide();
	$J(document.body).append( this.m_$SuggestionsCtn );

	var zIndex = 200;	//normal popup zindex
	this.m_$Input.parents().each( function() {
		var zIndexParent = $J(this).css('zIndex');
		if ( zIndexParent != 'auto' && zIndexParent != 0 )
		{
			zIndex = zIndexParent;
		}
	});
	this.m_$SuggestionsCtn.css( 'zIndex', zIndex + 20 );

	var _this = this;
	this.m_$Input.on( 'keyup.CTextInputSuggest click.CTextInputSuggest', function( event ) { _this.OnTextChanged( event ) } );
	this.m_$Input.on( 'paste.CTextInputSuggest cut.CTextInputSuggest', function() { window.setTimeout( function() { _this.OnTextChanged() }, 1 ); } );
	this.m_$Input.on( 'keydown.CTextInputSuggest', function( event ) { _this.OnKeyDown( event ) } );
	this.m_$Input.on( 'focus.CTextInputSuggest', function() { _this.ShowSuggestions() } );
	this.m_$Input.on( 'blur.CTextInputSuggest', function() { _this.HideSuggestions() } );
}

CTextInputSuggest.prototype.SetAlignment = function( align, valign )
{
	this.m_align = align || 'left';
	this.m_valign = valign || 'bottom';
};

CTextInputSuggest.prototype.SetSuggestionsContainerId = function( strSuggestionsCtnId )
{
	this.m_$SuggestionsCtn.attr( 'id', strSuggestionsCtnId );
};

CTextInputSuggest.prototype.ShowSuggestions = function()
{
	if ( !this.m_$SuggestionsCtn.find(':visible').length )
	{
		if ( this.m_bHaveSuggestions )
		{
			AlignMenu(this.m_$Input[0], this.m_$SuggestionsCtn[0], this.m_align, this.m_valign, true);
			this.m_$SuggestionsCtn.fadeIn('fast');
		}
		else if ( this.m_strLastVal === undefined )
		{
			// run an initial query.  This will set m_strLastVal to empty string (or whatever else is in the box,
			//  if something came from browser history)
			this.OnTextChanged( undefined );
		}
	}
};

CTextInputSuggest.prototype.HideSuggestions = function()
{
	if ( this.m_bHaveSuggestions )
		this.m_$SuggestionsCtn.fadeOut( 'fast' );
	else
		this.m_$SuggestionsCtn.hide();
};

CTextInputSuggest.prototype.OnSuggestionSelected = function( $Suggestion )
{
	this.m_$Input.val( $Suggestion.text() );

	this.m_bHaveSuggestions = false;
	this.m_$Focus = $J();
	this.HideSuggestions();

	this.m_fnOnSuggest( $Suggestion.text() );
};

CTextInputSuggest.prototype.SetSuggestions = function( rgSuggestions )
{
	var strLastFocus = this.m_strLastFocusVal;

	this.m_$Suggestions.empty();

	this.m_$Focus = $J();
	this.m_strLastFocus = null;

	if ( rgSuggestions && rgSuggestions.length )
	{
		var _this = this;
		for ( var i = 0; i < rgSuggestions.length; i++ )
		{
			var $Suggestion = $J('<div/>', {'class': 'suggestion_item popup_menu_item' } );
			$Suggestion.text( rgSuggestions[i] );
			$Suggestion.click( $J.proxy( this.OnSuggestionSelected, this, $Suggestion ) );
			$Suggestion.mouseenter( $J.proxy( this.SetFocus, this, $Suggestion ) );

			this.m_$Suggestions.append( $Suggestion );

			if ( rgSuggestions[i] == strLastFocus )
				this.SetFocus( $Suggestion );
		}
		this.m_bHaveSuggestions = true;
		this.ShowSuggestions();
	}
	else
	{
		this.m_bHaveSuggestions = false;
		this.HideSuggestions();
	}
};

CTextInputSuggest.prototype.OnTextChanged = function( event )
{
	if ( event && ( event.which == 13 || event.which == 27 ) )
		return;

	var value = this.m_$Input.val().trim();
	if ( value !== this.m_strLastVal )
	{
		var _this = this;
		var nRequestID = this.m_nNextRequestID++;
		this.m_fnSuggestForTerm( value, function( rgSuggestions ) {
			// we've already recieved a more recent response, this is out-of-order
			if ( _this.m_nRequestIDRecvd > nRequestID )
				return;

			_this.m_nRequestIDRecvd = nRequestID;
			_this.SetSuggestions( rgSuggestions );
		} );

		this.m_strLastVal = value;
	}
};

CTextInputSuggest.prototype.OnKeyDown = function( event )
{
	if ( event.which == 27 )
	{
		this.HideSuggestions();
	}
	else if ( this.m_bHaveSuggestions )
	{
		var $NewSuggestion = null;
		if ( event.which == 13 )
		{
			if ( this.m_$Focus.length && this.m_bHaveSuggestions )
			{
				this.OnSuggestionSelected( this.m_$Focus );
				event.stopPropagation();
				event.preventDefault();
			}
		}
		else if ( event.which == 38 /* up arrow */ )
		{
			event.preventDefault();
			if ( this.m_$Focus.length )
				$NewSuggestion = this.m_$Focus.prev();
			if ( !$NewSuggestion )
				$NewSuggestion = this.m_$Suggestions.children().last();
		}
		else if ( event.which == 40 /* down arrow */ )
			{
				event.preventDefault();
				if ( this.m_$Focus.length )
					$NewSuggestion = this.m_$Focus.next();
				if ( !$NewSuggestion )
					$NewSuggestion = this.m_$Suggestions.children().first();
			}

		if ( $NewSuggestion )
			this.SetFocus( $NewSuggestion );
	}
};

CTextInputSuggest.prototype.SetFocus = function( $Suggestion )
{
	this.m_$Focus.removeClass( 'focus' );
	this.m_$Focus = $Suggestion;
	this.m_$Focus.addClass( 'focus' );
	this.m_strLastFocusVal = $Suggestion.text();
};

CTextInputSuggest.prototype.Destroy = function()
{
	this.m_$SuggestionsCtn.remove();
	this.m_$Input.off( '.CTextInputSuggest' );
};

/**
 * Similar to CTextInputSuggest, but uses associative arrays instead of just text; useful for when we may have more than one
 * item with the same text name, or when you want to use HTML in the item name instead of just plaintext
 *
 * Each suggestion should include a 'key', and one of the following:
 * text - Suggestion text (escaped, sets textContents)
 * html - Raw suggestion html (NOT ESCAPED, sets innerHTML)
 *
 * @param $InputElement
 * @param fnSuggestForTerm
 * @param fnOnSuggest
 * @constructor
 */
function CIndexedInputSuggest( $InputElement, fnSuggestForTerm, fnOnSuggest, strCssClass )
{
	this.Init( $InputElement, fnSuggestForTerm, fnOnSuggest, strCssClass );
}

CIndexedInputSuggest.prototype = Object.create(CTextInputSuggest.prototype);;

CIndexedInputSuggest.prototype.OnSuggestionSelected = function( $Suggestion )
{
	this.m_$Input.val( $Suggestion.text() );

	this.m_bHaveSuggestions = false;
	this.m_$Focus = $J();
	this.HideSuggestions();

	this.m_fnOnSuggest( $Suggestion.data('suggest-key'), $Suggestion.text() );
};

CIndexedInputSuggest.prototype.SetSuggestions = function( rgSuggestions )
{
	var strLastFocus = this.m_strLastFocusVal;

	this.m_$Suggestions.empty();

	this.m_$Focus = $J();
	this.m_strLastFocus = null;

	if ( rgSuggestions && rgSuggestions.length )
	{
		var _this = this;
		for ( var i = 0; i < rgSuggestions.length; i++ )
		{

			var $Suggestion = $J('<div/>', {'class': 'suggestion_item popup_menu_item' } );
			if( rgSuggestions[i].text )
				$Suggestion.text( rgSuggestions[i].text );
			else if( rgSuggestions[i].html )
				$Suggestion.html( rgSuggestions[i].html );

			$Suggestion.data('suggest-key', rgSuggestions[i].key )

			$Suggestion.click( $J.proxy( this.OnSuggestionSelected, this, $Suggestion ) );
			$Suggestion.mouseenter( $J.proxy( this.SetFocus, this, $Suggestion ) );

			this.m_$Suggestions.append( $Suggestion );

			if ( rgSuggestions[i] == strLastFocus )
				this.SetFocus( $Suggestion );
		}
		this.m_bHaveSuggestions = true;
		this.ShowSuggestions();
	}
	else
	{
		this.m_bHaveSuggestions = false;
		this.HideSuggestions();
	}
};


/**
 * Similar to CTextInputSuggest, but applies styling using the app_type value of each suggestion
 *
 * Each suggestion should include the suggestion text, and the app_type
 *
 * @param $InputElement
 * @param fnSuggestForTerm
 * @param fnOnSuggest
 * @constructor
 */
function CAppTypeInputSuggest( $InputElement, fnSuggestForTerm, fnOnSuggest, strCssClass )
{
	this.Init( $InputElement, fnSuggestForTerm, fnOnSuggest, strCssClass, { bDoEmptySearchOnFirstFocus: true } );
}

CAppTypeInputSuggest.prototype = Object.create( CTextInputSuggest.prototype );

CAppTypeInputSuggest.prototype.SetSuggestions = function( rgSuggestions )
{
	var strLastFocus = this.m_strLastFocusVal;

	this.m_$Suggestions.empty();

	this.m_$Focus = $J();
	this.m_strLastFocus = null;

	if ( rgSuggestions && rgSuggestions.length )
	{
		var _this = this;
		for ( var i = 0; i < rgSuggestions.length; i++ )
		{
			var resultClass = 'suggestion_item popup_menu_item';
			var suggestionText = rgSuggestions[i][0];

			if ( typeof rgSuggestions[i][1] !== 'undefined' )
			{
				switch ( parseInt( rgSuggestions[i][1] ) )
				{
					case 1:
						resultClass += ' app_Game';
						suggestionText = '[Game] ' + suggestionText;
						break;
					case 2:
						suggestionText = '[Application] ' + suggestionText;
						break;
					case 4:
						suggestionText = '[Tool] ' + suggestionText;
						break;
					case 8:
						resultClass += ' app_Demo';
						suggestionText = '[Demo] ' + suggestionText;
						break;
					case 16:
						suggestionText = '[Media] ' + suggestionText;
						break;
					case 32:
						resultClass += ' app_DLC';
						suggestionText = '[DLC] ' + suggestionText;
						break;
					case 256:
						suggestionText = '[Config] ' + suggestionText;
						break;
					case 2048:
						resultClass += ' app_Movie';
						suggestionText = '[Video] ' + suggestionText;
						break;
					case 8192:
						resultClass += ' app_Music';
						suggestionText = '[Music] ' + suggestionText;
						break;
					case 65536:
						resultClass += ' app_Beta';
						suggestionText = '[Beta] ' + suggestionText;
						break;
				}
			}

			var $Suggestion = $J('<div/>', {'class': resultClass } );
			$Suggestion.text( suggestionText );

			$Suggestion.click( $J.proxy( this.OnSuggestionSelected, this, $Suggestion ) );
			$Suggestion.mouseenter( $J.proxy( this.SetFocus, this, $Suggestion ) );

			this.m_$Suggestions.append( $Suggestion );

			if ( rgSuggestions[i] == strLastFocus )
				this.SetFocus( $Suggestion );
		}
		this.m_bHaveSuggestions = true;
		this.ShowSuggestions();
	}
	else
	{
		this.m_bHaveSuggestions = false;
		this.HideSuggestions();
	}
};


function InitBBCodeVideos( bAllowAutoPlay )
{
	var videos = $J( "video" );
	if ( videos.length != 0 )
	{
		for ( var i = 0; i < videos.length; ++i )
		{
			var video = videos[i];
			var $video = $J( video );

			if ( $video.hasClass("bb_video_loop") )
			{
				video.setAttribute('loop', 'loop');
			}

			if ( $video.hasClass("bb_video_controls") )
			{
				video.setAttribute( 'controls', 'controls' );
			}

			if ( bAllowAutoPlay )
			{
				$video.unbind('mouseenter mouseleave');

				video.preload = $video.hasClass("bb_video_preload") ? 'auto' : 'metadata';

				if ( $video.hasClass("bb_video_autoplay") )
				{
					video.autoplay = 'autoplay';
				}
			}
			else
			{
				video.preload = 'metadata';
				$video.hover( function toggleControls() {
					if ( this.hasAttribute("controls") ) {
						this.removeAttribute("controls")
					} else {
						this.setAttribute("controls", "controls")
					}
				} );
			}
		}
	}
}


/**
 * Generic interface for handling ajax-driven sub-pages.
 *
 * @param elTarget Element to dump content into
 * @param strBaseURL Base URL to attach nav params
 * @param strInstanceId Unique flag to look for when scanning for state change events. also determines our data selector
 * 						Only needed if you're using more than one CAjaxSubPageController on the same page.
 * @param strDefaultLocation Used when no navid is provided
 * @constructor
 */
var CAjaxSubPageController = function( elTarget, strBaseURL, strInstanceId, strDefaultLocation )
{
	this.elTarget = elTarget;
	this.strBaseURL = strBaseURL;
	this.strStateID = strInstanceId || 'navid';
	this.strDefaultLocation = strDefaultLocation || '';

	this.rgOriginalEvent = {'html':this.elTarget.innerHTML,'title':document.title, 'id': this.strStateID};

	window.addEventListener('popstate', this.OnWindowPopState.bind(this));

	this.InstrumentLinks( document );

	var _this = this;
	setTimeout( function(){ $J(_this.elTarget).children().trigger('load'); }, 1);

	var strLocation =  window.location.href.substring(strBaseURL.length);
	this.PaintLinks(strLocation || this.strDefaultLocation);


};

/**
 * Register click handlers. This also sets the href for browser link preview and fallback for non-click navigation
 * events, such as opening in a new tab/window via middle click.
 * @param elTarget Element to query from.
 * @constructor
 */
CAjaxSubPageController.prototype.InstrumentLinks = function( elTarget )
{
	//var rgLinks = elTarget.querySelectorAll('[data-'+this.strStateID+']');
	var rgLinks = $J('[data-'+this.strStateID+']', elTarget);
	for( var i=0; i<rgLinks.length; i++)
	{
		rgLinks[i].addEventListener('click', this.Navigate.bind(this, rgLinks[i].dataset[ this.strStateID ], rgLinks[i].dataset[ 'title' ] ) );
		rgLinks[i].href = this.strBaseURL + rgLinks[i].dataset[ this.strStateID ];
	}
};

/**
 * Adds 'active' class to link that was clicked or is currently active.
 * @constructor
 */
CAjaxSubPageController.prototype.PaintLinks = function( strLocation )
{
	// Figure out which link we clicked and paint it with the correct class
	var rgLinks = document.querySelectorAll('[data-'+this.strStateID+']');
	for( var i=0; i<rgLinks.length; i++)
	{
		if( rgLinks[i].dataset[ this.strStateID ] == strLocation || rgLinks[i].dataset[ this.strStateID ] + '/' == strLocation )
			rgLinks[i].classList.add('active');
		else
			rgLinks[i].classList.remove('active');
	}
};

/**
 * Call to navigate the sub-frame.
 *
 * @param strLocation Assumed to be strBaseURL + strLocation. Trailing slash should be on strBaseURL already.
 * @param strpageTitle Optional: Replace page title with this new value.
 * @constructor
 */
CAjaxSubPageController.prototype.Navigate = function( strLocation, strPageTitle, event )
{
	var _this = this;
	var strURL = this.strBaseURL + strLocation;

	this.elTarget.classList.add('loading');

	this.PaintLinks( strLocation );

	// Trigger the "saveform" event which we may have bound to do things.
	$J( 'form', this.elTarget ).trigger('saveform');

	$J.ajax({
		url: strURL,
		dataType: "html",
		cache: true, /* Let the browser decide caching rules */
		data: { 'ajax': 1 }
	}).done(function( result ) {

		var elNewContents = $J( result );

		$J(_this.elTarget).empty();
		$J(_this.elTarget).append( elNewContents );


		_this.elTarget.classList.remove('loading');

		$J( elNewContents ).trigger('load');

		_this.InstrumentLinks( _this.elTarget );
		if( strPageTitle )
			document.title = strPageTitle;

		$J('.tooltip', _this.elTarget).v_tooltip();

		window.history.pushState({'html':result,'title':strPageTitle, 'id': _this.strStateID}, '', strURL );
	});

	if( event )
		event.preventDefault();

};

/**
 * Internal event handler for the "back" button.
 * @param Event event
 * @constructor
 */
CAjaxSubPageController.prototype.OnWindowPopState = function( event )
{
	// Revert to our original state if there's nothing in the stack.

	if(event.state == null)
	{
		event.state = 5;
	}

	var state = event.state || this.rgOriginalEvent;

	if( state && state.id == this.strStateID)
	{
		var strLocation =  window.location.href.substring(this.strBaseURL.length);
		this.PaintLinks( strLocation );

		var elNewContents = $J(state.html);
		$J(this.elTarget).empty();
		$J(this.elTarget).append(elNewContents);
		if( state.title )
			document.title = state.title;

		$J( elNewContents ).trigger('load');
		this.InstrumentLinks( elNewContents );
	}
};

function SetupAnimateOnHoverImages()
{
	var $Images = $J( '[data-animate-on-hover-src]', document );
	if ( $Images.length )
	{
		for ( var i = 0; i < $Images.length; ++i )
		{
			var img = $J( $Images[i] );
			img.data( 'static-src', img.attr( 'src') );
			img.hover(
				function() {
					var thisImage = $J( this );
					thisImage.attr( 'src', thisImage.data( 'animate-on-hover-src' ) );
				},
				function() {
					var thisImage = $J( this );
					thisImage.attr( 'src', thisImage.data( 'static-src' ) );
				}
			);
		}
	}
}

function BindTooltips(selector, rgOptions)
{
	// Standard tooltips
	var $TextTooltips = $J( '[data-tooltip-text]', selector);
	if ( $TextTooltips.length )
		$TextTooltips.v_tooltip( { 'tooltipClass': rgOptions.tooltipCSSClass, 'dataName': 'tooltipText', 'defaultType': 'text', 'replaceExisting': false, 'responsiveMode': window.UseSmallScreenMode && window.UseSmallScreenMode() } );

	var $HTMLTooltips = $J( '[data-tooltip-html]', selector);
	if ( $HTMLTooltips.length )
		$HTMLTooltips.v_tooltip( { 'tooltipClass': rgOptions.tooltipCSSClass, 'dataName': 'tooltipHtml', 'defaultType': 'html', 'replaceExisting': false, 'responsiveMode': window.UseSmallScreenMode && window.UseSmallScreenMode() } );
}

function ShowTooltipMenuAsPopup( toolDiv )
{
	var $Popup = $J( toolDiv );
	// detach this element and when the dialog closes re-attach to the document body
	$Popup.detach();
	var originalPopupPosition = $Popup.css( 'position' );
	$Popup.css( 'position', 'static' ); // clear possible absolute positioning
	$Popup.show();

	var dialog = ShowDialog( '', $Popup ).always(
		function() {
			// save it away again for later
			$Popup.hide();
			$Popup.css( 'position', originalPopupPosition ); // restore positioning
			$J( document.body ).append( $Popup );
		}
	);
	return dialog;
}

/**
 * Binds standard tooltips for the current site. This function also binds a mutationobserver to bind any future elements without additional work
 * @param strCSSClass
 * @constructor
 */
var g_TooltipMutationObserver;
var g_bTooltipMutationObserverDisabled = false;
function SetupTooltips( rgOptions )
{
	function InnerSetupTooltips() {

        BindTooltips(document, rgOptions);

        if (g_TooltipMutationObserver || g_bTooltipMutationObserverDisabled)
            return;

        try
		{
            var config = {
                attributes: true,	// not clear if we actually support this, as we only look at addedNodes
                childList: true,
                subtree: true,
                attributeFilter: ["data-tooltip-html", "data-tooltip-text"]
            };

            var callback = function (mutationsList)
			{
                for (var i = 0; i < mutationsList.length; i++)
                {
                    var mutation = mutationsList[i];
                    if (mutation.addedNodes && mutation.addedNodes.length)
                        BindTooltips(mutation.addedNodes, rgOptions);
                }
            };

            // Create an observer instance linked to the callback function
            g_TooltipMutationObserver = new MutationObserver(callback);

            // Start observing the target node for configured mutations
            g_TooltipMutationObserver.observe(document, config);
        }
        catch (e)
		{
            // Swallow exceptions for browsers that don't support mutationobservers
        }
    }

    InnerSetupTooltips();
    $J( window ).on( 'Responsive_SmallScreenModeToggled', InnerSetupTooltips );
}

// for perf sensitive pages
function DisableTooltipMutationObserver()
{
	g_bTooltipMutationObserverDisabled = true;

	if ( g_TooltipMutationObserver )
	{
		g_TooltipMutationObserver.disconnect();
		g_TooltipMutationObserver = null;
	}
}

function ViewTitlesWithDescriptors( descid )
{
	var waitDialog = ShowBlockingWaitDialog( 'Example Products', 'Please wait while we find some example products...' );

	$J.get( 'https://store.steampowered.com/search/results/',
		{
			'filter' : 'examplesforcontentdescriptors',
			'ignore_preferences' : 1,
			'category1' : '992,994,998', 			'descids[]' : descid,
			'json' : 1,
		}
	).done( function( response ) {
		waitDialog.Dismiss();

		var content = $J( "<div>" );
		content.append( $J( "<div>", { class: 'content_descriptors_examples_desc', text: response.desc } ) );

		if ( response.items.length != 0 )
		{
			for ( var i = 0; i < response.items.length && i < 10; ++i )
			{
				var item = response.items[i];
				var elem = $J( "<div>", { class: 'content_descriptors_example_app' } );
				elem.append( $J( "<img>", {  class: 'app_logo', src: item.logo } ) );
				elem.append( $J( "<div>", { class: 'app_name', text: item.name } ) );
				content.append( elem );
			}
		}
		else
		{
			content.append( $J( "<div>", { class: "no_items", text: 'No Products Found' } ) );
		}

		var dialog = ShowAlertDialog( 'Example Products', content );
	} );
}



// Element appearance montior. Designed to replace jQuery.appear

var CAppearMonitor = function( fnOnAppear, bCheckAnyIntersection ){
	this.rgMonitoredElements = [];
	this.bRunning = false;
	this.unTimerFrequency = 500;
	this.bRegisteredWindowEvent = false;
	this.fnOnAppear = fnOnAppear;
	this.bCheckAnyIntersection = bCheckAnyIntersection || false;
};

CAppearMonitor.prototype.RegisterScrollEvent = function( elTarget )
{
	var instance = this;

	$J(elTarget).on('scroll', function()
	{
		if( instance.bRunning || instance.rgMonitoredElements.length == 0 )
			return;

		instance.bRunning = true;
		setTimeout( instance.CheckVisibilityInternal.bind(instance), instance.unTimerFrequency );

	});
}

CAppearMonitor.prototype.CheckVisibility = function()
{
	// when items are added they will schedule an immediate check.  Delay for a bit
	if ( this.m_iCheckVisibilityRequestInterval )
	{
		window.clearTimeout( this.m_iCheckVisibilityRequestInterval );
	}

	this.m_iCheckVisibilityRequestInterval = setTimeout( this.CheckVisibilityInternal.bind(this), this.unTimerFrequency );
};

CAppearMonitor.prototype.CheckVisibilityInternal = function()
{
	// Walk backwards so we can slice while we iterate
	for( var i=this.rgMonitoredElements.length-1; i>=0; i--)
	{
		var rgMonitored = this.rgMonitoredElements[i];
		if( this.bIsElementVisible( rgMonitored.element ) )
		{
			this.rgMonitoredElements.splice(i,1);
			this.fnOnAppear( rgMonitored.element );
		} else if( !document.body.contains( rgMonitored.element ) )
		{
			this.rgMonitoredElements.splice(i,1);
		}
	}

	this.bRunning = false;
	this.m_iCheckVisibilityRequestInterval = undefined;
};

CAppearMonitor.prototype.bIsElementVisible = function( elElement )
{
	if( !elElement )
		return;

	// Check physical position vs viewport. This is likely the fastest early-out.
	var rectElement = elElement.getBoundingClientRect();

	if ( this.bCheckAnyIntersection )
	{
		if ( rectElement.left > window.innerWidth || rectElement.right < 0 )
			return false;

		if ( rectElement.top > window.innerHeight || rectElement.bottom < 0 )
			return false;
	}
	else
	{
		if ( !( rectElement.top >= 0 && rectElement.left >= 0
				&& rectElement.bottom <= window.innerHeight && rectElement.right <= window.innerWidth ) )
			return false;
	}

	// Ask jQuery to compute visibility, since it knows all the edge cases.
	if( !$J(elElement).is(':visible'))
		return false;

	return true;

};

CAppearMonitor.prototype.RegisterElement = function( elTarget )
{
	if( $J(elTarget).data('manual-tracking' ) )
		return;

	this.rgMonitoredElements.push({
		element: elTarget
	});

	// Register the window scroll event ONLY after we have something to monitor
	if( !this.bRegisteredWindowEvent)
		this.RegisterScrollEvent( window );
};

CAppearMonitor.prototype.TrackAppearanceIfVisible = function( elTarget )
{
	var _this = this;
	window.setTimeout( function() {
		// Ensure we're actually in the viewport (Carousel may be scrolling out of view and calling this)
		// this triggers layout, so we delay this check a little bit to give the page time to settle whatever
		// change may currently be in-flight
		if( !_this.bIsElementVisible( elTarget ) )
			return;

		_this.TrackAppearance( elTarget );
	}, 10);
};

CAppearMonitor.prototype.TrackAppearance = function( elTarget )
{
	// Find our element, splice it out if we were tracking it
	for( var i=this.rgMonitoredElements.length-1; i>=0; i--)
	{
		var rgMonitored = this.rgMonitoredElements[i];
		if(  rgMonitored.element === elTarget )
		{
			this.rgMonitoredElements.splice(i,1);
		}
	}
	// Trigger it, even if we weren't actually tracking it
	this.fnOnAppear( elTarget );
};

CAppearMonitor.prototype.ClearElements = function()
{
	this.rgMonitoredElements = [];
}

// gamepad navigation wrappers, the implementations of these are stored in legacy_web.
// once legacy web initializes, these functions will be replaced by the real thing.  In the mean time,
// we will queue any commands and send them when ready.
var g_rgQueuedGamepadCommands = [];
var g_rgOnReadyCallbacks = [];
var g_bGamepadNavReady = false;
function RunWhenGamepadNavReady( callback )
{
	if ( g_bGamepadNavReady )
		callback();
	else
		g_rgOnReadyCallbacks.push( callback );
}
window.addEventListener( 'vgp_gamepadnavready', function() {
		g_rgQueuedGamepadCommands.forEach( function( command ) { window[command.name].apply( window, command.args ); } );
	g_rgQueuedGamepadCommands = [];

	g_rgOnReadyCallbacks.forEach( function( fn ) { fn(); } );
	g_rgOnReadyCallbacks = [];
});

function InstrumentFocusElements( element )
{
	g_rgQueuedGamepadCommands.push( { name: 'InstrumentFocusElements', args: arguments } );
}
function ForceUpdateFocusElements( element )
{
	g_rgQueuedGamepadCommands.push( { name: 'ForceUpdateFocusElements', args: arguments } );
}
function GPNavFocusChild( element )
{
	g_rgQueuedGamepadCommands.push( { name: 'GPNavFocusChild', args: arguments } );
}
function GPOnShowingModalWindow( element )
{
	g_rgQueuedGamepadCommands.push( { name: 'GPOnShowingModalWindow', args: arguments } );
}
function GPShowVirtualKeyboard( bShowKeyboard )
{
	g_rgQueuedGamepadCommands.push( { name: 'GPShowVirtualKeyboard', args: arguments } );
}
function GPNavUpdateActionDescriptions( element, actionDescriptions )
{
	g_rgQueuedGamepadCommands.push( { name: 'GPNavUpdateActionDescriptions', args: arguments } );
}

var SetGPFocusRestoreTimeout = function(){}; // no op unless InitializeGPFocusRestoreTimeout is called
var nGPFocusRestoreTimeoutID = -1;
function InitializeGPFocusRestoreTimeout( bUseWindowOnload = true )
{
	window.history.replaceState( $J.extend( {}, window.history.state, { notify_focus_restore_ready: true } ), "" );
	SetGPFocusRestoreTimeout = function( delay = 200 )
	{
		if ( nGPFocusRestoreTimeoutID == 0 || ( !window.UseTabletScreenMode || !window.UseTabletScreenMode() ) )
			return;

		if ( nGPFocusRestoreTimeoutID !== -1 )
			window.clearTimeout( nGPFocusRestoreTimeoutID );

		this.nGPFocusRestoreTimeoutID = window.setTimeout( function(){
			nGPFocusRestoreTimeoutID = 0;
			dispatchEvent( new Event( 'focus_restore_ready' ) );
		}, delay );
	}

	if ( bUseWindowOnload )
		window.addEventListener( "load", function(){ SetGPFocusRestoreTimeout(); } );
}

function HandleOverlayWindowPinnedView( bPinned, bShowPinnedView )
{
	$J( 'body' ).toggleClass( 'OverlayWindowPinned', bPinned );
	$J( 'body' ).toggleClass( 'OverlayWindowPinnedView', bShowPinnedView );
}

var g_oReactNativeSetHeader;
function InitReactNativeSetHeaderData( rgInitialReactNativeHeaderData, fnPostData )
{
	g_oReactNativeSetHeader = {
		rgData: rgInitialReactNativeHeaderData,
		fnPostData: fnPostData
	};
	UpdateReactNativeClientHeaderData();
}

function SetReactNativeHeaderCartItemCount( nCartItemCount )
{
	if ( !g_oReactNativeSetHeader )
		return;	// not in react native client

		if ( nCartItemCount == g_oReactNativeSetHeader.rgData['cart_item_count'] )
		return;

	if ( nCartItemCount )
		g_oReactNativeSetHeader.rgData['cart_item_count'] = nCartItemCount;
	else
		delete g_oReactNativeSetHeader.rgData['cart_item_count'];

	UpdateReactNativeClientHeaderData();
}

function UpdateReactNativeClientHeaderData()
{
	if ( g_oReactNativeSetHeader )
	{
		g_oReactNativeSetHeader.fnPostData( g_oReactNativeSetHeader.rgData );
	}
}

