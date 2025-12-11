/** Chunk was on 23242 **/
/** chunk id: 858026, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./388685.js"), require("./361932.js"), require("./187205.js");
var Chunk473749 = require("./473749.js"),
  Chunk699758 = require("./699758.js");

function i(e) {
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
    setSelectedGiftingPromotionReward: u,
    hasUserMadeSelection: c
  } = e, d = null != n && n.length > 0, [p, m] = r.useState(null != (t = null == s ? true : s.defaultCategory) ? t : l.KN.Trick), h = r.useRef(p), f = r.useMemo(() => d ? n.flatMap(e => e.variants.length < l.mo ? [] : a(i({}, e.variants[p]), {
    name: e.name
  })) : [], [n, p, d]), g = r.useMemo(() => null != o && f.some(e => e.skuId === o.skuId), [f, o]);
  if (r.useEffect(() => {
      d && ((null == s ? true : s.defaultCategory) == null || c || m(s.defaultCategory))
    }, [null == s ? true : s.defaultCategory, c, d]), r.useEffect(() => {
      d && (h.current === p || g || u(true), h.current = p)
    }, [p, g, u, d]), !d) return null;
  let j = n.length > 1;
  return a(i({}, j && {
    selectedCategory: p
  }, j && {
    setSelectedCategory: m
  }), {
    shouldRenderCategoryControl: j
  })
}