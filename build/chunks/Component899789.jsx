/** Chunk was on 63639 **/
/** chunk id: 899789, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => E,
  Z: () => h
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk494620 = require("./494620.jsx"),
  Chunk639777 = require("./639777.js"),
  Chunk578756 = require("./578756.js"),
  Chunk503274 = require("./503274.jsx"),
  Chunk858594 = require("./858594.jsx"),
  Chunk296643 = require("./296643.jsx"),
  Chunk343312 = require("./343312.jsx"),
  Chunk30910 = require("./30910.jsx"),
  Chunk619733 = require("./619733.js"),
  Chunk269794 = require("./269794.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk755350 = require("./755350.js");

function E() {
  return (0, Chunk951288.jsx)(Chunk494620.Z, {
    className: Chunk755350.maxInstancesWarning,
    children: (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-sm/medium",
      children: Chunk388032.intl.formatToPlainString(Chunk269794.default.xta2U9, {
        maxInstances: Chunk619733.YX
      })
    })
  })
}

function h() {
  let {
    guildId: e,
    gameServerGames: t,
    instances: n,
    gameServerInstance: a,
    setGameServerInstance: o,
    setCurrentGame: h,
    onNext: y
  } = (0, Chunk343312.JL)();
  (0, Chunk578756.cq)(module, null == Chunk120356 ? "create" : "edit");
  let O = Chunk647438.useCallback(e => {
      h(e), y()
    }, [h, y]),
    S = Chunk647438.useCallback(e => {
      o(e), y()
    }, [Chunk494620, y]),
    I = require.length >= Chunk619733.YX,
    k = require.length > 0,
    C = (0, Chunk639777.Z)(module);
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
        children: Chunk388032.intl.string(Chunk269794.default.BOWmmT)
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk755350.gameInstanceContainer,
        children: require.map((t, n) => (0, l.jsx)(m.Z, {
          guildId: e,
          gameInstance: t,
          onClick: S
        }, "instance-".concat(t.id, "-").concat(n)))
      }), I && (0, Chunk951288.jsx)(E, {})]
    }), (0, Chunk951288.jsxs)("div", {
      className: r()(Chunk755350.gameSection, {
        [Chunk755350.disabled]: I
      }),
      children: [k && (0, Chunk951288.jsx)(Chunk481060.Heading, {
        variant: "heading-md/semibold",
        children: Chunk388032.intl.string(Chunk269794.default.NIwDqW)
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk755350.gameContainer,
        children: Object.values(exports).map((t, n) => (0, l.jsx)(v.Z, {
          guildId: e,
          game: t,
          disabled: I || !C,
          onClick: O,
          location: u.Z.GAME_SERVER_SETUP_MODAL
        }, "game-".concat(t.id, "-").concat(n)))
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
          children: Chunk388032.intl.string(Chunk269794.default["5DjxXm"])
        })]
      }), (0, Chunk951288.jsx)(Chunk296643.Z, {})]
    })]
  })
}