/** Chunk was on web.js **/
/** chunk id: 620720, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk310680 = require("./310680.js"),
  Chunk660027 = require("./660027.js"),
  Chunk49691 = require("./49691.js"),
  Chunk538018 = require("./538018.js");

function s(e, t) {
  true === t && (t = []);
  var n, l = (0, r.Z)(e),
    c = l === (null == (n = e.ownerDocument) ? true : n.body),
    u = (0, o.Z)(l),
    d = c ? [u].concat(u.visualViewport || [], (0, a.Z)(l) ? l : []) : l,
    f = t.concat(d);
  return c ? f : f.concat(s((0, i.Z)(d)))
}