/** Chunk was on 63639 **/
/** chunk id: 899789, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => j,
  Z: () => x
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk494620 = require("./494620.jsx"),
  Chunk503274 = require("./503274.jsx"),
  Chunk858594 = require("./858594.jsx"),
  Chunk296643 = require("./296643.jsx"),
  Chunk343312 = require("./343312.jsx"),
  Chunk30910 = require("./30910.jsx"),
  Chunk619733 = require("./619733.js"),
  Chunk948208 = require("./948208.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk755350 = require("./755350.js");

function j() {
  return (0, Chunk951288.jsx)(Chunk494620.Z, {
    className: Chunk755350.maxInstancesWarning,
    children: (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-sm/medium",
      children: Chunk388032.intl.formatToPlainString(Chunk948208.default.xta2U1, {
        maxInstances: Chunk619733.YX
      })
    })
  })
}

function x() {
  let {
    guildId: e,
    gameServerGames: t,
    instances: n,
    setGameServerInstance: i,
    setCurrentGame: o,
    onNext: x
  } = (0, Chunk343312.JL)(), y = Chunk647438.useCallback(e => {
    o(e), x()
  }, [Chunk494620, x]), O = Chunk647438.useCallback(e => {
    i(e), x()
  }, [Chunk120356, x]), h = require.length >= Chunk619733.YX, P = require.length > 0;
  return 0 === Object.values(exports).length ? (0, Chunk951288.jsx)("div", {
    className: Chunk755350.loadingContainer,
    children: (0, Chunk951288.jsx)(Chunk481060.$jN, {
      type: Chunk481060.RAz.SPINNING_CIRCLE
    })
  }) : (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
    children: [P && (0, Chunk951288.jsxs)("div", {
      className: Chunk755350.gameSection,
      children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
        variant: "heading-md/semibold",
        children: Chunk388032.intl.string(Chunk948208.default.BOWmmZ)
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk755350.gameInstanceContainer,
        children: require.map((t, n) => (0, l.jsx)(c.Z, {
          guildId: e,
          gameInstance: t,
          onClick: O
        }, "instance-".concat(t.id, "-").concat(n)))
      }), h && (0, Chunk951288.jsx)(j, {})]
    }), (0, Chunk951288.jsxs)("div", {
      className: r()(Chunk755350.gameSection, {
        [Chunk755350.disabled]: h
      }),
      children: [P && (0, Chunk951288.jsx)(Chunk481060.X6q, {
        variant: "heading-md/semibold",
        children: Chunk388032.intl.string(Chunk948208.default.NIwDqa)
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk755350.gameContainer,
        children: Object.values(exports).map((e, t) => (0, l.jsx)(u.Z, {
          game: e,
          disabled: h,
          onClick: y
        }, "game-".concat(e.id, "-").concat(t)))
      })]
    }), (0, Chunk951288.jsxs)(Chunk30910.o2, {
      step: Chunk619733.EK.SELECT_GAME,
      className: Chunk755350.footerContainer,
      children: [(0, Chunk951288.jsxs)("div", {
        className: Chunk755350.warningContainer,
        children: [(0, Chunk951288.jsx)(Chunk481060.d3s, {
          size: "sm"
        }), (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-sm/medium",
          children: Chunk388032.intl.string(Chunk948208.default["5DjxXl"])
        })]
      }), (0, Chunk951288.jsx)(Chunk296643.Z, {})]
    })]
  })
}