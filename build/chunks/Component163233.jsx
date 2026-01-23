/** Chunk was on 65599 **/
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
  } = (0, p.NJ)(), E = (0, r.bG)([v.default], () => v.default.getId()), T = function() {
    let e, t, n = (0, r.bG)([v.default], () => v.default.getId()),
      a = (0, g.A)(n),
      i = l.useMemo(() => a.filter(e => e instanceof h.R), [a]),
      s = (e = (0, d.ul)({
        location: "UserProfileAccountPopoutApplicationWidgetCoachmark"
      }), l.useMemo(() => null == e ? true : e.filter(e => e.isEligibleForEditProfileUpsell()), [e])),
      m = l.useMemo(() => {
        var e;
        return null != (e = null == s ? true : s.map(e => e.applicationId)) ? e : []
      }, [s]),
      p = (t = (0, u.A)(m), l.useMemo(() => t.filter(j.Vq), [t])),
      {
        tokens: x,
        fetched: f
      } = (0, o.j)(m),
      b = (0, c.U9)(p);
    return l.useMemo(() => {
      if (null == s || null == x || !f) return null;
      let e = [],
        t = [];
      for (let n of s) {
        let a = x.find(e => e.application.id === n.applicationId),
          l = i.find(e => e.applicationId === n.applicationId),
          r = p.find(e => e.id === n.applicationId),
          s = b.find(e => e.context.application.id === n.applicationId);
        if (null == r) return null;
        null != a && null == l ? e.push({
          type: "linked",
          config: n,
          application: r,
          dismissibleContent: n.editProfileLinkedDc
        }) : null == a && (null == s ? true : s.preferredFlow) != null && t.push({
          type: "unlinked",
          config: n,
          application: r,
          dismissibleContent: n.editProfileUnlinkedDc,
          authFlow: s.preferredFlow
        })
      }
      return [...e, ...t]
    }, [s, x, f, i, p, b])
  }(), {
    analyticsLocations: N
  } = (0, s.Ay)();
  return null == T || 0 === T.length ? null : (0, a.jsx)(m.Ay, {
    contentTypes: T.map(e => e.dismissibleContent),
    children: e => {
      let {
        visibleContent: l,
        markAsDismissed: r
      } = e, s = T.find(e => e.dismissibleContent === l);
      if (null == s) return null;
      let o = "linked" === s.type,
        c = () => (0, f.openUserProfileModal)({
          userId: E,
          tabSection: y.RP.WIDGETS
        }).then(() => {
          r(_.i.TAKE_ACTION), n()
        });
      return (0, a.jsx)(i.AM, {
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
        onRequestClose: () => r(_.i.USER_DISMISS),
        actions: [o ? {
          text: A.intl.string(A.t.VSLDly),
          onClick: () => {
            S(true), c().then(() => {
              let e;
              return e = new h.R({
                applicationId: s.application.id
              }), void((0, x.Y5)(e), O(function(e) {
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
              }, e.getProfileEditAnalyticsOptions())), (0, b.XA)(y.jM.WIDGET_ADDED))
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
              analyticsLocations: N
            })
          },
          loading: C
        }]
      })
    }
  })
}