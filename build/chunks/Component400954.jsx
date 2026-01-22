/** Chunk was on 70215 **/
/** chunk id: 400954, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk732955 = require("./732955.js"),
  Chunk424798 = require("./424798.js"),
  Chunk663535 = require("./663535.jsx"),
  Chunk747926 = require("./747926.js"),
  Chunk37411 = require("./37411.js"),
  Chunk985018 = require("./985018.jsx");

function h(t) {
  let {
    guildId: e,
    onClose: n,
    transitionState: h
  } = t, u = (0, s.Mu)(e), p = a.useCallback((t, e) => {
    n(), (0, c.JA)(t, !e, l.H9.GUILD_ACTIVE_THREADS_MODAL)
  }, [n]), C = a.useCallback(t => {
    let e = u[t.row];
    return (0, i.jsx)(o.A, {
      threadId: e,
      goToThread: p,
      showChannelName: true
    }, "".concat(t.section, "-").concat(t.row))
  }, [u, p]);
  return (0, i.jsx)(r.aFV, {
    title: d.intl.string(d.t["dOWb+f"]),
    actions: [{
      text: d.intl.string(d.t.cpT0Cq),
      onClick: n,
      variant: "primary"
    }],
    onClose: n,
    transitionState: h,
    listProps: {
      fade: true,
      sections: [u.length],
      renderSection: () => null,
      sectionHeight: 0,
      rowHeight: 80,
      renderRow: C,
      chunkSize: 20
    }
  })
}