/** Chunk was on 9586 **/
/** chunk id: 742089, original params: t,e,s (module,exports,require) **/
require.d(exports, {
  default: () => u
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk386406 = require("./386406.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk522741 = require("./522741.js"),
  Chunk311249 = require("./311249.js");
let u = t => {
  let {
    onClose: e,
    transitionState: s,
    showHideSuppressWarning: n = false
  } = t;
  return (0, a.jsx)(l.EOs, {
    transitionState: s,
    className: m.kL,
    "aria-label": d.intl.string(d.t["4Y2AS7"]),
    parentComponent: "HubStudyRoomSuppressModal",
    children: (0, a.jsxs)("form", {
      onSubmit: t => {
        null == t || t.preventDefault(), c.A.clearSuppressWarning(), null == e || e()
      },
      className: m.Zd,
      children: [(0, a.jsxs)(l.$mQ, {
        className: m.jE,
        children: [(0, a.jsx)("img", {
          src: p,
          alt: "",
          className: m.ZK
        }), (0, a.jsx)(l.Text, {
          className: m.DD,
          color: "text-strong",
          variant: "text-md/semibold",
          children: d.intl.string(d.t.sDvH0T)
        }), (0, a.jsx)(l.Text, {
          className: m.h_,
          color: "text-default",
          variant: "text-sm/normal",
          children: d.intl.string(d.t["CLpr/y"])
        })]
      }), (0, a.jsxs)(l.jlY, {
        justify: o.A.Justify.BETWEEN,
        wrap: o.A.Wrap.WRAP,
        children: [(0, a.jsx)(i.$n, {
          type: "submit",
          size: i.$n.Sizes.LARGE,
          className: r()(m.FS, m.cU),
          autoFocus: true,
          children: d.intl.string(d.t["NX+WJN"])
        }), n && (0, a.jsx)(l.DUT, {
          onClick: () => c.A.clearSuppressWarning(true),
          className: m.ZM,
          children: (0, a.jsx)(l.Text, {
            className: m.WI,
            variant: "text-xs/normal",
            children: d.intl.string(d.t["5E9SB9"])
          })
        })]
      })]
    })
  })
}