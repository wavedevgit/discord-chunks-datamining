/** Chunk was on web.js **/
/** chunk id: 184015, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o,
  j: () => s
});
var Chunk268218 = require("./268218.js"),
  Chunk70142 = require("./70142.js"),
  Chunk652215 = require("./652215.js");

function s() {
  return (0, r.sq)({
    createPromise: () => n.e("99193").then(n.t.bind(n, 224273, 23)),
    webpackId: 224273
  }).then(e => {
    let {
      default: t
    } = e;
    return t
  })
}

function o() {
  let e = i.A.getClient();
  return null == e ? s().then(e => e.client.create({
    authorization: a.Gg3.BRAINTREE.KEY
  }).then(e => l(e)).catch(() => null)) : l(e)
}

function l(e) {
  return s().then(t => t.dataCollector.create({
    client: e
  }).then(e => e.deviceData).catch(() => null))
}