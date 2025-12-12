/** Chunk was on web.js **/
/** chunk id: 117995, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => o
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk861974 = require("./861974.jsx");

function a(e) {
  switch (e) {
    case "critical":
      return i.Q.ERROR;
    case "warning":
      return i.Q.WARNING;
    case "info":
      return i.Q.INFO;
    case "success":
      return i.Q.POSITIVE
  }
}

function o(e) {
  let {
    type: t,
    hidden: n,
    children: o
  } = e;
  return (0, r.jsx)(i.W, {
    messageType: a(t),
    hidden: n,
    children: o
  })
}