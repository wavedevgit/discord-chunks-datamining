/** Chunk was on web.js **/
/** chunk id: 511297, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => T
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk565645 = require("./565645.jsx"),
  Chunk775602 = require("./775602.js"),
  Chunk854987 = require("./854987.js"),
  Chunk719718 = require("./719718.js"),
  Chunk612082 = require("./612082.jsx"),
  Chunk155286 = require("./155286.jsx"),
  Chunk573138 = require("./573138.jsx"),
  Chunk877272 = require("./877272.jsx"),
  Chunk359588 = require("./359588.jsx"),
  Chunk398225 = require("./398225.jsx"),
  Chunk213533 = require("./213533.jsx"),
  Chunk419244 = require("./419244.jsx"),
  Chunk532294 = require("./532294.js"),
  Chunk622865 = require("./622865.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk308021 = require("./308021.js"),
  Chunk964801 = require("./964801.js");

function I(e) {
  let {
    onClick: t,
    emoji: n,
    index: i,
    reducedMotion: a,
    isActive: s
  } = e, o = (0, g.vy)();
  return (0, r.jsx)(g.vw, {
    spring: o,
    children: (0, r.jsxs)(f.A, {
      contentClassName: S.qq,
      onClick: () => t(n),
      active: s,
      children: [(0, r.jsx)(l.A, {
        className: S.Zg,
        emojiId: n.id,
        emojiName: n.name,
        animated: !a && n.animated
      }), (0, r.jsxs)(h.A, {
        variant: "text-lg/bold",
        children: ["#", i + 1]
      })]
    })
  })
}

function T() {
  let e = (0, s.bG)([c.A], () => c.A.useReducedMotion),
    t = i.useContext(u.P),
    n = (0, o.rdh)(t.primaryColor).hex(),
    {
      emojis: {
        numEmojisSent: l,
        emojis: f
      } = {
        numEmojisSent: 0,
        emojis: []
      }
    } = (0, s.bG)([d.A], () => d.A.getCheckpointData()),
    g = 0 === l || 0 === f.length,
    [T, C] = i.useState(g ? {
      name: "\uD83D\uDE22",
      animated: false
    } : f[0]),
    N = g ? b.o : a.nm2;
  return (0, r.jsx)(_.A, {
    children: (0, r.jsxs)("div", {
      className: S.kL,
      children: [(0, r.jsx)(E.A, {
        emoji: T
      }), (0, r.jsxs)("div", {
        className: S.Qs,
        children: [(0, r.jsxs)("div", {
          className: v.DD,
          children: [(0, r.jsx)(N, {
            size: "refresh_sm",
            color: n,
            className: v.gr,
            colorClass: v.d7
          }), (0, r.jsx)(h.A, {
            variant: "eyebrow",
            className: v.UP,
            children: g ? A.intl.string(O.default.vnG9Sx) : A.intl.format(O.default.JwFMdL, {
              numEmojis: l
            })
          })]
        }), g ? (0, r.jsx)(h.A, {
          variant: "heading-xxl/medium",
          className: S.YI,
          children: A.intl.string(O.default.BHbwK1)
        }) : (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(m.A, {
            end: l
          }), (0, r.jsx)(h.A, {
            variant: "heading-xxl/medium",
            className: S.VA,
            children: A.intl.string(O.default.ZuvPfg)
          }), (0, r.jsx)("div", {
            className: S.gm,
            children: f.map((t, n) => (0, r.jsx)(I, {
              onClick: () => C(t),
              emoji: t,
              index: n,
              reducedMotion: e,
              isActive: t === T
            }, "emoji-".concat(n)))
          })]
        }), (0, r.jsx)(p.e, {
          slide: y.P7.EMOJIS
        })]
      })]
    })
  })
}