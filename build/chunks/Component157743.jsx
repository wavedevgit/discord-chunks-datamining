/** Chunk was on 22482 **/
/** chunk id: 157743, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk159691 = require("./159691.js"),
  Chunk235449 = require("./235449.js"),
  Chunk300234 = require("./300234.jsx"),
  Chunk488131 = require("./488131.js"),
  Chunk124368 = require("./124368.js"),
  Chunk388032 = require("./388032.jsx");

function d(t) {
  let {
    guildId: n,
    onClose: e,
    transitionState: d
  } = t, h = (0, a.nA)(n), p = o.useCallback((t, n) => {
    e(), (0, c.ok)(t, !n, l.on.GUILD_ACTIVE_THREADS_MODAL)
  }, [e]), k = o.useCallback(t => {
    let n = h[t.row];
    return (0, i.jsx)(s.Z, {
      threadId: n,
      goToThread: p,
      showChannelName: true
    }, "".concat(t.section, "-").concat(t.row))
  }, [h, p]);
  return (0, i.jsx)(r.u_l, {
    title: u.intl.string(u.t["dOWb+f"]),
    actions: [{
      text: u.intl.string(u.t.cpT0Cq),
      onClick: e,
      variant: "primary"
    }],
    onClose: e,
    transitionState: d,
    listProps: {
      fade: true,
      sections: [h.length],
      renderSection: () => null,
      sectionHeight: 0,
      rowHeight: 80,
      renderRow: k,
      chunkSize: 20
    }
  })
}