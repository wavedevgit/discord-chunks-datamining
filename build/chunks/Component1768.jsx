/** Chunk was on web.js **/
/** chunk id: 1768, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  g1: () => T,
  nd: () => I
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk355622 = require("./355622.js"),
  Chunk408018 = require("./408018.js"),
  Chunk133343 = require("./133343.jsx"),
  Chunk375499 = require("./375499.jsx"),
  Chunk429433 = require("./429433.jsx"),
  Chunk95701 = require("./95701.js");
require("./790168.js");
var Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk498386 = require("./498386.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
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

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let A = (0, Chunk95701.createChannelRecord)({
  id: "1",
  type: Chunk652215.rbe.DM
});

function I(e) {
  let {
    placeholder: t,
    onEnter: n,
    setEditorRef: a,
    showEmojiButton: s = false,
    renderAttachButton: l,
    autoFocus: c = true,
    onFocus: p,
    channel: _,
    className: h
  } = e, [m, g] = i.useState(""), [y, O] = i.useState((0, d.x7)("")), I = () => {
    g(""), O((0, d.x7)(""))
  }, S = u.oU.ATOMIC_REACTOR_REPLY_INPUT, T = i.useRef(null), C = () => {
    if (null == T.current) return "top";
    let e = T.current.getBoundingClientRect(),
      t = window.innerHeight;
    return e.top < t / 2 ? "bottom" : "top"
  };
  return (0, r.jsx)(f.Ay, {
    ref: T,
    placeholder: t,
    editorClassName: h,
    className: o()(E.N8, h),
    showRemainingCharsAfterCount: false,
    allowNewLines: false,
    maxCharacterCount: 200,
    channel: null != _ ? _ : A,
    onChange: (e, t, n) => {
      g(t), O(n)
    },
    type: s ? v(b({}, S), {
      emojis: {
        button: true
      }
    }) : S,
    textValue: m,
    richValue: y,
    onSubmit: e => {
      let {
        value: t
      } = e;
      return t.length > 200 ? Promise.resolve({
        shouldClear: false,
        shouldRefocus: true
      }) : (n(t), I(), Promise.resolve({
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
    autoCompletePosition: C(),
    renderAttachButton: l
  })
}
let S = (e, t) => {
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
  T = e => {
    let {
      onSelectEmoji: t,
      onClick: n
    } = e, a = (0, c.Ay)(), [o, u] = i.useState(false), d = i.useRef(null), f = i.useRef(null);
    return S(() => u(false), d), (0, r.jsx)(l.YNO, {
      targetElementRef: f,
      align: "right",
      position: "top",
      shouldShow: o,
      disablePointerEvents: false,
      renderPopout: () => (0, r.jsx)(l.NPJ, {
        theme: a,
        children: e => (0, r.jsx)("div", {
          className: e,
          ref: d,
          children: (0, r.jsx)(_.C, {
            messageId: m.dJq,
            channel: A,
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
      children: () => (0, r.jsx)(s.m, {
        text: g.intl.string(g.t.lfIHs4),
        children: (0, r.jsx)("div", {
          ref: f,
          className: E.mJ,
          children: (0, r.jsx)(p.A, {
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