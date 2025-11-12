/** Chunk was on 99904 **/
/** chunk id: 905953, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js"), require("./457542.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk907862 = require("./907862.js"),
  Chunk535139 = require("./535139.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk931847 = require("./931847.js"),
  Chunk50130 = require("./50130.js"),
  Chunk687158 = require("./687158.js"),
  Chunk892001 = require("./892001.js"),
  Chunk314897 = require("./314897.js"),
  Chunk921944 = require("./921944.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx");

function b(e) {
  var t;
  let {
    targetElementRef: n,
    onClose: b
  } = e, [v, j] = i.useState(false), _ = (0, r.e7)([h.default], () => h.default.getId()), {
    config: y,
    application: C
  } = (0, u.G)(), {
    fetched: S,
    hasAlreadyLinked: E,
    canStartAuthorization: T,
    startAuthorization: O
  } = (0, o.F)(C), N = (0, m.ZP)(_), P = null == N || null == (t = N.widgets) ? true : t.some(e => e instanceof d.q && e.applicationId === (null == C ? true : C.id));
  return null != y && null != y.edit_profile_upsell_image && null != C && S ? (0, a.jsx)(c.ZP, {
    bypassAutoDismiss: true,
    contentTypes: E ? P ? [] : [l.z.APPLICATION_WIDGET_EDIT_PROFILE_POPOVER_LINKED] : T ? [l.z.APPLICATION_WIDGET_EDIT_PROFILE_POPOVER_UNLINKED] : [],
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: i
      } = e;
      if (null == t) return null;
      let r = t === l.z.APPLICATION_WIDGET_EDIT_PROFILE_POPOVER_LINKED;
      return (0, a.jsx)(s.J2, {
        targetElementRef: n,
        position: "right",
        gradientColor: "blue",
        graphic: {
          type: "image",
          src: y.edit_profile_upsell_image
        },
        title: f.intl.format(f.t.TXDztH, {
          applicationName: C.name
        }),
        body: r ? f.intl.string(f.t["63Kso0"]) : f.intl.string(f.t.HwXoeC),
        onRequestClose: () => {
          i(x.L.USER_DISMISS)
        },
        actions: [r ? {
          text: f.intl.string(f.t.VSLDly),
          onClick: () => {
            j(true), (0, p.openUserProfileModal)({
              userId: _,
              section: g.oh.WIDGETS
            }).then(() => {
              i(x.L.TAKE_ACTION), b()
            }).finally(() => j(false))
          },
          loading: v
        } : {
          text: f.intl.string(f.t["DSJi3+"]),
          onClick: () => {
            O(), j(true), (0, p.openUserProfileModal)({
              userId: _,
              section: g.oh.WIDGETS
            }).then(() => {
              i(x.L.TAKE_ACTION), b()
            }).finally(() => j(false))
          },
          loading: v
        }]
      })
    }
  }) : null
}