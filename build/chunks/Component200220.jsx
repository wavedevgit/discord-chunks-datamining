/** Chunk was on 57918 **/
/** chunk id: 200220, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => r
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk159691 = require("./159691.js"),
  Chunk388032 = require("./388032.jsx");

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
  return (0, s.jsx)(a.u_l, {
    title: l.intl.string(l.t.eJzSDT),
    subtitle: l.intl.string(l.t.GB4jUw),
    actions: d,
    onClose: r,
    transitionState: i
  })
}