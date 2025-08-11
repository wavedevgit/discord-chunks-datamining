/** Chunk was on 33356 **/
/** chunk id: 477782, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => h
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk117984 = require("./117984.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk788428 = require("./788428.js");

function h(e) {
  let {
    onClose: t,
    transitionState: n
  } = e, h = (0, l.Dt)(), [u, x] = i.useState("");
  return (0, a.jsx)("form", {
    onSubmit: function(e) {
      e.preventDefault(), (0, o.CM)(u), t()
    },
    children: (0, a.jsxs)(r.Y0X, {
      transitionState: n,
      "aria-labelledby": h,
      parentComponent: "AddFavoriteCategoryModal",
      children: [(0, a.jsxs)(r.hzk, {
        children: [(0, a.jsx)(r.X6q, {
          id: h,
          className: d.header,
          variant: "heading-xl/semibold",
          children: c.intl.string(c.t["ISN+ND"])
        }), (0, a.jsx)(r.olH, {
          onClick: t,
          className: d.closeButton
        }), (0, a.jsx)(r.xJW, {
          title: c.intl.string(c.t.OCAkGB),
          className: d.name,
          children: (0, a.jsx)(s.Is, {
            value: u,
            onChange: x,
            maxLength: 100,
            placeholder: c.intl.string(c.t.eTVbt7),
            className: d.__invalid_inputWrapper,
            autoFocus: true
          })
        })]
      }), (0, a.jsx)(r.mzw, {
        children: (0, a.jsxs)(r.hE2, {
          direction: "horizontal-reverse",
          children: [(0, a.jsx)(r.zxk, {
            variant: "primary",
            text: c.intl.string(c.t["ISN+ND"]),
            type: "submit",
            disabled: "" === u
          }), (0, a.jsx)(r.zxk, {
            variant: "secondary",
            text: c.intl.string(c.t["ETE/oK"]),
            onClick: t
          })]
        })
      })]
    })
  })
}