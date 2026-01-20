/** Chunk was on 78273 **/
/** chunk id: 41767, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => A
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk556012 = require("./556012.js"),
  Chunk590433 = require("./590433.js"),
  Chunk388032 = require("./388032.jsx");
let o = t => {
  var n;
  let {
    duration: e,
    onSelectDuration: r
  } = t, i = (0, s.tr)(), u = i.find(t => t.value === e);
  return (0, l.jsx)(a.VcW, {
    required: true,
    value: null != (n = null == u ? true : u.value) ? n : s.DisableCommunicationDuration.DURATION_60_SEC,
    options: i,
    onSelectionChange: t => {
      let n = i.find(n => n.value === t);
      null != n && r(n.value)
    },
    placeholder: c.intl.string(c.t.k7yo6p),
    selectionMode: "single"
  })
};

function A(t) {
  let {
    action: n,
    triggerType: e,
    isEdit: a,
    onUpdateDuration: A,
    onClose: j,
    transitionState: d
  } = t, [E, S] = r.useState(() => null != n.metadata.durationSeconds && n.metadata.durationSeconds > 0 ? n.metadata.durationSeconds : s.DisableCommunicationDuration.DURATION_60_SEC), _ = (0, u.c)(n.type, n, e);
  if (null == _) return null;
  let {
    headerText: N
  } = _;
  return (0, l.jsx)(i.Modal, {
    onClose: j,
    transitionState: d,
    title: N,
    subtitle: c.intl.string(c.t.DWGBAh),
    actions: [{
      text: c.intl.string(c.t["ETE/oC"]),
      onClick: () => {
        j()
      },
      variant: "secondary"
    }, {
      text: a ? c.intl.string(c.t.bt75uw) : c.intl.string(c.t["R3BPH+"]),
      onClick: () => {
        A(E)
      }
    }],
    children: (0, l.jsx)(o, {
      duration: E,
      onSelectDuration: t => {
        S(t)
      }
    })
  })
}