/** Chunk was on 952 **/
/** chunk id: 678328, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Y: () => j,
  Z: () => x
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk494620 = require("./494620.jsx"),
  Chunk748745 = require("./748745.jsx"),
  Chunk567225 = require("./567225.jsx"),
  Chunk535895 = require("./535895.jsx"),
  Chunk183369 = require("./183369.jsx"),
  Chunk422663 = require("./422663.jsx"),
  Chunk473682 = require("./473682.js"),
  Chunk440589 = require("./440589.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk555574 = require("./555574.js");

function j() {
  return (0, Chunk951288.jsx)(Chunk494620.Z, {
    className: Chunk555574.maxInstancesWarning,
    children: (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-sm/medium",
      children: Chunk388032.intl.formatToPlainString(Chunk440589.default.kUNv8P, {
        maxInstances: Chunk473682.zI
      })
    })
  })
}

function x() {
  let {
    guildId: e,
    portkeyGames: t,
    instances: n,
    setPortkeyInstance: a,
    setCurrentGame: o,
    onNext: x
  } = (0, Chunk183369.aj)(), y = Chunk647438.useCallback(e => {
    o(e), x()
  }, [Chunk494620, x]), O = Chunk647438.useCallback(e => {
    a(e), x()
  }, [Chunk120356, x]), h = require.length >= Chunk473682.zI, P = require.length > 0;
  return 0 === Object.values(exports).length ? (0, Chunk951288.jsx)("div", {
    className: Chunk555574.loadingContainer,
    children: (0, Chunk951288.jsx)(Chunk481060.$jN, {
      type: Chunk481060.RAz.SPINNING_CIRCLE
    })
  }) : (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
    children: [P && (0, Chunk951288.jsxs)("div", {
      className: Chunk555574.gameSection,
      children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
        variant: "heading-md/semibold",
        children: Chunk388032.intl.string(Chunk440589.default.wzC4ws)
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk555574.gameInstanceContainer,
        children: require.map((t, n) => (0, l.jsx)(c.Z, {
          guildId: e,
          gameInstance: t,
          onClick: O
        }, "instance-".concat(t.id, "-").concat(n)))
      }), h && (0, Chunk951288.jsx)(j, {})]
    }), (0, Chunk951288.jsxs)("div", {
      className: r()(Chunk555574.gameSection, {
        [Chunk555574.disabled]: h
      }),
      children: [P && (0, Chunk951288.jsx)(Chunk481060.X6q, {
        variant: "heading-md/semibold",
        children: Chunk388032.intl.string(Chunk440589.default.l4UdiY)
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk555574.gameContainer,
        children: Object.values(exports).map((e, t) => (0, l.jsx)(u.Z, {
          game: e,
          disabled: h,
          onClick: y
        }, "game-".concat(e.id, "-").concat(t)))
      })]
    }), (0, Chunk951288.jsxs)(Chunk422663.ok, {
      step: Chunk473682.Vb.SELECT_GAME,
      className: Chunk555574.footerContainer,
      children: [(0, Chunk951288.jsxs)("div", {
        className: Chunk555574.warningContainer,
        children: [(0, Chunk951288.jsx)(Chunk481060.d3s, {
          size: "sm"
        }), (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-sm/medium",
          children: Chunk388032.intl.string(Chunk440589.default.RBv43d)
        })]
      }), (0, Chunk951288.jsx)(Chunk535895.Z, {})]
    })]
  })
}