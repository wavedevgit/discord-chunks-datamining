/** Chunk was on 73628 **/
/** chunk id: 587123, original params: e,t,A (module,exports,require) **/
require.d(exports, {
  P: () => l,
  W: () => o
}), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk828762 = require("./828762.js");
let i = Chunk647438.createContext(true);

function l() {
  let e = Chunk647438.useContext(i);
  if (null == module) throw Error("No GuildProductAttachmentManagerContextProvider found");
  return module
}

function o(e) {
  var {
    children: t,
    guildId: A
  } = e, r = function(e, t) {
    if (null == e) return {};
    var A, n, r = function(e, t) {
      if (null == e) return {};
      var A, n, r = {},
        a = Object.keys(e);
      for (n = 0; n < a.length; n++) A = a[n], t.indexOf(A) >= 0 || (r[A] = e[A]);
      return r
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      for (n = 0; n < a.length; n++) A = a[n], !(t.indexOf(A) >= 0) && Object.prototype.propertyIsEnumerable.call(e, A) && (r[A] = e[A])
    }
    return r
  }(e, ["children", "guildId"]);
  let l = (0, a.Z)(A, r);
  return (0, n.jsx)(i.Provider, {
    value: l,
    children: t
  })
}