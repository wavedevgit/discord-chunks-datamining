/** Chunk was on web.js **/
/** chunk id: 913306, original params: e (module,exports,re quire) **/
"use strict";
var t, n = "function" == typeof Map && Map.prototype ? Map : null,
  r = "function" == typeof Set && Set.prototype ? Set : null;
n || (t = function(e) {
  returnfalse
});
var i = n ? Map.prototype.has : null,
  o = r ? Set.prototype.has : null;
t || i || (t = function(e) {
  returnfalse
}), module.exports = t || function(e) {
  if (!e || "object" != typeof e) returnfalse;
  try {
    if (i.call(e), o) try {
      o.call(e)
    } catch (e) {
      returntrue
    }
    return e instanceof n
  } catch (e) {}
  returnfalse
}