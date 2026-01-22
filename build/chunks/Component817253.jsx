/** Chunk was on web.js **/
/** chunk id: 817253, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk638075 = require("./638075.js"),
  Chunk763754 = require("./763754.js"),
  Chunk888675 = require("./888675.jsx"),
  Chunk985018 = require("./985018.jsx");

function l(e) {
  let {
    message: t,
    usernameHook: l,
    compact: c
  } = e, u = (0, a.Ay)(t), d = l(u), f = i.A.getSystemMessageUserJoin(t.id), p = o.intl.format(f, {
    username: u.nick,
    usernameHook: d
  });
  return (0, r.jsx)(s.A, {
    icon: n(394803),
    timestamp: t.timestamp,
    compact: c,
    children: p
  })
}