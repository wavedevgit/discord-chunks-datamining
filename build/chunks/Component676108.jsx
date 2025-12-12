/** Chunk was on web.js **/
/** chunk id: 676108, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk318766 = require("./318766.jsx"),
  Chunk907040 = require("./907040.jsx"),
  Chunk28546 = require("./28546.js"),
  Chunk872635 = require("./872635.jsx"),
  Chunk185923 = require("./185923.js"),
  Chunk436349 = require("./436349.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e) {
  var t;
  let {
    editorRef: n,
    options: f,
    channel: _
  } = e, h = null == (t = n.current) ? true : t.getSlateEditor(), g = i.useRef(null), E = i.useCallback(e => {
    let {
      emoji: t,
      willClose: r
    } = e, i = n.current;
    null != t && null != i && i.insertEmoji({
      emoji: t,
      willClose: r
    }), r && (0, l._Q)()
  }, [n]), b = e => {
    let {
      closePopout: t
    } = e;
    return (0, r.jsx)(s.Z, {
      persistSearch: true,
      channel: _,
      closePopout: t,
      onSelectEmoji: e => {
        let {
          emoji: n,
          willClose: r
        } = e;
        E({
          emoji: n,
          willClose: r
        }), r && t()
      },
      pickerIntention: u.Hz.COMMUNITY_CONTENT
    })
  };
  return null == h ? null : (0, r.jsxs)("div", {
    id: "slate-toolbar",
    className: d.staticToolbar,
    children: [(0, r.jsx)("div", {
      className: d.staticButtons,
      children: (0, r.jsx)(c.I, {
        editorRef: n,
        options: f,
        iconClassName: d.staticIcon,
        dividerClassName: d.staticDivider
      })
    }), (0, r.jsx)(o.yRy, {
      targetElementRef: g,
      renderPopout: b,
      position: "bottom",
      animation: o.yRy.Animation.NONE,
      align: "left",
      children: (e, t) => {
        let {
          isShown: n
        } = t;
        return (0, r.jsx)(a.Z, m(p({}, e), {
          ref: g,
          active: n,
          className: d.emojiButton,
          tabIndex: 0
        }))
      }
    })]
  })
}