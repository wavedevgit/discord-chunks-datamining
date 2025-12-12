/** Chunk was on web.js **/
/** chunk id: 250889, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => o,
  Z: () => a
});
var Chunk726542 = require("./726542.js"),
  Chunk973616 = require("./973616.js");
let o = "xbox:";
class a extends Chunk973616.ZP {
  getIconURL() {
    return Chunk726542.Z.get("xbox").icon.lightPNG
  }
  constructor(e) {
    super(e), this.id = "".concat(o).concat(e.name), this.name = e.name
  }
}