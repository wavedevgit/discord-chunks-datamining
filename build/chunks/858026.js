/** Chunk was on 54400 **/
/** chunk id: 858026, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./388685.js"), require("./361932.js"), require("./187205.js");
var Chunk647438 = require("./647438.js"),
  Chunk699758 = require("./699758.js");

function l(e) {
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

function a(e, t) {
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

function s(e) {
  var t;
  let {
    claimableVariants: n,
    defaultSelection: s,
    selectedGiftingPromotionReward: o,
    setSelectedGiftingPromotionReward: d,
    hasUserMadeSelection: C
  } = e, c = null != n && n.length > 0, [u, p] = r.useState(null != (t = null == s ? true : s.defaultCategory) ? t : i.KN.Trick), h = r.useRef(u), m = r.useMemo(() => c ? n.flatMap(e => e.variants.length < i.mo ? [] : a(l({}, e.variants[u]), {
    name: e.name
  })) : [], [n, u, c]), f = r.useMemo(() => null != o && m.some(e => e.skuId === o.skuId), [m, o]);
  if (r.useEffect(() => {
      c && ((null == s ? true : s.defaultCategory) == null || C || p(s.defaultCategory))
    }, [null == s ? true : s.defaultCategory, C, c]), r.useEffect(() => {
      c && (h.current === u || f || d(true), h.current = u)
    }, [u, f, d, c]), !c) return null;
  let x = n.length > 1;
  return a(l({}, x && {
    selectedCategory: u
  }, x && {
    setSelectedCategory: p
  }), {
    shouldRenderCategoryControl: x
  })
}