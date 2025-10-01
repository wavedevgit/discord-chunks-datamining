/** Chunk was on 952 **/
/** chunk id: 183369, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  KO: () => y,
  aj: () => j
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
let [p, j] = (0, Chunk975104.Z)();

function y(e) {
  var t, n, u, j, y, x, O;
  let {
    guildId: h,
    initialPortkeyInstance: P,
    initialPortkeyGame: k,
    stepConfig: S = g.T9,
    children: w,
    onClose: C,
    analyticsLocation: I
  } = e;
  i.useEffect(() => {
    (0, v.po)(h), (0, d.BN)(h, true), null == P && (0, v.EC)(h)
  }, [h, P]);
  let N = (0, a.e7)([f.Z], () => f.Z.getStateForGuild(h)),
    Z = (0, a.e7)([c.Z], () => c.Z.getGuild(h)),
    {
      analyticsLocations: _
    } = (0, r.ZP)(I),
    [E, T] = i.useState(null != (n = S.initialStep) ? n : Object.keys(S.steps)[0]),
    D = (0, m.Td)(h, true),
    z = S.steps[E],
    [G, F] = i.useState(null == k ? true : k.id);
  i.useEffect(() => {
    var e, t, n;
    if (null != G || (null == P ? true : P.entitlementId) == null) return;
    let l = null == N || null == (n = N.entitlements) || null == (t = n[P.entitlementId]) || null == (e = t.sku) ? true : e.product_id;
    null != l && F(l)
  }, [null == N ? true : N.entitlements, null == P ? true : P.entitlementId, G]);
  let [B, L] = i.useState(true), M = i.useMemo(() => {
    var e;
    if (null != G) return Object.values(null != (e = null == N ? true : N.catalog) ? e : {}).find(e => e.id === G)
  }, [null == N ? true : N.catalog, G]), [R, V] = i.useState(P), [A, q] = i.useState(null != (u = null == k || null == (t = k.plans[0]) ? true : t.id) ? u : null == P ? true : P.planId), K = function(e, t, n, l) {
    var i, r, s, o, c, u, d, m;
    let v = (0, a.e7)([f.Z], () => {
        var t;
        return null == (t = f.Z.getStateForGuild(e)) ? true : t.entitlements
      }),
      b = null != (d = null == t || null == (i = t.plans.find(e => e.id === n)) ? true : i.cost) ? d : 0;
    return null == l ? b : b - (null != (m = null == v || null == (u = v[l.entitlementId]) || null == (c = u.sku) || null == (o = c.tenant_metadata) || null == (s = o.guild_monetization) || null == (r = s.game_server) ? true : r.boost_price) ? m : 0)
  }(h, M, A, R), U = i.useCallback((e, t) => {
    var n;
    F(null == e ? true : e.id), q(null != t ? t : null == e || null == (n = e.plans[0]) ? true : n.id)
  }, []), X = i.useCallback(e => {
    var t, n, l;
    V(e);
    let i = null == N || null == (l = N.entitlements) || null == (n = l[e.entitlementId]) || null == (t = n.sku) ? true : t.product_id;
    null != i && F(i), q(e.planId), J(e.name), H(e.regionId)
  }, [null == N ? true : N.entitlements]), [Y, $] = i.useState(), [Q, J] = i.useState(null != (j = null == P ? true : P.name) ? j : ""), [W, H] = i.useState(null != (y = null == P ? true : P.regionId) ? y : ""), [ee, et] = i.useState(false), en = i.useCallback(() => {
    if (L(true), 0 === K || null == Z || null == M || null == A) return;
    let e = () => {
      et(true);
      let e = new Promise(e => {
        setTimeout(() => e(true), g.cF)
      });
      Promise.all([null != R ? (0, v.EY)(Z.id, R.entitlementId, A, Q) : (0, v.NE)(Z.id, A, Q, W), e]).then(() => {
        C(), (0, b.Z)(Z.id, M)
      }).catch(e => {
        var t, n;
        L(null != (n = null == (t = e.body) ? true : t.message) ? n : e.message)
      }).finally(() => {
        et(false)
      })
    };
    D < K ? (0, s.u)({
      analyticsLocation: I,
      numberOfBoostsToAdd: K - D,
      analyticsLocations: _,
      guild: Z,
      intent: o.P.PERK,
      onLoading: e => {
        et(e)
      },
      onSubscribeComplete: e
    }) : e()
  }, [_, Z, D, A, I, M, Q, W, C, K, R]), el = i.useCallback(e => {
    switch (e.type) {
      case "close":
        C();
        break;
      case "go-to-step":
        T(e.step);
        break;
      case "save":
        en()
    }
  }, [C, en]), ei = i.useCallback(() => {
    null != z && el(z.onBack)
  }, [z, el]), ea = i.useCallback(() => {
    null != z && el(z.onNext)
  }, [z, el]);
  return (0, l.jsx)(p.Provider, {
    value: {
      guildId: h,
      step: E,
      stepAction: z,
      stepLoading: ee,
      onBack: ei,
      onNext: ea,
      portkeyGames: null != (x = null == N ? true : N.catalog) ? x : {},
      instances: Object.values(null != (O = null == N ? true : N.instances) ? O : {}),
      currentGame: M,
      setCurrentGame: U,
      portkeyInstance: R,
      setPortkeyInstance: X,
      name: Q,
      setName: J,
      regionId: W,
      setRegionId: H,
      planCost: K,
      planId: A,
      setPlanId: q,
      footerNode: Y,
      setFooterNode: $,
      availableBoostCount: D,
      error: B
    },
    children: w
  })
}