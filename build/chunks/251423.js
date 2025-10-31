/** Chunk was on 42340 **/
/** chunk id: 251423, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  L: () => s
});
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk480387 = require("./480387.js"),
  Chunk726745 = require("./726745.js");

function s() {
  let e = (0, Chunk442837.cj)([Chunk726745.Z], () => ({
    isLoading: Chunk726745.Z.getIsValidatingUsers(),
    multiAccountUsers: Chunk726745.Z.getUsers()
  }));
  return Chunk647438.useEffect(() => {
    Chunk570140.Z.wait(() => {
      Chunk480387.HJ()
    })
  }, []), module
}