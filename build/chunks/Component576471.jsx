/** Chunk was on web.js **/
/** chunk id: 576471, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk763754 = require("./763754.js"),
  Chunk888675 = require("./888675.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk355200 = require("./355200.js");

function c(e) {
  let {
    message: t,
    compact: n,
    usernameHook: c
  } = e, u = (0, a.Ay)(t), d = c(u), f = o.intl.format(o.t.Yy6vLs, {
    username: u.nick,
    usernameHook: d,
    topic: t.content
  });
  return (0, r.jsx)(s.A, {
    className: l.d,
    iconNode: (0, r.jsx)(i.qux, {
      size: "md",
      color: "currentColor"
    }),
    iconContainerClassName: l.z,
    timestamp: t.timestamp,
    compact: n,
    children: f
  })
}