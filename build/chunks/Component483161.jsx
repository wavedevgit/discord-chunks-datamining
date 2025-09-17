/** Chunk was on 47129 **/
/** chunk id: 483161, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
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
  Chunk518950 = require("./518950.js"),
  Chunk25990 = require("./25990.js"),
  Chunk594174 = require("./594174.js"),
  Chunk313789 = require("./313789.js"),
  Chunk620163 = require("./620163.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk88651 = require("./88651.js");
let N = (0, Chunk509613.x1)(Chunk313789.n.PROFILE_PANE, {
    getLayout: () => [],
    render: Chunk564344.Z
  }),
  p = (0, Chunk509613.wf)(Chunk313789.n.PROFILE_PANEL, {
    icon: Chunk657707.tBG,
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["vi7f+v"]),
    getLayout: () => [N],
    notice: {
      stores: [Chunk778825.Z, Chunk25990.Z],
      element: Chunk398140.Z
    },
    trailing: {
      newIndicatorDismissibleContentTypes: (0, Chunk620163.OF)(),
      newIndicatorBadgeOverride: (0, Chunk951288.jsx)(Chunk620163.W8, {})
    },
    legacySearchKey: Chunk726985.s6.PROFILE_CUSTOMIZATION,
    stronglyDiscouragedCustomTab: e => {
      var t;
      let {
        active: n,
        onClick: a
      } = e, s = (0, l.e7)([y.default], () => y.default.getCurrentUser()), {
        avatarSrc: u,
        avatarDecorationSrc: d
      } = (0, g.Z)({
        userId: null == s ? true : s.id,
        size: o.EFr.SIZE_48
      });
      return null == s ? null : (0, r.jsx)(c.C, {
        onClick: a,
        active: n,
        children: (0, r.jsxs)("div", {
          className: b.profileCustomizationTab,
          children: [(0, r.jsx)(o.qEK, {
            src: u,
            avatarDecoration: d,
            size: o.EFr.SIZE_48,
            "aria-label": T.intl.string(T.t.lqaIxM)
          }), (0, r.jsxs)("div", {
            className: b.textContainer,
            children: [(0, r.jsx)(o.Text, {
              color: "header-primary",
              variant: "text-md/medium",
              lineClamp: 1,
              children: null != (t = s.globalName) ? t : s.username
            }), (0, r.jsxs)("div", {
              className: b.editProfilesRow,
              children: [(0, r.jsx)(o.Text, {
                variant: "text-sm/normal",
                color: "currentColor",
                children: T.intl.string(T.t.Ip9nBQ)
              }), (0, r.jsx)(i.vdY, {
                size: "xxs",
                color: "currentColor"
              })]
            })]
          })]
        })
      })
    }
  })