/** Chunk was on 65347 **/
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
  let e = (0, Chunk442837.cj)([Chunk726745.Z], () => ({
    isLoading: Chunk726745.Z.getIsValidatingUsers(),
    multiAccountUsers: Chunk726745.Z.getUsers()
  }));
  return Chunk473749.useEffect(() => {
    Chunk570140.Z.wait(() => {
      Chunk480387.HJ()
    })
  }, []), module
}