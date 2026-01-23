/** Chunk was on 36290 **/
/** chunk id: 997590, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => h
}), require("./638769.js"), require("./321073.js"), require("./896048.js"), require("./735438.js");
var i, n, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk403362 = require("./403362.js"),
  Chunk324580 = require("./324580.js"),
  Chunk985018 = require("./985018.jsx");
let d = null,
  _ = [],
  u = [],
  p = {};
class E extends(i = Chunk311907.Ay.Store) {
  getPrimaryCategories() {
    return _
  }
  getDiscoveryCategories() {
    let e = l.FZ.map(e => u.find(t => t.categoryId === e)).filter(s.Vq);
    return [{
      categoryId: l.Iq,
      name: c.intl.string(c.t.Ym2Ri6)
    }, ...e]
  }
  getClanDiscoveryCategories() {
    let e = l.FZ.map(e => u.find(t => t.categoryId === e)).filter(s.Vq);
    return [{
      categoryId: l.Iq,
      name: c.intl.string(c.t.QToH29)
    }, ...e]
  }
  getAllCategories() {
    return u
  }
  getFetchedLocale() {
    return d
  }
  getCategoryName(e) {
    return e === l.Iq ? c.intl.string(c.t.Ym2Ri6) : p[e]
  }
}(n = "displayName") in E ? Object.defineProperty(E, n, {
  value: "GuildDiscoveryCategoryStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : E[n] = "GuildDiscoveryCategoryStore";
let h = new E(Chunk73153.h, {
  GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS: function(e) {
    let t, {
        categories: r,
        locale: i
      } = e,
      n = [],
      o = [];
    if (r.sort((e, t) => e.name < t.name ? false : 1).forEach(e => {
        let {
          id: r,
          name: i,
          is_primary: a
        } = e;
        if (r !== l.ig) {
          if (r === l.v) {
            t = {
              categoryId: r,
              name: i
            };
            return
          }
          true === a && n.push({
            categoryId: r,
            name: i
          }), o.push({
            categoryId: r,
            name: i
          }), p[r] = i
        }
      }), null != t) {
      let {
        categoryId: e,
        name: r
      } = t;
      n.push({
        categoryId: e,
        name: r
      }), p[e] = r
    }
    d = i, _ = n, u = o
  }
})