/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
n.d(t, {
  A: () => s,
  S: () => a
});
var r = n(663993),
  i = n(618541),
  o = n(981631);

function a() {
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
  return null == e ? a().then(e => e.client.create({
    authorization: o.Ai1.BRAINTREE.KEY
  }).then(e => l(e)).catch(() => null)) : l(e)
}

function l(e) {
  return a().then(t => t.dataCollector.create({
    client: e
  }).then(e => e.deviceData).catch(() => null))
}