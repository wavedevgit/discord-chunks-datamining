/** Chunk was on 92917 **/
/** chunk id: 494086, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk763754 = require("./763754.js"),
  Chunk888675 = require("./888675.jsx"),
  Chunk985018 = require("./985018.jsx");

function s(e) {
  let {
    message: t,
    otherUsername: s,
    usernameHook: o,
    otherUsernameHook: c,
    compact: u
  } = e, {
    nick: d
  } = (0, i.Ay)(t), p = o(), m = c(), f = a.intl.format(a.t.MMN2Jq, {
    username: d,
    usernameHook: p,
    otherUsername: s,
    otherUsernameHook: m
  });
  return (0, r.jsx)(l.A, {
    icon: n(394803),
    timestamp: t.timestamp,
    compact: u,
    children: f
  })
}