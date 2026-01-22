/** Chunk was on 13530 **/
/** chunk id: 626586, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $: () => a,
  L: () => s
}), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js");
let i = (0, Chunk64700.createContext)(null);

function a(e) {
  let {
    state: t,
    children: n
  } = e;
  return (0, l.jsx)(i.Provider, {
    value: t,
    children: n
  })
}

function s() {
  let e = (0, r.useContext)(i);
  if (null === e) throw Error("useGameProfile must be used within a GameProfileContext");
  return e
}