/** Chunk was on 67365 **/
/** chunk id: 343312, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  BT: () => y,
  JL: () => h
}), require("./388685.js"), require("./457542.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk879892 = require("./879892.jsx"),
  Chunk343649 = require("./343649.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk975104 = require("./975104.jsx"),
  Chunk823379 = require("./823379.js"),
  Chunk713081 = require("./713081.js"),
  Chunk317169 = require("./317169.js"),
  Chunk905551 = require("./905551.js"),
  Chunk578756 = require("./578756.js"),
  Chunk60482 = require("./60482.js"),
  Chunk627045 = require("./627045.jsx"),
  Chunk619733 = require("./619733.js"),
  Chunk914820 = require("./914820.js"),
  Chunk388032 = require("./388032.jsx");
let [E, h] = (0, Chunk975104.Z)();

function S(e) {
  var n;
  return null == e || null == (n = e.plans[Math.floor(((null == e ? true : e.plans.length) - 1) / 2)]) ? true : n.id
}

function y(e) {
  var n, t, c, h, y, O;
  let {
    guildId: k,
    initialGameServerInstance: I,
    initialGameServerGame: C,
    stepConfig: P = _.IX,
    children: N,
    onClose: Z,
    analyticsLocation: w
  } = e;
  i.useEffect(() => {
    (0, f.ce)(k), (0, m.BN)(k, true), null == I && (0, f.mF)(k)
  }, [k, I]);
  let M = (0, a.e7)([b.Z], () => b.Z.getStateForGuild(k)),
    T = (0, a.e7)([o.Z], () => o.Z.getGuild(k)),
    {
      analyticsLocations: G
    } = (0, r.ZP)(w),
    [L, R] = i.useState(null != (n = P.initialStep) ? n : Object.keys(P.steps)[0]),
    {
      available: A
    } = (0, v.Z)(k),
    D = P.steps[L],
    [B, V] = i.useState(null == C ? true : C.id);
  i.useEffect(() => {
    var e, n, t;
    if (null != B || (null == I ? true : I.entitlementId) == null) return;
    let l = null == M || null == (t = M.entitlements) || null == (n = t[I.entitlementId]) || null == (e = n.sku) ? true : e.product_id;
    null != l && V(l)
  }, [null == M ? true : M.entitlements, null == I ? true : I.entitlementId, B]);
  let [z, K] = i.useState(true), J = i.useMemo(() => {
    var e;
    if (null != B) return Object.values(null != (e = null == M ? true : M.catalog) ? e : {}).find(e => e.id === B)
  }, [null == M ? true : M.catalog, B]), [U, F] = i.useState(I), [Y, H] = i.useState(null != (t = S(C)) ? t : null == I ? true : I.planId), W = function(e, n, t, l) {
    var i, r, s, u, o, c, d, m;
    let v = (0, a.e7)([b.Z], () => {
        var n;
        return null == (n = b.Z.getStateForGuild(e)) ? true : n.entitlements
      }),
      f = null != (d = null == n || null == (i = n.plans.find(e => e.id === t)) ? true : i.cost) ? d : 0;
    return null == l ? f : f - (null != (m = null == v || null == (c = v[l.entitlementId]) || null == (o = c.sku) || null == (u = o.tenant_metadata) || null == (s = u.guild_monetization) || null == (r = s.game_server) ? true : r.boost_price) ? m : 0)
  }(k, J, Y, U), X = i.useCallback(e => {
    var n, t, l, i, a, r;
    F(e);
    let s = null == M || null == (l = M.entitlements) || null == (t = l[null != (i = null == e ? true : e.entitlementId) ? i : ""]) || null == (n = t.sku) ? true : n.product_id;
    null != s && V(s), H(null == e ? true : e.planId), en(null != (a = null == e ? true : e.name) ? a : ""), el(null != (r = null == e ? true : e.regionId) ? r : "")
  }, [null == M ? true : M.entitlements]), q = i.useCallback((e, n) => {
    X(true), V(null == e ? true : e.id), H(null != n ? n : S(e))
  }, [X]), [$, Q] = i.useState(), [ee, en] = i.useState(null != (c = null == I ? true : I.name) ? c : ""), [et, el] = i.useState(null != (h = null == I ? true : I.regionId) ? h : ""), [ei, ea] = i.useState(false), er = i.useRef(false), es = i.useCallback(() => {
    var e, n, t;
    if (K(true), null == T || null == J || "" === ee || "" === et || null == Y) return;
    let l = J.plans.find(e => e.id === Y);
    (0, g.g$)({
      guildId: T.id,
      productId: J.id,
      productName: J.name,
      skuId: Y,
      planName: null != (e = null == l ? true : l.name) ? e : "",
      planCost: null != (n = null == l ? true : l.cost) ? n : 0,
      previousPlanCost: null == U ? 0 : (null != (t = null == l ? true : l.cost) ? t : 0) + W,
      region: et,
      type: null == U ? "create" : "edit"
    });
    let i = () => {
      if (er.current) return;
      er.current = true, ea(true);
      let e = new Promise(e => {
        setTimeout(() => e(true), _.tq)
      });
      Promise.all([null != U ? (0, f.EY)(T.id, U.entitlementId, Y, ee) : (0, f.NE)(T.id, Y, ee, et), e]).then(() => {
        Z(), (null == U ? true : U.planId) !== Y && (0, p.Z)(T.id, J, null == U ? "created" : "updated")
      }).catch(e => {
        var n, t;
        K(null != (t = null == (n = e.body) ? true : n.message) ? t : j.intl.string(x.default.gvNWWr)), er.current = false
      }).finally(() => {
        ea(false)
      })
    };
    A < W ? (0, s.u)({
      analyticsLocation: w,
      numberOfBoostsToAdd: W - A,
      analyticsLocations: G,
      guild: T,
      intent: u.P.PERK,
      onLoading: e => {
        ea(e)
      },
      onSubscribeComplete: () => {
        i()
      },
      handleSubscribeModalClose: e => {
        e && i()
      }
    }) : i()
  }, [G, T, A, Y, w, J, ee, et, Z, W, U]), eu = i.useCallback(e => {
    switch (e.type) {
      case "close":
        Z();
        break;
      case "go-to-step":
        R(e.step);
        break;
      case "save":
        es()
    }
  }, [Z, es]), eo = i.useCallback(() => {
    null != D && eu(D.onBack)
  }, [D, eu]), ec = i.useCallback(() => {
    null != D && eu(D.onNext)
  }, [D, eu]), ed = i.useMemo(() => {
    var e;
    return new Set(Object.values(null != (e = null == M ? true : M.catalog) ? e : {}).map(e => e.provider).filter(d.lm))
  }, [null == M ? true : M.catalog]);
  return (0, l.jsx)(E.Provider, {
    value: {
      guildId: k,
      step: L,
      stepAction: D,
      stepLoading: ei,
      onBack: eo,
      onNext: ec,
      gameServerGames: null != (y = null == M ? true : M.catalog) ? y : {},
      instances: Object.values(null != (O = null == M ? true : M.instances) ? O : {}),
      currentGame: J,
      setCurrentGame: q,
      gameServerInstance: U,
      setGameServerInstance: X,
      name: ee,
      setName: en,
      regionId: et,
      setRegionId: el,
      planCost: W,
      planId: Y,
      setPlanId: H,
      footerNode: $,
      setFooterNode: Q,
      availableBoostCount: A,
      error: z,
      gameProvider: ed.size > 0 ? Array.from(ed)[0] : null
    },
    children: N
  })
}