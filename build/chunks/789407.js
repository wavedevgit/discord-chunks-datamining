/** Chunk was on web.js **/
/** chunk id: 789407, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  XB: () => a,
  r9: () => l
});
var Chunk726542 = require("./726542.js"),
  Chunk973616 = require("./973616.js");
let a = "spotify",
  o = Chunk726542.Z.get(a);
class s extends Chunk973616.ZP {
  getIconURL(e) {
    return o.icon.lightPNG
  }
  getWhiteIconURL() {
    return o.icon.whitePNG
  }
  constructor() {
    super({}), this.id = a, this.name = o.name
  }
}
let l = new s