/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
var r = n(977791),
  i = SyntaxError,
  o = "object" == typeof StopIteration ? StopIteration : null;
e.exports = function(e) {
  if (!o) throw new i("this environment lacks StopIteration");
  r.set(e, "[[Done]]", !1);
  var t = {
    next: function() {
      var e = r.get(this, "[[Iterator]]"),
        t = r.get(e, "[[Done]]");
      try {
        return {
          done: t,
          value: t ? void 0 : e.next()
        }
      } catch (t) {
        if (r.set(e, "[[Done]]", !0), t !== o) throw t;
        return {
          done: !0,
          value: void 0
        }
      }
    }
  };
  return r.set(t, "[[Iterator]]", e), t
}