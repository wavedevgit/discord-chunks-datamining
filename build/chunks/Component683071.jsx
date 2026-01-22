/** Chunk was on web.js **/
/** chunk id: 683071, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  w: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk512950 = require("./512950.jsx");

function a(e) {
  switch (e) {
    case "critical":
      return i.Y.ERROR;
    case "warning":
      return i.Y.WARNING;
    case "info":
      return i.Y.INFO;
    case "success":
      return i.Y.POSITIVE
  }
}

function s(e) {
  let {
    type: t,
    hidden: n,
    children: s
  } = e;
  return (0, r.jsx)(i.p, {
    messageType: a(t),
    hidden: n,
    children: s
  })
}