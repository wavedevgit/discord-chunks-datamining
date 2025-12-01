/** Chunk was on web.js **/
/** chunk id: 220779, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A7: () => T,
  dE: () => C
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk541716 = require("./541716.js"),
  Chunk752305 = require("./752305.js"),
  Chunk893718 = require("./893718.jsx"),
  Chunk318766 = require("./318766.jsx"),
  Chunk931651 = require("./931651.jsx"),
  Chunk131704 = require("./131704.js"),
  Chunk142550 = require("./142550.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk608476 = require("./608476.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
    })
  }
  return e
}

function v(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let I = (0, Chunk131704.createChannelRecord)({
  id: "1",
  type: Chunk981631.d4z.DM
});

function T(e) {
  let {
    placeholder: t,
    onEnter: n,
    setEditorRef: a,
    showEmojiButton: s = false,
    renderAttachButton: l,
    autoFocus: c = true,
    onFocus: p,
    channel: _,
    className: m
  } = e, [g, E] = i.useState(""), [y, v] = i.useState((0, d.JM)("")), T = () => {
    E(""), v((0, d.JM)(""))
  }, A = u.Ie.ATOMIC_REACTOR_REPLY_INPUT, C = i.useRef(null), N = () => {
    if (null == C.current) return "top";
    let e = C.current.getBoundingClientRect(),
      t = window.innerHeight;
    return e.top < t / 2 ? "bottom" : "top"
  };
  return (0, r.jsx)(f.ZP, {
    ref: C,
    placeholder: t,
    editorClassName: m,
    className: o()(b.replyInput, m),
    showRemainingCharsAfterCount: false,
    allowNewLines: false,
    maxCharacterCount: h.z,
    channel: null != _ ? _ : I,
    onChange: (e, t, n) => {
      E(t), v(n)
    },
    type: s ? S(O({}, A), {
      emojis: {
        button: true
      }
    }) : A,
    textValue: g,
    richValue: y,
    onSubmit: e => {
      let {
        value: t
      } = e;
      return t.length > h.z ? Promise.resolve({
        shouldClear: false,
        shouldRefocus: true
      }) : (n(t), T(), Promise.resolve({
        shouldClear: true,
        shouldRefocus: false
      }))
    },
    setEditorRef: a,
    focused: c,
    onFocus: p,
    disableThemedBackground: true,
    emojiPickerCloseOnModalOuterClick: true,
    disabled: false,
    autoCompletePosition: N(),
    renderAttachButton: l
  })
}
let A = (e, t) => {
    i.useEffect(() => {
      let n = t => {
          "Escape" === t.key && e()
        },
        r = n => {
          var r;
          null != n.target && ((null == t || null == (r = t.current) ? true : r.contains(null == n ? true : n.target)) || e())
        };
      return document.addEventListener("keydown", n), document.addEventListener("mousedown", r), () => {
        document.removeEventListener("keydown", n), document.removeEventListener("mousedown", r)
      }
    }, [e, t])
  },
  C = e => {
    let {
      onSelectEmoji: t,
      onClick: n
    } = e, a = (0, c.ZP)(), [o, u] = i.useState(false), d = i.useRef(null), f = i.useRef(null);
    return A(() => u(false), d), (0, r.jsx)(l.yRy, {
      targetElementRef: f,
      align: "right",
      position: "top",
      shouldShow: o,
      disablePointerEvents: false,
      renderPopout: () => (0, r.jsx)(l.f6W, {
        theme: a,
        children: e => (0, r.jsx)("div", {
          className: e,
          ref: d,
          children: (0, r.jsx)(_.$, {
            messageId: g.lds,
            channel: I,
            closePopout: () => {
              u(false)
            },
            onSelectEmoji: e => {
              let {
                emoji: n,
                willClose: r,
                isBurst: i
              } = e;
              null != n && (t({
                emoji: n,
                willClose: r,
                isBurst: i
              }), u(false))
            }
          })
        })
      }),
      children: () => (0, r.jsx)(s.u, {
        text: E.intl.string(E.t.lfIHs4),
        children: (0, r.jsx)("div", {
          ref: f,
          className: b.reaction,
          children: (0, r.jsx)(p.Z, {
            active: false,
            tabIndex: 0,
            onClick: () => {
              null == n || n(), u(true)
            }
          })
        })
      })
    })
  }