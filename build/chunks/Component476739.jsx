/** Chunk was on web.js **/
/** chunk id: 476739, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk375499 = require("./375499.jsx"),
  Chunk937773 = require("./937773.jsx"),
  Chunk151271 = require("./151271.js"),
  Chunk135261 = require("./135261.jsx"),
  Chunk307731 = require("./307731.js"),
  Chunk574377 = require("./574377.js");

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

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m(e) {
  var t;
  let {
    editorRef: n,
    options: f,
    channel: _
  } = e, m = null == (t = n.current) ? true : t.getSlateEditor(), g = i.useRef(null), E = i.useCallback(e => {
    let {
      emoji: t,
      willClose: r
    } = e, i = n.current;
    null != t && null != i && i.insertEmoji({
      emoji: t,
      willClose: r
    }), r && (0, l.v8)()
  }, [n]), y = e => {
    let {
      closePopout: t
    } = e;
    return (0, r.jsx)(s.A, {
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
      pickerIntention: u.b_.COMMUNITY_CONTENT
    })
  };
  return null == m ? null : (0, r.jsxs)("div", {
    id: "slate-toolbar",
    className: d.aL,
    children: [(0, r.jsx)("div", {
      className: d.Wy,
      children: (0, r.jsx)(c.P, {
        editorRef: n,
        options: f,
        iconClassName: d.C7,
        dividerClassName: d.us
      })
    }), (0, r.jsx)(a.YNO, {
      targetElementRef: g,
      renderPopout: y,
      position: "bottom",
      animation: a.YNO.Animation.NONE,
      align: "left",
      children: (e, t) => {
        let {
          isShown: n
        } = t;
        return (0, r.jsx)(o.A, h(p({}, e), {
          ref: g,
          active: n,
          className: d.Z8,
          tabIndex: 0
        }))
      }
    })]
  })
}