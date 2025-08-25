/** Chunk was on web.js **/
/** chunk id: 427347, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk230711 = require("./230711.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk266454 = require("./266454.js"),
  Chunk314910 = require("./314910.jsx"),
  Chunk378364 = require("./378364.js"),
  Chunk197344 = require("./197344.js"),
  Chunk226625 = require("./226625.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk972663 = require("./972663.js");
let E = 5;

function b(e) {
  let {
    dismissibleContent: t
  } = e, n = f.Z.useIsEligible(), d = (0, c.Nj)(t), b = n && !d, {
    analyticsLocations: y
  } = (0, l.ZP)(s.Z.HOLIDAY_COACHMARK), O = e => {
    (0, c.Q3)(i.z.HOLIDAY_COACHMARK_HALLOWEEN_2024, {
      dismissAction: e
    })
  }, v = () => {
    a.Z.open(p.oAB.NOTIFICATIONS, null, {
      analyticsLocations: y
    }), O(h.L.SECONDARY)
  };
  return b ? (0, r.jsx)(u.ZP, {
    children: (0, r.jsxs)("div", {
      className: g.wrapper,
      children: [(0, r.jsxs)("div", {
        className: g.backgroundWrapper,
        children: [(0, r.jsx)(_.Z, {
          className: g.backgroundImage,
          pageMultiplier: E
        }), (0, r.jsx)("div", {
          className: g.backgroundOverlay
        })]
      }), (0, r.jsx)("div", {
        className: g.heroImage
      }), (0, r.jsxs)("div", {
        className: g.content,
        children: [(0, r.jsxs)("div", {
          children: [(0, r.jsx)(o.X6q, {
            variant: "heading-md/bold",
            color: true,
            className: g.specialText,
            children: m.intl.string(m.t.zUhr3N)
          }), (0, r.jsx)(o.Text, {
            variant: "text-xs/normal",
            color: "always-white",
            children: m.intl.format(m.t.Xw2XUV, {
              settingsHook: (e, t) => (0, r.jsx)(o.P3F, {
                tag: "span",
                className: g.specialTextLink,
                onClick: v,
                children: e
              }, t)
            })
          })]
        }), (0, r.jsx)(o.P3F, {
          className: g.closeClickable,
          onClick: () => O(h.L.USER_DISMISS),
          children: (0, r.jsx)(o.Dio, {
            color: "currentColor",
            size: "xs"
          })
        })]
      })]
    })
  }) : null
}

function y() {
  return null == Chunk378364.Z.coachmarkDismissibleContent ? null : (0, Chunk951288.jsx)(b, {
    dismissibleContent: Chunk378364.Z.coachmarkDismissibleContent
  })
}