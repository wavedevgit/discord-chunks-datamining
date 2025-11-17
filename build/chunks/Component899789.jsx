/** Chunk was on 63639 **/
/** chunk id: 899789, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => h,
  Z: () => S
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
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
  Chunk732031 = require("./732031.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk755350 = require("./755350.js");

function h() {
  return (0, Chunk54381.jsx)(Chunk494620.Z, {
    className: Chunk755350.maxInstancesWarning,
    children: (0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "text-sm/medium",
      children: Chunk388032.intl.formatToPlainString(Chunk732031.default.xta2U9, {
        maxInstances: Chunk619733.YX
      })
    })
  })
}

function S() {
  let {
    guildId: e,
    gameServerGames: t,
    instances: n,
    gameServerInstance: a,
    setGameServerInstance: c,
    setCurrentGame: S,
    onNext: y
  } = (0, Chunk343312.JL)();
  (0, Chunk578756.cq)(module, null == Chunk120356 ? "create" : "edit");
  let O = Chunk473749.useCallback(e => {
      S(e), y()
    }, [S, y]),
    I = Chunk473749.useCallback(e => {
      c(e), y()
    }, [Chunk494620, y]),
    k = require.length >= Chunk619733.YX,
    C = require.length > 0,
    P = (0, Chunk639777.Z)(module);
  return 0 === Object.values(exports).length ? (0, Chunk54381.jsx)("div", {
    className: Chunk755350.loadingContainer,
    children: (0, Chunk54381.jsx)(Chunk481060.$jN, {
      type: Chunk481060.RAz.SPINNING_CIRCLE
    })
  }) : (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
    children: [C && (0, Chunk54381.jsxs)("div", {
      className: Chunk755350.gameSection,
      children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
        variant: "heading-md/semibold",
        children: Chunk388032.intl.string(Chunk732031.default.BOWmmT)
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk755350.gameInstanceContainer,
        children: require.map((t, n) => (0, l.jsx)(v.Z, {
          guildId: e,
          gameInstance: t,
          onClick: I
        }, "instance-".concat(t.id, "-").concat(n)))
      }), k && (0, Chunk54381.jsx)(h, {})]
    }), (0, Chunk54381.jsxs)("div", {
      className: r()(Chunk755350.gameSection, {
        [Chunk755350.disabled]: k
      }),
      children: [C && (0, Chunk54381.jsx)(Chunk481060.Heading, {
        variant: "heading-md/semibold",
        children: Chunk388032.intl.string(Chunk732031.default.NIwDqW)
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk755350.gameContainer,
        children: Object.values(exports).map((t, n) => (0, l.jsx)(s.u, {
          asContainer: true,
          text: t.disabled ? j.intl.formatToPlainString(x.default.uVpJYf, {
            gameName: t.name
          }) : null,
          position: "top",
          children: (0, l.jsx)(g.Z, {
            guildId: e,
            game: t,
            disabled: k || !P || t.disabled,
            onClick: O,
            location: o.Z.GAME_SERVER_SETUP_MODAL
          })
        }, "game-".concat(t.id, "-").concat(n)))
      })]
    }), (0, Chunk54381.jsxs)(Chunk30910.o2, {
      step: Chunk619733.EK.SELECT_GAME,
      className: Chunk755350.footerContainer,
      children: [(0, Chunk54381.jsxs)("div", {
        className: Chunk755350.warningContainer,
        children: [(0, Chunk54381.jsx)(Chunk481060.d3s, {
          size: "sm"
        }), (0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-sm/medium",
          children: Chunk388032.intl.string(Chunk732031.default["5DjxXm"])
        })]
      }), (0, Chunk54381.jsx)(Chunk296643.Z, {})]
    })]
  })
}