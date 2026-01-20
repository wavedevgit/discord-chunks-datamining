/** Chunk was on 22979 **/
/** chunk id: 687658, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk972959 = require("./972959.js"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk981631 = require("./981631.js");
let u = (0, Chunk972959.H)(() => ({
  setting: o.n.ACCOUNT_PANEL,
  section: d.oAB.ACCOUNT,
  subsection: true
}));

function m() {
  let e = u.useField("setting"),
    t = u.useField("section"),
    n = u.useField("subsection"),
    s = r.useCallback(() => {
      (0, c.openUserSettings)(e, {
        section: t,
        subsection: n
      })
    }, [e, t, n]),
    m = r.useMemo(() => Object.values(o.n).map(e => ({
      id: e,
      label: e,
      value: e
    })), []),
    p = r.useMemo(() => Object.values(d.oAB).map(e => ({
      id: e,
      label: e,
      value: e
    })), []);
  return (0, a.jsxs)(i.C3N, {
    label: "Settings Navigation Tool",
    children: [(0, a.jsx)(l.VcW, {
      label: "Setting (Redesign)",
      placeholder: "Select a setting",
      value: e,
      onSelectionChange: e => u.setState({
        setting: e
      }),
      options: m,
      selectionMode: "single"
    }), (0, a.jsx)(l.VcW, {
      label: "Setting Section (Legacy)",
      value: t,
      onSelectionChange: e => u.setState({
        section: e
      }),
      options: p,
      selectionMode: "single"
    }), (0, a.jsx)(l.oil, {
      label: "Setting Subsection (Legacy)",
      placeholder: "Type a subsection...",
      onChange: e => u.setState({
        subsection: e
      })
    }), (0, a.jsx)(i.zxk, {
      variant: "primary",
      onClick: s,
      text: "Open User Settings"
    })]
  })
}