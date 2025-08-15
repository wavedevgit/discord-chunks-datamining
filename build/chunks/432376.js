/** Chunk was on 38626 **/
/** chunk id: 432376, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
});

function i(e) {
  let {
    channel: t,
    canChat: n,
    renderReactions: i,
    canAddNewReactions: r,
    isLurking: l,
    isGuest: o,
    communicationDisabled: a,
    isActiveChannelOrUnarchivableThread: s,
    isAutomodQuarantined: c
  } = e, u = t.isPrivate(), d = t.isSystemDM(), h = (n || u) && s;
  return {
    disableReactionReads: !i,
    disableReactionCreates: l || o || !h || !((true === r || u) && !d && s),
    disableReactionUpdates: l || o || !h || true === a || true === c
  }
}