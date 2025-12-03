/** Chunk was on web.js **/
/** chunk id: 987826, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk946281 = require("./946281.js");

function l(e) {
  var t;
  let {
    name: n,
    className: i,
    state: l,
    isInline: c,
    onClick: u
  } = e, d = n + (c ? ":" : ""), f = null;
  (null == l ? true : l.isActive) && !c ? f = s.active : (null == l || null == (t = l.lastValidationResult) ? true : t.success) === false ? f = s.error : (null == l ? true : l.hasValue) && !c && (f = s.set);
  let p = (0, r.jsx)(o.Text, {
    variant: c ? "text-md/normal" : "text-sm/normal",
    color: "text-strong",
    className: a()(s.option, {
      [s.inline]: c
    }, f, i),
    children: d
  });
  return null == u ? p : (0, r.jsx)(o.P3F, {
    className: s.clickable,
    onClick: () => u(n),
    children: p
  })
}