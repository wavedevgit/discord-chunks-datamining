/** Chunk was on 49131 **/
/** chunk id: 474366, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  q: () => w
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk493773 = require("./493773.js"),
  Chunk607070 = require("./607070.js"),
  Chunk745510 = require("./745510.jsx"),
  Chunk208049 = require("./208049.js"),
  Chunk763296 = require("./763296.js"),
  Chunk914010 = require("./914010.js"),
  Chunk626135 = require("./626135.js"),
  Chunk326706 = require("./326706.js"),
  Chunk981631 = require("./981631.js"),
  Chunk675654 = require("./675654.js"),
  Chunk710111 = require("./710111.js"),
  Chunk792389 = require("./792389.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk5929 = require("./5929.js");

function S(e) {
  let {
    className: t,
    sound: n,
    playSound: i,
    isPlaying: s,
    text: d
  } = e, u = (null == n ? true : n.emojiId) != null || (null == n ? true : n.emojiName) != null, m = y.intl.formatToPlainString(y.t.tuMUJ2, {
    emojiName: null == n ? true : n.emojiName,
    soundName: null == n ? true : n.name
  }), h = a.useCallback(() => {
    x.default.track(p.rMx.MODERATOR_QUEUE_ACTION, {
      guild_id: g.Z.getGuildId(),
      action: "airhorn"
    }), null != i && i()
  }, [i]);
  return (0, r.jsxs)(o.P3F, {
    "aria-label": m,
    tag: "span",
    onClick: h,
    className: l()(T.inlineContainer, T.inlineButton, {
      [T.playing]: true === s
    }, t),
    children: [u && (0, r.jsx)(c.Z, {
      emojiId: null == n ? true : n.emojiId,
      emojiName: null == n ? true : n.emojiName,
      className: T.soundmojiEmoji
    }), (0, r.jsx)("span", {
      children: " ".concat(d, " ")
    })]
  })
}

function N(e) {
  let {
    containerRef: t,
    text: n
  } = e, i = a.useRef(null), l = (0, s.e7)([f.Z], () => {
    var e;
    return null == (e = f.Z.getSoundsForGuild(v.X8)) ? true : e.find(e => "airhorn" === e.name)
  }), {
    createMultipleConfettiAt: o
  } = a.useContext(m.h), c = (0, s.e7)([u.Z], () => u.Z.useReducedMotion), {
    isPlaying: g,
    playSound: x
  } = (0, b.W)(l);
  (0, d.ZP)(() => {
    (0, h.w)()
  });
  let p = a.useCallback(async () => {
    if (await x()) {
      var e;
      if (null == (e = i.current) || e.addAnimation(), !c && (null == t ? true : t.current) != null) {
        let e = t.current.getBoundingClientRect(),
          n = {
            x: e.left + e.width / 2,
            y: e.top + e.height / 3
          },
          r = j.CA[Math.floor(Math.random() * j.CA.length)];
        o(n.x, n.y, {
          velocity: {
            type: "static-random",
            minValue: {
              x: false,
              y: false
            },
            maxValue: {
              x: 500,
              y: false
            }
          }
        }, 40, {
          sprite: r
        })
      }
    }
  }, [x, o, c, t]);
  return true === l ? null : (0, r.jsx)(S, {
    sound: l,
    playSound: p,
    isPlaying: g,
    text: n
  })
}

function w() {
  let e = a.useRef(null);
  return (0, r.jsxs)(o.Kqy, {
    className: T.container,
    direction: "vertical",
    align: "center",
    justify: "center",
    padding: {
      top: 24,
      bottom: 24
    },
    ref: e,
    children: [(0, r.jsx)(o.l22, {
      size: "custom",
      width: 48,
      height: 48
    }), (0, r.jsxs)(o.Kqy, {
      direction: "vertical",
      align: "center",
      justify: "center",
      children: [(0, r.jsx)(o.Heading, {
        className: T.header,
        variant: "heading-md/medium",
        children: y.intl.string(C.default.h6QNky)
      }), (0, r.jsx)(o.Text, {
        className: T.text,
        variant: "text-md/medium",
        color: "text-subtle",
        children: y.intl.format(C.default["8N4c58"], {
          airhornHook: t => (0, r.jsx)(N, {
            containerRef: e,
            text: t
          })
        })
      })]
    })]
  })
}