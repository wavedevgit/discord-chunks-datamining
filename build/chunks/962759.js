/** Chunk was on 8381 **/
/** chunk id: 962759, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk381538 = require("./381538.js");

function i() {
  return (i = Chunk381538 || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
    }
    return t
  }).apply(this, arguments)
}
var Chunk963956 = require("./963956.js"),
  Chunk152477 = require("./152477.js"),
  Chunk73800 = require("./73800.js"),
  Chunk1231 = require("./1231.js"),
  Chunk292489 = require("./292489.js"),
  Chunk746117 = require("./746117.js"),
  Chunk856084 = require("./856084.js"),
  Chunk606166 = require("./606166.js"),
  Chunk675411 = require("./675411.js"),
  Chunk685536 = require("./685536.js"),
  Chunk126502 = require("./126502.js"),
  Chunk581079 = require("./581079.js"),
  Chunk217492 = require("./217492.js"),
  Chunk467159 = require("./467159.js"),
  _ = function(t, e) {
    return t.getAnchorKey() === e || t.getFocusKey() === e
  };
module.exports = function(t) {
  function e() {
    for (var e, r, n, i, o = arguments.length, a = Array(o), u = 0; u < o; u++) a[u] = arguments[u];
    return r = function(t) {
      if (true === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t
    }(e = t.call.apply(t, [this].concat(a)) || this), i = true, (n = "_node") in r ? Object.defineProperty(r, n, {
      value: i,
      enumerable: true,
      configurable: true,
      writable: true
    }) : r[n] = i, e
  }
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
  var r = e.prototype;
  return r.shouldComponentUpdate = function(t) {
    return this.props.block !== t.block || this.props.tree !== t.tree || this.props.direction !== t.direction || _(t.selection, t.block.getKey()) && t.forceSelection
  }, r.componentDidMount = function() {
    if (!this.props.preventScroll) {
      var t, e = this.props.selection,
        r = e.getEndKey();
      if (e.getHasFocus() && r === this.props.block.getKey()) {
        var n = this._node;
        if (null != n) {
          var i = c.getScrollParent(n),
            o = d(i);
          if (i === window) {
            var a = h(n);
            (t = a.y + a.height - g().height) > 0 && window.scrollTo(o.x, o.y + t + 10)
          } else v(n) || y(false), (t = n.offsetHeight + n.offsetTop - (i.offsetTop + i.offsetHeight + o.y)) > 0 && s.setTop(i, s.getTop(i) + t + 10)
        }
      }
    }
  }, r._renderChildren = function() {
    var t = this,
      e = this.props.block,
      r = e.getKey(),
      n = e.getText(),
      s = this.props.tree.size - 1,
      c = _(this.props.selection, r);
    return this.props.tree.map(function(p, h) {
      var d = p.get("leaves");
      if (0 === d.size) return null;
      var g = d.size - 1,
        y = d.map(function(i, l) {
          var f = a.encode(r, h, l),
            p = i.get("start"),
            d = i.get("end");
          return u.createElement(o, {
            key: f,
            offsetKey: f,
            block: e,
            start: p,
            selection: c ? t.props.selection : null,
            forceSelection: t.props.forceSelection,
            text: n.slice(p, d),
            styleSet: e.getInlineStyleAt(p),
            customStyleMap: t.props.customStyleMap,
            customStyleFn: t.props.customStyleFn,
            isLast: h === s && l === g
          })
        }).toArray(),
        v = p.get("decoratorKey");
      if (null == v || !t.props.decorator) return y;
      var _ = m(t.props.decorator),
        b = _.getComponentForKey(v);
      if (!b) return y;
      var S = _.getPropsForKey(v),
        w = a.encode(r, h, 0),
        x = d.first().get("start"),
        k = d.last().get("end"),
        C = n.slice(x, k),
        E = e.getEntityAt(p.get("start")),
        D = f.getHTMLDirIfDifferent(l.getDirection(C), t.props.direction),
        O = {
          contentState: t.props.contentState,
          decoratedText: C,
          dir: D,
          start: x,
          end: k,
          blockKey: r,
          entityKey: E,
          offsetKey: w
        };
      return u.createElement(b, i({}, S, O, {
        key: w
      }), y)
    }).toArray()
  }, r.render = function() {
    var t = this,
      e = this.props,
      r = e.direction,
      n = e.offsetKey,
      i = p({
        "public/DraftStyleDefault/block": true,
        "public/DraftStyleDefault/ltr": "LTR" === r,
        "public/DraftStyleDefault/rtl": "RTL" === r
      });
    return u.createElement("div", {
      "data-offset-key": n,
      className: i,
      ref: function(e) {
        return t._node = e
      }
    }, this._renderChildren())
  }, e
}(Chunk73800.Component)