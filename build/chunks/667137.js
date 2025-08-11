/** Chunk was on web.js **/
/** chunk id: 667137, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => a,
  v: () => o
}), require("./415506.js");
var Chunk73800 = require("./73800.js"),
  Chunk981631 = require("./981631.js");

function o() {
  let e = Chunk73800.useContext(a);
  if (null == module) throw Error("useModalContext must be used within a ModalContext.Provider");
  return module
}
let a = Chunk73800.createContext({
  onClose: Chunk981631.dG4,
  id: "modal-id",
  headingId: "modal-heading-id"
})