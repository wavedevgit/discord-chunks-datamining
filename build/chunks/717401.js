/** Chunk was on web.js **/
/** chunk id: 717401, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Tl: () => f,
  YV: () => l,
  a5: () => d,
  cF: () => u,
  iE: () => o,
  id: () => c,
  tK: () => s
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk223143 = require("./223143.js"),
  Chunk347896 = require("./347896.js");

function o() {
  let [e, t] = Chunk647438.useState(), n = (0, Chunk347896.Z)(), o = null == require ? true : require.rewards, {
    purchases: s,
    hasPreviouslyFetched: l,
    fetchPurchasesError: c
  } = (0, Chunk223143.c7)(), u = Chunk647438.useRef(false);
  return Chunk647438.useEffect(() => {
    l && !u.current && null != o && (exports(null == c ? o.filter(e => null == s.get(e.skuId)) : []), u.current = true)
  }, [o, s, l, c]), null != module ? module : true
}

function s(e) {
  let {
    purchases: t
  } = (0, i.c7)();
  return null != e ? t.get(e) : null
}

function l(e) {
  let t = new Map;
  return e.forEach(e => t.set(e.skuId, e.assetId)), t
}

function c(e, t, n) {
  let r = d(e),
    i = null != n && n.length > 1;
  return t && r && i
}

function u(e, t, n) {
  let r = d(e);
  return null != n && 1 === n.length && r && t
}

function d(e) {
  var t;
  let n = null == (t = (0, a.Z)()) ? true : t.eligiblePlanIds;
  return null == n ? true : n.includes(null == e ? true : e.id)
}

function f(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 78.98;
  if (null == e) return;
  let n = Array.isArray(e) ? e : e.gradient,
    r = Array.isArray(e) || null == e.angle ? t : e.angle;
  return {
    background: "linear-gradient(".concat(r, "deg, ").concat(n.join(", "), ")")
  }
}