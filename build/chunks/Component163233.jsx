/** Chunk was on 22477 **/
/** chunk id: 163233, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => C
}), require("./321073.js"), require("./896048.js"), require("./492834.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk342494 = require("./342494.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk704824 = require("./704824.js"),
  Chunk362490 = require("./362490.js"),
  Chunk395332 = require("./395332.js"),
  Chunk429913 = require("./429913.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk183555 = require("./183555.jsx"),
  Chunk633075 = require("./633075.js"),
  Chunk735321 = require("./735321.js"),
  Chunk667049 = require("./667049.js"),
  Chunk657331 = require("./657331.js"),
  Chunk384377 = require("./384377.js"),
  Chunk961350 = require("./961350.js"),
  Chunk403362 = require("./403362.js"),
  Chunk49999 = require("./49999.js"),
  Chunk518477 = require("./518477.js"),
  Chunk985018 = require("./985018.jsx");

function C(e) {
  let {
    targetElementRef: t,
    onClose: n
  } = e, [C, S] = l.useState(false), {
    trackUserProfileEditAction: O
  } = (0, p.NJ)(), E = (0, i.bG)([v.default], () => v.default.getId()), N = function() {
    let e, t, n = (0, i.bG)([v.default], () => v.default.getId()),
      a = (0, x.A)(n),
      r = l.useMemo(() => a.filter(e => e instanceof h.R), [a]),
      s = (e = (0, d.ul)({
        location: "UserProfileAccountPopoutApplicationWidgetCoachmark"
      }), l.useMemo(() => null == e ? true : e.filter(e => e.isEligibleForEditProfileUpsell()), [e])),
      m = l.useMemo(() => {
        var e;
        return null != (e = null == s ? true : s.map(e => e.applicationId)) ? e : []
      }, [s]),
      p = (t = (0, u.A)(m), l.useMemo(() => t.filter(j.Vq), [t])),
      {
        tokens: f,
        fetched: b
      } = (0, o.j)(m),
      g = (0, c.U9)(p);
    return l.useMemo(() => {
      if (null == s || null == f || !b) return null;
      let e = [],
        t = [];
      for (let n of s) {
        let a = f.find(e => e.application.id === n.applicationId),
          l = r.find(e => e.applicationId === n.applicationId),
          i = p.find(e => e.id === n.applicationId),
          s = g.find(e => e.context.application.id === n.applicationId);
        if (null == i) return null;
        null != a && null == l ? e.push({
          type: "linked",
          config: n,
          application: i,
          dismissibleContent: n.editProfileLinkedDc
        }) : null == a && (null == s ? true : s.preferredFlow) != null && t.push({
          type: "unlinked",
          config: n,
          application: i,
          dismissibleContent: n.editProfileUnlinkedDc,
          authFlow: s.preferredFlow
        })
      }
      return [...e, ...t]
    }, [s, f, b, r, p, g])
  }(), {
    analyticsLocations: T
  } = (0, s.Ay)();
  return null == N || 0 === N.length ? null : (0, a.jsx)(m.Ay, {
    contentTypes: N.map(e => e.dismissibleContent),
    children: e => {
      let {
        visibleContent: l,
        markAsDismissed: i
      } = e, s = N.find(e => e.dismissibleContent === l);
      if (null == s) return null;
      let o = "linked" === s.type,
        c = () => (0, b.openUserProfileModal)({
          userId: E,
          tabSection: _.RP.WIDGETS
        }).then(() => {
          i(y.i.TAKE_ACTION), n()
        });
      return (0, a.jsx)(r.AM, {
        targetElementRef: t,
        position: "right",
        gradientColor: "blue",
        graphic: null != s.config.editProfileUpsellImage ? {
          type: "image",
          src: s.config.editProfileUpsellImage
        } : true,
        title: A.intl.format(A.t.TXDztH, {
          applicationName: s.application.name
        }),
        body: o ? A.intl.string(A.t["63Kso0"]) : A.intl.string(A.t.HwXoeC),
        onRequestClose: () => i(y.i.USER_DISMISS),
        actions: [o ? {
          text: A.intl.string(A.t.VSLDly),
          onClick: () => {
            S(true), c().then(() => {
              let e;
              return e = new h.R({
                applicationId: s.application.id
              }), void((0, f.Y5)(e), O(function(e) {
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
              }, e.getProfileEditAnalyticsOptions())), (0, g.XA)(_.jM.WIDGET_ADDED))
            }).finally(() => S(false))
          },
          loading: C
        } : {
          text: A.intl.string(A.t["DSJi3+"]),
          onClick: () => {
            s.authFlow.initiate({
              onConfirm: () => {
                S(true), c().finally(() => S(false))
              },
              analyticsLocations: T
            })
          },
          loading: C
        }]
      })
    }
  })
}