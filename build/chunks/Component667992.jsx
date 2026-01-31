/** Chunk was on 17534 **/
/** chunk id: 667992, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk717558 = require("./717558.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk480890 = require("./480890.js"),
  Chunk267102 = require("./267102.jsx"),
  Chunk342296 = require("./342296.jsx"),
  Chunk636585 = require("./636585.jsx"),
  Chunk486020 = require("./486020.js"),
  Chunk787750 = require("./787750.js");

function A(e) {
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

function O(e) {
  let {
    channel: t,
    speaker: i,
    className: f
  } = e, O = l.useRef(null), {
    newestAnalyticsLocation: _
  } = (0, d.Ay)(), j = (0, p.Us)(), {
    reducedMotion: x
  } = l.useContext(o.CZY), v = (0, u.A)({
    userId: i.id
  }), E = null != i.member ? (0, m.xT)(i.member) : null, C = e => {
    (0, c.L3)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("97262"), n.e("29534"), n.e("55296"), n.e("84841"), n.e("31885")]).then(n.bind(n, 107632));
      return n => (0, r.jsx)(e, y(A({}, n), {
        user: i.user,
        guildId: t.guild_id,
        channel: t,
        showMediaItems: true,
        showStageChannelItems: true,
        showChatItems: false,
        onInteraction: (0, h.s)("GuildChannelUserContextMenu", _)
      }))
    }, {
      context: j
    })
  };
  return (0, r.jsx)(g.A, {
    targetElementRef: O,
    user: i.user,
    guildId: t.guild_id,
    channelId: t.id,
    clickTrap: true,
    children: e => (0, r.jsx)(a.m, {
      targetElementRef: O,
      __unsupportedReactNodeAsText: i.userNick,
      position: "bottom",
      children: (0, r.jsx)(o.DUT, y(A({}, e), {
        innerRef: O,
        onClick: t => {
          t.stopPropagation(), e.onClick(t)
        },
        onContextMenu: C,
        children: (0, r.jsx)(o.euF, {
          src: null != E ? E : i.user.getAvatarURL(t.guild_id, 24),
          size: o._3J.SIZE_24,
          className: s()(b.my, f),
          "aria-label": i.userNick,
          isSpeaking: v && !x.enabled
        })
      }))
    })
  })
}

function _(e) {
  let {
    speakers: t,
    channel: n
  } = e;
  return (0, r.jsx)(f.A, {
    className: b.z,
    guildId: n.guild_id,
    users: t,
    max: 10,
    renderUser: (e, t, l) => (0, r.jsx)(O, {
      channel: n,
      speaker: e,
      className: t
    }, l),
    renderMoreUsers: (e, t, n) => (0, r.jsx)("div", {
      className: s()(b.$U, t),
      children: e
    }, n)
  })
}