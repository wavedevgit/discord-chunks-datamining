/** Chunk was on web.js **/
/** chunk id: 872635, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => E,
  Z: () => b
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk650557 = require("./650557.js"),
  Chunk481060 = require("./481060.js"),
  Chunk40851 = require("./40851.jsx"),
  Chunk314910 = require("./314910.jsx"),
  Chunk5967 = require("./5967.js"),
  Chunk53529 = require("./53529.js"),
  Chunk50659 = require("./50659.js"),
  Chunk436660 = require("./436660.js"),
  Chunk887490 = require("./887490.js"),
  Chunk447525 = require("./447525.jsx"),
  Chunk622119 = require("./622119.js");

function E(e) {
  var t;
  let {
    editorRef: n,
    options: i,
    iconClassName: o,
    dividerClassName: s
  } = e, c = null == (t = n.current) ? true : t.getSlateEditor();
  return null == c ? null : (0, r.jsxs)("div", {
    className: g.buttons,
    children: [(0, r.jsx)(y, {
      slateEditor: c,
      markdownSyntax: "bold",
      children: (0, r.jsx)(l.mY4, {
        size: "md",
        color: "currentColor",
        className: a()(g.icon, o)
      })
    }), (0, r.jsx)(y, {
      slateEditor: c,
      markdownSyntax: "italics",
      children: (0, r.jsx)(l.h32, {
        size: "md",
        color: "currentColor",
        className: a()(g.icon, o)
      })
    }), (0, r.jsx)(y, {
      slateEditor: c,
      markdownSyntax: "strikethrough",
      children: (0, r.jsx)(l.dwl, {
        size: "md",
        color: "currentColor",
        className: a()(g.icon, o)
      })
    }), (0, r.jsx)("div", {
      className: a()(g.divider, s)
    }), !(null == i ? true : i.disableBlockQuotes) && (0, r.jsx)(O, {
      slateEditor: c,
      blockType: "blockQuote",
      children: (0, r.jsx)(l.PEf, {
        size: "md",
        color: "currentColor",
        className: a()(g.icon, o)
      })
    }), !(null == i ? true : i.disableInlineCode) && (0, r.jsx)(y, {
      slateEditor: c,
      markdownSyntax: "inlineCode",
      children: (0, r.jsx)(l.nF$, {
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor",
        className: a()(g.icon, o)
      })
    }), (0, r.jsx)(y, {
      slateEditor: c,
      markdownSyntax: "spoiler",
      children: (0, r.jsx)(l.tEF, {
        size: "md",
        color: "currentColor",
        className: a()(g.icon, o)
      })
    })]
  })
}
let b = Chunk73800.forwardRef(function(e, t) {
  var n;
  let {
    editorRef: o,
    containerRef: a,
    options: l
  } = e, f = i.useRef(null), [_, p] = i.useState(false), m = i.useRef(null), b = i.useContext(c.ZP), y = i.useCallback(() => {
    p(false), clearTimeout(m.current)
  }, []), O = i.useCallback(e => {
    var t;
    let n = b.renderWindow;
    e.target instanceof n.Node && (null == (t = f.current) ? true : t.contains(e.target)) || y()
  }, [b, y]), I = i.useCallback(e => {
    let t = b.renderWindow;
    if (e.target instanceof t.Element)
      if (0 !== e.button) y();
      else {
        var n;
        let r = e.target instanceof t.Node && (null == (n = f.current) ? true : n.contains(e.target));
        clearTimeout(m.current), m.current = setTimeout(() => {
          var t;
          let n = null == (t = (0, d.uB)(e)) ? true : t.activeElement,
            i = a.current;
          p(r || null != n && null != i && i.contains(n))
        }, 100)
      }
    else y()
  }, [b, a, y]);
  i.useImperativeHandle(t, () => ({
    hide: y
  }), [y]), i.useEffect(() => {
    let e = b.renderWindow;
    return e.document.addEventListener("keydown", y), e.document.addEventListener("mousedown", O), e.document.addEventListener("mouseup", I), e.addEventListener("focus", y), e.addEventListener("blur", y), () => {
      e.document.removeEventListener("keydown", y), e.document.removeEventListener("mousedown", O), e.document.removeEventListener("mouseup", I), e.removeEventListener("focus", y), e.removeEventListener("blur", y), clearTimeout(m.current)
    }
  }, [b, y, O, I]);
  let {
    x: T,
    y: S
  } = i.useMemo(() => {
    var e, t, n, r;
    let i = null == (e = o.current) ? true : e.getSlateEditor();
    if ((null == i ? true : i.selection) == null || h.M8.isCollapsed(i.selection) || !_) return {
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
      m = l.createRange();
    m.setStart(c.anchorNode, c.anchorOffset), m.setEnd(c.focusNode, c.focusOffset);
    let g = m.getBoundingClientRect(),
      E = d.x === p.x,
      b = E ? g.x : Math.min(d.x, p.x),
      y = E ? g.x + g.width : Math.max(d.x, p.x),
      O = null != (r = null == (n = a.current) || null == (t = n.getBoundingClientRect()) ? true : t.y) ? r : 0;
    return {
      x: b + (y - b) / 2,
      y: Math.max(O, Math.min(p.y, d.y))
    }
  }, [a, _, o]), [A, N] = i.useState(0), [C, R] = i.useState(0);
  if (i.useLayoutEffect(() => {
      if (null == T || null == S || null == f.current) return;
      let e = f.current.getBoundingClientRect();
      R(e.width / 2), N(e.height + 12)
    }, [T, S]), null == T || null == S) return null;
  let P = null == (n = o.current) ? true : n.getSlateEditor();
  return null == P ? null : (0, r.jsx)(u.ZP, {
    children: (0, r.jsxs)("div", {
      id: "slate-toolbar",
      ref: f,
      className: g.toolbar,
      style: {
        top: S - A,
        left: T - C
      },
      onMouseDown: e => {
        e.stopPropagation()
      },
      onMouseUp: e => {
        e.stopPropagation()
      },
      children: [(0, r.jsx)(v, {
        slateEditor: P
      }), (0, r.jsx)(E, {
        editorRef: o,
        options: l
      })]
    })
  })
});

function y(e) {
  let {
    slateEditor: t,
    markdownSyntax: n,
    children: i
  } = e, o = () => {
    null != t && f.T.withSingleEntry(t, () => (0, _.py)(t, n))
  }, a = false;
  if ((null == t ? true : t.selection) != null) {
    let [e, r] = h.M8.edges(t.selection);
    a = null != (0, _.U4)(t, e, r).before[n]
  }
  return (0, r.jsx)("button", {
    "aria-pressed": a,
    className: g.button,
    onClick: o,
    children: i
  })
}

function O(e) {
  let {
    blockType: t,
    slateEditor: n,
    children: i
  } = e, o = () => {
    null != n && f.T.withSingleEntry(n, () => (0, _.hm)(n, t))
  }, a = null != n ? h.bN.getCurrentBlock(n) : null, s = null != a && h.aj.isType(a[0], t);
  return (0, r.jsx)("button", {
    "aria-pressed": s,
    className: g.button,
    onClick: o,
    children: i
  })
}

function v(e) {
  var t;
  let {
    slateEditor: n
  } = e, [r, o] = null != (t = h.bN.getSelectedVoid(n)) ? t : [null, null], a = i.useCallback(e => {
    if ((null == n ? true : n.selection) == null || null == o) return;
    let t = n.selection;
    f.T.withSingleEntry(n, () => {
      p.Q.voidToText(n, e, o), p.Q.select(n, t)
    })
  }, [n, o]);
  return null == r ? null : (0, m.Z)(r, {
    replace: a
  })
}