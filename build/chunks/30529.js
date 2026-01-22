/** Chunk was on web.js **/
/** chunk id: 30529, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X: () => a
});
var Chunk544105 = require("./544105.js"),
  Chunk652215 = require("./652215.js");

function a(e) {
  switch (e) {
    case i.fg2.XBOX:
      return r.f$.XBOX;
    case i.fg2.PLAYSTATION:
    case i.fg2.PLAYSTATION_STAGING:
      return r.f$.PLAYSTATION;
    default:
      return null
  }
}