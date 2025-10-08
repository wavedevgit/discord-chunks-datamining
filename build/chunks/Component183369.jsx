/** Chunk was on 952 **/
/** chunk id: 183369, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  KO: () => y,
  aj: () => x
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
  Chunk744993 = require("./744993.js"),
  Chunk693587 = require("./693587.js"),
  Chunk741252 = require("./741252.jsx"),
  Chunk473682 = require("./473682.js");
let [j, x] = (0, Chunk975104.Z)();

function y(e) {
  var t, n, u, x, y, O, h;
  let {
    guildId: P,
    initialPortkeyInstance: k,
    initialPortkeyGame: S,
    stepConfig: w = p.T9,
    children: I,
    onClose: C,
    analyticsLocation: N
  } = e;
  a.useEffect(() => {
    (0, f.po)(P), (0, m.BN)(P, true), null == k && (0, f.EC)(P)
  }, [P, k]);
  let Z = (0, i.e7)([g.Z], () => g.Z.getStateForGuild(P)),
    _ = (0, i.e7)([c.Z], () => c.Z.getGuild(P)),
    {
      analyticsLocations: T
    } = (0, r.ZP)(N),
    [E, z] = a.useState(null != (n = w.initialStep) ? n : Object.keys(w.steps)[0]),
    D = (0, v.Td)(P, true),
    G = w.steps[E],
    [B, F] = a.useState(null == S ? true : S.id);
  a.useEffect(() => {
    var e, t, n;
    if (null != B || (null == k ? true : k.entitlementId) == null) return;
    let l = null == Z || null == (n = Z.entitlements) || null == (t = n[k.entitlementId]) || null == (e = t.sku) ? true : e.product_id;
    null != l && F(l)
  }, [null == Z ? true : Z.entitlements, null == k ? true : k.entitlementId, B]);
  let [L, M] = a.useState(true), R = a.useMemo(() => {
    var e;
    if (null != B) return Object.values(null != (e = null == Z ? true : Z.catalog) ? e : {}).find(e => e.id === B)
  }, [null == Z ? true : Z.catalog, B]), [A, U] = a.useState(k), [K, V] = a.useState(null != (u = null == S || null == (t = S.plans[0]) ? true : t.id) ? u : null == k ? true : k.planId), q = function(e, t, n, l) {
    var a, r, s, o, c, u, d, m;
    let v = (0, i.e7)([g.Z], () => {
        var t;
        return null == (t = g.Z.getStateForGuild(e)) ? true : t.entitlements
      }),
      f = null != (d = null == t || null == (a = t.plans.find(e => e.id === n)) ? true : a.cost) ? d : 0;
    return null == l ? f : f - (null != (m = null == v || null == (u = v[l.entitlementId]) || null == (c = u.sku) || null == (o = c.tenant_metadata) || null == (s = o.guild_monetization) || null == (r = s.game_server) ? true : r.boost_price) ? m : 0)
  }(P, R, K, A), X = a.useCallback((e, t) => {
    var n;
    F(null == e ? true : e.id), V(null != t ? t : null == e || null == (n = e.plans[0]) ? true : n.id)
  }, []), Y = a.useCallback(e => {
    var t, n, l;
    U(e);
    let a = null == Z || null == (l = Z.entitlements) || null == (n = l[e.entitlementId]) || null == (t = n.sku) ? true : t.product_id;
    null != a && F(a), V(e.planId), W(e.name), ee(e.regionId)
  }, [null == Z ? true : Z.entitlements]), [H, J] = a.useState(), [Q, W] = a.useState(null != (x = null == k ? true : k.name) ? x : ""), [$, ee] = a.useState(null != (y = null == k ? true : k.regionId) ? y : ""), [et, en] = a.useState(false), el = a.useCallback(() => {
    if (M(true), null == _ || null == R || "" === Q || "" === $ || null == K) return;
    let e = () => {
      en(true);
      let e = new Promise(e => {
        setTimeout(() => e(true), p.cF)
      });
      Promise.all([null != A ? (0, f.EY)(_.id, A.entitlementId, K, Q) : (0, f.NE)(_.id, K, Q, $), e]).then(() => {
        C(), (null == A ? true : A.planId) !== K && (0, b.Z)(_.id, R, null == A ? "created" : "updated")
      }).catch(e => {
        var t, n;
        M(null != (n = null == (t = e.body) ? true : t.message) ? n : e.message)
      }).finally(() => {
        en(false)
      })
    };
    D < q ? (0, s.u)({
      analyticsLocation: N,
      numberOfBoostsToAdd: q - D,
      analyticsLocations: T,
      guild: _,
      intent: o.P.PERK,
      onLoading: e => {
        en(e)
      },
      onSubscribeComplete: e
    }) : e()
  }, [T, _, D, K, N, R, Q, $, C, q, A]), ea = a.useCallback(e => {
    switch (e.type) {
      case "close":
        C();
        break;
      case "go-to-step":
        z(e.step);
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
      portkeyGames: null != (O = null == Z ? true : Z.catalog) ? O : {},
      instances: Object.values(null != (h = null == Z ? true : Z.instances) ? h : {}),
      currentGame: R,
      setCurrentGame: X,
      portkeyInstance: A,
      setPortkeyInstance: Y,
      name: Q,
      setName: W,
      regionId: $,
      setRegionId: ee,
      planCost: q,
      planId: K,
      setPlanId: V,
      footerNode: H,
      setFooterNode: J,
      availableBoostCount: D,
      error: L,
      gameProvider: es.size > 0 ? Array.from(es)[0] : null
    },
    children: I
  })
}