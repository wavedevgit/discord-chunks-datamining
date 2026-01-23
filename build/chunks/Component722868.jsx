/** Chunk was on 64228 **/
/** chunk id: 722868, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
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
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m(e) {
  let {
    user: t,
    guildId: n,
    channelId: m,
    displayProfile: f,
    onClose: A
  } = e, {
    analyticsLocations: x,
    sourceAnalyticsLocations: j
  } = (0, r.Ay)(), {
    context: h,
    trackUserProfileAction: g
  } = (0, o.NJ)(), v = (0, c.Ay)(t.id, n);
  return (null == v ? true : v.guildId) == null ? null : (null == f ? true : f.guildId) != null ? (0, l.jsx)(i.Drp, {
    id: "view-main-profile",
    label: d.intl.string(d.t.GISTta),
    subtext: d.intl.formatToPlainString(d.t["mn/nW2"], {
      displayName: s.Ay.getName(true, true, t)
    }),
    action: () => {
      null == A || A(), (0, a.openUserProfileModal)(p(u({
        userId: t.id,
        guildId: n
      }, h), {
        showGuildProfile: false,
        sourceAnalyticsLocations: j
      })), g(u({
        action: "PRESS_VIEW_MAIN_PROFILE",
        analyticsLocations: x
      }, h))
    }
  }) : (0, l.jsx)(i.Drp, {
    id: "view-server-profile",
    label: d.intl.string(d.t.DisZzB),
    subtext: d.intl.formatToPlainString(d.t["mn/nW2"], {
      displayName: s.Ay.getName(n, m, t)
    }),
    action: () => {
      null == A || A(), (0, a.openUserProfileModal)(p(u({
        userId: t.id,
        guildId: n
      }, h), {
        showGuildProfile: true,
        sourceAnalyticsLocations: j
      })), g(u({
        action: "PRESS_VIEW_SERVER_PROFILE",
        analyticsLocations: x
      }, h))
    }
  })
}