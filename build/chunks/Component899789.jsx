/** Chunk was on 63639 **/
/** chunk id: 899789, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  C: () => x,
  Z: () => h
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk494620 = require("./494620.jsx"),
  Chunk639777 = require("./639777.js"),
  Chunk503274 = require("./503274.jsx"),
  Chunk858594 = require("./858594.jsx"),
  Chunk296643 = require("./296643.jsx"),
  Chunk694967 = require("./694967.jsx"),
  Chunk30910 = require("./30910.jsx"),
  Chunk619733 = require("./619733.js"),
  Chunk306238 = require("./306238.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk755350 = require("./755350.js");

function x() {
  return (0, Chunk951288.jsx)(Chunk494620.Z, {
    className: Chunk755350.maxInstancesWarning,
    children: (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-sm/medium",
      children: Chunk388032.intl.formatToPlainString(Chunk306238.default.xta2U9, {
        maxInstances: Chunk619733.YX
      })
    })
  })
}

function h() {
  let {
    guildId: e,
    gameServerGames: n,
    instances: t,
    setGameServerInstance: i,
    setCurrentGame: o,
    onNext: h
  } = (0, Chunk694967.JL)(), y = Chunk647438.useCallback(e => {
    o(e), h()
  }, [Chunk494620, h]), O = Chunk647438.useCallback(e => {
    i(e), h()
  }, [Chunk120356, h]), P = require.length >= Chunk619733.YX, k = require.length > 0, I = (0, Chunk639777.Z)(module);
  return 0 === Object.values(exports).length ? (0, Chunk951288.jsx)("div", {
    className: Chunk755350.loadingContainer,
    children: (0, Chunk951288.jsx)(Chunk481060.$jN, {
      type: Chunk481060.RAz.SPINNING_CIRCLE
    })
  }) : (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
    children: [k && (0, Chunk951288.jsxs)("div", {
      className: Chunk755350.gameSection,
      children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
        variant: "heading-md/semibold",
        children: Chunk388032.intl.string(Chunk306238.default.BOWmmT)
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk755350.gameInstanceContainer,
        children: require.map((n, t) => (0, l.jsx)(c.Z, {
          guildId: e,
          gameInstance: n,
          onClick: O
        }, "instance-".concat(n.id, "-").concat(t)))
      }), P && (0, Chunk951288.jsx)(x, {})]
    }), (0, Chunk951288.jsxs)("div", {
      className: r()(Chunk755350.gameSection, {
        [Chunk755350.disabled]: P
      }),
      children: [k && (0, Chunk951288.jsx)(Chunk481060.Heading, {
        variant: "heading-md/semibold",
        children: Chunk388032.intl.string(Chunk306238.default.NIwDqW)
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk755350.gameContainer,
        children: Object.values(exports).map((e, n) => (0, l.jsx)(d.Z, {
          game: e,
          disabled: P || !I,
          onClick: y
        }, "game-".concat(e.id, "-").concat(n)))
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
          children: Chunk388032.intl.string(Chunk306238.default["5DjxXm"])
        })]
      }), (0, Chunk951288.jsx)(Chunk296643.Z, {})]
    })]
  })
}