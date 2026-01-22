/** Chunk was on 22477 **/
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
  } = e, v = p.A.useIsEligible(), j = (0, s.JZ)(t), y = null != n, _ = null != m ? {
    color: m
  } : true, {
    analyticsLocations: A
  } = (0, r.Ay)(i.A.HOLIDAY_COACHMARK), C = e => {
    (0, s.Dr)(t, {
      dismissAction: e
    })
  }, S = () => {
    let e = (0, d.E7)("HolidayCoachmark");
    (0, u.openUserSettings)(e ? c.X.NOTIFICATIONS_PANEL : c.X.LEGACY_NOTIFICATIONS_SETTINGS_PANEL, {
      section: f.nc_.NOTIFICATIONS,
      analyticsLocations: A
    }), C(x.i.TAKE_ACTION)
  };
  return v && !j ? (0, a.jsx)(o.Ay, {
    children: (0, a.jsxs)("div", {
      className: g.iE,
      style: {
        backgroundColor: y ? n : true
      },
      children: [!y && (0, a.jsxs)("div", {
        className: g.o5,
        children: [(0, a.jsx)(h.A, {
          className: g.iL,
          pageMultiplier: 5
        }), (0, a.jsx)("div", {
          className: g.Np
        })]
      }), (0, a.jsx)("div", {
        className: g.c8
      }), (0, a.jsxs)("div", {
        className: g.Qs,
        children: [(0, a.jsxs)("div", {
          children: [(0, a.jsx)(l.Heading, {
            variant: "heading-md/bold",
            color: null != _ ? true : "always-white",
            style: _,
            children: b.intl.string(b.t["6CxPoB"])
          }), (0, a.jsx)(l.Text, {
            variant: "text-xs/normal",
            color: "always-white",
            children: b.intl.format(b.t.IVzJ8G, {
              settingsHook: (e, t) => (0, a.jsx)(l.DUT, {
                tag: "span",
                className: g.nf,
                style: _,
                onClick: S,
                children: e
              }, t)
            })
          })]
        }), (0, a.jsx)(l.DUT, {
          className: g.l2,
          onClick: () => C(x.i.USER_DISMISS),
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