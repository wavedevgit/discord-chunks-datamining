/** Chunk was on web.js **/
/** chunk id: 359138, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk747545 = require("./747545.jsx"),
  Chunk131951 = require("./131951.js"),
  Chunk106388 = require("./106388.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk79414 = require("./79414.js");
let p = 387,
  _ = 218;

function m() {
  let e = Chunk131951.Z.getCameraComponent(),
    t = (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getVideoDeviceId()),
    n = Chunk106388.Z.useField("previewEnabled"),
    m = (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.isVideoAvailable());
  return ((0, Chunk493773.zq)(() => {
    Chunk106388.Z.setState({
      previewEnabled: false
    })
  }), require) ? (0, Chunk54381.jsx)("div", {
    className: Chunk79414.cameraWrapper,
    children: (0, Chunk54381.jsxs)("div", {
      className: Chunk79414.camera,
      children: [(0, Chunk54381.jsx)(module, {
        deviceId: exports,
        width: p,
        height: _,
        disabled: !require
      }), (0, Chunk54381.jsx)(Chunk747545.S, {})]
    })
  }) : (0, Chunk54381.jsx)("div", {
    className: Chunk79414.cameraWrapper,
    children: (0, Chunk54381.jsx)(Chunk28664.u, {
      text: m ? null : Chunk388032.intl.string(Chunk388032.t["8jSzSe"]),
      children: (0, Chunk54381.jsx)(Chunk481060.Button, {
        variant: "primary",
        text: Chunk388032.intl.string(Chunk388032.t.JIf4v7),
        onClick: () => Chunk106388.Z.setState({
          previewEnabled: true
        }),
        disabled: !m
      })
    })
  })
}