/** Chunk was on web.js **/
/** chunk id: 389704, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk847267 = require("./847267.js"),
  Chunk543894 = require("./543894.js"),
  Chunk559374 = require("./559374.js"),
  Chunk324049 = require("./324049.js");

function s(e, t) {
  true === t && (t = []);
  var n, l = (0, r.A)(e),
    c = l === (null == (n = e.ownerDocument) ? true : n.body),
    u = (0, a.A)(l),
    d = c ? [u].concat(u.visualViewport || [], (0, o.A)(l) ? l : []) : l,
    f = t.concat(d);
  return c ? f : f.concat(s((0, i.A)(d)))
}