/** Chunk was on 92917 **/
/** chunk id: 817253, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk638075 = require("./638075.js"),
  Chunk763754 = require("./763754.js"),
  Chunk888675 = require("./888675.jsx"),
  Chunk985018 = require("./985018.jsx");

function o(e) {
  let {
    message: t,
    usernameHook: o,
    compact: c
  } = e, u = (0, l.Ay)(t), d = o(u), p = i.A.getSystemMessageUserJoin(t.id), m = s.intl.format(p, {
    username: u.nick,
    usernameHook: d
  });
  return (0, r.jsx)(a.A, {
    icon: n(394803),
    timestamp: t.timestamp,
    compact: c,
    children: m
  })
}