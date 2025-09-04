/** Chunk was on 73628 **/
/** chunk id: 587123, original params: A,e,t (module,exports,require) **/
require.d(exports, {
  P: () => i,
  W: () => o
}), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk828762 = require("./828762.js");
let a = Chunk647438.createContext(true);

function i() {
  let A = Chunk647438.useContext(a);
  if (null == module) throw Error("No GuildProductAttachmentManagerContextProvider found");
  return module
}

function o(A) {
  var {
    children: e,
    guildId: t
  } = A, r = function(A, e) {
    if (null == A) return {};
    var t, n, r = function(A, e) {
      if (null == A) return {};
      var t, n, r = {},
        l = Object.keys(A);
      for (n = 0; n < l.length; n++) t = l[n], e.indexOf(t) >= 0 || (r[t] = A[t]);
      return r
    }(A, e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(A);
      for (n = 0; n < l.length; n++) t = l[n], !(e.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(A, t) && (r[t] = A[t])
    }
    return r
  }(A, ["children", "guildId"]);
  let i = (0, l.Z)(t, r);
  return (0, n.jsx)(a.Provider, {
    value: i,
    children: e
  })
}