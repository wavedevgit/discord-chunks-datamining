/** Chunk was on 26434 **/
/** chunk id: 338247, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  s: () => o
});
var Chunk430824 = require("./430824.js"),
  Chunk863214 = require("./863214.js"),
  Chunk981631 = require("./981631.js");

function o(e, t) {
  if (null == t) returnfalse;
  let n = (0, i.p)(t, "should_show_report_to_mod_survey"),
    o = r.Z.getGuild(t);
  return n && null != o && o.ownerId === e.id && o.features.has(l.oNc.REPORT_TO_MOD_SURVEY)
}