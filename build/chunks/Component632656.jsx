/** Chunk was on 49559 **/
/** chunk id: 632656, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  m: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk673698 = require("./673698.jsx"),
  Chunk990078 = require("./990078.jsx"),
  Chunk155718 = require("./155718.js"),
  Chunk891694 = require("./891694.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk724870 = require("./724870.js");

function f(e) {
  let t = l.useRef(null),
    n = e.media;
  if (n.loadingState === c.TD.LOADED_NOT_FOUND) return (0, r.jsx)(s.m, {
    text: p.intl.string(p.t.UvDfMz),
    position: "bottom",
    align: "center",
    targetElementRef: t,
    children: (0, r.jsx)("div", {
      className: i()(e.className, m.FN, {
        [m.gS]: e.hiddenSpoilers
      }),
      style: {
        width: e.placeholderWidth,
        height: e.placeholderHeight
      },
      role: "img",
      children: (0, r.jsx)(u.A, {
        ref: t,
        className: m.i4
      })
    })
  });
  let a = n.loadingState === c.TD.LOADING ? d.Rv1.LOADING : d.Rv1.ERROR;
  return (0, r.jsx)(o._, {
    className: i()(e.className, {
      [m.gS]: e.hiddenSpoilers
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