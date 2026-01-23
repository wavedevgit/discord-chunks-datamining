/** Chunk was on 28636 **/
/** chunk id: 124589, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => a
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx");

function a(e) {
  let {
    tabs: t,
    selectedTab: n,
    onTabSelect: a,
    onClose: s
  } = e;
  return (0, r.jsx)(l.W1t, {
    navId: "global-discovery-tabs-overflow-menu",
    "aria-label": i.intl.string(i.t.riPnr0),
    hideScroller: true,
    onClose: s,
    onSelect: s,
    children: (0, r.jsx)(l.rXV, {
      children: t.map(e => {
        let {
          id: t,
          label: i
        } = e;
        return (0, r.jsx)(l.Drp, {
          id: t,
          label: i,
          icon: t === n ? l.yr3 : true,
          action: () => a(t)
        }, t)
      })
    }, "overflow-tabs")
  })
}