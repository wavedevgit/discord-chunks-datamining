/** Chunk was on web.js **/
/** chunk id: 432376, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e) {
  let {
    channel: t,
    canChat: n,
    renderReactions: r,
    canAddNewReactions: i,
    isLurking: a,
    isGuest: o,
    communicationDisabled: s,
    isActiveChannelOrUnarchivableThread: l,
    isAutomodQuarantined: c
  } = e, u = t.isPrivate(), d = t.isSystemDM(), f = (true === i || u) && !d && l, p = (n || u) && l, _ = a || o || !p || true === s || true === c;
  return {
    disableReactionReads: !r,
    disableReactionCreates: a || o || !p || !f,
    disableReactionUpdates: _
  }
}
require.d(exports, {
  Z: () => r
})