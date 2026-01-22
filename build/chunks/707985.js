/** Chunk was on web.js **/
/** chunk id: 707985, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e) {
  let {
    channel: t,
    canChat: n,
    renderReactions: r,
    canAddNewReactions: i,
    isLurking: a,
    isGuest: s,
    communicationDisabled: o,
    isActiveChannelOrUnarchivableThread: l,
    isAutomodQuarantined: c
  } = e, u = t.isPrivate(), d = t.isSystemDM(), f = (true === i || u) && !d && l, p = (n || u) && l, _ = a || s || !p || true === o || true === c;
  return {
    disableReactionReads: !r,
    disableReactionCreates: a || s || !p || !f,
    disableReactionUpdates: _
  }
}
require.d(exports, {
  A: () => r
})