/** Chunk was on web.js **/
/** chunk id: 73352, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk739566 = require("./739566.js"),
  Chunk834129 = require("./834129.jsx"),
  Chunk388032 = require("./388032.jsx");

function s(e) {
  let {
    message: t,
    otherUsername: s,
    usernameHook: l,
    otherUsernameHook: c,
    compact: u
  } = e, {
    nick: d
  } = (0, i.ZP)(t), f = l(), _ = c(), p = o.intl.format(o.t.MMN2Jq, {
    username: d,
    usernameHook: f,
    otherUsername: s,
    otherUsernameHook: _
  });
  return (0, r.jsx)(a.Z, {
    icon: n(570111),
    timestamp: t.timestamp,
    compact: u,
    children: p
  })
}