/** Chunk was on 71447 **/
/** chunk id: 121914, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  _: () => w,
  g: () => P
}), require("./896048.js");
var i, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk459192 = require("./459192.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk47167 = require("./47167.js"),
  Chunk713654 = require("./713654.js"),
  Chunk941971 = require("./941971.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk222823 = require("./222823.js"),
  Chunk994500 = require("./994500.js"),
  Chunk485296 = require("./485296.js"),
  Chunk741961 = require("./741961.js"),
  Chunk287809 = require("./287809.js"),
  Chunk145567 = require("./145567.js"),
  Chunk187667 = require("./187667.js"),
  Chunk922611 = require("./922611.jsx"),
  Chunk651813 = require("./651813.js"),
  Chunk919843 = require("./919843.js"),
  Chunk534765 = require("./534765.jsx"),
  Chunk34307 = require("./34307.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk58812 = require("./58812.js"),
  w = ((i = {}).DEFAULT = "DEFAULT", i.CHANNEL_TYPE = "CHANNEL_TYPE", i);
let P = Chunk64700.memo(function(e) {
  var t, n;
  let {
    channelId: i,
    selectedVoiceChannelId: a,
    iconVariant: w = "DEFAULT"
  } = e, P = null != a && i === a, D = (0, o.bG)([O.A], () => O.A.getSelectedChannelId() === i, [i]), R = (0, o.bG)([O.A], () => O.A.getVoiceChatMinimized()), k = (0, c.rdh)(c.LU0.colors.ICON_STATUS_ONLINE), M = (0, o.bG)([A.A], () => !!P && !!(A.A.isAnyoneElseSpeaking() || A.A.isCurrentUserSpeaking()), [P]), [L, U] = l.useState(false), {
    mentionCount: G,
    isMentionLowImportance: V
  } = (0, o.cf)([m.Ay], () => null != i ? {
    mentionCount: m.Ay.getMentionCount(i),
    isMentionLowImportance: m.Ay.getIsMentionLowImportance(i)
  } : {
    mentionCount: 0,
    isMentionLowImportance: false
  }, [i]), {
    label: z,
    user: F,
    guild: H,
    channel: Y
  } = (0, o.cf)([f.A, g.A, b.default, y.A], () => {
    var e;
    let t = null != (e = f.A.getChannel(i)) ? e : null;
    if (null == t) return {
      label: C.intl.string(C.t.zLZPmk),
      user: null,
      guild: null,
      channel: null
    };
    let n = (0, d.m1)(t, b.default, y.A);
    return {
      label: n,
      user: (0, _.j)(t, b.default),
      guild: (0, _.P)(t, g.A),
      channel: t
    }
  }, [i]);
  l.useEffect(() => {
    null == Y && (0, S.b)(i)
  }, [Y, i]);
  let K = (0, o.bG)([v.A, b.default], () => {
      var e, t;
      if (null == Y) returnfalse;
      let n = null != (e = null == (t = b.default.getCurrentUser()) ? true : t.id) ? e : null,
        i = v.A.getTypingUsers(Y.id);
      for (let e in i)
        if (e !== n) returntrue;
      returnfalse
    }, [Y]),
    W = (0, o.bG)([m.Ay], () => {
      let e = null == Y ? true : Y.id;
      return null != e && m.Ay.hasUnread(e)
    }, [Y]),
    B = (0, r.jsx)("div", {
      className: N.St,
      children: (() => {
        var e;
        let t = null != (e = null == Y ? true : Y.isPrivate()) && e;
        if ("CHANNEL_TYPE" === w && !t) {
          let e = (0, h.gU)(Y, H);
          null != e || (e = c.oyn);
          let t = P && !R && M,
            n = {
              boxShadow: "none"
            },
            i = k.rgba({
              opacity: .85
            }),
            l = k.rgba({
              opacity: .45
            });
          return t && (n.boxShadow = "0 0 0 2px rgba(".concat(i, "), 0 0 12px 2px rgba(").concat(l, ")")), (0, r.jsx)("div", {
            className: s()(N.s, D && N.lJ),
            style: n,
            children: (0, r.jsx)(e, {
              className: N.Yc,
              size: "sm",
              color: D ? c.LU0.colors.WHITE : c.LU0.colors.ICON_STATUS_ONLINE
            })
          })
        }
        return (0, r.jsx)(x.g, {
          channel: Y,
          user: F,
          guild: H,
          isSelected: D,
          size: x.c.SIZE_40,
          isTyping: K,
          mentionCount: G,
          isMentionLowImportance: V
        })
      })()
    }),
    Z = (0, I.r)({
      channel: Y,
      guild: H,
      user: F
    }),
    X = null != (t = null == Y ? true : Y.isPrivate()) && t,
    J = null != (n = null == H ? true : H.name) ? n : "",
    Q = X ? true : z,
    q = X ? z : "" !== J ? J : z,
    $ = (() => {
      if (null == Y || X) return null;
      let e = (0, h.gU)(Y, H);
      return null != e || (e = c.oyn), (0, r.jsx)(e, {
        size: "sm",
        color: c.LU0.colors.INTERACTIVE_ICON_DEFAULT
      })
    })();
  return null == Y ? (0, r.jsx)("div", {
    className: N.R
  }) : (0, r.jsx)(u.u, {
    title: Q,
    body: q,
    asset: $,
    assetSize: 20,
    "aria-label": z,
    children: (0, r.jsxs)(c.DUT, {
      className: N.pc,
      onClick: () => {
        var e;
        P && (0, E.S$)({
          minimized: false
        }), (0, E.D$)({
          channelId: i,
          source: j.B.MANUAL,
          guildId: null != (e = null == H ? true : H.id) ? e : null,
          messageId: null,
          widgetType: T.uss.TEXT_CHAT_V3
        })
      },
      onContextMenu: Z,
      onMouseEnter: () => U(true),
      onMouseLeave: () => U(false),
      children: [B, (0, r.jsx)("div", {
        className: N.vT,
        children: (0, r.jsx)(p.A, {
          selected: D,
          hovered: L,
          unread: W
        })
      })]
    })
  })
})