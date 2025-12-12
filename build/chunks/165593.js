/** Chunk was on web.js **/
/** chunk id: 165593, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk488437 = require("./488437.js"),
  Chunk429675 = require("./429675.js"),
  a = "object" == typeof StopIteration ? StopIteration : null;
module.exports = function(e) {
  if (!a) throw new i("this environment lacks StopIteration");
  r.set(e, "[[Done]]", false);
  var t = {
    next: function() {
      var e = r.get(this, "[[Iterator]]"),
        t = !!r.get(e, "[[Done]]");
      try {
        return {
          done: t,
          value: t ? true : e.next()
        }
      } catch (t) {
        if (r.set(e, "[[Done]]", true), t !== a) throw t;
        return {
          done: true,
          value: true
        }
      }
    }
  };
  return r.set(t, "[[Iterator]]", e), t
}