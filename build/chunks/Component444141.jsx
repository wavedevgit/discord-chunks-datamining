/** Chunk was on 82008 **/
/** chunk id: 444141, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js"),
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
      r = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), r.forEach(function(n) {
      var r;
      r = t[n], n in e ? Object.defineProperty(e, n, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = r
    })
  }
  return e
}

function f(e, n) {
  return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t.push.apply(t, r)
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
    onClose: h
  } = e, {
    analyticsLocations: x,
    sourceAnalyticsLocations: b
  } = (0, o.ZP)(), {
    context: j,
    trackUserProfileAction: g
  } = (0, c.KZ)(), v = (0, a.ZP)(n.id, t);
  return (null == v ? true : v.guildId) == null || null == j ? null : (null == p ? true : p.guildId) != null ? (0, r.jsx)(l.sNh, {
    id: "view-main-profile",
    label: d.intl.string(d.t.GISTtb),
    subtext: d.intl.formatToPlainString(d.t["mn/nW1"], {
      displayName: i.ZP.getName(true, true, n)
    }),
    action: () => {
      null == h || h(), (0, s.openUserProfileModal)(f(u({}, j), {
        showGuildProfile: false,
        sourceAnalyticsLocations: b
      })), g(u({
        action: "PRESS_VIEW_MAIN_PROFILE",
        analyticsLocations: x
      }, j))
    }
  }) : (0, r.jsx)(l.sNh, {
    id: "view-server-profile",
    label: d.intl.string(d.t.DisZzM),
    subtext: d.intl.formatToPlainString(d.t["mn/nW1"], {
      displayName: i.ZP.getName(t, m, n)
    }),
    action: () => {
      null == h || h(), (0, s.openUserProfileModal)(f(u({}, j), {
        showGuildProfile: true,
        sourceAnalyticsLocations: b
      })), g(u({
        action: "PRESS_VIEW_SERVER_PROFILE",
        analyticsLocations: x
      }, j))
    }
  })
}