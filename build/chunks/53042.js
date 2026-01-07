/** Chunk was on web.js **/
/** chunk id: 53042, original params: e,t,n (module,exports,re quire) **/
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

function a(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
}
var Chunk964930 = require("./964930.js"),
  Chunk473749 = require("./473749.js"),
  Chunk746117 = require("./746117.js"),
  Chunk856084 = require("./856084.js");
module.exports = function(e) {
  function t() {
    return e.apply(this, arguments) || this
  }
  return a(t, e), t.prototype.render = function() {
    var e = this.props,
      t = e.block,
      n = e.children,
      r = e.contentState,
      a = e.decorator,
      u = e.decoratorKey,
      d = e.direction,
      f = e.leafSet,
      p = e.text,
      _ = t.getKey(),
      m = f.get("leaves"),
      h = a.getComponentForKey(u),
      g = a.getPropsForKey(u),
      E = o.encode(_, parseInt(u, 10), 0),
      b = p.slice(m.first().get("start"), m.last().get("end")),
      y = c.getHTMLDirIfDifferent(l.getDirection(b), d);
    return s.createElement(h, i({}, g, {
      contentState: r,
      decoratedText: b,
      dir: y,
      key: E,
      entityKey: t.getEntityAt(f.get("start")),
      offsetKey: E
    }), n)
  }, t
}(Chunk473749.Component)