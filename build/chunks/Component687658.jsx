/** Chunk was on 22979 **/
/** chunk id: 687658, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk668339 = require("./668339.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk972959 = require("./972959.js"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk246992 = require("./246992.js"),
  Chunk981631 = require("./981631.js");
let p = (0, Chunk972959.H)(() => ({
  setting: c.n.ACCOUNT_PANEL,
  section: m.oAB.ACCOUNT,
  subsection: true
}));

function h() {
  let e = p.useField("setting"),
    t = p.useField("section"),
    n = p.useField("subsection"),
    o = r.useCallback(() => {
      (0, d.openUserSettings)(e, {
        section: t,
        subsection: n
      })
    }, [e, t, n]),
    h = r.useMemo(() => Object.values(c.n).map(e => ({
      label: e,
      value: e
    })), []),
    f = r.useMemo(() => Object.values(m.oAB).map(e => ({
      label: e,
      value: e
    })), []);
  return (0, a.jsxs)(i.C3N, {
    label: "Settings Navigation Tool",
    children: [(0, a.jsx)(l.d, {
      label: "Setting (Redesign)",
      placeholder: "Select a setting",
      value: e,
      onChange: e => p.setState({
        setting: e
      }),
      options: h,
      popoutLayerContext: u.O$
    }), (0, a.jsx)(l.d, {
      label: "Setting Section (Legacy)",
      value: t,
      onChange: e => p.setState({
        section: e
      }),
      options: f,
      popoutLayerContext: u.O$
    }), (0, a.jsx)(s.oil, {
      label: "Setting Subsection (Legacy)",
      placeholder: "Type a subsection...",
      onChange: e => p.setState({
        subsection: e
      })
    }), (0, a.jsx)(i.zxk, {
      variant: "primary",
      onClick: o,
      text: "Open User Settings"
    })]
  })
}