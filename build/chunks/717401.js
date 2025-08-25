/** Chunk was on web.js **/
/** chunk id: 717401, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Tl: () => _,
  YV: () => c,
  a5: () => f,
  cF: () => d,
  iE: () => a,
  id: () => u,
  tK: () => l,
  yX: () => s
}), require("./388685.js"), require("./361932.js"), require("./187205.js");
var Chunk647438 = require("./647438.js"),
  Chunk223143 = require("./223143.js"),
  Chunk347896 = require("./347896.js");

function a() {
  let [e, t] = Chunk647438.useState(), n = (0, Chunk347896.Z)(), a = null == require ? true : require.rewards, s = null == require ? true : require.variants;
  null != s && (a = s.flatMap(e => e.variants));
  let {
    purchases: l,
    hasPreviouslyFetched: c,
    fetchPurchasesError: u
  } = (0, Chunk223143.c7)(), d = Chunk647438.useRef(false);
  return Chunk647438.useEffect(() => {
    c && !d.current && null != a && (exports(null == u ? a.filter(e => null == l.get(e.skuId)) : []), d.current = true)
  }, [a, l, c, u]), null != module ? module : true
}

function s() {
  var e;
  let t = (0, Chunk347896.Z)();
  return null != (e = null == exports ? true : exports.variants) ? module : true
}

function l(e) {
  let {
    purchases: t
  } = (0, i.c7)();
  return null != e ? t.get(e) : null
}

function c(e) {
  let t = new Map;
  return e.forEach(e => t.set(e.skuId, e.assetId)), t
}

function u(e, t, n) {
  let r = f(e),
    i = null != n && n.length > 1;
  return t && r && i
}

function d(e, t, n) {
  let r = f(e);
  return null != n && 1 === n.length && r && t
}

function f(e) {
  var t;
  let n = null == (t = (0, o.Z)()) ? true : t.eligiblePlanIds;
  return null == n ? true : n.includes(null == e ? true : e.id)
}

function _(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 78.98;
  if (null == e) return;
  let n = Array.isArray(e) ? e : e.gradient,
    r = Array.isArray(e) || null == e.angle ? t : e.angle;
  return {
    background: "linear-gradient(".concat(r, "deg, ").concat(n.join(", "), ")")
  }
}