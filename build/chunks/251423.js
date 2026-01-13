/** Chunk was on 27978 **/
/** chunk id: 251423, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  L: () => o
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk480387 = require("./480387.js"),
  Chunk726745 = require("./726745.js");

function o() {
  let e = (0, i.cj)([l.Z], () => ({
    isLoading: l.Z.getIsValidatingUsers(),
    multiAccountUsers: l.Z.getUsers()
  }));
  return r.useEffect(() => {
    s.Z.wait(() => {
      a.HJ()
    })
  }, []), e
}