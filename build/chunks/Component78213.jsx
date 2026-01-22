/** Chunk was on 40556 **/
/** chunk id: 78213, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk565645 = require("./565645.jsx"),
  Chunk414079 = require("./414079.jsx"),
  Chunk713517 = require("./713517.js"),
  Chunk375499 = require("./375499.jsx"),
  Chunk937773 = require("./937773.jsx"),
  Chunk808728 = require("./808728.js"),
  Chunk730906 = require("./730906.js"),
  Chunk307731 = require("./307731.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk22009 = require("./22009.js");

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}

function x(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function p(e) {
  let {
    className: t,
    guildId: n,
    error: p,
    emojiId: j,
    emojiName: y,
    isRequiredField: w = true,
    shouldUpdateBothEmojiFields: N = false,
    setEmojiId: O,
    setEmojiName: A
  } = e, C = (0, m.A)({
    emojiId: j,
    emojiName: y
  }), S = (0, a.bG)([f.Ay], () => null != n ? f.Ay.getDefaultChannel(n) : null), P = i.useRef(null), {
    isHoveringOrFocusing: E
  } = (0, o.A)(P), M = () => {
    A(true), O(true)
  }, k = e => {
    e.stopPropagation(), M()
  }, T = i.useMemo(() => {
    let e = null != j && "" !== j,
      t = null != y && "" !== y,
      n = null != C && "" !== C,
      l = t && !Number.isNaN(parseInt(y)) && !n && !e;
    return {
      hasEmojiId: e,
      hasEmojiName: t,
      hasEmojiDisplayName: n,
      isDeletedCustomEmoji: l
    }
  }, [j, y, C]), D = !T.isDeletedCustomEmoji && T.hasEmojiDisplayName;
  return (0, l.jsx)("div", {
    className: t,
    children: (0, l.jsx)(r.D0$, {
      required: w,
      label: h.intl.string(h.t["3BQmiC"]),
      errorMessage: null != p ? p : true,
      children: (0, l.jsx)(r.YNO, {
        targetElementRef: P,
        animation: r.YNO.Animation.NONE,
        position: "top",
        renderPopout: e => {
          let {
            closePopout: t
          } = e;
          return (0, l.jsx)(d.A, {
            closePopout: t,
            pickerIntention: g.b_.SOUNDBOARD,
            onNavigateAway: t,
            onSelectEmoji: e => {
              let {
                emoji: n,
                willClose: l
              } = e, i = (null == n ? true : n.id) == null;
              M(), i ? A(null == n ? true : n.optionallyDiverseSequence) : (N && A(null == n ? true : n.name), O(null == n ? true : n.id)), l && t()
            },
            guildId: n,
            channel: S
          })
        },
        children: (e, t) => {
          let {
            isShown: n
          } = t;
          return (0, l.jsxs)(r.FON, x(b({}, e), {
            className: v.LM,
            ref: P,
            children: [(0, l.jsx)(c.A, {
              active: n,
              tabIndex: 0,
              renderButtonContents: !T.isDeletedCustomEmoji && (T.hasEmojiId || T.hasEmojiName) ? () => (0, l.jsx)(s.A, {
                emojiName: y,
                emojiId: j
              }) : null
            }), (0, l.jsx)(r.Text, {
              variant: "text-md/normal",
              lineClamp: 1,
              color: D ? "text-default" : "text-muted",
              children: D ? ":".concat(C, ":") : h.intl.string(h.t.QTK0TJ)
            }), D && E && (0, l.jsx)(u.A, x(b({}, e), {
              onClick: k
            }))]
          }))
        }
      })
    })
  })
}