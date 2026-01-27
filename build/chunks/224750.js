/** Chunk was on web.js **/
/** chunk id: 224750, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Yx: () => l,
  vG: () => s,
  wI: () => c,
  yW: () => i.mo
});
var Chunk562465 = require("./562465.js"),
  Chunk257474 = require("./257474.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
async function s(e) {
  let t = a.Rsh.APPLICATION_DISCLOSURES(e),
    n = await r.Bo.get({
      url: t,
      retries: 3,
      rejectWithError: false
    }),
    i = n.body.disclosures;
  return {
    disclosures: i,
    ackedDisclosures: n.body.acked_disclosures,
    allAcked: n.body.all_acked
  }
}
async function l(e, t) {
  let n = a.Rsh.APPLICATION_DISCLOSURES(e);
  await r.Bo.post({
    url: n,
    body: {
      disclosures: t
    },
    rejectWithError: false
  })
}

function c(e) {
  switch (e) {
    case i.mo.IP_LOCATION:
      return o.intl.string(o.t["6wPmjo"]);
    case i.mo.DISPLAYS_ADVERTISEMENTS:
      return o.intl.string(o.t["/uOMKZ"]);
    default:
      return null
  }
}