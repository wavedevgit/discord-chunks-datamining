/** Chunk was on 4670 **/
/** chunk id: 88690, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  A: () => A
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

function A() {
  let e = o.A.getCameraComponent(),
    t = (0, l.bG)([o.A], () => o.A.getVideoDeviceId()),
    i = d.A.useField("previewEnabled"),
    A = (0, l.bG)([o.A], () => o.A.isVideoAvailable());
  return ((0, a.l0)(() => {
    d.A.setState({
      previewEnabled: false
    })
  }), i) ? (0, n.jsx)("div", {
    className: c.T,
    children: (0, n.jsxs)("div", {
      className: c.U,
      children: [(0, n.jsx)(e, {
        deviceId: t,
        width: 387,
        height: 218,
        disabled: !i
      }), (0, n.jsx)(u.k, {})]
    })
  }) : (0, n.jsx)("div", {
    className: c.T,
    children: (0, n.jsx)(s.m, {
      text: A ? null : T.intl.string(T.t["8jSzSe"]),
      children: (0, n.jsx)(r.Button, {
        variant: "primary",
        text: T.intl.string(T.t.JIf4v7),
        onClick: () => d.A.setState({
          previewEnabled: true
        }),
        disabled: !A
      })
    })
  })
}