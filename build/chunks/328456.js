/** Chunk was on 96887 **/
/** chunk id: 328456, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Rj: () => o,
  Ws: () => l
}), require("./539854.js"), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk979554 = require("./979554.js"),
  Chunk388032 = require("./388032.jsx");
class s {
  get firstAvatarDecoration() {
    return this.getFirstItemByType(Chunk979554.Z.AVATAR_DECORATION)
  }
  get firstProfileEffect() {
    return this.getFirstItemByType(Chunk979554.Z.PROFILE_EFFECT)
  }
  getFirstItemByType(e) {
    var t;
    let r = (null != (t = this.itemsByTypes.get(e)) ? t : [])[0];
    if (null != r) return r
  }
  sortByTypes(e) {
    return e.reduce((e, t) => {
      let r = e.get(t.type);
      return null != r ? r.push(t) : e.set(t.type, [t]), e
    }, new Map)
  }
  constructor(e) {
    var t, r;
    r = true, (t = "itemsByTypes") in this ? Object.defineProperty(this, t, {
      value: r,
      enumerable: true,
      configurable: true,
      writable: true
    }) : this[t] = r, this.itemsByTypes = this.sortByTypes(e)
  }
}
let o = e => {
    let {
      firstProfileEffect: t,
      firstAvatarDecoration: r
    } = a.useMemo(() => new s(e.items), [e]);
    return {
      firstProfileEffect: t,
      firstAvatarDecoration: r
    }
  },
  l = e => {
    let t = i.intl.string(i.t["7v0T9P"]),
      r = i.intl.string(i.t.wR5wOj);
    if (null != e.bundledProducts) {
      var a, n;
      e.bundledProducts.length > 0 && (t = null == (a = e.bundledProducts[0]) ? true : a.name), e.bundledProducts.length > 1 && (r = null == (n = e.bundledProducts[1]) ? true : n.name)
    }
    return {
      itemOneName: t,
      itemTwoName: r
    }
  }