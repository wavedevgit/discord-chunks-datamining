/** Chunk was on 60728 **/
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
  var t, n, c, j, x, y, h;
  let {
    guildId: O,
    initialPortkeyInstance: P,
    initialPortkeyGame: k,
    stepConfig: S = b.T9,
    children: w,
    onClose: C,
    analyticsLocation: I
  } = e;
  i.useEffect(() => {
    (0, v.po)(O), (0, v.EC)(O), (0, d.BN)(O, true)
  }, [O]);
  let Z = (0, a.e7)([g.Z], () => g.Z.getStateForGuild(O)),
    N = (0, a.e7)([u.Z], () => u.Z.getGuild(O)),
    {
      analyticsLocations: _
    } = (0, r.ZP)(I),
    [T, E] = i.useState(null != (n = S.initialStep) ? n : Object.keys(S.steps)[0]),
    D = (0, m.Td)(O, true),
    z = S.steps[T],
    [G, F] = i.useState(null == k ? true : k.id);
  i.useEffect(() => {
    var e, t, n;
    if (null != G || (null == P ? true : P.entitlementId) == null) return;
    let l = null == Z || null == (n = Z.entitlements) || null == (t = n[P.entitlementId]) || null == (e = t.sku) ? true : e.product_id;
    null != l && F(l)
  }, [null == Z ? true : Z.entitlements, null == P ? true : P.entitlementId, G]);
  let [B, L] = i.useState(true), M = i.useMemo(() => {
    var e;
    if (null != G) return Object.values(null != (e = null == Z ? true : Z.catalog) ? e : {}).find(e => e.id === G)
  }, [null == Z ? true : Z.catalog, G]), [R, V] = i.useState(P), [q, A] = i.useState(null != (c = null == k || null == (t = k.plans[0]) ? true : t.id) ? c : null == P ? true : P.planId), X = function(e, t, n, l) {
    var i, r, s, o, u, c, d, m;
    let v = (0, a.e7)([g.Z], () => {
        var t;
        return null == (t = g.Z.getStateForGuild(e)) ? true : t.entitlements
      }),
      f = null != (d = null == t || null == (i = t.plans.find(e => e.id === n)) ? true : i.cost) ? d : 0;
    return null == l ? f : f - (null != (m = null == v || null == (c = v[l.entitlementId]) || null == (u = c.sku) || null == (o = u.tenant_metadata) || null == (s = o.guild_monetization) || null == (r = s.game_server) ? true : r.boost_price) ? m : 0)
  }(O, M, q, R), K = i.useCallback((e, t) => {
    var n;
    F(null == e ? true : e.id), A(null != t ? t : null == e || null == (n = e.plans[0]) ? true : n.id)
  }, []), U = i.useCallback(e => {
    var t, n, l;
    V(e);
    let i = null == Z || null == (l = Z.entitlements) || null == (n = l[e.entitlementId]) || null == (t = n.sku) ? true : t.product_id;
    null != i && F(i), A(e.planId), Q(e.name), J(e.regionId)
  }, [null == Z ? true : Z.entitlements]), [W, Y] = i.useState(), [$, Q] = i.useState(null != (j = null == P ? true : P.name) ? j : ""), [H, J] = i.useState(null != (x = null == P ? true : P.regionId) ? x : ""), [ee, et] = i.useState(false), en = i.useCallback(() => {
    if (L(true), 0 === X || null == N || null == M || null == q) return;
    let e = () => {
      et(true);
      let e = new Promise(e => {
        setTimeout(() => e(true), b.cF)
      });
      Promise.all([null != R ? (0, v.EY)(N.id, R.entitlementId, q, $) : (0, v.NE)(N.id, q, $, H), e]).then(() => {
        C(), (0, f.Z)(N.id, M)
      }).catch(e => {
        var t, n;
        L(null != (n = null == (t = e.body) ? true : t.message) ? n : e.message)
      }).finally(() => {
        et(false)
      })
    };
    D < X ? (0, s.u)({
      analyticsLocation: I,
      numberOfBoostsToAdd: X - D,
      analyticsLocations: _,
      guild: N,
      intent: o.P.PERK,
      onLoading: e => {
        et(e)
      },
      onSubscribeComplete: e
    }) : e()
  }, [_, N, D, q, I, M, $, H, C, X, R]), el = i.useCallback(e => {
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
      guildId: O,
      step: T,
      stepAction: z,
      stepLoading: ee,
      onBack: ei,
      onNext: ea,
      portkeyGames: null != (y = null == Z ? true : Z.catalog) ? y : {},
      instances: Object.values(null != (h = null == Z ? true : Z.instances) ? h : {}),
      currentGame: M,
      setCurrentGame: K,
      portkeyInstance: R,
      setPortkeyInstance: U,
      name: $,
      setName: Q,
      regionId: H,
      setRegionId: J,
      planCost: X,
      planId: q,
      setPlanId: A,
      footerNode: W,
      setFooterNode: Y,
      availableBoostCount: D,
      error: B
    },
    children: w
  })
}