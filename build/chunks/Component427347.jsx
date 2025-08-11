/** Chunk was on 75708 **/
/** chunk id: 427347, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
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
  Chunk963748 = require("./963748.js");

function x(e) {
  let {
    dismissibleContent: t
  } = e, n = m.Z.useIsEligible(), u = (0, c.Nj)(t), {
    analyticsLocations: x
  } = (0, o.ZP)(l.Z.HOLIDAY_COACHMARK), _ = e => {
    (0, c.Q3)(r.z.HOLIDAY_COACHMARK_HALLOWEEN_2024, {
      dismissAction: e
    })
  }, j = () => {
    a.Z.open(g.oAB.NOTIFICATIONS, null, {
      analyticsLocations: x
    }), _(h.L.SECONDARY)
  };
  return n && !u ? (0, i.jsx)(d.ZP, {
    children: (0, i.jsxs)("div", {
      className: b.wrapper,
      children: [(0, i.jsxs)("div", {
        className: b.backgroundWrapper,
        children: [(0, i.jsx)(p.Z, {
          className: b.backgroundImage,
          pageMultiplier: 5
        }), (0, i.jsx)("div", {
          className: b.backgroundOverlay
        })]
      }), (0, i.jsx)("div", {
        className: b.heroImage
      }), (0, i.jsxs)("div", {
        className: b.content,
        children: [(0, i.jsxs)("div", {
          children: [(0, i.jsx)(s.X6q, {
            variant: "heading-md/bold",
            color: true,
            className: b.specialText,
            children: f.intl.string(f.t.zUhr3N)
          }), (0, i.jsx)(s.Text, {
            variant: "text-xs/normal",
            color: "always-white",
            children: f.intl.format(f.t.Xw2XUV, {
              settingsHook: (e, t) => (0, i.jsx)(s.P3F, {
                tag: "span",
                className: b.specialTextLink,
                onClick: j,
                children: e
              }, t)
            })
          })]
        }), (0, i.jsx)(s.P3F, {
          className: b.closeClickable,
          onClick: () => _(h.L.USER_DISMISS),
          children: (0, i.jsx)(s.Dio, {
            color: "currentColor",
            size: "xs"
          })
        })]
      })]
    })
  }) : null
}

function _() {
  return null == Chunk378364.Z.coachmarkDismissibleContent ? null : (0, Chunk255367.jsx)(x, {
    dismissibleContent: Chunk378364.Z.coachmarkDismissibleContent
  })
}