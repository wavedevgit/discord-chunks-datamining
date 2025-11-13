/** Chunk was on 54400 **/
/** chunk id: 858026, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./388685.js"), require("./361932.js"), require("./187205.js");
var Chunk647438 = require("./647438.js"),
  Chunk699758 = require("./699758.js");

function a(e) {
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

function i(e, t) {
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

function o(e) {
  var t;
  let {
    claimableVariants: n,
    defaultSelection: o,
    selectedGiftingPromotionReward: s,
    setSelectedGiftingPromotionReward: d,
    hasUserMadeSelection: c
  } = e, u = null != n && n.length > 0, [p, m] = r.useState(null != (t = null == o ? true : o.defaultCategory) ? t : l.KN.Trick), h = r.useRef(p), f = r.useMemo(() => u ? n.flatMap(e => e.variants.length < l.mo ? [] : i(a({}, e.variants[p]), {
    name: e.name
  })) : [], [n, p, u]), b = r.useMemo(() => null != s && f.some(e => e.skuId === s.skuId), [f, s]);
  if (r.useEffect(() => {
      u && ((null == o ? true : o.defaultCategory) == null || c || m(o.defaultCategory))
    }, [null == o ? true : o.defaultCategory, c, u]), r.useEffect(() => {
      u && (h.current === p || b || d(true), h.current = p)
    }, [p, b, d, u]), !u) return null;
  let g = n.length > 1;
  return i(a({}, g && {
    selectedCategory: p
  }, g && {
    setSelectedCategory: m
  }), {
    shouldRenderCategoryControl: g
  })
}