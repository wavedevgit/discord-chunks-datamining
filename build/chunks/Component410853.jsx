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
  Chunk862474 = require("./862474.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk417788 = require("./417788.js"),
  Chunk559153 = require("./559153.js");

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
      }), (0, r.jsxs)(m.Z, {
        variant: "text-lg/bold",
        children: ["#", i + 1]
      })]
    })
  })
}

function C() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion),
    t = Chunk473749.useContext(Chunk324060.Q),
    n = (0, Chunk481060.dQu)(exports.primaryColor).hex(),
    {
      emojis: {
        numEmojisSent: l,
        emojis: f
      } = {
        numEmojisSent: 0,
        emojis: []
      }
    } = (0, Chunk442837.e7)([Chunk5888.Z], () => Chunk5888.Z.getCheckpointData()),
    g = 0 === Chunk596454 || 0 === Chunk639949.length,
    [C, A] = Chunk473749.useState(Chunk883166 ? {
      name: "\uD83D\uDE22",
      animated: false
    } : Chunk639949[0]),
    N = Chunk883166 ? Chunk343438.H : Chunk793030.EO4;
  return (0, Chunk54381.jsx)(Chunk198358.Z, {
    children: (0, Chunk54381.jsxs)("div", {
      className: Chunk559153.container,
      children: [(0, Chunk54381.jsx)(Chunk693018.Z, {
        emoji: C
      }), (0, Chunk54381.jsxs)("div", {
        className: Chunk559153.content,
        children: [(0, Chunk54381.jsxs)("div", {
          className: Chunk417788.title,
          children: [(0, Chunk54381.jsx)(N, {
            size: "refresh_sm",
            color: require,
            className: Chunk417788.titleIcon,
            colorClass: Chunk417788.iconColor
          }), (0, Chunk54381.jsx)(Chunk391876.Z, {
            variant: "eyebrow",
            className: Chunk417788.eyebrow,
            children: Chunk883166 ? Chunk388032.intl.string(Chunk862474.default.vnG9Sx) : Chunk388032.intl.format(Chunk862474.default.JwFMdL, {
              numEmojis: Chunk596454
            })
          })]
        }), Chunk883166 ? (0, Chunk54381.jsx)(Chunk391876.Z, {
          variant: "heading-xxl/medium",
          className: Chunk559153.emptySubtitle,
          children: Chunk388032.intl.string(Chunk862474.default.BHbwK1)
        }) : (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
          children: [(0, Chunk54381.jsx)(Chunk947189.Z, {
            end: Chunk596454
          }), (0, Chunk54381.jsx)(Chunk391876.Z, {
            variant: "heading-xxl/medium",
            className: Chunk559153.subtitle,
            children: Chunk388032.intl.string(Chunk862474.default.ZuvPfg)
          }), (0, Chunk54381.jsx)("div", {
            className: Chunk559153.emojis,
            children: Chunk639949.map((t, n) => (0, r.jsx)(T, {
              onClick: () => A(t),
              emoji: t,
              index: n,
              reducedMotion: e,
              isActive: t === C
            }, "emoji-".concat(n)))
          })]
        }), (0, Chunk54381.jsx)(Chunk909397.o, {
          slide: Chunk612776.yD.EMOJIS
        })]
      })]
    })
  })
}