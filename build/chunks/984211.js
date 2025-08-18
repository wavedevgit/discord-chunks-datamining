/** Chunk was on 91173 **/
/** chunk id: 984211, original params: e,t,n (module,exports,require) **/
function r(e) {
  if (null == e || null == e.party || null == e.party.size || e.party.size.length < 2) return {
    partySize: false,
    maxPartySize: false
  };
  let [t, n] = e.party.size;
  return {
    partySize: t,
    maxPartySize: n
  }
}
require.d(exports, {
  _: () => r
}), require("./388685.js")