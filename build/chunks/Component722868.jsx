/** Chunk was on 64228 **/
/** chunk id: 722868, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk562153 = require("./562153.js"),
  Chunk183555 = require("./183555.jsx"),
  Chunk657331 = require("./657331.js"),
  Chunk950191 = require("./950191.js"),
  Chunk985018 = require("./985018.jsx");

function u(e) {
  for (var l = 1; l < arguments.length; l++) {
    var t = null != arguments[l] ? arguments[l] : {},
      n = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), n.forEach(function(l) {
      var n;
      n = t[l], l in e ? Object.defineProperty(e, l, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[l] = n
    })
  }
  return e
}

function f(e, l) {
  return l = null != l ? l : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(l)) : (function(e, l) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t.push.apply(t, n)
    }
    return t
  })(Object(l)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(l, t))
  }), e
}

function p(e) {
  let {
    user: l,
    guildId: t,
    channelId: p,
    displayProfile: m,
    onClose: x
  } = e, {
    analyticsLocations: A,
    sourceAnalyticsLocations: j
  } = (0, r.Ay)(), {
    context: h,
    trackUserProfileAction: g
  } = (0, a.NJ)(), v = (0, d.Ay)(l.id, t);
  return (null == v ? true : v.guildId) == null ? null : (null == m ? true : m.guildId) != null ? (0, n.jsx)(i.Drp, {
    id: "view-main-profile",
    label: c.intl.string(c.t.GISTta),
    subtext: c.intl.formatToPlainString(c.t["mn/nW2"], {
      displayName: s.Ay.getName(true, true, l)
    }),
    action: () => {
      null == x || x(), (0, o.openUserProfileModal)(f(u({
        userId: l.id,
        guildId: t
      }, h), {
        showGuildProfile: false,
        sourceAnalyticsLocations: j
      })), g(u({
        action: "PRESS_VIEW_MAIN_PROFILE",
        analyticsLocations: A
      }, h))
    }
  }) : (0, n.jsx)(i.Drp, {
    id: "view-server-profile",
    label: c.intl.string(c.t.DisZzB),
    subtext: c.intl.formatToPlainString(c.t["mn/nW2"], {
      displayName: s.Ay.getName(t, p, l)
    }),
    action: () => {
      null == x || x(), (0, o.openUserProfileModal)(f(u({
        userId: l.id,
        guildId: t
      }, h), {
        showGuildProfile: true,
        sourceAnalyticsLocations: j
      })), g(u({
        action: "PRESS_VIEW_SERVER_PROFILE",
        analyticsLocations: A
      }, h))
    }
  })
}