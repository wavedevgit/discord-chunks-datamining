/** Chunk was on web.js **/
/** chunk id: 868715, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk724039 = require("./724039.js");

function i() {
  return (i = r || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  }).apply(this, arguments)
}

function a(e) {
  if (true === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e
}

function s(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
}

function o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var Chunk92690 = require("./92690.js"),
  Chunk595042 = require("./595042.js"),
  Chunk64700 = require("./64700.js"),
  Chunk251577 = require("./251577.js"),
  Chunk448567 = require("./448567.js"),
  Chunk919743 = require("./919743.js"),
  Chunk423856 = require("./423856.js"),
  Chunk460249 = require("./460249.js"),
  Chunk116740 = require("./116740.js"),
  Chunk797686 = require("./797686.js"),
  Chunk537578 = require("./537578.js"),
  b = 10;
Chunk116740.List;
var O = function(e, t) {
    return e.getAnchorKey() === t || e.getFocusKey() === t
  },
  v = function(e, t) {
    var n = e.getNextSiblingKey();
    return !!n && t.getBlockForKey(n).getType() === e.getType()
  },
  A = function(e, t, n) {
    var r = [],
      i = true,
      a = false,
      s = true;
    try {
      for (var o, l = n.reverse()[Symbol.iterator](); !(i = (o = l.next()).done); i = true) {
        var c = o.value;
        if (c.type !== t) break;
        r.push(c)
      }
    } catch (e) {
      a = true, s = e
    } finally {
      try {
        i || null == l.return || l.return()
      } finally {
        if (a) throw s
      }
    }
    n.splice(n.indexOf(r[0]), r.length + 1);
    var f = r.reverse(),
      p = f[0].key;
    return n.push(d.cloneElement(e, {
      key: "".concat(p, "-wrap"),
      "data-offset-key": u.encode(p, 0, 0)
    }, f)), n
  },
  I = function(e, t) {
    var n = t.get(e.getType()) || t.get("unstyled"),
      r = n.wrapper;
    return {
      Element: n.element || t.get("unstyled").element,
      wrapperTemplate: r
    }
  },
  S = function(e, t) {
    var n = t(e);
    return n ? {
      CustomComponent: n.component,
      customProps: n.props,
      customEditable: n.editable
    } : {}
  },
  T = function(e, t, n, r, i, a) {
    var s = {
        "data-block": true,
        "data-editor": t,
        "data-offset-key": n,
        key: e.getKey(),
        ref: a
      },
      l = r(e);
    return l && (s.className = l), true !== i.customEditable && (s = o({}, s, {
      contentEditable: i.customEditable,
      suppressContentEditableWarning: true
    })), s
  };
module.exports = function(e) {
  function t() {
    for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
    return l(a(t = e.call.apply(e, [this].concat(r)) || this), "wrapperRef", d.createRef()), t
  }
  s(t, e);
  var n = t.prototype;
  return n.shouldComponentUpdate = function(e) {
    var t = this.props,
      n = t.block,
      r = t.direction,
      i = t.tree,
      a = !n.getChildKeys().isEmpty(),
      s = n !== e.block || i !== e.tree || r !== e.direction || O(e.selection, e.block.getKey()) && e.forceSelection;
    return a || s
  }, n.componentDidMount = function() {
    var e, t = this.props.selection,
      n = t.getEndKey();
    if (t.getHasFocus() && n === this.props.block.getKey()) {
      var r = this.wrapperRef.current;
      if (r) {
        var i = p.getScrollParent(r),
          a = h(i);
        if (i === window) {
          var s = _(r);
          (e = s.y + s.height - m().height) > 0 && window.scrollTo(a.x, a.y + e + b)
        } else {
          y(r) || E(false);
          var o = r;
          (e = o.offsetHeight + o.offsetTop - (i.offsetHeight + a.y)) > 0 && f.setTop(i, f.getTop(i) + e + b)
        }
      }
    }
  }, n.render = function() {
    var e = this,
      n = this.props,
      r = n.block,
      a = n.blockRenderMap,
      s = n.blockRendererFn,
      l = n.blockStyleFn,
      f = n.contentState,
      p = n.decorator,
      _ = n.editorKey,
      h = n.editorState,
      m = n.customStyleFn,
      g = n.customStyleMap,
      E = n.direction,
      y = n.forceSelection,
      b = n.selection,
      C = n.tree,
      N = null;
    r.children.size && (N = r.children.reduce(function(n, r) {
      var i = u.encode(r, 0, 0),
        c = f.getBlockForKey(r),
        p = S(c, s),
        m = p.CustomComponent || t,
        g = I(c, a),
        E = g.Element,
        y = g.wrapperTemplate,
        b = T(c, _, i, l, p, null),
        O = o({}, e.props, {
          tree: h.getBlockTree(r),
          blockProps: p.customProps,
          offsetKey: i,
          block: c
        });
      return n.push(d.createElement(E, b, d.createElement(m, O))), !y || v(c, f) || A(y, E, n), n
    }, []));
    var R = r.getKey(),
      w = u.encode(R, 0, 0),
      P = S(r, s),
      D = P.CustomComponent,
      x = null != D ? d.createElement(D, i({}, this.props, {
        tree: h.getBlockTree(R),
        blockProps: P.customProps,
        offsetKey: w,
        block: r
      })) : d.createElement(c, {
        block: r,
        children: N,
        contentState: f,
        customStyleFn: m,
        customStyleMap: g,
        decorator: p,
        direction: E,
        forceSelection: y,
        hasSelection: O(b, R),
        selection: b,
        tree: C
      });
    if (r.getParentKey()) return x;
    var L = I(r, a).Element,
      j = T(r, _, w, l, P, this.wrapperRef);
    return d.createElement(L, j, x)
  }, t
}(Chunk64700.Component)