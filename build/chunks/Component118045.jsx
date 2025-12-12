/** Chunk was on web.js **/
/** chunk id: 118045, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => P
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk210753 = require("./210753.js"),
  Chunk768581 = require("./768581.js"),
  Chunk324060 = require("./324060.js"),
  Chunk5888 = require("./5888.js"),
  Chunk539041 = require("./539041.jsx"),
  Chunk909397 = require("./909397.jsx"),
  Chunk198358 = require("./198358.jsx"),
  Chunk391876 = require("./391876.jsx"),
  Chunk883166 = require("./883166.jsx"),
  Chunk612776 = require("./612776.js"),
  Chunk638398 = require("./638398.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk554445 = require("./554445.js"),
  Chunk998018 = require("./998018.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
    })
  }
  return e
}

function C(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : C(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function N(e) {
  let {
    numDaysPlayed: t,
    game: n,
    index: a
  } = e, l = (0, i.useContext)(f.Q), p = (0, c.dQu)(l.primaryColor).hex(), {
    id: m,
    name: h,
    coverImageHash: b
  } = n, {
    coverImageUrl: I
  } = (0, u.$)(m), T = null != I ? I : d.ZP.getGameAssetURL({
    id: m,
    hash: b
  }), C = (0, E.gl)();
  return (0, r.jsxs)(E.QR, {
    className: o()(S.gameContainer, {
      [S.largerGameContainer]: 0 === a
    }),
    spring: C,
    children: [(0, r.jsx)(_.Z, {
      children: (0, r.jsxs)("div", {
        className: S.artContainer,
        children: [null != T ? (0, r.jsx)("img", {
          className: S.gameArt,
          alt: "",
          src: T
        }) : (0, r.jsx)("div", {
          className: S.gameArt,
          style: {
            borderColor: p
          },
          children: (0, r.jsx)(s.IMN, {
            size: "lg",
            className: S.unknownGameIcon
          })
        }), (0, r.jsx)("div", {
          className: S.rank,
          style: {
            backgroundColor: p
          },
          children: (0, r.jsxs)(g.Z, {
            variant: "text-lg/normal",
            className: v.numeric,
            children: ["#", a + 1]
          })
        })]
      })
    }), (0, r.jsx)(g.Z, {
      variant: "eyebrow",
      className: S.name,
      children: h
    }), (0, r.jsx)(g.Z, {
      variant: "text-sm/bold",
      className: S.sessions,
      children: O.intl.format(y.default.MugpMu, {
        numSessions: t
      })
    })]
  })
}

function P() {
  let e = (0, Chunk473749.useContext)(Chunk324060.Q),
    t = (0, Chunk481060.dQu)(module.primaryColor).hex(),
    {
      applications: {
        totalGamesPlayed: n,
        applications: a
      } = {
        totalGamesPlayed: 0,
        applications: []
      }
    } = (0, Chunk442837.e7)([Chunk5888.Z], () => Chunk5888.Z.getCheckpointData());
  return (0, Chunk54381.jsxs)(Chunk198358.Z, {
    verticalFlow: true,
    className: Chunk998018.container,
    children: [(0, Chunk54381.jsxs)("div", {
      className: Chunk554445.title,
      children: [(0, Chunk54381.jsx)(Chunk793030.iWm, {
        size: "refresh_sm",
        color: exports,
        colorClass: Chunk554445.iconColor
      }), (0, Chunk54381.jsx)(Chunk391876.Z, {
        variant: "eyebrow",
        className: Chunk554445.eyebrow,
        children: Chunk388032.intl.string(Chunk638398.default.dW6EBf)
      })]
    }), (0, Chunk54381.jsxs)("div", {
      className: Chunk998018.header,
      children: [(0, Chunk54381.jsx)(Chunk391876.Z, {
        variant: "display-lg",
        className: Chunk998018.display,
        children: Chunk388032.intl.string(Chunk388032.t.URyqtP)
      }), (0, Chunk54381.jsxs)("div", {
        children: [(0, Chunk54381.jsx)(Chunk391876.Z, {
          variant: "heading-xxl/medium",
          className: Chunk998018.subtitle,
          children: Chunk388032.intl.format(Chunk638398.default.gzlOml, {
            numGames: require,
            gamesHook: (e, t) => (0, r.jsx)(g.Z, {
              variant: "heading-xxl/medium",
              className: S.inline,
              children: e
            }, t)
          })
        }), (0, Chunk54381.jsx)(Chunk909397.o, {
          slide: Chunk612776.yD.GAMING
        })]
      })]
    }), (0, Chunk54381.jsx)("div", {
      className: Chunk998018.games,
      children: Chunk120356.map((e, t) => (0, r.jsx)(N, A(T({}, e), {
        index: t
      }), "game-".concat(t)))
    })]
  })
}