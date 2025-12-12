/** Chunk was on web.js **/
/** chunk id: 182906, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk558522 = require("./558522.jsx"),
  Chunk568126 = require("./568126.js");

function s(e) {
  let {
    imageBackground: t,
    applicationName: n,
    imageClassName: s,
    imageNotFoundClassName: l
  } = e, [c, u] = i.useState(false);
  return "not-found" === t.state || c ? (0, r.jsx)("div", {
    className: l,
    children: (0, r.jsx)(o.Z, {
      className: a.brokenImageIcon
    })
  }) : "loading" === t.state ? null : (0, r.jsx)("img", {
    alt: n,
    className: s,
    src: t.url,
    onError: () => u(true)
  })
}