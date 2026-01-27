/** Chunk was on 92917 **/
/** chunk id: 125017, original params: e,t,n (module,exports,require) **/
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
}), require("./896048.js")