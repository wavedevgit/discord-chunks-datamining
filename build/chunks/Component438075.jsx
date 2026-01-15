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
    hasBailedAst: l,
    handleContextMenu: c,
    isInteracting: u,
    isAutomodBlockedMessage: d,
    isMessageSnapshot: f,
    renderThreadAccessory: p,
    renderSuppressEmbeds: _,
    renderReactions: h,
    forceAddReactions: m,
    disableComponentInteractivity: g,
    className: E
  } = e;
  return d ? null : (0, r.jsx)(i.Z, {
    message: t,
    children: (0, r.jsx)(a.ZP, {
      className: E,
      isInteracting: u,
      message: t,
      channel: n,
      compact: o,
      hasSpoilerEmbeds: s,
      hasBailedAst: l,
      isMessageSnapshot: f,
      onMediaItemContextMenu: c,
      renderThreadAccessory: p,
      disableComponentInteractivity: g,
      renderSuppressEmbeds: _,
      forceAddReactions: m,
      renderReactions: h
    })
  })
}

function s(e, t, n) {
  let {
    message: i,
    channel: o,
    compact: s = false,
    renderThreadAccessory: l,
    disableReactionCreates: c,
    disableReactionUpdates: u
  } = e;
  return (0, r.jsx)(a.$p, {
    message: i,
    channel: o,
    compact: s,
    hasSpoilerEmbeds: t,
    hasBailedAst: n,
    renderThreadAccessory: l,
    disableReactionCreates: c,
    disableReactionUpdates: u
  })
}