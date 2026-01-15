/** Chunk was on web.js **/
/** chunk id: 410853, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk324060 = require("./324060.js"),
  Chunk5888 = require("./5888.js"),
  Chunk639949 = require("./639949.jsx"),
  Chunk909397 = require("./909397.jsx"),
  Chunk198358 = require("./198358.jsx"),
  Chunk391876 = require("./391876.jsx"),
  Chunk947189 = require("./947189.jsx"),
  Chunk883166 = require("./883166.jsx"),
  Chunk693018 = require("./693018.jsx"),
  Chunk343438 = require("./343438.jsx"),
  Chunk612776 = require("./612776.js"),
  Chunk638398 = require("./638398.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk554445 = require("./554445.js"),
  Chunk340206 = require("./340206.js");

function T(e) {
  let {
    onClick: t,
    emoji: n,
    index: i,
    reducedMotion: a,
    isActive: o
  } = e, s = (0, g.gl)();
  return (0, r.jsx)(g.QR, {
    spring: s,
    children: (0, r.jsxs)(f.Z, {
      contentClassName: I.emojiContainer,
      onClick: () => t(n),
      active: o,
      children: [(0, r.jsx)(l.Z, {
        className: I.emoji,
        emojiId: n.id,
        emojiName: n.name,
        animated: !a && n.animated
      }), (0, r.jsxs)(h.Z, {
        variant: "text-lg/bold",
        children: ["#", i + 1]
      })]
    })
  })
}

function C() {
  let e = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
    t = i.useContext(u.Q),
    n = (0, s.dQu)(t.primaryColor).hex(),
    {
      emojis: {
        numEmojisSent: l,
        emojis: f
      } = {
        numEmojisSent: 0,
        emojis: []
      }
    } = (0, o.e7)([d.Z], () => d.Z.getCheckpointData()),
    g = 0 === l || 0 === f.length,
    [C, A] = i.useState(g ? {
      name: "\uD83D\uDE22",
      animated: false
    } : f[0]),
    N = g ? b.H : a.EO4;
  return (0, r.jsx)(_.Z, {
    children: (0, r.jsxs)("div", {
      className: I.container,
      children: [(0, r.jsx)(E.Z, {
        emoji: C
      }), (0, r.jsxs)("div", {
        className: I.content,
        children: [(0, r.jsxs)("div", {
          className: S.title,
          children: [(0, r.jsx)(N, {
            size: "refresh_sm",
            color: n,
            className: S.titleIcon,
            colorClass: S.iconColor
          }), (0, r.jsx)(h.Z, {
            variant: "eyebrow",
            className: S.eyebrow,
            children: g ? v.intl.string(O.default.vnG9Sx) : v.intl.format(O.default.JwFMdL, {
              numEmojis: l
            })
          })]
        }), g ? (0, r.jsx)(h.Z, {
          variant: "heading-xxl/medium",
          className: I.emptySubtitle,
          children: v.intl.string(O.default.BHbwK1)
        }) : (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(m.Z, {
            end: l
          }), (0, r.jsx)(h.Z, {
            variant: "heading-xxl/medium",
            className: I.subtitle,
            children: v.intl.string(O.default.ZuvPfg)
          }), (0, r.jsx)("div", {
            className: I.emojis,
            children: f.map((t, n) => (0, r.jsx)(T, {
              onClick: () => A(t),
              emoji: t,
              index: n,
              reducedMotion: e,
              isActive: t === C
            }, "emoji-".concat(n)))
          })]
        }), (0, r.jsx)(p.o, {
          slide: y.yD.EMOJIS
        })]
      })]
    })
  })
}