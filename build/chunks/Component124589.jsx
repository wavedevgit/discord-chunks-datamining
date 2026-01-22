/** Chunk was on 28636 **/
/** chunk id: 124589, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => i
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx");

function i(e) {
  let {
    tabs: t,
    selectedTab: n,
    onTabSelect: i,
    onClose: s
  } = e;
  return (0, l.jsx)(a.W1t, {
    navId: "global-discovery-tabs-overflow-menu",
    "aria-label": r.intl.string(r.t.riPnr0),
    hideScroller: true,
    onClose: s,
    onSelect: s,
    children: (0, l.jsx)(a.rXV, {
      children: t.map(e => {
        let {
          id: t,
          label: r
        } = e;
        return (0, l.jsx)(a.Drp, {
          id: t,
          label: r,
          icon: t === n ? a.yr3 : true,
          action: () => i(t)
        }, t)
      })
    }, "overflow-tabs")
  })
}