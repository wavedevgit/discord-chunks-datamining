/** Chunk was on web.js **/
/** chunk id: 584648, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk621466 = require("./621466.js");

function i(e, t, n) {
  let i = "horizontal" === t ? e.offsetWidth : e.offsetHeight,
    a = "horizontal" === t ? e.offsetLeft : e.offsetTop,
    s = e.offsetParent;
  for (; null != s && s !== n;)
    if ((0, r.vq)(s, HTMLElement)) {
      let e = s;
      a += "horizontal" === t ? e.offsetLeft : e.offsetTop, s = e.offsetParent
    } else s = s.parentNode;
  return {
    offset: a,
    offsetSize: i
  }
}

function a(e, t) {
  if ("horizontal" === t) {
    let {
      scrollLeft: t,
      scrollWidth: n,
      offsetWidth: r
    } = e;
    return {
      scrollPosition: t,
      scrollSize: n,
      offsetSize: r
    }
  }
  let {
    scrollTop: n,
    scrollHeight: r,
    offsetHeight: i
  } = e;
  return {
    scrollPosition: n,
    scrollSize: r,
    offsetSize: i
  }
}

function s(e, t, n) {
  let r = t - n + 1;
  return e >= r - 1 ? r : Math.max(0, e)
}

function o(e, t, n) {
  let r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : "vertical",
    o = e => {
      let {
        to: i,
        animate: o,
        callback: l
      } = e, {
        scrollPosition: c,
        scrollSize: u,
        offsetSize: d
      } = a(t(), r);
      n.to({
        to: s(i, u, d),
        from: c,
        animate: o,
        callback: l
      })
    },
    l = e => {
      let {
        start: n,
        end: i,
        shouldScrollToStart: s = false,
        padding: l = 0,
        animate: c,
        callback: u
      } = e, {
        scrollPosition: d,
        offsetSize: f
      } = a(t(), r);
      n -= l, i += l, n >= d && i <= d + f ? null != u && u() : n < d || s ? o({
        to: n,
        animate: c,
        callback: u
      }) : o({
        to: i - f,
        animate: c,
        callback: u
      })
    };
  return {
    spring: n,
    scrollTo: o,
    mergeTo: n.mergeTo,
    scrollIntoViewRect: l,
    scrollIntoViewNode(t) {
      let {
        node: n,
        shouldScrollToStart: a = false,
        padding: s = 0,
        animate: o = false,
        callback: c
      } = t, {
        current: u
      } = e;
      if (null == u) return;
      let {
        offset: d,
        offsetSize: f
      } = i(n, r, u);
      l({
        start: d,
        end: d + f,
        shouldScrollToStart: a,
        padding: s,
        animate: o,
        callback: c
      })
    },
    scrollPageUp() {
      let {
        animate: e = false,
        callback: n
      } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {}, {
        scrollPosition: i,
        offsetSize: s
      } = a(t(), r);
      o({
        to: i - .9 * s,
        animate: e,
        callback: n
      })
    },
    scrollPageDown() {
      let {
        animate: e = false,
        callback: n
      } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {}, {
        scrollPosition: i,
        offsetSize: s
      } = a(t(), r);
      o({
        to: i + .9 * s,
        animate: e,
        callback: n
      })
    },
    scrollToTop() {
      let {
        animate: e = false,
        callback: t
      } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
      o({
        to: 0,
        animate: e,
        callback: t
      })
    },
    scrollToBottom() {
      let {
        animate: e = false,
        callback: t
      } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
      o({
        to: Number.MAX_SAFE_INTEGER,
        animate: e,
        callback: t
      })
    },
    isScrolledToTop: () => 0 === a(t(), r).scrollPosition,
    isScrolledToBottom() {
      let {
        scrollPosition: e,
        scrollSize: n,
        offsetSize: i
      } = a(t(), r);
      return e >= n - i
    },
    getDistanceFromTop: () => Math.max(0, a(t(), r).scrollPosition),
    getDistanceFromBottom() {
      let {
        scrollPosition: e,
        scrollSize: n,
        offsetSize: i
      } = a(t(), r);
      return Math.max(0, n - i - e)
    }
  }
}