/** Chunk was on 60728 **/
/** chunk id: 183369, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  KO: () => x,
  aj: () => p
}), require("./388685.js"), require("./457542.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk879892 = require("./879892.jsx"),
  Chunk343649 = require("./343649.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk975104 = require("./975104.jsx"),
  Chunk713081 = require("./713081.js"),
  Chunk279604 = require("./279604.jsx"),
  Chunk744993 = require("./744993.js"),
  Chunk693587 = require("./693587.js"),
  Chunk741252 = require("./741252.jsx"),
  Chunk473682 = require("./473682.js");
let [j, p] = (0, Chunk975104.Z)();

function x(e) {
  var t, n, u, p, x, y, h;
  let {
    guildId: O,
    initialPortkeyInstance: P,
    initialPortkeyGame: k,
    stepConfig: C = f.T9,
    children: S,
    onClose: w,
    analyticsLocation: N
  } = e;
  i.useEffect(() => {
    (0, v.po)(O), (0, v.EC)(O), (0, d.BN)(O, true)
  }, [O]);
  let I = (0, a.e7)([g.Z], () => g.Z.getStateForGuild(O)),
    Z = (0, a.e7)([c.Z], () => c.Z.getGuild(O)),
    {
      analyticsLocations: T
    } = (0, r.ZP)(N),
    [E, _] = i.useState(null != (n = C.initialStep) ? n : Object.keys(C.steps)[0]),
    D = (0, m.Td)(O, true),
    z = C.steps[E],
    [B, F] = i.useState(null == k ? true : k.id);
  i.useEffect(() => {
    var e, t, n;
    if (null != B || (null == P ? true : P.entitlementId) == null) return;
    let l = null == I || null == (n = I.entitlements) || null == (t = n[P.entitlementId]) || null == (e = t.sku) ? true : e.product_id;
    null != l && F(l)
  }, [null == I ? true : I.entitlements, null == P ? true : P.entitlementId, B]);
  let [G, L] = i.useState(true), M = i.useMemo(() => {
    var e;
    if (null != B) return Object.values(null != (e = null == I ? true : I.catalog) ? e : {}).find(e => e.id === B)
  }, [null == I ? true : I.catalog, B]), [R, A] = i.useState(P), [K, V] = i.useState(null != (u = null == k || null == (t = k.plans[0]) ? true : t.id) ? u : null == P ? true : P.planId), q = function(e, t, n, l) {
    var i, r, s, o, c, u, d, m;
    let v = (0, a.e7)([g.Z], () => {
        var t;
        return null == (t = g.Z.getStateForGuild(e)) ? true : t.entitlements
      }),
      b = null != (d = null == t || null == (i = t.plans.find(e => e.id === n)) ? true : i.cost) ? d : 0;
    return null == l ? b : b - (null != (m = null == v || null == (u = v[l.entitlementId]) || null == (c = u.sku) || null == (o = c.tenant_metadata) || null == (s = o.guild_monetization) || null == (r = s.game_server) ? true : r.boost_price) ? m : 0)
  }(O, M, K, R), X = i.useCallback((e, t) => {
    var n;
    F(null == e ? true : e.id), V(null != t ? t : null == e || null == (n = e.plans[0]) ? true : n.id)
  }, []), U = i.useCallback(e => {
    var t, n, l;
    A(e);
    let i = null == I || null == (l = I.entitlements) || null == (n = l[e.entitlementId]) || null == (t = n.sku) ? true : t.product_id;
    null != i && F(i), V(e.planId), H(e.name), J(e.regionId)
  }, [null == I ? true : I.entitlements]), [W, Y] = i.useState(), [$, H] = i.useState(null != (p = null == P ? true : P.name) ? p : ""), [Q, J] = i.useState(null != (x = null == P ? true : P.regionId) ? x : ""), [ee, et] = i.useState(false), en = i.useCallback(() => {
    if (L(true), 0 === q || null == Z || null == M || null == K) return;
    let e = () => {
      et(true);
      let e = new Promise(e => {
        setTimeout(() => e(true), f.cF)
      });
      Promise.all([(0, v.NE)(Z.id, K, $, Q), e]).then(() => {
        w(), (0, b.Z)(Z.id, M)
      }).catch(e => {
        var t, n;
        L(null != (n = null == (t = e.body) ? true : t.message) ? n : e.message)
      }).finally(() => {
        et(false)
      })
    };
    D < q ? (0, s.u)({
      analyticsLocation: N,
      numberOfBoostsToAdd: q - D,
      analyticsLocations: T,
      guild: Z,
      intent: o.P.PERK,
      onLoading: e => {
        et(e)
      },
      onSubscribeComplete: e
    }) : e()
  }, [T, Z, D, K, N, M, $, Q, w, q]), el = i.useCallback(e => {
    switch (e.type) {
      case "close":
        w();
        break;
      case "go-to-step":
        _(e.step);
        break;
      case "save":
        en()
    }
  }, [w, en]), ei = i.useCallback(() => {
    null != z && el(z.onBack)
  }, [z, el]), ea = i.useCallback(() => {
    null != z && el(z.onNext)
  }, [z, el]);
  return (0, l.jsx)(j.Provider, {
    value: {
      guildId: O,
      step: E,
      stepAction: z,
      stepLoading: ee,
      onBack: ei,
      onNext: ea,
      portkeyGames: null != (y = null == I ? true : I.catalog) ? y : {},
      instances: Object.values(null != (h = null == I ? true : I.instances) ? h : {}),
      currentGame: M,
      setCurrentGame: X,
      portkeyInstance: R,
      setPortkeyInstance: U,
      name: $,
      setName: H,
      regionId: Q,
      setRegionId: J,
      planCost: q,
      planId: K,
      setPlanId: V,
      footerNode: W,
      setFooterNode: Y,
      availableBoostCount: D,
      error: G
    },
    children: S
  })
}