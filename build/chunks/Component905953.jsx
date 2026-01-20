/** Chunk was on 22979 **/
/** chunk id: 905953, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./539854.js"), require("./388685.js"), require("./457542.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk907862 = require("./907862.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk491662 = require("./491662.js"),
  Chunk524995 = require("./524995.js"),
  Chunk251296 = require("./251296.js"),
  Chunk835473 = require("./835473.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk785717 = require("./785717.jsx"),
  Chunk931847 = require("./931847.js"),
  Chunk86419 = require("./86419.js"),
  Chunk517157 = require("./517157.js"),
  Chunk892001 = require("./892001.js"),
  Chunk872269 = require("./872269.js"),
  Chunk314897 = require("./314897.js"),
  Chunk823379 = require("./823379.js"),
  Chunk921944 = require("./921944.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx");

function S(e) {
  let {
    targetElementRef: t,
    onClose: n
  } = e, [S, E] = r.useState(false), {
    trackUserProfileEditAction: T
  } = (0, p.KZ)(), O = (0, i.e7)([v.default], () => v.default.getId()), N = function() {
    let e = (0, i.e7)([v.default], () => v.default.getId()),
      t = (0, b.Z)(e),
      n = r.useMemo(() => t.filter(e => e instanceof h.q), [t]),
      a = function() {
        let e = (0, d.vl)({
          location: "UserProfileAccountPopoutApplicationWidgetCoachmark"
        });
        return r.useMemo(() => null == e ? true : e.filter(e => e.isEligibleForEditProfileUpsell()), [e])
      }(),
      l = r.useMemo(() => {
        var e;
        return null != (e = null == a ? true : a.map(e => e.applicationId)) ? e : []
      }, [a]),
      s = function(e) {
        let t = (0, u.Z)(e);
        return r.useMemo(() => t.filter(j.lm), [t])
      }(l),
      {
        tokens: m,
        fetched: p
      } = (0, o.O)(l),
      f = (0, c.lI)(s);
    return r.useMemo(() => {
      if (null == a || null == m || !p) return null;
      let e = [],
        t = [];
      for (let r of a) {
        let a = m.find(e => e.application.id === r.applicationId),
          i = n.find(e => e.applicationId === r.applicationId),
          l = s.find(e => e.id === r.applicationId),
          o = f.find(e => e.context.application.id === r.applicationId);
        if (null == l) return null;
        null != a && null == i ? e.push({
          type: "linked",
          config: r,
          application: l,
          dismissibleContent: r.editProfileLinkedDc
        }) : null == a && (null == o ? true : o.preferredFlow) != null && t.push({
          type: "unlinked",
          config: r,
          application: l,
          dismissibleContent: r.editProfileUnlinkedDc,
          authFlow: o.preferredFlow
        })
      }
      return [...e, ...t]
    }, [a, m, p, n, s, f])
  }(), {
    analyticsLocations: P
  } = (0, s.ZP)();
  return null == N || 0 === N.length ? null : (0, a.jsx)(m.ZP, {
    contentTypes: N.map(e => e.dismissibleContent),
    children: e => {
      let {
        visibleContent: r,
        markAsDismissed: i
      } = e, s = N.find(e => e.dismissibleContent === r);
      if (null == s) return null;
      let o = "linked" === s.type,
        c = () => (0, x.openUserProfileModal)({
          userId: O,
          tabSection: C.oh.WIDGETS
        }).then(() => {
          i(y.L.TAKE_ACTION), n()
        });
      return (0, a.jsx)(l.J2, {
        targetElementRef: t,
        position: "right",
        gradientColor: "blue",
        graphic: null != s.config.editProfileUpsellImage ? {
          type: "image",
          src: s.config.editProfileUpsellImage
        } : true,
        title: _.intl.format(_.t.TXDztH, {
          applicationName: s.application.name
        }),
        body: o ? _.intl.string(_.t["63Kso0"]) : _.intl.string(_.t.HwXoeC),
        onRequestClose: () => i(y.L.USER_DISMISS),
        actions: [o ? {
          text: _.intl.string(_.t.VSLDly),
          onClick: () => {
            E(true), c().then(() => (() => {
              let e = new h.q({
                applicationId: s.application.id
              });
              (0, f.qH)(e), T(function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {},
                    a = Object.keys(n);
                  "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                  }))), a.forEach(function(t) {
                    var a;
                    a = n[t], t in e ? Object.defineProperty(e, t, {
                      value: a,
                      enumerable: true,
                      configurable: true,
                      writable: true
                    }) : e[t] = a
                  })
                }
                return e
              }({
                action: "WIDGET_ADDED"
              }, e.getProfileEditAnalyticsOptions())), (0, g.L$)(C.qb.WIDGET_ADDED)
            })()).finally(() => E(false))
          },
          loading: S
        } : {
          text: _.intl.string(_.t["DSJi3+"]),
          onClick: () => {
            s.authFlow.initiate({
              onConfirm: () => {
                E(true), c().finally(() => E(false))
              },
              analyticsLocations: P
            })
          },
          loading: S
        }]
      })
    }
  })
}