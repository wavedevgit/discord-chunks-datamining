/** Chunk was on 41281 **/
/** chunk id: 669732, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => u
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk923928 = require("./923928.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk945346 = require("./945346.js"),
  Chunk337667 = require("./337667.js");
let u = t => {
  let {
    onClose: e,
    transitionState: n,
    showHideSuppressWarning: a = false
  } = t;
  return (0, r.jsx)(o.Y0X, {
    transitionState: n,
    className: d.container,
    "aria-label": m.intl.string(m.t["4Y2AS7"]),
    parentComponent: "HubStudyRoomSuppressModal",
    children: (0, r.jsxs)("form", {
      onSubmit: t => {
        null == t || t.preventDefault(), l.Z.clearSuppressWarning(), null == e || e()
      },
      className: d.form,
      children: [(0, r.jsxs)(o.hzk, {
        className: d.modalContent,
        children: [(0, r.jsx)("img", {
          src: p,
          alt: "",
          className: d.hero
        }), (0, r.jsx)(o.Text, {
          className: d.title,
          color: "header-primary",
          variant: "text-md/semibold",
          children: m.intl.string(m.t.sDvH0T)
        }), (0, r.jsx)(o.Text, {
          className: d.description,
          color: "text-default",
          variant: "text-sm/normal",
          children: m.intl.string(m.t["CLpr/y"])
        })]
      }), (0, r.jsxs)(o.mzw, {
        justify: c.Z.Justify.BETWEEN,
        wrap: c.Z.Wrap.WRAP,
        children: [(0, r.jsx)(s.zx, {
          type: "submit",
          size: s.zx.Sizes.LARGE,
          className: i()(d.primaryButton, d.gutter),
          autoFocus: true,
          children: m.intl.string(m.t["NX+WJN"])
        }), a && (0, r.jsx)(o.P3F, {
          onClick: () => l.Z.clearSuppressWarning(true),
          className: d.minorContainer,
          children: (0, r.jsx)(o.Text, {
            className: d.minorAction,
            variant: "text-xs/normal",
            children: m.intl.string(m.t["5E9SB9"])
          })
        })]
      })]
    })
  })
}