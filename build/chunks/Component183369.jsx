/** Chunk was on 952 **/
/** chunk id: 183369, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  KO: () => x,
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

function x(e) {
  var t, n, u, j, x, y, O;
  let {
    guildId: h,
    initialPortkeyInstance: P,
    initialPortkeyGame: k,
    stepConfig: S = b.T9,
    children: w,
    onClose: C,
    analyticsLocation: I
  } = e;
  i.useEffect(() => {
    (0, v.po)(h), (0, d.BN)(h, true), null == P && (0, v.EC)(h)
  }, [h, P]);
  let Z = (0, a.e7)([f.Z], () => f.Z.getStateForGuild(h)),
    N = (0, a.e7)([c.Z], () => c.Z.getGuild(h)),
    {
      analyticsLocations: T
    } = (0, r.ZP)(I),
    [_, E] = i.useState(null != (n = S.initialStep) ? n : Object.keys(S.steps)[0]),
    D = (0, m.Td)(h, true),
    z = S.steps[_],
    [G, B] = i.useState(null == k ? true : k.id);
  i.useEffect(() => {
    var e, t, n;
    if (null != G || (null == P ? true : P.entitlementId) == null) return;
    let l = null == Z || null == (n = Z.entitlements) || null == (t = n[P.entitlementId]) || null == (e = t.sku) ? true : e.product_id;
    null != l && B(l)
  }, [null == Z ? true : Z.entitlements, null == P ? true : P.entitlementId, G]);
  let [F, L] = i.useState(true), M = i.useMemo(() => {
    var e;
    if (null != G) return Object.values(null != (e = null == Z ? true : Z.catalog) ? e : {}).find(e => e.id === G)
  }, [null == Z ? true : Z.catalog, G]), [R, K] = i.useState(P), [A, V] = i.useState(null != (u = null == k || null == (t = k.plans[0]) ? true : t.id) ? u : null == P ? true : P.planId), Y = function(e, t, n, l) {
    var i, r, s, o, c, u, d, m;
    let v = (0, a.e7)([f.Z], () => {
        var t;
        return null == (t = f.Z.getStateForGuild(e)) ? true : t.entitlements
      }),
      g = null != (d = null == t || null == (i = t.plans.find(e => e.id === n)) ? true : i.cost) ? d : 0;
    return null == l ? g : g - (null != (m = null == v || null == (u = v[l.entitlementId]) || null == (c = u.sku) || null == (o = c.tenant_metadata) || null == (s = o.guild_monetization) || null == (r = s.game_server) ? true : r.boost_price) ? m : 0)
  }(h, M, A, R), q = i.useCallback((e, t) => {
    var n;
    B(null == e ? true : e.id), V(null != t ? t : null == e || null == (n = e.plans[0]) ? true : n.id)
  }, []), U = i.useCallback(e => {
    var t, n, l;
    K(e);
    let i = null == Z || null == (l = Z.entitlements) || null == (n = l[e.entitlementId]) || null == (t = n.sku) ? true : t.product_id;
    null != i && B(i), V(e.planId), J(e.name), W(e.regionId)
  }, [null == Z ? true : Z.entitlements]), [X, H] = i.useState(), [$, J] = i.useState(null != (j = null == P ? true : P.name) ? j : ""), [Q, W] = i.useState(null != (x = null == P ? true : P.regionId) ? x : ""), [ee, et] = i.useState(false), en = i.useCallback(() => {
    if (L(true), 0 === Y || null == N || null == M || null == A) return;
    let e = () => {
      et(true);
      let e = new Promise(e => {
        setTimeout(() => e(true), b.cF)
      });
      Promise.all([null != R ? (0, v.EY)(N.id, R.entitlementId, A, $) : (0, v.NE)(N.id, A, $, Q), e]).then(() => {
        C(), (0, g.Z)(N.id, M)
      }).catch(e => {
        var t, n;
        L(null != (n = null == (t = e.body) ? true : t.message) ? n : e.message)
      }).finally(() => {
        et(false)
      })
    };
    D < Y ? (0, s.u)({
      analyticsLocation: I,
      numberOfBoostsToAdd: Y - D,
      analyticsLocations: T,
      guild: N,
      intent: o.P.PERK,
      onLoading: e => {
        et(e)
      },
      onSubscribeComplete: e
    }) : e()
  }, [T, N, D, A, I, M, $, Q, C, Y, R]), el = i.useCallback(e => {
    switch (e.type) {
      case "close":
        C();
        break;
      case "go-to-step":
        E(e.step);
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
      step: _,
      stepAction: z,
      stepLoading: ee,
      onBack: ei,
      onNext: ea,
      portkeyGames: null != (y = null == Z ? true : Z.catalog) ? y : {},
      instances: Object.values(null != (O = null == Z ? true : Z.instances) ? O : {}),
      currentGame: M,
      setCurrentGame: q,
      portkeyInstance: R,
      setPortkeyInstance: U,
      name: $,
      setName: J,
      regionId: Q,
      setRegionId: W,
      planCost: Y,
      planId: A,
      setPlanId: V,
      footerNode: X,
      setFooterNode: H,
      availableBoostCount: D,
      error: F,
      gameProvider: b.mg.SHOCKBYTE
    },
    children: w
  })
}