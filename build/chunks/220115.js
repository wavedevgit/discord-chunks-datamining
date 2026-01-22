/** Chunk was on web.js **/
/** chunk id: 220115, original params: e,t,n (module,exports,re quire) **/
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

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var Chunk423758 = require("./423758.js"),
  Chunk595042 = require("./595042.js"),
  Chunk64700 = require("./64700.js"),
  Chunk251577 = require("./251577.js"),
  Chunk448567 = require("./448567.js"),
  Chunk679443 = require("./679443.js"),
  Chunk181038 = require("./181038.js"),
  Chunk550835 = require("./550835.js"),
  Chunk919743 = require("./919743.js"),
  Chunk423856 = require("./423856.js"),
  Chunk460249 = require("./460249.js"),
  Chunk797686 = require("./797686.js"),
  Chunk537578 = require("./537578.js"),
  Chunk670200 = require("./670200.js"),
  A = 10,
  v = function(e, t) {
    return e.getAnchorKey() === t || e.getFocusKey() === t
  };
module.exports = function(e) {
  function t() {
    for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
    return o(a(t = e.call.apply(e, [this].concat(r)) || this), "_node", true), t
  }
  s(t, e);
  var n = t.prototype;
  return n.shouldComponentUpdate = function(e) {
    return this.props.block !== e.block || this.props.tree !== e.tree || this.props.direction !== e.direction || v(e.selection, e.block.getKey()) && e.forceSelection
  }, n.componentDidMount = function() {
    if (!this.props.preventScroll) {
      var e, t = this.props.selection,
        n = t.getEndKey();
      if (t.getHasFocus() && n === this.props.block.getKey()) {
        var r = this._node;
        if (null != r) {
          var i = f.getScrollParent(r),
            a = g(i);
          if (i === window) {
            var s = m(r);
            (e = s.y + s.height - E().height) > 0 && window.scrollTo(a.x, a.y + e + A)
          } else y(r) || b(false), (e = r.offsetHeight + r.offsetTop - (i.offsetTop + i.offsetHeight + a.y)) > 0 && d.setTop(i, d.getTop(i) + e + A)
        }
      }
    }
  }, n._renderChildren = function() {
    var e = this,
      t = this.props.block,
      n = t.getKey(),
      r = t.getText(),
      a = this.props.tree.size - 1,
      s = v(this.props.selection, n);
    return this.props.tree.map(function(o, d) {
      var f = o.get("leaves");
      if (0 === f.size) return null;
      var h = f.size - 1,
        m = f.map(function(i, o) {
          var f = c.encode(n, d, o),
            p = i.get("start"),
            _ = i.get("end");
          return u.createElement(l, {
            key: f,
            offsetKey: f,
            block: t,
            start: p,
            selection: s ? e.props.selection : null,
            forceSelection: e.props.forceSelection,
            text: r.slice(p, _),
            styleSet: t.getInlineStyleAt(p),
            customStyleMap: e.props.customStyleMap,
            customStyleFn: e.props.customStyleFn,
            isLast: d === a && o === h
          })
        }).toArray(),
        g = o.get("decoratorKey");
      if (null == g || !e.props.decorator) return m;
      var E = O(e.props.decorator),
        b = E.getComponentForKey(g);
      if (!b) return m;
      var y = E.getPropsForKey(g),
        A = c.encode(n, d, 0),
        v = f.first().get("start"),
        S = f.last().get("end"),
        I = r.slice(v, S),
        T = t.getEntityAt(o.get("start")),
        C = _.getHTMLDirIfDifferent(p.getDirection(I), e.props.direction),
        N = {
          contentState: e.props.contentState,
          decoratedText: I,
          dir: C,
          start: v,
          end: S,
          blockKey: n,
          entityKey: T,
          offsetKey: A
        };
      return u.createElement(b, i({}, y, N, {
        key: A
      }), m)
    }).toArray()
  }, n.render = function() {
    var e = this,
      t = this.props,
      n = t.direction,
      r = t.offsetKey,
      i = h({
        "public/DraftStyleDefault/block": true,
        "public/DraftStyleDefault/ltr": "LTR" === n,
        "public/DraftStyleDefault/rtl": "RTL" === n
      });
    return u.createElement("div", {
      "data-offset-key": r,
      className: i,
      ref: function(t) {
        return e._node = t
      }
    }, this._renderChildren())
  }, t
}(Chunk64700.Component)