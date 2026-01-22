/** Chunk was on web.js **/
/** chunk id: 52724, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e) {
  let {
    getFocusableElements: t,
    getActiveElement: n,
    scrollToStart: r,
    scrollToEnd: i
  } = e;

  function a(e) {
    var n;
    return null != (n = t().find(t => !!(e.compareDocumentPosition(t) & (Node.DOCUMENT_POSITION_FOLLOWING | Node.DOCUMENT_POSITION_CONTAINED_BY)))) ? n : null
  }

  function s(e) {
    let n = t();
    for (let t = n.length - 1; t >= 0; t--) {
      let r = n[t];
      if (e.compareDocumentPosition(r) & (Node.DOCUMENT_POSITION_PRECEDING | Node.DOCUMENT_POSITION_CONTAINED_BY)) return r
    }
    return null
  }

  function o() {
    var e;
    return null != (e = t()[0]) ? e : null
  }

  function l() {
    var e;
    let n = t();
    return null != (e = n[n.length - 1]) ? e : null
  }
  return {
    getNextFocusableElement: async function(e) {
      let t = (null == e ? true : e.from) || n();
      if (null == t) return null;
      let i = a(t);
      return null == i && (null == e ? true : e.wrap) ? (await (null == r ? true : r()), o()) : i
    },
    getPreviousFocusableElement: async function(e) {
      let t = (null == e ? true : e.from) || n();
      if (null == t) return null;
      let r = s(t);
      return null == r && (null == e ? true : e.wrap) ? (await (null == i ? true : i()), l()) : r
    },
    getFirstFocusableElement: o,
    getLastFocusableElement: l
  }
}
require.d(exports, {
  C: () => r
})