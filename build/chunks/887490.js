/** Chunk was on web.js **/
/** chunk id: 887490, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C0: () => E,
  Ew: () => O,
  Jz: () => b,
  LC: () => g,
  M8: () => y,
  aj: () => m,
  bN: () => _,
  lP: () => T,
  q: () => h
}), require("./388685.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk327432 = require("./327432.js"),
  Chunk685578 = require("./685578.js"),
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
let p = false;
{
  let e = Chunk685578.F3.findDocumentOrShadowRoot;
  Chunk685578.F3.findDocumentOrShadowRoot = t => {
    var n, r;
    return null != (r = null == (n = t.windowContext) ? true : n.renderWindow.document) ? r : e(t)
  }, p = true
}
let _ = f(u({}, Chunk327432.ML, Chunk685578.F3), {
    richValue: e => e.children,
    blocks: e => _.richValue(e).map((e, t) => [e, [t]]),
    isBlock: (e, t) => h.isElement(t) && a.ML.isBlock(e, t),
    isInline: (e, t) => h.isElement(t) && a.ML.isInline(e, t),
    isVoid: (e, t) => h.isElement(t) && a.ML.isVoid(e, t),
    isEditorEmpty(e) {
      let t = _.richValue(e);
      return !(t.length > 1) && (0 === t.length || "line" === t[0].type && h.isEmpty(t[0]))
    },
    getFirstText(e) {
      let t = _.node(e, l.u9);
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
      return null == t ? null : _.node(e, t.path)
    },
    getParentBlock(e, t) {
      var n;
      return null != (n = _.above(e, {
        at: t,
        match: t => h.isElement(t) && _.isBlock(e, t),
        mode: "lowest"
      })) ? n : null
    },
    getParentElement(e, t) {
      var n;
      return null != (n = _.above(e, {
        at: t,
        match: e => h.isElement(e),
        mode: "lowest"
      })) ? n : null
    },
    getParentInline(e, t) {
      var n;
      return null != (n = _.above(e, {
        at: t,
        match: t => _.isInline(e, t),
        mode: "lowest"
      })) ? n : null
    },
    getParentVoid(e, t) {
      var n;
      return null != (n = _.above(e, {
        at: t,
        match: t => _.isVoid(e, t),
        mode: "lowest"
      })) ? n : null
    },
    getParentOfType(e, t, n) {
      var r;
      return null != (r = _.above(e, {
        at: t,
        match: e => h.isElement(e) && n.includes(e.type),
        mode: "lowest"
      })) ? r : null
    },
    getSelectedParentOfType(e, t) {
      if (null == e.selection) return null;
      let n = y.toPoint(e.selection);
      return null == n ? null : _.getParentOfType(e, n, t)
    },
    getNodesOfType: (e, t) => _.nodes(e, {
      at: l.Ql,
      match: e => h.isElement(e) && t.includes(e.type),
      mode: "highest"
    }),
    getSelectedVoid(e) {
      let t;
      if (null == e.selection) return null;
      if (y.isExpanded(e.selection)) {
        let [n, r] = y.edges(e.selection), i = _.after(e, n, {
          unit: "offset"
        }), a = _.before(e, r, {
          unit: "offset"
        });
        if (null == i || null == a || !b.equals(i, a)) return null;
        t = i
      } else t = e.selection.anchor;
      return null == t ? null : _.getParentVoid(e, t)
    },
    getSelectedText(e, t) {
      let n = null;
      if (t) {
        let t = o.F3.findDocumentOrShadowRoot(e).getSelection();
        if (null != t && t.rangeCount > 0) {
          let r = t.getRangeAt(0);
          null != r && (n = o.F3.toSlateRange(e, r, {
            exactMatch: true,
            suppressThrow: true
          }))
        }
      } else n = e.selection;
      return null == n ? "" : this.getTextFromRange(e, n)
    },
    getTextFromRange(e, t) {
      let [n, r] = y.edges(t), i = _.nodes(e, {
        at: t,
        mode: "lowest",
        match: e => g.isText(e)
      }), a = "";
      for (let [e, t] of i) {
        let i = E.equals(t, n.path) ? n.offset : 0,
          o = E.equals(t, r.path) ? r.offset : 0;
        a += e.text.substring(i, o)
      }
      return a
    },
    withoutNormalizing(e, t) {
      let n = _.isNormalizing(e);
      _.setNormalizing(e, false);
      try {
        t()
      } finally {
        _.setNormalizing(e, n)
      }
      false !== n && _.normalize(e)
    },
    areStylesDisabled(e) {
      var t;
      if (!e.previewMarkdown) returntrue;
      let n = _.richValue(e),
        r = n[0],
        i = (null == r ? true : r.type) === "line" ? r.children[0] : null;
      if (null == i || !g.isText(i)) returnfalse;
      let a = e.chatInputType,
        o = i.text;
      return 1 === n.length && 1 === r.children.length && (true === a.sedReplace && o.startsWith("s/") || (null == (t = a.autocomplete) ? true : t.reactions) === true && o.startsWith("+"))
    },
    focus(e) {
      o.F3.isFocused(e) || (o.F3.focus(e), o.F3.deselect(e))
    },
    getSelectionOverlap(e, t) {
      if (null == e.selection) return {
        anchor: null,
        focus: null
      };
      if (E.isPath(t)) {
        let n = _.range(e, t),
          [r] = _.node(e, t);
        if (h.isElement(r)) {
          let r = _.before(e, t),
            i = _.after(e, t);
          t = {
            anchor: null != r ? r : n.anchor,
            focus: null != i ? i : n.focus
          }
        } else t = n
      }
      let [n, r] = y.edges(t), i = null, a = null;
      return b.equals(e.selection.anchor, n) ? i = "start" : b.equals(e.selection.anchor, r) ? i = "end" : y.includes(t, e.selection.anchor) && (i = "inside"), b.equals(e.selection.focus, n) ? a = "start" : b.equals(e.selection.focus, r) ? a = "end" : y.includes(t, e.selection.focus) && (a = "inside"), {
        anchor: i,
        focus: a
      }
    }
  }),
  m = f(u({}, Chunk327432.NB), {
    isType: (e, t) => a.W_.isElement(e) && e.type === t,
    isInTypes: (e, t) => a.W_.isElement(e) && t.has(e.type)
  }),
  h = f(u({}, Chunk327432.W_), {
    updateElement(e, t) {
      let n = _.node(e, t[1]);
      return i()(!_.isEditor(t[0]), "Element is the root node"), i()(null != n, "Failed to find element"), i()(h.isElement(n[0]), "Node at this path is no longer an element"), i()(n[0].type === t[0].type, "Node at this path is a different type"), n
    },
    markdown(e, t, n) {
      var r;
      let i = "line" === e.type && (null == (r = e.codeBlockState) ? true : r.wasInCodeBlock) === true,
        a = e.children.map(e => g.isText(e) ? e.text : "?"),
        o = a.join("");
      return {
        entries: s.Q(o, null != t ? t : null, i, n),
        serializedChildren: a
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
      let [n, r] = y.edges(e), [i, a] = y.edges(t);
      return (b.isBefore(n, i) && (n = i), b.isAfter(r, a) && (r = a), y.isForward(e)) ? {
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
      if (!_.hasPath(e, n.path) || !_.hasPath(e, r.path)) returnfalse;
      let [i] = _.node(e, n.path), [a] = _.node(e, r.path);
      return g.isText(i) && g.isText(a) && n.offset <= i.text.length && r.offset <= a.text.length
    }
  },
  v = (e, t) => {
    let n = (t.top + t.bottom) / 2;
    return e.top <= n && e.bottom >= n
  },
  S = (e, t, n) => {
    let r = _.toDOMRange(e, t).getBoundingClientRect(),
      i = _.toDOMRange(e, n).getBoundingClientRect();
    return v(r, i) && v(i, r)
  },
  I = (e, t, n, r) => {
    let i = {
        anchor: t,
        focus: t
      },
      a = 0,
      o = n.length,
      s = Math.floor((a + o) / 2);
    for (; s !== a;)
      if (S(e, {
          anchor: n[s],
          focus: n[s]
        }, i) ? r ? o = s : a = s : r ? a = s : o = s, s = Math.floor((a + o) / 2), !r && s === n.length - 2 && o === n.length - 1) {
        let t = n[n.length - 1];
        S(e, {
          anchor: t,
          focus: t
        }, i) && (s = o)
      } return n[s]
  },
  T = {
    getLineStart(e, t, n) {
      let r, i = _.getParentElement(e, t);
      if (null == i) return null;
      let a = _.previous(e, {
        at: t,
        match: t => _.isInline(e, t) && !_.isVoid(e, t) && t !== i[0]
      });
      null != a && (r = _.after(e, a[1])), null == r && (r = _.start(e, i[1]));
      let o = {
          anchor: r,
          focus: t
        },
        s = Array.from(_.positions(e, {
          at: o
        })),
        l = I(e, t, s, true);
      if (n && b.equals(t, l) && !b.isAtEnd(t, i)) {
        let n = _.after(e, t);
        if (null == n) return l;
        l = I(e, n, s, true)
      }
      return l
    },
    getLineEnd(e, t, n) {
      let r, i = _.getParentElement(e, t);
      if (null == i) return null;
      let a = _.next(e, {
        at: t,
        match: t => _.isInline(e, t) && !_.isVoid(e, t) && t !== i[0]
      });
      null != a && (r = _.before(e, a[1])), null == r && (r = _.end(e, i[1]));
      let o = {
          anchor: t,
          focus: r
        },
        s = Array.from(_.positions(e, {
          at: o
        })),
        l = I(e, t, s, false);
      if (n && b.equals(t, l) && !b.isAtEnd(t, i)) {
        let n = _.after(e, t);
        if (null == n) return l;
        l = I(e, n, s, false)
      }
      return l
    },
    getLineActionRange(e, t) {
      let n = y.toPoint(e.selection);
      if (null == n) return null;
      if (t) {
        let t = T.getLineStart(e, n, false);
        return null == t ? null : {
          anchor: t,
          focus: n
        }
      } {
        let t = T.getLineEnd(e, n, true);
        return null == t ? null : {
          anchor: n,
          focus: t
        }
      }
    }
  }