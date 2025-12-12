/** Chunk was on 88499 **/
/** chunk id: 905953, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./388685.js"), require("./457542.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk296009 = require("./296009.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk907862 = require("./907862.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk524995 = require("./524995.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk785717 = require("./785717.jsx"),
  Chunk931847 = require("./931847.js"),
  Chunk86419 = require("./86419.js"),
  Chunk50130 = require("./50130.js"),
  Chunk687158 = require("./687158.js"),
  Chunk892001 = require("./892001.js"),
  Chunk872269 = require("./872269.js"),
  Chunk314897 = require("./314897.js"),
  Chunk921944 = require("./921944.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx");

function C(e) {
  var t;
  let {
    targetElementRef: n,
    onClose: C
  } = e, [S, E] = r.useState(false), {
    trackUserProfileEditAction: O
  } = (0, m.KZ)(), T = (0, l.e7)([v.default], () => v.default.getId()), {
    config: N,
    application: P
  } = (0, x.G)(), {
    fetched: w,
    hasAlreadyLinked: I,
    canStartAuthorization: k,
    startAuthorization: R
  } = (0, d.F)(P), A = (0, f.ZP)(T), {
    analyticsLocations: D
  } = (0, c.ZP)(), Z = null == A || null == (t = A.widgets) ? true : t.some(e => e instanceof p.q && e.applicationId === (null == P ? true : P.id));
  return null != N && null != N.edit_profile_upsell_image && null != P && w ? (0, a.jsx)(u.ZP, {
    contentTypes: I ? Z ? [] : [s.z.APPLICATION_WIDGET_EDIT_PROFILE_POPOVER_LINKED] : k ? [s.z.APPLICATION_WIDGET_EDIT_PROFILE_POPOVER_UNLINKED] : [],
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: r
      } = e;
      if (null == t) return null;
      let l = t === s.z.APPLICATION_WIDGET_EDIT_PROFILE_POPOVER_LINKED;
      return (0, a.jsx)(o.J2, {
        targetElementRef: n,
        position: "right",
        gradientColor: "blue",
        graphic: {
          type: "image",
          src: N.edit_profile_upsell_image
        },
        title: y.intl.format(y.t.TXDztH, {
          applicationName: P.name
        }),
        body: l ? y.intl.string(y.t["63Kso0"]) : y.intl.string(y.t.HwXoeC),
        onRequestClose: () => {
          r(j.L.USER_DISMISS)
        },
        actions: [l ? {
          text: y.intl.string(y.t.VSLDly),
          onClick: () => {
            E(true), (0, g.openUserProfileModal)({
              userId: T,
              section: _.oh.WIDGETS
            }).then(() => {
              r(j.L.TAKE_ACTION), C();
              let e = new p.q({
                applicationId: P.id,
                type: i.l.APPLICATION
              });
              (0, h.qH)(e.type, e), O(function(e) {
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
              }, e.getProfileEditAnalyticsOptions())), (0, b.L$)(_.qb.WIDGET_ADDED)
            }).finally(() => E(false))
          },
          loading: S
        } : {
          text: y.intl.string(y.t["DSJi3+"]),
          onClick: () => {
            R({
              onConfirm: () => {
                E(true), (0, g.openUserProfileModal)({
                  userId: T,
                  section: _.oh.WIDGETS
                }).then(() => {
                  r(j.L.TAKE_ACTION), C()
                }).finally(() => E(false))
              },
              analyticsLocations: D
            })
          },
          loading: S
        }]
      })
    }
  }) : null
}