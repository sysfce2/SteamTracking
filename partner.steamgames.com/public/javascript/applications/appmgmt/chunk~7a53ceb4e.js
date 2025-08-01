/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [7267],
  {
    81315: (e) => {
      e.exports = {
        LinkRegionDragBox: "Rtlc-BB1aJFRIM1lH4zN1",
        EdgeDown: "i9zrHPy0-LgZONeZE4fgG",
        LinkRegionGridBox: "_1Ob4AvWwUMx67yR7owjqse",
        LinkRegionEdge: "_2stP4WlwIxd0-9GjYyI7vF",
        TopLeft: "Clgi---P85XXv25yLZwB0",
        Top: "_2Z9VyBAzofV3JvK__dECbX",
        TopRight: "_2-8DbI8PAEkk6i_0CoUeKM",
        Left: "_3ZwUw4ojIRguwHHAcn2Y4y",
        Middle: "_1HecozzoSZfUZSci9dLkxN",
        LinkRegionDelete: "_3Hb3w5_ECwPKcEr5QSAsNk",
        LinkRegionSettings: "VazMl4niFnodlVJhHIGlL",
        Right: "_3h5fKwHq9Uj2VGs8qxxtLl",
        BottomLeft: "_2CQe0cOBOLqq6y6KAUXqH3",
        Bottom: "sIHlK9sN2255-irERXD_V",
        BottomRight: "_3lnwjSWK9Gh1dFkD46NTpP",
        topleft: "_3W096h6Ka6U7sOZVa9lXQo",
        top: "_1iRW1Msfh60zHqD-xe4EAk",
        topright: "_1Yrl7AkNVVGwbM2vyL8yY1",
        left: "_2iBrmAEyXuaKAeZ-g-4CPF",
        right: "_15t6A4l27DY4KRL1aAUTTS",
        bottomleft: "_3SdBcnCBApw0fQ886qgsUx",
        bottom: "_2kzZ9Ilwo92sEI9LXTtZjN",
        bottomright: "_2AKXkFPsIBpG-HeeN58Rti",
        middle: "_1CS75ZrrDXna6xatw5ZvPR",
        LinkRegionButtonContainer: "_1ZJ42NPmBFvIcOai51ZKv3",
        DialogButton: "nN2Q1qGmO2BGMhVnIVMce",
        LinkRegionInfo: "_3TiV7d40PX30wy8UghFCaJ",
        LinkText: "_2TAc2iPcWUHTtwlg7urHv8",
      };
    },
    50666: (e) => {
      e.exports = {
        CropImage: "_3qfqTaQ35U6AO3FNeijcFV",
        CropPreviewGroup: "_1RI-QM2ZjK9MaVjeCLE_LF",
        CropPreviewLabel: "_3_zyLDUyxZNyexfX3kNOPv",
      };
    },
    3577: (e, t, i) => {
      "use strict";
      function s() {
        let e, t;
        return {
          promise: new Promise((i, s) => {
            (e = i), (t = s);
          }),
          resolve: e,
          reject: t,
        };
      }
      function n(e) {
        return new Promise((t) => setTimeout(t, e));
      }
      i.d(t, { x0: () => s, yI: () => n });
    },
    73744: (e, t, i) => {
      "use strict";
      i.d(t, {
        FZ: () => n,
        Fj: () => m,
        Hj: () => r,
        Ho: () => d,
        N_: () => P,
        PL: () => l,
        XY: () => f,
        Yw: () => s,
        _d: () => a,
        cV: () => h,
        on: () => c,
        s4: () => w,
        tW: () => o,
        vz: () => b,
        x: () => u,
        yu: () => _,
      });
      const s = ["app_header_capsule", "app_main_capsule"],
        n = [
          "sale_header",
          "sale_logo",
          "capsule",
          "product_banner",
          "product_mobile_banner",
          "localized_title_image",
        ],
        o = ["takeunder_art", "takeunder_mobile_art"],
        r = [
          "takeover_art",
          "takeover_mobile_art",
          "takeover_webm_art",
          "takeover_mp4_art",
          "takeover_webm_mobile_art",
          "takeover_mp4_mobile_art",
        ],
        a = ["marketingmessage_art", "marketingmessage_art_2"],
        c = [
          "marketingmessage_art_eventcapsule",
          "marketingmessage_art_2_eventcapsule",
        ],
        l = ["spotlight_art"],
        h = [...s, ...n, ...o, ...r, ...a, ...c, ...l],
        p = [1, 3, 2],
        g = [1, 3],
        d = [5, 4],
        u = [7, 6],
        m = {
          capsule: { width: 800, height: 450, rgAcceptableTypes: g },
          marketingmessage_art_2_eventcapsule: {
            width: 800,
            height: 450,
            rgAcceptableTypes: g,
          },
          marketingmessage_art_eventcapsule: {
            width: 800,
            height: 450,
            rgAcceptableTypes: g,
          },
          spotlight: { width: 2108, height: 460, rgAcceptableTypes: g },
          localized_store_app_spotlight: {
            width: 1100,
            height: 240,
            rgAcceptableTypes: g,
          },
          localized_store_app_spotlight_mobile: {
            width: 500,
            height: 160,
            rgAcceptableTypes: g,
          },
          localized_title_image: {
            width: 1920,
            height: 622,
            rgAcceptableTypes: g,
          },
          background: { width: 1920, height: 622, rgAcceptableTypes: g },
          hero: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: g,
          },
          email_full: { width: 800, height: 300, rgAcceptableTypes: g },
          email_centered: { width: 644, height: 300, rgAcceptableTypes: g },
          broadcast_left: { width: 155, height: 337, rgAcceptableTypes: g },
          broadcast_right: { width: 155, height: 337, rgAcceptableTypes: g },
          sale_header: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: p,
          },
          sale_overlay: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: p,
          },
          localized_image_group: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: g,
          },
          localized_background_art: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: g,
          },
          sale_section_background: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: p,
          },
          sale_section_title: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: p,
          },
          link_capsule: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: g,
          },
          product_banner: { width: 1100, height: 160, rgAcceptableTypes: g },
          product_mobile_banner: {
            width: 500,
            height: 160,
            rgAcceptableTypes: g,
          },
          product_banner_override: {
            width: 1100,
            height: 160,
            rgAcceptableTypes: g,
          },
          product_mobile_banner_override: {
            width: 500,
            height: 160,
            rgAcceptableTypes: g,
          },
          schedule_track_art: { width: 196, height: 92, rgAcceptableTypes: g },
          tab_bar_background: {
            width: 1500,
            height: 100,
            rgAcceptableTypes: g,
          },
          sale_logo: { width: 940, height: 460, rgAcceptableTypes: g },
          bestofyear_banner: { width: 1100, height: 160, rgAcceptableTypes: p },
          bestofyear_banner_mobile: {
            width: 500,
            height: 160,
            rgAcceptableTypes: p,
          },
          localized_marketing_message: {
            width: 570,
            height: 600,
            rgAcceptableTypes: [1, 3, 2, 10],
          },
          localized_optin_banner: {
            width: 1e3,
            height: 150,
            rgAcceptableTypes: g,
          },
          localized_marketingmessage_webm: {
            width: 570,
            height: 600,
            rgAcceptableTypes: [5],
          },
          localized_marketingmessage_mp4: {
            width: 570,
            height: 600,
            rgAcceptableTypes: [4],
          },
          localized_partnerevent_webm: {
            width: 800,
            height: 450,
            rgAcceptableTypes: [5],
          },
          localized_partnerevent_mp4: {
            width: 800,
            height: 450,
            rgAcceptableTypes: [4],
          },
          localized_subtitles: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: [6, 7],
          },
          localized_marketingmessage_poster: {
            width: 528,
            height: 297,
            rgAcceptableTypes: [1, 3],
          },
          localized_marketingmessage_background: {
            width: 570,
            height: 600,
            rgAcceptableTypes: g,
          },
          localized_email_image: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: g,
          },
          template_asset: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: [1, 3, 2, 10, 5, 4],
          },
          spotlight_art: { width: 306, height: 260, rgAcceptableTypes: p },
          old_spotlight_art: { width: 306, height: 350, rgAcceptableTypes: p },
          marketingmessage_art: {
            width: 570,
            height: 600,
            rgAcceptableTypes: p,
          },
          marketingmessage_art_2: {
            width: 570,
            height: 600,
            rgAcceptableTypes: p,
          },
          takeover_art: { width: 1850, height: 450, rgAcceptableTypes: p },
          takeover_webm_art: {
            width: 1850,
            height: 450,
            rgAcceptableTypes: [5],
          },
          takeover_mp4_art: {
            width: 1850,
            height: 450,
            rgAcceptableTypes: [4],
          },
          takeover_mobile_art: {
            width: 500,
            height: 350,
            rgAcceptableTypes: p,
          },
          takeover_webm_mobile_art: {
            width: 500,
            height: 350,
            rgAcceptableTypes: [5],
          },
          takeover_mp4_mobile_art: {
            width: 500,
            height: 350,
            rgAcceptableTypes: [4],
          },
          takeunder_art: { width: 940, height: 150, rgAcceptableTypes: p },
          takeunder_mobile_art: {
            width: 500,
            height: 160,
            rgAcceptableTypes: p,
          },
          app_header_capsule: { width: 920, height: 430, rgAcceptableTypes: g },
          app_main_capsule: { width: 1232, height: 706, rgAcceptableTypes: g },
        };
      function _(e, t, i) {
        const s = m[i];
        return (
          !!s && !s.bDisableEnforceDimensions && e === s.width && t === s.height
        );
      }
      function w(e, t, i) {
        const s = m[i];
        return (
          !!s &&
          (!!s.bDisableEnforceDimensions || !(e < s.width || t < s.height))
        );
      }
      function f(e) {
        const t = m[e];
        return (
          t.rgAcceptableTypes.includes(6) || t.rgAcceptableTypes.includes(7)
        );
      }
      function b(e, t) {
        return t.filter((t) => P(e, t));
      }
      function P(e, t) {
        return m[t].rgAcceptableTypes.includes(e);
      }
    },
    78511: (e, t, i) => {
      "use strict";
      i.d(t, { o: () => r, q: () => a });
      var s = i(34629),
        n = i(14947),
        o = i(82705);
      function r(e) {
        return "waiting" == e || "uploading" == e || "processing" == e;
      }
      class a {
        m_originalSize = { width: 0, height: 0 };
        m_originalDataUrl = "";
        dataUrl = void 0;
        width = 0;
        height = 0;
        status = "pending";
        message = "";
        language = void 0;
        file;
        filename;
        uploadTime;
        fileType;
        constructor(e, t, i, s, r) {
          (0, n.Gn)(this),
            (this.file = e),
            (this.filename = t),
            (this.fileType = (0, o.yh)(t) ?? 0),
            (this.language = i),
            (this.uploadTime = Date.now()),
            (this.status = "pending"),
            (this.m_originalSize = r),
            (this.height = r.height),
            (this.width = r.width),
            (this.m_originalDataUrl = s),
            (this.dataUrl = s);
        }
        ResetImage() {
          (this.height = this.m_originalSize.height),
            (this.width = this.m_originalSize.width),
            (this.dataUrl = this.m_originalDataUrl);
        }
        GetImageOptionLabel() {}
      }
      (0, s.Cg)([n.sH], a.prototype, "dataUrl", void 0),
        (0, s.Cg)([n.sH], a.prototype, "width", void 0),
        (0, s.Cg)([n.sH], a.prototype, "height", void 0),
        (0, s.Cg)([n.sH], a.prototype, "status", void 0),
        (0, s.Cg)([n.sH], a.prototype, "message", void 0),
        (0, s.Cg)([n.sH], a.prototype, "language", void 0);
    },
    64953: (e, t, i) => {
      "use strict";
      i.d(t, { IS: () => p, M7: () => d, T2: () => g });
      var s = i(34629),
        n = i(14947),
        o = i(73744),
        r = i(61859),
        a = i(78511),
        c = i(66331),
        l = i(82817);
      class h extends a.q {
        m_rgImageOptions;
        m_currentImageOption = void 0;
        m_currentImageOptionKey = void 0;
        constructor(e, t, i, s, o, r) {
          super(e, t, i, o, r), (0, n.Gn)(this), (this.m_rgImageOptions = s);
        }
        IsValidAssetType(e, t) {
          let i = 0,
            s = 0,
            n = !1,
            a =
              !this.m_rgImageOptions ||
              0 === this.m_rgImageOptions.length ||
              this.m_rgImageOptions.some(
                (e) => e.sKey == this.GetCurrentImageOption()?.sKey,
              );
          if (e) (i = e.width), (s = e.height), (n = !0);
          else if (this.GetCurrentImageOption()) {
            const e = o.Fj[this.GetCurrentImageOption().artworkType];
            e &&
              ((i = e.width),
              (s = e.height),
              (n = !e.bDisableEnforceDimensions));
          }
          const h = this.width >= i && this.height >= s,
            p = n ? this.width === i && this.height === s : h,
            g = t && t != this.fileType,
            d =
              !!(this.m_rgImageOptions && this.m_rgImageOptions.length > 0) &&
              0 ==
                (0, o.vz)(
                  this.fileType,
                  this.m_rgImageOptions?.map((e) => e.artworkType) || [],
                ).length,
            u = Boolean((0, c.t)(this.fileType));
          let m = "",
            _ = !1;
          return (
            a
              ? d
                ? (m = (0, r.we)("#ImageUpload_InvalidFileType"))
                : g
                  ? (m = (0, r.we)(
                      "#ImageUpload_InvalidFormat",
                      (0, l.EG)(t) ?? "",
                    ))
                  : p || u
                    ? h
                      ? !p &&
                        u &&
                        ((m = (0, r.we)(
                          "#ImageUpload_InvalidDimensions",
                          i,
                          s,
                        )),
                        (_ = !0))
                      : (m = (0, r.we)("#ImageUpload_TooSmall", i, s))
                    : (m = (0, r.we)("#ImageUpload_InvalidResolution", i, s))
              : (m = (0, r.we)("#ImageUpload_InvalidFormatSelected")),
            { error: m, needsCrop: _, match: this.GetCurrentImageOption() }
          );
        }
        BSupportsLanguages() {
          return !0;
        }
        ComputeDefaultImageOption() {
          if (!this.m_rgImageOptions || 0 == this.m_rgImageOptions.length)
            return;
          const e = (0, o.vz)(
            this.fileType,
            this.m_rgImageOptions?.map((e) => e.artworkType),
          );
          let t = u(this.width, this.height, e, !1);
          if ((void 0 === t && (t = u(this.width, this.height, e, !0)), t)) {
            const e = this.m_rgImageOptions.find((e) => e.artworkType == t);
            if (e) return e;
          }
          return this.m_rgImageOptions[0];
        }
        get ImageOptions() {
          return this.m_rgImageOptions;
        }
        GetCurrentImageOptionKey() {
          return this.m_currentImageOptionKey;
        }
        GetCurrentImageOption() {
          return this.m_currentImageOption ?? this.ComputeDefaultImageOption();
        }
        SetCurrentImageOption(e) {
          (this.m_currentImageOption = e),
            (this.m_currentImageOptionKey = e?.sKey);
        }
      }
      (0, s.Cg)([n.sH], h.prototype, "m_currentImageOption", void 0),
        (0, s.Cg)([n.sH], h.prototype, "m_currentImageOptionKey", void 0);
      class p extends h {
        video;
        constructor(e, t, i, s, n, o, r) {
          super(e, t, i, s, n, o), (this.video = r);
        }
        BIsOriginalMinimumDimensions(e) {
          return (0, o.s4)(
            this.video.videoWidth,
            this.video.videoHeight,
            e.artworkType,
          );
        }
        FileTypeMatchesImageTypes(e) {
          return (0, o.N_)(this.fileType, e.artworkType);
        }
        BIsVideo() {
          return o.Ho.includes(this.fileType);
        }
        GetResizeDimension() {}
      }
      class g extends h {
        constructor(e, t, i, s) {
          super(e, t, i, s, URL.createObjectURL(e), { width: 0, height: 0 });
        }
        BIsOriginalMinimumDimensions(e) {
          return (0, o.XY)(e.artworkType);
        }
        FileTypeMatchesImageTypes(e) {
          return (0, o.N_)(this.fileType, e.artworkType);
        }
        BIsVideo() {
          return o.Ho.includes(this.fileType);
        }
        GetResizeDimension() {}
      }
      class d extends h {
        bCropped = !1;
        localizedImageGroupPrimaryImage;
        media;
        constructor(e, t, i, s, o, r, a, c) {
          super(e, t, i, s, o, r),
            (0, n.Gn)(this),
            (this.media = a),
            (this.localizedImageGroupPrimaryImage = c);
        }
        IsValidAssetType(e, t) {
          return (
            (t = t ?? this.localizedImageGroupPrimaryImage?.file_type),
            super.IsValidAssetType(e, t)
          );
        }
        GetCanvasImageSource() {
          return this.media;
        }
        BIsOriginalMinimumDimensions(e) {
          return (0, o.s4)(
            this.media?.width ?? 0,
            this.media?.height ?? 0,
            e.artworkType,
          );
        }
        FileTypeMatchesImageTypes(e) {
          return (0, o.N_)(this.fileType, e.artworkType);
        }
        BIsVideo() {
          return o.Ho.includes(this.fileType);
        }
        GetResizeDimension() {
          return (function (e) {
            if ("background" === e)
              return [
                { width: 960, height: 311 },
                { width: 480, height: 156 },
              ];
            if ("capsule" === e)
              return [{ width: o.Fj[e].width / 2, height: o.Fj[e].height / 2 }];
            if ("spotlight" === e)
              return [{ width: o.Fj[e].width / 2, height: o.Fj[e].height / 2 }];
            return;
          })(this.GetCurrentImageOption()?.artworkType);
        }
      }
      function u(e, t, i, s = !1) {
        if (i)
          for (let n of i) {
            if (s ? (0, o.s4)(e, t, n) : (0, o.yu)(e, t, n)) return n;
          }
      }
      (0, s.Cg)([n.sH], d.prototype, "bCropped", void 0);
    },
    69343: (e, t, i) => {
      "use strict";
      i.d(t, { PD: () => g, Vr: () => p, jj: () => d });
      var s = i(2160),
        n = i(22837),
        o = i(61859),
        r = i(41735),
        a = i.n(r);
      class c {}
      function l(e, t, i) {
        const s = e.filter((e) => {
          const s = e.IsValidAssetType(t, i);
          return "pending" === e.status && !s.error && !s.needsCrop;
        });
        return s.forEach((e) => (e.status = "waiting")), s;
      }
      async function h(e, t, i, s, n, o) {
        const r = l(e, s, n),
          a = [];
        let c = 0;
        const h = Array.from({ length: Math.floor(t) }, () =>
          (async () => {
            for (; c < r.length; ) {
              const e = c++,
                t = r[e];
              t.status = "uploading";
              const s = await i(t, t.filename, t.language ?? -1, o);
              (t.status = s.bSuccess ? "success" : "failed"),
                (t.message =
                  !s.bSuccess && s.elErrorMessage ? s.elErrorMessage : ""),
                (a[e] = { image: t, uploadResult: s });
            }
          })(),
        );
        return (
          await Promise.all(h),
          a.map((e) => ({
            bSuccess: e.uploadResult.bSuccess,
            image: e.image,
            uploadResult: e.uploadResult.result,
          }))
        );
      }
      class p extends c {
        m_cancel = void 0;
        async UploadAllImages(e, t) {
          this.m_cancel = a().CancelToken.source();
          const i = this.BGetUploadsAreInSerial() ? 1 : 4;
          let s;
          const n = this.UploadSingleImage.bind(this);
          return (
            (s =
              i > 1
                ? await h(
                    this.GetUploadImages(),
                    i,
                    n,
                    e,
                    t,
                    this.m_cancel.token,
                  )
                : await (async function (e, t, i, s, n) {
                    const o = l(e, i, s),
                      r = [];
                    for (const e of o) {
                      e.status = "uploading";
                      const i = await t(e, e.filename, e.language ?? -1, n);
                      (e.status = i.bSuccess ? "success" : "failed"),
                        (e.message =
                          !i.bSuccess && i.elErrorMessage
                            ? i.elErrorMessage
                            : ""),
                        r.push({
                          bSuccess: i.bSuccess,
                          image: e,
                          uploadResult: i.result,
                        });
                    }
                    return r;
                  })(this.GetUploadImages(), n, e, t, this.m_cancel.token)),
            s
          );
        }
        CancelAllUploads() {
          this.m_cancel?.cancel((0, o.we)("#ImageUpload_CancelRequest"));
        }
      }
      function g(e, t, i) {
        if (((null != e && null != e) || (e = t), !i || 0 === i.length))
          return e;
        for (const t of i) if (o.A0.IsELanguageValidInRealm(e, t)) return e;
        for (const e of i) if (o.A0.IsELanguageValidInRealm(t, e)) return t;
        return i.includes(s.TU.k_ESteamRealmGlobal) ? 0 : 29;
      }
      function d(e, t = 0, i = !0) {
        let s = e.lastIndexOf(".");
        -1 != s && (e = e.slice(0, s).toLowerCase());
        let o = null,
          r = 0;
        e.endsWith("korean") && ((o = 4), (r = 6));
        for (let t = 0; t < 31; ++t) {
          const s = (0, n.ww)(t);
          if (s.length <= r) continue;
          if (e.endsWith(s)) {
            let n = !i;
            if (i && e.length > s.length + 2) {
              const t = e[e.length - s.length - 1];
              n = !/\p{Alphabetic}|\p{Number}/u.test(t);
            }
            n && ((o = t), (r = s.length));
          }
          const a = (0, n.Lg)(t);
          a.length <= r || (e.endsWith(a) && ((o = t), (r = a.length)));
        }
        return {
          language: o ?? t,
          baseFilename: r > 0 ? e.substring(0, e.length - r - 1) : e,
        };
      }
    },
    82705: (e, t, i) => {
      "use strict";
      i.d(t, { yh: () => s });
      i(90626);
      function s(e) {
        return (
          e.indexOf("?") > 0 && (e = e.split("?")[0]),
          e.endsWith(".jpg")
            ? 1
            : e.endsWith(".png")
              ? 3
              : e.endsWith(".gif")
                ? 2
                : e.endsWith(".mp4")
                  ? 4
                  : e.endsWith(".webm")
                    ? 5
                    : e.endsWith(".vtt")
                      ? 6
                      : e.endsWith(".srt")
                        ? 7
                        : e.endsWith(".webp")
                          ? 10
                          : void 0
        );
      }
    },
    55263: (e, t, i) => {
      "use strict";
      i.d(t, {
        G6: () => c,
        Gg: () => p,
        MS: () => m,
        Ow: () => h,
        gF: () => _,
        mZ: () => g,
        t7: () => l,
        zX: () => u,
      });
      var s = i(41735),
        n = i.n(s),
        o = i(90626),
        r = i(73745),
        a = i(82097);
      function c(e, t, i, s) {
        const c = (0, o.useRef)(),
          l = (0, o.useRef)(void 0),
          h = (0, r.CH)();
        c.current = e;
        const [p, g] = (0, o.useState)(void 0),
          {
            include_assets: d,
            include_release: u,
            include_platforms: m,
            include_all_purchase_options: _,
            include_screenshots: w,
            include_trailers: f,
            include_ratings: b,
            include_tag_count: P,
            include_reviews: k,
            include_basic_info: y,
            include_supported_languages: v,
            include_full_description: L,
            include_included_items: I,
            include_assets_without_overrides: T,
            apply_user_filters: E,
            include_links: D,
          } = i;
        if (
          ((0, o.useEffect)(() => {
            const i = {
              include_assets: d,
              include_release: u,
              include_platforms: m,
              include_all_purchase_options: _,
              include_screenshots: w,
              include_trailers: f,
              include_ratings: b,
              include_tag_count: P,
              include_reviews: k,
              include_basic_info: y,
              include_supported_languages: v,
              include_full_description: L,
              include_included_items: I,
              include_assets_without_overrides: T,
              apply_user_filters: E,
              include_links: D,
            };
            let o = null;
            return (
              !e ||
                e < 0 ||
                a.A.Get().BHasStoreItem(e, t, i) ||
                (void 0 !== p && s && s == l.current) ||
                (s !== l.current && (g(void 0), (l.current = s)),
                (o = n().CancelToken.source()),
                a.A.Get()
                  .QueueStoreItemRequest(e, t, i)
                  .then((t) => {
                    o?.token.reason || c.current !== e || g(1 == t), h();
                  })),
              () => o?.cancel("useStoreItemCache: unmounting")
            );
          }, [e, t, s, p, d, u, m, _, w, f, b, P, k, y, v, L, I, T, E, D, h]),
          !e)
        )
          return [null, 2];
        if (!1 === p) return [void 0, 2];
        if (a.A.Get().BIsStoreItemMissing(e, t)) return [void 0, 2];
        if (!a.A.Get().BHasStoreItem(e, t, i)) return [void 0, 1];
        const R = a.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, t);
        return R ? [R, 3] : [null, 2];
      }
      function l(e, t, i) {
        return c(e, 0, t, i);
      }
      function h(e, t, i) {
        return c(e, 2, t, i);
      }
      function p(e, t, i) {
        return c(e, 1, t, i);
      }
      function g(e, t, i) {
        const [s, n] = c(e, t, i);
        let o;
        1 != s?.GetStoreItemType() ||
          s.GetAssets()?.GetHeaderURL() ||
          1 != s?.GetIncludedAppIDs().length ||
          (o = s.GetIncludedAppIDs()[0]);
        const [r, a] = l(o, i);
        return o && r?.BIsVisible() ? [r, a] : [s, n];
      }
      function d(e, t, i, s) {
        const c = (0, r.CH)(),
          {
            include_assets: l,
            include_release: h,
            include_platforms: p,
            include_all_purchase_options: g,
            include_screenshots: d,
            include_trailers: u,
            include_ratings: m,
            include_tag_count: _,
            include_reviews: w,
            include_basic_info: f,
            include_supported_languages: b,
            include_full_description: P,
            include_included_items: k,
            include_assets_without_overrides: y,
            apply_user_filters: v,
            include_links: L,
          } = i;
        if (
          ((0, o.useEffect)(() => {
            if (!e || 0 == e.length) return;
            const i = {
                include_assets: l,
                include_release: h,
                include_platforms: p,
                include_all_purchase_options: g,
                include_screenshots: d,
                include_trailers: u,
                include_ratings: m,
                include_tag_count: _,
                include_reviews: w,
                include_basic_info: f,
                include_supported_languages: b,
                include_full_description: P,
                include_included_items: k,
                include_assets_without_overrides: y,
                apply_user_filters: v,
                include_links: L,
              },
              s = e.filter(
                (e) =>
                  !(
                    a.A.Get().BHasStoreItem(e, t, i) ||
                    a.A.Get().BIsStoreItemMissing(e, t)
                  ),
              );
            if (0 == s.length) return;
            const o = n().CancelToken.source(),
              r = s.map((e) => a.A.Get().QueueStoreItemRequest(e, t, i));
            return (
              Promise.all(r).then(() => {
                o.token.reason || c();
              }),
              () => o.cancel("useStoreItemCacheMultiplePackages: unmounting")
            );
          }, [e, t, s, c, l, h, p, g, d, u, m, _, w, f, b, P, k, y, v, L]),
          !e)
        )
          return 2;
        if (
          !e.every(
            (e) =>
              a.A.Get().BHasStoreItem(e, t, i) ||
              a.A.Get().BIsStoreItemMissing(e, t),
          )
        )
          return 1;
        return e.every((e) =>
          a.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, t),
        )
          ? 3
          : 2;
      }
      function u(e, t, i) {
        return d(e, 0, t, i);
      }
      function m(e, t, i) {
        return d(e, 2, t, i);
      }
      function _(e, t, i) {
        return d(e, 1, t, i);
      }
    },
    82817: (e, t, i) => {
      "use strict";
      i.d(t, {
        EG: () => r,
        II: () => d,
        S2: () => p,
        Uz: () => h,
        aL: () => l,
        ab: () => n,
        qR: () => o,
        zB: () => g,
      });
      var s = i(3577);
      function n(e) {
        const t = e.toLowerCase();
        return t.endsWith(".jpg")
          ? "image/jpeg"
          : t.endsWith(".png")
            ? "image/png"
            : t.endsWith(".gif")
              ? "image/gif"
              : t.endsWith(".mp4")
                ? "video/mp4"
                : t.endsWith(".webm")
                  ? "video/webm"
                  : t.endsWith(".srt")
                    ? "text/srt"
                    : t.endsWith(".vtt")
                      ? "text/vtt"
                      : t.endsWith(".webp")
                        ? "image/webp"
                        : void 0;
      }
      function o(e) {
        switch (e) {
          case "image/jpeg":
            return ".jpg";
          case "image/png":
            return ".png";
          case "image/gif":
            return ".gif";
          case "video/mp4":
            return ".mp4";
          case "video/webm":
            return ".webm";
          case "text/vtt":
            return ".vtt";
          case "text/srt":
            return ".srt";
          case "image/webp":
            return ".webp";
        }
        return (
          console.error("ConvertMimeTypeToExtension:Unexepected mime type ", e),
          ".jpg"
        );
      }
      function r(e) {
        switch (e) {
          case 1:
            return ".jpg";
          case 2:
            return ".gif";
          case 3:
            return ".png";
          case 5:
            return ".webm";
          case 4:
            return ".mp4";
          case 7:
            return ".srt";
          case 6:
            return ".vtt";
          case 10:
            return ".webp";
        }
      }
      function a(e) {
        const t = (0, s.x0)(),
          i = new Image();
        return (
          (i.onload = () => t.resolve(i)),
          (i.onerror = (e) => {
            console.error("LoadImage failed to load the image, details", e),
              t.resolve(void 0);
          }),
          (i.src = e),
          t.promise
        );
      }
      function c(e) {
        const t = (0, s.x0)(),
          i = document.createElement("video");
        return (
          (i.preload = "metadata"),
          i.addEventListener("loadedmetadata", () => t.resolve(i)),
          (i.onerror = (e) => {
            console.error("LoadVideo failed to load the video, details", e),
              t.resolve(void 0);
          }),
          (i.src = e),
          t.promise
        );
      }
      function l(e) {
        return e.startsWith("image/");
      }
      function h(e) {
        return e.startsWith("video/");
      }
      function p(e, t) {
        return t ? c(e) : a(e);
      }
      async function g(e, t) {
        if (t) return c(URL.createObjectURL(e));
        {
          const t = (0, s.x0)(),
            i = new FileReader();
          (i.onload = () => t.resolve(i.result ?? void 0)),
            (i.onerror = () => {
              console.error(
                "GetMediaElementFromFile failed to load the image, details",
                i.error,
              ),
                t.resolve(void 0);
            }),
            i.readAsDataURL(e);
          const n = await t.promise;
          if (!n) return;
          return a(n.toString());
        }
      }
      function d(e) {
        return e
          ? e instanceof HTMLVideoElement
            ? { width: e.videoWidth, height: e.videoHeight }
            : { width: e.width, height: e.height }
          : { width: 0, height: 0 };
      }
    },
    81416: (e, t, i) => {
      "use strict";
      i.d(t, { I: () => m });
      var s,
        n = i(34629),
        o = i(90626),
        r = i(73745),
        a = i(75844),
        c = i(6144),
        l = i(61859),
        h = i(16676),
        p = i(12155),
        g = i(81315),
        d = i.n(g),
        u = i(25489);
      !(function (e) {
        (e.topleft = "topleft"),
          (e.top = "top"),
          (e.topright = "topright"),
          (e.left = "left"),
          (e.middle = "middle"),
          (e.right = "right"),
          (e.bottomleft = "bottomleft"),
          (e.bottom = "bottom"),
          (e.bottomright = "bottomright");
      })(s || (s = {}));
      let m = class extends o.Component {
        m_rectLinkRegion;
        m_elLinkRegionBox;
        m_nLocalOffsetXPct;
        m_nLocalOffsetYPct;
        m_fnMouseUp = null;
        m_fnMouseMove = null;
        m_listeners = new c.Ji();
        m_strDescription = "";
        m_aspectRatio = 1;
        componentWillUnmount() {
          this.m_listeners.Unregister();
        }
        constructor(e) {
          super(e),
            (this.state = {
              curLeftPosPct: this.props.xPosPct,
              curTopPosPct: this.props.yPosPct,
              curRightPosPct: 100 - (this.props.widthPct + this.props.xPosPct),
              curBottomPosPct:
                100 - (this.props.yPosPct + this.props.heightPct),
              curWidthPct: this.props.widthPct,
              curHeightPct: this.props.heightPct,
              EdgeDown: void 0,
              text_link_url: this.props.link_url,
              text_link_description: this.props.link_description,
              bEditingLink: !1,
              valid_link: this.validateUrl(this.props.link_url),
            }),
            (this.m_strDescription = this.props.link_description ?? ""),
            (this.m_aspectRatio =
              this.props.heightPct > 0 && this.props.widthPct > 0
                ? this.props.widthPct / this.props.heightPct
                : 1);
        }
        LinkRegionBoxRef(e) {
          this.m_elLinkRegionBox = e;
        }
        OnMouseDown(e, t) {
          this.m_elLinkRegionBox?.parentElement &&
            this.m_elLinkRegionBox.ownerDocument.defaultView &&
            ((this.m_fnMouseUp = (e) => {
              this.OnMouseUp(e, t);
            }),
            (this.m_fnMouseMove = (e) => {
              this.OnMouseMove(e, t);
            }),
            this.setState({ EdgeDown: t }),
            (this.m_rectLinkRegion =
              this.m_elLinkRegionBox.parentElement.getBoundingClientRect()),
            (this.m_nLocalOffsetXPct =
              ((e.clientX - this.m_rectLinkRegion.left) /
                (this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
                100 -
              this.state.curLeftPosPct),
            (this.m_nLocalOffsetYPct =
              ((e.clientY - this.m_rectLinkRegion.top) /
                (this.m_rectLinkRegion.bottom - this.m_rectLinkRegion.top)) *
                100 -
              this.state.curTopPosPct),
            this.m_listeners.AddEventListener(
              this.m_elLinkRegionBox.ownerDocument.defaultView,
              "mousemove",
              this.m_fnMouseMove,
            ),
            this.m_listeners.AddEventListener(
              this.m_elLinkRegionBox.ownerDocument.defaultView,
              "mouseup",
              this.m_fnMouseUp,
            )),
            e.preventDefault(),
            e.stopPropagation();
        }
        OnMouseMove(e, t) {
          if (void 0 !== this.state.EdgeDown) {
            switch ((e.shiftKey && this.m_fnMouseUp(), t)) {
              case s.left:
                this.UpdateState({
                  curLeftPosPct: this.CalcLeftEdge(e.clientX),
                });
                break;
              case s.right:
                this.UpdateState({
                  curRightPosPct: this.CalcRightEdge(e.clientX),
                });
                break;
              case s.top:
                this.UpdateState({ curTopPosPct: this.CalcTopEdge(e.clientY) });
                break;
              case s.bottom:
                this.UpdateState({
                  curBottomPosPct: this.CalcBottomEdge(e.clientY),
                });
                break;
              case s.topleft:
                this.UpdateState({
                  curTopPosPct: this.CalcBottomEdge(e.clientY),
                  curLeftPosPct: this.CalcLeftEdge(e.clientX),
                });
                break;
              case s.topright:
                this.UpdateState({
                  curTopPosPct: this.CalcTopEdge(e.clientY),
                  curRightPosPct: this.CalcRightEdge(e.clientX),
                });
                break;
              case s.bottomleft:
                this.UpdateState({
                  curLeftPosPct: this.CalcLeftEdge(e.clientX),
                  curBottomPosPct: this.CalcBottomEdge(e.clientY),
                });
                break;
              case s.bottomright:
                this.UpdateState({
                  curRightPosPct: this.CalcRightEdge(e.clientX),
                  curBottomPosPct: this.CalcBottomEdge(e.clientY),
                });
                break;
              case s.middle: {
                const t = (0, u.OQ)(
                    this.CalcLeftEdge(e.clientX),
                    0,
                    100 - this.state.curWidthPct,
                  ),
                  i = 100 - (t + this.state.curWidthPct),
                  s = (0, u.OQ)(
                    this.CalcTopEdge(e.clientY),
                    0,
                    100 - this.state.curHeightPct,
                  ),
                  n = {
                    curLeftPosPct: t,
                    curRightPosPct: i,
                    curTopPosPct: s,
                    curBottomPosPct: 100 - (s + this.state.curHeightPct),
                  };
                this.setState(n);
                break;
              }
            }
            e.preventDefault(), e.stopPropagation();
          }
        }
        IsValidPct(e) {
          return e >= 0 && e <= 100;
        }
        UpdateState(e) {
          let t =
              void 0 !== e.curTopPosPct
                ? e.curTopPosPct
                : this.state.curTopPosPct,
            i =
              void 0 !== e.curBottomPosPct
                ? e.curBottomPosPct
                : this.state.curBottomPosPct,
            s =
              void 0 !== e.curLeftPosPct
                ? e.curLeftPosPct
                : this.state.curLeftPosPct,
            n =
              void 0 !== e.curRightPosPct
                ? e.curRightPosPct
                : this.state.curRightPosPct,
            o = (0, u.OQ)(
              100 - n - s,
              this.props.widthMinPct || 0,
              this.props.widthMaxPct || 100,
            ),
            r = (0, u.OQ)(
              100 - i - t,
              this.props.heightMinPct || 0,
              this.props.heightMaxPct || 100,
            );
          this.props.bLockAspectRatio &&
            (void 0 !== e.curLeftPosPct || void 0 !== e.curRightPosPct
              ? (r = o / this.m_aspectRatio)
              : (o = r * this.m_aspectRatio)),
            void 0 !== e.curLeftPosPct
              ? (s = 100 - n - o)
              : (n = 100 - (s + o)),
            void 0 !== e.curTopPosPct ? (t = 100 - i - r) : (i = 100 - (t + r));
          const a = 100 - n - s,
            c = 100 - i - t;
          this.IsValidPct(s) &&
            this.IsValidPct(n) &&
            this.IsValidPct(t) &&
            this.IsValidPct(i) &&
            this.IsValidPct(a) &&
            this.IsValidPct(c) &&
            this.setState({
              curLeftPosPct: s,
              curRightPosPct: n,
              curTopPosPct: t,
              curBottomPosPct: i,
            });
        }
        GetXPercent(e) {
          return this.m_rectLinkRegion
            ? ((e - this.m_rectLinkRegion.left) /
                (this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
                100 -
                (this.m_nLocalOffsetXPct ?? 0)
            : 0;
        }
        GetYPercent(e) {
          return this.m_rectLinkRegion
            ? ((e - this.m_rectLinkRegion.top) /
                (this.m_rectLinkRegion.bottom - this.m_rectLinkRegion.top)) *
                100 -
                (this.m_nLocalOffsetYPct ?? 0)
            : 0;
        }
        CalcLeftEdge(e) {
          return (0, u.OQ)(this.GetXPercent(e), 0, 100);
        }
        CalcRightEdge(e) {
          return (0, u.OQ)(
            100 - (this.GetXPercent(e) + this.state.curWidthPct),
            0,
            100,
          );
        }
        CalcTopEdge(e) {
          return (0, u.OQ)(this.GetYPercent(e), 0, 100);
        }
        CalcBottomEdge(e) {
          return (0, u.OQ)(
            100 - (this.GetYPercent(e) + this.state.curHeightPct),
            0,
            100,
          );
        }
        OnMouseUp(e, t) {
          this.setState({
            curWidthPct:
              100 - this.state.curRightPosPct - this.state.curLeftPosPct,
          }),
            this.setState({
              curHeightPct:
                100 - this.state.curBottomPosPct - this.state.curTopPosPct,
            }),
            this.setState({ EdgeDown: void 0 }),
            this.props.updateFn(this.props.index, {
              xPosPct: this.state.curLeftPosPct,
              yPosPct: this.state.curTopPosPct,
              widthPct: this.state.curWidthPct,
              heightPct: this.state.curHeightPct,
              link_url: this.state.text_link_url,
              link_description: this.state.text_link_description,
            }),
            this.m_listeners.Unregister();
        }
        async HandleDelete() {
          this.props.deleteFn && this.props.deleteFn(this.props.index);
        }
        OnSetLinkURLChange(e) {
          this.setState({
            text_link_url: e.target.value,
            valid_link: this.validateUrl(e.target.value),
          });
        }
        OnSetLinkDescriptionChange(e) {
          this.setState({ text_link_description: e.target.value });
        }
        validateUrl(e) {
          return (
            null != e &&
            /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(
              e,
            )
          );
        }
        OnSaveLink() {
          (this.m_strDescription = this.state.text_link_description ?? ""),
            this.setState({ bEditingLink: !this.state.bEditingLink }),
            this.props.updateFn(this.props.index, {
              xPosPct: this.state.curLeftPosPct,
              yPosPct: this.state.curTopPosPct,
              widthPct: this.state.curWidthPct,
              heightPct: this.state.curHeightPct,
              link_url: this.state.text_link_url,
              link_description: this.state.text_link_description,
            });
        }
        OnEditLink() {
          this.setState({ bEditingLink: !this.state.bEditingLink });
        }
        render() {
          let e = {
              left: this.state.curLeftPosPct + "%",
              top: this.state.curTopPosPct + "%",
              right: this.state.curRightPosPct + "%",
              bottom: this.state.curBottomPosPct + "%",
            },
            t = d().LinkRegionDragBox;
          return (
            null != this.state.EdgeDown &&
              (t += ` ${d().EdgeDown} ` + d()[this.state.EdgeDown]),
            o.createElement(
              "div",
              {
                className: t,
                style: e,
                ref: this.LinkRegionBoxRef,
                draggable: !1,
              },
              o.createElement(
                "div",
                { className: d().LinkRegionGridBox },
                o.createElement("div", {
                  className: `${d().LinkRegionEdge} ${d().TopLeft}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, s.topleft);
                  },
                  draggable: !1,
                }),
                o.createElement("div", {
                  className: `${d().LinkRegionEdge} ${d().Top}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, s.top);
                  },
                }),
                o.createElement("div", {
                  className: `${d().LinkRegionEdge} ${d().TopRight}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, s.topright);
                  },
                  draggable: !1,
                }),
                o.createElement("div", {
                  className: `${d().LinkRegionEdge} ${d().Left}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, s.left);
                  },
                  draggable: !1,
                }),
                o.createElement(
                  "div",
                  {
                    className: `${d().LinkRegionEdge} ${d().Middle}`,
                    onMouseDown: (e) => {
                      this.OnMouseDown(e, s.middle);
                    },
                    draggable: !1,
                  },
                  this.props.deleteFn &&
                    o.createElement(
                      "div",
                      {
                        className: d().LinkRegionDelete,
                        onClick: this.HandleDelete,
                      },
                      o.createElement(p.sED, null),
                    ),
                  !this.props.bDisableLink &&
                    o.createElement(
                      "div",
                      {
                        className: d().LinkRegionSettings,
                        onClick: this.OnEditLink,
                      },
                      o.createElement(p.xv8, null),
                    ),
                  o.createElement(
                    "div",
                    { className: d().LinkText },
                    " ",
                    this.m_strDescription,
                    " ",
                  ),
                ),
                o.createElement("div", {
                  className: `${d().LinkRegionEdge} ${d().Right}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, s.right);
                  },
                  draggable: !1,
                }),
                o.createElement("div", {
                  className: `${d().LinkRegionEdge} ${d().BottomLeft}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, s.bottomleft);
                  },
                  draggable: !1,
                }),
                o.createElement("div", {
                  className: `${d().LinkRegionEdge} ${d().Bottom}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, s.bottom);
                  },
                  draggable: !1,
                }),
                o.createElement("div", {
                  className: `${d().LinkRegionEdge} ${d().BottomRight}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, s.bottomright);
                  },
                  draggable: !1,
                }),
              ),
              this.state.bEditingLink &&
                o.createElement(
                  "div",
                  { className: d().LinkRegionInfo },
                  o.createElement(h.pd, {
                    className: d().LinkRegionInput,
                    type: "text",
                    name: "link_url",
                    value: this.state.text_link_url,
                    label: (0, l.we)("#SteamTV_LinkURL"),
                    placeholder: "https://www.example.com",
                    onChange: this.OnSetLinkURLChange,
                    mustBeURL: !0,
                  }),
                  o.createElement(h.pd, {
                    className: d().LinkRegionInput,
                    type: "text",
                    name: "link_description",
                    value: this.state.text_link_description,
                    label: (0, l.we)("#SteamTV_LinkDescription"),
                    placeholder: (0, l.we)(
                      "#SteamTV_LinkDescription_Placeholder",
                    ),
                    onChange: this.OnSetLinkDescriptionChange,
                  }),
                  o.createElement(
                    "div",
                    { className: d().LinkRegionButtonContainer },
                    o.createElement(
                      h.$n,
                      {
                        disabled: !this.state.valid_link,
                        onClick: this.OnSaveLink,
                      },
                      " ",
                      (0, l.we)("#Button_OK"),
                      " ",
                    ),
                    o.createElement(
                      h.$n,
                      { onClick: this.OnEditLink },
                      " ",
                      (0, l.we)("#Button_Cancel"),
                    ),
                  ),
                ),
            )
          );
        }
      };
      (0, n.Cg)([r.oI], m.prototype, "LinkRegionBoxRef", null),
        (0, n.Cg)([r.oI], m.prototype, "OnMouseDown", null),
        (0, n.Cg)([r.oI], m.prototype, "OnMouseMove", null),
        (0, n.Cg)([r.oI], m.prototype, "OnMouseUp", null),
        (0, n.Cg)([r.oI], m.prototype, "HandleDelete", null),
        (0, n.Cg)([r.oI], m.prototype, "OnSetLinkURLChange", null),
        (0, n.Cg)([r.oI], m.prototype, "OnSetLinkDescriptionChange", null),
        (0, n.Cg)([r.oI], m.prototype, "OnSaveLink", null),
        (0, n.Cg)([r.oI], m.prototype, "OnEditLink", null),
        (m = (0, n.Cg)([a.PA], m));
    },
    66331: (e, t, i) => {
      "use strict";
      i.d(t, { q: () => u, t: () => m });
      var s = i(34629),
        n = i(90626),
        o = i(73744),
        r = i(16676),
        a = i(81416),
        c = i(9154),
        l = i(52038),
        h = i(61859),
        p = i(73745),
        g = i(50666),
        d = i(56011);
      class u extends n.Component {
        state = {
          region: {
            xPosPct: 0,
            yPosPct: 0,
            widthPct: (this.GetDestWidth() / this.props.uploadFile.width) * 100,
            heightPct:
              (this.GetDestHeight() / this.props.uploadFile.height) * 100,
          },
        };
        async OnCrop() {
          const e = this.props.uploadFile.GetCanvasImageSource();
          e &&
            (await (async function (e, t, i, s, n, o, r, a, c) {
              return new Promise((l, h) => {
                const p = m(c);
                if (!p) return void h("Invalid format provided");
                const g = document.createElement("canvas");
                (g.width = r), (g.height = a);
                const u = 0,
                  _ = 0,
                  w = g.getContext("2d");
                w?.drawImage(t, i, s, n, o, u, _, r, a),
                  g.toBlob((t) => {
                    const i = g.toDataURL(p);
                    3 !== c && i.startsWith("data:image/png")
                      ? h("Unable to encode into the requested file format")
                      : t
                        ? ((e.file = (0, d.pE)(t, e.filename)),
                          (e.width = r),
                          (e.height = a),
                          (e.dataUrl = i),
                          (e.uploadTime = Date.now()),
                          (e.bCropped = !0),
                          l())
                        : h("Unable to apply crop into image");
                  });
              });
            })(
              this.props.uploadFile,
              e,
              (this.state.region.xPosPct / 100) * this.props.uploadFile.width,
              (this.state.region.yPosPct / 100) * this.props.uploadFile.height,
              (this.state.region.widthPct / 100) * this.props.uploadFile.width,
              (this.state.region.heightPct / 100) *
                this.props.uploadFile.height,
              this.GetDestWidth(),
              this.GetDestHeight(),
              this.props.fileType,
            )),
            this.props.closeModal?.();
        }
        UpdateCrop(e, t) {
          this.setState({ region: t });
        }
        GetDestWidth() {
          const { uploadFile: e, forceResolution: t } = this.props;
          if (t) return t.width;
          const i = e.GetCurrentImageOption();
          return i ? o.Fj[i.artworkType].width : 0;
        }
        GetDestHeight() {
          const { uploadFile: e, forceResolution: t } = this.props;
          if (t) return t.width;
          const i = e.GetCurrentImageOption();
          return i ? o.Fj[i.artworkType].height : 0;
        }
        GetLargestBoxThatFits(e, t, i, s) {
          let n = i,
            o = (n * t) / Math.max(e, 1);
          return (
            o > s && ((o = s), (n = (o * e) / Math.max(t, 1))),
            { width: n, height: o }
          );
        }
        GetPreviewWindowStyle() {
          const { region: e } = this.state,
            t = this.GetLargestBoxThatFits(
              this.GetDestWidth(),
              this.GetDestHeight(),
              500,
              150,
            ),
            i = t.width,
            s = t.height,
            n = 1 / Math.max(e.widthPct / 100, 1e-4),
            o = 1 / Math.max(e.heightPct / 100, 1e-4),
            r = (this.props.uploadFile.width * e.xPosPct) / 100,
            a = (this.props.uploadFile.height * e.yPosPct) / 100;
          return {
            width: i,
            height: s,
            backgroundPosition: `${-r * ((i * n) / this.props.uploadFile.width)}px ${-a * ((s * o) / this.props.uploadFile.height)}px`,
            backgroundSize: `${100 * n}% ${100 * o}%`,
            backgroundImage: `url(${this.props.uploadFile.dataUrl})`,
          };
        }
        render() {
          const e = (this.GetDestWidth() / this.props.uploadFile.width) * 100,
            t = (this.GetDestHeight() / this.props.uploadFile.height) * 100,
            i = this.GetLargestBoxThatFits(
              this.props.uploadFile.width,
              this.props.uploadFile.height,
              800,
              500,
            );
          return n.createElement(
            c.x_,
            {
              onEscKeypress: this.props.closeModal,
              bDisableBackgroundDismiss: !0,
            },
            n.createElement(
              "div",
              {
                className: (0, l.A)("DialogContent", "_DialogCenterVertically"),
              },
              n.createElement(
                r.iK,
                null,
                (0, h.we)(
                  "#ImageUpload_CropModalTitleDims",
                  this.GetDestWidth(),
                  this.GetDestHeight(),
                ),
              ),
              n.createElement(
                "div",
                { className: (0, l.A)("DialogBodyText") },
                (0, h.we)("#ImageUpload_CropModalDescription"),
              ),
              n.createElement(
                "div",
                {
                  className: g.CropImage,
                  style: { width: i.width, height: i.height },
                },
                n.createElement("img", {
                  style: {
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                  },
                  src: this.props.uploadFile.dataUrl,
                }),
                n.createElement(a.I, {
                  bLockAspectRatio: !0,
                  bDisableLink: !0,
                  index: 0,
                  updateFn: this.UpdateCrop,
                  xPosPct: 0,
                  yPosPct: 0,
                  widthMinPct: e,
                  heightMinPct: t,
                  widthPct: e,
                  heightPct: t,
                }),
              ),
              n.createElement(
                "div",
                { className: g.CropPreviewGroup },
                n.createElement(
                  "div",
                  { className: g.CropPreviewLabel },
                  (0, h.we)("#ImageUpload_CropPreview"),
                ),
                n.createElement("div", { style: this.GetPreviewWindowStyle() }),
              ),
              n.createElement(
                r.jn,
                { onClick: this.OnCrop },
                (0, h.we)("#ImageUpload_CropAndContinue"),
              ),
            ),
          );
        }
      }
      function m(e) {
        switch (e) {
          case 3:
            return "image/png";
          case 1:
            return "image/jpeg";
        }
      }
      (0, s.Cg)([p.oI], u.prototype, "OnCrop", null),
        (0, s.Cg)([p.oI], u.prototype, "UpdateCrop", null);
    },
  },
]);
