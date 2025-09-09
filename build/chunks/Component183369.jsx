/** Chunk was on 39159 **/
/** chunk id: 183369, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  KO: () => x,
  aj: () => b
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
let [f, b] = (0, Chunk975104.Z)();

function x(e) {
  var n, t, d, b, x, j, h, _, C;
  let {
    guildId: y,
    initialPortkeyInstance: O,
    initialPortkeyGame: N,
    stepConfig: S = v.T9,
    children: P,
    onClose: w,
    analyticsLocation: k
  } = e;
  i.useEffect(() => {
    (0, m.po)(y), (0, m.EC)(y)
  }, [y]);
  let T = (0, a.e7)([g.Z], () => g.Z.getStateForGuild(y)),
    E = (0, a.e7)([c.Z], () => c.Z.getGuild(y)),
    {
      analyticsLocations: I
    } = (0, l.ZP)(k),
    [Z, G] = i.useState(null != (d = S.initialStep) ? d : Object.keys(S.steps)[0]),
    D = (0, u.Td)(y, true),
    B = S.steps[Z],
    [L, M] = i.useState(null != (b = null == N ? true : N.id) ? b : null == O ? true : O.gameId),
    [R, V] = i.useState(O),
    [A, z] = i.useState(null != (x = null == N || null == (n = N.plans[0]) ? true : n.id) ? x : null == O || null == (t = O.plan) ? true : t.id),
    F = i.useCallback((e, n) => {
      var t;
      M(null == e ? true : e.id), z(null != n ? n : null == e || null == (t = e.plans[0]) ? true : t.id)
    }, []),
    W = i.useCallback(e => {
      V(e), M(e.gameId), z(e.plan.id), q(e.name), Q(e.location)
    }, []),
    U = i.useMemo(() => {
      var e;
      if (null != L) return Object.values(null != (e = null == T ? true : T.catalog) ? e : {}).find(e => e.id === L)
    }, [null == T ? true : T.catalog, L]),
    [K, H] = i.useState(),
    [X, q] = i.useState(null != (j = null == O ? true : O.name) ? j : ""),
    [Y, Q] = i.useState(null != (h = null == O ? true : O.location) ? h : ""),
    [$, J] = i.useState(false),
    ee = i.useCallback(() => {
      let e = null == U ? true : U.plans.find(e => e.id === A);
      null != e && null != E && null != U && (D < e.cost ? (0, o.u)({
        analyticsLocation: k,
        numberOfBoostsToAdd: e.cost - D,
        analyticsLocations: I,
        guild: E,
        intent: s.P.PERK,
        onLoading: e => {
          J(e)
        },
        onSubscribeComplete: () => {
          (0, p.Z)(E.id, U)
        }
      }) : (0, p.Z)(E.id, U))
    }, [I, E, D, A, k, U]),
    en = i.useCallback(e => {
      switch (e.type) {
        case "close":
          w();
          break;
        case "go-to-step":
          G(e.step);
          break;
        case "purchase":
          ee()
      }
    }, [w, ee]),
    et = i.useCallback(() => {
      null != B && en(B.onBack)
    }, [B, en]),
    er = i.useCallback(() => {
      null != B && en(B.onNext)
    }, [B, en]);
  return (0, r.jsx)(f.Provider, {
    value: {
      guildId: y,
      step: Z,
      stepAction: B,
      stepLoading: $,
      onBack: et,
      onNext: er,
      portkeyGames: null != (_ = null == T ? true : T.catalog) ? _ : {},
      instances: Object.values(null != (C = null == T ? true : T.instances) ? C : {}),
      currentGame: U,
      setCurrentGame: F,
      portkeyInstance: R,
      setPortkeyInstance: W,
      name: X,
      setName: q,
      location: Y,
      setLocation: Q,
      planId: A,
      setPlanId: z,
      footerNode: K,
      setFooterNode: H
    },
    children: P
  })
}