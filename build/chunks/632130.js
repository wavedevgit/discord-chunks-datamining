/** Chunk was on 21738 **/
/** chunk id: 632130, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
}), require("./896048.js"), require("./321073.js");
var Chunk339048 = require("./339048.js"),
  Chunk830382 = require("./830382.js"),
  Chunk800342 = require("./800342.js"),
  Chunk10716 = require("./10716.js"),
  Chunk143582 = require("./143582.js"),
  Chunk147964 = require("./147964.js"),
  Chunk636401 = require("./636401.js"),
  Chunk994717 = require("./994717.js"),
  Chunk613057 = require("./613057.js"),
  Chunk652215 = require("./652215.js");
async function f(e, t) {
  let n = t.filter(e => e.type === p.Puh.SUBSCRIPTION_GROUP),
    r = await Promise.all(n.map(async t => await (0, s.vz)(e, t.id))),
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
            currency: p.Yri.USD
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
  (0, u.C)(t.transport);
  let n = t.application.id;
  if (null == n) throw new c.A({
    errorCode: p.Lw6.INVALID_COMMAND
  }, "No application.");
  if (o.A.inTestModeForApplication(n) || a.A.inDevModeForApplication(n)) {
    let e = await i.O1(n, false),
      t = await f(n, e);
    return [...e.filter(e => null != e.price), ...t]
  }
  let r = await l.JI(n);
  return [...r.filter(e => e.sku.type !== p.Puh.SUBSCRIPTION_GROUP).map(e => e.sku).filter(e => null != e.price), ...await f(n, r.map(e => e.sku))]
}

function A(e) {
  let {
    socket: t
  } = e;
  (0, u.C)(t.transport);
  let n = t.application.id;
  if (null == n) throw new c.A({
    errorCode: p.Lw6.INVALID_COMMAND
  }, "No application.");
  return r.LM(n)
}
let g = {
  [Chunk652215.e$_.GET_SKUS]: {
    [Chunk613057.sm.ANY]: [Chunk613057.VH, Chunk613057.hj],
    handler: h
  },
  [Chunk652215.e$_.GET_ENTITLEMENTS]: {
    [Chunk613057.sm.ANY]: [Chunk613057.VH, Chunk613057.hj],
    handler: A
  },
  [Chunk652215.e$_.GET_SKUS_EMBEDDED]: {
    [Chunk613057.sm.ANY]: [Chunk613057.VH, Chunk613057.hj],
    handler: async e => ({
      skus: await h(e)
    })
  },
  [Chunk652215.e$_.GET_ENTITLEMENTS_EMBEDDED]: {
    [Chunk613057.sm.ANY]: [Chunk613057.VH, Chunk613057.hj],
    handler: async e => ({
      entitlements: await A(e)
    })
  }
}