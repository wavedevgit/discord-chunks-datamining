/** Chunk was on 22516 **/
/** chunk id: 526429, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./642613.js"), require("./539854.js"), require("./388685.js"), require("./392711.js");
var n, i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk823379 = require("./823379.js"),
  Chunk128449 = require("./128449.js"),
  Chunk388032 = require("./388032.jsx");
let d = null,
  u = [],
  _ = [],
  p = {};
class E extends(n = Chunk442837.ZP.Store) {
  getPrimaryCategories() {
    return u
  }
  getDiscoveryCategories() {
    let e = s.L3.map(e => _.find(t => t.categoryId === e)).filter(l.lm);
    return [{
      categoryId: s.Hk,
      name: c.intl.string(c.t.Ym2Ri6)
    }, ...e]
  }
  getClanDiscoveryCategories() {
    let e = s.L3.map(e => _.find(t => t.categoryId === e)).filter(l.lm);
    return [{
      categoryId: s.Hk,
      name: c.intl.string(c.t.QToH29)
    }, ...e]
  }
  getAllCategories() {
    return _
  }
  getFetchedLocale() {
    return d
  }
  getCategoryName(e) {
    return e === s.Hk ? c.intl.string(c.t.Ym2Ri6) : p[e]
  }
}(i = "displayName") in E ? Object.defineProperty(E, i, {
  value: "GuildDiscoveryCategoryStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : E[i] = "GuildDiscoveryCategoryStore";
let O = new E(Chunk570140.Z, {
  GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS: function(e) {
    let t, {
        categories: r,
        locale: n
      } = e,
      i = [],
      a = [];
    if (r.sort((e, t) => e.name < t.name ? false : 1).forEach(e => {
        let {
          id: r,
          name: n,
          is_primary: o
        } = e;
        if (r !== s.o3) {
          if (r === s.dc) {
            t = {
              categoryId: r,
              name: n
            };
            return
          }
          true === o && i.push({
            categoryId: r,
            name: n
          }), a.push({
            categoryId: r,
            name: n
          }), p[r] = n
        }
      }), null != t) {
      let {
        categoryId: e,
        name: r
      } = t;
      i.push({
        categoryId: e,
        name: r
      }), p[e] = r
    }
    d = n, u = i, _ = a
  }
})