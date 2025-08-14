/** Chunk was on 7384 **/
/** chunk id: 490220, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk588126 = require("./588126.js"),
  Chunk643879 = require("./643879.js"),
  Chunk25990 = require("./25990.js"),
  Chunk678135 = require("./678135.jsx"),
  Chunk575169 = require("./575169.js");

function m(e) {
  var t;
  let {
    user: m,
    disabledInputs: p,
    containerClassName: g
  } = e, {
    reducedMotion: h
  } = r.useContext(a.Sfi), {
    pendingAvatar: f,
    pendingBanner: b,
    pendingThemeColors: x,
    pendingPronouns: _,
    pendingBio: j,
    tryItOutThemeColors: E,
    tryItOutAvatar: C,
    tryItOutBanner: O,
    tryItOutAvatarDecoration: v,
    tryItOutProfileEffectId: S
  } = (0, s.cj)([c.Z], () => (function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        i = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), i.forEach(function(t) {
        var i;
        i = n[t], t in e ? Object.defineProperty(e, t, {
          value: i,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = i
      })
    }
    return e
  })({}, c.Z.getAllPending(), c.Z.getAllTryItOut())), T = (0, o.SD)({
    userId: m.id,
    image: null != C ? C : f
  }), I = (0, l.Z)(v, false);
  return (0, i.jsx)(d.Z, {
    containerClassName: g,
    user: m,
    pendingPronouns: _,
    pendingBio: j,
    pendingBanner: null != (t = null != O ? O : b) ? t : n(466045),
    pendingAvatar: T,
    pendingThemeColors: null != E ? E : x,
    pendingAvatarDecoration: I,
    pendingProfileEffectId: S,
    avatarClassName: null != C || null != f || h.enabled ? true : u.spinningAvatar,
    canUsePremiumCustomization: true,
    isTryItOutFlow: true,
    disabledInputs: p,
    hideViewFullProfileButton: true
  })
}