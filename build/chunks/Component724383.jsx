/** Chunk was on 1272 **/
/** chunk id: 724383, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
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
  Chunk775491 = require("./775491.js");
let b = function() {
  let e = (0, Chunk442837.e7)([Chunk353926.Z], () => Chunk353926.Z.hasLoadedExperiments),
    t = Chunk836768.Z.useField("selectedTab"),
    n = function(e) {
      switch (e) {
        case m.GlobalDiscoveryTab.SERVERS:
          return (0, r.jsx)(u.Z, {});
        case m.GlobalDiscoveryTab.APPS:
          return (0, r.jsx)(c.default, {});
        case m.GlobalDiscoveryTab.QUESTS:
          return (0, r.jsx)(d.Z, {
            topLevelRoute: false
          });
        default:
          (0, p.vE)(e)
      }
    }(exports),
    b = (0, Chunk828700.TH)();
  return Chunk473749.useEffect(() => {
    let e = b.pathname,
      t = (0, Chunk766219.I)(module);
    exports !== Chunk836768.Z.getField("selectedTab") && Chunk836768.Z.setState({
      selectedTab: exports
    })
  }, [b.pathname]), Chunk473749.useEffect(() => {
    module && (0, Chunk571457.RI)({
      selectedTab: exports
    })
  }, [exports, module]), (0, Chunk54381.jsxs)("section", {
    className: Chunk775491.container,
    children: [(0, Chunk54381.jsx)(Chunk252618.yY, {
      location: (0, Chunk766219.s)(exports)
    }), (0, Chunk54381.jsx)("div", {
      className: Chunk775491.dragRegion
    }), require]
  })
}