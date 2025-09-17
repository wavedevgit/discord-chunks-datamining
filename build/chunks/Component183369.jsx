/** Chunk was on 39159 **/
/** chunk id: 183369, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  KO: () => b,
  aj: () => v
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk879892 = require("./879892.jsx"),
  Chunk343649 = require("./343649.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk975104 = require("./975104.jsx"),
  Chunk279604 = require("./279604.jsx"),
  Chunk744993 = require("./744993.js"),
  Chunk693587 = require("./693587.js"),
  Chunk741252 = require("./741252.jsx"),
  Chunk473682 = require("./473682.js");
let [x, v] = (0, Chunk975104.Z)();

function b(e) {
  var n, t, d, v, b, j, h, _;
  let {
    guildId: C,
    initialPortkeyInstance: O,
    initialPortkeyGame: y,
    stepConfig: N = p.T9,
    children: S,
    onClose: P,
    analyticsLocation: w
  } = e;
  r.useEffect(() => {
    (0, m.po)(C), (0, m.EC)(C)
  }, [C]);
  let k = (0, a.e7)([g.Z], () => g.Z.getStateForGuild(C)),
    T = (0, a.e7)([c.Z], () => c.Z.getGuild(C)),
    {
      analyticsLocations: E
    } = (0, l.ZP)(w),
    [I, Z] = r.useState(null != (t = N.initialStep) ? t : Object.keys(N.steps)[0]),
    G = (0, u.Td)(C, true),
    D = N.steps[I],
    [R, B] = r.useState(null != (d = null == y ? true : y.id) ? d : null == O ? true : O.gameId),
    L = r.useMemo(() => {
      var e;
      if (null != R) return Object.values(null != (e = null == k ? true : k.catalog) ? e : {}).find(e => e.id === R)
    }, [null == k ? true : k.catalog, R]),
    [M, z] = r.useState(O),
    [F, A] = r.useState(null != (v = null == y || null == (n = y.plans[0]) ? true : n.id) ? v : null == O ? true : O.planId),
    V = function(e, n, t, i) {
      var r, l, o, s, c, d, u, m;
      let f = (0, a.e7)([g.Z], () => {
          var n;
          return null == (n = g.Z.getStateForGuild(e)) ? true : n.entitlements
        }),
        p = null != (u = null == n || null == (r = n.plans.find(e => e.id === t)) ? true : r.cost) ? u : 0;
      return null == i ? p : p - (null != (m = null == f || null == (d = f[i.entitlementId]) || null == (c = d.sku) || null == (s = c.tenant_metadata) || null == (o = s.guild_monetization) || null == (l = o.game_server) ? true : l.boost_price) ? m : 0)
    }(C, L, F, M),
    U = r.useCallback((e, n) => {
      var t;
      B(null == e ? true : e.id), A(null != n ? n : null == e || null == (t = e.plans[0]) ? true : t.id)
    }, []),
    K = r.useCallback(e => {
      z(e), B(e.gameId), A(e.planId), X(e.name), Q(e.location)
    }, []),
    [W, H] = r.useState(),
    [q, X] = r.useState(null != (b = null == O ? true : O.name) ? b : ""),
    [Y, Q] = r.useState(null != (j = null == O ? true : O.location) ? j : ""),
    [$, J] = r.useState(false),
    ee = r.useCallback(() => {
      0 !== V && null != T && null != L && null != F && (G < V ? (0, o.u)({
        analyticsLocation: w,
        numberOfBoostsToAdd: V - G,
        analyticsLocations: E,
        guild: T,
        intent: s.P.PERK,
        onLoading: e => {
          J(e)
        },
        onSubscribeComplete: () => {
          (0, m.NE)(T.id, F, q, Y).then(() => {
            P(), (0, f.Z)(T.id, L)
          })
        }
      }) : (0, m.NE)(T.id, F, q, Y).then(() => {
        P(), (0, f.Z)(T.id, L)
      }))
    }, [E, T, G, F, w, L, q, Y, P, V]),
    en = r.useCallback(e => {
      switch (e.type) {
        case "close":
          P();
          break;
        case "go-to-step":
          Z(e.step);
          break;
        case "save":
          ee()
      }
    }, [P, ee]),
    et = r.useCallback(() => {
      null != D && en(D.onBack)
    }, [D, en]),
    ei = r.useCallback(() => {
      null != D && en(D.onNext)
    }, [D, en]);
  return (0, i.jsx)(x.Provider, {
    value: {
      guildId: C,
      step: I,
      stepAction: D,
      stepLoading: $,
      onBack: et,
      onNext: ei,
      portkeyGames: null != (h = null == k ? true : k.catalog) ? h : {},
      instances: Object.values(null != (_ = null == k ? true : k.instances) ? _ : {}),
      currentGame: L,
      setCurrentGame: U,
      portkeyInstance: M,
      setPortkeyInstance: K,
      name: q,
      setName: X,
      locationId: Y,
      setLocationId: Q,
      planCost: V,
      planId: F,
      setPlanId: A,
      footerNode: W,
      setFooterNode: H,
      availableBoostCount: G
    },
    children: S
  })
}