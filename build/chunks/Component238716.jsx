/** Chunk was on 46161 **/
/** chunk id: 238716, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => j
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk933557 = require("./933557.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk592125 = require("./592125.js"),
  Chunk853856 = require("./853856.js"),
  Chunk117984 = require("./117984.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk589253 = require("./589253.js");

function j(e) {
  let {
    channelId: n,
    onClose: t,
    transitionState: j,
    heading: k,
    formTitle: f,
    allowReset: z = false
  } = e, v = (0, d.Dt)(), N = (0, r.e7)([x.Z], () => x.Z.getChannel(n)), g = (0, o.ZP)(N), C = u.Z.getNickname(n), [y, E] = s.useState(null != C ? C : "");
  return (0, i.jsx)("form", {
    onSubmit: function(e) {
      e.preventDefault(), (0, h.UT)(n, y), t()
    },
    children: (0, i.jsxs)(l.Y0X, {
      transitionState: j,
      "aria-labelledby": v,
      parentComponent: "FavoritesSetNicknameModal",
      children: [(0, i.jsxs)(l.xBx, {
        separator: true,
        justify: c.Z.Justify.BETWEEN,
        children: [(0, i.jsx)(l.X6q, {
          id: v,
          variant: "heading-lg/semibold",
          children: k
        }), (0, i.jsx)(l.olH, {
          onClick: t
        })]
      }), (0, i.jsxs)(l.hzk, {
        children: [(0, i.jsx)(l.xJW, {
          className: p.name,
          title: f,
          children: (0, i.jsx)(l.oil, {
            value: y,
            onChange: E,
            placeholder: null != g ? g : true,
            maxLength: 100,
            autoFocus: true
          })
        }), z && null != C ? (0, i.jsx)(a.zx, {
          look: a.zx.Looks.LINK,
          color: a.zx.Colors.LINK,
          size: a.zx.Sizes.NONE,
          onClick: function() {
            (0, h.UT)(n, null), t()
          },
          className: p.reset,
          children: m.intl.string(m.t.aE02R0)
        }) : null, (0, i.jsx)(l.Text, {
          className: p.description,
          variant: "text-sm/normal",
          color: "header-secondary",
          children: m.intl.string(m.t["2vyz+P"])
        })]
      }), (0, i.jsx)(l.mzw, {
        children: (0, i.jsxs)(l.hE2, {
          direction: "horizontal-reverse",
          children: [(0, i.jsx)(l.zxk, {
            variant: "primary",
            text: k,
            type: "submit"
          }), (0, i.jsx)(l.zxk, {
            variant: "secondary",
            text: m.intl.string(m.t["ETE/oK"]),
            onClick: t
          })]
        })
      })]
    })
  })
}