/** Chunk was on 63639 **/
/** chunk id: 343312, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  BT: () => h,
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
  var n, t, c, x, h, y, O;
  let {
    guildId: P,
    initialGameServerInstance: k,
    initialGameServerGame: I,
    stepConfig: S = p.IX,
    children: C,
    onClose: N,
    analyticsLocation: Z
  } = e;
  a.useEffect(() => {
    (0, g.ce)(P), (0, m.BN)(P, true), null == k && (0, g.mF)(P)
  }, [P, k]);
  let w = (0, i.e7)([f.Z], () => f.Z.getStateForGuild(P)),
    T = (0, i.e7)([u.Z], () => u.Z.getGuild(P)),
    {
      analyticsLocations: _
    } = (0, r.ZP)(Z),
    [L, B] = a.useState(null != (t = S.initialStep) ? t : Object.keys(S.steps)[0]),
    E = (0, v.Td)(P, true),
    D = S.steps[L],
    [G, z] = a.useState(null == I ? true : I.id);
  a.useEffect(() => {
    var e, n, t;
    if (null != G || (null == k ? true : k.entitlementId) == null) return;
    let l = null == w || null == (t = w.entitlements) || null == (n = t[k.entitlementId]) || null == (e = n.sku) ? true : e.product_id;
    null != l && z(l)
  }, [null == w ? true : w.entitlements, null == k ? true : k.entitlementId, G]);
  let [F, J] = a.useState(true), U = a.useMemo(() => {
    var e;
    if (null != G) return Object.values(null != (e = null == w ? true : w.catalog) ? e : {}).find(e => e.id === G)
  }, [null == w ? true : w.catalog, G]), [H, K] = a.useState(k), [A, R] = a.useState(null != (c = null == I || null == (n = I.plans[0]) ? true : n.id) ? c : null == k ? true : k.planId), X = function(e, n, t, l) {
    var a, r, s, o, u, c, d, m;
    let v = (0, i.e7)([f.Z], () => {
        var n;
        return null == (n = f.Z.getStateForGuild(e)) ? true : n.entitlements
      }),
      g = null != (d = null == n || null == (a = n.plans.find(e => e.id === t)) ? true : a.cost) ? d : 0;
    return null == l ? g : g - (null != (m = null == v || null == (c = v[l.entitlementId]) || null == (u = c.sku) || null == (o = u.tenant_metadata) || null == (s = o.guild_monetization) || null == (r = s.game_server) ? true : r.boost_price) ? m : 0)
  }(P, U, A, H), Y = a.useCallback(e => {
    var n, t, l, a, i, r;
    K(e);
    let s = null == w || null == (l = w.entitlements) || null == (t = l[null != (a = null == e ? true : e.entitlementId) ? a : ""]) || null == (n = t.sku) ? true : n.product_id;
    null != s && z(s), R(null == e ? true : e.planId), $(null != (i = null == e ? true : e.name) ? i : ""), ee(null != (r = null == e ? true : e.regionId) ? r : "")
  }, [null == w ? true : w.entitlements]), M = a.useCallback((e, n) => {
    var t;
    Y(true), z(null == e ? true : e.id), R(null != n ? n : null == e || null == (t = e.plans[0]) ? true : t.id)
  }, [Y]), [q, W] = a.useState(), [Q, $] = a.useState(null != (x = null == k ? true : k.name) ? x : ""), [V, ee] = a.useState(null != (h = null == k ? true : k.regionId) ? h : ""), [en, et] = a.useState(false), el = a.useCallback(() => {
    if (J(true), null == T || null == U || "" === Q || "" === V || null == A) return;
    let e = () => {
      et(true);
      let e = new Promise(e => {
        setTimeout(() => e(true), p.tq)
      });
      Promise.all([null != H ? (0, g.EY)(T.id, H.entitlementId, A, Q) : (0, g.NE)(T.id, A, Q, V), e]).then(() => {
        N(), (null == H ? true : H.planId) !== A && (0, b.Z)(T.id, U, null == H ? "created" : "updated")
      }).catch(e => {
        var n, t;
        J(null != (t = null == (n = e.body) ? true : n.message) ? t : e.message)
      }).finally(() => {
        et(false)
      })
    };
    E < X ? (0, s.u)({
      analyticsLocation: Z,
      numberOfBoostsToAdd: X - E,
      analyticsLocations: _,
      guild: T,
      intent: o.P.PERK,
      onLoading: e => {
        et(e)
      },
      onSubscribeComplete: e
    }) : e()
  }, [_, T, E, A, Z, U, Q, V, N, X, H]), ea = a.useCallback(e => {
    switch (e.type) {
      case "close":
        N();
        break;
      case "go-to-step":
        B(e.step);
        break;
      case "save":
        el()
    }
  }, [N, el]), ei = a.useCallback(() => {
    null != D && ea(D.onBack)
  }, [D, ea]), er = a.useCallback(() => {
    null != D && ea(D.onNext)
  }, [D, ea]), es = a.useMemo(() => {
    var e;
    return new Set(Object.values(null != (e = null == w ? true : w.catalog) ? e : {}).map(e => e.provider).filter(d.lm))
  }, [null == w ? true : w.catalog]);
  return (0, l.jsx)(j.Provider, {
    value: {
      guildId: P,
      step: L,
      stepAction: D,
      stepLoading: en,
      onBack: ei,
      onNext: er,
      gameServerGames: null != (y = null == w ? true : w.catalog) ? y : {},
      instances: Object.values(null != (O = null == w ? true : w.instances) ? O : {}),
      currentGame: U,
      setCurrentGame: M,
      gameServerInstance: H,
      setGameServerInstance: Y,
      name: Q,
      setName: $,
      regionId: V,
      setRegionId: ee,
      planCost: X,
      planId: A,
      setPlanId: R,
      footerNode: q,
      setFooterNode: W,
      availableBoostCount: E,
      error: F,
      gameProvider: es.size > 0 ? Array.from(es)[0] : null
    },
    children: C
  })
}