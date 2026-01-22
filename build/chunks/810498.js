/** Chunk was on web.js **/
/** chunk id: 810498, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K5: () => p,
  Mq: () => f,
  R_: () => o,
  V$: () => l,
  gc: () => _,
  kz: () => d,
  px: () => u,
  t8: () => c,
  x: () => h
}), require("./896048.js"), require("./114821.js"), require("./339614.js"), require("./264879.js");
var Chunk64700 = require("./64700.js");
require("./311907.js");
var Chunk841702 = require("./841702.js");
require("./412260.js");
var Chunk552736 = require("./552736.js"),
  Chunk788868 = require("./788868.js");

function o() {
  let [e, t] = r.useState(), n = (0, a.A)(), s = null == n ? true : n.rewards, o = null == n ? true : n.variants;
  null != o && (s = o.flatMap(e => e.variants));
  let {
    purchases: l,
    hasPreviouslyFetched: c,
    fetchPurchasesError: u
  } = (0, i.Wg)(), d = r.useRef(false);
  return r.useEffect(() => {
    c && !d.current && null != s && (t(null == u ? s.filter(e => null == l.get(e.skuId)) : []), d.current = true)
  }, [s, l, c, u]), null != e ? e : true
}

function l() {
  var e;
  let t = (0, a.A)();
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
  return [s.gD.PREMIUM_YEAR_TIER_2, s.gD.PREMIUM_MONTH_TIER_2].includes(null == e ? true : e.id)
}

function p(e, t) {
  if (null == e) return;
  let {
    reverse: n = false,
    colorStops: r,
    defaultAngle: i = 78.98
  } = null != t ? t : {}, a = Array.isArray(e) ? e : e.gradient, s = Array.isArray(e) || null == e.angle ? i : e.angle;
  n && (s = (s + 180) % 360);
  let o = null != r ? a.map((e, t) => "".concat(e, " ").concat(r[t], "%")).join(", ") : a.join(", ");
  return {
    background: "linear-gradient(".concat(s, "deg, ").concat(o, ")")
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

function h(e, t, n) {
  if (null != e && null != t) {
    var r, i;
    let a = t.background,
      s = e.backgroundImage;
    return {
      backgroundImage: "".concat(s, ", ").concat(a),
      backgroundColor: "lightgray",
      backgroundSize: null != (r = null == n ? true : n.backgroundSize) ? r : "auto 110%, auto",
      backgroundPosition: null != (i = null == n ? true : n.backgroundPosition) ? i : "right 90% center, 0% 0%",
      backgroundRepeat: "no-repeat, no-repeat"
    }
  }
  return null != e ? e : null != t ? t : {}
}