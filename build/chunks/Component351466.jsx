/** Chunk was on 21738 **/
/** chunk id: 351466, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk960488 = require("./960488.js"),
  Chunk311907 = require("./311907.js"),
  Chunk726249 = require("./726249.js"),
  Chunk49463 = require("./49463.js"),
  Chunk122204 = require("./122204.jsx"),
  Chunk301503 = require("./301503.jsx"),
  Chunk570763 = require("./570763.jsx"),
  Chunk403362 = require("./403362.js"),
  Chunk533129 = require("./533129.js"),
  Chunk726845 = require("./726845.js"),
  Chunk285395 = require("./285395.js"),
  Chunk488995 = require("./488995.js"),
  Chunk34352 = require("./34352.js");
let b = function() {
  let e = (0, a.bG)([o.A], () => o.A.hasLoadedExperiments),
    t = h.A.useField("selectedTab"),
    n = function(e) {
      switch (e) {
        case g.GlobalDiscoveryTab.SERVERS:
          return (0, r.jsx)(u.A, {});
        case g.GlobalDiscoveryTab.APPS:
          return (0, r.jsx)(c.default, {});
        case g.GlobalDiscoveryTab.QUESTS:
          return (0, r.jsx)(d.A, {
            topLevelRoute: false
          });
        default:
          (0, p.xb)(e)
      }
    }(t),
    b = (0, l.zy)();
  return i.useEffect(() => {
    let e = b.pathname,
      t = (0, A.j)(e);
    t !== h.A.getField("selectedTab") && h.A.setState({
      selectedTab: t
    })
  }, [b.pathname]), i.useEffect(() => {
    e && (0, f.tx)({
      selectedTab: t
    })
  }, [t, e]), (0, r.jsxs)("section", {
    className: m.k,
    children: [(0, r.jsx)(s.HI, {
      location: (0, A.t)(t)
    }), (0, r.jsx)("div", {
      className: m.T
    }), n]
  })
}