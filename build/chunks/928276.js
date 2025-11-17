/** Chunk was on web.js **/
/** chunk id: 928276, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e) {
  if (a()) e.focus({
    preventScroll: true
  });
  else {
    let t = o(e);
    e.focus(), s(t)
  }
}
require.d(exports, {
  A: () => r
});
let i = null;

function a() {
  if (null == i) {
    i = false;
    try {
      document.createElement("div").focus({
        get preventScroll() {
          return i = true, true
        }
      })
    } catch {}
  }
  return i
}

function o(e) {
  let t = e.parentNode,
    n = [],
    r = document.scrollingElement || document.documentElement;
  for (; t instanceof HTMLElement && t !== r;)(t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && n.push({
    element: t,
    scrollTop: t.scrollTop,
    scrollLeft: t.scrollLeft
  }), t = t.parentNode;
  return r instanceof HTMLElement && n.push({
    element: r,
    scrollTop: r.scrollTop,
    scrollLeft: r.scrollLeft
  }), n
}

function s(e) {
  for (let {
      element: t,
      scrollTop: n,
      scrollLeft: r
    }
    of e) t.scrollTop = n, t.scrollLeft = r
}