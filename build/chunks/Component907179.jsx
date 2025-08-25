/** Chunk was on web.js **/
/** chunk id: 907179, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js"),
  Chunk755721 = require("./755721.js"),
  Chunk475413 = require("./475413.jsx"),
  Chunk388032 = require("./388032.jsx");

function s(e) {
  let {
    isBlocked: t,
    onClick: n,
    size: s = i.Ph.SMALL
  } = e;
  return (0, r.jsx)(o.tG, {
    size: s,
    action: t ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
    text: a.intl.string(a.t["UJKH/v"]),
    autoFocus: true,
    fullWidth: false,
    onClick: n
  })
}