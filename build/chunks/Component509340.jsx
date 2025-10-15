/** Chunk was on 18290 **/
/** chunk id: 509340, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk159277 = require("./159277.js"),
  Chunk585183 = require("./585183.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk927923 = require("./927923.js");

function c(e) {
  let {
    authToken: t,
    onContinue: n,
    onError: c,
    onClose: l
  } = e;
  return (0, o.jsx)(i.h, {
    platformType: s.ABu.XBOX,
    clientId: r.t.XBOX_APPLICATION_ID,
    scopes: a.tA,
    authToken: t,
    onContinue: n,
    onError: c,
    onClose: l
  })
}