/** Chunk was on web.js **/
/** chunk id: 747344, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => a,
  Z: () => o
});
var Chunk647438 = require("./647438.js"),
  Chunk981631 = require("./981631.js");

function a() {
  return Chunk647438.useContext(o)
}
let o = Chunk647438.createContext({
  state: {
    isInitialized: false,
    isOpen: false,
    activeDescendantIndex: null,
    listItems: [],
    filteredItems: [],
    selectedItems: [],
    longestLabelCharCount: 5,
    width: "0px",
    dropDownHeight: "auto"
  },
  setState: Chunk981631.dG4,
  selectionMode: "single",
  handleSelectionChange: Chunk981631.dG4,
  onSelectionChange: Chunk981631.dG4
})