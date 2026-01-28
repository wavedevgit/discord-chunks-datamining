/** Chunk was on 28979 **/
/** chunk id: 830001, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  f: () => v
});
var Chunk627968 = require("./627968.js"),
  Chunk934551 = require("./934551.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk631670 = require("./631670.js"),
  Chunk252452 = require("./252452.js"),
  Chunk159001 = require("./159001.js"),
  Chunk833336 = require("./833336.js"),
  Chunk103738 = require("./103738.jsx"),
  Chunk745109 = require("./745109.jsx"),
  Chunk419954 = require("./419954.js"),
  Chunk933297 = require("./933297.js"),
  Chunk854627 = require("./854627.js"),
  Chunk752319 = require("./752319.js"),
  Chunk287809 = require("./287809.js"),
  Chunk780964 = require("./780964.js"),
  Chunk358776 = require("./358776.js"),
  Chunk368631 = require("./368631.jsx"),
  Chunk633817 = require("./633817.js"),
  Chunk531525 = require("./531525.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk722125 = require("./722125.js");
let P = (0, Chunk419954.t_)(Chunk780964.X.PROFILE_PANEL, {
    usePredicate: () => !(0, N.dk)("LegacyProfilePanel"),
    useTitle: () => R.intl.string(R.t["vi7f+q"]),
    notice: {
      stores: [Chunk833336.A, Chunk752319.A],
      element: Chunk103738.A
    },
    initialize: () => () => u.h.wait(() => {
      (0, T.sy)(), (0, a.F7)(), o.A.clearSubsection(D.nc_.PROFILE_CUSTOMIZATION)
    }),
    StronglyDiscouragedCustomComponent: Chunk745109.A,
    buildLayout: () => []
  }),
  m = (0, Chunk419954.t_)(Chunk780964.X.PROFILE_PANEL, {
    usePredicate: () => (0, N.dk)("ProfilePanel"),
    useTitle: () => R.intl.string(R.t["vi7f+q"]),
    notice: {
      stores: [Chunk833336.A, Chunk752319.A],
      element: Chunk103738.A
    },
    initialize: () => () => u.h.wait(() => {
      (0, T.sy)(), (0, a.F7)(), o.A.clearSubsection(D.nc_.PROFILE_CUSTOMIZATION)
    }),
    buildLayout: () => [L.I]
  }),
  v = (0, Chunk419954.i4)(Chunk780964.X.PROFILE_SIDEBAR_ITEM, {
    useTitle: () => R.intl.string(R.t["vi7f+q"]),
    getLegacySearchKey: () => (0, N.WJ)("ProfilePanel") ? true : b.H.PROFILE_CUSTOMIZATION,
    icon: Chunk934551.UserIcon,
    StronglyDiscouragedCustomComponent: () => {
      var t;
      let e = (0, s.bG)([I.default], () => I.default.getCurrentUser()),
        {
          avatarSrc: i,
          avatarDecorationSrc: u
        } = (0, g.A)({
          userId: null == e ? true : e.id,
          size: r._3J.SIZE_48
        });
      return null == e ? null : (0, n.jsxs)("div", {
        className: p.a5,
        children: [(0, n.jsx)(r.euF, {
          src: i,
          avatarDecoration: u,
          size: r._3J.SIZE_48,
          "aria-label": R.intl.string(R.t.lqaIxI)
        }), (0, n.jsxs)("div", {
          className: p.FS,
          children: [(0, n.jsx)(r.Text, {
            color: "text-strong",
            variant: "text-md/medium",
            lineClamp: 1,
            children: null != (t = e.globalName) ? t : e.username
          }), (0, n.jsxs)("div", {
            className: p.Fk,
            children: [(0, n.jsx)(r.Text, {
              variant: "text-sm/normal",
              color: "currentColor",
              lineClamp: 1,
              children: R.intl.string(R.t.Ip9nBS)
            }), (0, n.jsx)(l.PencilIcon, {
              size: "xxs",
              color: "currentColor"
            })]
          })]
        })]
      })
    },
    trailing: {
      type: Chunk933297.S.BADGE_NEW,
      getDismissibleContentTypes: Chunk368631.Jn
    },
    buildLayout: () => (0, N.WJ)("ProfilePanel") ? [m] : [P]
  })