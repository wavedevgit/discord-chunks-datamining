/** Chunk was on 945 **/
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
    dismissibleContent: t
  } = e, n = p.Z.useIsEligible(), m = (0, s.Nj)(t), {
    analyticsLocations: v
  } = (0, l.ZP)(i.Z.HOLIDAY_COACHMARK), j = e => {
    (0, s.Q3)(t, {
      dismissAction: e
    })
  }, y = () => {
    let e = (0, d.KV)("HolidayCoachmark");
    (0, u.openUserSettings)(e ? c.n.NOTIFICATIONS_PANEL : c.n.LEGACY_NOTIFICATIONS_SETTINGS_PANEL, {
      section: f.oAB.NOTIFICATIONS,
      analyticsLocations: v
    }), j(x.L.TAKE_ACTION)
  };
  return n && !m ? (0, a.jsx)(o.ZP, {
    children: (0, a.jsxs)("div", {
      className: g.wrapper,
      children: [(0, a.jsxs)("div", {
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
            color: true,
            className: g.specialText,
            children: b.intl.string(b.t.zUhr3D)
          }), (0, a.jsx)(r.Text, {
            variant: "text-xs/normal",
            color: "always-white",
            children: b.intl.format(b.t.Xw2XUT, {
              settingsHook: (e, t) => (0, a.jsx)(r.P3F, {
                tag: "span",
                className: g.specialTextLink,
                onClick: y,
                children: e
              }, t)
            })
          })]
        }), (0, a.jsx)(r.P3F, {
          className: g.closeClickable,
          onClick: () => j(x.L.USER_DISMISS),
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
  return null == Chunk378364.Z.coachmarkDismissibleContent ? null : (0, Chunk54381.jsx)(v, {
    dismissibleContent: Chunk378364.Z.coachmarkDismissibleContent
  })
}