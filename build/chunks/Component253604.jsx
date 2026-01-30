/** Chunk was on 78376 **/
/** chunk id: 253604, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk101058 = require("./101058.js"),
  Chunk836602 = require("./836602.js"),
  Chunk287070 = require("./287070.jsx"),
  Chunk83118 = require("./83118.js");

function u(e) {
  var t;
  let {
    user: u,
    disabledInputs: _,
    containerClassName: p
  } = e, {
    reducedMotion: m
  } = i.useContext(s.CZY), {
    pendingAvatar: g,
    pendingBanner: A,
    pendingAvatarDecoration: f,
    pendingProfileEffect: b,
    pendingDisplayNameStyles: h,
    pendingThemeColors: E,
    pendingPronouns: O,
    pendingBio: C,
    tryItOutThemeColors: x,
    tryItOutAvatar: S,
    tryItOutBanner: T,
    tryItOutAvatarDecoration: I,
    tryItOutDisplayNameStyles: y
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
  })({}, o.A.getPendingChanges(), o.A.getTryItOutChanges())), N = (0, a.V7)({
    userId: u.id,
    image: null != S ? S : g
  });
  return (0, r.jsx)(c.A, {
    containerClassName: p,
    user: u,
    pendingPronouns: O,
    pendingBio: C,
    pendingBanner: null != (t = null != T ? T : A) ? t : n(636763),
    pendingDisplayNameStyles: null != y ? y : h,
    pendingAvatar: N,
    pendingThemeColors: null != x ? x : E,
    pendingAvatarDecoration: true !== I ? I : f,
    pendingProfileEffect: b,
    avatarClassName: null != S || null != g || m.enabled ? true : d.W,
    canUsePremiumCustomization: true,
    isTryItOut: true,
    disabledInputs: _,
    hideExampleButton: true
  })
}