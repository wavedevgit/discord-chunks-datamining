/** Chunk was on 38939 **/
/** chunk id: 220115, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk724039 = require("./724039.js");

function i() {
  return (i = n || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
    }
    return t
  }).apply(this, arguments)
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
  _ = function(t, e) {
    return t.getAnchorKey() === e || t.getFocusKey() === e
  };
module.exports = function(t) {
  function e() {
    for (var e, r, n, i, o = arguments.length, a = Array(o), s = 0; s < o; s++) a[s] = arguments[s];
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
          } else v(n) || y(false), (t = n.offsetHeight + n.offsetTop - (i.offsetTop + i.offsetHeight + o.y)) > 0 && u.setTop(i, u.getTop(i) + t + 10)
        }
      }
    }
  }, r._renderChildren = function() {
    var t = this,
      e = this.props.block,
      r = e.getKey(),
      n = e.getText(),
      u = this.props.tree.size - 1,
      c = _(this.props.selection, r);
    return this.props.tree.map(function(p, h) {
      var d = p.get("leaves");
      if (0 === d.size) return null;
      var g = d.size - 1,
        y = d.map(function(i, l) {
          var f = a.encode(r, h, l),
            p = i.get("start"),
            d = i.get("end");
          return s.createElement(o, {
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
            isLast: h === u && l === g
          })
        }).toArray(),
        v = p.get("decoratorKey");
      if (null == v || !t.props.decorator) return y;
      var _ = m(t.props.decorator),
        b = _.getComponentForKey(v);
      if (!b) return y;
      var S = _.getPropsForKey(v),
        w = a.encode(r, h, 0),
        k = d.first().get("start"),
        x = d.last().get("end"),
        C = n.slice(k, x),
        E = e.getEntityAt(p.get("start")),
        O = f.getHTMLDirIfDifferent(l.getDirection(C), t.props.direction),
        D = {
          contentState: t.props.contentState,
          decoratedText: C,
          dir: O,
          start: k,
          end: x,
          blockKey: r,
          entityKey: E,
          offsetKey: w
        };
      return s.createElement(b, i({}, S, D, {
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
    return s.createElement("div", {
      "data-offset-key": n,
      className: i,
      ref: function(e) {
        return t._node = e
      }
    }, this._renderChildren())
  }, e
}(Chunk64700.Component)