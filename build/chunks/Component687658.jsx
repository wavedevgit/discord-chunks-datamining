/** Chunk was on 75393 **/
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
  setting: Chunk313789.n.ACCOUNT_PANEL,
  section: Chunk981631.oAB.ACCOUNT,
  subsection: true
}));

function h() {
  let e = p.useField("setting"),
    t = p.useField("section"),
    n = p.useField("subsection"),
    o = Chunk473749.useCallback(() => {
      (0, Chunk518596.openUserSettings)(module, {
        section: exports,
        subsection: require
      })
    }, [module, exports, require]),
    h = Chunk473749.useMemo(() => Object.values(Chunk313789.n).map(e => ({
      label: e,
      value: e
    })), []),
    x = Chunk473749.useMemo(() => Object.values(Chunk981631.oAB).map(e => ({
      label: e,
      value: e
    })), []);
  return (0, Chunk54381.jsxs)(Chunk793030.C3N, {
    label: "Settings Navigation Tool",
    children: [(0, Chunk54381.jsx)(Chunk668339.d, {
      label: "Setting (Redesign)",
      placeholder: "Select a setting",
      value: module,
      onChange: e => p.setState({
        setting: e
      }),
      options: h,
      popoutLayerContext: Chunk246992.O$
    }), (0, Chunk54381.jsx)(Chunk668339.d, {
      label: "Setting Section (Legacy)",
      value: exports,
      onChange: e => p.setState({
        section: e
      }),
      options: x,
      popoutLayerContext: Chunk246992.O$
    }), (0, Chunk54381.jsx)(Chunk481060.oil, {
      label: "Setting Subsection (Legacy)",
      placeholder: "Type a subsection...",
      onChange: e => p.setState({
        subsection: e
      })
    }), (0, Chunk54381.jsx)(Chunk793030.zxk, {
      variant: "primary",
      onClick: Chunk972959,
      text: "Open User Settings"
    })]
  })
}