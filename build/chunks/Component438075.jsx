/** Chunk was on 91173 **/
/** chunk id: 438075, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Q: () => a,
  Z: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk275344 = require("./275344.jsx"),
  Chunk938353 = require("./938353.jsx");

function o(e) {
  let {
    channelMessageProps: {
      message: t,
      channel: n,
      compact: o = false
    },
    hasSpoilerEmbeds: a,
    handleContextMenu: s,
    isInteracting: c,
    isAutomodBlockedMessage: u,
    isMessageSnapshot: d,
    renderThreadAccessory: p,
    renderSuppressEmbeds: m,
    renderReactions: f,
    forceAddReactions: g,
    disableComponentInteractivity: _,
    className: h
  } = e;
  return u ? null : (0, r.jsx)(i.Z, {
    message: t,
    children: (0, r.jsx)(l.ZP, {
      className: h,
      isInteracting: c,
      message: t,
      channel: n,
      compact: o,
      hasSpoilerEmbeds: a,
      isMessageSnapshot: d,
      onMediaItemContextMenu: s,
      renderThreadAccessory: p,
      disableComponentInteractivity: _,
      renderSuppressEmbeds: m,
      forceAddReactions: g,
      renderReactions: f
    })
  })
}

function a(e, t) {
  let {
    message: n,
    channel: i,
    compact: o = false,
    renderThreadAccessory: a,
    disableReactionCreates: s,
    disableReactionUpdates: c,
    isSearchResult: u
  } = e;
  return (0, r.jsx)(l.$p, {
    message: n,
    channel: i,
    compact: o,
    hasSpoilerEmbeds: t,
    renderThreadAccessory: a,
    disableReactionCreates: s,
    disableReactionUpdates: c,
    isSearchResult: u
  })
}