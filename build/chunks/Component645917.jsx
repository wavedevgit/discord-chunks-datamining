/** Chunk was on web.js **/
/** chunk id: 645917, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => y,
  Z: () => O
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk920155 = require("./920155.jsx"),
  Chunk744399 = require("./744399.jsx"),
  Chunk966902 = require("./966902.jsx"),
  Chunk237872 = require("./237872.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk718786 = require("./718786.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = E(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function b(e) {
  let {
    title: t,
    body: n
  } = e;
  return (0, r.jsxs)("div", {
    className: f.header,
    children: [(0, r.jsx)(d.Heading, {
      variant: "heading-md/semibold",
      className: f.title,
      children: t
    }), (0, r.jsx)("div", {
      className: f.headerBody,
      children: (0, r.jsx)(d.Text, {
        variant: "text-sm/normal",
        color: "none",
        children: n
      })
    })]
  })
}

function y(e) {
  var t, {
      title: n,
      body: a,
      graphic: p,
      size: h = "md",
      actions: E,
      gradientColor: y,
      onRequestClose: O,
      position: v,
      caretConfig: S,
      scrollBehavior: I,
      showCloseButton: T = true,
      isCaretHoverable: C = false,
      shouldTrapFocus: A = false,
      returnRef: N,
      onNudgeChange: P
    } = e,
    w = g(e, ["title", "body", "graphic", "size", "actions", "gradientColor", "onRequestClose", "position", "caretConfig", "scrollBehavior", "showCloseButton", "isCaretHoverable", "shouldTrapFocus", "returnRef", "onNudgeChange"]);
  let [R, D] = i.useState(null != v ? v : "top");
  i.useEffect(() => {
    null != v && D(v)
  }, [v]);
  let x = i.useMemo(() => {
      var e;
      return {
        align: null != (e = null == S ? true : S.align) ? e : "center",
        customOffset: null == S ? true : S.customOffset
      }
    }, [S]),
    L = i.useCallback(() => {
      null == O || O()
    }, [O]),
    j = i.useCallback(e => {
      null == O || O(e)
    }, [O]),
    M = i.useCallback(e => {
      D(e)
    }, []),
    k = C ? f.caretHoverable : true,
    U = _({
      targetElementRef: w.targetElementRef,
      shouldShow: w.shouldShow,
      hasVideo: w.hasVideo,
      position: R,
      caretConfig: x,
      onRequestClose: L,
      gradientColor: y,
      onPositionChange: M,
      onNudgeChange: P,
      scrollBehavior: I,
      modal: A,
      returnRef: N,
      gradientOffsetBottom: 0,
      experimental_ignoreModalClicks: false
    }, "edge" === w.alignmentStrategy ? {
      alignmentStrategy: "edge",
      align: w.align
    } : {
      alignmentStrategy: "trigger-center"
    });
  return (0, r.jsx)(s.m, m(_({}, U), {
    children: (0, r.jsxs)("div", {
      "data-mana-component": "popover",
      children: [T && (0, r.jsx)(u.u, {
        onClick: j,
        variant: null != y ? "color-mix" : true
      }), null != p && (0, r.jsx)("div", {
        className: o()(f.graphic, {
          [f["graphic--".concat(h)]]: null != h
        }),
        children: (0, r.jsx)(d.zsu, m(_({}, p), {
          aspectRatio: null != (t = p.aspectRatio) ? t : "sm" === h ? "2/1" : "16/9"
        }))
      }), (0, r.jsx)(b, {
        title: n,
        body: a
      }), null != E && E.length > 0 ? (0, r.jsx)(l.k, {
        actions: E,
        className: f.actionBar
      }) : null, null != x && (0, r.jsx)(c.$, {
        className: k
      })]
    })
  }))
}
let O = y