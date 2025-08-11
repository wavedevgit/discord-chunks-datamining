/** Chunk was on 73628 **/
/** chunk id: 587123, original params: e,t,A (module,exports,require) **/
require.d(exports, {
  P: () => o,
  W: () => i
}), require("./415506.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk828762 = require("./828762.js");
let a = Chunk73800.createContext(true);

function o() {
  let e = Chunk73800.useContext(a);
  if (null == module) throw Error("No GuildProductAttachmentManagerContextProvider found");
  return module
}

function i(e) {
  var {
    children: t,
    guildId: A
  } = e, r = function(e, t) {
    if (null == e) return {};
    var A, n, r = function(e, t) {
      if (null == e) return {};
      var A, n, r = {},
        l = Object.keys(e);
      for (n = 0; n < l.length; n++) A = l[n], t.indexOf(A) >= 0 || (r[A] = e[A]);
      return r
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (n = 0; n < l.length; n++) A = l[n], !(t.indexOf(A) >= 0) && Object.prototype.propertyIsEnumerable.call(e, A) && (r[A] = e[A])
    }
    return r
  }(e, ["children", "guildId"]);
  let o = (0, l.Z)(A, r);
  return <a.Provider value={o}>{t}</a.Provider>
}