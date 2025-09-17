/** Chunk was on 72164 **/
/** chunk id: 444141, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => p
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
      o = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), o.forEach(function(n) {
      var o;
      o = t[n], n in e ? Object.defineProperty(e, n, {
        value: o,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = o
    })
  }
  return e
}

function f(e, n) {
  return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      t.push.apply(t, o)
    }
    return t
  })(Object(n)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
  }), e
}

function p(e) {
  let {
    user: n,
    guildId: t,
    channelId: p,
    displayProfile: m,
    onClose: x
  } = e, {
    analyticsLocations: b,
    sourceAnalyticsLocations: h
  } = (0, l.ZP)(), {
    context: g,
    trackUserProfileAction: j
  } = (0, c.KZ)(), v = (0, s.ZP)(n.id, t);
  return (null == v ? true : v.guildId) == null || null == g ? null : (null == m ? true : m.guildId) != null ? (0, o.jsx)(r.sNh, {
    id: "view-main-profile",
    label: d.intl.string(d.t.GISTtb),
    subtext: d.intl.formatToPlainString(d.t["mn/nW1"], {
      displayName: i.ZP.getName(true, true, n)
    }),
    action: () => {
      null == x || x(), (0, a.openUserProfileModal)(f(u({}, g), {
        showGuildProfile: false,
        sourceAnalyticsLocations: h
      })), j(u({
        action: "PRESS_VIEW_MAIN_PROFILE",
        analyticsLocations: b
      }, g))
    }
  }) : (0, o.jsx)(r.sNh, {
    id: "view-server-profile",
    label: d.intl.string(d.t.DisZzM),
    subtext: d.intl.formatToPlainString(d.t["mn/nW1"], {
      displayName: i.ZP.getName(t, p, n)
    }),
    action: () => {
      null == x || x(), (0, a.openUserProfileModal)(f(u({}, g), {
        showGuildProfile: true,
        sourceAnalyticsLocations: h
      })), j(u({
        action: "PRESS_VIEW_SERVER_PROFILE",
        analyticsLocations: b
      }, g))
    }
  })
}