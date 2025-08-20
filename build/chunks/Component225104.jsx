/** Chunk was on 40897 **/
/** chunk id: 225104, original params: e,r,t (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk91218 = require("./91218.jsx"),
  Chunk518738 = require("./518738.js"),
  Chunk134433 = require("./134433.jsx");

function a(e) {
  let {
    guildId: r,
    role: t,
    size: a,
    className: s
  } = e, c = (0, l.p9)({
    guildId: r,
    roleId: t.id,
    size: a
  });
  return null != c ? (0, n.jsx)(i.Z, function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {},
        n = Object.keys(t);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), n.forEach(function(r) {
        var n;
        n = t[r], r in e ? Object.defineProperty(e, r, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[r] = n
      })
    }
    return e
  }({
    className: s
  }, c)) : (0, n.jsx)(o.Z, {
    color: t.colorString,
    className: s,
    size: a
  })
}