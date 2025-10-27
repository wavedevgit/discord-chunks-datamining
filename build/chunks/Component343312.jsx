/** Chunk was on 63639 **/
/** chunk id: 343312, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  BT: () => h,
  JL: () => j
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
  Chunk619733 = require("./619733.js");
let [x, j] = (0, Chunk975104.Z)();

function E(e) {
  var t;
  return null == e || null == (t = e.plans[Math.floor(((null == e ? true : e.plans.length) - 1) / 2)]) ? true : t.id
}

function h(e) {
  var t, n, c, j, h, S;
  let {
    guildId: y,
    initialGameServerInstance: O,
    initialGameServerGame: I,
    stepConfig: k = _.IX,
    children: C,
    onClose: P,
    analyticsLocation: N
  } = e;
  i.useEffect(() => {
    (0, g.ce)(y), (0, m.BN)(y, true), null == O && (0, g.mF)(y)
  }, [y, O]);
  let Z = (0, a.e7)([p.Z], () => p.Z.getStateForGuild(y)),
    w = (0, a.e7)([o.Z], () => o.Z.getGuild(y)),
    {
      analyticsLocations: M
    } = (0, r.ZP)(N),
    [T, G] = i.useState(null != (t = k.initialStep) ? t : Object.keys(k.steps)[0]),
    L = (0, v.Td)(y, true),
    R = k.steps[T],
    [A, D] = i.useState(null == I ? true : I.id);
  i.useEffect(() => {
    var e, t, n;
    if (null != A || (null == O ? true : O.entitlementId) == null) return;
    let l = null == Z || null == (n = Z.entitlements) || null == (t = n[O.entitlementId]) || null == (e = t.sku) ? true : e.product_id;
    null != l && D(l)
  }, [null == Z ? true : Z.entitlements, null == O ? true : O.entitlementId, A]);
  let [B, V] = i.useState(true), z = i.useMemo(() => {
    var e;
    if (null != A) return Object.values(null != (e = null == Z ? true : Z.catalog) ? e : {}).find(e => e.id === A)
  }, [null == Z ? true : Z.catalog, A]), [K, U] = i.useState(O), [F, J] = i.useState(null != (n = E(I)) ? n : null == O ? true : O.planId), H = function(e, t, n, l) {
    var i, r, s, u, o, c, d, m;
    let v = (0, a.e7)([p.Z], () => {
        var t;
        return null == (t = p.Z.getStateForGuild(e)) ? true : t.entitlements
      }),
      g = null != (d = null == t || null == (i = t.plans.find(e => e.id === n)) ? true : i.cost) ? d : 0;
    return null == l ? g : g - (null != (m = null == v || null == (c = v[l.entitlementId]) || null == (o = c.sku) || null == (u = o.tenant_metadata) || null == (s = u.guild_monetization) || null == (r = s.game_server) ? true : r.boost_price) ? m : 0)
  }(y, z, F, K), X = i.useCallback(e => {
    var t, n, l, i, a, r;
    U(e);
    let s = null == Z || null == (l = Z.entitlements) || null == (n = l[null != (i = null == e ? true : e.entitlementId) ? i : ""]) || null == (t = n.sku) ? true : t.product_id;
    null != s && D(s), J(null == e ? true : e.planId), Q(null != (a = null == e ? true : e.name) ? a : ""), et(null != (r = null == e ? true : e.regionId) ? r : "")
  }, [null == Z ? true : Z.entitlements]), Y = i.useCallback((e, t) => {
    X(true), D(null == e ? true : e.id), J(null != t ? t : E(e))
  }, [X]), [q, W] = i.useState(), [$, Q] = i.useState(null != (c = null == O ? true : O.name) ? c : ""), [ee, et] = i.useState(null != (j = null == O ? true : O.regionId) ? j : ""), [en, el] = i.useState(false), ei = i.useRef(false), ea = i.useCallback(() => {
    var e, t, n;
    if (V(true), null == w || null == z || "" === $ || "" === ee || null == F) return;
    let l = z.plans.find(e => e.id === F);
    (0, f.g$)({
      guildId: w.id,
      productId: z.id,
      productName: z.name,
      skuId: F,
      planName: null != (e = null == l ? true : l.name) ? e : "",
      planCost: null != (t = null == l ? true : l.cost) ? t : 0,
      previousPlanCost: null == K ? 0 : (null != (n = null == l ? true : l.cost) ? n : 0) + H,
      region: ee,
      type: null == K ? "create" : "edit"
    });
    let i = () => {
      if (ei.current) return;
      ei.current = true, el(true);
      let e = new Promise(e => {
        setTimeout(() => e(true), _.tq)
      });
      Promise.all([null != K ? (0, g.EY)(w.id, K.entitlementId, F, $) : (0, g.NE)(w.id, F, $, ee), e]).then(() => {
        P(), (null == K ? true : K.planId) !== F && (0, b.Z)(w.id, z, null == K ? "created" : "updated")
      }).catch(e => {
        var t, n;
        V(null != (n = null == (t = e.body) ? true : t.message) ? n : e.message), ei.current = false
      }).finally(() => {
        el(false)
      })
    };
    L < H ? (0, s.u)({
      analyticsLocation: N,
      numberOfBoostsToAdd: H - L,
      analyticsLocations: M,
      guild: w,
      intent: u.P.PERK,
      onLoading: e => {
        el(e)
      },
      onSubscribeComplete: () => {
        i()
      },
      handleSubscribeModalClose: e => {
        e && i()
      }
    }) : i()
  }, [M, w, L, F, N, z, $, ee, P, H, K]), er = i.useCallback(e => {
    switch (e.type) {
      case "close":
        P();
        break;
      case "go-to-step":
        G(e.step);
        break;
      case "save":
        ea()
    }
  }, [P, ea]), es = i.useCallback(() => {
    null != R && er(R.onBack)
  }, [R, er]), eu = i.useCallback(() => {
    null != R && er(R.onNext)
  }, [R, er]), eo = i.useMemo(() => {
    var e;
    return new Set(Object.values(null != (e = null == Z ? true : Z.catalog) ? e : {}).map(e => e.provider).filter(d.lm))
  }, [null == Z ? true : Z.catalog]);
  return (0, l.jsx)(x.Provider, {
    value: {
      guildId: y,
      step: T,
      stepAction: R,
      stepLoading: en,
      onBack: es,
      onNext: eu,
      gameServerGames: null != (h = null == Z ? true : Z.catalog) ? h : {},
      instances: Object.values(null != (S = null == Z ? true : Z.instances) ? S : {}),
      currentGame: z,
      setCurrentGame: Y,
      gameServerInstance: K,
      setGameServerInstance: X,
      name: $,
      setName: Q,
      regionId: ee,
      setRegionId: et,
      planCost: H,
      planId: F,
      setPlanId: J,
      footerNode: q,
      setFooterNode: W,
      availableBoostCount: L,
      error: B,
      gameProvider: eo.size > 0 ? Array.from(eo)[0] : null
    },
    children: C
  })
}