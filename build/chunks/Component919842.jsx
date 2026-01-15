/** Chunk was on 1272 **/
/** chunk id: 919842, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk907862 = require("./907862.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk665149 = require("./665149.jsx"),
  Chunk515970 = require("./515970.js"),
  Chunk5888 = require("./5888.js"),
  Chunk840767 = require("./840767.jsx"),
  Chunk45173 = require("./45173.jsx"),
  Chunk921944 = require("./921944.js"),
  Chunk638398 = require("./638398.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk345214 = require("./345214.js");

function v(e) {
  let {
    className: t
  } = e, [n, l] = (0, d.US)([c.z.CHECKPOINT_2025_DESKTOP_UPSELL]), v = (0, s.e7)([g.Z], () => g.Z.hasOpenedCheckpointThisSession && !g.Z.hasSeenRewatchPopover), I = i.useRef(null), y = n === c.z.CHECKPOINT_2025_DESKTOP_UPSELL, C = () => {
    (0, f.OL)()
  };
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(p.JO, {
      ref: I,
      className: t,
      onClick: () => {
        (0, h.Z)("header_bar"), y && l(b.L.INDIRECT_ACTION)
      },
      icon: o.d5i,
      tooltip: _.intl.string(E.default["CdU/PF"]),
      foreground: a()(O.iconForeground, y ? O.highlighted : null)
    }), !y && v && (0, r.jsx)(u.J2, {
      targetElementRef: I,
      title: _.intl.string(E.default.goiR2u),
      body: _.intl.string(E.default.UYjWa5),
      onRequestClose: C,
      actions: [{
        text: _.intl.string(_.t["NX+WJN"]),
        onClick: C
      }]
    }), y && (0, r.jsx)(m.Z, {
      markAsDismissed: l
    })]
  })
}