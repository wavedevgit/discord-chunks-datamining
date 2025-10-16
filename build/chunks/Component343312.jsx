/** Chunk was on 63639 **/
/** chunk id: 343312, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  BT: () => y,
  JL: () => x
}), require("./388685.js"), require("./457542.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk879892 = require("./879892.jsx"),
  Chunk343649 = require("./343649.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk975104 = require("./975104.jsx"),
  Chunk823379 = require("./823379.js"),
  Chunk713081 = require("./713081.js"),
  Chunk279604 = require("./279604.jsx"),
  Chunk905551 = require("./905551.js"),
  Chunk60482 = require("./60482.js"),
  Chunk627045 = require("./627045.jsx"),
  Chunk619733 = require("./619733.js");
let [j, x] = (0, Chunk975104.Z)();

function h(e) {
  var n;
  return null == e || null == (n = e.plans[Math.floor(((null == e ? true : e.plans.length) - 1) / 2)]) ? true : n.id
}

function y(e) {
  var n, t, c, x, y, O;
  let {
    guildId: P,
    initialGameServerInstance: k,
    initialGameServerGame: I,
    stepConfig: S = p.IX,
    children: C,
    onClose: Z,
    analyticsLocation: N
  } = e;
  a.useEffect(() => {
    (0, g.ce)(P), (0, m.BN)(P, true), null == k && (0, g.mF)(P)
  }, [P, k]);
  let w = (0, i.e7)([f.Z], () => f.Z.getStateForGuild(P)),
    T = (0, i.e7)([u.Z], () => u.Z.getGuild(P)),
    {
      analyticsLocations: _
    } = (0, r.ZP)(N),
    [L, B] = a.useState(null != (n = S.initialStep) ? n : Object.keys(S.steps)[0]),
    E = (0, v.Td)(P, true),
    G = S.steps[L],
    [D, z] = a.useState(null == I ? true : I.id);
  a.useEffect(() => {
    var e, n, t;
    if (null != D || (null == k ? true : k.entitlementId) == null) return;
    let l = null == w || null == (t = w.entitlements) || null == (n = t[k.entitlementId]) || null == (e = n.sku) ? true : e.product_id;
    null != l && z(l)
  }, [null == w ? true : w.entitlements, null == k ? true : k.entitlementId, D]);
  let [F, J] = a.useState(true), H = a.useMemo(() => {
    var e;
    if (null != D) return Object.values(null != (e = null == w ? true : w.catalog) ? e : {}).find(e => e.id === D)
  }, [null == w ? true : w.catalog, D]), [A, K] = a.useState(k), [M, R] = a.useState(null != (t = h(I)) ? t : null == k ? true : k.planId), U = function(e, n, t, l) {
    var a, r, s, o, u, c, d, m;
    let v = (0, i.e7)([f.Z], () => {
        var n;
        return null == (n = f.Z.getStateForGuild(e)) ? true : n.entitlements
      }),
      g = null != (d = null == n || null == (a = n.plans.find(e => e.id === t)) ? true : a.cost) ? d : 0;
    return null == l ? g : g - (null != (m = null == v || null == (c = v[l.entitlementId]) || null == (u = c.sku) || null == (o = u.tenant_metadata) || null == (s = o.guild_monetization) || null == (r = s.game_server) ? true : r.boost_price) ? m : 0)
  }(P, H, M, A), X = a.useCallback(e => {
    var n, t, l, a, i, r;
    K(e);
    let s = null == w || null == (l = w.entitlements) || null == (t = l[null != (a = null == e ? true : e.entitlementId) ? a : ""]) || null == (n = t.sku) ? true : n.product_id;
    null != s && z(s), R(null == e ? true : e.planId), $(null != (i = null == e ? true : e.name) ? i : ""), ee(null != (r = null == e ? true : e.regionId) ? r : "")
  }, [null == w ? true : w.entitlements]), Y = a.useCallback((e, n) => {
    X(true), z(null == e ? true : e.id), R(null != n ? n : h(e))
  }, [X]), [q, Q] = a.useState(), [W, $] = a.useState(null != (c = null == k ? true : k.name) ? c : ""), [V, ee] = a.useState(null != (x = null == k ? true : k.regionId) ? x : ""), [en, et] = a.useState(false), el = a.useCallback(() => {
    if (J(true), null == T || null == H || "" === W || "" === V || null == M) return;
    let e = () => {
      et(true);
      let e = new Promise(e => {
        setTimeout(() => e(true), p.tq)
      });
      Promise.all([null != A ? (0, g.EY)(T.id, A.entitlementId, M, W) : (0, g.NE)(T.id, M, W, V), e]).then(() => {
        Z(), (null == A ? true : A.planId) !== M && (0, b.Z)(T.id, H, null == A ? "created" : "updated")
      }).catch(e => {
        var n, t;
        J(null != (t = null == (n = e.body) ? true : n.message) ? t : e.message)
      }).finally(() => {
        et(false)
      })
    };
    E < U ? (0, s.u)({
      analyticsLocation: N,
      numberOfBoostsToAdd: U - E,
      analyticsLocations: _,
      guild: T,
      intent: o.P.PERK,
      onLoading: e => {
        et(e)
      },
      onSubscribeComplete: e
    }) : e()
  }, [_, T, E, M, N, H, W, V, Z, U, A]), ea = a.useCallback(e => {
    switch (e.type) {
      case "close":
        Z();
        break;
      case "go-to-step":
        B(e.step);
        break;
      case "save":
        el()
    }
  }, [Z, el]), ei = a.useCallback(() => {
    null != G && ea(G.onBack)
  }, [G, ea]), er = a.useCallback(() => {
    null != G && ea(G.onNext)
  }, [G, ea]), es = a.useMemo(() => {
    var e;
    return new Set(Object.values(null != (e = null == w ? true : w.catalog) ? e : {}).map(e => e.provider).filter(d.lm))
  }, [null == w ? true : w.catalog]);
  return (0, l.jsx)(j.Provider, {
    value: {
      guildId: P,
      step: L,
      stepAction: G,
      stepLoading: en,
      onBack: ei,
      onNext: er,
      gameServerGames: null != (y = null == w ? true : w.catalog) ? y : {},
      instances: Object.values(null != (O = null == w ? true : w.instances) ? O : {}),
      currentGame: H,
      setCurrentGame: Y,
      gameServerInstance: A,
      setGameServerInstance: X,
      name: W,
      setName: $,
      regionId: V,
      setRegionId: ee,
      planCost: U,
      planId: M,
      setPlanId: R,
      footerNode: q,
      setFooterNode: Q,
      availableBoostCount: E,
      error: F,
      gameProvider: es.size > 0 ? Array.from(es)[0] : null
    },
    children: C
  })
}