/** Chunk was on web.js **/
/** chunk id: 870383, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => i,
  W: () => a
});
var Chunk620715 = require("./620715.js");

function i(e, t) {
  let {
    enabled: n
  } = r.Y.getConfig({
    location: "getUpdatedAgeVerificationString"
  });
  return n ? t : e
}

function a(e, t) {
  let {
    enabled: n
  } = r.Y.useConfig({
    location: "useUpdatedAgeVerificationString"
  });
  return n ? t : e
}