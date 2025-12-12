/** Chunk was on web.js **/
/** chunk id: 656795, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk650886 = require("./650886.js");

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
  }) : (0, r.jsx)(i.Z, {
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