/** Chunk was on 74891 **/
/** chunk id: 270144, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  CR: () => v,
  E8: () => N,
  Ev: () => m,
  LM: () => _,
  cr: () => h,
  ec: () => E,
  h6: () => y,
  jd: () => g,
  qz: () => P
}), require("./539854.js"), require("./388685.js"), require("./457542.js"), require("./997841.js");
var i, Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk496929 = require("./496929.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk509545 = require("./509545.js"),
  Chunk78839 = require("./78839.js"),
  Chunk55563 = require("./55563.js"),
  Chunk801249 = require("./801249.js"),
  Chunk106976 = require("./106976.js"),
  Chunk307643 = require("./307643.js"),
  Chunk488915 = require("./488915.js"),
  Chunk171246 = require("./171246.js"),
  Chunk981631 = require("./981631.js"),
  g = ((i = {})[i.NOT_LOADED = 0] = "NOT_LOADED", i[i.LOADING = 1] = "LOADING", i[i.LOADED = 2] = "LOADED", i[i.ERROR = 3] = "ERROR", i);
let _ = t => {
  let {
    guildId: e,
    canFetch: n = true,
    forceRefetch: i = false
  } = t, o = (0, l.e7)([O.Z], () => null != e ? O.Z.getEntitlementsForGuildFetchState(e) : null, [e]);
  return r.useEffect(() => {
    if (null == e || e === b.ME) return;
    let t = O.Z.getEntitlementsForGuildFetchState(e);
    n && (t === O.M.NOT_FETCHED || i) && (0, f.i1)(e)
  }, [e, n, i]), {
    entitlementsLoaded: o === O.M.FETCHED
  }
};

function y(t) {
  var e;
  let n = null != (e = null == t ? true : t.id) ? e : b.lds,
    {
      entitlementsLoaded: i
    } = _({
      guildId: n,
      canFetch: (0, l.e7)([u.Z], () => u.Z.can(b.Plq.ADMINISTRATOR, t))
    }),
    o = (0, l.e7)([p.Z], () => p.Z.getLastGuildDismissedTime(n)),
    a = (0, l.Wu)([O.Z], () => {
      let t = O.Z.getEntitlementsForGuild(n),
        e = O.Z.getEntitlementsForGuild(n, false),
        i = t.map(t => t.applicationId);
      return e.filter(t => !i.includes(t.applicationId))
    }),
    s = (0, l.cj)([d.Z], () => d.Z.getSKUs()),
    c = r.useMemo(() => a.filter(t => {
      let e = s[t.skuId];
      return null != e && e.available
    }), [a, s]);
  return i ? c.filter(t => null != t.endsAt && t.endsAt.getTime() > Math.max(null != o ? o : 0, Date.now() - 2592e6)) : []
}
let P = () => {
  let [t, e] = Chunk647438.useState(0);
  return Chunk647438.useEffect(() => {
    exports(1), Promise.all([(0, Chunk496929.p0)({
      withSku: true,
      withApplication: true,
      entitlementType: Chunk981631.qc2.APPLICATION_SUBSCRIPTION
    }), (0, Chunk496929.p0)({
      withSku: true,
      withApplication: true,
      entitlementType: Chunk981631.qc2.PURCHASE
    })]).catch(() => {
      exports(3)
    }).then(() => {
      exports(2)
    })
  }, []), {
    loadState: module
  }
};

function v(t, e) {
  let n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    [i, o] = r.useState([]),
    [u, s] = r.useState(false);
  return r.useLayoutEffect(() => {
    null != t && n && (s(true), (0, S.tn)(t, e).then(o).finally(() => {
      s(false)
    }))
  }, [t, e, n]), {
    guilds: (0, l.Wu)([a.Z], () => i.map(t => a.Z.getGuild(t)).filter(t => null != t), [i]),
    isFetching: u
  }
}
let E = t => t.items;

function m(t, e) {
  return C(t, e, E)
}
let T = t => {
  var e, n;
  return null != (n = null == (e = t.renewalMutations) ? true : e.items) ? n : []
};

function h(t, e) {
  return C(t, e, T)
}

function C(t, e, n) {
  let [i, o] = (0, l.Wu)([c.Z, s.Z], () => null == t ? [] : N({
    groupSku: t,
    SubscriptionStore: c.Z,
    SubscriptionPlanStore: s.Z,
    mapSubscriptionItems: n,
    guildId: e
  }), [t, n, e]);
  return r.useMemo(() => {
    if (null != i && null != o) return {
      subscription: i,
      subscriptionPlan: o
    }
  }, [i, o])
}

function N(t) {
  var e, n;
  let {
    groupSku: i,
    SubscriptionStore: r,
    SubscriptionPlanStore: l,
    mapSubscriptionItems: o,
    guildId: a
  } = t, {
    bundledSkuIds: u,
    flags: s
  } = i;
  for (let t of null != (e = r.getActiveApplicationSubscriptions()) ? e : []) {
    if ((0, I.KK)(s) && null != a && (null == (n = t.metadata) ? true : n.application_subscription_guild_id) !== a) continue;
    let e = o(t).map(t => l.get(t.planId)).find(t => null != t && u.includes(t.skuId));
    if (null != e) return [t, e]
  }
  return []
}