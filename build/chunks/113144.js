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
    var o = Object.getOwnPropertyNames(i);
    r && (o = o.concat(Object.getOwnPropertySymbols(i)));
    for (var s = 0; s < o.length; ++s)
      if (!t[o[s]] && !n[o[s]] && (!a || !a[o[s]])) try {
        e[o[s]] = i[o[s]]
      } catch (e) {}
  }
  return e
}