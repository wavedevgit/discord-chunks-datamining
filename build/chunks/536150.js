/** Chunk was on web.js **/
/** chunk id: 536150, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => o
});
var Chunk544891 = require("./544891.js"),
  Chunk881052 = require("./881052.js"),
  Chunk981631 = require("./981631.js");
async function o(e, t) {
  try {
    await r.tn.patch({
      url: a.ANM.MY_CONTENT_INVENTORY_APPLICATION(e),
      body: t,
      rejectWithError: false
    })
  } catch (e) {
    throw new i.Hx(e)
  }
}