/** Chunk was on 78273 **/
/** chunk id: 41767, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => j
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
    onChange: t => {
      let n = i.find(n => n.value === t);
      null != n && r(n.value)
    },
    placeholder: c.intl.string(c.t.k7yo6u)
  })
};

function j(t) {
  let {
    action: n,
    triggerType: e,
    isEdit: a,
    onUpdateDuration: j,
    onClose: A,
    transitionState: E
  } = t, [d, _] = r.useState(() => null != n.metadata.durationSeconds && n.metadata.durationSeconds > 0 ? n.metadata.durationSeconds : s.DisableCommunicationDuration.DURATION_60_SEC), N = (0, u.c)(n.type, n, e);
  if (null == N) return null;
  let {
    headerText: S
  } = N;
  return (0, l.jsx)(i.Modal, {
    onClose: A,
    transitionState: E,
    title: S,
    subtitle: c.intl.string(c.t.DWGBAg),
    actions: [{
      text: c.intl.string(c.t["ETE/oK"]),
      onClick: () => {
        A()
      },
      variant: "secondary"
    }, {
      text: a ? c.intl.string(c.t.bt75u7) : c.intl.string(c.t.R3BPHx),
      onClick: () => {
        j(d)
      }
    }],
    children: (0, l.jsx)(o, {
      duration: d,
      onSelectDuration: t => {
        _(t)
      }
    })
  })
}