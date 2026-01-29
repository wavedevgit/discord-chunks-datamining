/** Chunk was on 4670 **/
/** chunk id: 830001, original params: e,t,i (module,exports,require) **/
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
  Chunk836602 = require("./836602.js"),
  Chunk854627 = require("./854627.js"),
  Chunk287809 = require("./287809.js"),
  Chunk780964 = require("./780964.js"),
  Chunk358776 = require("./358776.js"),
  Chunk368631 = require("./368631.jsx"),
  Chunk633817 = require("./633817.js"),
  Chunk531525 = require("./531525.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk722125 = require("./722125.js");
let D = (0, Chunk419954.t_)(Chunk780964.X.PROFILE_PANEL, {
    usePredicate: () => !(0, C.dk)("LegacyProfilePanel"),
    useTitle: () => f.intl.string(f.t["vi7f+q"]),
    notice: {
      stores: [Chunk833336.A, Chunk836602.A],
      element: Chunk103738.A
    },
    initialize: () => () => a.h.wait(() => {
      (0, d.sy)(), (0, u.F7)(), o.A.clearSubsection(m.nc_.PROFILE_CUSTOMIZATION)
    }),
    StronglyDiscouragedCustomComponent: Chunk745109.A,
    buildLayout: () => []
  }),
  R = (0, Chunk419954.t_)(Chunk780964.X.PROFILE_PANEL, {
    usePredicate: () => (0, C.dk)("ProfilePanel"),
    useTitle: () => f.intl.string(f.t["vi7f+q"]),
    notice: {
      stores: [Chunk833336.A, Chunk836602.A],
      element: Chunk103738.A
    },
    initialize: () => () => a.h.wait(() => {
      (0, d.sy)(), (0, u.F7)(), o.A.clearSubsection(m.nc_.PROFILE_CUSTOMIZATION)
    }),
    buildLayout: () => [b.I]
  }),
  v = (0, Chunk419954.i4)(Chunk780964.X.PROFILE_SIDEBAR_ITEM, {
    useTitle: () => f.intl.string(f.t["vi7f+q"]),
    getLegacySearchKey: () => (0, C.WJ)("ProfilePanel") ? true : p.H.PROFILE_CUSTOMIZATION,
    icon: Chunk934551.UserIcon,
    StronglyDiscouragedCustomComponent: () => {
      var e;
      let t = (0, s.bG)([I.default], () => I.default.getCurrentUser()),
        {
          avatarSrc: i,
          avatarDecorationSrc: a
        } = (0, g.A)({
          userId: null == t ? true : t.id,
          size: r._3J.SIZE_48
        });
      return null == t ? null : (0, n.jsxs)("div", {
        className: L.a5,
        children: [(0, n.jsx)(r.euF, {
          src: i,
          avatarDecoration: a,
          size: r._3J.SIZE_48,
          "aria-label": f.intl.string(f.t.lqaIxI)
        }), (0, n.jsxs)("div", {
          className: L.FS,
          children: [(0, n.jsx)(r.Text, {
            color: "text-strong",
            variant: "text-md/medium",
            lineClamp: 1,
            children: null != (e = t.globalName) ? e : t.username
          }), (0, n.jsxs)("div", {
            className: L.Fk,
            children: [(0, n.jsx)(r.Text, {
              variant: "text-sm/normal",
              color: "currentColor",
              lineClamp: 1,
              children: f.intl.string(f.t.Ip9nBS)
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
    buildLayout: () => (0, C.WJ)("ProfilePanel") ? [R] : [D]
  })