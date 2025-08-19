/** Chunk was on 11868 **/
/** chunk id: 332473, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  b: () => o,
  e: () => a
});
var Chunk399606 = require("./399606.js"),
  Chunk594174 = require("./594174.js"),
  Chunk918505 = require("./918505.js");
let a = () => c(Chunk594174.default.getCurrentUser(), (0, Chunk918505.JH)()),
  o = () => c((0, Chunk399606.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()), (0, Chunk918505.o9)());

function c(e, t) {
  return !(null == e || e.hasUniqueUsername()) && !!e.hasVerifiedEmailOrPhone() && !!t
}