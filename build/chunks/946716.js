/** Chunk was on 59275 **/
/** chunk id: 946716, original params: e,t,l (module,exports,require) **/
"use strict";
require.d(exports, {
  $: () => i
});
var Chunk562465 = require("./562465.js"),
  Chunk319400 = require("./319400.js"),
  Chunk18572 = require("./18572.js"),
  Chunk652215 = require("./652215.js");
let i = async e => {
  try {
    return (await n.Bo.get({
      url: a.Rsh.COLLECTIBLES_SEARCH,
      query: e,
      rejectWithError: true
    })).body
  } catch (t) {
    let e = new r.LG(t);
    throw (0, s.o)(e), e
  }
}