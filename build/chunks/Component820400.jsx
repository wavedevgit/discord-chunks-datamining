/** Chunk was on 22979 **/
/** chunk id: 820400, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk296009 = require("./296009.js"),
  Chunk481060 = require("./481060.js"),
  Chunk592183 = require("./592183.js"),
  Chunk86419 = require("./86419.js"),
  Chunk172416 = require("./172416.js"),
  Chunk87489 = require("./87489.js");

function d() {
  let e = (0, o.U)({
      location: "DevToolsWidgetsPanel",
      autoTrackExposure: false
    }),
    t = e => {
      let t = (0, s.np)(e);
      (0, s.ES)({
        widgetType: e,
        game: t
      })
    };
  return e ? (0, a.jsxs)("div", {
    className: c.container,
    children: [(0, a.jsx)(i.C3N, {
      label: "User Profile Widgets",
      description: "Generate and test different widget configurations for user profiles.",
      children: (0, a.jsxs)("div", {
        className: c.buttonGroup,
        children: [(0, a.jsx)(i.Button, {
          variant: "primary",
          text: "Add Favorite Game",
          onClick: () => t(r.l.FAVORITE_GAMES)
        }), (0, a.jsx)(i.Button, {
          variant: "primary",
          text: "Add Current Game",
          onClick: () => t(r.l.CURRENT_GAMES)
        }), (0, a.jsx)(i.Button, {
          variant: "primary",
          text: "Add Want to Play Game",
          onClick: () => t(r.l.WANT_TO_PLAY_GAMES)
        }), (0, a.jsx)(i.Button, {
          variant: "primary",
          text: "Add Played Game",
          onClick: () => t(r.l.PLAYED_GAMES)
        }), (0, a.jsx)(i.Button, {
          variant: "active",
          text: "Show Empty State",
          onClick: () => {
            l.Z.setPendingWidgets([])
          }
        }), (0, a.jsx)(i.Button, {
          variant: "critical-primary",
          text: "Clear Pending Changes",
          onClick: () => {
            l.Z.clearPendingWidgets()
          }
        })]
      })
    }), (0, a.jsxs)(i.C3N, {
      label: "Backend integration",
      children: [(0, a.jsx)(i.Button, {
        variant: "active",
        text: "Save Widgets State",
        onClick: () => (0, s.X6)()
      }), (0, a.jsx)(i.Button, {
        variant: "critical-primary",
        text: "Clear Saved Widgets",
        onClick: () => (0, s.tk)()
      })]
    })]
  }) : null
}