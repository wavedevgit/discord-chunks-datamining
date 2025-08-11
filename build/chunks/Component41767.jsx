/** Chunk was on 78273 **/
/** chunk id: 41767, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => c
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk556012 = require("./556012.js"),
  Chunk590433 = require("./590433.js"),
  Chunk388032 = require("./388032.jsx");
let d = t => {
  var n;
  let {
    duration: e,
    onSelectDuration: i
  } = t, a = (0, o.tr)(), r = a.find(t => t.value === e);
  return (0, l.jsx)(u.xJW, {
    required: true,
    children: (0, l.jsx)(u.VcW, {
      value: null != (n = null == r ? true : r.value) ? n : o.UK.DURATION_60_SEC,
      options: a,
      onChange: t => {
        let n = a.find(n => n.value === t);
        null != n && i(n.value)
      },
      placeholder: s.intl.string(s.t.k7yo6u)
    })
  })
};

function c(t) {
  let {
    action: n,
    triggerType: e,
    isEdit: u,
    onUpdateDuration: c,
    onClose: p,
    transitionState: h
  } = t, [v, x] = i.useState(() => null != n.metadata.durationSeconds && n.metadata.durationSeconds > 0 ? n.metadata.durationSeconds : o.UK.DURATION_60_SEC), C = (0, r.c)(n.type, n, e);
  if (null == C) return null;
  let {
    headerText: S
  } = C;
  return (0, l.jsx)(a.Modal, {
    onClose: p,
    transitionState: h,
    title: S,
    subtitle: s.intl.string(s.t.DWGBAg),
    actions: [{
      text: s.intl.string(s.t["ETE/oK"]),
      onClick: () => {
        p()
      },
      variant: "secondary"
    }, {
      text: u ? s.intl.string(s.t.bt75u7) : s.intl.string(s.t.R3BPHx),
      onClick: () => {
        c(v)
      }
    }],
    children: (0, l.jsx)(d, {
      duration: v,
      onSelectDuration: t => {
        x(t)
      }
    })
  })
}