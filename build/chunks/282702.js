/** Chunk was on web.js **/
/** chunk id: 282702, original params: e (module,exports,re quire) **/
"use strict";
var t, n = "function" == typeof Map && Map.prototype ? Map : null,
  r = "function" == typeof Set && Set.prototype ? Set : null;
r || (t = function(e) {
  returnfalse
});
var i = n ? Map.prototype.has : null,
  a = r ? Set.prototype.has : null;
t || a || (t = function(e) {
  returnfalse
}), module.exports = t || function(e) {
  if (!e || "object" != typeof e) returnfalse;
  try {
    if (a.call(e), i) try {
      i.call(e)
    } catch (e) {
      returntrue
    }
    return e instanceof r
  } catch (e) {}
  returnfalse
}