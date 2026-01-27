/** Chunk was on web.js **/
/** chunk id: 321469, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk540239 = require("./540239.js");

function a(e) {
  let {
    disabled: t,
    deviceId: n,
    width: a,
    height: o
  } = e;
  return t ? (0, r.jsx)("div", {
    className: "media-engine-video",
    style: {
      width: a,
      height: o
    }
  }) : (0, r.jsx)(i.A, {
    streamId: n,
    style: {
      width: a,
      height: o
    }
  })
}
a.defaultProps = {
  disabled: false,
  width: 320,
  height: 180
}