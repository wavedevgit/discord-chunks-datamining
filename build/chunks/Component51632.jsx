/** Chunk was on 89311 **/
/** chunk id: 51632, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  D: () => o,
  _: () => l
}), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js");
let r = (0, Chunk473749.createContext)(null);

function l(e) {
  let {
    state: t,
    children: n
  } = e;
  return (0, a.jsx)(r.Provider, {
    value: t,
    children: n
  })
}

function o() {
  let e = (0, Chunk473749.useContext)(r);
  if (null === module) throw Error("useGameProfile must be used within a GameProfileContext");
  return module
}