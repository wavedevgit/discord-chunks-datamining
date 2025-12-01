/** Chunk was on web.js **/
/** chunk id: 691841, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk473749 = require("./473749.js"),
  Chunk924826 = require("./924826.js"),
  Chunk536895 = require("./536895.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk590921 = require("./590921.js");

function l(e) {
  var t, n, l;
  let {
    navId: c,
    scrollerRef: u,
    state: d,
    onFocus: f
  } = e, {
    renderWindow: p
  } = r.useContext(o.ZP), _ = (e, t) => {
    let n = p.document.querySelector(e);
    if (null != n) {
      var r;
      null == (r = u.current) || r.scrollIntoViewNode({
        node: n
      })
    }
    null == f || f(+t)
  }, m = (e, t) => {
    var n;
    if (null == (n = u.current) || n.scrollToTop(), e && null != d.query) {
      let e = d.query.typeInfo.focusMode,
        n = e !== s.QZ.MANUAL && (e !== s.QZ.AUTO_WHEN_FILTERED || 0 !== d.query.queryText.length);
      d.isVisible && (true !== t || false !== n) ? (g.setFocus("0"), null == f || f(0)) : (g.setFocus(null), null == f || f(null))
    }
  }, h = e => {
    var t;
    if (null == (t = u.current) || t.scrollToBottom(), e && null != d.query && d.query.resultCount > 0) {
      let e = d.query.resultCount - 1;
      g.setFocus(e.toString()), null == f || f(e)
    }
  }, g = (0, i.ZP)({
    id: c,
    isEnabled: d.isVisible,
    orientation: a.hy.VERTICAL,
    useVirtualFocus: true,
    setFocus: _,
    onNavigateNextAtEnd: () => m(true),
    onNavigatePreviousAtStart: () => h(true),
    scrollToStart: () => (m(false, false), Promise.resolve()),
    scrollToEnd: () => (h(false), Promise.resolve())
  }), E = r.useRef(m);
  return r.useEffect(() => {
    E.current = m
  }), r.useEffect(() => {
    E.current(true, true)
  }, [null == (t = d.query) ? true : t.type, null == (n = d.query) ? true : n.queryText, null == (l = d.query) ? true : l.isLoading, d.isVisible]), g
}