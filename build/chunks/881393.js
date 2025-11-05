/** Chunk was on 1272 **/
/** chunk id: 881393, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js"), require("./539854.js");
var Chunk496929 = require("./496929.js"),
  Chunk16084 = require("./16084.js"),
  Chunk558381 = require("./558381.js"),
  Chunk115130 = require("./115130.js"),
  Chunk106976 = require("./106976.js"),
  Chunk695103 = require("./695103.js"),
  Chunk996106 = require("./996106.js"),
  Chunk334288 = require("./334288.js"),
  Chunk186901 = require("./186901.js"),
  Chunk981631 = require("./981631.js");
async function f(e, t) {
  let n = t.filter(e => e.type === p.epS.SUBSCRIPTION_GROUP),
    r = await Promise.all(n.map(async t => await (0, s.rx)(e, t.id))),
    i = [];
  return r.forEach(e => {
    if (null == e) return null;
    let n = e.subscription_listings;
    if (null == n) return null;
    let r = [];
    n.forEach(e => {
      e.subscription_plans.forEach(n => {
        var i;
        let l = null == n ? true : n.price,
          a = t.find(e => e.id === n.sku_id);
        if (null == a) return;
        let s = {
          id: n.sku_id,
          name: a.name,
          type: a.type,
          price: {
            amount: l,
            currency: p.pKx.USD
          },
          application_id: e.application_id,
          flags: e.sku_flags,
          release_date: null != (i = a.release_date) ? i : null
        };
        r.push(s)
      })
    }), r.filter(e => (null == e ? true : e.price) != null).forEach(e => i.push(e))
  }), i
}
async function h(e) {
  let {
    socket: t
  } = e;
  (0, u.f)(t.transport);
  let n = t.application.id;
  if (null == n) throw new c.Z({
    errorCode: p.lTL.INVALID_COMMAND
  }, "No application.");
  if (o.Z.inTestModeForApplication(n) || a.Z.inDevModeForApplication(n)) {
    let e = await i.uE(n, false),
      t = await f(n, e);
    return [...e.filter(e => null != e.price), ...t]
  }
  let r = await l.oJ(n);
  return [...r.filter(e => e.sku.type !== p.epS.SUBSCRIPTION_GROUP).map(e => e.sku).filter(e => null != e.price), ...await f(n, r.map(e => e.sku))]
}

function g(e) {
  let {
    socket: t
  } = e;
  (0, u.f)(t.transport);
  let n = t.application.id;
  if (null == n) throw new c.Z({
    errorCode: p.lTL.INVALID_COMMAND
  }, "No application.");
  return r.yD(n)
}
let m = {
  [Chunk981631.Etm.GET_SKUS]: {
    [Chunk186901.Gp.ANY]: [Chunk186901.wE, Chunk186901.lH],
    handler: h
  },
  [Chunk981631.Etm.GET_ENTITLEMENTS]: {
    [Chunk186901.Gp.ANY]: [Chunk186901.wE, Chunk186901.lH],
    handler: g
  },
  [Chunk981631.Etm.GET_SKUS_EMBEDDED]: {
    [Chunk186901.Gp.ANY]: [Chunk186901.wE, Chunk186901.lH],
    handler: async e => ({
      skus: await h(e)
    })
  },
  [Chunk981631.Etm.GET_ENTITLEMENTS_EMBEDDED]: {
    [Chunk186901.Gp.ANY]: [Chunk186901.wE, Chunk186901.lH],
    handler: async e => ({
      entitlements: await g(e)
    })
  }
}