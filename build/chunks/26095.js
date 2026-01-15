/** Chunk was on web.js **/
/** chunk id: 26095, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk165566 = require("./165566.js"),
  i = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
  },
  a = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
  },
  o = {
    $$typeof: true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
  },
  s = {
    $$typeof: true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
  },
  l = {};

function c(e) {
  return r.isMemo(e) ? s : l[e.$$typeof] || i
}
l[Chunk165566.ForwardRef] = o, l[Chunk165566.Memo] = s;
var u = Object.defineProperty,
  d = Object.getOwnPropertyNames,
  f = Object.getOwnPropertySymbols,
  p = Object.getOwnPropertyDescriptor,
  _ = Object.getPrototypeOf,
  h = Object.prototype;

function m(e, t, n) {
  if ("string" != typeof t) {
    if (h) {
      var r = _(t);
      r && r !== h && m(e, r, n)
    }
    var i = d(t);
    f && (i = i.concat(f(t)));
    for (var o = c(e), s = c(t), l = 0; l < i.length; ++l) {
      var g = i[l];
      if (!a[g] && !(n && n[g]) && !(s && s[g]) && !(o && o[g])) {
        var E = p(t, g);
        try {
          u(e, g, E)
        } catch (e) {}
      }
    }
  }
  return e
}
module.exports = m