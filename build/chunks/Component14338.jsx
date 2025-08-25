/** Chunk was on 5665 **/
/** chunk id: 14338, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk586902 = require("./586902.js"),
  Chunk40851 = require("./40851.jsx"),
  Chunk906732 = require("./906732.jsx"),
  Chunk795318 = require("./795318.js"),
  Chunk670188 = require("./670188.jsx"),
  Chunk237583 = require("./237583.jsx"),
  Chunk768581 = require("./768581.js"),
  Chunk374379 = require("./374379.js");

function b(e) {
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

function y(e, t) {
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

function _(e) {
  let {
    channel: t,
    speaker: l,
    className: f
  } = e, _ = i.useRef(null), {
    newestAnalyticsLocation: C
  } = (0, d.ZP)(), v = (0, u.bp)(), {
    reducedMotion: x
  } = i.useContext(o.Sfi), O = (0, c.Z)({
    userId: l.id
  }), j = null != l.member ? (0, m.CA)(l.member) : null, E = e => {
    (0, s.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("79695"), n.e("98783"), n.e("8982"), n.e("7717"), n.e("52021")]).then(n.bind(n, 757387));
      return n => (0, r.jsx)(e, y(b({}, n), {
        user: l.user,
        guildId: t.guild_id,
        channel: t,
        showMediaItems: true,
        showStageChannelItems: true,
        showChatItems: false,
        onInteraction: (0, p.u)("GuildChannelUserContextMenu", C)
      }))
    }, {
      context: v
    })
  };
  return (0, r.jsx)(h.Z, {
    targetElementRef: _,
    user: l.user,
    guildId: t.guild_id,
    channelId: t.id,
    clickTrap: true,
    children: e => (0, r.jsx)(o.ua7, {
      targetElementRef: _,
      text: l.userNick,
      position: "bottom",
      children: n => (0, r.jsx)(o.P3F, y(b({}, n, e), {
        innerRef: _,
        onClick: t => {
          t.stopPropagation(), e.onClick(t)
        },
        onContextMenu: E,
        children: (0, r.jsx)(o.qEK, {
          src: null != j ? j : l.user.getAvatarURL(t.guild_id, 24),
          size: o.EFr.SIZE_24,
          className: a()(g.avatar, f),
          "aria-label": l.userNick,
          isSpeaking: O && !x.enabled
        })
      }))
    })
  })
}

function C(e) {
  let {
    speakers: t,
    channel: n
  } = e;
  return (0, r.jsx)(f.Z, {
    className: g.summary,
    guildId: n.guild_id,
    users: t,
    max: 10,
    renderUser: (e, t, i) => (0, r.jsx)(_, {
      channel: n,
      speaker: e,
      className: t
    }, i),
    renderMoreUsers: (e, t, n) => (0, r.jsx)("div", {
      className: a()(g.speakers, t),
      children: e
    }, n)
  })
}