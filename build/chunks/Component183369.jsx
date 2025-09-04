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
  Chunk279604 = require("./279604.jsx"),
  Chunk744993 = require("./744993.js"),
  Chunk693587 = require("./693587.js"),
  Chunk741252 = require("./741252.jsx"),
  Chunk473682 = require("./473682.js");
let [v, j] = (0, Chunk975104.Z)();

function b(e) {
  var n, t, d, j, b, f, h, _, C;
  let {
    guildId: y,
    initialPortkeyInstance: O,
    initialPortkeyGame: N,
    stepConfig: S = g.T9,
    children: P,
    onClose: w,
    analyticsLocation: k
  } = e;
  i.useEffect(() => {
    (0, m.po)(y), (0, m.EC)(y)
  }, [y]);
  let T = (0, r.e7)([p.Z], () => p.Z.getStateForGuild(y)),
    I = (0, r.e7)([c.Z], () => c.Z.getGuild(y)),
    {
      analyticsLocations: E
    } = (0, l.ZP)(k),
    [Z, B] = i.useState(null != (d = S.initialStep) ? d : Object.keys(S.steps)[0]),
    D = (0, u.Td)(y, true),
    G = S.steps[Z],
    [V, R] = i.useState(null != (j = null == N ? true : N.id) ? j : null == O ? true : O.gameId),
    [z, M] = i.useState(O),
    [A, L] = i.useState(null != (b = null == N || null == (n = N.plans[0]) ? true : n.id) ? b : null == O || null == (t = O.plan) ? true : t.id),
    H = i.useCallback((e, n) => {
      var t;
      R(null == e ? true : e.id), L(null != n ? n : null == e || null == (t = e.plans[0]) ? true : t.id)
    }, []),
    K = i.useCallback(e => {
      M(e), R(e.gameId), L(e.plan.id), U(e.name), Y(e.location)
    }, []),
    X = i.useMemo(() => {
      var e;
      if (null != V) return Object.values(null != (e = null == T ? true : T.catalog) ? e : {}).find(e => e.id === V)
    }, [null == T ? true : T.catalog, V]),
    [q, F] = i.useState(),
    [W, U] = i.useState(null != (f = null == O ? true : O.name) ? f : ""),
    [Q, Y] = i.useState(null != (h = null == O ? true : O.location) ? h : ""),
    [$, J] = i.useState(false),
    ee = i.useCallback(() => {
      let e = null == X ? true : X.plans.find(e => e.id === A);
      null != e && null != I && null != X && (D < e.cost ? (0, s.u)({
        analyticsLocation: k,
        numberOfBoostsToAdd: e.cost - D,
        analyticsLocations: E,
        guild: I,
        intent: o.P.PERK,
        onLoading: e => {
          J(e)
        },
        onSubscribeComplete: () => {
          (0, x.Z)(I.id, X)
        }
      }) : (0, x.Z)(I.id, X))
    }, [E, I, D, A, k, X]),
    en = i.useCallback(e => {
      switch (e.type) {
        case "close":
          w();
          break;
        case "go-to-step":
          B(e.step);
          break;
        case "purchase":
          ee()
      }
    }, [w, ee]),
    et = i.useCallback(() => {
      null != G && en(G.onBack)
    }, [G, en]),
    ea = i.useCallback(() => {
      null != G && en(G.onNext)
    }, [G, en]);
  return (0, a.jsx)(v.Provider, {
    value: {
      guildId: y,
      step: Z,
      stepAction: G,
      stepLoading: $,
      onBack: et,
      onNext: ea,
      portkeyGames: null != (_ = null == T ? true : T.catalog) ? _ : {},
      instances: Object.values(null != (C = null == T ? true : T.instances) ? C : {}),
      currentGame: X,
      setCurrentGame: H,
      portkeyInstance: z,
      setPortkeyInstance: K,
      name: W,
      setName: U,
      location: Q,
      setLocation: Y,
      planId: A,
      setPlanId: L,
      footerNode: q,
      setFooterNode: F
    },
    children: P
  })
}