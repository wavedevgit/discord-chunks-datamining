/** Chunk was on 5938 **/
/** chunk id: 905953, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js"), require("./457542.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk907862 = require("./907862.js"),
  Chunk20471 = require("./20471.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk931847 = require("./931847.js"),
  Chunk50130 = require("./50130.js"),
  Chunk687158 = require("./687158.js"),
  Chunk892001 = require("./892001.js"),
  Chunk314897 = require("./314897.js"),
  Chunk921944 = require("./921944.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx");

function g(e) {
  var t;
  let {
    targetElementRef: n,
    onClose: g
  } = e, [v, j] = r.useState(false), _ = (0, i.e7)([h.default], () => h.default.getId()), {
    config: y,
    application: C
  } = (0, u.G)(), {
    loading: E,
    hasAlreadyLinked: S,
    canStartAuthorization: T,
    startAuthorization: O
  } = (0, o.FG)(C), N = (0, m.ZP)(_), P = null == N || null == (t = N.widgets) ? true : t.some(e => e instanceof d.q && e.applicationId === (null == C ? true : C.id));
  return null == y || null == y.edit_profile_upsell_image || null == C || E ? null : (0, a.jsx)(c.ZP, {
    contentTypes: S ? P ? [] : [l.z.APPLICATION_WIDGET_EDIT_PROFILE_POPOVER_LINKED] : T ? [l.z.APPLICATION_WIDGET_EDIT_PROFILE_POPOVER_UNLINKED] : [],
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: r
      } = e;
      if (null == t) return null;
      let i = t === l.z.APPLICATION_WIDGET_EDIT_PROFILE_POPOVER_LINKED;
      return (0, a.jsx)(s.J2, {
        targetElementRef: n,
        position: "right",
        gradientColor: "blue",
        graphic: {
          type: "image",
          src: y.edit_profile_upsell_image
        },
        title: b.intl.format(b.t.TXDztL, {
          applicationName: C.name
        }),
        body: i ? b.intl.string(b.t["63Kso6"]) : b.intl.string(b.t.HwXoeH),
        actions: [i ? {
          text: b.intl.string(b.t.VSLDl5),
          onClick: () => {
            j(true), (0, p.openUserProfileModal)({
              userId: _,
              section: f.oh.WIDGETS
            }).then(() => {
              r(x.L.TAKE_ACTION), g()
            }).finally(() => j(false))
          },
          loading: v
        } : {
          text: b.intl.string(b.t.DSJi39),
          onClick: () => {
            O(), j(true), (0, p.openUserProfileModal)({
              userId: _,
              section: f.oh.WIDGETS
            }).then(() => {
              r(x.L.TAKE_ACTION), g()
            }).finally(() => j(false))
          },
          loading: v
        }]
      })
    }
  })
}