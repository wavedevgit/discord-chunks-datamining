/** Chunk was on 78273 **/
/** chunk id: 41767, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => A
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk556012 = require("./556012.js"),
  Chunk590433 = require("./590433.js"),
  Chunk388032 = require("./388032.jsx");
let j = t => {
  var n;
  let {
    duration: e,
    onSelectDuration: r
  } = t, i = (0, s.tr)(), a = i.find(t => t.value === e);
  return (0, l.jsx)(u.xJW, {
    required: true,
    children: (0, l.jsx)(u.VcW, {
      value: null != (n = null == a ? true : a.value) ? n : s.UK.DURATION_60_SEC,
      options: i,
      onChange: t => {
        let n = i.find(n => n.value === t);
        null != n && r(n.value)
      },
      placeholder: c.intl.string(c.t.k7yo6u)
    })
  })
};

function A(t) {
  let {
    action: n,
    triggerType: e,
    isEdit: u,
    onUpdateDuration: A,
    onClose: E,
    transitionState: d
  } = t, [o, _] = r.useState(() => null != n.metadata.durationSeconds && n.metadata.durationSeconds > 0 ? n.metadata.durationSeconds : s.UK.DURATION_60_SEC), N = (0, a.c)(n.type, n, e);
  if (null == N) return null;
  let {
    headerText: S
  } = N;
  return (0, l.jsx)(i.Modal, {
    onClose: E,
    transitionState: d,
    title: S,
    subtitle: c.intl.string(c.t.DWGBAg),
    actions: [{
      text: c.intl.string(c.t["ETE/oK"]),
      onClick: () => {
        E()
      },
      variant: "secondary"
    }, {
      text: u ? c.intl.string(c.t.bt75u7) : c.intl.string(c.t.R3BPHx),
      onClick: () => {
        A(o)
      }
    }],
    children: (0, l.jsx)(j, {
      duration: o,
      onSelectDuration: t => {
        _(t)
      }
    })
  })
}