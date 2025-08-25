/** Chunk was on web.js **/
/** chunk id: 606992, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk40851 = require("./40851.jsx"),
  Chunk590921 = require("./590921.js");

function a(e) {
  let {
    editorHeight: t,
    type: n,
    state: a
  } = e, [s, l] = r.useState(true), c = null == a ? true : a.query, u = null == a ? true : a.isVisible, {
    renderWindow: d
  } = r.useContext(i.ZP), f = r.useCallback(() => {
    var e, t, r, i;
    if (null != a && (null == c || !u)) return void l(true);
    if ((null == c ? true : c.type) === o.eq.GIFS || null != n && !(null == (e = n.autocomplete) ? true : e.alwaysUseLayer)) return void l(null);
    let s = d.document.getSelection(),
      f = null != s && s.rangeCount > 0 ? s.getRangeAt(0) : null;
    if (null == f) return;
    let _ = f.startContainer,
      p = f.startOffset;
    for (; null != _;) {
      if (_.nodeType !== Node.TEXT_NODE || null == _.nodeValue) return void l(null);
      if ((null == (t = _.nodeValue) ? true : t.length) === 0) {
        p = null != (i = null == (_ = _.previousSibling) || null == (r = _.nodeValue) ? true : r.length) ? i : 0;
        continue
      }
      null != c && (p >= c.queryText.length ? p -= c.queryText.length : p = 0);
      break
    }
    if (null == _) return;
    let h = d.document.createRange();
    h.setStart(_, p), h.setEnd(_, p);
    let m = h.getBoundingClientRect();
    (null == m ? true : m.height) !== 0 && l(null != m ? m : null)
  }, [d.document, a, u, c, n]);
  return r.useEffect(() => (d.document.addEventListener("selectionchange", f), () => d.document.removeEventListener("selectionchange", f)), [d.document, f]), r.useEffect(() => {
    f()
  }, [f, t]), s
}