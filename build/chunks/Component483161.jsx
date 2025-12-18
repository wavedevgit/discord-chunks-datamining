/** Chunk was on 77069 **/
/** chunk id: 483161, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  z: () => b
});
var Chunk54381 = require("./54381.js"),
  Chunk657707 = require("./657707.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk809206 = require("./809206.js"),
  Chunk230711 = require("./230711.js"),
  Chunk18438 = require("./18438.js"),
  Chunk778825 = require("./778825.js"),
  Chunk398140 = require("./398140.jsx"),
  Chunk564344 = require("./564344.jsx"),
  Chunk509613 = require("./509613.js"),
  Chunk970013 = require("./970013.js"),
  Chunk518950 = require("./518950.js"),
  Chunk25990 = require("./25990.js"),
  Chunk594174 = require("./594174.js"),
  Chunk313789 = require("./313789.js"),
  Chunk526665 = require("./526665.js"),
  Chunk620163 = require("./620163.jsx"),
  Chunk97551 = require("./97551.js"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk897192 = require("./897192.js");
let m = (0, Chunk509613.wf)(Chunk313789.n.PROFILE_PANEL, {
    usePredicate: () => !(0, Chunk526665.gN)("LegacyProfilePanel"),
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["vi7f+q"]),
    notice: {
      stores: [Chunk778825.Z, Chunk25990.Z],
      element: Chunk398140.Z
    },
    initialize: () => () => Chunk570140.Z.wait(() => {
      (0, Chunk18438.It)(), (0, Chunk809206.P6)(), Chunk230711.Z.clearSubsection(Chunk981631.oAB.PROFILE_CUSTOMIZATION)
    }),
    StronglyDiscouragedCustomComponent: Chunk564344.Z,
    buildLayout: () => []
  }),
  D = (0, Chunk509613.wf)(Chunk313789.n.PROFILE_PANEL, {
    usePredicate: () => (0, Chunk526665.gN)("ProfilePanel"),
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["vi7f+q"]),
    notice: {
      stores: [Chunk778825.Z, Chunk25990.Z],
      element: Chunk398140.Z
    },
    initialize: () => () => Chunk570140.Z.wait(() => {
      (0, Chunk18438.It)(), (0, Chunk809206.P6)(), Chunk230711.Z.clearSubsection(Chunk981631.oAB.PROFILE_CUSTOMIZATION)
    }),
    buildLayout: () => [Chunk97551.i]
  }),
  b = (0, Chunk509613.m7)(Chunk313789.n.PROFILE_SIDEBAR_ITEM, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["vi7f+q"]),
    getLegacySearchKey: () => (0, Chunk526665.Gl)("ProfilePanel") ? true : Chunk726985.s6.PROFILE_CUSTOMIZATION,
    icon: Chunk657707.tBG,
    stronglyDiscouragedCustomComponent: () => {
      var t;
      let e = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()),
        {
          avatarSrc: n,
          avatarDecorationSrc: r
        } = (0, Chunk518950.Z)({
          userId: null == exports ? true : exports.id,
          size: Chunk481060.EFr.SIZE_48
        });
      return null == exports ? null : (0, Chunk54381.jsxs)("div", {
        className: Chunk897192.profileCustomizationTab,
        children: [(0, Chunk54381.jsx)(Chunk481060.qEK, {
          src: require,
          avatarDecoration: Chunk570140,
          size: Chunk481060.EFr.SIZE_48,
          "aria-label": Chunk388032.intl.string(Chunk388032.t.lqaIxI)
        }), (0, Chunk54381.jsxs)("div", {
          className: Chunk897192.textContainer,
          children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
            color: "text-strong",
            variant: "text-md/medium",
            lineClamp: 1,
            children: null != (t = exports.globalName) ? module : exports.username
          }), (0, Chunk54381.jsxs)("div", {
            className: Chunk897192.editProfilesRow,
            children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
              variant: "text-sm/normal",
              color: "currentColor",
              lineClamp: 1,
              children: Chunk388032.intl.string(Chunk388032.t.Ip9nBS)
            }), (0, Chunk54381.jsx)(Chunk657707.vdY, {
              size: "xxs",
              color: "currentColor"
            })]
          })]
        })]
      })
    },
    trailing: {
      type: Chunk970013.W.BADGE_NEW,
      getDismissibleContentTypes: Chunk620163.OF
    },
    buildLayout: () => (0, Chunk526665.Gl)("ProfilePanel") ? [D] : [m]
  })