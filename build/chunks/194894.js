/** Chunk was on 21738 **/
/** chunk id: 194894, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  n9: () => l,
  pU: () => a,
  vt: () => i
});
var Chunk73153 = require("./73153.js");

function i(e, t) {
  r.h.dispatch({
    type: "LIBRARY_TABLE_SORT_UPDATE",
    key: e,
    direction: t
  })
}

function l(e) {
  r.h.dispatch({
    type: "LIBRARY_APPLICATION_FILTER_UPDATE",
    query: e
  })
}

function a(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
  r.h.dispatch({
    type: "LIBRARY_TABLE_ACTIVE_ROW_ID_UPDATE",
    key: e,
    isKeyboardEvent: t
  })
}