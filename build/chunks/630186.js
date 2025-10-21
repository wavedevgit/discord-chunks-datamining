/** Chunk was on web.js **/
/** chunk id: 630186, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s,
  _: () => o
});
var Chunk726542 = require("./726542.js"),
  Chunk973616 = require("./973616.js"),
  Chunk388032 = require("./388032.jsx");
let o = "twitch:";
class s extends Chunk973616.ZP {
  getIconURL() {
    return Chunk726542.Z.get("twitch").icon.lightPNG
  }
  constructor(e) {
    super(e), this.id = "".concat(o).concat(e.url), this.name = a.intl.string(a.t.JIPtgq)
  }
}