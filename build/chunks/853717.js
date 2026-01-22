/** Chunk was on web.js **/
/** chunk id: 853717, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk688899 = require("./688899.js"),
  Chunk175924 = require("./175924.js"),
  Chunk421336 = require("./421336.js"),
  Chunk257027 = require("./257027.js"),
  Chunk273101 = require("./273101.js");

function l(e) {
  var t, n = (0, r.A)(e),
    l = (0, s.A)(e),
    c = null == (t = e.ownerDocument) ? true : t.body,
    u = (0, o.T9)(n.scrollWidth, n.clientWidth, c ? c.scrollWidth : 0, c ? c.clientWidth : 0),
    d = (0, o.T9)(n.scrollHeight, n.clientHeight, c ? c.scrollHeight : 0, c ? c.clientHeight : 0),
    f = -l.scrollLeft + (0, a.A)(e),
    p = -l.scrollTop;
  return "rtl" === (0, i.A)(c || n).direction && (f += (0, o.T9)(n.clientWidth, c ? c.clientWidth : 0) - u), {
    width: u,
    height: d,
    x: f,
    y: p
  }
}