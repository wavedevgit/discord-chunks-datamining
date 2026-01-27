/** Chunk was on 38939 **/
/** chunk id: 387739, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk116740 = require("./116740.js"),
  i = Chunk116740.Map,
  o = Chunk116740.OrderedSet,
  a = Chunk116740.Record,
  s = o(),
  u = {
    style: s,
    entity: null
  },
  c = function(t) {
    function e() {
      return t.apply(this, arguments) || this
    }
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
    var r = e.prototype;
    return r.getStyle = function() {
      return this.get("style")
    }, r.getEntity = function() {
      return this.get("entity")
    }, r.hasStyle = function(t) {
      return this.getStyle().includes(t)
    }, e.applyStyle = function(t, r) {
      var n = t.set("style", t.getStyle().add(r));
      return e.create(n)
    }, e.removeStyle = function(t, r) {
      var n = t.set("style", t.getStyle().remove(r));
      return e.create(n)
    }, e.applyEntity = function(t, r) {
      var n = t.getEntity() === r ? t : t.set("entity", r);
      return e.create(n)
    }, e.create = function(t) {
      if (!t) return l;
      var r = i({
          style: s,
          entity: null
        }).merge(t),
        n = f.get(r);
      if (n) return n;
      var o = new e(r);
      return f = f.set(r, o), o
    }, e
  }(a(u)),
  l = new c,
  f = i([
    [i(u), l]
  ]);
c.EMPTY = l, module.exports = c