/** Chunk was on web.js **/
/** chunk id: 384404, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      i(e, t, n[t])
    })
  }
  return e
}

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var Chunk131522 = require("./131522.js"),
  Chunk769698 = require("./769698.js"),
  Chunk921287 = require("./921287.js"),
  Chunk365702 = require("./365702.js"),
  Chunk65183 = require("./65183.js"),
  u = Chunk65183.OrderedSet,
  d = Chunk65183.Record,
  f = Chunk65183.Stack,
  p = d({
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
  _ = function() {
    t.createEmpty = function(e) {
      return t.createWithContent(o.createFromText(""), e)
    }, t.createWithContent = function(e, n) {
      if (0 === e.getBlockMap().count()) return t.createEmpty(n);
      var r = e.getBlockMap().first().getKey();
      return t.create({
        currentContent: e,
        undoStack: f(),
        redoStack: f(),
        decorator: n || null,
        selection: l.createEmpty(r)
      })
    }, t.create = function(e) {
      var n = e.currentContent,
        i = e.decorator;
      return new t(new p(r({}, e, {
        treeMap: m(n, i),
        directionMap: s.getDirectionMap(n)
      })))
    }, t.set = function(e, n) {
      return new t(e.getImmutable().withMutations(function(t) {
        var r = t.get("decorator"),
          i = r;
        null === n.decorator ? i = null : n.decorator && (i = n.decorator);
        var a = n.currentContent || e.getCurrentContent();
        if (i !== r) {
          var o, s = t.get("treeMap");
          o = i && r ? E(a, a.getBlockMap(), s, i, r) : m(a, i), t.merge({
            decorator: i,
            treeMap: o,
            nativelyRenderedContent: null
          });
          return
        }
        a !== e.getCurrentContent() && t.set("treeMap", g(e, a.getBlockMap(), a.getEntityMap(), i)), t.merge(n)
      }))
    };
    var e = t.prototype;

    function t(e) {
      i(this, "_immutable", true), this._immutable = e
    }
    return e.toJS = function() {
      return this.getImmutable().toJS()
    }, e.getAllowUndo = function() {
      return this.getImmutable().get("allowUndo")
    }, e.getCurrentContent = function() {
      return this.getImmutable().get("currentContent")
    }, e.getUndoStack = function() {
      return this.getImmutable().get("undoStack")
    }, e.getRedoStack = function() {
      return this.getImmutable().get("redoStack")
    }, e.getSelection = function() {
      return this.getImmutable().get("selection")
    }, e.getDecorator = function() {
      return this.getImmutable().get("decorator")
    }, e.isInCompositionMode = function() {
      return this.getImmutable().get("inCompositionMode")
    }, e.mustForceSelection = function() {
      return this.getImmutable().get("forceSelection")
    }, e.getNativelyRenderedContent = function() {
      return this.getImmutable().get("nativelyRenderedContent")
    }, e.getLastChangeType = function() {
      return this.getImmutable().get("lastChangeType")
    }, e.getInlineStyleOverride = function() {
      return this.getImmutable().get("inlineStyleOverride")
    }, t.setInlineStyleOverride = function(e, n) {
      return t.set(e, {
        inlineStyleOverride: n
      })
    }, e.getCurrentInlineStyle = function() {
      var e = this.getInlineStyleOverride();
      if (null != e) return e;
      var t = this.getCurrentContent(),
        n = this.getSelection();
      return n.isCollapsed() ? y(t, n) : O(t, n)
    }, e.getBlockTree = function(e) {
      return this.getImmutable().getIn(["treeMap", e])
    }, e.isSelectionAtStartOfContent = function() {
      var e = this.getCurrentContent().getBlockMap().first().getKey();
      return this.getSelection().hasEdgeWithin(e, 0, 0)
    }, e.isSelectionAtEndOfContent = function() {
      var e = this.getCurrentContent().getBlockMap().last(),
        t = e.getLength();
      return this.getSelection().hasEdgeWithin(e.getKey(), t, t)
    }, e.getDirectionMap = function() {
      return this.getImmutable().get("directionMap")
    }, t.acceptSelection = function(e, t) {
      return h(e, t, false)
    }, t.forceSelection = function(e, t) {
      return t.getHasFocus() || (t = t.set("hasFocus", true)), h(e, t, true)
    }, t.moveSelectionToEnd = function(e) {
      var n = e.getCurrentContent().getLastBlock(),
        r = n.getKey(),
        i = n.getLength();
      return t.acceptSelection(e, new l({
        anchorKey: r,
        anchorOffset: i,
        focusKey: r,
        focusOffset: i,
        isBackward: false
      }))
    }, t.moveFocusToEnd = function(e) {
      var n = t.moveSelectionToEnd(e);
      return t.forceSelection(n, n.getSelection())
    }, t.push = function(e, n, r) {
      var i = !(arguments.length > 3) || true === arguments[3] || arguments[3];
      if (e.getCurrentContent() === n) return e;
      var a = s.getDirectionMap(n, e.getDirectionMap());
      if (!e.getAllowUndo()) return t.set(e, {
        currentContent: n,
        directionMap: a,
        lastChangeType: r,
        selection: n.getSelectionAfter(),
        forceSelection: i,
        inlineStyleOverride: null
      });
      var o = e.getSelection(),
        l = e.getCurrentContent(),
        c = e.getUndoStack(),
        u = n;
      o !== l.getSelectionAfter() || b(e, r) ? (c = c.push(l), u = u.set("selectionBefore", o)) : ("insert-characters" === r || "backspace-character" === r || "delete-character" === r) && (u = u.set("selectionBefore", l.getSelectionBefore()));
      var d = e.getInlineStyleOverride();
      false === ["adjust-depth", "change-block-type", "split-block"].indexOf(r) && (d = null);
      var p = {
        currentContent: u,
        directionMap: a,
        undoStack: c,
        redoStack: f(),
        lastChangeType: r,
        selection: n.getSelectionAfter(),
        forceSelection: i,
        inlineStyleOverride: d
      };
      return t.set(e, p)
    }, t.undo = function(e) {
      if (!e.getAllowUndo()) return e;
      var n = e.getUndoStack(),
        r = n.peek();
      if (!r) return e;
      var i = e.getCurrentContent(),
        a = s.getDirectionMap(r, e.getDirectionMap());
      return t.set(e, {
        currentContent: r,
        directionMap: a,
        undoStack: n.shift(),
        redoStack: e.getRedoStack().push(i),
        forceSelection: true,
        inlineStyleOverride: null,
        lastChangeType: "undo",
        nativelyRenderedContent: null,
        selection: i.getSelectionBefore()
      })
    }, t.redo = function(e) {
      if (!e.getAllowUndo()) return e;
      var n = e.getRedoStack(),
        r = n.peek();
      if (!r) return e;
      var i = e.getCurrentContent(),
        a = s.getDirectionMap(r, e.getDirectionMap());
      return t.set(e, {
        currentContent: r,
        directionMap: a,
        undoStack: e.getUndoStack().push(i),
        redoStack: n.shift(),
        forceSelection: true,
        inlineStyleOverride: null,
        lastChangeType: "redo",
        nativelyRenderedContent: null,
        selection: r.getSelectionAfter()
      })
    }, e.getImmutable = function() {
      return this._immutable
    }, t
  }();

function h(e, t, n) {
  return _.set(e, {
    selection: t,
    forceSelection: n,
    nativelyRenderedContent: null,
    inlineStyleOverride: null
  })
}

function m(e, t) {
  return e.getBlockMap().map(function(n) {
    return a.generate(e, n, t)
  }).toOrderedMap()
}

function g(e, t, n, r) {
  var i = e.getCurrentContent().set("entityMap", n),
    o = i.getBlockMap();
  return e.getImmutable().get("treeMap").merge(t.toSeq().filter(function(e, t) {
    return e !== o.get(t)
  }).map(function(e) {
    return a.generate(i, e, r)
  }))
}

function E(e, t, n, r, i) {
  return n.merge(t.toSeq().filter(function(t) {
    return r.getDecorations(t, e) !== i.getDecorations(t, e)
  }).map(function(t) {
    return a.generate(e, t, r)
  }))
}

function b(e, t) {
  return t !== e.getLastChangeType() || "insert-characters" !== t && "backspace-character" !== t && "delete-character" !== t
}

function y(e, t) {
  var n = t.getStartKey(),
    r = t.getStartOffset(),
    i = e.getBlockForKey(n);
  return r > 0 ? i.getInlineStyleAt(r - 1) : i.getLength() ? i.getInlineStyleAt(0) : v(e, n)
}

function O(e, t) {
  var n = t.getStartKey(),
    r = t.getStartOffset(),
    i = e.getBlockForKey(n);
  return r < i.getLength() ? i.getInlineStyleAt(r) : r > 0 ? i.getInlineStyleAt(r - 1) : v(e, n)
}

function v(e, t) {
  var n = e.getBlockMap().reverse().skipUntil(function(e, n) {
    return n === t
  }).skip(1).skipUntil(function(e, t) {
    return e.getLength()
  }).first();
  return n ? n.getInlineStyleAt(n.getLength() - 1) : u()
}
module.exports = _