/** Chunk was on web.js **/
/** chunk id: 127854, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk381538 = require("./381538.js");

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

function o(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
}

function s(e) {
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
var Chunk312432 = require("./312432.js"),
  Chunk964930 = require("./964930.js"),
  Chunk473749 = require("./473749.js"),
  Chunk1231 = require("./1231.js"),
  Chunk292489 = require("./292489.js"),
  Chunk675411 = require("./675411.js"),
  Chunk685536 = require("./685536.js"),
  Chunk126502 = require("./126502.js"),
  Chunk65183 = require("./65183.js"),
  Chunk581079 = require("./581079.js"),
  Chunk207303 = require("./207303.js"),
  y = 10;
Chunk65183.List;
var O = function(e, t) {
    return e.getAnchorKey() === t || e.getFocusKey() === t
  },
  v = function(e, t) {
    var n = e.getNextSiblingKey();
    return !!n && t.getBlockForKey(n).getType() === e.getType()
  },
  S = function(e, t, n) {
    var r = [],
      i = true,
      a = false,
      o = true;
    try {
      for (var s, l = n.reverse()[Symbol.iterator](); !(i = (s = l.next()).done); i = true) {
        var c = s.value;
        if (c.type !== t) break;
        r.push(c)
      }
    } catch (e) {
      a = true, o = e
    } finally {
      try {
        i || null == l.return || l.return()
      } finally {
        if (a) throw o
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
  T = function(e, t) {
    var n = t(e);
    return n ? {
      CustomComponent: n.component,
      customProps: n.props,
      customEditable: n.editable
    } : {}
  },
  C = function(e, t, n, r, i, a) {
    var o = {
        "data-block": true,
        "data-editor": t,
        "data-offset-key": n,
        key: e.getKey(),
        ref: a
      },
      l = r(e);
    return l && (o.className = l), true !== i.customEditable && (o = s({}, o, {
      contentEditable: i.customEditable,
      suppressContentEditableWarning: true
    })), o
  };
module.exports = function(e) {
  function t() {
    for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
    return l(a(t = e.call.apply(e, [this].concat(r)) || this), "wrapperRef", d.createRef()), t
  }
  o(t, e);
  var n = t.prototype;
  return n.shouldComponentUpdate = function(e) {
    var t = this.props,
      n = t.block,
      r = t.direction,
      i = t.tree,
      a = !n.getChildKeys().isEmpty(),
      o = n !== e.block || i !== e.tree || r !== e.direction || O(e.selection, e.block.getKey()) && e.forceSelection;
    return a || o
  }, n.componentDidMount = function() {
    var e, t = this.props.selection,
      n = t.getEndKey();
    if (t.getHasFocus() && n === this.props.block.getKey()) {
      var r = this.wrapperRef.current;
      if (r) {
        var i = p.getScrollParent(r),
          a = h(i);
        if (i === window) {
          var o = _(r);
          (e = o.y + o.height - m().height) > 0 && window.scrollTo(a.x, a.y + e + y)
        } else {
          b(r) || E(false);
          var s = r;
          (e = s.offsetHeight + s.offsetTop - (i.offsetHeight + a.y)) > 0 && f.setTop(i, f.getTop(i) + e + y)
        }
      }
    }
  }, n.render = function() {
    var e = this,
      n = this.props,
      r = n.block,
      a = n.blockRenderMap,
      o = n.blockRendererFn,
      l = n.blockStyleFn,
      f = n.contentState,
      p = n.decorator,
      _ = n.editorKey,
      h = n.editorState,
      m = n.customStyleFn,
      g = n.customStyleMap,
      E = n.direction,
      b = n.forceSelection,
      y = n.selection,
      A = n.tree,
      N = null;
    r.children.size && (N = r.children.reduce(function(n, r) {
      var i = u.encode(r, 0, 0),
        c = f.getBlockForKey(r),
        p = T(c, o),
        m = p.CustomComponent || t,
        g = I(c, a),
        E = g.Element,
        b = g.wrapperTemplate,
        y = C(c, _, i, l, p, null),
        O = s({}, e.props, {
          tree: h.getBlockTree(r),
          blockProps: p.customProps,
          offsetKey: i,
          block: c
        });
      return n.push(d.createElement(E, y, d.createElement(m, O))), !b || v(c, f) || S(b, E, n), n
    }, []));
    var P = r.getKey(),
      w = u.encode(P, 0, 0),
      R = T(r, o),
      D = R.CustomComponent,
      x = null != D ? d.createElement(D, i({}, this.props, {
        tree: h.getBlockTree(P),
        blockProps: R.customProps,
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
        forceSelection: b,
        hasSelection: O(y, P),
        selection: y,
        tree: A
      });
    if (r.getParentKey()) return x;
    var L = I(r, a).Element,
      j = C(r, _, w, l, R, this.wrapperRef);
    return d.createElement(L, j, x)
  }, t
}(Chunk473749.Component)