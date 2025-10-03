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
    children: I,
    onClose: w,
    analyticsLocation: C
  } = e;
  a.useEffect(() => {
    (0, v.po)(h), (0, d.BN)(h, true), null == P && (0, v.EC)(h)
  }, [h, P]);
  let N = (0, i.e7)([g.Z], () => g.Z.getStateForGuild(h)),
    Z = (0, i.e7)([c.Z], () => c.Z.getGuild(h)),
    {
      analyticsLocations: T
    } = (0, r.ZP)(C),
    [_, E] = a.useState(null != (n = S.initialStep) ? n : Object.keys(S.steps)[0]),
    D = (0, m.Td)(h, true),
    z = S.steps[_],
    [B, G] = a.useState(null == k ? true : k.id);
  a.useEffect(() => {
    var e, t, n;
    if (null != B || (null == P ? true : P.entitlementId) == null) return;
    let l = null == N || null == (n = N.entitlements) || null == (t = n[P.entitlementId]) || null == (e = t.sku) ? true : e.product_id;
    null != l && G(l)
  }, [null == N ? true : N.entitlements, null == P ? true : P.entitlementId, B]);
  let [F, L] = a.useState(true), M = a.useMemo(() => {
    var e;
    if (null != B) return Object.values(null != (e = null == N ? true : N.catalog) ? e : {}).find(e => e.id === B)
  }, [null == N ? true : N.catalog, B]), [R, K] = a.useState(P), [A, V] = a.useState(null != (u = null == k || null == (t = k.plans[0]) ? true : t.id) ? u : null == P ? true : P.planId), Y = function(e, t, n, l) {
    var a, r, s, o, c, u, d, m;
    let v = (0, i.e7)([g.Z], () => {
        var t;
        return null == (t = g.Z.getStateForGuild(e)) ? true : t.entitlements
      }),
      f = null != (d = null == t || null == (a = t.plans.find(e => e.id === n)) ? true : a.cost) ? d : 0;
    return null == l ? f : f - (null != (m = null == v || null == (u = v[l.entitlementId]) || null == (c = u.sku) || null == (o = c.tenant_metadata) || null == (s = o.guild_monetization) || null == (r = s.game_server) ? true : r.boost_price) ? m : 0)
  }(h, M, A, R), q = a.useCallback((e, t) => {
    var n;
    G(null == e ? true : e.id), V(null != t ? t : null == e || null == (n = e.plans[0]) ? true : n.id)
  }, []), U = a.useCallback(e => {
    var t, n, l;
    K(e);
    let a = null == N || null == (l = N.entitlements) || null == (n = l[e.entitlementId]) || null == (t = n.sku) ? true : t.product_id;
    null != a && G(a), V(e.planId), J(e.name), W(e.regionId)
  }, [null == N ? true : N.entitlements]), [X, H] = a.useState(), [$, J] = a.useState(null != (j = null == P ? true : P.name) ? j : ""), [Q, W] = a.useState(null != (x = null == P ? true : P.regionId) ? x : ""), [ee, et] = a.useState(false), en = a.useCallback(() => {
    if (L(true), null == Z || null == M || "" === $ || "" === Q || null == A) return;
    let e = () => {
      et(true);
      let e = new Promise(e => {
        setTimeout(() => e(true), b.cF)
      });
      Promise.all([null != R ? (0, v.EY)(Z.id, R.entitlementId, A, $) : (0, v.NE)(Z.id, A, $, Q), e]).then(() => {
        w(), (null == R ? true : R.planId) !== A && (0, f.Z)(Z.id, M, null == R ? "created" : "updated")
      }).catch(e => {
        var t, n;
        L(null != (n = null == (t = e.body) ? true : t.message) ? n : e.message)
      }).finally(() => {
        et(false)
      })
    };
    D < Y ? (0, s.u)({
      analyticsLocation: C,
      numberOfBoostsToAdd: Y - D,
      analyticsLocations: T,
      guild: Z,
      intent: o.P.PERK,
      onLoading: e => {
        et(e)
      },
      onSubscribeComplete: e
    }) : e()
  }, [T, Z, D, A, C, M, $, Q, w, Y, R]), el = a.useCallback(e => {
    switch (e.type) {
      case "close":
        w();
        break;
      case "go-to-step":
        E(e.step);
        break;
      case "save":
        en()
    }
  }, [w, en]), ea = a.useCallback(() => {
    null != z && el(z.onBack)
  }, [z, el]), ei = a.useCallback(() => {
    null != z && el(z.onNext)
  }, [z, el]);
  return (0, l.jsx)(p.Provider, {
    value: {
      guildId: h,
      step: _,
      stepAction: z,
      stepLoading: ee,
      onBack: ea,
      onNext: ei,
      portkeyGames: null != (y = null == N ? true : N.catalog) ? y : {},
      instances: Object.values(null != (O = null == N ? true : N.instances) ? O : {}),
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
    children: I
  })
}