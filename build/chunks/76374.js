/** Chunk was on web.js **/
/** chunk id: 76374, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => o
});
var Chunk562465 = require("./562465.js"),
  Chunk198982 = require("./198982.js"),
  Chunk652215 = require("./652215.js");
async function o(e, t) {
  try {
    await r.Bo.patch({
      url: a.Rsh.MY_CONTENT_INVENTORY_APPLICATION(e),
      body: t,
      rejectWithError: false
    })
  } catch (e) {
    throw new i.LG(e)
  }
}