/** Chunk was on web.js **/
/** chunk id: 88690, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk964486 = require("./964486.js"),
  Chunk745317 = require("./745317.jsx"),
  Chunk430452 = require("./430452.js"),
  Chunk948641 = require("./948641.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk613844 = require("./613844.js");
let p = 387,
  _ = 218;

function h() {
  let e = c.A.getCameraComponent(),
    t = (0, i.bG)([c.A], () => c.A.getVideoDeviceId()),
    n = u.A.useField("previewEnabled"),
    h = (0, i.bG)([c.A], () => c.A.isVideoAvailable());
  return ((0, o.l0)(() => {
    u.A.setState({
      previewEnabled: false
    })
  }), n) ? (0, r.jsx)("div", {
    className: f.T,
    children: (0, r.jsxs)("div", {
      className: f.U,
      children: [(0, r.jsx)(e, {
        deviceId: t,
        width: p,
        height: _,
        disabled: !n
      }), (0, r.jsx)(l.k, {})]
    })
  }) : (0, r.jsx)("div", {
    className: f.T,
    children: (0, r.jsx)(a.m, {
      text: h ? null : d.intl.string(d.t["8jSzSe"]),
      children: (0, r.jsx)(s.Button, {
        variant: "primary",
        text: d.intl.string(d.t.JIf4v7),
        onClick: () => u.A.setState({
          previewEnabled: true
        }),
        disabled: !h
      })
    })
  })
}