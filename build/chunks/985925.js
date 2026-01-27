/** Chunk was on web.js **/
/** chunk id: 985925, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  q: () => u,
  r: () => c
}), require("./896048.js");
var Chunk136722 = require("./136722.js"),
  Chunk311907 = require("./311907.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk488926 = require("./488926.js"),
  Chunk402655 = require("./402655.js");
let c = function(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [a.A, o.default];
  if (null == e) returnfalse;
  let [n, i] = t, c = n.getGuild(e);
  if (null == c) returnfalse;
  let u = i.getCurrentUser();
  return r.X8(s.cc({
    user: u,
    context: c,
    checkElevated: false
  }), l.M)
};

function u(e) {
  return (0, i.bG)([a.A, o.default], () => c(e, [a.A, o.default]), [e])
}