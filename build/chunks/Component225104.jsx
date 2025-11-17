/** Chunk was on 40897 **/
/** chunk id: 225104, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk518738 = require("./518738.js"),
  Chunk48950 = require("./48950.jsx"),
  Chunk134433 = require("./134433.jsx");

function a(e) {
  let {
    guildId: t,
    role: r,
    size: a,
    className: c
  } = e, s = (0, i.p9)({
    guildId: t,
    roleId: r.id,
    size: a
  });
  return null != s ? (0, n.jsx)(l.Z, function(e) {
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
  }, s)) : (0, n.jsx)(o.Z, {
    color: r.colorString,
    className: c,
    size: a
  })
}