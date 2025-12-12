/** Chunk was on web.js **/
/** chunk id: 328456, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Rj: () => l,
  Ws: () => c,
  bB: () => s
}), require("./539854.js"), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk979554 = require("./979554.js"),
  Chunk388032 = require("./388032.jsx");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class s {
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
    let n = (null != (t = this.itemsByTypes.get(e)) ? t : [])[0];
    if (null != n) return n
  }
  sortByTypes(e) {
    return e.reduce((e, t) => {
      let n = e.get(t.type);
      return null != n ? n.push(t) : e.set(t.type, [t]), e
    }, new Map)
  }
  constructor(e) {
    a(this, "itemsByTypes", true), this.itemsByTypes = this.sortByTypes(e)
  }
}
let l = e => {
    let {
      firstProfileEffect: t,
      firstAvatarDecoration: n,
      firstNameplate: i
    } = r.useMemo(() => new s(e.items), [e]);
    return {
      firstProfileEffect: t,
      firstAvatarDecoration: n,
      firstNameplate: i
    }
  },
  c = e => {
    let t = o.intl.string(o.t["7v0T9P"]),
      n = o.intl.string(o.t.wR5wOo),
      r = o.intl.string(o.t.x5CoXR);
    if (null != e.bundledProducts) {
      var i, a, s;
      e.bundledProducts.length > 0 && (t = null == (i = e.bundledProducts[0]) ? true : i.name), e.bundledProducts.length > 1 && (n = null == (a = e.bundledProducts[1]) ? true : a.name), e.bundledProducts.length > 2 && (r = null == (s = e.bundledProducts[2]) ? true : s.name)
    }
    return {
      itemOneName: t,
      itemTwoName: n,
      itemThreeName: r
    }
  }