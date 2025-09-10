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
  Chunk985862 = require("./985862.js"),
  Chunk741252 = require("./741252.jsx"),
  Chunk473682 = require("./473682.js");
let [x, j] = (0, Chunk975104.Z)();

function b(e) {
  var n, t, d, j, b, h, _, C, y;
  let {
    guildId: O,
    initialPortkeyInstance: N,
    initialPortkeyGame: S,
    stepConfig: P = v.T9,
    children: w,
    onClose: k,
    analyticsLocation: T
  } = e;
  r.useEffect(() => {
    (0, m.po)(O), (0, m.EC)(O)
  }, [O]);
  let E = (0, a.e7)([g.Z], () => g.Z.getStateForGuild(O)),
    I = (0, a.e7)([c.Z], () => c.Z.getGuild(O)),
    {
      analyticsLocations: Z
    } = (0, l.ZP)(T),
    [G, D] = r.useState(null != (d = P.initialStep) ? d : Object.keys(P.steps)[0]),
    B = (0, u.Td)(O, true),
    M = P.steps[G],
    [L, R] = r.useState(null != (j = null == S ? true : S.id) ? j : null == N ? true : N.gameId),
    [V, z] = r.useState(N),
    [A, F] = r.useState(null != (b = null == S || null == (n = S.plans[0]) ? true : n.id) ? b : null == N || null == (t = N.plan) ? true : t.id),
    W = r.useCallback((e, n) => {
      var t;
      R(null == e ? true : e.id), F(null != n ? n : null == e || null == (t = e.plans[0]) ? true : t.id)
    }, []),
    K = r.useCallback(e => {
      z(e), R(e.gameId), F(e.plan.id), Q(e.name), $(e.location)
    }, []),
    U = r.useMemo(() => {
      var e;
      if (null != L) return Object.values(null != (e = null == E ? true : E.catalog) ? e : {}).find(e => e.id === L)
    }, [null == E ? true : E.catalog, L]),
    [H, X] = r.useState(),
    [q, Q] = r.useState(null != (h = null == N ? true : N.name) ? h : ""),
    [Y, $] = r.useState(null != (_ = null == N ? true : N.location) ? _ : ""),
    [J, ee] = r.useState(false),
    en = r.useCallback(() => {
      let e = (0, p.K)(A, V, U);
      0 !== e && null != I && null != U && null != A && (B < e ? (0, o.u)({
        analyticsLocation: T,
        numberOfBoostsToAdd: e - B,
        analyticsLocations: Z,
        guild: I,
        intent: s.P.PERK,
        onLoading: e => {
          ee(e)
        },
        onSubscribeComplete: () => {
          (0, m.NE)(I.id, A, q, Y).then(() => {
            k(), (0, f.Z)(I.id, U)
          })
        }
      }) : (0, m.NE)(I.id, A, q, Y).then(() => {
        k(), (0, f.Z)(I.id, U)
      }))
    }, [Z, I, B, A, T, U, V, q, Y, k]),
    et = r.useCallback(e => {
      switch (e.type) {
        case "close":
          k();
          break;
        case "go-to-step":
          D(e.step);
          break;
        case "save":
          en()
      }
    }, [k, en]),
    ei = r.useCallback(() => {
      null != M && et(M.onBack)
    }, [M, et]),
    er = r.useCallback(() => {
      null != M && et(M.onNext)
    }, [M, et]);
  return (0, i.jsx)(x.Provider, {
    value: {
      guildId: O,
      step: G,
      stepAction: M,
      stepLoading: J,
      onBack: ei,
      onNext: er,
      portkeyGames: null != (C = null == E ? true : E.catalog) ? C : {},
      instances: Object.values(null != (y = null == E ? true : E.instances) ? y : {}),
      currentGame: U,
      setCurrentGame: W,
      portkeyInstance: V,
      setPortkeyInstance: K,
      name: q,
      setName: Q,
      location: Y,
      setLocation: $,
      planId: A,
      setPlanId: F,
      footerNode: H,
      setFooterNode: X,
      availableBoostCount: B
    },
    children: w
  })
}