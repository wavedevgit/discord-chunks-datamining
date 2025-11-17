/** Chunk was on web.js **/
/** chunk id: 872635, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => E,
  Z: () => b
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk685578 = require("./685578.js"),
  Chunk374470 = require("./374470.js"),
  Chunk481060 = require("./481060.js"),
  Chunk314910 = require("./314910.jsx"),
  Chunk728285 = require("./728285.jsx"),
  Chunk53529 = require("./53529.js"),
  Chunk50659 = require("./50659.js"),
  Chunk436660 = require("./436660.js"),
  Chunk887490 = require("./887490.js"),
  Chunk447525 = require("./447525.jsx"),
  Chunk436349 = require("./436349.js");

function E(e) {
  var t;
  let {
    editorRef: n,
    options: i,
    iconClassName: a,
    dividerClassName: s
  } = e, l = null == (t = n.current) ? true : t.getSlateEditor();
  return null == l ? null : (0, r.jsxs)("div", {
    className: g.buttons,
    children: [(0, r.jsx)(y, {
      slateEditor: l,
      markdownSyntax: "bold",
      children: (0, r.jsx)(c.mY4, {
        size: "md",
        color: "currentColor",
        className: o()(g.icon, a)
      })
    }), (0, r.jsx)(y, {
      slateEditor: l,
      markdownSyntax: "italics",
      children: (0, r.jsx)(c.h32, {
        size: "md",
        color: "currentColor",
        className: o()(g.icon, a)
      })
    }), (0, r.jsx)(y, {
      slateEditor: l,
      markdownSyntax: "strikethrough",
      children: (0, r.jsx)(c.dwl, {
        size: "md",
        color: "currentColor",
        className: o()(g.icon, a)
      })
    }), (0, r.jsx)("div", {
      className: o()(g.divider, s)
    }), !(null == i ? true : i.disableBlockQuotes) && (0, r.jsx)(O, {
      slateEditor: l,
      blockType: "blockQuote",
      children: (0, r.jsx)(c.PEf, {
        size: "md",
        color: "currentColor",
        className: o()(g.icon, a)
      })
    }), !(null == i ? true : i.disableInlineCode) && (0, r.jsx)(y, {
      slateEditor: l,
      markdownSyntax: "inlineCode",
      children: (0, r.jsx)(c.nF$, {
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor",
        className: o()(g.icon, a)
      })
    }), (0, r.jsx)(y, {
      slateEditor: l,
      markdownSyntax: "spoiler",
      children: (0, r.jsx)(c.tEF, {
        size: "md",
        color: "currentColor",
        className: o()(g.icon, a)
      })
    })]
  })
}
let b = Chunk473749.forwardRef(function(e, t) {
  var n;
  let {
    editorRef: a,
    containerRef: o,
    options: c
  } = e, f = i.useRef(null), [_, p] = i.useState(false), m = i.useRef(null), b = i.useContext(d.ZP), y = i.useCallback(() => {
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
          let n = null == (t = (0, l.uB)(e)) ? true : t.activeElement,
            i = o.current;
          p(r || null != n && null != i && i.contains(n))
        }, 100)
      }
    else y()
  }, [b, o, y]);
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
    let i = null == (e = a.current) ? true : e.getSlateEditor();
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
      O = null != (r = null == (n = o.current) || null == (t = n.getBoundingClientRect()) ? true : t.y) ? r : 0;
    return {
      x: b + (y - b) / 2,
      y: Math.max(O, Math.min(p.y, d.y))
    }
  }, [o, _, a]), [A, C] = i.useState(0), [N, R] = i.useState(0);
  if (i.useLayoutEffect(() => {
      if (null == T || null == S || null == f.current) return;
      let e = f.current.getBoundingClientRect();
      R(e.width / 2), C(e.height + 12)
    }, [T, S]), null == T || null == S) return null;
  let P = null == (n = a.current) ? true : n.getSlateEditor();
  return null == P ? null : (0, r.jsx)(u.ZP, {
    children: (0, r.jsxs)("div", {
      id: "slate-toolbar",
      ref: f,
      className: g.toolbar,
      style: {
        top: S - A,
        left: T - N
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
        editorRef: a,
        options: c
      })]
    })
  })
});

function y(e) {
  let {
    slateEditor: t,
    markdownSyntax: n,
    children: i
  } = e, a = () => {
    null != t && f.T.withSingleEntry(t, () => (0, _.py)(t, n))
  }, o = false;
  if ((null == t ? true : t.selection) != null) {
    let [e, r] = h.M8.edges(t.selection);
    o = null != (0, _.U4)(t, e, r).before[n]
  }
  return (0, r.jsx)("button", {
    "aria-pressed": o,
    className: g.button,
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
    null != n && f.T.withSingleEntry(n, () => (0, _.hm)(n, t))
  }, o = null != n ? h.bN.getCurrentBlock(n) : null, s = null != o && h.aj.isType(o[0], t);
  return (0, r.jsx)("button", {
    "aria-pressed": s,
    className: g.button,
    onClick: a,
    children: i
  })
}

function v(e) {
  var t;
  let {
    slateEditor: n
  } = e, [r, a] = null != (t = h.bN.getSelectedVoid(n)) ? t : [null, null], o = i.useCallback(e => {
    if ((null == n ? true : n.selection) == null || null == a) return;
    let t = n.selection;
    f.T.withSingleEntry(n, () => {
      p.Q.voidToText(n, e, a), p.Q.select(n, t)
    })
  }, [n, a]);
  return null == r ? null : (0, m.Z)(r, {
    replace: o
  })
}