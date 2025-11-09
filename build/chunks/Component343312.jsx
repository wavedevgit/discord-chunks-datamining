/** Chunk was on 63639 **/
/** chunk id: 343312, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  BT: () => y,
  JL: () => h
}), require("./388685.js"), require("./457542.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk879892 = require("./879892.jsx"),
  Chunk343649 = require("./343649.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk975104 = require("./975104.jsx"),
  Chunk823379 = require("./823379.js"),
  Chunk713081 = require("./713081.js"),
  Chunk279604 = require("./279604.jsx"),
  Chunk905551 = require("./905551.js"),
  Chunk578756 = require("./578756.js"),
  Chunk60482 = require("./60482.js"),
  Chunk627045 = require("./627045.jsx"),
  Chunk619733 = require("./619733.js"),
  Chunk97200 = require("./97200.js"),
  Chunk388032 = require("./388032.jsx");
let [E, h] = (0, Chunk975104.Z)();

function S(e) {
  var t;
  return null == e || null == (t = e.plans[Math.floor(((null == e ? true : e.plans.length) - 1) / 2)]) ? true : t.id
}

function y(e) {
  var t, n, c, h, y, O;
  let {
    guildId: I,
    initialGameServerInstance: k,
    initialGameServerGame: C,
    stepConfig: P = _.IX,
    children: N,
    onClose: Z,
    analyticsLocation: w
  } = e;
  i.useEffect(() => {
    (0, g.ce)(I), (0, m.BN)(I, true), null == k && (0, g.mF)(I)
  }, [I, k]);
  let M = (0, a.e7)([p.Z], () => p.Z.getStateForGuild(I)),
    T = (0, a.e7)([o.Z], () => o.Z.getGuild(I)),
    {
      analyticsLocations: G
    } = (0, r.ZP)(w),
    [L, R] = i.useState(null != (t = P.initialStep) ? t : Object.keys(P.steps)[0]),
    A = (0, v.Td)(I, true),
    D = P.steps[L],
    [B, V] = i.useState(null == C ? true : C.id);
  i.useEffect(() => {
    var e, t, n;
    if (null != B || (null == k ? true : k.entitlementId) == null) return;
    let l = null == M || null == (n = M.entitlements) || null == (t = n[k.entitlementId]) || null == (e = t.sku) ? true : e.product_id;
    null != l && V(l)
  }, [null == M ? true : M.entitlements, null == k ? true : k.entitlementId, B]);
  let [z, K] = i.useState(true), J = i.useMemo(() => {
    var e;
    if (null != B) return Object.values(null != (e = null == M ? true : M.catalog) ? e : {}).find(e => e.id === B)
  }, [null == M ? true : M.catalog, B]), [U, F] = i.useState(k), [Y, H] = i.useState(null != (n = S(C)) ? n : null == k ? true : k.planId), W = function(e, t, n, l) {
    var i, r, s, u, o, c, d, m;
    let v = (0, a.e7)([p.Z], () => {
        var t;
        return null == (t = p.Z.getStateForGuild(e)) ? true : t.entitlements
      }),
      g = null != (d = null == t || null == (i = t.plans.find(e => e.id === n)) ? true : i.cost) ? d : 0;
    return null == l ? g : g - (null != (m = null == v || null == (c = v[l.entitlementId]) || null == (o = c.sku) || null == (u = o.tenant_metadata) || null == (s = u.guild_monetization) || null == (r = s.game_server) ? true : r.boost_price) ? m : 0)
  }(I, J, Y, U), X = i.useCallback(e => {
    var t, n, l, i, a, r;
    F(e);
    let s = null == M || null == (l = M.entitlements) || null == (n = l[null != (i = null == e ? true : e.entitlementId) ? i : ""]) || null == (t = n.sku) ? true : t.product_id;
    null != s && V(s), H(null == e ? true : e.planId), et(null != (a = null == e ? true : e.name) ? a : ""), el(null != (r = null == e ? true : e.regionId) ? r : "")
  }, [null == M ? true : M.entitlements]), q = i.useCallback((e, t) => {
    X(true), V(null == e ? true : e.id), H(null != t ? t : S(e))
  }, [X]), [$, Q] = i.useState(), [ee, et] = i.useState(null != (c = null == k ? true : k.name) ? c : ""), [en, el] = i.useState(null != (h = null == k ? true : k.regionId) ? h : ""), [ei, ea] = i.useState(false), er = i.useRef(false), es = i.useCallback(() => {
    var e, t, n;
    if (K(true), null == T || null == J || "" === ee || "" === en || null == Y) return;
    let l = J.plans.find(e => e.id === Y);
    (0, f.g$)({
      guildId: T.id,
      productId: J.id,
      productName: J.name,
      skuId: Y,
      planName: null != (e = null == l ? true : l.name) ? e : "",
      planCost: null != (t = null == l ? true : l.cost) ? t : 0,
      previousPlanCost: null == U ? 0 : (null != (n = null == l ? true : l.cost) ? n : 0) + W,
      region: en,
      type: null == U ? "create" : "edit"
    });
    let i = () => {
      if (er.current) return;
      er.current = true, ea(true);
      let e = new Promise(e => {
        setTimeout(() => e(true), _.tq)
      });
      Promise.all([null != U ? (0, g.EY)(T.id, U.entitlementId, Y, ee) : (0, g.NE)(T.id, Y, ee, en), e]).then(() => {
        Z(), (null == U ? true : U.planId) !== Y && (0, b.Z)(T.id, J, null == U ? "created" : "updated")
      }).catch(e => {
        var t, n;
        K(null != (n = null == (t = e.body) ? true : t.message) ? n : j.intl.string(x.default.gvNWWr)), er.current = false
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
  }, [G, T, A, Y, w, J, ee, en, Z, W, U]), eu = i.useCallback(e => {
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
      guildId: I,
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
      setName: et,
      regionId: en,
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