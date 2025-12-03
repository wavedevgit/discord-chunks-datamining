/** Chunk was on 9456 **/
/** chunk id: 474366, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  q: () => S
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk342153 = require("./342153.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk65766 = require("./65766.js");

function T(e) {
  let {
    className: t,
    sound: n,
    playSound: l,
    isPlaying: s,
    text: d
  } = e, u = (null == n ? true : n.emojiId) != null || (null == n ? true : n.emojiName) != null, m = C.intl.formatToPlainString(C.t.tuMUJ2, {
    emojiName: null == n ? true : n.emojiName,
    soundName: null == n ? true : n.name
  }), h = i.useCallback(() => {
    x.default.track(b.rMx.MODERATOR_QUEUE_ACTION, {
      guild_id: f.Z.getGuildId(),
      action: "airhorn"
    }), null != l && l()
  }, [l]);
  return (0, r.jsxs)(o.P3F, {
    "aria-label": m,
    tag: "span",
    onClick: h,
    className: a()(y.inlineContainer, y.inlineButton, {
      [y.playing]: true === s
    }, t),
    children: [u && (0, r.jsx)(c.Z, {
      emojiId: null == n ? true : n.emojiId,
      emojiName: null == n ? true : n.emojiName,
      className: y.soundmojiEmoji
    }), (0, r.jsx)("span", {
      children: " ".concat(d, " ")
    })]
  })
}

function w(e) {
  let {
    containerRef: t,
    text: n
  } = e, l = i.useRef(null), a = (0, s.e7)([g.Z], () => {
    var e;
    return null == (e = g.Z.getSoundsForGuild(v.X8)) ? true : e.find(e => "airhorn" === e.name)
  }), {
    createMultipleConfettiAt: o
  } = i.useContext(m.h), c = (0, s.e7)([u.Z], () => u.Z.useReducedMotion), {
    isPlaying: f,
    playSound: x
  } = (0, p.W)(a);
  (0, d.ZP)(() => {
    (0, h.w)()
  });
  let b = i.useCallback(async () => {
    if (await x()) {
      var e;
      if (null == (e = l.current) || e.addAnimation(), !c && (null == t ? true : t.current) != null) {
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
  return true === a ? null : (0, r.jsx)(T, {
    sound: a,
    playSound: b,
    isPlaying: f,
    text: n
  })
}

function S() {
  let e = Chunk473749.useRef(null);
  return (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
    className: Chunk65766.container,
    direction: "vertical",
    align: "center",
    justify: "center",
    padding: {
      top: 24,
      bottom: 24
    },
    ref: module,
    children: [(0, Chunk54381.jsx)(Chunk481060.l22, {
      size: "custom",
      width: 48,
      height: 48
    }), (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
      direction: "vertical",
      align: "center",
      justify: "center",
      children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
        className: Chunk65766.header,
        variant: "heading-md/medium",
        children: Chunk388032.intl.string(Chunk342153.default.h6QNky)
      }), (0, Chunk54381.jsx)(Chunk481060.Text, {
        className: Chunk65766.text,
        variant: "text-md/medium",
        color: "text-subtle",
        children: Chunk388032.intl.format(Chunk342153.default["8N4c58"], {
          airhornHook: t => (0, r.jsx)(w, {
            containerRef: e,
            text: t
          })
        })
      })]
    })]
  })
}