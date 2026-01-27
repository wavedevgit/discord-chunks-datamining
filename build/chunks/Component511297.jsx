/** Chunk was on 20941 **/
/** chunk id: 511297, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => E
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

function O(e) {
  let {
    onClick: t,
    emoji: n,
    index: l,
    reducedMotion: a,
    isActive: i
  } = e, s = (0, g.vy)();
  return (0, r.jsx)(g.vw, {
    spring: s,
    children: (0, r.jsxs)(m.A, {
      contentClassName: A.qq,
      onClick: () => t(n),
      active: i,
      children: [(0, r.jsx)(o.A, {
        className: A.Zg,
        emojiId: n.id,
        emojiName: n.name,
        animated: !a && n.animated
      }), (0, r.jsxs)(h.A, {
        variant: "text-lg/bold",
        children: ["#", l + 1]
      })]
    })
  })
}

function E() {
  let e = (0, i.bG)([c.A], () => c.A.useReducedMotion),
    t = l.useContext(u.P),
    n = (0, s.rdh)(t.primaryColor).hex(),
    {
      emojis: {
        numEmojisSent: o,
        emojis: m
      } = {
        numEmojisSent: 0,
        emojis: []
      }
    } = (0, i.bG)([d.A], () => d.A.getCheckpointData()),
    g = 0 === o || 0 === m.length,
    [E, S] = l.useState(g ? {
      name: "\uD83D\uDE22",
      animated: false
    } : m[0]),
    N = g ? y.o : a.nm2;
  return (0, r.jsx)(p.A, {
    children: (0, r.jsxs)("div", {
      className: A.kL,
      children: [(0, r.jsx)(x.A, {
        emoji: E
      }), (0, r.jsxs)("div", {
        className: A.Qs,
        children: [(0, r.jsxs)("div", {
          className: _.DD,
          children: [(0, r.jsx)(N, {
            size: "refresh_sm",
            color: n,
            className: _.gr,
            colorClass: _.d7
          }), (0, r.jsx)(h.A, {
            variant: "eyebrow",
            className: _.UP,
            children: g ? C.intl.string(j.default.vnG9Sx) : C.intl.format(j.default.JwFMdL, {
              numEmojis: o
            })
          })]
        }), g ? (0, r.jsx)(h.A, {
          variant: "heading-xxl/medium",
          className: A.YI,
          children: C.intl.string(j.default.BHbwK1)
        }) : (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(b.A, {
            end: o
          }), (0, r.jsx)(h.A, {
            variant: "heading-xxl/medium",
            className: A.VA,
            children: C.intl.string(j.default.ZuvPfg)
          }), (0, r.jsx)("div", {
            className: A.gm,
            children: m.map((t, n) => (0, r.jsx)(O, {
              onClick: () => S(t),
              emoji: t,
              index: n,
              reducedMotion: e,
              isActive: t === E
            }, "emoji-".concat(n)))
          })]
        }), (0, r.jsx)(f.e, {
          slide: v.P7.EMOJIS
        })]
      })]
    })
  })
}