/** Chunk was on 21738 **/
/** chunk id: 913953, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
}), require("./65821.js");
var Chunk73153 = require("./73153.js"),
  Chunk92077 = require("./92077.js"),
  Chunk961350 = require("./961350.js"),
  Chunk144914 = require("./144914.js");

function s() {
  if (!(0, a.S)()) return;
  let e = l.default.getToken(),
    t = l.default.getId();
  if (null == e) throw Error("missing user token");
  i.Ts(e, t)
}

function o() {
  i.zr()
}
let c = {
  init() {
    r.h.subscribe("CONNECTION_OPEN", s), r.h.subscribe("LOGOUT", o)
  }
}