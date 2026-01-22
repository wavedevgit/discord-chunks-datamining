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

function s(e, t) {
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

function a(e) {
  var t;
  let {
    claimableVariants: n,
    defaultSelection: a,
    selectedGiftingPromotionReward: o,
    setSelectedGiftingPromotionReward: u,
    hasUserMadeSelection: c
  } = e, d = null != n && n.length > 0, [p, m] = l.useState(null != (t = null == a ? true : a.defaultCategory) ? t : r.Sm.Trick), f = l.useRef(p), g = l.useMemo(() => d ? n.flatMap(e => e.variants.length < r.PN ? [] : s(i({}, e.variants[p]), {
    name: e.name
  })) : [], [n, p, d]), j = l.useMemo(() => null != o && g.some(e => e.skuId === o.skuId), [g, o]);
  if (l.useEffect(() => {
      d && ((null == a ? true : a.defaultCategory) == null || c || m(a.defaultCategory))
    }, [null == a ? true : a.defaultCategory, c, d]), l.useEffect(() => {
      d && (f.current === p || j || u(true), f.current = p)
    }, [p, j, u, d]), !d) return null;
  let y = n.length > 1;
  return s(i({}, y && {
    selectedCategory: p
  }, y && {
    setSelectedCategory: m
  }), {
    shouldRenderCategoryControl: y
  })
}