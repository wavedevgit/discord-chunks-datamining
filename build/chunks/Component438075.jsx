/** Chunk was on web.js **/
/** chunk id: 438075, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => s,
  Z: () => o
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk275344 = require("./275344.jsx"),
  Chunk938353 = require("./938353.jsx");

function o(e) {
  let {
    channelMessageProps: {
      message: t,
      channel: n,
      compact: o = false
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
    children: (0, r.jsx)(a.ZP, {
      className: g,
      isInteracting: c,
      message: t,
      channel: n,
      compact: o,
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
    compact: o = false,
    renderThreadAccessory: s,
    disableReactionCreates: l,
    disableReactionUpdates: c
  } = e;
  return (0, r.jsx)(a.$p, {
    message: n,
    channel: i,
    compact: o,
    hasSpoilerEmbeds: t,
    renderThreadAccessory: s,
    disableReactionCreates: l,
    disableReactionUpdates: c
  })
}