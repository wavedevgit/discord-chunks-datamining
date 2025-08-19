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
    canAddNewReactions: l,
    isLurking: r,
    isGuest: o,
    communicationDisabled: a,
    isActiveChannelOrUnarchivableThread: s,
    isAutomodQuarantined: c
  } = e, u = t.isPrivate(), d = t.isSystemDM(), h = (n || u) && s;
  return {
    disableReactionReads: !i,
    disableReactionCreates: r || o || !h || !((true === l || u) && !d && s),
    disableReactionUpdates: r || o || !h || true === a || true === c
  }
}