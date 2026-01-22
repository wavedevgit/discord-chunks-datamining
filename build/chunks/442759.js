/** Chunk was on web.js **/
/** chunk id: 442759, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ym: () => o,
  f5: () => l,
  yW: () => c
}), require("./321073.js"), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk575593 = require("./575593.js"),
  Chunk985018 = require("./985018.jsx");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class o {
  get firstAvatarDecoration() {
    return this.getFirstItemByType(i.R.AVATAR_DECORATION)
  }
  get firstProfileEffect() {
    return this.getFirstItemByType(i.R.PROFILE_EFFECT)
  }
  get firstNameplate() {
    return this.getFirstItemByType(i.R.NAMEPLATE)
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
    s(this, "itemsByTypes", true), this.itemsByTypes = this.sortByTypes(e)
  }
}
let l = e => {
    let {
      firstProfileEffect: t,
      firstAvatarDecoration: n,
      firstNameplate: i
    } = r.useMemo(() => new o(e.items), [e]);
    return {
      firstProfileEffect: t,
      firstAvatarDecoration: n,
      firstNameplate: i
    }
  },
  c = e => {
    let t = a.intl.string(a.t["7v0T9P"]),
      n = a.intl.string(a.t.wR5wOo),
      r = a.intl.string(a.t.x5CoXR);
    if (null != e.bundledProducts) {
      var i, s, o;
      e.bundledProducts.length > 0 && (t = null == (i = e.bundledProducts[0]) ? true : i.name), e.bundledProducts.length > 1 && (n = null == (s = e.bundledProducts[1]) ? true : s.name), e.bundledProducts.length > 2 && (r = null == (o = e.bundledProducts[2]) ? true : o.name)
    }
    return {
      itemOneName: t,
      itemTwoName: n,
      itemThreeName: r
    }
  }