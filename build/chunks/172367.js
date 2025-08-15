/** Chunk was on 8381 **/
/** chunk id: 172367, original params: t,e,r (module,exports,require) **/
"use strict";

function n(t, e, r) {
  return e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = r, t
}
var Chunk968514 = require("./968514.js"),
  Chunk449168 = require("./449168.js"),
  Chunk497218 = require("./497218.js"),
  Chunk116514 = require("./116514.js"),
  Chunk65183 = require("./65183.js"),
  c = Chunk65183.OrderedSet,
  l = Chunk65183.Record,
  f = Chunk65183.Stack,
  p = l({
    allowUndo: true,
    currentContent: null,
    decorator: null,
    directionMap: null,
    forceSelection: false,
    inCompositionMode: false,
    inlineStyleOverride: null,
    lastChangeType: null,
    nativelyRenderedContent: null,
    redoStack: f(),
    selection: null,
    treeMap: null,
    undoStack: f()
  }),
  h = function() {
    exports.createEmpty = function(t) {
      return e.createWithContent(o.createFromText(""), t)
    }, exports.createWithContent = function(t, r) {
      if (0 === t.getBlockMap().count()) return e.createEmpty(r);
      var n = t.getBlockMap().first().getKey();
      return e.create({
        currentContent: t,
        undoStack: f(),
        redoStack: f(),
        decorator: r || null,
        selection: u.createEmpty(n)
      })
    }, exports.create = function(t) {
      var r = t.currentContent,
        i = t.decorator;
      return new e(new p(function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {},
            i = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
            return Object.getOwnPropertyDescriptor(r, t).enumerable
          }))), i.forEach(function(e) {
            n(t, e, r[e])
          })
        }
        return t
      }({}, t, {
        treeMap: g(r, i),
        directionMap: a.getDirectionMap(r)
      })))
    }, exports.set = function(t, r) {
      return new e(t.getImmutable().withMutations(function(e) {
        var n, o, a, u, s, c, l = e.get("decorator"),
          f = l;
        null === r.decorator ? f = null : r.decorator && (f = r.decorator);
        var p = r.currentContent || t.getCurrentContent();
        if (f !== l) {
          var h, d, y, v, m, _, b = e.get("treeMap");
          _ = f && l ? (h = p, d = p.getBlockMap(), y = b, v = f, m = l, y.merge(d.toSeq().filter(function(t) {
            return v.getDecorations(t, h) !== m.getDecorations(t, h)
          }).map(function(t) {
            return i.generate(h, t, v)
          }))) : g(p, f), e.merge({
            decorator: f,
            treeMap: _,
            nativelyRenderedContent: null
          });
          return
        }
        p !== t.getCurrentContent() && e.set("treeMap", (n = t, o = p.getBlockMap(), a = p.getEntityMap(), u = f, c = (s = n.getCurrentContent().set("entityMap", a)).getBlockMap(), n.getImmutable().get("treeMap").merge(o.toSeq().filter(function(t, e) {
          return t !== c.get(e)
        }).map(function(t) {
          return i.generate(s, t, u)
        })))), e.merge(r)
      }))
    };
    var t = exports.prototype;

    function e(t) {
      n(this, "_immutable", true), this._immutable = t
    }
    return module.toJS = function() {
      return this.getImmutable().toJS()
    }, module.getAllowUndo = function() {
      return this.getImmutable().get("allowUndo")
    }, module.getCurrentContent = function() {
      return this.getImmutable().get("currentContent")
    }, module.getUndoStack = function() {
      return this.getImmutable().get("undoStack")
    }, module.getRedoStack = function() {
      return this.getImmutable().get("redoStack")
    }, module.getSelection = function() {
      return this.getImmutable().get("selection")
    }, module.getDecorator = function() {
      return this.getImmutable().get("decorator")
    }, module.isInCompositionMode = function() {
      return this.getImmutable().get("inCompositionMode")
    }, module.mustForceSelection = function() {
      return this.getImmutable().get("forceSelection")
    }, module.getNativelyRenderedContent = function() {
      return this.getImmutable().get("nativelyRenderedContent")
    }, module.getLastChangeType = function() {
      return this.getImmutable().get("lastChangeType")
    }, module.getInlineStyleOverride = function() {
      return this.getImmutable().get("inlineStyleOverride")
    }, exports.setInlineStyleOverride = function(t, r) {
      return e.set(t, {
        inlineStyleOverride: r
      })
    }, module.getCurrentInlineStyle = function() {
      var t, e, r, n, i, o, a, u, s, c, l = this.getInlineStyleOverride();
      if (null != l) return l;
      var f = this.getCurrentContent(),
        p = this.getSelection();
      return p.isCollapsed() ? (t = f, r = (e = p).getStartKey(), n = exports.getStartOffset(), i = module.getBlockForKey(require), n > 0 ? Chunk968514.getInlineStyleAt(n - 1) : Chunk968514.getLength() ? Chunk968514.getInlineStyleAt(0) : y(module, require)) : (o = f, u = (a = p).getStartKey(), s = Chunk497218.getStartOffset(), Chunk65183 < (c = Chunk449168.getBlockForKey(Chunk116514)).getLength() ? c.getInlineStyleAt(Chunk65183) : Chunk65183 > 0 ? c.getInlineStyleAt(Chunk65183 - 1) : y(Chunk449168, Chunk116514))
    }, module.getBlockTree = function(t) {
      return this.getImmutable().getIn(["treeMap", t])
    }, module.isSelectionAtStartOfContent = function() {
      var t = this.getCurrentContent().getBlockMap().first().getKey();
      return this.getSelection().hasEdgeWithin(module, 0, 0)
    }, module.isSelectionAtEndOfContent = function() {
      var t = this.getCurrentContent().getBlockMap().last(),
        e = module.getLength();
      return this.getSelection().hasEdgeWithin(module.getKey(), exports, exports)
    }, module.getDirectionMap = function() {
      return this.getImmutable().get("directionMap")
    }, exports.acceptSelection = function(t, e) {
      return d(t, e, false)
    }, exports.forceSelection = function(t, e) {
      return e.getHasFocus() || (e = e.set("hasFocus", true)), d(t, e, true)
    }, exports.moveSelectionToEnd = function(t) {
      var r = t.getCurrentContent().getLastBlock(),
        n = r.getKey(),
        i = r.getLength();
      return e.acceptSelection(t, new u({
        anchorKey: n,
        anchorOffset: i,
        focusKey: n,
        focusOffset: i,
        isBackward: false
      }))
    }, exports.moveFocusToEnd = function(t) {
      var r = e.moveSelectionToEnd(t);
      return e.forceSelection(r, r.getSelection())
    }, exports.push = function(t, r, n) {
      var i, o, u = !(arguments.length > 3) || true === arguments[3] || arguments[3];
      if (t.getCurrentContent() === r) return t;
      var s = a.getDirectionMap(r, t.getDirectionMap());
      if (!t.getAllowUndo()) return e.set(t, {
        currentContent: r,
        directionMap: s,
        lastChangeType: n,
        selection: r.getSelectionAfter(),
        forceSelection: u,
        inlineStyleOverride: null
      });
      var c = t.getSelection(),
        l = t.getCurrentContent(),
        p = t.getUndoStack(),
        h = r;
      c !== l.getSelectionAfter() || (i = t, (o = n) !== i.getLastChangeType() || "insert-characters" !== o && "backspace-character" !== o && "delete-character" !== o) ? (p = p.push(l), h = h.set("selectionBefore", c)) : ("insert-characters" === n || "backspace-character" === n || "delete-character" === n) && (h = h.set("selectionBefore", l.getSelectionBefore()));
      var d = t.getInlineStyleOverride();
      false === ["adjust-depth", "change-block-type", "split-block"].indexOf(n) && (d = null);
      var g = {
        currentContent: h,
        directionMap: s,
        undoStack: p,
        redoStack: f(),
        lastChangeType: n,
        selection: r.getSelectionAfter(),
        forceSelection: u,
        inlineStyleOverride: d
      };
      return e.set(t, g)
    }, exports.undo = function(t) {
      if (!t.getAllowUndo()) return t;
      var r = t.getUndoStack(),
        n = r.peek();
      if (!n) return t;
      var i = t.getCurrentContent(),
        o = a.getDirectionMap(n, t.getDirectionMap());
      return e.set(t, {
        currentContent: n,
        directionMap: o,
        undoStack: r.shift(),
        redoStack: t.getRedoStack().push(i),
        forceSelection: true,
        inlineStyleOverride: null,
        lastChangeType: "undo",
        nativelyRenderedContent: null,
        selection: i.getSelectionBefore()
      })
    }, exports.redo = function(t) {
      if (!t.getAllowUndo()) return t;
      var r = t.getRedoStack(),
        n = r.peek();
      if (!n) return t;
      var i = t.getCurrentContent(),
        o = a.getDirectionMap(n, t.getDirectionMap());
      return e.set(t, {
        currentContent: n,
        directionMap: o,
        undoStack: t.getUndoStack().push(i),
        redoStack: r.shift(),
        forceSelection: true,
        inlineStyleOverride: null,
        lastChangeType: "redo",
        nativelyRenderedContent: null,
        selection: n.getSelectionAfter()
      })
    }, module.getImmutable = function() {
      return this._immutable
    }, exports
  }();

function d(t, e, r) {
  return h.set(t, {
    selection: e,
    forceSelection: r,
    nativelyRenderedContent: null,
    inlineStyleOverride: null
  })
}

function g(t, e) {
  return t.getBlockMap().map(function(r) {
    return i.generate(t, r, e)
  }).toOrderedMap()
}

function y(t, e) {
  var r = t.getBlockMap().reverse().skipUntil(function(t, r) {
    return r === e
  }).skip(1).skipUntil(function(t, e) {
    return t.getLength()
  }).first();
  return r ? r.getInlineStyleAt(r.getLength() - 1) : c()
}
module.exports = h