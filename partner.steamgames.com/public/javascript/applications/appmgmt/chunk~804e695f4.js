/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [9017],
  {
    37403: (e, t, r) => {
      r.d(t, {
        $Y: () => v,
        BE: () => i,
        QU: () => j,
        _z: () => l,
        kZ: () => te,
        wS: () => ee,
        zQ: () => c,
      });
      var i,
        a = r(80613),
        s = r.n(a),
        n = r(89068),
        m = r(56545),
        o = r(36003);
      class l extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.appids || n.Sg(l.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: n.qM.readInt32,
                    pbr: n.qM.readPackedInt32,
                    bw: n.gp.writeRepeatedInt32,
                  },
                  language: { n: 2, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = n.w0(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(l.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetApps_Request";
        }
      }
      class u extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.apps || n.Sg(u.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: { apps: { n: 1, c: o.WV, r: !0, q: !0 } },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = n.w0(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(u.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetApps_Response";
        }
      }
      class c extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.appid || n.Sg(c.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  appid: { n: 1, br: n.qM.readInt32, bw: n.gp.writeInt32 },
                  language: { n: 2, br: n.qM.readString, bw: n.gp.writeString },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = n.w0(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(c.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetAppRichPresenceLocalization_Request";
        }
      }
      class d extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.appid || n.Sg(d.M()),
            a.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  appid: { n: 1, br: n.qM.readInt32, bw: n.gp.writeInt32 },
                  token_lists: { n: 2, c: g, r: !0, q: !0 },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = n.w0(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(d.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetAppRichPresenceLocalization_Response";
        }
      }
      class B extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.name || n.Sg(B.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  name: { n: 1, br: n.qM.readString, bw: n.gp.writeString },
                  value: { n: 2, br: n.qM.readString, bw: n.gp.writeString },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = n.w0(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(B.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetAppRichPresenceLocalization_Response_Token";
        }
      }
      class g extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.language || n.Sg(g.M()),
            a.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  language: { n: 1, br: n.qM.readString, bw: n.gp.writeString },
                  tokens: { n: 2, c: B, r: !0, q: !0 },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = n.w0(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(g.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetAppRichPresenceLocalization_Response_TokenList";
        }
      }
      class b extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.steamid || n.Sg(b.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  comment_thread_type: {
                    n: 2,
                    br: n.qM.readEnum,
                    bw: n.gp.writeEnum,
                  },
                  gidfeature: {
                    n: 3,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  gidfeature2: {
                    n: 4,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  commentthreadid: {
                    n: 5,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  start: { n: 6, br: n.qM.readInt32, bw: n.gp.writeInt32 },
                  count: { n: 7, br: n.qM.readInt32, bw: n.gp.writeInt32 },
                  upvoters: { n: 8, br: n.qM.readInt32, bw: n.gp.writeInt32 },
                  include_deleted: {
                    n: 9,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  gidcomment: {
                    n: 10,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  time_oldest: {
                    n: 11,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  oldest_first: {
                    n: 12,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = n.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(b.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetCommentThread_Request";
        }
      }
      class y extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.gidcomment || n.Sg(y.M()),
            a.Message.initialize(this, e, 0, -1, [12], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  gidcomment: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  steamid: {
                    n: 2,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  timestamp: {
                    n: 3,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  text: { n: 4, br: n.qM.readString, bw: n.gp.writeString },
                  upvotes: { n: 5, br: n.qM.readInt32, bw: n.gp.writeInt32 },
                  hidden: { n: 6, br: n.qM.readBool, bw: n.gp.writeBool },
                  hidden_by_user: {
                    n: 7,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  deleted: { n: 8, br: n.qM.readBool, bw: n.gp.writeBool },
                  ipaddress: { n: 9, c: o.kK },
                  total_hidden: {
                    n: 10,
                    br: n.qM.readInt32,
                    bw: n.gp.writeInt32,
                  },
                  upvoted_by_user: {
                    n: 11,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  reactions: { n: 12, c: p, r: !0, q: !0 },
                  gidparentcomment: {
                    n: 13,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = n.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(y.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_Comment";
        }
      }
      class p extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.reactionid || n.Sg(p.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  reactionid: {
                    n: 1,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  count: { n: 2, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = n.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(p.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_Comment_Reaction";
        }
      }
      class M extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.comments || n.Sg(M.M()),
            a.Message.initialize(this, e, 0, -1, [1, 2, 9], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  comments: { n: 1, c: y, r: !0, q: !0 },
                  deleted_comments: { n: 2, c: y, r: !0, q: !0 },
                  steamid: {
                    n: 3,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  commentthreadid: {
                    n: 4,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  start: { n: 5, br: n.qM.readInt32, bw: n.gp.writeInt32 },
                  count: { n: 6, br: n.qM.readInt32, bw: n.gp.writeInt32 },
                  total_count: {
                    n: 7,
                    br: n.qM.readInt32,
                    bw: n.gp.writeInt32,
                  },
                  upvotes: { n: 8, br: n.qM.readInt32, bw: n.gp.writeInt32 },
                  upvoters: {
                    n: 9,
                    r: !0,
                    q: !0,
                    br: n.qM.readUint32,
                    pbr: n.qM.readPackedUint32,
                    bw: n.gp.writeRepeatedUint32,
                  },
                  user_subscribed: {
                    n: 10,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  user_upvoted: {
                    n: 11,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  answer_commentid: {
                    n: 12,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  answer_actor: {
                    n: 13,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  answer_actor_rank: {
                    n: 14,
                    br: n.qM.readInt32,
                    bw: n.gp.writeInt32,
                  },
                  can_post: { n: 15, br: n.qM.readBool, bw: n.gp.writeBool },
                  comment_thread_type: {
                    n: 16,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  gidfeature: {
                    n: 17,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  gidfeature2: {
                    n: 18,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = n.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(M.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetCommentThread_Response";
        }
      }
      class w extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.steamid || n.Sg(w.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  comment_thread_type: {
                    n: 2,
                    br: n.qM.readEnum,
                    bw: n.gp.writeEnum,
                  },
                  gidfeature: {
                    n: 3,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  gidfeature2: {
                    n: 4,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  text: { n: 6, br: n.qM.readString, bw: n.gp.writeString },
                  gidparentcomment: {
                    n: 7,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  suppress_notifications: {
                    n: 8,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  is_report: { n: 9, br: n.qM.readBool, bw: n.gp.writeBool },
                  start_hidden: {
                    n: 10,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = n.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(w.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_PostCommentToThread_Request";
        }
      }
      class _ extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.gidcomment || n.Sg(_.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  gidcomment: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  commentthreadid: {
                    n: 2,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  count: { n: 3, br: n.qM.readInt32, bw: n.gp.writeInt32 },
                  upvotes: { n: 4, br: n.qM.readInt32, bw: n.gp.writeInt32 },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = n.w0(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(_.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_PostCommentToThread_Response";
        }
      }
      class z extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.steamid || n.Sg(z.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  comment_thread_type: {
                    n: 2,
                    br: n.qM.readEnum,
                    bw: n.gp.writeEnum,
                  },
                  gidfeature: {
                    n: 3,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  gidfeature2: {
                    n: 4,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  gidcomment: {
                    n: 5,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  undelete: { n: 6, br: n.qM.readBool, bw: n.gp.writeBool },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = n.w0(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(z.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_DeleteCommentFromThread_Request";
        }
      }
      class f extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new f();
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_DeleteCommentFromThread_Response";
        }
      }
      class S extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.commentthreadtype || n.Sg(S.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  commentthreadtype: {
                    n: 1,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  steamid: {
                    n: 2,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  gidfeature: {
                    n: 3,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  gidfeature2: {
                    n: 4,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  gidcomment: {
                    n: 5,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  rate_up: { n: 6, br: n.qM.readBool, bw: n.gp.writeBool },
                  suppress_notifications: {
                    n: 7,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = n.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(S.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_RateCommentThread_Request";
        }
      }
      class R extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.gidcomment || n.Sg(R.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  gidcomment: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  commentthreadid: {
                    n: 2,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  count: { n: 3, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  upvotes: { n: 4, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  has_upvoted: { n: 5, br: n.qM.readBool, bw: n.gp.writeBool },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = n.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(R.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_RateCommentThread_Response";
        }
      }
      class h extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.commentthreadtype || n.Sg(h.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  commentthreadtype: {
                    n: 1,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  steamid: {
                    n: 2,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  gidfeature: {
                    n: 3,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  gidfeature2: {
                    n: 4,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  gidcomment: {
                    n: 5,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  max_results: {
                    n: 6,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = n.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(h.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetCommentThreadRatings_Request";
        }
      }
      class F extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.commentthreadid || n.Sg(F.M()),
            a.Message.initialize(this, e, 0, -1, [5], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  commentthreadid: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  gidcomment: {
                    n: 2,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  upvotes: { n: 3, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  has_upvoted: { n: 4, br: n.qM.readBool, bw: n.gp.writeBool },
                  upvoter_accountids: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: n.qM.readUint32,
                    pbr: n.qM.readPackedUint32,
                    bw: n.gp.writeRepeatedUint32,
                  },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = n.w0(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(F.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetCommentThreadRatings_Response";
        }
      }
      class j extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.announcementid || n.Sg(j.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  announcementid: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  vote_up: { n: 2, br: n.qM.readBool, bw: n.gp.writeBool },
                  clan_accountid: {
                    n: 3,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = n.w0(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(j.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_RateClanAnnouncement_Request";
        }
      }
      class W extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new W();
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_RateClanAnnouncement_Response";
        }
      }
      class v extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.announcementid || n.Sg(v.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  announcementid: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = n.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(v.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetClanAnnouncementVoteForUser_Request";
        }
      }
      class C extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.voted_up || n.Sg(C.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  voted_up: { n: 1, br: n.qM.readBool, bw: n.gp.writeBool },
                  voted_down: { n: 2, br: n.qM.readBool, bw: n.gp.writeBool },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = n.w0(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(C.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetClanAnnouncementVoteForUser_Response";
        }
      }
      class q extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.loc_group_id || n.Sg(q.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  loc_group_id: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  image_hash: {
                    n: 2,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  thumbnail_hash: {
                    n: 3,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  file_type: { n: 4, br: n.qM.readEnum, bw: n.gp.writeEnum },
                  group: { n: 5, br: n.qM.readEnum, bw: n.gp.writeEnum },
                  width: { n: 6, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  height: { n: 7, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  extensions: {
                    n: 8,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = n.w0(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(q.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_ClanLocGroupImage";
        }
      }
      class T extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.steamid || n.Sg(T.M()),
            a.Message.initialize(this, e, 0, -1, [4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  group: { n: 2, br: n.qM.readEnum, bw: n.gp.writeEnum },
                  language: { n: 3, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  loc_group_ids: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: n.qM.readUint64String,
                    pbr: n.qM.readPackedUint64String,
                    bw: n.gp.writeRepeatedUint64String,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = n.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(T.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetClanLocGroupImages_Request";
        }
      }
      class O extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.images || n.Sg(O.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: { images: { n: 1, c: q, r: !0, q: !0 } },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = n.w0(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(O.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetClanLocGroupImages_Response";
        }
      }
      class I extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.steamid || n.Sg(I.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  filter_user_uploaded_only: {
                    n: 2,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = n.w0(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(I.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetAvatarHistory_Request";
        }
      }
      class U extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.avatars || n.Sg(U.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: { avatars: { n: 1, c: x, r: !0, q: !0 } },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = n.w0(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(U.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetAvatarHistory_Response";
        }
      }
      class x extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.avatar_sha1 || n.Sg(x.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  avatar_sha1: {
                    n: 1,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  user_uploaded: {
                    n: 2,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  timestamp: {
                    n: 3,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = n.w0(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(x.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetAvatarHistory_Response_AvatarData";
        }
      }
      class P extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.priority || n.Sg(P.M()),
            a.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  priority: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  appid: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: n.qM.readUint32,
                    pbr: n.qM.readPackedUint32,
                    bw: n.gp.writeRepeatedUint32,
                  },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = n.w0(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(P.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(P.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAppPriority";
        }
      }
      class N extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.count || n.Sg(N.M()),
            a.Message.initialize(this, e, 0, -1, [5, 6, 8], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  count: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  offset: { n: 2, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  rtime32_start_time: {
                    n: 3,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  rtime32_end_time: {
                    n: 4,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  language_preference: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: n.qM.readUint32,
                    pbr: n.qM.readPackedUint32,
                    bw: n.gp.writeRepeatedUint32,
                  },
                  filter_event_type: {
                    n: 6,
                    r: !0,
                    q: !0,
                    br: n.qM.readEnum,
                    pbr: n.qM.readPackedEnum,
                    bw: n.gp.writeRepeatedEnum,
                  },
                  filter_to_appid: {
                    n: 7,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  app_list: { n: 8, c: P, r: !0, q: !0 },
                  count_after: {
                    n: 9,
                    d: 0,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  count_before: {
                    n: 10,
                    d: 0,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = n.w0(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(N.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetUserPartnerEventNews_Request";
        }
      }
      class A extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.results || n.Sg(A.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: { results: { n: 1, c: o.h2, r: !0, q: !0 } },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = n.w0(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(A.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetUserPartnerEventNews_Response";
        }
      }
      class E extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.include_steam_blog || n.Sg(E.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  include_steam_blog: {
                    n: 1,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  filter_to_played_within_days: {
                    n: 2,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  include_only_game_updates: {
                    n: 3,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = n.w0(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(E.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetBestEventsForUser_Request";
        }
      }
      class G extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.clanid || n.Sg(G.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  clanid: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  event_gid: {
                    n: 2,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  announcement_gid: {
                    n: 3,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  appid: { n: 4, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  possible_takeover: {
                    n: 5,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  rtime32_last_modified: {
                    n: 6,
                    d: 0,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  user_app_priority: {
                    n: 7,
                    br: n.qM.readInt32,
                    bw: n.gp.writeInt32,
                  },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = n.w0(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(G.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_PartnerEventResult";
        }
      }
      class L extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.results || n.Sg(L.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: { results: { n: 1, c: G, r: !0, q: !0 } },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = n.w0(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(L.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetBestEventsForUser_Response";
        }
      }
      class k extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new k();
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_ClearUserPartnerEventsAppPriorities_Request";
        }
      }
      class D extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new D();
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_ClearUserPartnerEventsAppPriorities_Response";
        }
      }
      class $ extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.appid || n.Sg($.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: {
                  appid: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  user_app_priority: {
                    n: 2,
                    br: n.qM.readInt32,
                    bw: n.gp.writeInt32,
                  },
                },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = n.w0($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT($.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq($.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new $();
          return $.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj($.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0($.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_PartnerEventsAppPriority";
        }
      }
      class V extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new V();
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new V();
          return V.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetUserPartnerEventsAppPriorities_Request";
        }
      }
      class H extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.priorities || n.Sg(H.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: { priorities: { n: 1, c: $, r: !0, q: !0 } },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = n.w0(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(H.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(H.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(H.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(H.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetUserPartnerEventsAppPriorities_Response";
        }
      }
      class K extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            K.prototype.appid || n.Sg(K.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = {
                proto: K,
                fields: {
                  appid: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = n.w0(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(K.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(K.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new K();
          return K.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(K.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(K.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_ClearSinglePartnerEventsAppPriority_Request";
        }
      }
      class Y extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Y();
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new Y();
          return Y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_ClearSinglePartnerEventsAppPriority_Response";
        }
      }
      class Q extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Q.prototype.appid || n.Sg(Q.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: {
                  appid: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = n.w0(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(Q.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(Q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new Q();
          return Q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(Q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(Q.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_PartnerEventsShowMoreForApp_Request";
        }
      }
      class J extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new J();
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_PartnerEventsShowMoreForApp_Response";
        }
      }
      class Z extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.appid || n.Sg(Z.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: {
                  appid: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = n.w0(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(Z.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(Z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new Z();
          return Z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(Z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(Z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_PartnerEventsShowLessForApp_Request";
        }
      }
      class X extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new X();
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_PartnerEventsShowLessForApp_Response";
        }
      }
      class ee extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ee.prototype.markings || n.Sg(ee.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: { markings: { n: 1, c: te, r: !0, q: !0 } },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = n.w0(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(ee.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new ee();
          return ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_MarkPartnerEventsForUser_Request";
        }
      }
      class te extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            te.prototype.clanid || n.Sg(te.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = {
                proto: te,
                fields: {
                  clanid: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  event_gid: {
                    n: 2,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  display_location: {
                    n: 3,
                    br: n.qM.readEnum,
                    bw: n.gp.writeEnum,
                  },
                  mark_shown: { n: 4, br: n.qM.readBool, bw: n.gp.writeBool },
                  mark_read: { n: 5, br: n.qM.readBool, bw: n.gp.writeBool },
                },
              }),
            te.sm_m
          );
        }
        static MBF() {
          return te.sm_mbf || (te.sm_mbf = n.w0(te.M())), te.sm_mbf;
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(te.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new te();
          return te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(te.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_MarkPartnerEventsForUser_Request_PartnerEventMarking";
        }
      }
      class re extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new re();
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new re();
          return re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_MarkPartnerEventsForUser_Response";
        }
      }
      class ie extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ie.prototype.event_gids || n.Sg(ie.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
                fields: {
                  event_gids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: n.qM.readFixed64String,
                    pbr: n.qM.readPackedFixed64String,
                    bw: n.gp.writeRepeatedFixed64String,
                  },
                  include_read_events_only: {
                    n: 2,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                },
              }),
            ie.sm_m
          );
        }
        static MBF() {
          return ie.sm_mbf || (ie.sm_mbf = n.w0(ie.M())), ie.sm_mbf;
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(ie.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new ie();
          return ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetUserPartnerEventViewStatus_Request";
        }
      }
      class ae extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ae.prototype.events || n.Sg(ae.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ae.sm_m ||
              (ae.sm_m = {
                proto: ae,
                fields: { events: { n: 1, c: se, r: !0, q: !0 } },
              }),
            ae.sm_m
          );
        }
        static MBF() {
          return ae.sm_mbf || (ae.sm_mbf = n.w0(ae.M())), ae.sm_mbf;
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(ae.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(ae.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new ae();
          return ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(ae.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(ae.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetUserPartnerEventViewStatus_Response";
        }
      }
      class se extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            se.prototype.event_gid || n.Sg(se.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            se.sm_m ||
              (se.sm_m = {
                proto: se,
                fields: {
                  event_gid: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  last_shown_time: {
                    n: 2,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  last_read_time: {
                    n: 3,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  clan_account_id: {
                    n: 4,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                },
              }),
            se.sm_m
          );
        }
        static MBF() {
          return se.sm_mbf || (se.sm_mbf = n.w0(se.M())), se.sm_mbf;
        }
        toObject(e = !1) {
          return se.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(se.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new se();
          return se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(se.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetUserPartnerEventViewStatus_Response_PartnerEvent";
        }
      }
      class ne extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ne.prototype.gidfeature || n.Sg(ne.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ne.sm_m ||
              (ne.sm_m = {
                proto: ne,
                fields: {
                  gidfeature: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  gidfeature2: {
                    n: 2,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  gidcomment: {
                    n: 3,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  steamid: {
                    n: 4,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  commentthreadtype: {
                    n: 5,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  hide: { n: 6, br: n.qM.readBool, bw: n.gp.writeBool },
                  report_reason: {
                    n: 7,
                    br: n.qM.readEnum,
                    bw: n.gp.writeEnum,
                  },
                  report_text: {
                    n: 8,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                },
              }),
            ne.sm_m
          );
        }
        static MBF() {
          return ne.sm_mbf || (ne.sm_mbf = n.w0(ne.M())), ne.sm_mbf;
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(ne.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new ne();
          return ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_HideAndReportComment_Request";
        }
      }
      class me extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return me.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new me();
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new me();
          return me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_HideAndReportComment_Response";
        }
      }
      class oe extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            oe.prototype.steamid || n.Sg(oe.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            oe.sm_m ||
              (oe.sm_m = {
                proto: oe,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  itemid: {
                    n: 2,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                },
              }),
            oe.sm_m
          );
        }
        static MBF() {
          return oe.sm_mbf || (oe.sm_mbf = n.w0(oe.M())), oe.sm_mbf;
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(oe.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new oe();
          return oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetClanEventCrowdInMetadata_Request";
        }
      }
      class le extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            le.prototype.crowdin_project_id || n.Sg(le.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            le.sm_m ||
              (le.sm_m = {
                proto: le,
                fields: {
                  crowdin_project_id: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  crowdin_file_id: {
                    n: 2,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                },
              }),
            le.sm_m
          );
        }
        static MBF() {
          return le.sm_mbf || (le.sm_mbf = n.w0(le.M())), le.sm_mbf;
        }
        toObject(e = !1) {
          return le.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(le.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(le.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new le();
          return le.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(le.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(le.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetClanEventCrowdInMetadata_Response";
        }
      }
      class ue extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ue.prototype.steamid || n.Sg(ue.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ue.sm_m ||
              (ue.sm_m = {
                proto: ue,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                },
              }),
            ue.sm_m
          );
        }
        static MBF() {
          return ue.sm_mbf || (ue.sm_mbf = n.w0(ue.M())), ue.sm_mbf;
        }
        toObject(e = !1) {
          return ue.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(ue.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(ue.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new ue();
          return ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(ue.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(ue.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetClanCrowdInMetadata_Request";
        }
      }
      class ce extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ce.prototype.crowdin_project_id || n.Sg(ce.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ce.sm_m ||
              (ce.sm_m = {
                proto: ce,
                fields: {
                  crowdin_project_id: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  crowdin_directory_id: {
                    n: 2,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  push_by_default: {
                    n: 3,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                },
              }),
            ce.sm_m
          );
        }
        static MBF() {
          return ce.sm_mbf || (ce.sm_mbf = n.w0(ce.M())), ce.sm_mbf;
        }
        toObject(e = !1) {
          return ce.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(ce.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(ce.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new ce();
          return ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(ce.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(ce.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetClanCrowdInMetadata_Response";
        }
      }
      class de extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            de.prototype.steamid || n.Sg(de.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            de.sm_m ||
              (de.sm_m = {
                proto: de,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  itemid: {
                    n: 2,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  language: { n: 3, br: n.qM.readInt32, bw: n.gp.writeInt32 },
                },
              }),
            de.sm_m
          );
        }
        static MBF() {
          return de.sm_mbf || (de.sm_mbf = n.w0(de.M())), de.sm_mbf;
        }
        toObject(e = !1) {
          return de.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(de.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(de.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new de();
          return de.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(de.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(de.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return de.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_FetchTranslationFromCrowdIn_Request";
        }
      }
      class Be extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Be.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Be();
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new Be();
          return Be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_FetchTranslationFromCrowdIn_Response";
        }
      }
      class ge extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ge.prototype.review_labels || n.Sg(ge.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ge.sm_m ||
              (ge.sm_m = {
                proto: ge,
                fields: { review_labels: { n: 1, c: be, r: !0, q: !0 } },
              }),
            ge.sm_m
          );
        }
        static MBF() {
          return ge.sm_mbf || (ge.sm_mbf = n.w0(ge.M())), ge.sm_mbf;
        }
        toObject(e = !1) {
          return ge.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(ge.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(ge.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new ge();
          return ge.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(ge.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(ge.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_SetRecommendationBotReviewStatus_Request";
        }
      }
      class be extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            be.prototype.appid || n.Sg(be.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            be.sm_m ||
              (be.sm_m = {
                proto: be,
                fields: {
                  appid: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  recommendationid: {
                    n: 2,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  is_bot_review: {
                    n: 3,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                },
              }),
            be.sm_m
          );
        }
        static MBF() {
          return be.sm_mbf || (be.sm_mbf = n.w0(be.M())), be.sm_mbf;
        }
        toObject(e = !1) {
          return be.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(be.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new be();
          return be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(be.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_SetRecommendationBotReviewStatus_Request_ReviewLabel";
        }
      }
      class ye extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ye.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ye();
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new ye();
          return ye.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_SetRecommendationBotReviewStatus_Response";
        }
      }
      !(function (e) {
        (e.GetApps = function (e, t) {
          return e.SendMsg("Community.GetApps#1", (0, m.I8)(l, t), u, {
            bConstMethod: !0,
            ePrivilege: 2,
            eWebAPIKeyRequirement: 1,
          });
        }),
          (e.GetAppRichPresenceLocalization = function (e, t) {
            return e.SendMsg(
              "Community.GetAppRichPresenceLocalization#1",
              (0, m.I8)(c, t),
              d,
              { ePrivilege: 1 },
            );
          }),
          (e.GetCommentThread = function (e, t) {
            return e.SendMsg(
              "Community.GetCommentThread#1",
              (0, m.I8)(b, t),
              M,
              { ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.PostCommentToThread = function (e, t) {
            return e.SendMsg(
              "Community.PostCommentToThread#1",
              (0, m.I8)(w, t),
              _,
              { ePrivilege: 3 },
            );
          }),
          (e.DeleteCommentFromThread = function (e, t) {
            return e.SendMsg(
              "Community.DeleteCommentFromThread#1",
              (0, m.I8)(z, t),
              f,
              { ePrivilege: 1 },
            );
          }),
          (e.RateCommentThread = function (e, t) {
            return e.SendMsg(
              "Community.RateCommentThread#1",
              (0, m.I8)(S, t),
              R,
              { ePrivilege: 3 },
            );
          }),
          (e.GetCommentThreadRatings = function (e, t) {
            return e.SendMsg(
              "Community.GetCommentThreadRatings#1",
              (0, m.I8)(h, t),
              F,
              { ePrivilege: 2 },
            );
          }),
          (e.RateClanAnnouncement = function (e, t) {
            return e.SendMsg(
              "Community.RateClanAnnouncement#1",
              (0, m.I8)(j, t),
              W,
              { ePrivilege: 3 },
            );
          }),
          (e.GetClanAnnouncementVoteForUser = function (e, t) {
            return e.SendMsg(
              "Community.GetClanAnnouncementVoteForUser#1",
              (0, m.I8)(v, t),
              C,
              { ePrivilege: 1 },
            );
          }),
          (e.GetClanLocGroupImages = function (e, t) {
            return e.SendMsg(
              "Community.GetClanLocGroupImages#1",
              (0, m.I8)(T, t),
              O,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }),
          (e.GetAvatarHistory = function (e, t) {
            return e.SendMsg(
              "Community.GetAvatarHistory#1",
              (0, m.I8)(I, t),
              U,
              { ePrivilege: 1 },
            );
          }),
          (e.GetClanEventCrowdInMetadata = function (e, t) {
            return e.SendMsg(
              "Community.GetClanEventCrowdInMetadata#1",
              (0, m.I8)(oe, t),
              le,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetClanCrowdInMetadata = function (e, t) {
            return e.SendMsg(
              "Community.GetClanCrowdInMetadata#1",
              (0, m.I8)(ue, t),
              ce,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.FetchTranslationFromCrowdIn = function (e, t) {
            return e.SendMsg(
              "Community.FetchTranslationFromCrowdIn#1",
              (0, m.I8)(de, t),
              Be,
              { ePrivilege: 1 },
            );
          }),
          (e.HideAndReportComment = function (e, t) {
            return e.SendMsg(
              "Community.HideAndReportComment#1",
              (0, m.I8)(ne, t),
              me,
              { ePrivilege: 3 },
            );
          }),
          (e.GetUserPartnerEventNews = function (e, t) {
            return e.SendMsg(
              "Community.GetUserPartnerEventNews#1",
              (0, m.I8)(N, t),
              A,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetBestEventsForUser = function (e, t) {
            return e.SendMsg(
              "Community.GetBestEventsForUser#1",
              (0, m.I8)(E, t),
              L,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.MarkPartnerEventsForUser = function (e, t) {
            return e.SendMsg(
              "Community.MarkPartnerEventsForUser#1",
              (0, m.I8)(ee, t),
              re,
              { ePrivilege: 1 },
            );
          }),
          (e.GetUserPartnerEventViewStatus = function (e, t) {
            return e.SendMsg(
              "Community.GetUserPartnerEventViewStatus#1",
              (0, m.I8)(ie, t),
              ae,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.PartnerEventsShowMoreForApp = function (e, t) {
            return e.SendMsg(
              "Community.PartnerEventsShowMoreForApp#1",
              (0, m.I8)(Q, t),
              J,
              { ePrivilege: 1 },
            );
          }),
          (e.PartnerEventsShowLessForApp = function (e, t) {
            return e.SendMsg(
              "Community.PartnerEventsShowLessForApp#1",
              (0, m.I8)(Z, t),
              X,
              { ePrivilege: 1 },
            );
          }),
          (e.ClearUserPartnerEventsAppPriorities = function (e, t) {
            return e.SendMsg(
              "Community.ClearUserPartnerEventsAppPriorities#1",
              (0, m.I8)(k, t),
              D,
              { ePrivilege: 1 },
            );
          }),
          (e.GetUserPartnerEventsAppPriorities = function (e, t) {
            return e.SendMsg(
              "Community.GetUserPartnerEventsAppPriorities#1",
              (0, m.I8)(V, t),
              H,
              { ePrivilege: 1 },
            );
          }),
          (e.ClearSinglePartnerEventsAppPriority = function (e, t) {
            return e.SendMsg(
              "Community.ClearSinglePartnerEventsAppPriority#1",
              (0, m.I8)(K, t),
              Y,
              { ePrivilege: 1 },
            );
          }),
          (e.SetRecommendationBotReviewStatus = function (e, t) {
            return e.SendMsg(
              "Community.SetRecommendationBotReviewStatus#1",
              (0, m.I8)(ge, t),
              ye,
              { ePrivilege: 1 },
            );
          });
      })(i || (i = {}));
    },
    17690: (e, t, r) => {
      r.d(t, { IU: () => o, by: () => l, sc: () => n });
      var i = r(78327),
        a = r(85044),
        s = r(81393);
      const n = 0,
        m = "061818254b2c99ac49e6626adb128ed1282a392f",
        o = 120;
      class l {
        m_unAppID;
        m_bInitialized = !1;
        m_strName;
        m_strIconURL;
        m_dtUpdatedFromServer;
        m_eAppType;
        constructor(e) {
          this.m_unAppID = e;
        }
        get appid() {
          return this.m_unAppID;
        }
        get is_initialized() {
          return this.m_bInitialized;
        }
        get is_valid() {
          return this.m_bInitialized && !!this.m_strName;
        }
        get name() {
          return this.m_strName;
        }
        get icon_url_no_default() {
          return this.m_strIconURL && this.BuildAppURL(this.m_strIconURL, m);
        }
        get icon_url() {
          return this.BuildAppURL(this.m_strIconURL, m);
        }
        get time_updated_from_server() {
          return this.m_dtUpdatedFromServer;
        }
        get apptype() {
          return this.m_eAppType;
        }
        BIsApplicationOrTool() {
          return 4 == this.apptype || 2 == this.apptype;
        }
        BuildAppURL(e, t) {
          return e
            ? i.TS.MEDIA_CDN_COMMUNITY_URL +
                "images/apps/" +
                this.appid +
                "/" +
                e +
                ".jpg"
            : (0, a.t)(t);
        }
        DeserializeFromMessage(e) {
          (this.m_bInitialized = !0),
            (this.m_strName = e.name()),
            (this.m_strIconURL = e.icon()),
            (this.m_dtUpdatedFromServer = new Date()),
            (this.m_eAppType = e.app_type());
        }
        DeserializeFromAppOverview(e) {
          e.icon_hash() && 1073741824 != e.app_type()
            ? ((this.m_bInitialized = !0),
              (this.m_strName = e.display_name()),
              (this.m_strIconURL = e.icon_hash()),
              (this.m_dtUpdatedFromServer = new Date()),
              (this.m_eAppType = e.app_type()))
            : (this.m_bInitialized = !1);
        }
        DeserializeFromCacheObject(e) {
          try {
            (this.m_strName = e.strName),
              (this.m_strIconURL = e.strIconURL),
              (this.m_dtUpdatedFromServer = new Date(e.strUpdatedFromServer)),
              (this.m_eAppType = e.eAppType),
              (this.m_bInitialized = !0);
          } catch {}
        }
        SerializeToCacheObject() {
          return (
            (0, s.wT)(
              this.m_bInitialized,
              "Attempting to serialize an uninitialized AppInfo object for caching!",
            ),
            this.m_bInitialized
              ? {
                  strName: this.m_strName,
                  strIconURL: this.m_strIconURL,
                  strUpdatedFromServer: this.m_dtUpdatedFromServer.toJSON(),
                  eAppType: this.m_eAppType,
                }
              : null
          );
        }
      }
    },
    85044: (e, t, r) => {
      r.d(t, { d: () => a, t: () => s });
      var i = r(78327);
      const a = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
      function s(e, t) {
        let r = ".jpg";
        (e && "0000000000000000000000000000000000000000" !== e) || (e = a),
          44 == e.length && ((r = e.substr(-4)), (e = e.substr(0, 40)));
        let s = i.TS.AVATAR_BASE_URL;
        return (
          s ||
            ((s = i.TS.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
            (s += e.substr(0, 2) + "/")),
          (s += e),
          t && "small" != t && (s += "_" + t),
          (s += r),
          s
        );
      }
    },
  },
]);
