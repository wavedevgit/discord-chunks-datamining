/** Chunk was on web.js **/
"use strict";
var r = n(165566),
  i = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
  },
  o = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  },
  a = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  },
  s = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  },
  l = {};

function c(e) {
  return r.isMemo(e) ? s : l[e.$$typeof] || i
}
l[r.ForwardRef] = a, l[r.Memo] = s;
var u = Object.defineProperty,
  d = Object.getOwnPropertyNames,
  f = Object.getOwnPropertySymbols,
  _ = Object.getOwnPropertyDescriptor,
  p = Object.getPrototypeOf,
  h = Object.prototype;

function g(e, t, n) {
  if ("string" != typeof t) {
    if (h) {
      var r = p(t);
      r && r !== h && g(e, r, n)
    }
    var i = d(t);
    f && (i = i.concat(f(t)));
    for (var a = c(e), s = c(t), l = 0; l < i.length; ++l) {
      var m = i[l];
      if (!o[m] && !(n && n[m]) && !(s && s[m]) && !(a && a[m])) {
        var E = _(t, m);
        try {
          u(e, m, E)
        } catch (e) {}
      }
    }
  }
  return e
}
e.exports = g