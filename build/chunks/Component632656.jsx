/** Chunk was on web.js **/
/** chunk id: 632656, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  m: () => _
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk673698 = require("./673698.jsx"),
  Chunk990078 = require("./990078.jsx"),
  Chunk155718 = require("./155718.js"),
  Chunk891694 = require("./891694.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk724870 = require("./724870.js");

function _(e) {
  let t = i.useRef(null),
    n = e.media;
  if (n.loadingState === c.TD.LOADED_NOT_FOUND) return (0, r.jsx)(l.m, {
    text: f.intl.string(f.t.UvDfMz),
    position: "bottom",
    align: "center",
    targetElementRef: t,
    children: (0, r.jsx)("div", {
      className: s()(e.className, p.FN, {
        [p.gS]: e.hiddenSpoilers
      }),
      style: {
        width: e.placeholderWidth,
        height: e.placeholderHeight
      },
      role: "img",
      children: (0, r.jsx)(u.A, {
        ref: t,
        className: p.i4
      })
    })
  });
  let a = n.loadingState === c.TD.LOADING ? d.Rv1.LOADING : d.Rv1.ERROR;
  return (0, r.jsx)(o._, {
    className: s()(e.className, {
      [p.gS]: e.hiddenSpoilers
    }),
    readyState: a,
    src: "",
    width: e.placeholderWidth,
    height: e.placeholderHeight,
    maxWidth: e.maxWidth,
    maxHeight: e.maxHeight,
    mediaLayoutType: e.mediaLayoutType,
    useFullWidth: e.useFullWidth,
    zoomable: false
  })
}