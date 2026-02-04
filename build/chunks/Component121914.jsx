/** Chunk was on 71447 **/
/** chunk id: 121914, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  _: () => N,
  g: () => P
}), require("./896048.js");
var i, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
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
  N = ((i = {}).DEFAULT = "DEFAULT", i.CHANNEL_TYPE = "CHANNEL_TYPE", i);
let P = Chunk64700.memo(function(e) {
  var t, n;
  let {
    channelId: i,
    selectedVoiceChannelId: a,
    iconVariant: N = "DEFAULT"
  } = e, P = null != a && i === a, D = (0, s.bG)([E.A], () => E.A.getSelectedChannelId() === i, [i]), R = (0, s.bG)([E.A], () => E.A.getVoiceChatMinimized()), L = (0, c.rdh)(c.LU0.colors.ICON_STATUS_ONLINE), k = (0, s.bG)([y.A], () => !!P && !!(y.A.isAnyoneElseSpeaking() || y.A.isCurrentUserSpeaking()), [P]), [M, z] = l.useState(false), {
    mentionCount: V,
    isMentionLowImportance: U
  } = (0, s.cf)([m.Ay], () => null != i ? {
    mentionCount: m.Ay.getMentionCount(i),
    isMentionLowImportance: m.Ay.getIsMentionLowImportance(i)
  } : {
    mentionCount: 0,
    isMentionLowImportance: false
  }, [i]), {
    label: G,
    user: H,
    guild: Y,
    channel: F
  } = (0, s.cf)([f.A, g.A, v.default, A.A], () => {
    var e;
    let t = null != (e = f.A.getChannel(i)) ? e : null;
    if (null == t) return {
      label: T.intl.string(T.t.zLZPmk),
      user: null,
      guild: null,
      channel: null
    };
    let n = (0, d.m1)(t, v.default, A.A);
    return {
      label: n,
      user: (0, S.j)(t, v.default),
      guild: (0, S.P)(t, g.A),
      channel: t
    }
  }, [i]);
  l.useEffect(() => {
    null == F && (0, x.b)(i)
  }, [F, i]);
  let W = (0, s.bG)([O.A, v.default], () => {
      var e, t;
      if (null == F) returnfalse;
      let n = null != (e = null == (t = v.default.getCurrentUser()) ? true : t.id) ? e : null,
        i = O.A.getTypingUsers(F.id);
      for (let e in i)
        if (e !== n) returntrue;
      returnfalse
    }, [F]),
    K = (0, s.bG)([m.Ay], () => {
      let e = null == F ? true : F.id;
      return null != e && m.Ay.hasUnread(e)
    }, [F]),
    Z = (0, r.jsx)("div", {
      className: w.St,
      children: (() => {
        var e;
        let t = null != (e = null == F ? true : F.isPrivate()) && e;
        if ("CHANNEL_TYPE" === N && !t) {
          let e = (0, h.gU)(F, Y);
          null != e || (e = c.oyn);
          let t = P && !R && k,
            n = {
              boxShadow: "none"
            },
            i = L.rgba({
              opacity: .85
            }),
            l = L.rgba({
              opacity: .45
            });
          return t && (n.boxShadow = "0 0 0 2px rgba(".concat(i, "), 0 0 12px 2px rgba(").concat(l, ")")), (0, r.jsx)("div", {
            className: o()(w.s, D && w.lJ),
            style: n,
            children: (0, r.jsx)(e, {
              className: w.Yc,
              size: "sm",
              color: D ? c.LU0.colors.WHITE : c.LU0.colors.ICON_STATUS_ONLINE
            })
          })
        }
        return (0, r.jsx)(_.g, {
          channel: F,
          user: H,
          guild: Y,
          isSelected: D,
          size: _.c.SIZE_40,
          isTyping: W,
          mentionCount: V,
          isMentionLowImportance: U
        })
      })()
    }),
    B = (0, I.r)({
      channel: F,
      guild: Y,
      user: H
    }),
    X = null != (t = null == F ? true : F.isPrivate()) && t,
    J = null != (n = null == Y ? true : Y.name) ? n : "",
    Q = X ? true : G,
    q = X ? G : "" !== J ? J : G,
    $ = (() => {
      if (null == F || X) return null;
      let e = (0, h.gU)(F, Y);
      return null != e || (e = c.oyn), (0, r.jsx)(e, {
        size: "sm",
        color: c.LU0.colors.INTERACTIVE_ICON_DEFAULT
      })
    })();
  return null == F ? (0, r.jsx)("div", {
    className: w.R
  }) : (0, r.jsx)(u.u, {
    title: Q,
    body: q,
    asset: $,
    assetSize: 20,
    "aria-label": G,
    children: (0, r.jsxs)(c.DUT, {
      className: w.pc,
      onClick: () => {
        var e;
        P && (0, b.S$)({
          minimized: false
        }), (0, b.D$)({
          target: {
            kind: b.bB.CHANNEL,
            channelId: i,
            guildId: null != (e = null == Y ? true : Y.id) ? e : null,
            messageId: null
          },
          source: j.B.MANUAL,
          widgetType: C.uss.TEXT_CHAT_V3
        })
      },
      onContextMenu: B,
      onMouseEnter: () => z(true),
      onMouseLeave: () => z(false),
      children: [Z, (0, r.jsx)("div", {
        className: w.vT,
        children: (0, r.jsx)(p.A, {
          selected: D,
          hovered: M,
          unread: K
        })
      })]
    })
  })
})