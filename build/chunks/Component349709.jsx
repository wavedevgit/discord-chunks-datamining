/** Chunk was on 93626 **/
/** chunk id: 349709, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk225433 = require("./225433.jsx"),
  Chunk104505 = require("./104505.js"),
  Chunk318766 = require("./318766.jsx"),
  Chunk907040 = require("./907040.jsx"),
  Chunk984933 = require("./984933.js"),
  Chunk903749 = require("./903749.js"),
  Chunk185923 = require("./185923.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk239336 = require("./239336.js");

function v(e) {
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

function x(e, t) {
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

function h(e) {
  let {
    className: t,
    guildId: l,
    error: h,
    emojiId: b,
    emojiName: y,
    isRequiredField: E = true,
    shouldUpdateBothEmojiFields: S = false,
    setEmojiId: I,
    setEmojiName: w
  } = e, C = (0, g.Z)({
    emojiId: b,
    emojiName: y
  }), N = (0, r.e7)([m.ZP], () => null != l ? m.ZP.getDefaultChannel(l) : null), O = i.useRef(null), {
    isHoveringOrFocusing: P
  } = (0, u.Z)(O), k = () => {
    w(true), I(true)
  }, D = e => {
    e.stopPropagation(), k()
  }, Z = i.useMemo(() => {
    let e = null != b && "" !== b,
      t = null != y && "" !== y,
      l = null != C && "" !== C,
      n = t && !Number.isNaN(parseInt(y)) && !l && !e;
    return {
      hasEmojiId: e,
      hasEmojiName: t,
      hasEmojiDisplayName: l,
      isDeletedCustomEmoji: n
    }
  }, [b, y, C]), T = !Z.isDeletedCustomEmoji && Z.hasEmojiDisplayName;
  return (0, n.jsx)("div", {
    className: t,
    children: (0, n.jsx)(a.gNt, {
      required: E,
      label: p.intl.string(p.t["3BQmiC"]),
      errorMessage: null != h ? h : true,
      children: (0, n.jsx)(a.yRy, {
        targetElementRef: O,
        animation: a.yRy.Animation.NONE,
        position: "top",
        renderPopout: e => {
          let {
            closePopout: t
          } = e;
          return (0, n.jsx)(c.Z, {
            closePopout: t,
            pickerIntention: f.Hz.SOUNDBOARD,
            onNavigateAway: t,
            onSelectEmoji: e => {
              let {
                emoji: l,
                willClose: n
              } = e, i = (null == l ? true : l.id) == null;
              k(), i ? w(null == l ? true : l.optionallyDiverseSequence) : (S && w(null == l ? true : l.name), I(null == l ? true : l.id)), n && t()
            },
            guildId: l,
            channel: N
          })
        },
        children: (e, t) => {
          let {
            isShown: l
          } = t;
          return (0, n.jsxs)(a.UPk, x(v({}, e), {
            className: j.emojiInput,
            ref: O,
            children: [(0, n.jsx)(d.Z, {
              active: l,
              tabIndex: 0,
              renderButtonContents: !Z.isDeletedCustomEmoji && (Z.hasEmojiId || Z.hasEmojiName) ? () => (0, n.jsx)(s.Z, {
                emojiName: y,
                emojiId: b
              }) : null
            }), (0, n.jsx)(a.Text, {
              variant: "text-md/normal",
              lineClamp: 1,
              color: T ? "text-default" : "text-muted",
              children: T ? ":".concat(C, ":") : p.intl.string(p.t.QTK0TJ)
            }), T && P && (0, n.jsx)(o.Z, x(v({}, e), {
              onClick: D
            }))]
          }))
        }
      })
    })
  })
}