/** Chunk was on 85991 **/
/** chunk id: 675984, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  m: () => r
}), require("./953529.js"), require("./642613.js"), require("./388685.js");
var Chunk962774 = require("./962774.js");

function r(e) {
  let t = e.skus.map(e => {
      let t = e.tenant_metadata.plan_features.map(e => ({
        title: e.title,
        description: e.description
      }));
      return {
        id: e.id,
        name: e.name,
        cost: e.tenant_metadata.boost_price,
        specifications: t
      }
    }).sort((e, t) => e.cost - t.cost),
    n = t.length > 0 ? Math.min(...t.map(e => e.cost)) : 0;
  return {
    id: e.id,
    name: e.name,
    imageUrl: "",
    developer: "Game Server Provider",
    plans: t,
    regions: a.Y9,
    baseCost: n
  }
}