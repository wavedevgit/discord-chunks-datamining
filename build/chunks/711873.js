/** Chunk was on web.js **/
/** chunk id: 711873, original params: e (module,exports,re quire) **/
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
module.exports = function(e, i, o) {
  if ("string" != typeof i) {
    var a = Object.getOwnPropertyNames(i);
    r && (a = a.concat(Object.getOwnPropertySymbols(i)));
    for (var s = 0; s < a.length; ++s)
      if (!t[a[s]] && !n[a[s]] && (!o || !o[a[s]])) try {
        e[a[s]] = i[a[s]]
      } catch (e) {}
  }
  return e
}