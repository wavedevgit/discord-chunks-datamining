/** Chunk was on 71447 **/
/** chunk id: 651813, original params: e,t,n (module,exports,require) **/
function i(e, t) {
  var n;
  return null == e ? null : e.isDM() && null != (n = t.getUser(e.getRecipientId())) ? n : null
}

function r(e, t) {
  var n;
  return null == e ? null : null != e.getGuildId() && null != (n = t.getGuild(e.getGuildId())) ? n : null
}
require.d(exports, {
  P: () => r,
  j: () => i
})