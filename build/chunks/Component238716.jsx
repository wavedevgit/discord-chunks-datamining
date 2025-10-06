/** Chunk was on 46161 **/
/** chunk id: 238716, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => p
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk933557 = require("./933557.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk592125 = require("./592125.js"),
  Chunk853856 = require("./853856.js"),
  Chunk117984 = require("./117984.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk589253 = require("./589253.js");

function p(e) {
  let {
    channelId: t,
    onClose: n,
    transitionState: p,
    heading: j,
    formTitle: v,
    allowReset: f = false
  } = e, k = (0, o.Dt)(), g = (0, a.e7)([d.Z], () => d.Z.getChannel(t)), b = (0, l.ZP)(g), y = x.Z.getNickname(t), [C, E] = s.useState(null != y ? y : "");
  return (0, i.jsx)("form", {
    onSubmit: function(e) {
      e.preventDefault(), (0, u.UT)(t, C), n()
    },
    children: (0, i.jsxs)(r.Y0X, {
      transitionState: p,
      "aria-labelledby": k,
      parentComponent: "FavoritesSetNicknameModal",
      children: [(0, i.jsxs)(r.xBx, {
        separator: true,
        justify: c.Z.Justify.BETWEEN,
        children: [(0, i.jsx)(r.X6q, {
          id: k,
          variant: "heading-lg/semibold",
          children: j
        }), (0, i.jsx)(r.olH, {
          onClick: n
        })]
      }), (0, i.jsxs)(r.hzk, {
        children: [(0, i.jsx)("div", {
          className: m.name,
          children: (0, i.jsx)(r.oil, {
            label: v,
            value: C,
            onChange: E,
            placeholder: null != b ? b : true,
            maxLength: 100,
            autoFocus: true
          })
        }), f && null != y ? (0, i.jsx)("div", {
          className: m.reset,
          children: (0, i.jsx)(r.Avr, {
            text: h.intl.string(h.t.aE02R0),
            onClick: function() {
              (0, u.UT)(t, null), n()
            },
            textVariant: "text-sm/normal"
          })
        }) : null, (0, i.jsx)(r.Text, {
          className: m.description,
          variant: "text-sm/normal",
          color: "header-secondary",
          children: h.intl.string(h.t["2vyz+P"])
        })]
      }), (0, i.jsx)(r.mzw, {
        children: (0, i.jsxs)(r.hE2, {
          direction: "horizontal-reverse",
          children: [(0, i.jsx)(r.zxk, {
            variant: "primary",
            text: j,
            type: "submit"
          }), (0, i.jsx)(r.zxk, {
            variant: "secondary",
            text: h.intl.string(h.t["ETE/oK"]),
            onClick: n
          })]
        })
      })]
    })
  })
}