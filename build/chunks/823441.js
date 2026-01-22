/** Chunk was on web.js **/
/** chunk id: 823441, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o,
  K: () => s
});
var Chunk573648 = require("./573648.js"),
  Chunk611010 = require("./611010.js"),
  Chunk985018 = require("./985018.jsx");
let s = "twitch:";
class o extends Chunk611010.Ay {
  getIconURL() {
    return r.A.get("twitch").icon.lightPNG
  }
  constructor(e) {
    super(e), this.id = "".concat(s).concat(e.url), this.name = a.intl.string(a.t.JIPtgq)
  }
}