/** Chunk was on web.js **/
/** chunk id: 492834, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk557939 = require("./557939.js"),
  Chunk105712 = require("./105712.js"),
  Chunk36935 = require("./36935.js"),
  Chunk503628 = require("./503628.js"),
  Chunk230606 = require("./230606.js"),
  Chunk339626 = require("./339626.js"),
  Chunk322402 = require("./322402.js"),
  Chunk477585 = require("./477585.js"),
  Chunk693655 = require("./693655.js"),
  f = Chunk36935 && Chunk36935.prototype;
if (Chunk557939({
    target: "Promise",
    proto: true,
    real: true,
    forced: !!Chunk36935 && Chunk503628(function() {
      f.finally.call({
        then: function() {}
      }, function() {})
    })
  }, {
    finally: function(e) {
      var t = c(this, o("Promise")),
        n = l(e);
      return this.then(n ? function(n) {
        return u(t, e()).then(function() {
          return n
        })
      } : e, n ? function(n) {
        return u(t, e()).then(function() {
          throw n
        })
      } : e)
    }
  }), !Chunk105712 && Chunk339626(Chunk36935)) {
  var p = Chunk230606("Promise").prototype.finally;
  f.finally !== p && Chunk693655(f, "finally", p, {
    unsafe: true
  })
}