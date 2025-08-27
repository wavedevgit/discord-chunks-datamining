/** Chunk was on web.js **/
/** chunk id: 650204, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk710845 = require("./710845.js"),
  Chunk511495 = require("./511495.js");
let a = new Chunk710845.Z("libdiscore");
!async function() {
  try {
    __OVERLAY__ || await (0, Chunk511495.e)()
  } catch (e) {
    a.error("Failed to initialize libdiscore", module)
  }
  try {
    require("./750081.jsx")
  } finally {
    require("./998502.js").ZP.indexLoadedAsync()
  }
}()