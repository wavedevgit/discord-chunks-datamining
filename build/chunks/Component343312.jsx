/** Chunk was on 63639 **/
/** chunk id: 343312, original params: e,t,n (module,exports,require) **/
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

function y(e) {
  var t, n, u, x, y, O, h;
  let {
    guildId: P,
    initialGameServerInstance: k,
    initialGameServerGame: S,
    stepConfig: I = p.IX,
    children: w,
    onClose: C,
    analyticsLocation: N
  } = e;
  a.useEffect(() => {
    (0, g.ce)(P), (0, m.BN)(P, true), null == k && (0, g.mF)(P)
  }, [P, k]);
  let Z = (0, i.e7)([f.Z], () => f.Z.getStateForGuild(P)),
    _ = (0, i.e7)([c.Z], () => c.Z.getGuild(P)),
    {
      analyticsLocations: T
    } = (0, r.ZP)(N),
    [E, L] = a.useState(null != (n = I.initialStep) ? n : Object.keys(I.steps)[0]),
    D = (0, v.Td)(P, true),
    G = I.steps[E],
    [z, B] = a.useState(null == S ? true : S.id);
  a.useEffect(() => {
    var e, t, n;
    if (null != z || (null == k ? true : k.entitlementId) == null) return;
    let l = null == Z || null == (n = Z.entitlements) || null == (t = n[k.entitlementId]) || null == (e = t.sku) ? true : e.product_id;
    null != l && B(l)
  }, [null == Z ? true : Z.entitlements, null == k ? true : k.entitlementId, z]);
  let [F, J] = a.useState(true), X = a.useMemo(() => {
    var e;
    if (null != z) return Object.values(null != (e = null == Z ? true : Z.catalog) ? e : {}).find(e => e.id === z)
  }, [null == Z ? true : Z.catalog, z]), [q, A] = a.useState(k), [K, R] = a.useState(null != (u = null == S || null == (t = S.plans[0]) ? true : t.id) ? u : null == k ? true : k.planId), U = function(e, t, n, l) {
    var a, r, s, o, c, u, d, m;
    let v = (0, i.e7)([f.Z], () => {
        var t;
        return null == (t = f.Z.getStateForGuild(e)) ? true : t.entitlements
      }),
      g = null != (d = null == t || null == (a = t.plans.find(e => e.id === n)) ? true : a.cost) ? d : 0;
    return null == l ? g : g - (null != (m = null == v || null == (u = v[l.entitlementId]) || null == (c = u.sku) || null == (o = c.tenant_metadata) || null == (s = o.guild_monetization) || null == (r = s.game_server) ? true : r.boost_price) ? m : 0)
  }(P, X, K, q), Y = a.useCallback((e, t) => {
    var n;
    B(null == e ? true : e.id), R(null != t ? t : null == e || null == (n = e.plans[0]) ? true : n.id)
  }, []), M = a.useCallback(e => {
    var t, n, l;
    A(e);
    let a = null == Z || null == (l = Z.entitlements) || null == (n = l[e.entitlementId]) || null == (t = n.sku) ? true : t.product_id;
    null != a && B(a), R(e.planId), Q(e.name), ee(e.regionId)
  }, [null == Z ? true : Z.entitlements]), [H, W] = a.useState(), [$, Q] = a.useState(null != (x = null == k ? true : k.name) ? x : ""), [V, ee] = a.useState(null != (y = null == k ? true : k.regionId) ? y : ""), [et, en] = a.useState(false), el = a.useCallback(() => {
    if (J(true), null == _ || null == X || "" === $ || "" === V || null == K) return;
    let e = () => {
      en(true);
      let e = new Promise(e => {
        setTimeout(() => e(true), p.tq)
      });
      Promise.all([null != q ? (0, g.EY)(_.id, q.entitlementId, K, $) : (0, g.NE)(_.id, K, $, V), e]).then(() => {
        C(), (null == q ? true : q.planId) !== K && (0, b.Z)(_.id, X, null == q ? "created" : "updated")
      }).catch(e => {
        var t, n;
        J(null != (n = null == (t = e.body) ? true : t.message) ? n : e.message)
      }).finally(() => {
        en(false)
      })
    };
    D < U ? (0, s.u)({
      analyticsLocation: N,
      numberOfBoostsToAdd: U - D,
      analyticsLocations: T,
      guild: _,
      intent: o.P.PERK,
      onLoading: e => {
        en(e)
      },
      onSubscribeComplete: e
    }) : e()
  }, [T, _, D, K, N, X, $, V, C, U, q]), ea = a.useCallback(e => {
    switch (e.type) {
      case "close":
        C();
        break;
      case "go-to-step":
        L(e.step);
        break;
      case "save":
        el()
    }
  }, [C, el]), ei = a.useCallback(() => {
    null != G && ea(G.onBack)
  }, [G, ea]), er = a.useCallback(() => {
    null != G && ea(G.onNext)
  }, [G, ea]), es = a.useMemo(() => {
    var e;
    return new Set(Object.values(null != (e = null == Z ? true : Z.catalog) ? e : {}).map(e => e.provider).filter(d.lm))
  }, [null == Z ? true : Z.catalog]);
  return (0, l.jsx)(j.Provider, {
    value: {
      guildId: P,
      step: E,
      stepAction: G,
      stepLoading: et,
      onBack: ei,
      onNext: er,
      gameServerGames: null != (O = null == Z ? true : Z.catalog) ? O : {},
      instances: Object.values(null != (h = null == Z ? true : Z.instances) ? h : {}),
      currentGame: X,
      setCurrentGame: Y,
      gameServerInstance: q,
      setGameServerInstance: M,
      name: $,
      setName: Q,
      regionId: V,
      setRegionId: ee,
      planCost: U,
      planId: K,
      setPlanId: R,
      footerNode: H,
      setFooterNode: W,
      availableBoostCount: D,
      error: F,
      gameProvider: es.size > 0 ? Array.from(es)[0] : null
    },
    children: w
  })
}