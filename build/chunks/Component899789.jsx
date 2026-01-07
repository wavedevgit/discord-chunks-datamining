/** Chunk was on 67365 **/
/** chunk id: 899789, original params: e,n,t (module,exports,require) **/
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
  Chunk914820 = require("./914820.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk470682 = require("./470682.js");

function h() {
  return (0, l.jsx)(c.Z, {
    className: E.maxInstancesWarning,
    children: (0, l.jsx)(u.Text, {
      variant: "text-sm/medium",
      children: j.intl.formatToPlainString(x.default.xta2U9, {
        maxInstances: _.YX
      })
    })
  })
}

function S() {
  let {
    guildId: e,
    gameServerGames: n,
    instances: t,
    gameServerInstance: a,
    setGameServerInstance: c,
    setCurrentGame: S,
    onNext: y
  } = (0, b.JL)();
  (0, m.cq)(e, null == a ? "create" : "edit");
  let O = i.useCallback(e => {
      S(e), y()
    }, [S, y]),
    k = i.useCallback(e => {
      c(e), y()
    }, [c, y]),
    I = t.length >= _.YX,
    C = t.length > 0,
    P = (0, d.Z)(e);
  return 0 === Object.values(n).length ? (0, l.jsx)("div", {
    className: E.loadingContainer,
    children: (0, l.jsx)(u.$jN, {
      type: u.RAz.SPINNING_CIRCLE
    })
  }) : (0, l.jsxs)(l.Fragment, {
    children: [C && (0, l.jsxs)("div", {
      className: E.gameSection,
      children: [(0, l.jsx)(u.Heading, {
        variant: "heading-md/semibold",
        children: j.intl.string(x.default.BOWmmT)
      }), (0, l.jsx)("div", {
        className: E.gameInstanceContainer,
        children: t.map((n, t) => (0, l.jsx)(v.Z, {
          guildId: e,
          gameInstance: n,
          onClick: k
        }, "instance-".concat(n.id, "-").concat(t)))
      }), I && (0, l.jsx)(h, {})]
    }), (0, l.jsxs)("div", {
      className: r()(E.gameSection, {
        [E.disabled]: I
      }),
      children: [C && (0, l.jsx)(u.Heading, {
        variant: "heading-md/semibold",
        children: j.intl.string(x.default.NIwDqW)
      }), (0, l.jsx)("div", {
        className: E.gameContainer,
        children: Object.values(n).map((n, t) => (0, l.jsx)(s.u, {
          asContainer: true,
          text: n.disabled ? j.intl.formatToPlainString(x.default.uVpJYf, {
            gameName: n.name
          }) : null,
          position: "top",
          children: (0, l.jsx)(f.Z, {
            guildId: e,
            game: n,
            disabled: I || !P || n.disabled,
            onClick: O,
            location: o.Z.GAME_SERVER_SETUP_MODAL
          })
        }, "game-".concat(n.id, "-").concat(t)))
      })]
    }), (0, l.jsxs)(p.o2, {
      step: _.EK.SELECT_GAME,
      className: E.footerContainer,
      children: [(0, l.jsxs)("div", {
        className: E.warningContainer,
        children: [(0, l.jsx)(u.d3s, {
          size: "sm"
        }), (0, l.jsx)(u.Text, {
          variant: "text-sm/medium",
          children: j.intl.string(x.default["5DjxXm"])
        })]
      }), (0, l.jsx)(g.Z, {})]
    })]
  })
}