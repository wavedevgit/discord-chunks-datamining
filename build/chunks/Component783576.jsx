/** Chunk was on 27751 **/
/** chunk id: 783576, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  default: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk782568 = require("./782568.js"),
  Chunk313201 = require("./313201.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk471018 = require("./471018.js");

function c(t) {
  let {
    href: n,
    onClose: c,
    transitionState: d
  } = t, b = (0, r.Dt)();
  return (0, a.jsxs)(e.Y0X, {
    transitionState: d,
    "aria-labelledby": b,
    parentComponent: "SuspiciousDownloadModal",
    children: [(0, a.jsx)("img", {
      className: o.art,
      src: i(902623),
      alt: ""
    }), (0, a.jsx)(e.hzk, {
      children: (0, a.jsxs)("div", {
        className: o.modalContent,
        children: [(0, a.jsx)(e.Heading, {
          id: b,
          variant: "heading-lg/semibold",
          className: o.title,
          children: l.intl.string(l.t.XtDo9Z)
        }), (0, a.jsx)(e.Text, {
          variant: "text-md/normal",
          className: o.body,
          children: l.intl.string(l.t.L9yFko)
        })]
      })
    }), (0, a.jsxs)(e.mzw, {
      children: [(0, a.jsx)(e.Button, {
        variant: "primary",
        text: l.intl.string(l.t.j7Vi2i),
        onClick: c
      }), (0, a.jsx)(e.Button, {
        text: l.intl.string(l.t["/bHu89"]),
        variant: "secondary",
        onClick: () => {
          c(), (0, s.Z)(n, true)
        }
      })]
    })]
  })
}