/** Chunk was on 66462 **/
/** chunk id: 756226, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  default: () => O
}), require("./953529.js"), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk546791 = require("./546791.js"),
  Chunk277537 = require("./277537.js"),
  Chunk785681 = require("./785681.js"),
  Chunk880257 = require("./880257.js"),
  Chunk863552 = require("./863552.jsx"),
  Chunk292352 = require("./292352.js"),
  Chunk382402 = require("./382402.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk80103 = require("./80103.js");
let C = {
    [Chunk292352.MY.USER_INTERACTION]: (0, Chunk951288.jsx)(Chunk863552.Z, {
      width: 18,
      height: 18
    }),
    [Chunk292352.MY.USER_CALLED]: (0, Chunk951288.jsx)(Chunk481060.Csw, {
      size: "custom",
      color: "currentColor",
      width: 22,
      height: 22
    }),
    [Chunk292352.MY.USER_ADD]: (0, Chunk951288.jsx)(Chunk481060.iFz, {
      size: "custom",
      color: "currentColor",
      width: 22,
      height: 22
    }),
    [Chunk292352.MY.GUILD_ADD]: (0, Chunk951288.jsx)(Chunk481060.dRF, {
      size: "custom",
      color: "currentColor",
      width: 22,
      height: 22
    }),
    [Chunk292352.MY.GUILD_INTERACTION]: (0, Chunk951288.jsx)(Chunk481060.VL1, {
      size: "custom",
      color: "currentColor",
      width: 22,
      height: 22
    }),
    [Chunk292352.MY.TOTAL_VOICE_MINUTES]: (0, Chunk951288.jsx)(Chunk793030.T39, {
      size: "custom",
      color: "currentColor",
      width: 22,
      height: 22
    }),
    [Chunk292352.MY.PURCHASES]: (0, Chunk951288.jsx)(Chunk793030.ciH, {
      size: "custom",
      color: "currentColor",
      width: 22,
      height: 22
    })
  },
  j = t => {
    let {
      header: e,
      description: r,
      icon: c
    } = t;
    return (0, o.jsxs)(n.Kqy, {
      direction: "horizontal",
      className: f.row,
      padding: 16,
      align: "center",
      gap: 16,
      fullWidth: false,
      children: [(0, o.jsx)("div", {
        className: f.iconContainer,
        children: c
      }), (0, o.jsxs)("div", {
        className: f.rowContent,
        children: [(0, o.jsx)(i.Text, {
          variant: "text-sm/bold",
          children: e
        }), (0, o.jsx)(i.Text, {
          variant: "text-xs/medium",
          children: r
        })]
      })]
    })
  },
  O = t => {
    let {
      transitionState: e,
      onClose: r
    } = t, i = (0, l.PO)("family_center_activity_card"), u = (0, s.o)(p.intl.string(d.default.q3IRal), p.intl.string(d.default.JNLpDZ)), h = (0, a.Z)(), f = (0, c._p)(i);
    return (0, o.jsx)(n.Modal, {
      transitionState: e,
      onClose: r,
      actions: [],
      title: u,
      children: (0, o.jsx)(n.Kqy, {
        gap: 8,
        fullWidth: false,
        children: f.map(t => {
          let [e, r] = t;
          return (0, o.jsx)(j, {
            icon: C[e],
            header: r.tooltipHeader(),
            description: r.tooltipDescription(null != h ? h : true)
          }, e)
        })
      })
    })
  }