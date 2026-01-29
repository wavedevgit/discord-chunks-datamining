/** Chunk was on 87557 **/
/** chunk id: 977700, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => v
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk826673 = require("./826673.js"),
  Chunk750506 = require("./750506.jsx"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk223567 = require("./223567.js"),
  Chunk552122 = require("./552122.js"),
  Chunk41280 = require("./41280.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk653246 = require("./653246.js");

function b(e) {
  let {
    dismissibleContent: t,
    backgroundColor: n,
    specialTextColor: u
  } = e, b = m.A.useIsEligible(), v = (0, s.JZ)(t), j = null != n, _ = null != u ? {
    color: u
  } : true, {
    analyticsLocations: y
  } = (0, i.Ay)(r.A.HOLIDAY_COACHMARK), A = e => {
    (0, s.Dr)(t, {
      dismissAction: e
    })
  }, C = () => {
    (0, d.openUserSettings)(c.X.NOTIFICATIONS_PANEL, {
      section: h.nc_.NOTIFICATIONS,
      analyticsLocations: y
    }), A(x.i.TAKE_ACTION)
  };
  return b && !v ? (0, a.jsx)(o.Ay, {
    children: (0, a.jsxs)("div", {
      className: f.iE,
      style: {
        backgroundColor: j ? n : true
      },
      children: [!j && (0, a.jsxs)("div", {
        className: f.o5,
        children: [(0, a.jsx)(p.A, {
          className: f.iL,
          pageMultiplier: 5
        }), (0, a.jsx)("div", {
          className: f.Np
        })]
      }), (0, a.jsx)("div", {
        className: f.c8
      }), (0, a.jsxs)("div", {
        className: f.Qs,
        children: [(0, a.jsxs)("div", {
          children: [(0, a.jsx)(l.Heading, {
            variant: "heading-md/bold",
            color: null != _ ? true : "always-white",
            style: _,
            children: g.intl.string(g.t["6CxPoB"])
          }), (0, a.jsx)(l.Text, {
            variant: "text-xs/normal",
            color: "always-white",
            children: g.intl.format(g.t.IVzJ8G, {
              settingsHook: (e, t) => (0, a.jsx)(l.DUT, {
                tag: "span",
                className: f.nf,
                style: _,
                onClick: C,
                children: e
              }, t)
            })
          })]
        }), (0, a.jsx)(l.DUT, {
          className: f.l2,
          onClick: () => A(x.i.USER_DISMISS),
          children: (0, a.jsx)(l.PGe, {
            color: "currentColor",
            size: "xs"
          })
        })]
      })]
    })
  }) : null
}

function v() {
  return null == u.A.coachmarkDismissibleContent ? null : (0, a.jsx)(b, {
    dismissibleContent: u.A.coachmarkDismissibleContent,
    backgroundColor: u.A.coachmarkBackgroundColor,
    specialTextColor: u.A.coachmarkSpecialTextColor
  })
}