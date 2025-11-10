/** Chunk was on web.js **/
/** chunk id: 628692, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => A,
  ku: () => S
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk28664 = require("./28664.jsx"),
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

function I(e) {
  let {
    playSound: t
  } = e;
  return (0, r.jsxs)(c.P3F, {
    title: "Risky Click",
    tag: "span",
    onClick: t,
    className: v.inlineContainer,
    children: [(0, r.jsx)(c.gj8, {
      size: "md",
      color: "currentColor",
      className: v.unknownSound
    }), (0, r.jsx)("span", {
      children: "Unknown"
    })]
  })
}

function S(e) {
  let {
    soundId: t
  } = e, n = (0, s.e7)([m.Z], () => m.Z.getSoundById(t)), i = (0, f.V2)({
    location: "SoundboardMentionInline"
  }), {
    isPlaying: a,
    playSound: o
  } = (0, h.Z)(n);
  return i ? null == n ? (0, r.jsx)(I, {}) : (0, r.jsx)(T, {
    className: v.inlineTextArea,
    isPlaying: a,
    playSound: o,
    sound: n
  }) : null
}

function T(e) {
  let {
    className: t,
    sound: n,
    playSound: i,
    isPlaying: a
  } = e, s = (null == n ? true : n.emojiId) != null || (null == n ? true : n.emojiName) != null, l = O.intl.formatToPlainString(O.t.tuMUJ2, {
    emojiName: null == n ? true : n.emojiName,
    soundName: null == n ? true : n.name
  });
  return (0, d.X0)({
    location: "SoundboardMentionInline"
  }) ? (0, r.jsxs)(c.P3F, {
    "aria-label": l,
    tag: "span",
    onClick: i,
    className: o()(v.inlineContainer, v.inlineButton, {
      [v.playing]: true === a
    }, t),
    children: [s && (0, r.jsx)(u.Z, {
      emojiId: null == n ? true : n.emojiId,
      emojiName: null == n ? true : n.emojiName,
      className: v.soundmojiEmoji
    }), (0, r.jsx)("span", {
      children: " ".concat(null == n ? true : n.name, " ")
    })]
  }) : null
}
let A = function(e) {
  let {
    channelId: t,
    messageId: n,
    soundId: a,
    messageSounds: o,
    jumbo: c = false
  } = e, u = b.jU.useSetting(), f = (0, s.e7)([m.Z], () => m.Z.getSoundById(a), [a]), O = i.useMemo(() => {
    var e;
    return null != (e = (0, _.Z)(t, n, a, o)) ? e : f
  }, [t, n, a, o, f]), S = (0, s.e7)([y.Z], () => y.Z.getChannel(t)), A = (0, d.X0)({
    location: "SoundboardMention"
  }), C = i.useRef(null), {
    isPlaying: N,
    playSound: R
  } = (0, h.Z)(O, S), P = i.useCallback(async () => {
    if (await R()) {
      var e;
      null == (e = C.current) || e.addAnimation()
    }
  }, [R]);
  return A ? null == O ? (0, r.jsx)(I, {
    playSound: P
  }) : c && !u ? (0, r.jsx)(E.ZP, {
    containerClassName: v.jumboContainer,
    className: v.jumboButton,
    sound: O,
    channel: S,
    onSelectItem: P,
    isPlayingSoundOverride: N,
    isSoundmoji: true,
    buttonOverlay: g.Pb.SOUNDMOJI,
    tooltipClassName: v.tooltip,
    tooltipContentClassName: v.tooltipContainer,
    tooltipOverride: (0, r.jsx)(p.Dp, {
      sound: O
    }),
    soundmojiVisualEffectRef: C
  }, "".concat(O.soundId)) : (0, r.jsx)(l.u, {
    "aria-label": O.name,
    "data-pending-richtooltip-migration": true,
    __unsupportedReactNodeAsText: (0, r.jsx)(p.Dp, {
      sound: O
    }),
    position: "top",
    delay: 500,
    children: (0, r.jsx)("span", {
      children: (0, r.jsx)(T, {
        sound: O,
        playSound: P,
        isPlaying: N
      })
    })
  }) : null
}