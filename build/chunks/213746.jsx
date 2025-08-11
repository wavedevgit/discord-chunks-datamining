/** Chunk was on 88934 **/
/** chunk id: 213746, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./35282.js"), require("./997841.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk794295 = require("./794295.js"),
  Chunk765717 = require("./765717.js"),
  Chunk283836 = require("./283836.js"),
  Chunk507608 = require("./507608.js"),
  Chunk955335 = require("./955335.js"),
  Chunk171246 = require("./171246.js"),
  Chunk55563 = require("./55563.js"),
  Chunk881294 = require("./881294.js"),
  Chunk133743 = require("./133743.js"),
  Chunk979007 = require("./979007.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk789362 = require("./789362.js");

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function j(e) {
  let {
    application: t
  } = e;
  return <div className={v.storeContainer}>{<y application={t} />}{<O application={t} />}</div>
}

function y(e) {
  let {
    application: t
  } = e, {
    subscriptions: n,
    otps: a
  } = (0, d.q)(t.id);
  return <div className={v.storeContainer}>{n.length > 0 && <div className={v.productSection}>{<p.r subscriptions={n} color={"header-primary"} />}{<div className={v.products}>{n.map(e => {
          let n = (0, m.KW)(e.skuFlags) ? "user" : "guild";
          return (0, r.jsx)(u.zz, {
            appId: t.id,
            listing: e,
            subscriptionType: n,
            onDetails: () => (0, f.Gp)(b.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.id, e.skuId))
          }, e.id)
        })}</div>}</div>}{a.length > 0 && <div className={v.productSection}>{<i.X6 variant={"heading-lg/semibold"} color={"header-primary"}>{x.intl.string(x.t.yUGTs7)}</i.X6>}{<div className={v.products}>{a.map(e => (0, r.jsx)(u.hd, {
          skuId: e.skuId,
          appId: t.id,
          onDetails: () => (0, f.Gp)(b.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.id, e.skuId))
        }, e.id))}</div>}</div>}{<c.Z path={b.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(":applicationId", ":skuId")} exact={true} render={e => (0, r.jsx)(I, C({}, e))} />}</div>
}

function I(e) {
  let {
    match: {
      params: {
        applicationId: t,
        skuId: i
      }
    }
  } = e, o = (0, l.e7)([h.Z], () => h.Z.get(i), [i]), c = (0, l.e7)([h.Z], () => null != i ? h.Z.getParentSKU(i) : true, [i]), d = a.useId(), u = a.useCallback(() => (0, f.Gp)(b.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, _.GlobalDiscoveryAppsSections.STORE)), [t]);
  return a.useLayoutEffect(() => {
    var e;
    switch (null == o ? true : o.type) {
      case b.epS.CONSUMABLE:
      case b.epS.DURABLE:
        return void(0, s.ZDy)(async () => {
          let {
            ItemDetailsModal: e
          } = await Promise.resolve().then(n.bind(n, 147496));
          return n => <e{...C({
            appId: t,
            skuId: i
          }, n)} />
        }, {
          modalKey: d,
          onCloseCallback: () => {
            S() || (0, f.Gp)(b.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, _.GlobalDiscoveryAppsSections.STORE))
          }
        });
      case b.epS.SUBSCRIPTION:
        if ((null == c ? true : c.flags) == null) return;
        return e = (0, m.KW)(c.flags) ? "user" : "guild", void(0, s.ZDy)(async () => {
          let {
            SubscriptionDetailsModal: a
          } = await Promise.resolve().then(n.bind(n, 519896));
          return n => <a{...C({
            appId: t,
            subscriptionType: e,
            skuId: i,
            guildId: true
          }, n)} />
        }, {
          modalKey: d,
          onCloseCallback: () => {
            S() || (0, f.Gp)(b.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, _.GlobalDiscoveryAppsSections.STORE))
          }
        })
    }
  }, [t, d, u, null == c ? true : c.flags, null == o ? true : o.flags, null == o ? true : o.type, i]), a.useLayoutEffect(() => () => {
    (0, s.Mr3)(d)
  }, [d]), null
}

function O(e) {
  let {
    application: t
  } = e, n = (0, g.nu)(), a = t.terms_of_service_url, l = t.privacy_policy_url;
  if (null == a && null == l) return null;
  let s = (e, t) => <o.Z href={t} trusted={!n}>{e}</o.Z>;
  return <div className={v.legalContainer}><i.xv color={"header-primary"} variant={"text-sm/normal"}>{null != a && null != l ? x.intl.format(x.t.nylPOT, {
        termsHook: e => s(e, a),
        privacyHook: e => s(e, l)
      }) : null != a ? x.intl.format(x.t["0cPyDw"], {
        termsHook: e => s(e, a)
      }) : null != l ? x.intl.format(x.t.loYGCw, {
        privacyHook: e => s(e, l)
      }) : null}</i.xv></div>
}

function S() {
  return window.location.pathname.startsWith("/login")
}