/** Chunk was on 27751 **/
/** chunk id: 783576, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
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
  return (0, i.jsxs)(a.Y0X, {
    transitionState: b,
    "aria-labelledby": x,
    parentComponent: "SuspiciousDownloadModal",
    children: [(0, i.jsx)("img", {
      className: c.art,
      src: e(902623),
      alt: ""
    }), (0, i.jsx)(a.hzk, {
      children: (0, i.jsxs)("div", {
        className: c.modalContent,
        children: [(0, i.jsx)(a.X6q, {
          id: x,
          variant: "heading-lg/semibold",
          className: c.title,
          children: r.intl.string(r.t.XtDo9f)
        }), (0, i.jsx)(a.Text, {
          variant: "text-md/normal",
          className: c.body,
          children: r.intl.string(r.t.L9yFkp)
        })]
      })
    }), (0, i.jsxs)(a.mzw, {
      children: [(0, i.jsx)(a.zxk, {
        variant: "primary",
        text: r.intl.string(r.t.j7Vi2t),
        type: "button",
        onClick: d
      }), (0, i.jsx)(s.zx, {
        type: "button",
        size: s.zx.Sizes.MEDIUM,
        color: s.zx.Colors.TRANSPARENT,
        look: s.zx.Looks.LINK,
        onClick: () => {
          d(), (0, o.Z)(n, true)
        },
        children: r.intl.string(r.t["/bHu8/"])
      })]
    })]
  })
}