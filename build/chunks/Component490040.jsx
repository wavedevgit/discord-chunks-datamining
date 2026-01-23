/** Chunk was on web.js **/
/** chunk id: 490040, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => T,
  LF: () => I
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk417597 = require("./417597.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk565645 = require("./565645.jsx"),
  Chunk864145 = require("./864145.js"),
  Chunk704591 = require("./704591.js"),
  Chunk470020 = require("./470020.js"),
  Chunk105713 = require("./105713.jsx"),
  Chunk586583 = require("./586583.js"),
  Chunk209932 = require("./209932.js"),
  Chunk807348 = require("./807348.js"),
  Chunk69217 = require("./69217.jsx"),
  Chunk253932 = require("./253932.js"),
  Chunk734057 = require("./734057.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk543218 = require("./543218.js");

function A(e) {
  let {
    playSound: t
  } = e;
  return (0, r.jsxs)(c.DUT, {
    title: "Risky Click",
    tag: "span",
    onClick: t,
    className: v.Ls,
    children: [(0, r.jsx)(c.HKD, {
      size: "md",
      color: "currentColor",
      className: v.uA
    }), (0, r.jsx)("span", {
      children: "Unknown"
    })]
  })
}

function I(e) {
  let {
    soundId: t
  } = e, n = (0, o.bG)([m.A], () => m.A.getSoundById(t)), i = (0, f.tj)({
    location: "SoundboardMentionInline"
  }), {
    isPlaying: a,
    playSound: s
  } = (0, h.A)(n);
  return i ? null == n ? (0, r.jsx)(A, {}) : (0, r.jsx)(S, {
    className: v.wg,
    isPlaying: a,
    playSound: s,
    sound: n
  }) : null
}

function S(e) {
  let {
    className: t,
    sound: n,
    playSound: i,
    isPlaying: a
  } = e, o = (null == n ? true : n.emojiId) != null || (null == n ? true : n.emojiName) != null, l = O.intl.formatToPlainString(O.t.tuMUJ2, {
    emojiName: null == n ? true : n.emojiName,
    soundName: null == n ? true : n.name
  });
  return (0, d.X9)({
    location: "SoundboardMentionInline"
  }) ? (0, r.jsxs)(c.DUT, {
    "aria-label": l,
    tag: "span",
    onClick: i,
    className: s()(v.Ls, v.oR, {
      [v.he]: true === a
    }, t),
    children: [o && (0, r.jsx)(u.A, {
      emojiId: null == n ? true : n.emojiId,
      emojiName: null == n ? true : n.emojiName,
      className: v.JS
    }), (0, r.jsx)("span", {
      children: " ".concat(null == n ? true : n.name, " ")
    })]
  }) : null
}
let T = function(e) {
  let {
    channelId: t,
    messageId: n,
    soundId: a,
    messageSounds: s,
    jumbo: c = false
  } = e, u = y.hH.useSetting(), f = (0, o.bG)([m.A], () => m.A.getSoundById(a), [a]), O = i.useMemo(() => {
    var e;
    return null != (e = (0, p.A)(t, n, a, s)) ? e : f
  }, [t, n, a, s, f]), I = (0, o.bG)([b.A], () => b.A.getChannel(t)), T = (0, d.X9)({
    location: "SoundboardMention"
  }), C = i.useRef(null), {
    isPlaying: N,
    playSound: w
  } = (0, h.A)(O, I), R = i.useCallback(async () => {
    if (await w()) {
      var e;
      null == (e = C.current) || e.addAnimation()
    }
  }, [w]);
  return T ? null == O ? (0, r.jsx)(A, {
    playSound: R
  }) : c && !u ? (0, r.jsx)(E.Ay, {
    containerClassName: v.Ti,
    className: v.UX,
    sound: O,
    channel: I,
    onSelectItem: R,
    isPlayingSoundOverride: N,
    isSoundmoji: true,
    buttonOverlay: g.If.SOUNDMOJI,
    tooltipClassName: v.YL,
    tooltipContentClassName: v.R3,
    tooltipOverride: (0, r.jsx)(_.WE, {
      sound: O
    }),
    soundmojiVisualEffectRef: C
  }, "".concat(O.soundId)) : (0, r.jsx)(l.m, {
    "aria-label": O.name,
    "data-pending-richtooltip-migration": true,
    __unsupportedReactNodeAsText: (0, r.jsx)(_.WE, {
      sound: O
    }),
    position: "top",
    delay: 500,
    children: (0, r.jsx)("span", {
      children: (0, r.jsx)(S, {
        sound: O,
        playSound: R,
        isPlaying: N
      })
    })
  }) : null
}