/** Chunk was on 67544 **/
/** chunk id: 488701, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk668826 = require("./668826.js"),
  Chunk359013 = require("./359013.js"),
  Chunk120421 = require("./120421.js"),
  Chunk562858 = require("./562858.js"),
  Chunk3072 = require("./3072.js"),
  Chunk477839 = require("./477839.js");
let Chunk797474 = require("./797474.js");

function g(e) {
  let {
    PurchasableComponent: t,
    item: n,
    itemId: o,
    currentPoints: a,
    onPurchase: i
  } = e, u = (0, l.Tw)(o), d = (0, s.useCallback)(() => {
    (0, c.xD)(o), i()
  }, [i, o]);
  return <t itemId={o} name={n.name} description={n.description} pointsDescription={n.pointsDescription} points={u} cost={n.cost} iconSrc={n.purchaseIconSrc} currentPoints={a} onPurchase={d} />
}

function b(e) {
  let {
    PurchasableComponent: t,
    upgrade: n,
    upgradeId: o,
    currentPoints: a,
    numAlreadyPurchased: i,
    onPurchase: u
  } = e, d = (0, l.p9)(o), f = (0, s.useCallback)(() => {
    (0, c.Z_)(o), u()
  }, [u, o]);
  return <t itemId={n.itemId} upgradeId={o} name={n.name} description={n.description} pointsDescription={n.pointsDescription} points={d} cost={n.cost({
      numAlreadyPurchased: i
    })} iconSrc={n.purchaseIconSrc} currentPoints={a} onPurchase={f} />
}

function y(e) {
  let {
    className: t,
    purchasePriority: n,
    itemsShown: o,
    PurchasableComponent: c
  } = e, l = (0, i.e7)([u.Z], () => u.Z.currentPoints), y = (0, i.e7)([u.Z], () => u.Z.purchasedItems), h = (0, i.e7)([u.Z], () => u.Z.lifetimePoints), x = (0, p.w2)(), v = (0, p.r7)(), O = (0, f.eR)(m), j = (0, s.useMemo)(() => a()(n).filter(e => {
    switch (e.type) {
      case d.h.ITEM:
        return null == y[e.id];
      case d.h.ITEM_UPGRADE:
        var t, n;
        let r = v[e.id],
          s = r.itemId,
          o = null != y[s],
          a = null != (n = null == (t = y[s]) ? true : t.upgrades[e.id]) ? n : 0;
        return o && (null == r.predicate || r.predicate({
          numAlreadyPurchased: a,
          lifetimePoints: h
        }))
    }
  }).take(null != o ? o : n.length).value(), [o, h, n, y, v]);
  return 0 === j.length ? null : <div className={t}>{j.map(e => {
      switch (e.type) {
        case d.h.ITEM:
          return (0, r.jsx)(g, {
            itemId: e.id,
            item: x[e.id],
            currentPoints: l,
            PurchasableComponent: c,
            onPurchase: O
          }, "item-".concat(e.id));
        case d.h.ITEM_UPGRADE:
          var t, n;
          let s = null != (n = null == (t = y[v[e.id].itemId]) ? true : t.upgrades[e.id]) ? n : 0;
          return (0, r.jsx)(b, {
            upgradeId: e.id,
            upgrade: v[e.id],
            currentPoints: l,
            numAlreadyPurchased: s,
            PurchasableComponent: c,
            onPurchase: O
          }, "item-upgrade-".concat(e.id))
      }
    })}</div>
}