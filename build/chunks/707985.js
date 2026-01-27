/** Chunk was on 7034 **/
/** chunk id: 707985, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => i
});

function i(e) {
  let {
    channel: t,
    canChat: n,
    renderReactions: i,
    canAddNewReactions: l,
    isLurking: r,
    isGuest: o,
    communicationDisabled: a,
    isActiveChannelOrUnarchivableThread: s,
    isAutomodQuarantined: u
  } = e, c = t.isPrivate(), d = t.isSystemDM(), p = (n || c) && s;
  return {
    disableReactionReads: !i,
    disableReactionCreates: r || o || !p || !((true === l || c) && !d && s),
    disableReactionUpdates: r || o || !p || true === a || true === u
  }
}