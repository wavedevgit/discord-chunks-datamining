/** Chunk was on 837 **/
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
  Chunk667108 = require("./667108.js");

function d() {
  let e = (0, Chunk172416.Un)({
      location: "DevToolsWidgetsPanel",
      autoTrackExposure: false
    }),
    t = e => {
      let t = (0, s.np)(e);
      (0, s.ES)(e, t)
    };
  return module ? (0, Chunk54381.jsxs)("div", {
    className: Chunk667108.container,
    children: [(0, Chunk54381.jsx)(Chunk481060.C3N, {
      label: "User Profile Widgets",
      description: "Generate and test different widget configurations for user profiles.",
      children: (0, Chunk54381.jsxs)("div", {
        className: Chunk667108.buttonGroup,
        children: [(0, Chunk54381.jsx)(Chunk481060.Button, {
          variant: "primary",
          text: "Add Favorite Game",
          onClick: () => exports(Chunk296009.l.FAVORITE_GAMES)
        }), (0, Chunk54381.jsx)(Chunk481060.Button, {
          variant: "primary",
          text: "Add Current Game",
          onClick: () => exports(Chunk296009.l.CURRENT_GAMES)
        }), (0, Chunk54381.jsx)(Chunk481060.Button, {
          variant: "primary",
          text: "Add Want to Play Game",
          onClick: () => exports(Chunk296009.l.WANT_TO_PLAY_GAMES)
        }), (0, Chunk54381.jsx)(Chunk481060.Button, {
          variant: "primary",
          text: "Add Played Game",
          onClick: () => exports(Chunk296009.l.PLAYED_GAMES)
        }), (0, Chunk54381.jsx)(Chunk481060.Button, {
          variant: "active",
          text: "Show Empty State",
          onClick: () => {
            Chunk592183.Z.setPendingWidgets([])
          }
        }), (0, Chunk54381.jsx)(Chunk481060.Button, {
          variant: "critical-primary",
          text: "Clear Pending Changes",
          onClick: () => {
            Chunk592183.Z.clearPendingWidgets()
          }
        })]
      })
    }), (0, Chunk54381.jsxs)(Chunk481060.C3N, {
      label: "Backend integration",
      children: [(0, Chunk54381.jsx)(Chunk481060.Button, {
        variant: "active",
        text: "Save Widgets State",
        onClick: () => (0, Chunk86419.X6)()
      }), (0, Chunk54381.jsx)(Chunk481060.Button, {
        variant: "critical-primary",
        text: "Clear Saved Widgets",
        onClick: () => (0, Chunk86419.tk)()
      })]
    })]
  }) : null
}