/** Chunk was on 41700 **/
/** chunk id: 14338, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk586902 = require("./586902.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk795318 = require("./795318.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk670188 = require("./670188.jsx"),
  Chunk237583 = require("./237583.jsx"),
  Chunk768581 = require("./768581.js"),
  Chunk807788 = require("./807788.js");

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function x(e) {
  let {
    channel: t,
    speaker: l,
    className: g
  } = e, x = i.useRef(null), {
    newestAnalyticsLocation: j
  } = (0, u.ZP)(), v = (0, h.bp)(), {
    reducedMotion: C
  } = i.useContext(o.Sfi), I = (0, d.Z)({
    userId: l.id
  }), _ = null != l.member ? (0, m.CA)(l.member) : null, S = e => {
    (0, c.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("79695"), n.e("66165"), n.e("8982"), n.e("7717"), n.e("9393")]).then(n.bind(n, 757387));
      return n => (0, r.jsx)(e, O(y({}, n), {
        user: l.user,
        guildId: t.guild_id,
        channel: t,
        showMediaItems: true,
        showStageChannelItems: true,
        showChatItems: false,
        onInteraction: (0, p.u)("GuildChannelUserContextMenu", j)
      }))
    }, {
      context: v
    })
  };
  return (0, r.jsx)(f.Z, {
    targetElementRef: x,
    user: l.user,
    guildId: t.guild_id,
    channelId: t.id,
    clickTrap: true,
    children: e => (0, r.jsx)(s.u, {
      targetElementRef: x,
      __unsupportedReactNodeAsText: l.userNick,
      position: "bottom",
      children: (0, r.jsx)(o.P3F, O(y({}, e), {
        innerRef: x,
        onClick: t => {
          t.stopPropagation(), e.onClick(t)
        },
        onContextMenu: S,
        children: (0, r.jsx)(o.qEK, {
          src: null != _ ? _ : l.user.getAvatarURL(t.guild_id, 24),
          size: o.EFr.SIZE_24,
          className: a()(b.avatar, g),
          "aria-label": l.userNick,
          isSpeaking: I && !C.enabled
        })
      }))
    })
  })
}

function j(e) {
  let {
    speakers: t,
    channel: n
  } = e;
  return (0, r.jsx)(g.Z, {
    className: b.summary,
    guildId: n.guild_id,
    users: t,
    max: 10,
    renderUser: (e, t, i) => (0, r.jsx)(x, {
      channel: n,
      speaker: e,
      className: t
    }, i),
    renderMoreUsers: (e, t, n) => (0, r.jsx)("div", {
      className: a()(b.speakers, t),
      children: e
    }, n)
  })
}