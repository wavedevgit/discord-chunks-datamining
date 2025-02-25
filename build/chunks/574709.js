/** Chunk was on web.js **/
"use strict";
var r, i = n(180650),
  o = n(979554),
  a = n(442837),
  s = n(570140),
  l = n(597688);

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let u = new Date(2023, 8, 25),
  d = new Date(2023, 9, 5),
  f = () => ({
    categoryItemViews: {
      [i.T.FANTASY]: {
        [o.Z.AVATAR_DECORATION]: u,
        [o.Z.PROFILE_EFFECT]: d
      },
      [i.T.ANIME]: {
        [o.Z.AVATAR_DECORATION]: u,
        [o.Z.PROFILE_EFFECT]: d
      },
      [i.T.BREAKFAST]: {
        [o.Z.AVATAR_DECORATION]: u,
        [o.Z.PROFILE_EFFECT]: d
      },
      [i.T.DISXCORE]: {
        [o.Z.AVATAR_DECORATION]: u
      }
    }
  }),
  _ = f(),
  p = e => {
    let {
      categories: t,
      itemTypes: n
    } = e, r = new Date;
    return t.reduce((e, t) => {
      let {
        skuId: i
      } = t, o = n.reduce((e, t) => {
        var n;
        return (null === (n = _.categoryItemViews[i]) || void 0 === n ? void 0 : n[t]) != null ? e : (null == _.categoryItemViews[i] && (_.categoryItemViews[i] = {}), _.categoryItemViews[i][t] = r, !0)
      }, !1);
      return e || o
    }, !1)
  };
class h extends(r = a.ZP.PersistedStore) {
  initialize(e) {
    null != e && (_ = e)
  }
  getState() {
    return _
  }
  isItemViewed(e) {
    var t, n;
    let r = null === (t = l.Z.getProduct(e.skuId)) || void 0 === t ? void 0 : t.categorySkuId;
    return null != r && (null === (n = _.categoryItemViews[r]) || void 0 === n ? void 0 : n[e.type]) != null
  }
  reset() {
    _ = f()
  }
}
c(h, "displayName", "CollectiblesPersistedStore"), c(h, "persistKey", "CollectiblesPersistedStoreV2"), new h(s.Z, {
  COLLECTIBLES_CATEGORY_ITEMS_VIEWED: p
})