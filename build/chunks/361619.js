/** Chunk was on 97492 **/
/** chunk id: 361619, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk935649 = require("./935649.jsx"),
  Chunk847599 = require("./847599.js"),
  Chunk961350 = require("./961350.js"),
  Chunk849736 = require("./849736.js"),
  Chunk105530 = require("./105530.js"),
  Chunk418208 = require("./418208.js");

function d(e) {
  let t = (0, l.bG)([s.default], () => s.default.getId()),
    n = (0, c.Ay)(t, e.id),
    d = n === c.zF.REQUESTED_TO_SPEAK || n === c.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK,
    [f, p] = r.useState(d);
  return r.useEffect(() => {
    p(d)
  }, [d]), [f, function() {
    (0, u.Cf)(e.id) ? i.A.showAgeVerificationGetStartedModal({
      entryPoint: a.q1.STAGE_CHANNEL_RAISE_HAND
    }): (n === c.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK ? (0, o.e7)(e, true) : (0, o.J7)(e, !f), p(!f))
  }]
}