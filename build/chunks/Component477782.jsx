/** Chunk was on 33356 **/
/** chunk id: 477782, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => c
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk117984 = require("./117984.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk217025 = require("./217025.js");

function c(e) {
  let {
    onClose: t,
    transitionState: n
  } = e, c = (0, r.Dt)(), [h, u] = a.useState("");
  return (0, i.jsx)("form", {
    onSubmit: function(e) {
      e.preventDefault(), (0, l.CM)(h), t()
    },
    children: (0, i.jsxs)(s.Y0X, {
      transitionState: n,
      "aria-labelledby": c,
      parentComponent: "AddFavoriteCategoryModal",
      children: [(0, i.jsxs)(s.hzk, {
        children: [(0, i.jsx)(s.X6q, {
          id: c,
          className: d.header,
          variant: "heading-xl/semibold",
          children: o.intl.string(o.t["ISN+ND"])
        }), (0, i.jsx)(s.olH, {
          onClick: t,
          className: d.closeButton
        }), (0, i.jsx)("div", {
          className: d.name,
          children: (0, i.jsx)(s.oil, {
            label: o.intl.string(o.t.OCAkGB),
            value: h,
            onChange: u,
            maxLength: 100,
            placeholder: o.intl.string(o.t.eTVbt7),
            autoFocus: true
          })
        })]
      }), (0, i.jsx)(s.mzw, {
        children: (0, i.jsxs)(s.hE2, {
          direction: "horizontal-reverse",
          children: [(0, i.jsx)(s.zxk, {
            variant: "primary",
            text: o.intl.string(o.t["ISN+ND"]),
            type: "submit",
            disabled: "" === h
          }), (0, i.jsx)(s.zxk, {
            variant: "secondary",
            text: o.intl.string(o.t["ETE/oK"]),
            onClick: t
          })]
        })
      })]
    })
  })
}