/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => a
}), n(47120);
var r = n(192379),
  i = n(40851),
  o = n(590921);

function a(e) {
  let {
    editorHeight: t,
    type: n,
    state: a,
    isInPopoutExperiment: s = !1
  } = e, [l, c] = r.useState(void 0), u = null == a ? void 0 : a.query, d = null == a ? void 0 : a.isVisible, {
    renderWindow: f
  } = r.useContext(i.ZP), _ = r.useCallback(() => {
    var e, t, r, i;
    if (null != a && (null == u || !d)) {
      c(void 0);
      return
    }
    if ((null == u ? void 0 : u.type) === o.eq.GIFS || null != n && !s && !(null === (e = n.autocomplete) || void 0 === e ? void 0 : e.alwaysUseLayer)) {
      c(null);
      return
    }
    let l = f.document.getSelection(),
      _ = null != l && l.rangeCount > 0 ? l.getRangeAt(0) : null;
    if (null == _) return;
    let p = _.startContainer,
      h = _.startOffset;
    for (; null != p;) {
      if (p.nodeType !== Node.TEXT_NODE || null == p.nodeValue) {
        c(null);
        return
      }
      if ((null === (t = p.nodeValue) || void 0 === t ? void 0 : t.length) === 0) {
        h = null !== (i = null == (p = p.previousSibling) ? void 0 : null === (r = p.nodeValue) || void 0 === r ? void 0 : r.length) && void 0 !== i ? i : 0;
        continue
      }
      null != u && (h >= u.queryText.length ? h -= u.queryText.length : h = 0);
      break
    }
    if (null == p) return;
    let g = f.document.createRange();
    g.setStart(p, h), g.setEnd(p, h);
    let m = g.getBoundingClientRect();
    (null == m ? void 0 : m.height) !== 0 && c(null != m ? m : null)
  }, [s, f.document, a, d, u, n]);
  return r.useEffect(() => (f.document.addEventListener("selectionchange", _), () => f.document.removeEventListener("selectionchange", _)), [f.document, _]), r.useEffect(() => {
    _()
  }, [_, t]), l
}