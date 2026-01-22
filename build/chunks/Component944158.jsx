/** Chunk was on 22477 **/
/** chunk id: 944158, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk839214 = require("./839214.js"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk652215 = require("./652215.js");
let u = (0, Chunk839214.D)(() => ({
  setting: o.X.ACCOUNT_PANEL,
  section: d.nc_.ACCOUNT,
  subsection: true
}));

function m() {
  let e = u.useField("setting"),
    t = u.useField("section"),
    n = u.useField("subsection"),
    s = l.useCallback(() => {
      (0, c.openUserSettings)(e, {
        section: t,
        subsection: n
      })
    }, [e, t, n]),
    m = l.useMemo(() => Object.values(o.X).map(e => ({
      id: e,
      label: e,
      value: e
    })), []),
    p = l.useMemo(() => Object.values(d.nc_).map(e => ({
      id: e,
      label: e,
      value: e
    })), []);
  return (0, a.jsxs)(i.nVY, {
    label: "Settings Navigation Tool",
    children: [(0, a.jsx)(r.ZiE, {
      label: "Setting (Redesign)",
      placeholder: "Select a setting",
      value: e,
      onSelectionChange: e => u.setState({
        setting: e
      }),
      options: m,
      selectionMode: "single"
    }), (0, a.jsx)(r.ZiE, {
      label: "Setting Section (Legacy)",
      value: t,
      onSelectionChange: e => u.setState({
        section: e
      }),
      options: p,
      selectionMode: "single"
    }), (0, a.jsx)(r.ksK, {
      label: "Setting Subsection (Legacy)",
      placeholder: "Type a subsection...",
      onChange: e => u.setState({
        subsection: e
      })
    }), (0, a.jsx)(i.$nd, {
      variant: "primary",
      onClick: s,
      text: "Open User Settings"
    })]
  })
}