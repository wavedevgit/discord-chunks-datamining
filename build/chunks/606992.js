/** Chunk was on web.js **/
/** chunk id: 606992, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk590921 = require("./590921.js"),
  Chunk953782 = require("./953782.js");

function s(e) {
  let {
    editorHeight: t,
    type: n,
    state: s
  } = e, [l, c] = r.useState(true), u = null == s ? true : s.query, d = null == s ? true : s.isVisible, {
    renderWindow: f
  } = r.useContext(i.ZP), p = r.useCallback(() => {
    var e, t, r, i;
    if (null != s && (null == u || !d)) return void c(true);
    if ((null == u ? true : u.type) === a.eq.MENTION_SUGGESTIONS) {
      let e = f.document.getElementsByClassName(o.mentionSuggestion)[0];
      if (null == e) return void c(true);
      {
        let t = e.getBoundingClientRect();
        c(new DOMRect(t.x - 10, t.y, t.width, t.height));
        return
      }
    }
    if ((null == u ? true : u.type) === a.eq.GIFS || null != n && !(null == (e = n.autocomplete) ? true : e.alwaysUseLayer)) return void c(null);
    let l = f.document.getSelection(),
      p = null != l && l.rangeCount > 0 ? l.getRangeAt(0) : null;
    if (null == p) return;
    let _ = p.startContainer,
      m = p.startOffset;
    for (; null != _;) {
      if (_.nodeType !== Node.TEXT_NODE || null == _.nodeValue) return void c(null);
      if ((null == (t = _.nodeValue) ? true : t.length) === 0) {
        m = null != (i = null == (_ = _.previousSibling) || null == (r = _.nodeValue) ? true : r.length) ? i : 0;
        continue
      }
      null != u && (m >= u.queryText.length ? m -= u.queryText.length : m = 0);
      break
    }
    if (null == _) return;
    let h = f.document.createRange();
    h.setStart(_, m), h.setEnd(_, m);
    let g = h.getBoundingClientRect();
    (null == g ? true : g.height) !== 0 && c(null != g ? g : null)
  }, [f.document, s, d, u, n]);
  return r.useEffect(() => (f.document.addEventListener("selectionchange", p), () => f.document.removeEventListener("selectionchange", p)), [f.document, p]), r.useEffect(() => {
    p()
  }, [p, t]), l
}