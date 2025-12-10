/** Chunk was on web.js **/
/** chunk id: 848643, original params: e,t,n (module,exports,re quire) **/
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
var Chunk175469 = require("./175469.js"),
  Chunk964930 = require("./964930.js"),
  Chunk473749 = require("./473749.js"),
  Chunk1231 = require("./1231.js"),
  Chunk292489 = require("./292489.js"),
  Chunk746117 = require("./746117.js"),
  Chunk856084 = require("./856084.js"),
  Chunk606166 = require("./606166.js"),
  Chunk675411 = require("./675411.js"),
  Chunk685536 = require("./685536.js"),
  Chunk126502 = require("./126502.js"),
  Chunk581079 = require("./581079.js"),
  Chunk207303 = require("./207303.js"),
  Chunk467159 = require("./467159.js"),
  v = 10,
  S = function(e, t) {
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
    return this.props.block !== e.block || this.props.tree !== e.tree || this.props.direction !== e.direction || S(e.selection, e.block.getKey()) && e.forceSelection
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
            var o = h(r);
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
      o = S(this.props.selection, n);
    return this.props.tree.map(function(s, d) {
      var f = s.get("leaves");
      if (0 === f.size) return null;
      var m = f.size - 1,
        h = f.map(function(i, s) {
          var f = c.encode(n, d, s),
            p = i.get("start"),
            _ = i.get("end");
          return u.createElement(l, {
            key: f,
            offsetKey: f,
            block: t,
            start: p,
            selection: o ? e.props.selection : null,
            forceSelection: e.props.forceSelection,
            text: r.slice(p, _),
            styleSet: t.getInlineStyleAt(p),
            customStyleMap: e.props.customStyleMap,
            customStyleFn: e.props.customStyleFn,
            isLast: d === a && s === m
          })
        }).toArray(),
        g = s.get("decoratorKey");
      if (null == g || !e.props.decorator) return h;
      var E = O(e.props.decorator),
        b = E.getComponentForKey(g);
      if (!b) return h;
      var y = E.getPropsForKey(g),
        v = c.encode(n, d, 0),
        S = f.first().get("start"),
        I = f.last().get("end"),
        T = r.slice(S, I),
        C = t.getEntityAt(s.get("start")),
        A = _.getHTMLDirIfDifferent(p.getDirection(T), e.props.direction),
        N = {
          contentState: e.props.contentState,
          decoratedText: T,
          dir: A,
          start: S,
          end: I,
          blockKey: n,
          entityKey: C,
          offsetKey: v
        };
      return u.createElement(b, i({}, y, N, {
        key: v
      }), h)
    }).toArray()
  }, n.render = function() {
    var e = this,
      t = this.props,
      n = t.direction,
      r = t.offsetKey,
      i = m({
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
}(Chunk473749.Component)