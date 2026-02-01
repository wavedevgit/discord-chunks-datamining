/** Chunk was on 21738 **/
/** chunk id: 351466, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
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
let _ = function() {
  let e = (0, a.bG)([o.A], () => o.A.hasLoadedExperiments),
    t = g.A.useField("selectedTab"),
    n = function(e) {
      switch (e) {
        case f.GlobalDiscoveryTab.SERVERS:
          return (0, r.jsx)(u.A, {});
        case f.GlobalDiscoveryTab.APPS:
          return (0, r.jsx)(c.default, {});
        case f.GlobalDiscoveryTab.QUESTS:
          return (0, r.jsx)(d.A, {
            topLevelRoute: false
          });
        default:
          (0, p.xb)(e)
      }
    }(t),
    _ = (0, l.zy)();
  return i.useEffect(() => {
    let e = _.pathname,
      t = (0, m.j)(e);
    t !== g.A.getField("selectedTab") && g.A.setState({
      selectedTab: t
    })
  }, [_.pathname]), i.useEffect(() => {
    e && (0, h.tx)({
      selectedTab: t
    })
  }, [t, e]), (0, r.jsxs)("section", {
    className: A.k,
    children: [(0, r.jsx)(s.HI, {
      location: (0, m.t)(t)
    }), (0, r.jsx)("div", {
      className: A.T
    }), n]
  })
}