/** Chunk was on 9452 **/
/** chunk id: 483161, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  z: () => b
});
var Chunk54381 = require("./54381.js"),
  Chunk657707 = require("./657707.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk778825 = require("./778825.js"),
  Chunk398140 = require("./398140.jsx"),
  Chunk564344 = require("./564344.jsx"),
  Chunk509613 = require("./509613.js"),
  Chunk28682 = require("./28682.js"),
  Chunk518950 = require("./518950.js"),
  Chunk25990 = require("./25990.js"),
  Chunk594174 = require("./594174.js"),
  Chunk313789 = require("./313789.js"),
  Chunk620163 = require("./620163.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk88651 = require("./88651.js");
let f = (0, Chunk509613.x1)(Chunk313789.n.PROFILE_PANE, {
    buildLayout: () => [],
    render: Chunk564344.Z
  }),
  A = (0, Chunk509613.wf)(Chunk313789.n.PROFILE_PANEL, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["vi7f+q"]),
    buildLayout: () => [f],
    notice: {
      stores: [Chunk778825.Z, Chunk25990.Z],
      element: Chunk398140.Z
    }
  }),
  b = (0, Chunk509613.m7)(Chunk313789.n.PROFILE_SIDEBAR_ITEM, {
    icon: Chunk657707.tBG,
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["vi7f+q"]),
    getLegacySearchKey: () => Chunk726985.s6.PROFILE_CUSTOMIZATION,
    buildLayout: () => [A],
    stronglyDiscouragedCustomComponent: () => {
      var t;
      let e = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()),
        {
          avatarSrc: n,
          avatarDecorationSrc: s
        } = (0, Chunk518950.Z)({
          userId: null == exports ? true : exports.id,
          size: Chunk481060.EFr.SIZE_48
        });
      return null == exports ? null : (0, Chunk54381.jsxs)("div", {
        className: Chunk88651.profileCustomizationTab,
        children: [(0, Chunk54381.jsx)(Chunk481060.qEK, {
          src: require,
          avatarDecoration: Chunk778825,
          size: Chunk481060.EFr.SIZE_48,
          "aria-label": Chunk388032.intl.string(Chunk388032.t.lqaIxI)
        }), (0, Chunk54381.jsxs)("div", {
          className: Chunk88651.textContainer,
          children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
            color: "header-primary",
            variant: "text-md/medium",
            lineClamp: 1,
            children: null != (t = exports.globalName) ? module : exports.username
          }), (0, Chunk54381.jsxs)("div", {
            className: Chunk88651.editProfilesRow,
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
      type: Chunk28682.PU.BADGE_NEW,
      getDismissibleContentTypes: Chunk620163.OF,
      badgeComponent: Chunk620163.W8
    }
  })