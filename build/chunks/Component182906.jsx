/** Chunk was on 35755 **/
/** chunk id: 182906, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk558522 = require("./558522.jsx"),
  Chunk568126 = require("./568126.js");

function o(e) {
  let {
    imageBackground: t,
    applicationName: n,
    imageClassName: o,
    imageNotFoundClassName: s
  } = e, [c, u] = i.useState(false);
  return "not-found" === t.state || c ? (0, l.jsx)("div", {
    className: s,
    children: (0, l.jsx)(r.Z, {
      className: a.brokenImageIcon
    })
  }) : "loading" === t.state ? null : (0, l.jsx)("img", {
    alt: n,
    className: o,
    src: t.url,
    onError: () => u(true)
  })
}