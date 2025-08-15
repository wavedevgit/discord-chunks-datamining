/** Chunk was on 40897 **/
/** chunk id: 225104, original params: e,t,r (module,exports,require) **/
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
    guildId: t,
    role: r,
    size: a,
    className: s
  } = e, c = (0, i.p9)({
    guildId: t,
    roleId: r.id,
    size: a
  });
  return null != c ? (0, l.jsx)(n.Z, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
        l = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable
      }))), l.forEach(function(t) {
        var l;
        l = r[t], t in e ? Object.defineProperty(e, t, {
          value: l,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = l
      })
    }
    return e
  }({
    className: s
  }, c)) : (0, l.jsx)(o.Z, {
    color: r.colorString,
    className: s,
    size: a
  })
}