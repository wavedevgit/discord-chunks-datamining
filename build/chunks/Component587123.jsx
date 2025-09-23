/** Chunk was on 73628 **/
/** chunk id: 587123, original params: e,t,A (module,exports,require) **/
require.d(exports, {
  P: () => i,
  W: () => o
}), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk828762 = require("./828762.js");
let l = Chunk647438.createContext(true);

function i() {
  let e = Chunk647438.useContext(l);
  if (null == module) throw Error("No GuildProductAttachmentManagerContextProvider found");
  return module
}

function o(e) {
  var {
    children: t,
    guildId: A
  } = e, n = function(e, t) {
    if (null == e) return {};
    var A, r, n = function(e, t) {
      if (null == e) return {};
      var A, r, n = {},
        a = Object.keys(e);
      for (r = 0; r < a.length; r++) A = a[r], t.indexOf(A) >= 0 || (n[A] = e[A]);
      return n
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      for (r = 0; r < a.length; r++) A = a[r], !(t.indexOf(A) >= 0) && Object.prototype.propertyIsEnumerable.call(e, A) && (n[A] = e[A])
    }
    return n
  }(e, ["children", "guildId"]);
  let i = (0, a.Z)(A, n);
  return (0, r.jsx)(l.Provider, {
    value: i,
    children: t
  })
}