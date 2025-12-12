/** Chunk was on web.js **/
/** chunk id: 656795, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk650886 = require("./650886.js");

function o(e) {
  let {
    disabled: t,
    deviceId: n,
    width: o,
    height: a
  } = e;
  return t ? (0, r.jsx)("div", {
    className: "media-engine-video",
    style: {
      width: o,
      height: a
    }
  }) : (0, r.jsx)(i.Z, {
    streamId: n,
    style: {
      width: o,
      height: a
    }
  })
}
o.defaultProps = {
  disabled: false,
  width: 320,
  height: 180
}