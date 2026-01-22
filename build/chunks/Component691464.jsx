/** Chunk was on 52049 **/
/** chunk id: 691464, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => r
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk732955 = require("./732955.js"),
  Chunk985018 = require("./985018.jsx");

function r(t) {
  let {
    transitionState: i,
    onConfirm: n,
    onClose: r
  } = t, [c, o] = e.useState(false), u = e.useCallback(() => {
    if (!c) {
      o(true);
      try {
        n()
      } catch (t) {} finally {
        o(false)
      }
      r()
    }
  }, [c, n, r]), d = e.useMemo(() => [{
    text: l.intl.string(l.t["ETE/oC"]),
    onClick: r,
    variant: "secondary",
    disabled: c
  }, {
    text: l.intl.string(l.t.MMlhsr),
    onClick: u,
    loading: c
  }], [u, c, r]);
  return (0, s.jsx)(a.aFV, {
    title: l.intl.string(l.t.eJzSDT),
    subtitle: l.intl.string(l.t.GB4jUw),
    actions: d,
    onClose: r,
    transitionState: i
  })
}