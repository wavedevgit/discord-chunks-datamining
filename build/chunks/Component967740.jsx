/** Chunk was on 92837 **/
/** chunk id: 967740, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => a
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk201275 = require("./201275.js"),
  Chunk657048 = require("./657048.jsx"),
  Chunk63104 = require("./63104.jsx");

function a(e) {
  let {
    guildId: t,
    role: r,
    size: a,
    className: c
  } = e, s = (0, l.$7)({
    guildId: t,
    roleId: r.id,
    size: a
  });
  return null != s ? (0, n.jsx)(i.A, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
        n = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable
      }))), n.forEach(function(t) {
        var n;
        n = r[t], t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = n
      })
    }
    return e
  }({
    className: c
  }, s)) : (0, n.jsx)(o.A, {
    color: r.colorString,
    className: c,
    size: a
  })
}