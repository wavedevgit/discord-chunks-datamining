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
  let e = c.Z.getCameraComponent(),
    t = (0, i.e7)([c.Z], () => c.Z.getVideoDeviceId()),
    n = u.Z.useField("previewEnabled"),
    m = (0, i.e7)([c.Z], () => c.Z.isVideoAvailable());
  return ((0, s.zq)(() => {
    u.Z.setState({
      previewEnabled: false
    })
  }), n) ? (0, r.jsx)("div", {
    className: f.cameraWrapper,
    children: (0, r.jsxs)("div", {
      className: f.camera,
      children: [(0, r.jsx)(e, {
        deviceId: t,
        width: p,
        height: _,
        disabled: !n
      }), (0, r.jsx)(l.S, {})]
    })
  }) : (0, r.jsx)("div", {
    className: f.cameraWrapper,
    children: (0, r.jsx)(a.u, {
      text: m ? null : d.intl.string(d.t["8jSzSe"]),
      children: (0, r.jsx)(o.Button, {
        variant: "primary",
        text: d.intl.string(d.t.JIf4v7),
        onClick: () => u.Z.setState({
          previewEnabled: true
        }),
        disabled: !m
      })
    })
  })
}