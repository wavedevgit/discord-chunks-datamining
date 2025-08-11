/** Chunk was on 1272 **/
/** chunk id: 287259, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  JZ: () => l,
  fS: () => i,
  wX: () => a
});
var Chunk570140 = require("./570140.js");

function i(e, t) {
  r.Z.dispatch({
    type: "LIBRARY_TABLE_SORT_UPDATE",
    key: e,
    direction: t
  })
}

function l(e) {
  r.Z.dispatch({
    type: "LIBRARY_APPLICATION_FILTER_UPDATE",
    query: e
  })
}

function a(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
  r.Z.dispatch({
    type: "LIBRARY_TABLE_ACTIVE_ROW_ID_UPDATE",
    key: e,
    isKeyboardEvent: t
  })
}