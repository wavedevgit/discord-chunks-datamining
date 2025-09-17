/** Chunk was on web.js **/
/** chunk id: 427347, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
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
let b = 5;

function y(e) {
  let {
    dismissibleContent: t
  } = e, n = _.Z.useIsEligible(), f = (0, l.Nj)(t), y = n && !f, {
    analyticsLocations: O
  } = (0, s.ZP)(o.Z.HOLIDAY_COACHMARK), v = e => {
    (0, l.Q3)(i.z.HOLIDAY_COACHMARK_HALLOWEEN_2024, {
      dismissAction: e
    })
  }, I = () => {
    (0, d.openUserSettings)(u.n.NOTIFICATIONS_PANEL, {
      section: h.oAB.NOTIFICATIONS,
      analyticsLocations: O
    }), v(m.L.SECONDARY)
  };
  return y ? (0, r.jsx)(c.ZP, {
    children: (0, r.jsxs)("div", {
      className: E.wrapper,
      children: [(0, r.jsxs)("div", {
        className: E.backgroundWrapper,
        children: [(0, r.jsx)(p.Z, {
          className: E.backgroundImage,
          pageMultiplier: b
        }), (0, r.jsx)("div", {
          className: E.backgroundOverlay
        })]
      }), (0, r.jsx)("div", {
        className: E.heroImage
      }), (0, r.jsxs)("div", {
        className: E.content,
        children: [(0, r.jsxs)("div", {
          children: [(0, r.jsx)(a.X6q, {
            variant: "heading-md/bold",
            color: true,
            className: E.specialText,
            children: g.intl.string(g.t.zUhr3N)
          }), (0, r.jsx)(a.Text, {
            variant: "text-xs/normal",
            color: "always-white",
            children: g.intl.format(g.t.Xw2XUV, {
              settingsHook: (e, t) => (0, r.jsx)(a.P3F, {
                tag: "span",
                className: E.specialTextLink,
                onClick: I,
                children: e
              }, t)
            })
          })]
        }), (0, r.jsx)(a.P3F, {
          className: E.closeClickable,
          onClick: () => v(m.L.USER_DISMISS),
          children: (0, r.jsx)(a.Dio, {
            color: "currentColor",
            size: "xs"
          })
        })]
      })]
    })
  }) : null
}

function O() {
  return null == Chunk378364.Z.coachmarkDismissibleContent ? null : (0, Chunk951288.jsx)(y, {
    dismissibleContent: Chunk378364.Z.coachmarkDismissibleContent
  })
}