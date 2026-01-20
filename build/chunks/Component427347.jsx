/** Chunk was on 22979 **/
/** chunk id: 427347, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk266454 = require("./266454.js"),
  Chunk314910 = require("./314910.jsx"),
  Chunk313789 = require("./313789.js"),
  Chunk526665 = require("./526665.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk378364 = require("./378364.js"),
  Chunk197344 = require("./197344.js"),
  Chunk226625 = require("./226625.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk240095 = require("./240095.js");

function v(e) {
  let {
    dismissibleContent: t,
    backgroundColor: n,
    specialTextColor: m
  } = e, v = p.Z.useIsEligible(), j = (0, s.Nj)(t), y = null != n, C = null != m ? {
    color: m
  } : true, {
    analyticsLocations: _
  } = (0, l.ZP)(i.Z.HOLIDAY_COACHMARK), S = e => {
    (0, s.Q3)(t, {
      dismissAction: e
    })
  }, E = () => {
    let e = (0, d.KV)("HolidayCoachmark");
    (0, u.openUserSettings)(e ? c.n.NOTIFICATIONS_PANEL : c.n.LEGACY_NOTIFICATIONS_SETTINGS_PANEL, {
      section: f.oAB.NOTIFICATIONS,
      analyticsLocations: _
    }), S(b.L.TAKE_ACTION)
  };
  return v && !j ? (0, a.jsx)(o.ZP, {
    children: (0, a.jsxs)("div", {
      className: g.wrapper,
      style: {
        backgroundColor: y ? n : true
      },
      children: [!y && (0, a.jsxs)("div", {
        className: g.backgroundWrapper,
        children: [(0, a.jsx)(h.Z, {
          className: g.backgroundImage,
          pageMultiplier: 5
        }), (0, a.jsx)("div", {
          className: g.backgroundOverlay
        })]
      }), (0, a.jsx)("div", {
        className: g.heroImage
      }), (0, a.jsxs)("div", {
        className: g.content,
        children: [(0, a.jsxs)("div", {
          children: [(0, a.jsx)(r.Heading, {
            variant: "heading-md/bold",
            color: null != C ? true : "always-white",
            style: C,
            children: x.intl.string(x.t["6CxPoB"])
          }), (0, a.jsx)(r.Text, {
            variant: "text-xs/normal",
            color: "always-white",
            children: x.intl.format(x.t.IVzJ8G, {
              settingsHook: (e, t) => (0, a.jsx)(r.P3F, {
                tag: "span",
                className: g.link,
                style: C,
                onClick: E,
                children: e
              }, t)
            })
          })]
        }), (0, a.jsx)(r.P3F, {
          className: g.closeClickable,
          onClick: () => S(b.L.USER_DISMISS),
          children: (0, a.jsx)(r.Dio, {
            color: "currentColor",
            size: "xs"
          })
        })]
      })]
    })
  }) : null
}

function j() {
  return null == m.Z.coachmarkDismissibleContent ? null : (0, a.jsx)(v, {
    dismissibleContent: m.Z.coachmarkDismissibleContent,
    backgroundColor: m.Z.coachmarkBackgroundColor,
    specialTextColor: m.Z.coachmarkSpecialTextColor
  })
}