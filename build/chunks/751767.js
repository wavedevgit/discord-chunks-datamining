/** Chunk was on web.js **/
/** chunk id: 751767, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s,
  S: () => o
});
var Chunk663993 = require("./663993.js"),
  Chunk618541 = require("./618541.js"),
  Chunk981631 = require("./981631.js");

function o() {
  return (0, r.wE)({
    createPromise: () => n.e("85468").then(n.t.bind(n, 91438, 23)),
    webpackId: 91438
  }).then(e => {
    let {
      default: t
    } = e;
    return t
  })
}

function s() {
  let e = i.Z.getClient();
  return null == e ? o().then(e => e.client.create({
    authorization: a.Ai1.BRAINTREE.KEY
  }).then(e => l(e)).catch(() => null)) : l(e)
}

function l(e) {
  return o().then(t => t.dataCollector.create({
    client: e
  }).then(e => e.deviceData).catch(() => null))
}