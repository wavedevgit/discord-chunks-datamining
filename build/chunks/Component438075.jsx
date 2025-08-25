/** Chunk was on web.js **/
/** chunk id: 438075, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => s,
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
    hasSpoilerEmbeds: s,
    handleContextMenu: l,
    isInteracting: c,
    isAutomodBlockedMessage: u,
    isMessageSnapshot: d,
    renderThreadAccessory: f,
    renderSuppressEmbeds: _,
    renderReactions: p,
    forceAddReactions: h,
    disableComponentInteractivity: m,
    className: g
  } = e;
  return u ? null : (0, r.jsx)(i.Z, {
    message: t,
    children: (0, r.jsx)(o.ZP, {
      className: g,
      isInteracting: c,
      message: t,
      channel: n,
      compact: a,
      hasSpoilerEmbeds: s,
      isMessageSnapshot: d,
      onMediaItemContextMenu: l,
      renderThreadAccessory: f,
      disableComponentInteractivity: m,
      renderSuppressEmbeds: _,
      forceAddReactions: h,
      renderReactions: p
    })
  })
}

function s(e, t) {
  let {
    message: n,
    channel: i,
    compact: a = false,
    renderThreadAccessory: s,
    disableReactionCreates: l,
    disableReactionUpdates: c,
    isSearchResult: u
  } = e;
  return (0, r.jsx)(o.$p, {
    message: n,
    channel: i,
    compact: a,
    hasSpoilerEmbeds: t,
    renderThreadAccessory: s,
    disableReactionCreates: l,
    disableReactionUpdates: c,
    isSearchResult: u
  })
}