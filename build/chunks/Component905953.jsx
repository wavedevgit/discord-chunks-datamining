/** Chunk was on 837 **/
/** chunk id: 905953, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js"), require("./457542.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk296009 = require("./296009.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk907862 = require("./907862.js"),
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

function y(e) {
  var t;
  let {
    targetElementRef: n,
    onClose: y
  } = e, [C, S] = l.useState(false), {
    trackUserProfileEditAction: E
  } = (0, u.KZ)(), T = (0, r.e7)([b.default], () => b.default.getId()), {
    config: N,
    application: O
  } = (0, h.G)(), {
    fetched: P,
    hasAlreadyLinked: I,
    canStartAuthorization: w,
    startAuthorization: k
  } = (0, c.F)(O), R = (0, x.ZP)(T), A = null == R || null == (t = R.widgets) ? true : t.some(e => e instanceof m.q && e.applicationId === (null == O ? true : O.id));
  return null != N && null != N.edit_profile_upsell_image && null != O && P ? (0, a.jsx)(d.ZP, {
    contentTypes: I ? A ? [] : [s.z.APPLICATION_WIDGET_EDIT_PROFILE_POPOVER_LINKED] : w ? [s.z.APPLICATION_WIDGET_EDIT_PROFILE_POPOVER_UNLINKED] : [],
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: l
      } = e;
      if (null == t) return null;
      let r = t === s.z.APPLICATION_WIDGET_EDIT_PROFILE_POPOVER_LINKED;
      return (0, a.jsx)(o.J2, {
        targetElementRef: n,
        position: "right",
        gradientColor: "blue",
        graphic: {
          type: "image",
          src: N.edit_profile_upsell_image
        },
        title: _.intl.format(_.t.TXDztH, {
          applicationName: O.name
        }),
        body: r ? _.intl.string(_.t["63Kso0"]) : _.intl.string(_.t.HwXoeC),
        onRequestClose: () => {
          l(v.L.USER_DISMISS)
        },
        actions: [r ? {
          text: _.intl.string(_.t.VSLDly),
          onClick: () => {
            S(true), (0, f.openUserProfileModal)({
              userId: T,
              section: j.oh.WIDGETS
            }).then(() => {
              l(v.L.TAKE_ACTION), y();
              let e = new m.q({
                applicationId: O.id,
                type: i.l.APPLICATION
              });
              (0, p.qH)(e.type, e), E(function(e) {
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
              }, e.getProfileEditAnalyticsOptions())), (0, g.L$)(j.qb.WIDGET_ADDED)
            }).finally(() => S(false))
          },
          loading: C
        } : {
          text: _.intl.string(_.t["DSJi3+"]),
          onClick: () => {
            k({
              onConfirm: () => {
                S(true), (0, f.openUserProfileModal)({
                  userId: T,
                  section: j.oh.WIDGETS
                }).then(() => {
                  l(v.L.TAKE_ACTION), y()
                }).finally(() => S(false))
              }
            })
          },
          loading: C
        }]
      })
    }
  }) : null
}