/** Chunk was on 27751 **/
/** chunk id: 783576, original params: t,a,n (module,exports,require) **/
require.d(exports, {
  default: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk782568 = require("./782568.js"),
  Chunk313201 = require("./313201.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk419543 = require("./419543.js");

function c(t) {
  let {
    href: a,
    onClose: c,
    transitionState: d
  } = t, b = (0, r.Dt)();
  return (0, e.jsxs)(i.Y0X, {
    transitionState: d,
    "aria-labelledby": b,
    parentComponent: "SuspiciousDownloadModal",
    children: [(0, e.jsx)("img", {
      className: l.art,
      src: n(902623),
      alt: ""
    }), (0, e.jsx)(i.hzk, {
      children: (0, e.jsxs)("div", {
        className: l.modalContent,
        children: [(0, e.jsx)(i.Heading, {
          id: b,
          variant: "heading-lg/semibold",
          className: l.title,
          children: o.intl.string(o.t.XtDo9Z)
        }), (0, e.jsx)(i.Text, {
          variant: "text-md/normal",
          className: l.body,
          children: o.intl.string(o.t.L9yFko)
        })]
      })
    }), (0, e.jsx)(i.mzw, {
      children: (0, e.jsxs)(i.ButtonGroup, {
        children: [(0, e.jsx)(i.Button, {
          variant: "primary",
          text: o.intl.string(o.t.j7Vi2i),
          onClick: c
        }), (0, e.jsx)(i.Button, {
          text: o.intl.string(o.t["/bHu89"]),
          variant: "secondary",
          onClick: () => {
            c(), (0, s.Z)(a, true)
          }
        })]
      })
    })]
  })
}