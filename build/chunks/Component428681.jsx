/** Chunk was on 10667 **/
/** chunk id: 428681, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk421580 = require("./421580.js"),
  Chunk159277 = require("./159277.js"),
  Chunk585183 = require("./585183.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk927923 = require("./927923.js");

function c(e) {
  let {
    platformType: t,
    authToken: n,
    onContinue: c,
    onError: l,
    onClose: b
  } = e, u = t === s.ABu.PLAYSTATION_STAGING ? a.t.PLAYSTATION_STAGING_APPLICATION_ID : a.t.PLAYSTATION_APPLICATION_ID, p = t === s.ABu.PLAYSTATION_STAGING ? i.x.PLAYSTATION_STAGING : i.x.PLAYSTATION;
  return (0, o.jsx)(r.h, {
    platformType: t,
    clientId: u,
    scopes: d.KL,
    authToken: n,
    onContinue: c,
    onError: l,
    onClose: b,
    redirectUri: p
  })
}