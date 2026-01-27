/** Chunk was on web.js **/
/** chunk id: 443795, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  HT: () => l,
  WY: () => a
});
var Chunk573648 = require("./573648.js"),
  Chunk611010 = require("./611010.js");
let a = "spotify",
  o = Chunk573648.A.get(a);
class s extends Chunk611010.Ay {
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