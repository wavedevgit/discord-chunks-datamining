/** Chunk was on web.js **/
/** chunk id: 35260, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk147913 = require("./147913.js"),
  Chunk31996 = require("./31996.js"),
  Chunk728675 = require("./728675.js"),
  Chunk981631 = require("./981631.js");

function s(e) {
  var t;
  if ((null == (t = e.message_reference) ? true : t.type) !== o.Uvt.FORWARD) return;
  let n = e.message_reference.guild_id;
  null != n && (0, i.Q)(n)
}
class l extends Chunk147913.Z {
  constructor() {
    super(), (0, Chunk728675.Z)(this, s)
  }
}
let c = new l