/** Chunk was on web.js **/
/** chunk id: 387739, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
}
var Chunk116740 = require("./116740.js"),
  a = Chunk116740.Map,
  s = Chunk116740.OrderedSet,
  o = Chunk116740.Record,
  l = s(),
  c = {
    style: l,
    entity: null
  },
  u = function(e) {
    function t() {
      return e.apply(this, arguments) || this
    }
    r(t, e);
    var n = t.prototype;
    return n.getStyle = function() {
      return this.get("style")
    }, n.getEntity = function() {
      return this.get("entity")
    }, n.hasStyle = function(e) {
      return this.getStyle().includes(e)
    }, t.applyStyle = function(e, n) {
      var r = e.set("style", e.getStyle().add(n));
      return t.create(r)
    }, t.removeStyle = function(e, n) {
      var r = e.set("style", e.getStyle().remove(n));
      return t.create(r)
    }, t.applyEntity = function(e, n) {
      var r = e.getEntity() === n ? e : e.set("entity", n);
      return t.create(r)
    }, t.create = function(e) {
      if (!e) return d;
      var n = a({
          style: l,
          entity: null
        }).merge(e),
        r = f.get(n);
      if (r) return r;
      var i = new t(n);
      return f = f.set(n, i), i
    }, t
  }(o(c)),
  d = new u,
  f = a([
    [a(c), d]
  ]);
u.EMPTY = d, module.exports = u