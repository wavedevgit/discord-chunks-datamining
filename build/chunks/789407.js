/** Chunk was on web.js **/
/** chunk id: 789407, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  XB: () => o,
  r9: () => l
});
var Chunk726542 = require("./726542.js"),
  Chunk973616 = require("./973616.js");
let o = "spotify",
  a = Chunk726542.Z.get(o);
class s extends Chunk973616.ZP {
  getIconURL(e) {
    return a.icon.lightPNG
  }
  getWhiteIconURL() {
    return a.icon.whitePNG
  }
  constructor() {
    super({}), this.id = o, this.name = a.name
  }
}
let l = new s