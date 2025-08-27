/** Chunk was on web.js **/
/** chunk id: 864205, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk381538 = require("./381538.js");

function i() {
  return (i = Chunk381538 || function(e) {
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

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var Chunk67793 = require("./67793.js"),
  Chunk654530 = require("./654530.js"),
  Chunk647438 = require("./647438.js"),
  Chunk1231 = require("./1231.js"),
  Chunk292489 = require("./292489.js"),
  Chunk746117 = require("./746117.js"),
  Chunk856084 = require("./856084.js"),
  Chunk606166 = require("./606166.js"),
  Chunk675411 = require("./675411.js"),
  Chunk685536 = require("./685536.js"),
  Chunk126502 = require("./126502.js"),
  Chunk581079 = require("./581079.js"),
  Chunk246974 = require("./246974.js"),
  Chunk467159 = require("./467159.js"),
  v = 10,
  I = function(e, t) {
    return e.getAnchorKey() === t || e.getFocusKey() === t
  };
module.exports = function(e) {
  function t() {
    for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
    return s(a(t = e.call.apply(e, [this].concat(r)) || this), "_node", true), t
  }
  o(t, e);
  var n = t.prototype;
  return n.shouldComponentUpdate = function(e) {
    return this.props.block !== e.block || this.props.tree !== e.tree || this.props.direction !== e.direction || I(e.selection, e.block.getKey()) && e.forceSelection
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
            var o = m(r);
            (e = o.y + o.height - E().height) > 0 && window.scrollTo(a.x, a.y + e + v)
          } else y(r) || b(false), (e = r.offsetHeight + r.offsetTop - (i.offsetTop + i.offsetHeight + a.y)) > 0 && d.setTop(i, d.getTop(i) + e + v)
        }
      }
    }
  }, n._renderChildren = function() {
    var e = this,
      t = this.props.block,
      n = t.getKey(),
      r = t.getText(),
      a = this.props.tree.size - 1,
      o = I(this.props.selection, n);
    return this.props.tree.map(function(s, d) {
      var f = s.get("leaves");
      if (0 === f.size) return null;
      var h = f.size - 1,
        m = f.map(function(i, s) {
          var f = c.encode(n, d, s),
            _ = i.get("start"),
            p = i.get("end");
          return u.createElement(l, {
            key: f,
            offsetKey: f,
            block: t,
            start: _,
            selection: o ? e.props.selection : null,
            forceSelection: e.props.forceSelection,
            text: r.slice(_, p),
            styleSet: t.getInlineStyleAt(_),
            customStyleMap: e.props.customStyleMap,
            customStyleFn: e.props.customStyleFn,
            isLast: d === a && s === h
          })
        }).toArray(),
        g = s.get("decoratorKey");
      if (null == g || !e.props.decorator) return m;
      var E = O(e.props.decorator),
        b = E.getComponentForKey(g);
      if (!b) return m;
      var y = E.getPropsForKey(g),
        v = c.encode(n, d, 0),
        I = f.first().get("start"),
        T = f.last().get("end"),
        S = r.slice(I, T),
        A = t.getEntityAt(s.get("start")),
        C = p.getHTMLDirIfDifferent(_.getDirection(S), e.props.direction),
        N = {
          contentState: e.props.contentState,
          decoratedText: S,
          dir: C,
          start: I,
          end: T,
          blockKey: n,
          entityKey: A,
          offsetKey: v
        };
      return u.createElement(b, i({}, y, N, {
        key: v
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
}(Chunk647438.Component)