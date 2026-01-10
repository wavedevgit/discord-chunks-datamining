/** Chunk was on 84249 **/
/** chunk id: 251423, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  L: () => o
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk480387 = require("./480387.js"),
  Chunk726745 = require("./726745.js");

function o() {
  let e = (0, r.cj)([s.Z], () => ({
    isLoading: s.Z.getIsValidatingUsers(),
    multiAccountUsers: s.Z.getUsers()
  }));
  return a.useEffect(() => {
    i.Z.wait(() => {
      l.HJ()
    })
  }, []), e
}