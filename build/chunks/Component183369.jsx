/** Chunk was on 39159 **/
/** chunk id: 183369, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  KO: () => b,
  aj: () => j
}), require("./388685.js");
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
let [x, j] = (0, Chunk975104.Z)();

function b(e) {
  var n, t, d, j, b, h, _;
  let {
    guildId: C,
    initialPortkeyInstance: y,
    initialPortkeyGame: O,
    stepConfig: N = v.T9,
    children: P,
    onClose: S,
    analyticsLocation: w
  } = e;
  r.useEffect(() => {
    (0, g.po)(C), (0, g.EC)(C), (0, u.BN)(C, true)
  }, [C]);
  let k = (0, l.e7)([f.Z], () => f.Z.getStateForGuild(C)),
    E = (0, l.e7)([c.Z], () => c.Z.getGuild(C)),
    {
      analyticsLocations: I
    } = (0, a.ZP)(w),
    [T, Z] = r.useState(null != (t = N.initialStep) ? t : Object.keys(N.steps)[0]),
    G = (0, m.Td)(C, true),
    R = N.steps[T],
    [D, B] = r.useState(null == O ? true : O.id);
  r.useEffect(() => {
    var e, n, t;
    if (null != D || (null == y ? true : y.entitlementId) == null) return;
    let i = null == k || null == (t = k.entitlements) || null == (n = t[y.entitlementId]) || null == (e = n.sku) ? true : e.product_id;
    null != i && B(i)
  }, [null == k ? true : k.entitlements, null == y ? true : y.entitlementId, D]);
  let M = r.useMemo(() => {
      var e;
      if (null != D) return Object.values(null != (e = null == k ? true : k.catalog) ? e : {}).find(e => e.id === D)
    }, [null == k ? true : k.catalog, D]),
    [z, F] = r.useState(y),
    [A, L] = r.useState(null != (d = null == O || null == (n = O.plans[0]) ? true : n.id) ? d : null == y ? true : y.planId),
    V = function(e, n, t, i) {
      var r, a, o, s, c, d, u, m;
      let g = (0, l.e7)([f.Z], () => {
          var n;
          return null == (n = f.Z.getStateForGuild(e)) ? true : n.entitlements
        }),
        p = null != (u = null == n || null == (r = n.plans.find(e => e.id === t)) ? true : r.cost) ? u : 0;
      return null == i ? p : p - (null != (m = null == g || null == (d = g[i.entitlementId]) || null == (c = d.sku) || null == (s = c.tenant_metadata) || null == (o = s.guild_monetization) || null == (a = o.game_server) ? true : a.boost_price) ? m : 0)
    }(C, M, A, z),
    U = r.useCallback((e, n) => {
      var t;
      B(null == e ? true : e.id), L(null != n ? n : null == e || null == (t = e.plans[0]) ? true : t.id)
    }, []),
    K = r.useCallback(e => {
      var n, t, i;
      F(e);
      let r = null == k || null == (i = k.entitlements) || null == (t = i[e.entitlementId]) || null == (n = t.sku) ? true : n.product_id;
      null != r && B(r), L(e.planId), X(e.name), Q(e.regionId)
    }, [null == k ? true : k.entitlements]),
    [W, H] = r.useState(),
    [q, X] = r.useState(null != (j = null == y ? true : y.name) ? j : ""),
    [Y, Q] = r.useState(null != (b = null == y ? true : y.regionId) ? b : ""),
    [$, J] = r.useState(false),
    ee = r.useCallback(() => {
      0 !== V && null != E && null != M && null != A && (G < V ? (0, o.u)({
        analyticsLocation: w,
        numberOfBoostsToAdd: V - G,
        analyticsLocations: I,
        guild: E,
        intent: s.P.PERK,
        onLoading: e => {
          J(e)
        },
        onSubscribeComplete: () => {
          (0, g.NE)(E.id, A, q, Y).then(() => {
            S(), (0, p.Z)(E.id, M)
          })
        }
      }) : (0, g.NE)(E.id, A, q, Y).then(() => {
        S(), (0, p.Z)(E.id, M)
      }))
    }, [I, E, G, A, w, M, q, Y, S, V]),
    en = r.useCallback(e => {
      switch (e.type) {
        case "close":
          S();
          break;
        case "go-to-step":
          Z(e.step);
          break;
        case "save":
          ee()
      }
    }, [S, ee]),
    et = r.useCallback(() => {
      null != R && en(R.onBack)
    }, [R, en]),
    ei = r.useCallback(() => {
      null != R && en(R.onNext)
    }, [R, en]);
  return (0, i.jsx)(x.Provider, {
    value: {
      guildId: C,
      step: T,
      stepAction: R,
      stepLoading: $,
      onBack: et,
      onNext: ei,
      portkeyGames: null != (h = null == k ? true : k.catalog) ? h : {},
      instances: Object.values(null != (_ = null == k ? true : k.instances) ? _ : {}),
      currentGame: M,
      setCurrentGame: U,
      portkeyInstance: z,
      setPortkeyInstance: K,
      name: q,
      setName: X,
      regionId: Y,
      setRegionId: Q,
      planCost: V,
      planId: A,
      setPlanId: L,
      footerNode: W,
      setFooterNode: H,
      availableBoostCount: G
    },
    children: P
  })
}