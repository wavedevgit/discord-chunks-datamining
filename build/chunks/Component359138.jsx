/** Chunk was on web.js **/
/** chunk id: 359138, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk747545 = require("./747545.jsx"),
  Chunk131951 = require("./131951.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk745343 = require("./745343.js");
let f = 387,
  p = 218;

function _() {
  let e = Chunk131951.Z.getCameraComponent(),
    t = (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getVideoDeviceId()),
    [n, _] = Chunk473749.useState(false),
    m = (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.isVideoAvailable());
  return require ? (0, Chunk54381.jsx)("div", {
    className: Chunk745343.cameraWrapper,
    children: (0, Chunk54381.jsxs)("div", {
      className: Chunk745343.camera,
      children: [(0, Chunk54381.jsx)(module, {
        deviceId: exports,
        width: f,
        height: p,
        disabled: !require
      }), (0, Chunk54381.jsx)(Chunk747545.S, {})]
    })
  }) : (0, Chunk54381.jsx)("div", {
    className: Chunk745343.cameraWrapper,
    children: (0, Chunk54381.jsx)(Chunk28664.u, {
      text: m ? null : Chunk388032.intl.string(Chunk388032.t["8jSzSe"]),
      children: (0, Chunk54381.jsx)(Chunk481060.Button, {
        variant: "primary",
        text: Chunk388032.intl.string(Chunk388032.t.JIf4v7),
        onClick: () => _(true),
        disabled: !m
      })
    })
  })
}