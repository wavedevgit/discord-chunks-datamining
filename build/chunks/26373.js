/** Chunk was on 1272 **/
/** chunk id: 26373, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  K: () => u,
  V: () => d
});
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk990169 = require("./990169.js"),
  Chunk355298 = require("./355298.js"),
  Chunk333984 = require("./333984.js"),
  Chunk899740 = require("./899740.js"),
  Chunk355350 = require("./355350.js");

function u() {
  let e = (0, Chunk899740.q)(),
    t = Chunk647438.useRef(module),
    n = (0, Chunk442837.e7)([Chunk355298.Z], () => Chunk355298.Z.isReady()),
    o = Chunk647438.useRef(require);
  return Chunk647438.useEffect(() => {
    require && !Chunk333984.current && (Chunk333984.current = true, exports.current = module)
  }, [require, module]), 1 >= (0, Chunk990169.Z)(exports) && 1 === module
}

function d() {
  let e = (0, Chunk355350.w)(),
    t = Chunk647438.useRef(module),
    n = (0, Chunk442837.e7)([Chunk333984.Z], () => Chunk333984.Z.isReady()),
    a = Chunk647438.useRef(require);
  return Chunk647438.useEffect(() => {
    require && !Chunk355298.current && (Chunk355298.current = true, exports.current = module)
  }, [require, module]), 1 >= (0, Chunk990169.Z)(exports) && 1 === module
}