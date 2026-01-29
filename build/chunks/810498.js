/** Chunk was on web.js **/
/** chunk id: 810498, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  JW: () => l,
  K5: () => p,
  Mq: () => f,
  gc: () => _,
  kz: () => d,
  px: () => u,
  t8: () => c,
  x: () => h
}), require("./896048.js"), require("./114821.js"), require("./339614.js"), require("./264879.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk841702 = require("./841702.js"),
  Chunk412260 = require("./412260.js");
require("./552736.js");
var Chunk788868 = require("./788868.js");

function l() {
  let [e, t] = r.useState(), n = (0, i.bG)([o.A], () => o.A.getGiftPromotionRewardSkuIds()), {
    purchases: s,
    hasPreviouslyFetched: l,
    fetchPurchasesError: c
  } = (0, a.Wg)(), u = r.useRef(false);
  return r.useEffect(() => {
    l && !u.current && n.length > 0 && (t(null == c ? n.filter(e => null == s.get(e)) : []), u.current = true)
  }, [n, s, l, c]), e
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

function h(e, t) {
  if (null != e && null != t) {
    let n = t.background,
      r = e.backgroundImage;
    return e.backgroundImage = "".concat(r, ", ").concat(n), e.backgroundColor = "lightgray", e.backgroundRepeat = "no-repeat, no-repeat", null == e.backgroundSize && (e.backgroundSize = "auto 110%, auto"), null == e.backgroundPosition && (e.backgroundPosition = "right 90% center, 0% 0%"), e
  }
  return null != e ? e : null != t ? t : {}
}