/** Chunk was on 36054 **/
/** chunk id: 977700, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => j
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk826673 = require("./826673.js"),
  Chunk750506 = require("./750506.jsx"),
  Chunk780964 = require("./780964.js"),
  Chunk358776 = require("./358776.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk223567 = require("./223567.js"),
  Chunk552122 = require("./552122.js"),
  Chunk41280 = require("./41280.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk653246 = require("./653246.js");

function v(e) {
  let {
    dismissibleContent: t,
    backgroundColor: n,
    specialTextColor: m
  } = e, v = p.A.useIsEligible(), j = (0, s.JZ)(t), _ = null != n, y = null != m ? {
    color: m
  } : true, {
    analyticsLocations: A
  } = (0, i.Ay)(r.A.HOLIDAY_COACHMARK), C = e => {
    (0, s.Dr)(t, {
      dismissAction: e
    })
  }, S = () => {
    let e = (0, d.E7)("HolidayCoachmark");
    (0, u.openUserSettings)(e ? c.X.NOTIFICATIONS_PANEL : c.X.LEGACY_NOTIFICATIONS_SETTINGS_PANEL, {
      section: x.nc_.NOTIFICATIONS,
      analyticsLocations: A
    }), C(g.i.TAKE_ACTION)
  };
  return v && !j ? (0, a.jsx)(o.Ay, {
    children: (0, a.jsxs)("div", {
      className: b.iE,
      style: {
        backgroundColor: _ ? n : true
      },
      children: [!_ && (0, a.jsxs)("div", {
        className: b.o5,
        children: [(0, a.jsx)(h.A, {
          className: b.iL,
          pageMultiplier: 5
        }), (0, a.jsx)("div", {
          className: b.Np
        })]
      }), (0, a.jsx)("div", {
        className: b.c8
      }), (0, a.jsxs)("div", {
        className: b.Qs,
        children: [(0, a.jsxs)("div", {
          children: [(0, a.jsx)(l.Heading, {
            variant: "heading-md/bold",
            color: null != y ? true : "always-white",
            style: y,
            children: f.intl.string(f.t["6CxPoB"])
          }), (0, a.jsx)(l.Text, {
            variant: "text-xs/normal",
            color: "always-white",
            children: f.intl.format(f.t.IVzJ8G, {
              settingsHook: (e, t) => (0, a.jsx)(l.DUT, {
                tag: "span",
                className: b.nf,
                style: y,
                onClick: S,
                children: e
              }, t)
            })
          })]
        }), (0, a.jsx)(l.DUT, {
          className: b.l2,
          onClick: () => C(g.i.USER_DISMISS),
          children: (0, a.jsx)(l.PGe, {
            color: "currentColor",
            size: "xs"
          })
        })]
      })]
    })
  }) : null
}

function j() {
  return null == m.A.coachmarkDismissibleContent ? null : (0, a.jsx)(v, {
    dismissibleContent: m.A.coachmarkDismissibleContent,
    backgroundColor: m.A.coachmarkBackgroundColor,
    specialTextColor: m.A.coachmarkSpecialTextColor
  })
}