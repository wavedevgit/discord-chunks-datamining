/** Chunk was on web.js **/
/** chunk id: 887490, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C0: () => E,
  Ew: () => O,
  Jz: () => b,
  LC: () => g,
  M8: () => y,
  aj: () => h,
  bN: () => p,
  lP: () => S,
  q: () => m
}), require("./388685.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk327432 = require("./327432.js"),
  Chunk755712 = require("./755712.js"),
  Chunk339227 = require("./339227.js"),
  Chunk42530 = require("./42530.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
require("./789952.js");
let _ = false;
{
  let e = Chunk755712.F3.findDocumentOrShadowRoot;
  Chunk755712.F3.findDocumentOrShadowRoot = t => {
    var n, r;
    return null != (r = null == (n = t.windowContext) ? true : n.renderWindow.document) ? r : e(t)
  }, _ = true
}
let p = f(u({}, Chunk327432.ML, Chunk755712.F3), {
    richValue: e => e.children,
    blocks: e => p.richValue(e).map((e, t) => [e, [t]]),
    isBlock: (e, t) => m.isElement(t) && o.ML.isBlock(e, t),
    isInline: (e, t) => m.isElement(t) && o.ML.isInline(e, t),
    isVoid: (e, t) => m.isElement(t) && o.ML.isVoid(e, t),
    isEditorEmpty(e) {
      let t = p.richValue(e);
      return !(t.length > 1) && (0 === t.length || "line" === t[0].type && m.isEmpty(t[0]))
    },
    getFirstText(e) {
      let t = p.node(e, l.u9);
      return g.isText(t[0]) ? t[0] : null
    },
    getCurrentBlock(e) {
      return null == e.selection ? null : this.getParentBlock(e, e.selection)
    },
    getCurrentElement(e) {
      return null == e.selection ? null : this.getParentElement(e, e.selection)
    },
    getCurrentInline(e) {
      return null == e.selection ? null : this.getParentInline(e, e.selection)
    },
    getCurrentVoid(e) {
      return null == e.selection ? null : this.getParentVoid(e, e.selection)
    },
    getCurrentText(e) {
      let t = null != e.selection ? y.toPoint(e.selection) : null;
      return null == t ? null : p.node(e, t.path)
    },
    getParentBlock(e, t) {
      var n;
      return null != (n = p.above(e, {
        at: t,
        match: t => m.isElement(t) && p.isBlock(e, t),
        mode: "lowest"
      })) ? n : null
    },
    getParentElement(e, t) {
      var n;
      return null != (n = p.above(e, {
        at: t,
        match: e => m.isElement(e),
        mode: "lowest"
      })) ? n : null
    },
    getParentInline(e, t) {
      var n;
      return null != (n = p.above(e, {
        at: t,
        match: t => p.isInline(e, t),
        mode: "lowest"
      })) ? n : null
    },
    getParentVoid(e, t) {
      var n;
      return null != (n = p.above(e, {
        at: t,
        match: t => p.isVoid(e, t),
        mode: "lowest"
      })) ? n : null
    },
    getParentOfType(e, t, n) {
      var r;
      return null != (r = p.above(e, {
        at: t,
        match: e => m.isElement(e) && n.includes(e.type),
        mode: "lowest"
      })) ? r : null
    },
    getSelectedParentOfType(e, t) {
      if (null == e.selection) return null;
      let n = y.toPoint(e.selection);
      return null == n ? null : p.getParentOfType(e, n, t)
    },
    getNodesOfType: (e, t) => p.nodes(e, {
      at: l.Ql,
      match: e => m.isElement(e) && t.includes(e.type),
      mode: "highest"
    }),
    getSelectedVoid(e) {
      let t;
      if (null == e.selection) return null;
      if (y.isExpanded(e.selection)) {
        let [n, r] = y.edges(e.selection), i = p.after(e, n, {
          unit: "offset"
        }), o = p.before(e, r, {
          unit: "offset"
        });
        if (null == i || null == o || !b.equals(i, o)) return null;
        t = i
      } else t = e.selection.anchor;
      return null == t ? null : p.getParentVoid(e, t)
    },
    getSelectedText(e, t) {
      let n = null;
      if (t) {
        let t = a.F3.findDocumentOrShadowRoot(e).getSelection();
        if (null != t && t.rangeCount > 0) {
          let r = t.getRangeAt(0);
          null != r && (n = a.F3.toSlateRange(e, r, {
            exactMatch: true,
            suppressThrow: true
          }))
        }
      } else n = e.selection;
      return null == n ? "" : this.getTextFromRange(e, n)
    },
    getTextFromRange(e, t) {
      let [n, r] = y.edges(t), i = p.nodes(e, {
        at: t,
        mode: "lowest",
        match: e => g.isText(e)
      }), o = "";
      for (let [e, t] of i) {
        let i = E.equals(t, n.path) ? n.offset : 0,
          a = E.equals(t, r.path) ? r.offset : 0;
        o += e.text.substring(i, a)
      }
      return o
    },
    withoutNormalizing(e, t) {
      let n = p.isNormalizing(e);
      p.setNormalizing(e, false);
      try {
        t()
      } finally {
        p.setNormalizing(e, n)
      }
      false !== n && p.normalize(e)
    },
    areStylesDisabled(e) {
      var t;
      if (!e.previewMarkdown) returntrue;
      let n = p.richValue(e),
        r = n[0],
        i = (null == r ? true : r.type) === "line" ? r.children[0] : null;
      if (null == i || !g.isText(i)) returnfalse;
      let o = e.chatInputType,
        a = i.text;
      return 1 === n.length && 1 === r.children.length && (true === o.sedReplace && a.startsWith("s/") || (null == (t = o.autocomplete) ? true : t.reactions) === true && a.startsWith("+"))
    },
    focus(e) {
      a.F3.isFocused(e) || (a.F3.focus(e), a.F3.deselect(e))
    },
    getSelectionOverlap(e, t) {
      if (null == e.selection) return {
        anchor: null,
        focus: null
      };
      if (E.isPath(t)) {
        let n = p.range(e, t),
          [r] = p.node(e, t);
        if (m.isElement(r)) {
          let r = p.before(e, t),
            i = p.after(e, t);
          t = {
            anchor: null != r ? r : n.anchor,
            focus: null != i ? i : n.focus
          }
        } else t = n
      }
      let [n, r] = y.edges(t), i = null, o = null;
      return b.equals(e.selection.anchor, n) ? i = "start" : b.equals(e.selection.anchor, r) ? i = "end" : y.includes(t, e.selection.anchor) && (i = "inside"), b.equals(e.selection.focus, n) ? o = "start" : b.equals(e.selection.focus, r) ? o = "end" : y.includes(t, e.selection.focus) && (o = "inside"), {
        anchor: i,
        focus: o
      }
    }
  }),
  h = f(u({}, Chunk327432.NB), {
    isType: (e, t) => o.W_.isElement(e) && e.type === t,
    isInTypes: (e, t) => o.W_.isElement(e) && t.has(e.type)
  }),
  m = f(u({}, Chunk327432.W_), {
    updateElement(e, t) {
      let n = p.node(e, t[1]);
      return i()(!p.isEditor(t[0]), "Element is the root node"), i()(null != n, "Failed to find element"), i()(m.isElement(n[0]), "Node at this path is no longer an element"), i()(n[0].type === t[0].type, "Node at this path is a different type"), n
    },
    markdown(e, t, n) {
      var r;
      let i = "line" === e.type && (null == (r = e.codeBlockState) ? true : r.wasInCodeBlock) === true,
        o = e.children.map(e => g.isText(e) ? e.text : "?"),
        a = o.join("");
      return {
        entries: s.Q(a, null != t ? t : null, i, n),
        serializedChildren: o
      }
    },
    isEmpty(e) {
      if (e.children.length > 1) returnfalse;
      if (0 === e.children.length) returntrue;
      let t = e.children[0];
      return g.isText(t) && 0 === t.text.length
    }
  }),
  g = u({}, Chunk327432.xv),
  E = f(u({}, Chunk327432.y$), {
    isFirstEditorBlock: e => E.equals(e, l.YD),
    isFirstEditorText: e => E.equals(e, l.u9),
    isFirstChild: (e, t) => E.equals(t, E.child(e, 0)),
    child: (e, t) => [...e, t]
  }),
  b = f(u({}, Chunk327432.E9), {
    start(e) {
      let [, t] = e;
      return {
        path: E.child(t, 0),
        offset: 0
      }
    },
    end(e) {
      let [t, n] = e, r = t.children[t.children.length - 1];
      return {
        path: E.child(n, t.children.length - 1),
        offset: g.isText(r) ? r.text.length : 0
      }
    },
    isAtStart(e, t) {
      return b.equals(e, this.start(t))
    },
    isAtEnd(e, t) {
      return b.equals(e, this.end(t))
    },
    clamp(e, t) {
      let [n, r] = y.edges(t);
      return b.isBefore(e, n) && (e = n), b.isAfter(e, r) && (e = r), e
    }
  }),
  y = f(u({}, Chunk327432.e6), {
    toPoint: e => null == e || y.isExpanded(e) ? null : e.anchor,
    children(e) {
      let [t, n] = e, r = t.children[t.children.length - 1];
      return {
        anchor: {
          path: E.child(n, 0),
          offset: 0
        },
        focus: {
          path: E.child(n, t.children.length - 1),
          offset: g.isText(r) ? r.text.length : 0
        }
      }
    },
    clamp(e, t) {
      let [n, r] = y.edges(e), [i, o] = y.edges(t);
      return (b.isBefore(n, i) && (n = i), b.isAfter(r, o) && (r = o), y.isForward(e)) ? {
        anchor: n,
        focus: r
      } : {
        anchor: r,
        focus: n
      }
    }
  }),
  O = {
    equals: (e, t) => null == e && null == t || null != e && null != t && y.equals(e, t),
    isValid(e, t) {
      if (null == t) returnfalse;
      let {
        anchor: n,
        focus: r
      } = t;
      if (!p.hasPath(e, n.path) || !p.hasPath(e, r.path)) returnfalse;
      let [i] = p.node(e, n.path), [o] = p.node(e, r.path);
      return g.isText(i) && g.isText(o) && n.offset <= i.text.length && r.offset <= o.text.length
    }
  },
  v = (e, t) => {
    let n = (t.top + t.bottom) / 2;
    return e.top <= n && e.bottom >= n
  },
  I = (e, t, n) => {
    let r = p.toDOMRange(e, t).getBoundingClientRect(),
      i = p.toDOMRange(e, n).getBoundingClientRect();
    return v(r, i) && v(i, r)
  },
  T = (e, t, n, r) => {
    let i = {
        anchor: t,
        focus: t
      },
      o = 0,
      a = n.length,
      s = Math.floor((o + a) / 2);
    for (; s !== o;)
      if (I(e, {
          anchor: n[s],
          focus: n[s]
        }, i) ? r ? a = s : o = s : r ? o = s : a = s, s = Math.floor((o + a) / 2), !r && s === n.length - 2 && a === n.length - 1) {
        let t = n[n.length - 1];
        I(e, {
          anchor: t,
          focus: t
        }, i) && (s = a)
      } return n[s]
  },
  S = {
    getLineStart(e, t, n) {
      let r, i = p.getParentElement(e, t);
      if (null == i) return null;
      let o = p.previous(e, {
        at: t,
        match: t => p.isInline(e, t) && !p.isVoid(e, t) && t !== i[0]
      });
      null != o && (r = p.after(e, o[1])), null == r && (r = p.start(e, i[1]));
      let a = {
          anchor: r,
          focus: t
        },
        s = Array.from(p.positions(e, {
          at: a
        })),
        l = T(e, t, s, true);
      if (n && b.equals(t, l) && !b.isAtEnd(t, i)) {
        let n = p.after(e, t);
        if (null == n) return l;
        l = T(e, n, s, true)
      }
      return l
    },
    getLineEnd(e, t, n) {
      let r, i = p.getParentElement(e, t);
      if (null == i) return null;
      let o = p.next(e, {
        at: t,
        match: t => p.isInline(e, t) && !p.isVoid(e, t) && t !== i[0]
      });
      null != o && (r = p.before(e, o[1])), null == r && (r = p.end(e, i[1]));
      let a = {
          anchor: t,
          focus: r
        },
        s = Array.from(p.positions(e, {
          at: a
        })),
        l = T(e, t, s, false);
      if (n && b.equals(t, l) && !b.isAtEnd(t, i)) {
        let n = p.after(e, t);
        if (null == n) return l;
        l = T(e, n, s, false)
      }
      return l
    },
    getLineActionRange(e, t) {
      let n = y.toPoint(e.selection);
      if (null == n) return null;
      if (t) {
        let t = S.getLineStart(e, n, false);
        return null == t ? null : {
          anchor: t,
          focus: n
        }
      } {
        let t = S.getLineEnd(e, n, true);
        return null == t ? null : {
          anchor: n,
          focus: t
        }
      }
    }
  }