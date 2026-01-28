/** Chunk was on 5606 **/
/** chunk id: 253604, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk101058 = require("./101058.js"),
  Chunk752319 = require("./752319.js"),
  Chunk287070 = require("./287070.jsx"),
  Chunk83118 = require("./83118.js");

function u(e) {
  var t;
  let {
    user: u,
    disabledInputs: p,
    containerClassName: _
  } = e, {
    reducedMotion: m
  } = i.useContext(s.CZY), {
    pendingAvatar: g,
    pendingBanner: f,
    pendingAvatarDecoration: b,
    pendingProfileEffect: h,
    pendingDisplayNameStyles: A,
    pendingThemeColors: E,
    pendingPronouns: x,
    pendingBio: O,
    tryItOutThemeColors: C,
    tryItOutAvatar: y,
    tryItOutBanner: j,
    tryItOutAvatarDecoration: T,
    tryItOutDisplayNameStyles: v
  } = (0, l.cf)([o.A], () => (function(e) {
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
  })({}, o.A.getAllPending(), o.A.getAllTryItOut())), S = (0, a.V7)({
    userId: u.id,
    image: null != y ? y : g
  });
  return (0, r.jsx)(c.A, {
    containerClassName: _,
    user: u,
    pendingPronouns: x,
    pendingBio: O,
    pendingBanner: null != (t = null != j ? j : f) ? t : n(636763),
    pendingDisplayNameStyles: null != v ? v : A,
    pendingAvatar: S,
    pendingThemeColors: null != C ? C : E,
    pendingAvatarDecoration: true !== T ? T : b,
    pendingProfileEffect: h,
    avatarClassName: null != y || null != g || m.enabled ? true : d.W,
    canUsePremiumCustomization: true,
    isTryItOut: true,
    disabledInputs: p,
    hideExampleButton: true
  })
}