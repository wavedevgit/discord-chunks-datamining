/** Chunk was on web.js **/
/** chunk id: 717401, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $q: () => m,
  Tl: () => p,
  YV: () => u,
  Yr: () => h,
  a5: () => _,
  cF: () => f,
  iE: () => s,
  id: () => d,
  tK: () => c,
  yX: () => l
}), require("./388685.js"), require("./361932.js"), require("./187205.js"), require("./583741.js");
var Chunk647438 = require("./647438.js"),
  Chunk223143 = require("./223143.js"),
  Chunk347896 = require("./347896.js"),
  Chunk474936 = require("./474936.js");

function s() {
  let [e, t] = Chunk647438.useState(), n = (0, Chunk347896.Z)(), o = null == require ? true : require.rewards, s = null == require ? true : require.variants;
  null != s && (o = s.flatMap(e => e.variants));
  let {
    purchases: l,
    hasPreviouslyFetched: c,
    fetchPurchasesError: u
  } = (0, Chunk223143.c7)(), d = Chunk647438.useRef(false);
  return Chunk647438.useEffect(() => {
    c && !d.current && null != Chunk474936 && (exports(null == u ? Chunk474936.filter(e => null == l.get(e.skuId)) : []), d.current = true)
  }, [Chunk474936, l, c, u]), null != module ? module : true
}

function l() {
  var e;
  let t = (0, Chunk347896.Z)();
  return null != (e = null == exports ? true : exports.variants) ? module : true
}

function c(e) {
  let {
    purchases: t
  } = (0, i.c7)();
  return null != e ? t.get(e) : null
}

function u(e) {
  let t = new Map;
  return e.forEach(e => t.set(e.skuId, e.assetId)), t
}

function d(e, t, n) {
  let r = _(e),
    i = null != n && n.length >= 1;
  return t && r && i
}

function f(e, t, n) {
  let r = _(e);
  return null != n && 1 === n.length && r && t
}

function _(e) {
  return [o.Xh.PREMIUM_YEAR_TIER_2, o.Xh.PREMIUM_MONTH_TIER_2].includes(null == e ? true : e.id)
}

function p(e, t) {
  if (null == e) return;
  let {
    reverse: n = false,
    colorStops: r,
    defaultAngle: i = 78.98
  } = null != t ? t : {}, a = Array.isArray(e) ? e : e.gradient, o = Array.isArray(e) || null == e.angle ? i : e.angle;
  n && (o = (o + 180) % 360);
  let s = null != r ? a.map((e, t) => "".concat(e, " ").concat(r[t], "%")).join(", ") : a.join(", ");
  return {
    background: "linear-gradient(".concat(o, "deg, ").concat(s, ")")
  }
}

function h(e) {
  if (null != e) return {
    backgroundImage: "url(".concat(e, ")"),
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }
}

function m(e, t, n) {
  if (null != e && null != t) {
    var r, i;
    let a = t.background,
      o = e.backgroundImage;
    return {
      backgroundImage: "".concat(o, ", ").concat(a),
      backgroundColor: "lightgray",
      backgroundSize: null != (r = null == n ? true : n.backgroundSize) ? r : "auto 110%, auto",
      backgroundPosition: null != (i = null == n ? true : n.backgroundPosition) ? i : "right 90% center, 0% 0%",
      backgroundRepeat: "no-repeat, no-repeat"
    }
  }
  return null != e ? e : null != t ? t : {}
}