/** Chunk was on 21932 **/
/** chunk id: 16039, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => o
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk239705 = require("./239705.js"),
  Chunk200700 = require("./200700.js"),
  Chunk985018 = require("./985018.jsx");
let c = t => {
  var n;
  let {
    duration: e,
    onSelectDuration: r
  } = t, i = (0, s.ny)(), u = i.find(t => t.value === e);
  return (0, l.jsx)(a.ZiE, {
    required: true,
    value: null != (n = null == u ? true : u.value) ? n : s.DisableCommunicationDuration.DURATION_60_SEC,
    options: i,
    onSelectionChange: t => {
      let n = i.find(n => n.value === t);
      null != n && r(n.value)
    },
    placeholder: A.intl.string(A.t.k7yo6p),
    selectionMode: "single"
  })
};

function o(t) {
  let {
    action: n,
    triggerType: e,
    isEdit: a,
    onUpdateDuration: o,
    onClose: E,
    transitionState: d
  } = t, [S, _] = r.useState(() => null != n.metadata.durationSeconds && n.metadata.durationSeconds > 0 ? n.metadata.durationSeconds : s.DisableCommunicationDuration.DURATION_60_SEC), N = (0, u.x)(n.type, n, e);
  if (null == N) return null;
  let {
    headerText: C
  } = N;
  return (0, l.jsx)(i.Modal, {
    onClose: E,
    transitionState: d,
    title: C,
    subtitle: A.intl.string(A.t.DWGBAh),
    actions: [{
      text: A.intl.string(A.t["ETE/oC"]),
      onClick: () => {
        E()
      },
      variant: "secondary"
    }, {
      text: a ? A.intl.string(A.t.bt75uw) : A.intl.string(A.t["R3BPH+"]),
      onClick: () => {
        o(S)
      }
    }],
    children: (0, l.jsx)(c, {
      duration: S,
      onSelectDuration: t => {
        _(t)
      }
    })
  })
}