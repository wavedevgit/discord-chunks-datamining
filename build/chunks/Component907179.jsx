/** Chunk was on web.js **/
/** chunk id: 907179, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js"),
  Chunk732380 = require("./732380.jsx"),
  Chunk388032 = require("./388032.jsx");

function o(e) {
  let {
    isBlocked: t,
    onClick: n,
    size: o = "sm"
  } = e;
  return (0, r.jsx)(i.O1, {
    size: o,
    action: t ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
    text: a.intl.string(a.t["UJKH/l"]),
    variant: "primary",
    autoFocus: true,
    fullWidth: false,
    onClick: n
  })
}