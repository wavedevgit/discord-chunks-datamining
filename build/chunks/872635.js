/** Chunk was on web.js **/
"use strict";
n.d(t, {
  I: () => E,
  Z: () => v
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(270445),
  l = n(481060),
  c = n(40851),
  u = n(314910),
  d = n(5967),
  f = n(53529),
  _ = n(50659),
  p = n(436660),
  h = n(887490),
  g = n(447525),
  m = n(217131);

function E(e) {
  var t;
  let {
    editorRef: n,
    options: i,
    iconClassName: o,
    dividerClassName: s
  } = e, c = null === (t = n.current) || void 0 === t ? void 0 : t.getSlateEditor();
  return null == c ? null : (0, r.jsxs)("div", {
    className: m.buttons,
    children: [(0, r.jsx)(b, {
      slateEditor: c,
      markdownSyntax: "bold",
      children: (0, r.jsx)(l.mY4, {
        size: "md",
        color: "currentColor",
        className: a()(m.icon, o)
      })
    }), (0, r.jsx)(b, {
      slateEditor: c,
      markdownSyntax: "italics",
      children: (0, r.jsx)(l.h32, {
        size: "md",
        color: "currentColor",
        className: a()(m.icon, o)
      })
    }), (0, r.jsx)(b, {
      slateEditor: c,
      markdownSyntax: "strikethrough",
      children: (0, r.jsx)(l.dwl, {
        size: "md",
        color: "currentColor",
        className: a()(m.icon, o)
      })
    }), (0, r.jsx)("div", {
      className: a()(m.divider, s)
    }), !(null == i ? void 0 : i.disableBlockQuotes) && (0, r.jsx)(y, {
      slateEditor: c,
      blockType: "blockQuote",
      children: (0, r.jsx)(l.PEf, {
        size: "md",
        color: "currentColor",
        className: a()(m.icon, o)
      })
    }), (0, r.jsx)(b, {
      slateEditor: c,
      markdownSyntax: "inlineCode",
      children: (0, r.jsx)(l.nF$, {
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor",
        className: a()(m.icon, o)
      })
    }), (0, r.jsx)(b, {
      slateEditor: c,
      markdownSyntax: "spoiler",
      children: (0, r.jsx)(l.tEF, {
        size: "md",
        color: "currentColor",
        className: a()(m.icon, o)
      })
    })]
  })
}
let v = i.forwardRef(function(e, t) {
  var n;
  let {
    editorRef: o,
    containerRef: a,
    options: l
  } = e, f = i.useRef(null), [_, p] = i.useState(!1), g = i.useRef(), v = i.useContext(c.ZP), b = i.useCallback(() => {
    p(!1), clearTimeout(g.current)
  }, []), y = i.useCallback(e => {
    var t;
    let n = v.renderWindow;
    e.target instanceof n.Node && (null === (t = f.current) || void 0 === t ? void 0 : t.contains(e.target)) || b()
  }, [v, b]), S = i.useCallback(e => {
    let t = v.renderWindow;
    if (e.target instanceof t.Element) {
      if (0 !== e.button) b();
      else {
        var n;
        let r = e.target instanceof t.Node && (null === (n = f.current) || void 0 === n ? void 0 : n.contains(e.target));
        clearTimeout(g.current), g.current = setTimeout(() => {
          var t;
          let n = null === (t = (0, d.uB)(e)) || void 0 === t ? void 0 : t.activeElement,
            i = a.current;
          p(r || null != n && null != i && i.contains(n))
        }, 100)
      }
    } else b()
  }, [v, a, b]);
  i.useImperativeHandle(t, () => ({
    hide: b
  }), [b]), i.useEffect(() => {
    let e = v.renderWindow;
    return e.document.addEventListener("keydown", b), e.document.addEventListener("mousedown", y), e.document.addEventListener("mouseup", S), e.addEventListener("focus", b), e.addEventListener("blur", b), () => {
      e.document.removeEventListener("keydown", b), e.document.removeEventListener("mousedown", y), e.document.removeEventListener("mouseup", S), e.removeEventListener("focus", b), e.removeEventListener("blur", b), clearTimeout(g.current)
    }
  }, [v, b, y, S]);
  let {
    x: I,
    y: T
  } = i.useMemo(() => {
    var e, t, n, r;
    let i = null === (e = o.current) || void 0 === e ? void 0 : e.getSlateEditor();
    if ((null == i ? void 0 : i.selection) == null || h.M8.isCollapsed(i.selection) || !_) return {
      x: null,
      y: null
    };
    let l = s.F3.findDocumentOrShadowRoot(i),
      c = l.getSelection();
    if (null == c || null == c.focusNode || null == c.anchorNode || c.isCollapsed) return {
      x: null,
      y: null
    };
    let u = l.createRange();
    u.setStart(c.focusNode, c.focusOffset), u.setEnd(c.focusNode, c.focusOffset);
    let d = u.getBoundingClientRect(),
      f = l.createRange();
    f.setStart(c.anchorNode, c.anchorOffset), f.setEnd(c.anchorNode, c.anchorOffset);
    let p = f.getBoundingClientRect(),
      g = l.createRange();
    g.setStart(c.anchorNode, c.anchorOffset), g.setEnd(c.focusNode, c.focusOffset);
    let m = g.getBoundingClientRect(),
      E = d.x === p.x,
      v = E ? m.x : Math.min(d.x, p.x),
      b = E ? m.x + m.width : Math.max(d.x, p.x),
      y = null !== (r = null === (n = a.current) || void 0 === n ? void 0 : null === (t = n.getBoundingClientRect()) || void 0 === t ? void 0 : t.y) && void 0 !== r ? r : 0;
    return {
      x: v + (b - v) / 2,
      y: Math.max(y, Math.min(p.y, d.y))
    }
  }, [a, _, o]), [N, A] = i.useState(0), [C, R] = i.useState(0);
  if (i.useLayoutEffect(() => {
      if (null == I || null == T || null == f.current) return;
      let e = f.current.getBoundingClientRect();
      R(e.width / 2), A(e.height + 12)
    }, [I, T]), null == I || null == T) return null;
  let P = null === (n = o.current) || void 0 === n ? void 0 : n.getSlateEditor();
  return null == P ? null : (0, r.jsx)(u.ZP, {
    children: (0, r.jsxs)("div", {
      id: "slate-toolbar",
      ref: f,
      className: m.toolbar,
      style: {
        top: T - N,
        left: I - C
      },
      onMouseDown: e => {
        e.stopPropagation()
      },
      onMouseUp: e => {
        e.stopPropagation()
      },
      children: [(0, r.jsx)(O, {
        slateEditor: P
      }), (0, r.jsx)(E, {
        editorRef: o,
        options: l
      })]
    })
  })
});

function b(e) {
  let {
    slateEditor: t,
    markdownSyntax: n,
    children: i
  } = e, o = () => {
    null != t && f.T.withSingleEntry(t, () => (0, _.py)(t, n))
  }, a = !1;
  if ((null == t ? void 0 : t.selection) != null) {
    let [e, r] = h.M8.edges(t.selection);
    a = null != (0, _.U4)(t, e, r).before[n]
  }
  return (0, r.jsx)("button", {
    "aria-pressed": a,
    className: m.button,
    onClick: o,
    children: i
  })
}

function y(e) {
  let {
    blockType: t,
    slateEditor: n,
    children: i
  } = e, o = () => {
    null != n && f.T.withSingleEntry(n, () => (0, _.hm)(n, t))
  }, a = null != n ? h.bN.getCurrentBlock(n) : null, s = null != a && h.aj.isType(a[0], t);
  return (0, r.jsx)("button", {
    "aria-pressed": s,
    className: m.button,
    onClick: o,
    children: i
  })
}

function O(e) {
  var t;
  let {
    slateEditor: n
  } = e, [r, o] = null !== (t = h.bN.getSelectedVoid(n)) && void 0 !== t ? t : [null, null], a = i.useCallback(e => {
    if ((null == n ? void 0 : n.selection) == null || null == o) return;
    let t = n.selection;
    f.T.withSingleEntry(n, () => {
      p.Q.voidToText(n, e, o), p.Q.select(n, t)
    })
  }, [n, o]);
  return null == r ? null : (0, g.Z)(r, {
    replace: a
  })
}