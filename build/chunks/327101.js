/** Chunk was on 2824 **/
/** chunk id: 327101, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => a
}), require("./896048.js"), require("./114821.js"), require("./339614.js");
var Chunk64700 = require("./64700.js"),
  Chunk68545 = require("./68545.js");

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

function s(e, t) {
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

function a(e) {
  var t;
  let {
    claimableVariants: n,
    defaultSelection: a,
    selectedGiftingPromotionReward: o,
    setSelectedGiftingPromotionReward: u,
    hasUserMadeSelection: c
  } = e, d = null != n && n.length > 0, [p, m] = r.useState(null != (t = null == a ? true : a.defaultCategory) ? t : l.Sm.Trick), g = r.useRef(p), f = r.useMemo(() => d ? n.flatMap(e => e.variants.length < l.PN ? [] : s(i({}, e.variants[p]), {
    name: e.name
  })) : [], [n, p, d]), y = r.useMemo(() => null != o && f.some(e => e.skuId === o.skuId), [f, o]);
  if (r.useEffect(() => {
      d && ((null == a ? true : a.defaultCategory) == null || c || m(a.defaultCategory))
    }, [null == a ? true : a.defaultCategory, c, d]), r.useEffect(() => {
      d && (g.current === p || y || u(true), g.current = p)
    }, [p, y, u, d]), !d) return null;
  let j = n.length > 1;
  return s(i({}, j && {
    selectedCategory: p
  }, j && {
    setSelectedCategory: m
  }), {
    shouldRenderCategoryControl: j
  })
}