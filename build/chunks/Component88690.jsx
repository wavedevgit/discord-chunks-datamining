/** Chunk was on 60667 **/
/** chunk id: 88690, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
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

function p() {
  let e = c.A.getCameraComponent(),
    t = (0, i.bG)([c.A], () => c.A.getVideoDeviceId()),
    n = d.A.useField("previewEnabled"),
    p = (0, i.bG)([c.A], () => c.A.isVideoAvailable());
  return ((0, a.l0)(() => {
    d.A.setState({
      previewEnabled: false
    })
  }), n) ? (0, r.jsx)("div", {
    className: _.T,
    children: (0, r.jsxs)("div", {
      className: _.U,
      children: [(0, r.jsx)(e, {
        deviceId: t,
        width: 387,
        height: 218,
        disabled: !n
      }), (0, r.jsx)(o.k, {})]
    })
  }) : (0, r.jsx)("div", {
    className: _.T,
    children: (0, r.jsx)(l.m, {
      text: p ? null : u.intl.string(u.t["8jSzSe"]),
      children: (0, r.jsx)(s.Button, {
        variant: "primary",
        text: u.intl.string(u.t.JIf4v7),
        onClick: () => d.A.setState({
          previewEnabled: true
        }),
        disabled: !p
      })
    })
  })
}