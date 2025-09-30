/** Chunk was on 96887 **/
/** chunk id: 328456, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Rj: () => o,
  Ws: () => s,
  bB: () => l
}), require("./539854.js"), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk979554 = require("./979554.js"),
  Chunk388032 = require("./388032.jsx");
class l {
  get firstAvatarDecoration() {
    return this.getFirstItemByType(Chunk979554.Z.AVATAR_DECORATION)
  }
  get firstProfileEffect() {
    return this.getFirstItemByType(Chunk979554.Z.PROFILE_EFFECT)
  }
  get firstNameplate() {
    return this.getFirstItemByType(Chunk979554.Z.NAMEPLATE)
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
    ! function(e, t, r) {
      t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    }(this, "itemsByTypes", true), this.itemsByTypes = this.sortByTypes(e)
  }
}
let o = e => {
    let {
      firstProfileEffect: t,
      firstAvatarDecoration: r,
      firstNameplate: n
    } = a.useMemo(() => new l(e.items), [e]);
    return {
      firstProfileEffect: t,
      firstAvatarDecoration: r,
      firstNameplate: n
    }
  },
  s = e => {
    let t = i.intl.string(i.t["7v0T9P"]),
      r = i.intl.string(i.t.wR5wOj),
      a = i.intl.string(i.t.x5CoXV);
    if (null != e.bundledProducts) {
      var n, l, o;
      e.bundledProducts.length > 0 && (t = null == (n = e.bundledProducts[0]) ? true : n.name), e.bundledProducts.length > 1 && (r = null == (l = e.bundledProducts[1]) ? true : l.name), e.bundledProducts.length > 2 && (a = null == (o = e.bundledProducts[2]) ? true : o.name)
    }
    return {
      itemOneName: t,
      itemTwoName: r,
      itemThreeName: a
    }
  }