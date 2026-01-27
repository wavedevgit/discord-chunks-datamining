/** Chunk was on web.js **/
/** chunk id: 47407, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o,
  W: () => a
});
var Chunk573648 = require("./573648.js"),
  Chunk611010 = require("./611010.js");
let a = "xbox:";
class o extends Chunk611010.Ay {
  getIconURL() {
    return r.A.get("xbox").icon.lightPNG
  }
  constructor(e) {
    super(e), this.id = "".concat(a).concat(e.name), this.name = e.name
  }
}