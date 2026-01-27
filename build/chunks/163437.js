/** Chunk was on web.js **/
/** chunk id: 163437, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  PJ: () => o,
  Se: () => l,
  Uo: () => c,
  bg: () => s,
  oC: () => d
}), require("./938796.js"), require("./638769.js"), require("./284009.js");
var Chunk665260 = require("./665260.js");
require("./67480.js");
var Chunk927578 = require("./927578.js"),
  Chunk652215 = require("./652215.js");

function o(e) {
  return (0, r.Lt)(e, a.d68.APPLICATION_GUILD_SUBSCRIPTION)
}

function s(e) {
  return (0, r.Lt)(e, a.d68.APPLICATION_USER_SUBSCRIPTION)
}

function l(e) {
  returnfalse === e.available
}

function c(e, t) {
  var n;
  let r = null != (n = null == t ? true : t.deleted) && n,
    i = null != t && l(t);
  return e.status === a.Dmq.CANCELED || r || i
}

function u(e, t) {
  var n, r;
  if (e.type === a.Puh.SUBSCRIPTION) {
    let n = t.getForSKU(e.id);
    if (n.length > 0) {
      let e = n[0];
      return (0, i.y8)(e.id).amount
    }
  }
  return null != (n = null == (r = e.price) ? true : r.amount) ? n : 0
}

function d(e, t, n) {
  return e.slice().sort((e, r) => {
    let i = t.get(e.skuId),
      a = null != i ? u(i, n) : 0,
      o = t.get(r.skuId);
    return a - (null != o ? u(o, n) : 0)
  })
}