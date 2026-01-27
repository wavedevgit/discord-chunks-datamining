/** Chunk was on 38939 **/
/** chunk id: 797686, original params: t (module,exports,require) **/
"use strict";
var e = function(t) {
  if (true === t) throw Error("invariant(...): Second argument must be a string.")
};
module.exports = function(t, r) {
  for (var n, i = arguments.length, o = Array(i > 2 ? i - 2 : 0), a = 2; a < i; a++) o[a - 2] = arguments[a];
  if (e(r), !t) {
    if (true === r) n = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var s = 0;
      (n = Error(r.replace(/%s/g, function() {
        return String(o[s++])
      }))).name = "Invariant Violation"
    }
    throw n.framesToPop = 1, n
  }
}