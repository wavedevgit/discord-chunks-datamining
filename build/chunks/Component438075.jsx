/** Chunk was on 91173 **/
/** chunk id: 438075, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Q: () => o,
  Z: () => a
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk275344 = require("./275344.jsx"),
  Chunk938353 = require("./938353.jsx");

function a(e) {
  let {
    channelMessageProps: {
      message: t,
      channel: n,
      compact: a = false
    },
    hasSpoilerEmbeds: o,
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
      compact: a,
      hasSpoilerEmbeds: o,
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

function o(e, t) {
  let {
    message: n,
    channel: i,
    compact: a = false,
    renderThreadAccessory: o,
    disableReactionCreates: s,
    disableReactionUpdates: c,
    isSearchResult: u
  } = e;
  return (0, r.jsx)(l.$p, {
    message: n,
    channel: i,
    compact: a,
    hasSpoilerEmbeds: t,
    renderThreadAccessory: o,
    disableReactionCreates: s,
    disableReactionUpdates: c,
    isSearchResult: u
  })
}