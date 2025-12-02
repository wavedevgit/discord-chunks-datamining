/** Chunk was on 27751 **/
/** chunk id: 783576, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  default: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
      className: l.art,
      src: i(902623),
      alt: ""
    }), (0, a.jsx)(e.hzk, {
      children: (0, a.jsxs)("div", {
        className: l.modalContent,
        children: [(0, a.jsx)(e.Heading, {
          id: b,
          variant: "heading-lg/semibold",
          className: l.title,
          children: o.intl.string(o.t.XtDo9Z)
        }), (0, a.jsx)(e.Text, {
          variant: "text-md/normal",
          className: l.body,
          children: o.intl.string(o.t.L9yFko)
        })]
      })
    }), (0, a.jsx)(e.mzw, {
      children: (0, a.jsxs)(e.ButtonGroup, {
        children: [(0, a.jsx)(e.Button, {
          variant: "primary",
          text: o.intl.string(o.t.j7Vi2i),
          onClick: c
        }), (0, a.jsx)(e.Button, {
          text: o.intl.string(o.t["/bHu89"]),
          variant: "secondary",
          onClick: () => {
            c(), (0, s.Z)(n, true)
          }
        })]
      })
    })]
  })
}