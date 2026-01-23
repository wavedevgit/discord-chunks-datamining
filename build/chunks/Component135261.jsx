/** Chunk was on web.js **/
/** chunk id: 135261, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y,
  P: () => E
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk253018 = require("./253018.js"),
  Chunk621466 = require("./621466.js"),
  Chunk397927 = require("./397927.js"),
  Chunk750506 = require("./750506.jsx"),
  Chunk267102 = require("./267102.jsx"),
  Chunk186306 = require("./186306.js"),
  Chunk339871 = require("./339871.js"),
  Chunk35277 = require("./35277.js"),
  Chunk711371 = require("./711371.js"),
  Chunk408269 = require("./408269.jsx"),
  Chunk574377 = require("./574377.js");

function E(e) {
  var t;
  let {
    editorRef: n,
    options: i,
    iconClassName: a,
    dividerClassName: o
  } = e, l = null == (t = n.current) ? true : t.getSlateEditor();
  return null == l ? null : (0, r.jsxs)("div", {
    className: g.Uo,
    children: [(0, r.jsx)(b, {
      slateEditor: l,
      markdownSyntax: "bold",
      children: (0, r.jsx)(c.$oz, {
        size: "md",
        color: "currentColor",
        className: s()(g.Kk, a)
      })
    }), (0, r.jsx)(b, {
      slateEditor: l,
      markdownSyntax: "italics",
      children: (0, r.jsx)(c.yOR, {
        size: "md",
        color: "currentColor",
        className: s()(g.Kk, a)
      })
    }), (0, r.jsx)(b, {
      slateEditor: l,
      markdownSyntax: "strikethrough",
      children: (0, r.jsx)(c.t64, {
        size: "md",
        color: "currentColor",
        className: s()(g.Kk, a)
      })
    }), (0, r.jsx)("div", {
      className: s()(g.yF, o)
    }), !(null == i ? true : i.disableBlockQuotes) && (0, r.jsx)(O, {
      slateEditor: l,
      blockType: "blockQuote",
      children: (0, r.jsx)(c.cyi, {
        size: "md",
        color: "currentColor",
        className: s()(g.Kk, a)
      })
    }), !(null == i ? true : i.disableInlineCode) && (0, r.jsx)(b, {
      slateEditor: l,
      markdownSyntax: "inlineCode",
      children: (0, r.jsx)(c.GaO, {
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor",
        className: s()(g.Kk, a)
      })
    }), (0, r.jsx)(b, {
      slateEditor: l,
      markdownSyntax: "spoiler",
      children: (0, r.jsx)(c.bMW, {
        size: "md",
        color: "currentColor",
        className: s()(g.Kk, a)
      })
    })]
  })
}
let y = Chunk64700.forwardRef(function(e, t) {
  var n;
  let {
    editorRef: a,
    containerRef: s,
    options: c
  } = e, f = i.useRef(null), [p, _] = i.useState(false), m = i.useRef(null), y = i.useContext(d.Ay), b = i.useCallback(() => {
    _(false), clearTimeout(m.current)
  }, []), O = i.useCallback(e => {
    var t;
    let n = y.renderWindow;
    e.target instanceof n.Node && (null == (t = f.current) ? true : t.contains(e.target)) || b()
  }, [y, b]), A = i.useCallback(e => {
    let t = y.renderWindow;
    if (e.target instanceof t.Element)
      if (0 !== e.button) b();
      else {
        var n;
        let r = e.target instanceof t.Node && (null == (n = f.current) ? true : n.contains(e.target));
        clearTimeout(m.current), m.current = setTimeout(() => {
          var t;
          let n = null == (t = (0, l.BF)(e)) ? true : t.activeElement,
            i = s.current;
          _(r || null != n && null != i && i.contains(n))
        }, 100)
      }
    else b()
  }, [y, s, b]);
  i.useImperativeHandle(t, () => ({
    hide: b
  }), [b]), i.useEffect(() => {
    let e = y.renderWindow;
    return e.document.addEventListener("keydown", b), e.document.addEventListener("mousedown", O), e.document.addEventListener("mouseup", A), e.addEventListener("focus", b), e.addEventListener("blur", b), () => {
      e.document.removeEventListener("keydown", b), e.document.removeEventListener("mousedown", O), e.document.removeEventListener("mouseup", A), e.removeEventListener("focus", b), e.removeEventListener("blur", b), clearTimeout(m.current)
    }
  }, [y, b, O, A]);
  let {
    x: I,
    y: S
  } = i.useMemo(() => {
    var e, t, n, r;
    let i = null == (t = a.current) ? true : t.getSlateEditor();
    if ((null == i ? true : i.selection) == null || h.ZF.isCollapsed(i.selection) || !p) return {
      x: null,
      y: null
    };
    let l = o.rL.findDocumentOrShadowRoot(i),
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
    let _ = f.getBoundingClientRect(),
      m = l.createRange();
    m.setStart(c.anchorNode, c.anchorOffset), m.setEnd(c.focusNode, c.focusOffset);
    let g = m.getBoundingClientRect(),
      E = d.x === _.x,
      y = E ? g.x : Math.min(d.x, _.x),
      b = E ? g.x + g.width : Math.max(d.x, _.x),
      O = null != (e = null == (r = s.current) || null == (n = r.getBoundingClientRect()) ? true : n.y) ? e : 0;
    return {
      x: y + (b - y) / 2,
      y: Math.max(O, Math.min(_.y, d.y))
    }
  }, [s, p, a]), [T, C] = i.useState(0), [N, R] = i.useState(0);
  if (i.useLayoutEffect(() => {
      if (null == I || null == S || null == f.current) return;
      let e = f.current.getBoundingClientRect();
      R(e.width / 2), C(e.height + 12)
    }, [I, S]), null == I || null == S) return null;
  let w = null == (n = a.current) ? true : n.getSlateEditor();
  return null == w ? null : (0, r.jsx)(u.Ay, {
    children: (0, r.jsxs)("div", {
      id: "slate-toolbar",
      ref: f,
      className: g.KE,
      style: {
        top: S - T,
        left: I - N
      },
      onMouseDown: e => {
        e.stopPropagation()
      },
      onMouseUp: e => {
        e.stopPropagation()
      },
      children: [(0, r.jsx)(v, {
        slateEditor: w
      }), (0, r.jsx)(E, {
        editorRef: a,
        options: c
      })]
    })
  })
});

function b(e) {
  let {
    slateEditor: t,
    markdownSyntax: n,
    children: i
  } = e, a = () => {
    null != t && f.o.withSingleEntry(t, () => (0, p.Px)(t, n))
  }, s = false;
  if ((null == t ? true : t.selection) != null) {
    let [e, r] = h.ZF.edges(t.selection);
    s = null != (0, p.Sx)(t, e, r).before[n]
  }
  return (0, r.jsx)("button", {
    "aria-pressed": s,
    className: g.x6,
    onClick: a,
    children: i
  })
}

function O(e) {
  let {
    blockType: t,
    slateEditor: n,
    children: i
  } = e, a = () => {
    null != n && f.o.withSingleEntry(n, () => (0, p.fO)(n, t))
  }, s = null != n ? h.VW.getCurrentBlock(n) : null, o = null != s && h.AS.isType(s[0], t);
  return (0, r.jsx)("button", {
    "aria-pressed": o,
    className: g.x6,
    onClick: a,
    children: i
  })
}

function v(e) {
  var t;
  let {
    slateEditor: n
  } = e, [r, a] = null != (t = h.VW.getSelectedVoid(n)) ? t : [null, null], s = i.useCallback(e => {
    if ((null == n ? true : n.selection) == null || null == a) return;
    let t = n.selection;
    f.o.withSingleEntry(n, () => {
      _.b.voidToText(n, e, a), _.b.select(n, t)
    })
  }, [n, a]);
  return null == r ? null : (0, m.A)(r, {
    replace: s
  })
}