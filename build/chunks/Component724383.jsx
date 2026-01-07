/** Chunk was on 1272 **/
/** chunk id: 724383, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk828700 = require("./828700.js"),
  Chunk442837 = require("./442837.js"),
  Chunk252618 = require("./252618.js"),
  Chunk353926 = require("./353926.js"),
  Chunk319443 = require("./319443.jsx"),
  Chunk106075 = require("./106075.jsx"),
  Chunk121711 = require("./121711.jsx"),
  Chunk823379 = require("./823379.js"),
  Chunk571457 = require("./571457.js"),
  Chunk836768 = require("./836768.js"),
  Chunk766219 = require("./766219.js"),
  Chunk49898 = require("./49898.js"),
  Chunk10531 = require("./10531.js");
let _ = function() {
  let e = (0, a.e7)([s.Z], () => s.Z.hasLoadedExperiments),
    t = g.Z.useField("selectedTab"),
    n = function(e) {
      switch (e) {
        case h.GlobalDiscoveryTab.SERVERS:
          return (0, r.jsx)(u.Z, {});
        case h.GlobalDiscoveryTab.APPS:
          return (0, r.jsx)(c.default, {});
        case h.GlobalDiscoveryTab.QUESTS:
          return (0, r.jsx)(d.Z, {
            topLevelRoute: false
          });
        default:
          (0, p.vE)(e)
      }
    }(t),
    _ = (0, l.TH)();
  return i.useEffect(() => {
    let e = _.pathname,
      t = (0, m.I)(e);
    t !== g.Z.getField("selectedTab") && g.Z.setState({
      selectedTab: t
    })
  }, [_.pathname]), i.useEffect(() => {
    e && (0, f.RI)({
      selectedTab: t
    })
  }, [t, e]), (0, r.jsxs)("section", {
    className: b.container,
    children: [(0, r.jsx)(o.yY, {
      location: (0, m.s)(t)
    }), (0, r.jsx)("div", {
      className: b.dragRegion
    }), n]
  })
}