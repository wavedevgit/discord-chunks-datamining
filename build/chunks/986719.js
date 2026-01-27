/** Chunk was on web.js **/
/** chunk id: 986719, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk64700 = require("./64700.js"),
  Chunk884362 = require("./884362.js"),
  Chunk741918 = require("./741918.js"),
  Chunk267102 = require("./267102.jsx"),
  Chunk374803 = require("./374803.js");

function l(e) {
  var t, n, l;
  let {
    navId: c,
    scrollerRef: u,
    state: d,
    onFocus: f
  } = e, {
    renderWindow: p
  } = r.useContext(o.Ay), _ = (e, t) => {
    let n = p.document.querySelector(e);
    if (null != n) {
      var r;
      null == (r = u.current) || r.scrollIntoViewNode({
        node: n
      })
    }
    null == f || f(+t)
  }, h = (e, t, n) => {
    var r;
    if (null == (r = u.current) || r.scrollToTop(), e && null != d.query) {
      let e = d.query.typeInfo.focusMode,
        r = e !== s.e.MANUAL && (e !== s.e.AUTO_WHEN_FILTERED || 0 !== d.query.queryText.length);
      d.isVisible && (true !== t || false !== r) && true !== n ? (g.setFocus("0"), null == f || f(0)) : (g.setFocus(null), null == f || f(null))
    }
  }, m = e => {
    var t;
    if (null == (t = u.current) || t.scrollToBottom(), e && null != d.query && d.query.resultCount > 0) {
      let e = d.query.resultCount - 1;
      g.setFocus(e.toString()), null == f || f(e)
    }
  }, g = (0, i.Ay)({
    id: c,
    isEnabled: d.isVisible,
    orientation: a.Gl.VERTICAL,
    useVirtualFocus: true,
    setFocus: _,
    onNavigateNextAtEnd: () => h(true),
    onNavigatePreviousAtStart: () => m(true),
    scrollToStart: () => (h(false, false), Promise.resolve()),
    scrollToEnd: () => (m(false), Promise.resolve())
  }), E = r.useRef(h);
  return r.useEffect(() => {
    E.current = h
  }), r.useEffect(() => {
    E.current(true, true, d.isInitialAfterError)
  }, [null == (t = d.query) ? true : t.type, null == (n = d.query) ? true : n.queryText, null == (l = d.query) ? true : l.isLoading, d.isVisible, d.isInitialAfterError]), g
}