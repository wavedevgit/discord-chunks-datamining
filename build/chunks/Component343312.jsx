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
  var t, n, c, x, y, O, h;
  let {
    guildId: P,
    initialGameServerInstance: S,
    initialGameServerGame: k,
    stepConfig: I = p.IX,
    children: w,
    onClose: C,
    analyticsLocation: N
  } = e;
  a.useEffect(() => {
    (0, g.ce)(P), (0, m.BN)(P, true), null == S && (0, g.mF)(P)
  }, [P, S]);
  let Z = (0, i.e7)([f.Z], () => f.Z.getStateForGuild(P)),
    _ = (0, i.e7)([u.Z], () => u.Z.getGuild(P)),
    {
      analyticsLocations: T
    } = (0, r.ZP)(N),
    [L, E] = a.useState(null != (n = I.initialStep) ? n : Object.keys(I.steps)[0]),
    B = (0, v.Td)(P, true),
    D = I.steps[L],
    [G, F] = a.useState(null == k ? true : k.id);
  a.useEffect(() => {
    var e, t, n;
    if (null != G || (null == S ? true : S.entitlementId) == null) return;
    let l = null == Z || null == (n = Z.entitlements) || null == (t = n[S.entitlementId]) || null == (e = t.sku) ? true : e.product_id;
    null != l && F(l)
  }, [null == Z ? true : Z.entitlements, null == S ? true : S.entitlementId, G]);
  let [J, z] = a.useState(true), H = a.useMemo(() => {
    var e;
    if (null != G) return Object.values(null != (e = null == Z ? true : Z.catalog) ? e : {}).find(e => e.id === G)
  }, [null == Z ? true : Z.catalog, G]), [A, K] = a.useState(S), [R, M] = a.useState(null != (c = null == k || null == (t = k.plans[0]) ? true : t.id) ? c : null == S ? true : S.planId), U = function(e, t, n, l) {
    var a, r, s, o, u, c, d, m;
    let v = (0, i.e7)([f.Z], () => {
        var t;
        return null == (t = f.Z.getStateForGuild(e)) ? true : t.entitlements
      }),
      g = null != (d = null == t || null == (a = t.plans.find(e => e.id === n)) ? true : a.cost) ? d : 0;
    return null == l ? g : g - (null != (m = null == v || null == (c = v[l.entitlementId]) || null == (u = c.sku) || null == (o = u.tenant_metadata) || null == (s = o.guild_monetization) || null == (r = s.game_server) ? true : r.boost_price) ? m : 0)
  }(P, H, R, A), X = a.useCallback(e => {
    var t, n, l, a, i, r;
    K(e);
    let s = null == Z || null == (l = Z.entitlements) || null == (n = l[null != (a = null == e ? true : e.entitlementId) ? a : ""]) || null == (t = n.sku) ? true : t.product_id;
    null != s && F(s), M(null == e ? true : e.planId), Q(null != (i = null == e ? true : e.name) ? i : ""), ee(null != (r = null == e ? true : e.regionId) ? r : "")
  }, [null == Z ? true : Z.entitlements]), Y = a.useCallback((e, t) => {
    var n;
    X(true), F(null == e ? true : e.id), M(null != t ? t : null == e || null == (n = e.plans[0]) ? true : n.id)
  }, [X]), [q, W] = a.useState(), [$, Q] = a.useState(null != (x = null == S ? true : S.name) ? x : ""), [V, ee] = a.useState(null != (y = null == S ? true : S.regionId) ? y : ""), [et, en] = a.useState(false), el = a.useCallback(() => {
    if (z(true), null == _ || null == H || "" === $ || "" === V || null == R) return;
    let e = () => {
      en(true);
      let e = new Promise(e => {
        setTimeout(() => e(true), p.tq)
      });
      Promise.all([null != A ? (0, g.EY)(_.id, A.entitlementId, R, $) : (0, g.NE)(_.id, R, $, V), e]).then(() => {
        C(), (null == A ? true : A.planId) !== R && (0, b.Z)(_.id, H, null == A ? "created" : "updated")
      }).catch(e => {
        var t, n;
        z(null != (n = null == (t = e.body) ? true : t.message) ? n : e.message)
      }).finally(() => {
        en(false)
      })
    };
    B < U ? (0, s.u)({
      analyticsLocation: N,
      numberOfBoostsToAdd: U - B,
      analyticsLocations: T,
      guild: _,
      intent: o.P.PERK,
      onLoading: e => {
        en(e)
      },
      onSubscribeComplete: e
    }) : e()
  }, [T, _, B, R, N, H, $, V, C, U, A]), ea = a.useCallback(e => {
    switch (e.type) {
      case "close":
        C();
        break;
      case "go-to-step":
        E(e.step);
        break;
      case "save":
        el()
    }
  }, [C, el]), ei = a.useCallback(() => {
    null != D && ea(D.onBack)
  }, [D, ea]), er = a.useCallback(() => {
    null != D && ea(D.onNext)
  }, [D, ea]), es = a.useMemo(() => {
    var e;
    return new Set(Object.values(null != (e = null == Z ? true : Z.catalog) ? e : {}).map(e => e.provider).filter(d.lm))
  }, [null == Z ? true : Z.catalog]);
  return (0, l.jsx)(j.Provider, {
    value: {
      guildId: P,
      step: L,
      stepAction: D,
      stepLoading: et,
      onBack: ei,
      onNext: er,
      gameServerGames: null != (O = null == Z ? true : Z.catalog) ? O : {},
      instances: Object.values(null != (h = null == Z ? true : Z.instances) ? h : {}),
      currentGame: H,
      setCurrentGame: Y,
      gameServerInstance: A,
      setGameServerInstance: X,
      name: $,
      setName: Q,
      regionId: V,
      setRegionId: ee,
      planCost: U,
      planId: R,
      setPlanId: M,
      footerNode: q,
      setFooterNode: W,
      availableBoostCount: B,
      error: J,
      gameProvider: es.size > 0 ? Array.from(es)[0] : null
    },
    children: w
  })
}