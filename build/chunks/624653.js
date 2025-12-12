/** Chunk was on web.js **/
/** chunk id: 624653, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => a,
  v: () => o
}), require("./415506.js");
var Chunk473749 = require("./473749.js"),
  Chunk231338 = require("./231338.js");

function o() {
  let e = Chunk473749.useContext(a);
  if (null == module) throw Error("useModalContext must be used within a ModalContext.Provider");
  return module
}
let a = Chunk473749.createContext({
  dismissable: true,
  onClose: Chunk231338.dG,
  id: "modal-id",
  headingId: "modal-heading-id"
})