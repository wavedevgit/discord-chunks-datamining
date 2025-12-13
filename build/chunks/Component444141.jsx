/** Chunk was on 93979 **/
/** chunk id: 444141, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk5192 = require("./5192.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk892001 = require("./892001.js"),
  Chunk687158 = require("./687158.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      l = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), l.forEach(function(n) {
      var l;
      l = t[n], n in e ? Object.defineProperty(e, n, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = l
    })
  }
  return e
}

function f(e, n) {
  return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      t.push.apply(t, l)
    }
    return t
  })(Object(n)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
  }), e
}

function m(e) {
  let {
    user: n,
    guildId: t,
    channelId: m,
    displayProfile: p,
    onClose: x
  } = e, {
    analyticsLocations: h,
    sourceAnalyticsLocations: v
  } = (0, o.ZP)(), {
    context: b,
    trackUserProfileAction: j
  } = (0, a.KZ)(), g = (0, s.ZP)(n.id, t);
  return (null == g ? true : g.guildId) == null ? null : (null == p ? true : p.guildId) != null ? (0, l.jsx)(i.sNh, {
    id: "view-main-profile",
    label: d.intl.string(d.t.GISTta),
    subtext: d.intl.formatToPlainString(d.t["mn/nW2"], {
      displayName: r.ZP.getName(true, true, n)
    }),
    action: () => {
      null == x || x(), (0, c.openUserProfileModal)(f(u({
        userId: n.id,
        guildId: t
      }, b), {
        showGuildProfile: false,
        sourceAnalyticsLocations: v
      })), j(u({
        action: "PRESS_VIEW_MAIN_PROFILE",
        analyticsLocations: h
      }, b))
    }
  }) : (0, l.jsx)(i.sNh, {
    id: "view-server-profile",
    label: d.intl.string(d.t.DisZzB),
    subtext: d.intl.formatToPlainString(d.t["mn/nW2"], {
      displayName: r.ZP.getName(t, m, n)
    }),
    action: () => {
      null == x || x(), (0, c.openUserProfileModal)(f(u({
        userId: n.id,
        guildId: t
      }, b), {
        showGuildProfile: true,
        sourceAnalyticsLocations: v
      })), j(u({
        action: "PRESS_VIEW_SERVER_PROFILE",
        analyticsLocations: h
      }, b))
    }
  })
}