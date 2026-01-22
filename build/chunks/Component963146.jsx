/** Chunk was on web.js **/
/** chunk id: 963146, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk690868 = require("./690868.js");

function l(e) {
  var t;
  let {
    name: n,
    className: i,
    state: l,
    isInline: c,
    onClick: u
  } = e, d = n + (c ? ":" : ""), f = null;
  (null == l ? true : l.isActive) && !c ? f = o.vu : (null == l || null == (t = l.lastValidationResult) ? true : t.success) === false ? f = o.z3 : (null == l ? true : l.hasValue) && !c && (f = o.hZ);
  let p = (0, r.jsx)(s.Text, {
    variant: c ? "text-md/normal" : "text-sm/normal",
    color: "text-strong",
    className: a()(o.uK, {
      [o.mG]: c
    }, f, i),
    children: d
  });
  return null == u ? p : (0, r.jsx)(s.DUT, {
    className: o.vk,
    onClick: () => u(n),
    children: p
  })
}