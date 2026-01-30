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
    communicationDisabled: o,
    isActiveChannelOrUnarchivableThread: a,
    isAutomodQuarantined: s
  } = e, u = t.isPrivate(), c = t.isSystemDM(), d = (n || u) && a;
  return {
    disableReactionReads: !i,
    disableReactionCreates: r || !d || !((true === l || u) && !c && a),
    disableReactionUpdates: r || !d || true === o || true === s
  }
}