/** Chunk was on 9452 **/
/** chunk id: 483161, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk657707 = require("./657707.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk778825 = require("./778825.js"),
  Chunk398140 = require("./398140.jsx"),
  Chunk564344 = require("./564344.jsx"),
  Chunk854014 = require("./854014.jsx"),
  Chunk509613 = require("./509613.js"),
  Chunk28682 = require("./28682.js"),
  Chunk518950 = require("./518950.js"),
  Chunk25990 = require("./25990.js"),
  Chunk594174 = require("./594174.js"),
  Chunk313789 = require("./313789.js"),
  Chunk620163 = require("./620163.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk89449 = require("./89449.js");
let g = (0, Chunk509613.x1)(Chunk313789.n.PROFILE_PANE, {
    buildLayout: () => [],
    render: Chunk564344.Z
  }),
  b = (0, Chunk509613.wf)(Chunk313789.n.PROFILE_PANEL, {
    icon: Chunk657707.tBG,
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["vi7f+v"]),
    buildLayout: () => [g],
    notice: {
      stores: [Chunk778825.Z, Chunk25990.Z],
      element: Chunk398140.Z
    },
    trailing: {
      type: Chunk28682.PU.BADGE_NEW,
      dismissibleContentTypes: (0, Chunk620163.OF)(),
      badgeComponent: Chunk620163.W8
    },
    legacySearchKey: Chunk726985.s6.PROFILE_CUSTOMIZATION,
    stronglyDiscouragedCustomTab: e => {
      var t;
      let {
        active: n,
        onClick: s
      } = e, a = (0, l.e7)([y.default], () => y.default.getCurrentUser()), {
        avatarSrc: o,
        avatarDecorationSrc: d
      } = (0, O.Z)({
        userId: null == a ? true : a.id,
        size: u.EFr.SIZE_48
      });
      return null == a ? null : (0, i.jsx)(c.C, {
        onClick: s,
        active: n,
        children: (0, i.jsxs)("div", {
          className: I.profileCustomizationTab,
          children: [(0, i.jsx)(u.qEK, {
            src: o,
            avatarDecoration: d,
            size: u.EFr.SIZE_48,
            "aria-label": S.intl.string(S.t.lqaIxM)
          }), (0, i.jsxs)("div", {
            className: I.textContainer,
            children: [(0, i.jsx)(u.Text, {
              color: "header-primary",
              variant: "text-md/medium",
              lineClamp: 1,
              children: null != (t = a.globalName) ? t : a.username
            }), (0, i.jsxs)("div", {
              className: I.editProfilesRow,
              children: [(0, i.jsx)(u.Text, {
                variant: "text-sm/normal",
                color: "currentColor",
                children: S.intl.string(S.t.Ip9nBQ)
              }), (0, i.jsx)(r.vdY, {
                size: "xxs",
                color: "currentColor"
              })]
            })]
          })]
        })
      })
    }
  })