/** Chunk was on 67376 **/
/** chunk id: 207252, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk210887 = require("./210887.js"),
  Chunk450269 = require("./450269.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk119902 = require("./119902.js"),
  Chunk112847 = require("./112847.js"),
  Chunk516954 = require("./516954.js");

function b(e) {
  let {
    guildId: t,
    transitionState: n,
    onClose: b,
    onConfirm: g
  } = e, k = (0, a.Dt)(), C = (0, r.e7)([d.Z], () => d.Z.theme), p = (0, l.wj)(C) ? m : _, {
    rules: y,
    rulesAccepted: E
  } = (0, u.V)(t), f = i.useCallback(() => {
    b(), g()
  }, [b, g]);
  return (0, c.jsxs)(s.Y0X, {
    transitionState: n,
    "aria-labelledby": k,
    className: x.modal,
    parentComponent: "GuildSettingsJoinRulesDiscoveryModal",
    children: [(0, c.jsx)(s.olH, {
      onClick: b,
      className: x.close
    }), (0, c.jsxs)(s.hzk, {
      className: x.content,
      children: [(0, c.jsxs)("div", {
        className: x.header,
        children: [(0, c.jsx)("img", {
          alt: "",
          src: p,
          width: 80
        }), (0, c.jsx)(s.X6q, {
          variant: "heading-xxl/semibold",
          color: "header-primary",
          id: k,
          children: h.intl.string(h.t.Q8OFNz)
        })]
      }), (0, c.jsx)(s.Text, {
        variant: "text-md/medium",
        color: "header-secondary",
        className: x.centeredText,
        children: h.intl.string(h.t["WT+829"])
      }), (0, c.jsx)("div", {
        className: x.checkboxContainer,
        children: y.map(e => (0, c.jsxs)(s.XZJ, {
          className: x.checkbox,
          reverse: true,
          value: e.checked,
          align: s.XZJ.Aligns.CENTER,
          onChange: e.onCheck,
          children: [(0, c.jsx)(s.Text, {
            variant: "text-md/semibold",
            color: "header-primary",
            children: e.title
          }), (0, c.jsx)(s.Text, {
            variant: "text-sm/medium",
            color: "text-secondary",
            children: e.body
          })]
        }, e.key))
      })]
    }), (0, c.jsx)(s.mzw, {
      children: (0, c.jsx)(o.zx, {
        fullWidth: true,
        disabled: !E,
        color: o.zx.Colors.BRAND,
        onClick: f,
        size: o.zx.Sizes.LARGE,
        children: (0, c.jsx)(s.Text, {
          variant: "text-sm/semibold",
          color: "currentColor",
          children: h.intl.string(h.t["qjtt/v"])
        })
      })
    })]
  })
}