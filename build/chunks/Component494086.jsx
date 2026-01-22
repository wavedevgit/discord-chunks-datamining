/** Chunk was on web.js **/
/** chunk id: 494086, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk763754 = require("./763754.js"),
  Chunk888675 = require("./888675.jsx"),
  Chunk985018 = require("./985018.jsx");

function o(e) {
  let {
    message: t,
    otherUsername: o,
    usernameHook: l,
    otherUsernameHook: c,
    compact: u
  } = e, {
    nick: d
  } = (0, i.Ay)(t), f = l(), p = c(), _ = s.intl.format(s.t.MMN2Jq, {
    username: d,
    usernameHook: f,
    otherUsername: o,
    otherUsernameHook: p
  });
  return (0, r.jsx)(a.A, {
    icon: n(394803),
    timestamp: t.timestamp,
    compact: u,
    children: _
  })
}