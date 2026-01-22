/** Chunk was on web.js **/
/** chunk id: 22856, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => s,
  k: () => a
}), require("./65821.js");
var Chunk64700 = require("./64700.js"),
  Chunk818348 = require("./818348.js");

function a() {
  let e = r.useContext(s);
  if (null == e) throw Error("useModalContext must be used within a ModalContext.Provider");
  return e
}
let s = Chunk64700.createContext({
  dismissable: true,
  onClose: Chunk818348.tE,
  id: "modal-id",
  headingId: "modal-heading-id"
})