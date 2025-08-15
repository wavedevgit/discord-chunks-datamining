/** Chunk was on 91584 **/
/** chunk id: 732351, original params: t,e,r (module,exports,require) **/
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
var Chunk654530 = require("./654530.js"),
  Chunk647438 = require("./647438.js"),
  Chunk746117 = require("./746117.js"),
  Chunk856084 = require("./856084.js");
module.exports = function(t) {
  function e() {
    return t.apply(this, arguments) || this
  }
  return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t, e.prototype.render = function() {
    var t = this.props,
      e = t.block,
      r = t.children,
      n = t.contentState,
      c = t.decorator,
      l = t.decoratorKey,
      f = t.direction,
      p = t.leafSet,
      h = t.text,
      d = e.getKey(),
      g = p.get("leaves"),
      y = c.getComponentForKey(l),
      v = c.getPropsForKey(l),
      m = o.encode(d, parseInt(l, 10), 0),
      _ = h.slice(g.first().get("start"), g.last().get("end")),
      b = s.getHTMLDirIfDifferent(u.getDirection(_), f);
    return a.createElement(y, i({}, v, {
      contentState: n,
      decoratedText: _,
      dir: b,
      key: m,
      entityKey: e.getEntityAt(p.get("start")),
      offsetKey: m
    }), r)
  }, e
}(Chunk647438.Component)