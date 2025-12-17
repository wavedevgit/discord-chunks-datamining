/** Chunk was on 6043 **/
/** chunk id: 905953, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
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

function _(e) {
  var t;
  let {
    targetElementRef: n,
    onClose: _
  } = e, [S, E] = r.useState(false), {
    trackUserProfileEditAction: T
  } = (0, m.KZ)(), O = (0, i.e7)([v.default], () => v.default.getId()), {
    config: N,
    application: w
  } = (0, f.G)(), {
    fetched: P,
    hasAlreadyLinked: I,
    canStartAuthorization: k,
    startAuthorization: R
  } = (0, d.F)(w), A = (0, x.ZP)(O), {
    analyticsLocations: Z
  } = (0, c.ZP)(), D = null == A || null == (t = A.widgets) ? true : t.some(e => e instanceof p.q && e.applicationId === (null == w ? true : w.id));
  return null != N && null != N.edit_profile_upsell_image && null != w && P ? (0, a.jsx)(u.ZP, {
    contentTypes: I ? D ? [] : [s.z.APPLICATION_WIDGET_EDIT_PROFILE_POPOVER_LINKED] : k ? [s.z.APPLICATION_WIDGET_EDIT_PROFILE_POPOVER_UNLINKED] : [],
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: r
      } = e;
      if (null == t) return null;
      let i = t === s.z.APPLICATION_WIDGET_EDIT_PROFILE_POPOVER_LINKED;
      return (0, a.jsx)(o.J2, {
        targetElementRef: n,
        position: "right",
        gradientColor: "blue",
        graphic: {
          type: "image",
          src: N.edit_profile_upsell_image
        },
        title: C.intl.format(C.t.TXDztH, {
          applicationName: w.name
        }),
        body: i ? C.intl.string(C.t["63Kso0"]) : C.intl.string(C.t.HwXoeC),
        onRequestClose: () => {
          r(j.L.USER_DISMISS)
        },
        actions: [i ? {
          text: C.intl.string(C.t.VSLDly),
          onClick: () => {
            E(true), (0, b.openUserProfileModal)({
              userId: O,
              tabSection: y.oh.WIDGETS
            }).then(() => {
              r(j.L.TAKE_ACTION), _();
              let e = new p.q({
                applicationId: w.id,
                type: l.l.APPLICATION
              });
              (0, h.qH)(e.type, e), T(function(e) {
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
              }, e.getProfileEditAnalyticsOptions())), (0, g.L$)(y.qb.WIDGET_ADDED)
            }).finally(() => E(false))
          },
          loading: S
        } : {
          text: C.intl.string(C.t["DSJi3+"]),
          onClick: () => {
            R({
              onConfirm: () => {
                E(true), (0, b.openUserProfileModal)({
                  userId: O,
                  tabSection: y.oh.WIDGETS
                }).then(() => {
                  r(j.L.TAKE_ACTION), _()
                }).finally(() => E(false))
              },
              analyticsLocations: Z
            })
          },
          loading: S
        }]
      })
    }
  }) : null
}