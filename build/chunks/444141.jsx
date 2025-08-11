/** Chunk was on 11776 **/
/** chunk id: 444141, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk255367 = require("./255367.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.js"),
  Chunk5192 = require("./5192.js"),
  Chunk785717 = require("./785717.js"),
  Chunk892001 = require("./892001.js"),
  Chunk687158 = require("./687158.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
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

function f(e, t) {
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

function m(e) {
  let {
    user: t,
    guildId: n,
    channelId: m,
    displayProfile: p,
    onClose: g
  } = e, {
    analyticsLocations: b,
    sourceAnalyticsLocations: j
  } = (0, i.ZP)(), {
    context: h,
    trackUserProfileAction: x
  } = (0, a.KZ)(), y = (0, s.ZP)(t.id, n);
  return (null == y ? true : y.guildId) == null || null == h ? null : (null == p ? true : p.guildId) != null ? <l.sNh id={"view-main-profile"} label={d.intl.string(d.t.GISTtb)} subtext={d.intl.formatToPlainString(d.t["mn/nW1"], {
      displayName: o.ZP.getName(true, true, t)
    })} action={() => {
      null == g || g(), (0, c.openUserProfileModal)(f(u({}, h), {
        showGuildProfile: false,
        sourceAnalyticsLocations: j
      })), x(u({
        action: "PRESS_VIEW_MAIN_PROFILE",
        analyticsLocations: b
      }, h))
    }} /> : <l.sNh id={"view-server-profile"} label={d.intl.string(d.t.DisZzM)} subtext={d.intl.formatToPlainString(d.t["mn/nW1"], {
      displayName: o.ZP.getName(n, m, t)
    })} action={() => {
      null == g || g(), (0, c.openUserProfileModal)(f(u({}, h), {
        showGuildProfile: true,
        sourceAnalyticsLocations: j
      })), x(u({
        action: "PRESS_VIEW_SERVER_PROFILE",
        analyticsLocations: b
      }, h))
    }} />
}