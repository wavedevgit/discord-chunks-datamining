/** Chunk was on web.js **/
/** chunk id: 667137, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => a,
  v: () => o
}), require("./415506.js");
var Chunk647438 = require("./647438.js"),
  Chunk981631 = require("./981631.js");

function o() {
  let e = Chunk647438.useContext(a);
  if (null == module) throw Error("useModalContext must be used within a ModalContext.Provider");
  return module
}
let a = Chunk647438.createContext({
  onClose: Chunk981631.dG4,
  id: "modal-id",
  headingId: "modal-heading-id"
})