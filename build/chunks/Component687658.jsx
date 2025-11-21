/** Chunk was on 43605 **/
/** chunk id: 687658, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk972959 = require("./972959.js"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk246992 = require("./246992.js"),
  Chunk981631 = require("./981631.js");
let m = (0, Chunk972959.H)(() => ({
  setting: Chunk313789.n.ACCOUNT_PANEL,
  section: Chunk981631.oAB.ACCOUNT,
  subsection: true
}));

function p() {
  let e = m.useField("setting"),
    t = m.useField("section"),
    n = m.useField("subsection"),
    s = Chunk473749.useCallback(() => {
      (0, Chunk518596.openUserSettings)(module, {
        section: exports,
        subsection: require
      })
    }, [module, exports, require]),
    p = Chunk473749.useMemo(() => Object.values(Chunk313789.n).map(e => ({
      label: e,
      value: e
    })), []),
    h = Chunk473749.useMemo(() => Object.values(Chunk981631.oAB).map(e => ({
      label: e,
      value: e
    })), []);
  return (0, Chunk54381.jsxs)(Chunk793030.C3N, {
    label: "Settings Navigation Tool",
    children: [(0, Chunk54381.jsx)(Chunk481060.VcW, {
      label: "Setting (Redesign)",
      placeholder: "Select a setting",
      value: module,
      onChange: e => m.setState({
        setting: e
      }),
      options: p,
      popoutLayerContext: Chunk246992.O$
    }), (0, Chunk54381.jsx)(Chunk481060.VcW, {
      label: "Setting Section (Legacy)",
      value: exports,
      onChange: e => m.setState({
        section: e
      }),
      options: h,
      popoutLayerContext: Chunk246992.O$
    }), (0, Chunk54381.jsx)(Chunk481060.oil, {
      label: "Setting Subsection (Legacy)",
      placeholder: "Type a subsection...",
      onChange: e => m.setState({
        subsection: e
      })
    }), (0, Chunk54381.jsx)(Chunk793030.zxk, {
      variant: "primary",
      onClick: Chunk972959,
      text: "Open User Settings"
    })]
  })
}