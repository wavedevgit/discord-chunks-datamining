/** Chunk was on web.js **/
/** chunk id: 628692, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => R,
  ku: () => N
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk722932 = require("./722932.js"),
  Chunk125900 = require("./125900.js"),
  Chunk801606 = require("./801606.js"),
  Chunk409700 = require("./409700.jsx"),
  Chunk321889 = require("./321889.js"),
  Chunk763296 = require("./763296.js"),
  Chunk697426 = require("./697426.js"),
  Chunk294206 = require("./294206.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk592125 = require("./592125.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk766106 = require("./766106.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}

function T(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function A(e) {
  let {
    playSound: t
  } = e;
  return (0, r.jsxs)(l.P3F, {
    title: "Risky Click",
    tag: "span",
    onClick: t,
    className: O.inlineContainer,
    children: [(0, r.jsx)(l.gj8, {
      size: "md",
      color: "currentColor",
      className: O.unknownSound
    }), (0, r.jsx)("span", {
      children: "Unknown"
    })]
  })
}

function N(e) {
  let {
    soundId: t
  } = e, n = (0, s.e7)([h.Z], () => h.Z.getSoundById(t)), i = (0, d.V2)({
    location: "SoundboardMentionInline"
  }), {
    isPlaying: a,
    playSound: o
  } = (0, p.Z)(n);
  return i ? null == n ? (0, r.jsx)(A, {}) : (0, r.jsx)(C, {
    className: O.inlineTextArea,
    isPlaying: a,
    playSound: o,
    sound: n
  }) : null
}

function C(e) {
  let {
    className: t,
    sound: n,
    playSound: i,
    isPlaying: a
  } = e, s = (null == n ? true : n.emojiId) != null || (null == n ? true : n.emojiName) != null, d = y.intl.formatToPlainString(y.t.tuMUJy, {
    emojiName: null == n ? true : n.emojiName,
    soundName: null == n ? true : n.name
  });
  return (0, u.X0)({
    location: "SoundboardMentionInline"
  }) ? (0, r.jsxs)(l.P3F, {
    "aria-label": d,
    tag: "span",
    onClick: i,
    className: o()(O.inlineContainer, O.inlineButton, {
      [O.playing]: true === a
    }, t),
    children: [s && (0, r.jsx)(c.Z, {
      emojiId: null == n ? true : n.emojiId,
      emojiName: null == n ? true : n.emojiName,
      className: O.soundmojiEmoji
    }), (0, r.jsx)("span", {
      children: " ".concat(null == n ? true : n.name, " ")
    })]
  }) : null
}
let R = function(e) {
  let {
    channelId: t,
    messageId: n,
    soundId: a,
    messageSounds: o,
    jumbo: c = false
  } = e, d = E.jU.useSetting(), y = (0, s.e7)([h.Z], () => h.Z.getSoundById(a), [a]), v = i.useMemo(() => {
    var e;
    return null != (e = (0, f.Z)(t, n, a, o)) ? e : y
  }, [t, n, a, o, y]), T = (0, s.e7)([b.Z], () => b.Z.getChannel(t)), N = (0, u.X0)({
    location: "SoundboardMention"
  }), R = i.useRef(null), {
    isPlaying: P,
    playSound: w
  } = (0, p.Z)(v, T), D = i.useCallback(async () => {
    if (await w()) {
      var e;
      null == (e = R.current) || e.addAnimation()
    }
  }, [w]);
  return N ? null == v ? (0, r.jsx)(A, {
    playSound: D
  }) : c && !d ? (0, r.jsx)(g.ZP, {
    containerClassName: O.jumboContainer,
    className: O.jumboButton,
    sound: v,
    channel: T,
    onSelectItem: D,
    isPlayingSoundOverride: P,
    isSoundmoji: true,
    buttonOverlay: m.Pb.SOUNDMOJI,
    tooltipClassName: O.tooltip,
    tooltipContentClassName: O.tooltipContainer,
    tooltipOverride: (0, r.jsx)(_.Dp, {
      sound: v
    }),
    soundmojiVisualEffectRef: R
  }, "".concat(v.soundId)) : (0, r.jsx)(l.ua7, {
    "aria-label": v.name,
    text: (0, r.jsx)(_.Dp, {
      sound: v
    }),
    tooltipClassName: O.tooltip,
    tooltipContentClassName: O.tooltipContainer,
    position: "top",
    delay: 500,
    children: e => (0, r.jsx)("span", S(I({}, e), {
      children: (0, r.jsx)(C, {
        sound: v,
        playSound: D,
        isPlaying: P
      })
    }))
  }) : null
}