/** Chunk was on web.js **/
/** chunk id: 105330, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => s
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk267102 = require("./267102.jsx"),
  Chunk374803 = require("./374803.js"),
  Chunk562650 = require("./562650.js");

function s(e) {
  let {
    editorHeight: t,
    type: n,
    state: s
  } = e, [l, c] = r.useState(true), u = null == s ? true : s.query, d = null == s ? true : s.isVisible, {
    renderWindow: f
  } = r.useContext(i.Ay), p = r.useCallback(() => {
    var e, t, r, i;
    if (null != s && (null == u || !d)) return void c(true);
    if ((null == u ? true : u.type) === a.DB.MENTION_SUGGESTIONS) {
      let e = f.document.getElementsByClassName(o.Z2)[0];
      if (null == e) return void c(true);
      {
        let t = e.getBoundingClientRect();
        c(new DOMRect(t.x - 10, t.y, t.width, t.height));
        return
      }
    }
    if ((null == u ? true : u.type) === a.DB.GIFS || null != n && !(null == (e = n.autocomplete) ? true : e.alwaysUseLayer)) return void c(null);
    let l = f.document.getSelection(),
      p = null != l && l.rangeCount > 0 ? l.getRangeAt(0) : null;
    if (null == p) return;
    let _ = p.startContainer,
      h = p.startOffset;
    for (; null != _;) {
      if (_.nodeType !== Node.TEXT_NODE || null == _.nodeValue) return void c(null);
      if ((null == (t = _.nodeValue) ? true : t.length) === 0) {
        h = null != (r = null == (_ = _.previousSibling) || null == (i = _.nodeValue) ? true : i.length) ? r : 0;
        continue
      }
      null != u && (h >= u.queryText.length ? h -= u.queryText.length : h = 0);
      break
    }
    if (null == _) return;
    let m = f.document.createRange();
    m.setStart(_, h), m.setEnd(_, h);
    let g = m.getBoundingClientRect();
    (null == g ? true : g.height) !== 0 && c(null != g ? g : null)
  }, [f.document, s, d, u, n]);
  return r.useEffect(() => (f.document.addEventListener("selectionchange", p), () => f.document.removeEventListener("selectionchange", p)), [f.document, p]), r.useEffect(() => {
    p()
  }, [p, t]), l
}