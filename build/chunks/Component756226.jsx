/** Chunk was on 66462 **/
/** chunk id: 756226, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => w
}), require("./953529.js"), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk435935 = require("./435935.jsx"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk546791 = require("./546791.js"),
  Chunk277537 = require("./277537.js"),
  Chunk259756 = require("./259756.js"),
  Chunk785681 = require("./785681.js"),
  Chunk880257 = require("./880257.js"),
  Chunk863552 = require("./863552.jsx"),
  Chunk292352 = require("./292352.js"),
  Chunk345909 = require("./345909.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk441076 = require("./441076.js");
let j = {
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
      className: Chunk441076.personWavingIcon,
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
      className: Chunk441076.threadIcon,
      width: 22,
      height: 22
    }),
    [Chunk292352.MY.TOTAL_VOICE_MINUTES]: (0, Chunk951288.jsx)(Chunk481060.Csw, {
      size: "custom",
      color: "currentColor",
      width: 22,
      height: 22
    }),
    [Chunk292352.MY.PURCHASES]: (0, Chunk951288.jsx)(Chunk481060.EOn, {
      size: "custom",
      color: "currentColor",
      width: 22,
      height: 22
    })
  },
  b = e => {
    let {
      header: t,
      description: r,
      icon: i
    } = e;
    return (0, o.jsxs)(n.k, {
      className: O.row,
      grow: 0,
      children: [(0, o.jsx)("div", {
        className: O.iconContainer,
        children: i
      }), (0, o.jsxs)("div", {
        className: O.rowContent,
        children: [(0, o.jsx)(c.Text, {
          variant: "text-sm/bold",
          children: t
        }), (0, o.jsx)(c.Text, {
          variant: "text-xs/medium",
          children: r
        })]
      })]
    })
  },
  w = e => {
    let {
      transitionState: t,
      onClose: r
    } = e, n = (0, l.PO)("family_center_activity_card"), c = (0, u.o)(C.intl.string(f.default.q3IRam), C.intl.string(f.default.JNLpDQ)), d = (0, h.Z)(), p = (0, s._p)(n), O = (0, a.Xi)({
      location: "family_center_tooltip_modal_web"
    });
    return (0, o.jsx)(i.Modal, {
      transitionState: t,
      onClose: r,
      actions: [],
      title: c,
      children: p.map(e => {
        let [t, r] = e;
        return (0, o.jsx)(b, {
          icon: j[t],
          header: r.tooltipHeader(),
          description: r.tooltipDescription(null != d ? d : true, O)
        }, t)
      })
    })
  }