/** Chunk was on 93626 **/
/** chunk id: 349709, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk74655 = require("./74655.jsx"),
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

function x(e) {
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

function h(e, t) {
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

function b(e) {
  let {
    className: t,
    guildId: l,
    error: b,
    emojiId: y,
    emojiName: E,
    isRequiredField: S = true,
    shouldUpdateBothEmojiFields: I = false,
    setEmojiId: w,
    setEmojiName: N
  } = e, C = (0, f.Z)({
    emojiId: y,
    emojiName: E
  }), O = (0, r.e7)([g.ZP], () => null != l ? g.ZP.getDefaultChannel(l) : null), D = i.useRef(null), {
    isHoveringOrFocusing: P
  } = (0, d.Z)(D), Z = () => {
    N(true), w(true)
  }, k = e => {
    e.stopPropagation(), Z()
  }, T = i.useMemo(() => {
    let e = null != y && "" !== y,
      t = null != E && "" !== E,
      l = null != C && "" !== C,
      n = t && !Number.isNaN(parseInt(E)) && !l && !e;
    return {
      hasEmojiId: e,
      hasEmojiName: t,
      hasEmojiDisplayName: l,
      isDeletedCustomEmoji: n
    }
  }, [y, E, C]), R = !T.isDeletedCustomEmoji && T.hasEmojiDisplayName;
  return (0, n.jsx)("div", {
    className: t,
    children: (0, n.jsx)(s.gNt, {
      required: S,
      label: j.intl.string(j.t["3BQmiC"]),
      errorMessage: null != b ? b : true,
      children: (0, n.jsx)(s.yRy, {
        targetElementRef: D,
        animation: s.yRy.Animation.NONE,
        position: "top",
        renderPopout: e => {
          let {
            closePopout: t
          } = e;
          return (0, n.jsx)(m.Z, {
            closePopout: t,
            pickerIntention: p.Hz.SOUNDBOARD,
            onNavigateAway: t,
            onSelectEmoji: e => {
              let {
                emoji: l,
                willClose: n
              } = e, i = (null == l ? true : l.id) == null;
              Z(), i ? N(null == l ? true : l.optionallyDiverseSequence) : (I && N(null == l ? true : l.name), w(null == l ? true : l.id)), n && t()
            },
            guildId: l,
            channel: O
          })
        },
        children: (e, t) => {
          let {
            isShown: l
          } = t;
          return (0, n.jsxs)(a.U, h(x({}, e), {
            className: v.emojiInput,
            ref: D,
            children: [(0, n.jsx)(c.Z, {
              active: l,
              tabIndex: 0,
              renderButtonContents: !T.isDeletedCustomEmoji && (T.hasEmojiId || T.hasEmojiName) ? () => (0, n.jsx)(o.Z, {
                emojiName: E,
                emojiId: y
              }) : null
            }), (0, n.jsx)(s.Text, {
              variant: "text-md/normal",
              lineClamp: 1,
              color: R ? "text-default" : "text-muted",
              children: R ? ":".concat(C, ":") : j.intl.string(j.t.QTK0TJ)
            }), R && P && (0, n.jsx)(u.Z, h(x({}, e), {
              onClick: k
            }))]
          }))
        }
      })
    })
  })
}