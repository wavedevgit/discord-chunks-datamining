/** Chunk was on web.js **/
/** chunk id: 979200, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  PM: () => c,
  ZC: () => Chunk921072.u$,
  de: () => s,
  x9: () => l
});
var Chunk544891 = require("./544891.js"),
  Chunk921072 = require("./921072.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
async function s(e) {
  let t = o.ANM.APPLICATION_DISCLOSURES(e),
    n = await r.tn.get({
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
  let n = o.ANM.APPLICATION_DISCLOSURES(e);
  await r.tn.post({
    url: n,
    body: {
      disclosures: t
    },
    rejectWithError: false
  })
}

function c(e) {
  switch (e) {
    case i.u$.IP_LOCATION:
      return a.intl.string(a.t["6wPmjo"]);
    case i.u$.DISPLAYS_ADVERTISEMENTS:
      return a.intl.string(a.t["/uOMKZ"]);
    default:
      return null
  }
}