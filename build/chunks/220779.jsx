/** Chunk was on web.js **/
/** chunk id: 220779, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A7: () => T,
  dE: () => A
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk541716 = require("./541716.js"),
  Chunk752305 = require("./752305.js"),
  Chunk893718 = require("./893718.js"),
  Chunk318766 = require("./318766.js"),
  Chunk931651 = require("./931651.js"),
  Chunk131704 = require("./131704.js"),
  Chunk142550 = require("./142550.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk304222 = require("./304222.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
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
let I = (0, Chunk131704.kt)({
  id: "1",
  type: Chunk981631.d4z.DM
});

function T(e) {
  let {
    placeholder: t,
    onEnter: n,
    setEditorRef: o,
    showEmojiButton: s = false,
    renderAttachButton: l,
    autoFocus: f = true,
    onFocus: _,
    channel: p,
    className: m
  } = e, [g, b] = i.useState(""), [O, T] = i.useState((0, u.JM)("")), S = () => {
    b(""), T((0, u.JM)(""))
  }, A = c.Ie.ATOMIC_REACTOR_REPLY_INPUT, N = i.useRef(null), C = () => {
    if (null == N.current) return "top";
    let e = N.current.getBoundingClientRect(),
      t = window.innerHeight;
    return e.top < t / 2 ? "bottom" : "top"
  };
  return <d.ZP ref={N} placeholder={t} editorClassName={m} className={a()(E.replyInput, m)} showRemainingCharsAfterCount={false} allowNewLines={false} maxCharacterCount={h.z} channel={null != p ? p : I} onChange={(e, t, n) => {
      b(t), T(n)
    }} type={s ? v(y({}, A), {
      emojis: {
        button: true
      }
    }) : A} textValue={g} richValue={O} onSubmit={e => {
      let {
        value: t
      } = e;
      return t.length > h.z ? Promise.resolve({
        shouldClear: false,
        shouldRefocus: true
      }) : (n(t), S(), Promise.resolve({
        shouldClear: true,
        shouldRefocus: false
      }))
    }} setEditorRef={o} focused={f} onFocus={_} disableThemedBackground={true} emojiPickerCloseOnModalOuterClick={true} disabled={false} autoCompletePosition={C()} renderAttachButton={l} />
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
  A = e => {
    let {
      onSelectEmoji: t,
      onClick: n
    } = e, o = (0, l.ZP)(), [a, c] = i.useState(false), u = i.useRef(null), d = i.useRef(null);
    return S(() => c(false), u), <s.yRy targetElementRef={d} align={"right"} position={"top"} shouldShow={a} disablePointerEvents={false} renderPopout={() => (0, r.jsx)(s.f6W, {
        theme: o,
        children: e => (0, r.jsx)("div", {
          className: e,
          ref: u,
          children: (0, r.jsx)(_.$, {
            messageId: m.lds,
            channel: I,
            closePopout: () => {
              c(false)
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
              }), c(false))
            }
          })
        })
      })}>{() => (0, r.jsx)(s.ua7, {
        text: g.intl.string(g.t.lfIHs7),
        children: e => (0, r.jsx)("div", v(y({
          ref: d
        }, e), {
          className: E.reaction,
          children: (0, r.jsx)(f.Z, {
            active: false,
            tabIndex: 0,
            onClick: () => {
              null == n || n(), c(true)
            }
          })
        }))
      })}</s.yRy>
  }