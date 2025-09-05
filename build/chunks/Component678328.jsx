/** Chunk was on 39159 **/
/** chunk id: 678328, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk494620 = require("./494620.jsx"),
  Chunk748745 = require("./748745.jsx"),
  Chunk567225 = require("./567225.jsx"),
  Chunk183369 = require("./183369.jsx"),
  Chunk422663 = require("./422663.jsx"),
  Chunk473682 = require("./473682.js"),
  Chunk401561 = require("./401561.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk782991 = require("./782991.js");

function j() {
  let {
    portkeyGames: e,
    instances: n,
    setPortkeyInstance: t,
    setCurrentGame: r,
    onNext: j
  } = (0, Chunk183369.aj)(), b = Chunk647438.useCallback(e => {
    r(e), j()
  }, [Chunk120356, j]), f = Chunk647438.useCallback(e => {
    t(e), j()
  }, [require, j]), h = exports.length >= Chunk473682.zI, _ = exports.length > 0;
  return 0 === Object.values(module).length ? (0, Chunk951288.jsx)("div", {
    className: Chunk782991.loadingContainer,
    children: (0, Chunk951288.jsx)(Chunk481060.$jN, {
      type: Chunk481060.RAz.SPINNING_CIRCLE
    })
  }) : (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
    children: [(0, Chunk951288.jsxs)("div", {
      className: Chunk782991.headingContainer,
      children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
        variant: "heading-lg/semibold",
        children: Chunk388032.intl.string(Chunk401561.default.DG1SHB)
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-sm/medium",
        children: Chunk388032.intl.string(Chunk401561.default.hkWuWF)
      })]
    }), _ && (0, Chunk951288.jsxs)("div", {
      className: Chunk782991.gameSection,
      children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
        variant: "heading-md/semibold",
        children: Chunk388032.intl.string(Chunk401561.default.wzC4ws)
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk782991.gameInstanceContainer,
        children: exports.map((e, n) => (0, a.jsx)(c.Z, {
          gameInstance: e,
          onClick: f
        }, "instance-".concat(e.id, "-").concat(n)))
      }), h && (0, Chunk951288.jsx)(Chunk494620.Z, {
        className: Chunk782991.maxInstancesWarning,
        children: (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-sm/medium",
          children: Chunk388032.intl.formatToPlainString(Chunk401561.default.kUNv8P, {
            maxInstances: Chunk473682.zI
          })
        })
      })]
    }), (0, Chunk951288.jsxs)("div", {
      className: l()(Chunk782991.gameSection, {
        [Chunk782991.disabled]: h
      }),
      children: [_ && (0, Chunk951288.jsx)(Chunk481060.X6q, {
        variant: "heading-md/semibold",
        children: Chunk388032.intl.string(Chunk401561.default.l4UdiY)
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk782991.gameContainer,
        children: Object.values(module).map((e, n) => (0, a.jsx)(d.Z, {
          game: e,
          disabled: h,
          onClick: b
        }, "game-".concat(e.id, "-").concat(n)))
      })]
    }), (0, Chunk951288.jsxs)(Chunk422663.ok, {
      step: Chunk473682.Vb.SELECT_GAME,
      className: Chunk782991.footerContainer,
      children: [(0, Chunk951288.jsxs)("div", {
        className: Chunk782991.warningContainer,
        children: [(0, Chunk951288.jsx)(Chunk481060.d3s, {
          size: "sm"
        }), (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-sm/medium",
          children: Chunk388032.intl.string(Chunk401561.default.RBv43d)
        })]
      }), (0, Chunk951288.jsx)(Chunk422663.VS, {})]
    })]
  })
}