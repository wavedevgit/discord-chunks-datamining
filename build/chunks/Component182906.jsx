/** Chunk was on 35755 **/
/** chunk id: 182906, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk558522 = require("./558522.jsx"),
  Chunk631883 = require("./631883.js");

function o(e) {
  let {
    imageBackground: t,
    applicationName: n,
    imageClassName: o,
    imageNotFoundClassName: s
  } = e, [c, u] = l.useState(false);
  return "not-found" === t.state || c ? (0, i.jsx)("div", {
    className: s,
    children: (0, i.jsx)(r.Z, {
      className: a.brokenImageIcon
    })
  }) : "loading" === t.state ? null : (0, i.jsx)("img", {
    alt: n,
    className: o,
    src: t.url,
    onError: () => u(true)
  })
}