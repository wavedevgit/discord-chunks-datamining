/** Chunk was on 41917 **/
/** chunk id: 710656, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk333748 = require("./333748.js"),
  Chunk59198 = require("./59198.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk544105 = require("./544105.js");

function l(e) {
  let {
    authToken: t,
    onContinue: n,
    onError: l,
    onClose: c
  } = e;
  return (0, r.jsx)(s.W, {
    platformType: i.fg2.XBOX,
    clientId: o.i.XBOX_APPLICATION_ID,
    scopes: a.sS,
    authToken: t,
    onContinue: n,
    onError: l,
    onClose: c
  })
}