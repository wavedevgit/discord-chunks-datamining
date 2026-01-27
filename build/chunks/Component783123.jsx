/** Chunk was on web.js **/
/** chunk id: 783123, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js"),
  Chunk993401 = require("./993401.jsx"),
  Chunk985018 = require("./985018.jsx");

function o(e) {
  let {
    isBlocked: t,
    onClick: n,
    size: o = "sm"
  } = e;
  return (0, r.jsx)(i.FD, {
    size: o,
    action: t ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
    text: a.intl.string(a.t["UJKH/l"]),
    variant: "primary",
    autoFocus: true,
    fullWidth: false,
    onClick: n
  })
}