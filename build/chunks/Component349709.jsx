/** Chunk was on 93626 **/
/** chunk id: 349709, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  Z: () => E
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk225433 = require("./225433.jsx"),
  Chunk727637 = require("./727637.js"),
  Chunk318766 = require("./318766.jsx"),
  Chunk907040 = require("./907040.jsx"),
  Chunk984933 = require("./984933.js"),
  Chunk903749 = require("./903749.js"),
  Chunk185923 = require("./185923.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk239336 = require("./239336.js");

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var l = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(l);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
      return Object.getOwnPropertyDescriptor(l, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = l[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var l = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      l.push.apply(l, n)
    }
    return l
  })(Object(t)).forEach(function(l) {
    Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(t, l))
  }), e
}

function E(e) {
  let {
    className: t,
    guildId: l,
    error: s,
    emojiId: E,
    emojiName: I,
    isRequiredField: w = true,
    shouldUpdateBothEmojiFields: N = false,
    setEmojiId: O,
    setEmojiName: S
  } = e, C = (0, j.Z)({
    emojiId: E,
    emojiName: I
  }), P = (0, a.e7)([p.ZP], () => null != l ? p.ZP.getDefaultChannel(l) : null), D = i.useRef(null), k = (0, m.Z)(D), Z = () => {
    S(true), O(true)
  }, R = e => {
    e.stopPropagation(), Z()
  }, _ = i.useMemo(() => {
    let e = null != E && "" !== E,
      t = null != I && "" !== I,
      l = null != C && "" !== C,
      n = t && !Number.isNaN(parseInt(I)) && !l && !e;
    return {
      hasEmojiId: e,
      hasEmojiName: t,
      hasEmojiDisplayName: l,
      isDeletedCustomEmoji: n
    }
  }, [E, I, C]);
  return (0, n.jsx)(u.xJW, {
    required: w,
    title: b.intl.string(b.t["3BQmiI"]),
    className: r()(t, x.section),
    error: s,
    children: (0, n.jsx)(u.yRy, {
      targetElementRef: D,
      animation: u.yRy.Animation.NONE,
      position: "top",
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, n.jsx)(g.Z, {
          closePopout: t,
          pickerIntention: v.Hz.SOUNDBOARD,
          onNavigateAway: t,
          onSelectEmoji: e => {
            let {
              emoji: l,
              willClose: n
            } = e, i = (null == l ? true : l.id) == null;
            Z(), i ? S(null == l ? true : l.optionallyDiverseSequence) : (N && S(null == l ? true : l.name), O(null == l ? true : l.id)), n && t()
          },
          guildId: l,
          channel: P
        })
      },
      children: (e, t) => {
        let {
          isShown: l
        } = t;
        return (0, n.jsxs)("div", y(h({}, e), {
          className: x.emojiInput,
          ref: D,
          children: [(0, n.jsx)(f.Z, {
            className: x.emojiButton,
            active: l,
            tabIndex: 0,
            renderButtonContents: !_.isDeletedCustomEmoji && (_.hasEmojiId || _.hasEmojiName) ? () => (0, n.jsx)(c.Z, {
              emojiName: I,
              emojiId: E
            }) : null
          }), (0, n.jsx)(o.Is, {
            inputClassName: x.emojiText,
            placeholder: b.intl.string(b.t.QTK0TE),
            value: !_.isDeletedCustomEmoji && _.hasEmojiDisplayName ? ":".concat(C, ":") : "",
            readOnly: true
          }), !_.isDeletedCustomEmoji && _.hasEmojiDisplayName && k && (0, n.jsx)(d.Z, y(h({}, e), {
            onClick: R,
            className: x.removeButton
          }))]
        }))
      }
    })
  })
}