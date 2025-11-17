/** Chunk was on web.js **/
/** chunk id: 270144, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CR: () => v,
  E8: () => N,
  Ev: () => T,
  LM: () => b,
  cr: () => A,
  ec: () => I,
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
    forceRefetch: a = false
  } = e, o = (0, i.e7)([p.Z], () => null != t ? p.Z.getEntitlementsForGuildFetchState(t) : null, [t]);
  return r.useEffect(() => {
    if (null == t || t === m.ME) return;
    let e = p.Z.getEntitlementsForGuildFetchState(t);
    n && (e === p.M.NOT_FETCHED || a) && (0, f.i1)(t)
  }, [t, n, a]), {
    entitlementsLoaded: o === p.M.FETCHED
  }
};

function y(e) {
  var t;
  let n = null != (t = null == e ? true : e.id) ? t : m.lds,
    {
      entitlementsLoaded: a
    } = b({
      guildId: n,
      canFetch: (0, i.e7)([s.Z], () => s.Z.can(m.Plq.ADMINISTRATOR, e))
    }),
    o = (0, i.e7)([d.Z], () => d.Z.getLastGuildDismissedTime(n)),
    l = (0, i.Wu)([p.Z], () => {
      let e = p.Z.getEntitlementsForGuild(n),
        t = p.Z.getEntitlementsForGuild(n, false),
        r = e.map(e => e.applicationId);
      return t.filter(e => !r.includes(e.applicationId))
    }),
    c = (0, i.cj)([u.Z], () => u.Z.getSKUs()),
    f = r.useMemo(() => l.filter(e => {
      let t = c[e.skuId];
      return null != t && t.available
    }), [l, c]);
  return a ? f.filter(e => null != e.endsAt && e.endsAt.getTime() > Math.max(null != o ? o : 0, Date.now() - g)) : []
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
    [a, s] = r.useState([]),
    [l, c] = r.useState(false);
  return r.useLayoutEffect(() => {
    null != e && n && (c(true), (0, _.tn)(e, t).then(s).finally(() => {
      c(false)
    }))
  }, [e, t, n]), {
    guilds: (0, i.Wu)([o.Z], () => a.map(e => o.Z.getGuild(e)).filter(e => null != e), [a]),
    isFetching: l
  }
}
let I = e => e.items;

function T(e, t) {
  return C(e, t, I)
}
let S = e => {
  var t, n;
  return null != (n = null == (t = e.renewalMutations) ? true : t.items) ? n : []
};

function A(e, t) {
  return C(e, t, S)
}

function C(e, t, n) {
  let [a, o] = (0, i.Wu)([c.Z, l.Z], () => null == e ? [] : N({
    groupSku: e,
    SubscriptionStore: c.Z,
    SubscriptionPlanStore: l.Z,
    mapSubscriptionItems: n,
    guildId: t
  }), [e, n, t]);
  return r.useMemo(() => {
    if (null != a && null != o) return {
      subscription: a,
      subscriptionPlan: o
    }
  }, [a, o])
}

function N(e) {
  var t, n;
  let {
    groupSku: r,
    SubscriptionStore: i,
    SubscriptionPlanStore: a,
    mapSubscriptionItems: o,
    guildId: s
  } = e, {
    bundledSkuIds: l,
    flags: c
  } = r;
  for (let e of null != (t = i.getActiveApplicationSubscriptions()) ? t : []) {
    if ((0, h.KK)(c) && null != s && (null == (n = e.metadata) ? true : n.application_subscription_guild_id) !== s) continue;
    let t = o(e).map(e => a.get(e.planId)).find(e => null != e && l.includes(e.skuId));
    if (null != t) return [e, t]
  }
  return []
}