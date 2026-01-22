/** Chunk was on 91284 **/
/** chunk id: 355609, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y,
  k: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk801264 = require("./801264.jsx"),
  Chunk363487 = require("./363487.js"),
  Chunk397400 = require("./397400.js"),
  Chunk709255 = require("./709255.jsx"),
  Chunk895770 = require("./895770.jsx"),
  Chunk468946 = require("./468946.jsx"),
  Chunk27023 = require("./27023.jsx"),
  Chunk548392 = require("./548392.jsx"),
  Chunk800007 = require("./800007.js"),
  Chunk294726 = require("./294726.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk453729 = require("./453729.js");

function h() {
  return (0, l.jsx)(d.A, {
    className: E.Bq,
    children: (0, l.jsx)(u.Text, {
      variant: "text-sm/medium",
      children: x.intl.formatToPlainString(j.default.xta2U9, {
        maxInstances: _.ZI
      })
    })
  })
}

function y() {
  let {
    guildId: e,
    gameServerGames: t,
    instances: n,
    gameServerInstance: a,
    setGameServerInstance: d,
    setCurrentGame: y,
    onNext: A
  } = (0, b.bv)();
  (0, m.ft)(e, null == a ? "create" : "edit");
  let S = i.useCallback(e => {
      y(e), A()
    }, [y, A]),
    O = i.useCallback(e => {
      d(e), A()
    }, [d, A]),
    k = n.length >= _.ZI,
    I = n.length > 0,
    N = (0, c.A)(e);
  return 0 === Object.values(t).length ? (0, l.jsx)("div", {
    className: E.g4,
    children: (0, l.jsx)(u.y$y, {
      type: u.tVU.SPINNING_CIRCLE
    })
  }) : (0, l.jsxs)(l.Fragment, {
    children: [I && (0, l.jsxs)("div", {
      className: E.yn,
      children: [(0, l.jsx)(u.Heading, {
        variant: "heading-md/semibold",
        children: x.intl.string(j.default.BOWmmT)
      }), (0, l.jsx)("div", {
        className: E.Hy,
        children: n.map((t, n) => (0, l.jsx)(v.A, {
          guildId: e,
          gameInstance: t,
          onClick: O
        }, "instance-".concat(t.id, "-").concat(n)))
      }), k && (0, l.jsx)(h, {})]
    }), (0, l.jsxs)("div", {
      className: r()(E.yn, {
        [E.r9]: k
      }),
      children: [I && (0, l.jsx)(u.Heading, {
        variant: "heading-md/semibold",
        children: x.intl.string(j.default.NIwDqW)
      }), (0, l.jsx)("div", {
        className: E.Y_,
        children: Object.values(t).map((t, n) => (0, l.jsx)(s.m, {
          asContainer: true,
          text: t.disabled ? x.intl.formatToPlainString(j.default.uVpJYf, {
            gameName: t.name
          }) : null,
          position: "top",
          children: (0, l.jsx)(f.A, {
            guildId: e,
            game: t,
            disabled: k || !N || t.disabled,
            onClick: S,
            location: o.A.GAME_SERVER_SETUP_MODAL
          })
        }, "game-".concat(t.id, "-").concat(n)))
      })]
    }), (0, l.jsxs)(p.N4, {
      step: _.HS.SELECT_GAME,
      className: E.xQ,
      children: [(0, l.jsxs)("div", {
        className: E.UW,
        children: [(0, l.jsx)(u.mir, {
          size: "sm"
        }), (0, l.jsx)(u.Text, {
          variant: "text-sm/medium",
          children: x.intl.string(j.default["5DjxXm"])
        })]
      }), (0, l.jsx)(g.A, {})]
    })]
  })
}