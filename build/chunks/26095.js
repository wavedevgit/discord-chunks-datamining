/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
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
    for (var a = c(e), s = c(t), l = 0; l < i.length; ++l) {
      var g = i[l];
      if (!o[g] && !(n && n[g]) && !(s && s[g]) && !(a && a[g])) {
        var E = p(t, g);
        try {
          u(e, g, E)
        } catch (e) {}
      }
    }
  }
  return e
}
e.exports = m