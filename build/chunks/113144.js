/** Chunk was on web.js **/
/** chunk id: 113144, original params: e (module,exports,re quire) **/
"use strict";
var t = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    mixins: true,
    propTypes: true,
    type: true
  },
  n = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    arguments: true,
    arity: true
  },
  r = "function" == typeof Object.getOwnPropertySymbols;
module.exports = function(e, i, a) {
  if ("string" != typeof i) {
    var s = Object.getOwnPropertyNames(i);
    r && (s = s.concat(Object.getOwnPropertySymbols(i)));
    for (var o = 0; o < s.length; ++o)
      if (!t[s[o]] && !n[s[o]] && (!a || !a[s[o]])) try {
        e[s[o]] = i[s[o]]
      } catch (e) {}
  }
  return e
}