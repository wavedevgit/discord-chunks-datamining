/** Chunk was on 9586 **/
/** chunk id: 742089, original params: s,a,e (module,exports,require) **/
require.d(exports, {
  default: () => u
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  n = require.n(Chunk503698),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk386406 = require("./386406.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk522741 = require("./522741.js"),
  Chunk311249 = require("./311249.js");
let u = s => {
  let {
    onClose: a,
    transitionState: e,
    showHideSuppressWarning: r = false
  } = s;
  return (0, t.jsx)(c.EOs, {
    transitionState: e,
    className: p.kL,
    "aria-label": o.intl.string(o.t["4Y2AS7"]),
    parentComponent: "HubStudyRoomSuppressModal",
    children: (0, t.jsxs)("form", {
      onSubmit: s => {
        null == s || s.preventDefault(), i.A.clearSuppressWarning(), null == a || a()
      },
      className: p.Zd,
      children: [(0, t.jsxs)(c.$mQ, {
        className: p.jE,
        children: [(0, t.jsx)("img", {
          src: m,
          alt: "",
          className: p.ZK
        }), (0, t.jsx)(c.Text, {
          className: p.DD,
          color: "text-strong",
          variant: "text-md/semibold",
          children: o.intl.string(o.t.sDvH0T)
        }), (0, t.jsx)(c.Text, {
          className: p.h_,
          color: "text-default",
          variant: "text-sm/normal",
          children: o.intl.string(o.t["CLpr/y"])
        })]
      }), (0, t.jsxs)(c.jlY, {
        justify: d.A.Justify.BETWEEN,
        wrap: d.A.Wrap.WRAP,
        children: [(0, t.jsx)(l.$n, {
          type: "submit",
          size: l.$n.Sizes.LARGE,
          className: n()(p.FS, p.cU),
          autoFocus: true,
          children: o.intl.string(o.t["NX+WJN"])
        }), r && (0, t.jsx)(c.DUT, {
          onClick: () => i.A.clearSuppressWarning(true),
          className: p.ZM,
          children: (0, t.jsx)(c.Text, {
            className: p.WI,
            variant: "text-xs/normal",
            children: o.intl.string(o.t["5E9SB9"])
          })
        })]
      })]
    })
  })
}