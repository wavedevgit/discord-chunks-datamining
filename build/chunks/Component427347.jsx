/** Chunk was on 97571 **/
/** chunk id: 427347, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk266454 = require("./266454.js"),
  Chunk314910 = require("./314910.jsx"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk378364 = require("./378364.js"),
  Chunk197344 = require("./197344.js"),
  Chunk226625 = require("./226625.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk120289 = require("./120289.js");

function v(e) {
  let {
    dismissibleContent: t
  } = e, n = p.Z.useIsEligible(), m = (0, o.Nj)(t), {
    analyticsLocations: v
  } = (0, s.ZP)(l.Z.HOLIDAY_COACHMARK), j = e => {
    (0, o.Q3)(r.z.HOLIDAY_COACHMARK_HALLOWEEN_2024, {
      dismissAction: e
    })
  }, _ = () => {
    (0, u.openUserSettings)(d.n.NOTIFICATIONS_PANEL, {
      section: x.oAB.NOTIFICATIONS,
      analyticsLocations: v
    }), j(f.L.SECONDARY)
  };
  return n && !m ? (0, a.jsx)(c.ZP, {
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
          children: [(0, a.jsx)(i.X6q, {
            variant: "heading-md/bold",
            color: true,
            className: g.specialText,
            children: b.intl.string(b.t.zUhr3N)
          }), (0, a.jsx)(i.Text, {
            variant: "text-xs/normal",
            color: "always-white",
            children: b.intl.format(b.t.Xw2XUV, {
              settingsHook: (e, t) => (0, a.jsx)(i.P3F, {
                tag: "span",
                className: g.specialTextLink,
                onClick: _,
                children: e
              }, t)
            })
          })]
        }), (0, a.jsx)(i.P3F, {
          className: g.closeClickable,
          onClick: () => j(f.L.USER_DISMISS),
          children: (0, a.jsx)(i.Dio, {
            color: "currentColor",
            size: "xs"
          })
        })]
      })]
    })
  }) : null
}

function j() {
  return null == Chunk378364.Z.coachmarkDismissibleContent ? null : (0, Chunk951288.jsx)(v, {
    dismissibleContent: Chunk378364.Z.coachmarkDismissibleContent
  })
}