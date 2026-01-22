/** Chunk was on 92837 **/
/** chunk id: 967740, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk201275 = require("./201275.js"),
  Chunk657048 = require("./657048.jsx"),
  Chunk63104 = require("./63104.jsx");

function c(e) {
  let {
    guildId: t,
    role: n,
    size: c,
    className: a
  } = e, s = (0, l.$7)({
    guildId: t,
    roleId: n.id,
    size: c
  });
  return null != s ? (0, r.jsx)(o.A, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        var r;
        r = n[t], t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = r
      })
    }
    return e
  }({
    className: a
  }, s)) : (0, r.jsx)(i.A, {
    color: n.colorString,
    className: a,
    size: c
  })
}