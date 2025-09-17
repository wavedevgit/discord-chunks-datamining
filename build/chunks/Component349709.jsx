/** Chunk was on 93626 **/
/** chunk id: 349709, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  Z: () => y
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk74655 = require("./74655.jsx"),
  Chunk886025 = require("./886025.jsx"),
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
  Chunk739359 = require("./739359.js");

function b(e) {
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

function y(e) {
  let {
    className: t,
    guildId: l,
    error: y,
    emojiId: E,
    emojiName: w,
    isRequiredField: I = true,
    shouldUpdateBothEmojiFields: S = false,
    setEmojiId: O,
    setEmojiName: N
  } = e, P = (0, p.Z)({
    emojiId: E,
    emojiName: w
  }), C = (0, r.e7)([g.ZP], () => null != l ? g.ZP.getDefaultChannel(l) : null), k = i.useRef(null), D = (0, d.Z)(k), Z = () => {
    N(true), O(true)
  }, R = e => {
    e.stopPropagation(), Z()
  }, _ = i.useMemo(() => {
    let e = null != E && "" !== E,
      t = null != w && "" !== w,
      l = null != P && "" !== P,
      n = t && !Number.isNaN(parseInt(w)) && !l && !e;
    return {
      hasEmojiId: e,
      hasEmojiName: t,
      hasEmojiDisplayName: l,
      isDeletedCustomEmoji: n
    }
  }, [E, w, P]), T = !_.isDeletedCustomEmoji && _.hasEmojiDisplayName;
  return (0, n.jsx)("div", {
    className: t,
    children: (0, n.jsx)(a.N, {
      required: I,
      label: v.intl.string(v.t["3BQmiI"]),
      errorMessage: null != y ? y : true,
      children: (0, n.jsx)(o.yRy, {
        targetElementRef: k,
        animation: o.yRy.Animation.NONE,
        position: "top",
        renderPopout: e => {
          let {
            closePopout: t
          } = e;
          return (0, n.jsx)(f.Z, {
            closePopout: t,
            pickerIntention: j.Hz.SOUNDBOARD,
            onNavigateAway: t,
            onSelectEmoji: e => {
              let {
                emoji: l,
                willClose: n
              } = e, i = (null == l ? true : l.id) == null;
              Z(), i ? N(null == l ? true : l.optionallyDiverseSequence) : (S && N(null == l ? true : l.name), O(null == l ? true : l.id)), n && t()
            },
            guildId: l,
            channel: C
          })
        },
        children: (e, t) => {
          let {
            isShown: l
          } = t;
          return (0, n.jsxs)(s.U, h(b({}, e), {
            className: x.emojiInput,
            ref: k,
            children: [(0, n.jsx)(m.Z, {
              active: l,
              tabIndex: 0,
              renderButtonContents: !_.isDeletedCustomEmoji && (_.hasEmojiId || _.hasEmojiName) ? () => (0, n.jsx)(u.Z, {
                emojiName: w,
                emojiId: E
              }) : null
            }), (0, n.jsx)(o.Text, {
              variant: "text-md/normal",
              lineClamp: 1,
              color: T ? "text-default" : "text-muted",
              children: T ? ":".concat(P, ":") : v.intl.string(v.t.QTK0TE)
            }), T && D && (0, n.jsx)(c.Z, h(b({}, e), {
              onClick: R
            }))]
          }))
        }
      })
    })
  })
}