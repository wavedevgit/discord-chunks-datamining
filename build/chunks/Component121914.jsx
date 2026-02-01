/** Chunk was on 71447 **/
/** chunk id: 121914, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  _: () => T,
  g: () => C
}), require("./896048.js");
var i, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
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
  T = ((i = {}).DEFAULT = "DEFAULT", i.CHANNEL_TYPE = "CHANNEL_TYPE", i);
let C = Chunk64700.memo(function(e) {
  var t, n;
  let {
    channelId: i,
    selectedVoiceChannelId: T,
    iconVariant: C = "DEFAULT"
  } = e, N = (0, a.bG)([v.A], () => v.A.getSelectedChannelId() === i, [i]), [w, P] = l.useState(false), {
    mentionCount: D,
    isMentionLowImportance: R
  } = (0, a.cf)([f.Ay], () => null != i ? {
    mentionCount: f.Ay.getMentionCount(i),
    isMentionLowImportance: f.Ay.getIsMentionLowImportance(i)
  } : {
    mentionCount: 0,
    isMentionLowImportance: false
  }, [i]), {
    label: k,
    user: M,
    guild: L,
    channel: U
  } = (0, a.cf)([h.A, p.A, y.default, g.A], () => {
    var e;
    let t = null != (e = h.A.getChannel(i)) ? e : null;
    if (null == t) return {
      label: I.intl.string(I.t.zLZPmk),
      user: null,
      guild: null,
      channel: null
    };
    let n = (0, u.m1)(t, y.default, g.A);
    return {
      label: n,
      user: (0, E.j)(t, y.default),
      guild: (0, E.P)(t, p.A),
      channel: t
    }
  }, [i]);
  l.useEffect(() => {
    null == U && (0, O.b)(i)
  }, [U, i]);
  let G = (0, a.bG)([m.A, y.default], () => {
      var e, t;
      if (null == U) returnfalse;
      let n = null != (e = null == (t = y.default.getCurrentUser()) ? true : t.id) ? e : null,
        i = m.A.getTypingUsers(U.id);
      for (let e in i)
        if (e !== n) returntrue;
      returnfalse
    }, [U]),
    V = (0, a.bG)([f.Ay], () => {
      let e = null == U ? true : U.id;
      return null != e && f.Ay.hasUnread(e)
    }, [U]),
    z = (0, r.jsx)("div", {
      className: j.St,
      children: (() => {
        var e;
        let t = null != (e = null == U ? true : U.isPrivate()) && e;
        if ("CHANNEL_TYPE" === C && !t) {
          let e = (0, c.gU)(U, L);
          return null != e || (e = o.oyn), (0, r.jsx)("div", {
            className: function() {
              for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
              return t.filter(Boolean).join(" ")
            }(j.s, N && j.lJ),
            children: (0, r.jsx)(e, {
              className: j.Yc,
              size: "sm",
              color: N ? o.LU0.colors.WHITE : o.LU0.colors.ICON_STATUS_ONLINE
            })
          })
        }
        return (0, r.jsx)(b.g, {
          channel: U,
          user: M,
          guild: L,
          isSelected: N,
          size: b.c.SIZE_40,
          isTyping: G,
          mentionCount: D,
          isMentionLowImportance: R
        })
      })()
    }),
    F = (0, x.r)({
      channel: U,
      guild: L,
      user: M
    }),
    H = null != (t = null == U ? true : U.isPrivate()) && t,
    Y = null != (n = null == L ? true : L.name) ? n : "",
    K = H ? true : k,
    W = H ? k : "" !== Y ? Y : k,
    B = (() => {
      if (null == U || H) return null;
      let e = (0, c.gU)(U, L);
      return null != e || (e = o.oyn), (0, r.jsx)(e, {
        size: "sm",
        color: o.LU0.colors.INTERACTIVE_ICON_DEFAULT
      })
    })();
  return null == U ? (0, r.jsx)("div", {
    className: j.R
  }) : (0, r.jsx)(s.u, {
    title: K,
    body: W,
    asset: B,
    assetSize: 20,
    "aria-label": k,
    children: (0, r.jsxs)(o.DUT, {
      className: j.pc,
      onClick: () => {
        var e;
        (0, A.D$)({
          channelId: i,
          source: _.B.MANUAL,
          guildId: null != (e = null == L ? true : L.id) ? e : null,
          messageId: null,
          widgetType: S.uss.TEXT_CHAT_V3
        })
      },
      onContextMenu: F,
      onMouseEnter: () => P(true),
      onMouseLeave: () => P(false),
      children: [z, (0, r.jsx)("div", {
        className: j.vT,
        children: (0, r.jsx)(d.A, {
          selected: N,
          hovered: w,
          unread: V
        })
      })]
    })
  })
})