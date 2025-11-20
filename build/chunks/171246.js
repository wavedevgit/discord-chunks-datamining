/** Chunk was on web.js **/
/** chunk id: 171246, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ej: () => d,
  Jf: () => c,
  KK: () => o,
  KW: () => s,
  OL: () => l
}), require("./997841.js"), require("./642613.js"), require("./512722.js");
var Chunk95015 = require("./95015.js");
require("./55563.js");
var Chunk74538 = require("./74538.js"),
  Chunk981631 = require("./981631.js");

function o(e) {
  return (0, r.yE)(e, a.l4R.APPLICATION_GUILD_SUBSCRIPTION)
}

function s(e) {
  return (0, r.yE)(e, a.l4R.APPLICATION_USER_SUBSCRIPTION)
}

function l(e) {
  returnfalse === e.available
}

function c(e, t) {
  var n;
  let r = null != (n = null == t ? true : t.deleted) && n,
    i = null != t && l(t);
  return e.status === a.O0b.CANCELED || r || i
}

function u(e, t) {
  var n, r;
  if (e.type === a.epS.SUBSCRIPTION) {
    let n = t.getForSKU(e.id);
    if (n.length > 0) {
      let e = n[0];
      return (0, i.aS)(e.id).amount
    }
  }
  return null != (r = null == (n = e.price) ? true : n.amount) ? r : 0
}

function d(e, t, n) {
  return e.slice().sort((e, r) => {
    let i = t.get(e.skuId),
      a = null != i ? u(i, n) : 0,
      o = t.get(r.skuId);
    return a - (null != o ? u(o, n) : 0)
  })
}