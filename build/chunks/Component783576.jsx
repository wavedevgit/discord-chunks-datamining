/** Chunk was on 27751 **/
/** chunk id: 783576, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  default: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk782568 = require("./782568.js"),
  Chunk313201 = require("./313201.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk471018 = require("./471018.js");

function d(t) {
  let {
    href: n,
    onClose: d,
    transitionState: b
  } = t, x = (0, l.Dt)();
  return (0, e.jsxs)(a.Y0X, {
    transitionState: b,
    "aria-labelledby": x,
    parentComponent: "SuspiciousDownloadModal",
    children: [(0, e.jsx)("img", {
      className: c.art,
      src: i(902623),
      alt: ""
    }), (0, e.jsx)(a.hzk, {
      children: (0, e.jsxs)("div", {
        className: c.modalContent,
        children: [(0, e.jsx)(a.Heading, {
          id: x,
          variant: "heading-lg/semibold",
          className: c.title,
          children: r.intl.string(r.t.XtDo9Z)
        }), (0, e.jsx)(a.Text, {
          variant: "text-md/normal",
          className: c.body,
          children: r.intl.string(r.t.L9yFko)
        })]
      })
    }), (0, e.jsxs)(a.mzw, {
      children: [(0, e.jsx)(a.Button, {
        variant: "primary",
        text: r.intl.string(r.t.j7Vi2i),
        type: "button",
        onClick: d
      }), (0, e.jsx)(s.zx, {
        type: "button",
        size: s.zx.Sizes.MEDIUM,
        color: s.zx.Colors.TRANSPARENT,
        look: s.zx.Looks.LINK,
        onClick: () => {
          d(), (0, o.Z)(n, true)
        },
        children: r.intl.string(r.t["/bHu89"])
      })]
    })]
  })
}