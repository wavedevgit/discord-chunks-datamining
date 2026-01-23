/** Chunk was on web.js **/
/** chunk id: 711371, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AS: () => _,
  Kh: () => E,
  Ot: () => b,
  PW: () => g,
  VW: () => p,
  ZF: () => y,
  cv: () => h,
  e0: () => I,
  l5: () => m
}), require("./134528.js"), require("./947204.js"), require("./264879.js"), require("./896048.js");
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk719442 = require("./719442.js"),
  Chunk253018 = require("./253018.js"),
  Chunk184034 = require("./184034.js"),
  Chunk551483 = require("./551483.js");

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
if (require("./654821.js"), !Chunk719442.KE._addedDiscordOverrides) {
  let e = Chunk719442.KE.positions;
  Chunk719442.KE.positions = function*(t) {
    var n, r;
    let i, s, o = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
      {
        at: l = t.selection,
        unit: c = "offset",
        reverse: d = false,
        voids: _ = false
      } = null != o ? o : {};
    if (null == l) return;
    if ("block" === c && (c = "line"), "offset" === c) {
      for (let n of e(t, o)) yield n;
      return
    }
    i = E.isPoint(l) ? d ? {
      anchor: l,
      focus: p.start(t, [])
    } : {
      anchor: l,
      focus: p.end(t, [])
    } : p.range(t, l);
    let [b, O] = y.edges(i), v = p.blocks(t), A = d ? false : 1, I = null != (n = b.path[0]) ? n : 0, S = null != (r = O.path[0]) ? r : v.length - 1, T = d ? S : I, C = d ? I : S, N = false;

    function* w(n) {
      let [r, i] = n, l = i.length, p = g.isAncestor(i, b.path), E = g.isAncestor(i, O.path), y = p ? b.path[l] : 0, v = E ? O.path[l] : r.children.length - 1, I = d ? v : y, S = d ? y : v;
      for (let n = I; !N && (!d ? n <= S : n >= S); n += A) {
        let l = r.children[n],
          p = g.child(i, n);
        if (h.isElement(l)) {
          let e = d ? O.path : b.path;
          if (!(g.equals(p, e) || g.isAncestor(p, e))) {
            let e = t.isVoid(l);
            if ("line" === c && h.isElement(l) && !e) {
              null != s && (yield s, s = true), N = true;
              return
            }
            if (!_ && e) continue
          }
          for (let e of w([l, p])) yield e
        } else if (m.isText(l))
          if ("line" === c) s = {
            path: p,
            offset: d ? 0 : l.text.length
          };
          else if (0 === l.text.length) yield {
          path: p,
          offset: 0
        };
        else {
          let n = a.KE.range(t, p);
          for (let r of (g.equals(p, b.path) && (n.anchor = b), g.equals(p, O.path) && (n.focus = O), e(t, f(u({}, o), {
              at: n
            })))) yield r
        }
      }
      "line" === c && h.isElement(r) && !t.isVoid(r) && (null != s && (yield s, s = true), N = true)
    }
    "line" === c && (yield d ? O : b);
    for (let e = T; !N && (!d ? e <= C : e >= C); e += A)
      for (let t of w(v[e])) yield t
  };
  let t = Chunk253018.rL.findDocumentOrShadowRoot;
  Chunk253018.rL.findDocumentOrShadowRoot = e => {
    var n, r;
    return null != (n = null == (r = e.windowContext) ? true : r.renderWindow.document) ? n : t(e)
  }, Chunk719442.KE._addedDiscordOverrides = true
}
let p = f(u({}, Chunk719442.KE, Chunk253018.rL), {
    richValue: e => e.children,
    blocks: e => p.richValue(e).map((e, t) => [e, [t]]),
    isBlock: (e, t) => h.isElement(t) && a.KE.isBlock(e, t),
    isInline: (e, t) => h.isElement(t) && a.KE.isInline(e, t),
    isVoid: (e, t) => h.isElement(t) && a.KE.isVoid(e, t),
    isEditorEmpty(e) {
      let t = p.richValue(e);
      return !(t.length > 1) && (0 === t.length || "line" === t[0].type && h.isEmpty(t[0]))
    },
    getFirstText(e) {
      let t = p.node(e, l.fP);
      return m.isText(t[0]) ? t[0] : null
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
        match: t => h.isElement(t) && p.isBlock(e, t),
        mode: "lowest"
      })) ? n : null
    },
    getParentElement(e, t) {
      var n;
      return null != (n = p.above(e, {
        at: t,
        match: e => h.isElement(e),
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
        match: e => h.isElement(e) && n.includes(e.type),
        mode: "lowest"
      })) ? r : null
    },
    getSelectedParentOfType(e, t) {
      if (null == e.selection) return null;
      let n = y.toPoint(e.selection);
      return null == n ? null : p.getParentOfType(e, n, t)
    },
    getNodesOfType: (e, t) => p.nodes(e, {
      at: l.Dl,
      match: e => h.isElement(e) && t.includes(e.type),
      mode: "highest"
    }),
    getSelectedVoid(e) {
      let t;
      if (null == e.selection) return null;
      if (y.isExpanded(e.selection)) {
        let [n, r] = y.edges(e.selection), i = p.after(e, n, {
          unit: "offset"
        }), a = p.before(e, r, {
          unit: "offset"
        });
        if (null == i || null == a || !E.equals(i, a)) return null;
        t = i
      } else t = e.selection.anchor;
      return null == t ? null : p.getParentVoid(e, t)
    },
    getSelectedText(e, t) {
      let n = null;
      if (t) {
        let t = s.rL.findDocumentOrShadowRoot(e).getSelection();
        if (null != t && t.rangeCount > 0) {
          let r = t.getRangeAt(0);
          null != r && (n = s.rL.toSlateRange(e, r, {
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
        match: e => m.isText(e)
      }), a = "";
      for (let [e, t] of i) {
        let i = g.equals(t, n.path) ? n.offset : 0,
          s = g.equals(t, r.path) ? r.offset : 0;
        a += e.text.substring(i, s)
      }
      return a
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
      if (null == i || !m.isText(i)) returnfalse;
      let a = e.chatInputType,
        s = i.text;
      return 1 === n.length && 1 === r.children.length && (true === a.sedReplace && s.startsWith("s/") || (null == (t = a.autocomplete) ? true : t.reactions) === true && s.startsWith("+"))
    },
    focus(e) {
      s.rL.isFocused(e) || (s.rL.focus(e), s.rL.deselect(e))
    },
    getSelectionOverlap(e, t) {
      if (null == e.selection) return {
        anchor: null,
        focus: null
      };
      if (g.isPath(t)) {
        let n = p.range(e, t),
          [r] = p.node(e, t);
        if (h.isElement(r)) {
          let r = p.before(e, t),
            i = p.after(e, t);
          t = {
            anchor: null != r ? r : n.anchor,
            focus: null != i ? i : n.focus
          }
        } else t = n
      }
      let [n, r] = y.edges(t), i = null, a = null;
      return E.equals(e.selection.anchor, n) ? i = "start" : E.equals(e.selection.anchor, r) ? i = "end" : y.includes(t, e.selection.anchor) && (i = "inside"), E.equals(e.selection.focus, n) ? a = "start" : E.equals(e.selection.focus, r) ? a = "end" : y.includes(t, e.selection.focus) && (a = "inside"), {
        anchor: i,
        focus: a
      }
    }
  }),
  _ = f(u({}, Chunk719442.bP), {
    isType: (e, t) => a.Hg.isElement(e) && e.type === t,
    isInTypes: (e, t) => a.Hg.isElement(e) && t.has(e.type)
  }),
  h = f(u({}, Chunk719442.Hg), {
    updateElement(e, t) {
      let n = p.node(e, t[1]);
      return i()(!p.isEditor(t[0]), "Element is the root node"), i()(null != n, "Failed to find element"), i()(h.isElement(n[0]), "Node at this path is no longer an element"), i()(n[0].type === t[0].type, "Node at this path is a different type"), n
    },
    markdown(e, t, n) {
      var r;
      let i = "line" === e.type && (null == (r = e.codeBlockState) ? true : r.wasInCodeBlock) === true,
        a = e.children.map(e => m.isText(e) ? e.text : "?"),
        s = a.join("");
      return {
        entries: o.q(s, null != t ? t : null, i, n),
        serializedChildren: a
      }
    },
    isEmpty(e) {
      if (e.children.length > 1) returnfalse;
      if (0 === e.children.length) returntrue;
      let t = e.children[0];
      return m.isText(t) && 0 === t.text.length
    }
  }),
  m = u({}, Chunk719442.EY),
  g = f(u({}, Chunk719442.wA), {
    isFirstEditorBlock: e => g.equals(e, l.Xg),
    isFirstEditorText: e => g.equals(e, l.fP),
    isFirstChild: (e, t) => g.equals(t, g.child(e, 0)),
    child: (e, t) => [...e, t]
  }),
  E = f(u({}, Chunk719442.bR), {
    start(e) {
      let [, t] = e;
      return {
        path: g.child(t, 0),
        offset: 0
      }
    },
    end(e) {
      let [t, n] = e, r = t.children[t.children.length - 1];
      return {
        path: g.child(n, t.children.length - 1),
        offset: m.isText(r) ? r.text.length : 0
      }
    },
    isAtStart(e, t) {
      return E.equals(e, this.start(t))
    },
    isAtEnd(e, t) {
      return E.equals(e, this.end(t))
    },
    clamp(e, t) {
      let [n, r] = y.edges(t);
      return E.isBefore(e, n) && (e = n), E.isAfter(e, r) && (e = r), e
    }
  }),
  y = f(u({}, Chunk719442.Q6), {
    toPoint: e => null == e || y.isExpanded(e) ? null : e.anchor,
    children(e) {
      let [t, n] = e, r = t.children[t.children.length - 1];
      return {
        anchor: {
          path: g.child(n, 0),
          offset: 0
        },
        focus: {
          path: g.child(n, t.children.length - 1),
          offset: m.isText(r) ? r.text.length : 0
        }
      }
    },
    clamp(e, t) {
      let [n, r] = y.edges(e), [i, a] = y.edges(t);
      return (E.isBefore(n, i) && (n = i), E.isAfter(r, a) && (r = a), y.isForward(e)) ? {
        anchor: n,
        focus: r
      } : {
        anchor: r,
        focus: n
      }
    }
  }),
  b = {
    equals: (e, t) => null == e && null == t || null != e && null != t && y.equals(e, t),
    isValid(e, t) {
      if (null == t) returnfalse;
      let {
        anchor: n,
        focus: r
      } = t;
      if (!p.hasPath(e, n.path) || !p.hasPath(e, r.path)) returnfalse;
      let [i] = p.node(e, n.path), [a] = p.node(e, r.path);
      return m.isText(i) && m.isText(a) && n.offset <= i.text.length && r.offset <= a.text.length
    }
  },
  O = (e, t) => {
    let n = (t.top + t.bottom) / 2;
    return e.top <= n && e.bottom >= n
  },
  v = (e, t, n) => {
    let r = p.toDOMRange(e, t).getBoundingClientRect(),
      i = p.toDOMRange(e, n).getBoundingClientRect();
    return O(r, i) && O(i, r)
  },
  A = (e, t, n, r) => {
    let i = {
        anchor: t,
        focus: t
      },
      a = 0,
      s = n.length,
      o = Math.floor((a + s) / 2);
    for (; o !== a;)
      if (v(e, {
          anchor: n[o],
          focus: n[o]
        }, i) ? r ? s = o : a = o : r ? a = o : s = o, o = Math.floor((a + s) / 2), !r && o === n.length - 2 && s === n.length - 1) {
        let t = n[n.length - 1];
        v(e, {
          anchor: t,
          focus: t
        }, i) && (o = s)
      } return n[o]
  },
  I = {
    getLineStart(e, t, n) {
      let r = p.getParentElement(e, t);
      if (null == r) return null;
      let i = {
          anchor: p.start(e, r[1]),
          focus: t
        },
        a = Array.from(p.positions(e, {
          at: i
        })),
        s = A(e, t, a, true);
      if (n && E.equals(t, s) && !E.isAtEnd(t, r)) {
        let n = p.after(e, t);
        if (null == n) return s;
        s = A(e, n, a, true)
      }
      return s
    },
    getLineEnd(e, t, n) {
      let r = p.getParentElement(e, t);
      if (null == r) return null;
      let i = {
          anchor: t,
          focus: p.end(e, r[1])
        },
        a = Array.from(p.positions(e, {
          at: i
        })),
        s = A(e, t, a, false);
      if (n && E.equals(t, s) && !E.isAtEnd(t, r)) {
        let n = p.after(e, t);
        if (null == n) return s;
        s = A(e, n, a, false)
      }
      return s
    }
  }