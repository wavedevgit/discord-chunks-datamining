/** Chunk was on web.js **/
/** chunk id: 270144, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CR: () => v,
  E8: () => N,
  Ev: () => I,
  LM: () => b,
  cr: () => C,
  ec: () => S,
  h6: () => y,
  jd: () => E,
  qz: () => O
}), require("./539854.js"), require("./388685.js"), require("./457542.js"), require("./997841.js");
var Chunk473749 = require("./473749.js"),
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
  Chunk981631 = require("./981631.js");
let g = 2592e6;
var E = function(e) {
  return e[e.NOT_LOADED = 0] = "NOT_LOADED", e[e.LOADING = 1] = "LOADING", e[e.LOADED = 2] = "LOADED", e[e.ERROR = 3] = "ERROR", e
}({});
let b = e => {
  let {
    guildId: t,
    canFetch: n = true,
    forceRefetch: o = false
  } = e, a = (0, i.e7)([_.Z], () => null != t ? _.Z.getEntitlementsForGuildFetchState(t) : null, [t]);
  return r.useEffect(() => {
    if (null == t || t === h.ME) return;
    let e = _.Z.getEntitlementsForGuildFetchState(t);
    n && (e === _.M.NOT_FETCHED || o) && (0, f.i1)(t)
  }, [t, n, o]), {
    entitlementsLoaded: a === _.M.FETCHED
  }
};

function y(e) {
  var t;
  let n = null != (t = null == e ? true : e.id) ? t : h.lds,
    {
      entitlementsLoaded: o
    } = b({
      guildId: n,
      canFetch: (0, i.e7)([s.Z], () => s.Z.can(h.Plq.ADMINISTRATOR, e))
    }),
    a = (0, i.e7)([d.Z], () => d.Z.getLastGuildDismissedTime(n)),
    l = (0, i.Wu)([_.Z], () => {
      let e = _.Z.getEntitlementsForGuild(n),
        t = _.Z.getEntitlementsForGuild(n, false),
        r = e.map(e => e.applicationId);
      return t.filter(e => !r.includes(e.applicationId))
    }),
    c = (0, i.cj)([u.Z], () => u.Z.getSKUs()),
    f = r.useMemo(() => l.filter(e => {
      let t = c[e.skuId];
      return null != t && t.available
    }), [l, c]);
  return o ? f.filter(e => null != e.endsAt && e.endsAt.getTime() > Math.max(null != a ? a : 0, Date.now() - g)) : []
}
let O = () => {
  let [e, t] = Chunk473749.useState(0);
  return Chunk473749.useEffect(() => {
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

function v(e, t) {
  let n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    [o, s] = r.useState([]),
    [l, c] = r.useState(false);
  return r.useLayoutEffect(() => {
    null != e && n && (c(true), (0, p.tn)(e, t).then(s).finally(() => {
      c(false)
    }))
  }, [e, t, n]), {
    guilds: (0, i.Wu)([a.Z], () => o.map(e => a.Z.getGuild(e)).filter(e => null != e), [o]),
    isFetching: l
  }
}
let S = e => e.items;

function I(e, t) {
  return A(e, t, S)
}
let T = e => {
  var t, n;
  return null != (n = null == (t = e.renewalMutations) ? true : t.items) ? n : []
};

function C(e, t) {
  return A(e, t, T)
}

function A(e, t, n) {
  let [o, a] = (0, i.Wu)([c.Z, l.Z], () => null == e ? [] : N({
    groupSku: e,
    SubscriptionStore: c.Z,
    SubscriptionPlanStore: l.Z,
    mapSubscriptionItems: n,
    guildId: t
  }), [e, n, t]);
  return r.useMemo(() => {
    if (null != o && null != a) return {
      subscription: o,
      subscriptionPlan: a
    }
  }, [o, a])
}

function N(e) {
  var t, n;
  let {
    groupSku: r,
    SubscriptionStore: i,
    SubscriptionPlanStore: o,
    mapSubscriptionItems: a,
    guildId: s
  } = e, {
    bundledSkuIds: l,
    flags: c
  } = r;
  for (let e of null != (t = i.getActiveApplicationSubscriptions()) ? t : []) {
    if ((0, m.KK)(c) && null != s && (null == (n = e.metadata) ? true : n.application_subscription_guild_id) !== s) continue;
    let t = a(e).map(e => o.get(e.planId)).find(e => null != e && l.includes(e.skuId));
    if (null != t) return [e, t]
  }
  return []
}