/** Chunk was on web.js **/
/** chunk id: 717401, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $q: () => m,
  Tl: () => p,
  YV: () => c,
  Yr: () => _,
  a5: () => f,
  cF: () => d,
  hi: () => s,
  id: () => u,
  yX: () => l
}), require("./388685.js"), require("./361932.js"), require("./187205.js"), require("./583741.js");
var Chunk473749 = require("./473749.js");
require("./442837.js");
var Chunk223143 = require("./223143.js");
require("./1844.js");
var Chunk347896 = require("./347896.js"),
  Chunk474936 = require("./474936.js");

function s() {
  let [e, t] = r.useState(), n = (0, a.Z)(), o = null == n ? true : n.rewards, s = null == n ? true : n.variants;
  null != s && (o = s.flatMap(e => e.variants));
  let {
    purchases: l,
    hasPreviouslyFetched: c,
    fetchPurchasesError: u
  } = (0, i.c7)(), d = r.useRef(false);
  return r.useEffect(() => {
    c && !d.current && null != o && (t(null == u ? o.filter(e => null == l.get(e.skuId)) : []), d.current = true)
  }, [o, l, c, u]), null != e ? e : true
}

function l() {
  var e;
  let t = (0, a.Z)();
  return null != (e = null == t ? true : t.variants) ? e : true
}

function c(e) {
  let t = new Map;
  return e.forEach(e => t.set(e.skuId, e.assetId)), t
}

function u(e, t, n) {
  let r = f(e),
    i = null != n && n.length >= 1;
  return t && r && i
}

function d(e, t, n) {
  let r = f(e);
  return null != n && 1 === n.length && r && t
}

function f(e) {
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

function _(e) {
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