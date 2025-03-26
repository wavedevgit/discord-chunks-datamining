/** Chunk was on 52272 **/
n.d(t, {
  Q: () => l,
  Z: () => a
});
var r = n(200651);
n(192379);
var i = n(275344),
  o = n(938353);

function a(e) {
  let {
    channelMessageProps: {
      message: t,
      channel: n,
      compact: a = !1
    },
    hasSpoilerEmbeds: l,
    handleContextMenu: s,
    isInteracting: c,
    isAutomodBlockedMessage: u,
    isMessageSnapshot: d,
    renderThreadAccessory: p,
    renderSuppressEmbeds: m,
    renderReactions: f,
    forceAddReactions: h,
    disableComponentInteractivity: g,
    className: _
  } = e;
  return u ? null : (0, r.jsx)(i.Z, {
    message: t,
    children: (0, r.jsx)(o.ZP, {
      className: _,
      isInteracting: c,
      message: t,
      channel: n,
      compact: a,
      hasSpoilerEmbeds: l,
      isMessageSnapshot: d,
      onMediaItemContextMenu: s,
      renderThreadAccessory: p,
      disableComponentInteractivity: g,
      renderSuppressEmbeds: m,
      forceAddReactions: h,
      renderReactions: f
    })
  })
}

function l(e, t) {
  let {
    message: n,
    channel: i,
    compact: a = !1,
    renderThreadAccessory: l,
    disableReactionCreates: s,
    disableReactionUpdates: c,
    isSearchResult: u
  } = e;
  return (0, r.jsx)(o.$p, {
    message: n,
    channel: i,
    compact: a,
    hasSpoilerEmbeds: t,
    renderThreadAccessory: l,
    disableReactionCreates: s,
    disableReactionUpdates: c,
    isSearchResult: u
  })
}