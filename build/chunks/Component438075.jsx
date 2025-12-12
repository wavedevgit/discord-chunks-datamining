/** Chunk was on web.js **/
/** chunk id: 438075, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => s,
  Z: () => a
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
    hasBailedAst: l,
    handleContextMenu: c,
    isInteracting: u,
    isAutomodBlockedMessage: d,
    isMessageSnapshot: f,
    renderThreadAccessory: p,
    renderSuppressEmbeds: _,
    renderReactions: m,
    forceAddReactions: h,
    disableComponentInteractivity: g,
    className: E
  } = e;
  return d ? null : (0, r.jsx)(i.Z, {
    message: t,
    children: (0, r.jsx)(o.ZP, {
      className: E,
      isInteracting: u,
      message: t,
      channel: n,
      compact: a,
      hasSpoilerEmbeds: s,
      hasBailedAst: l,
      isMessageSnapshot: f,
      onMediaItemContextMenu: c,
      renderThreadAccessory: p,
      disableComponentInteractivity: g,
      renderSuppressEmbeds: _,
      forceAddReactions: h,
      renderReactions: m
    })
  })
}

function s(e, t, n) {
  let {
    message: i,
    channel: a,
    compact: s = false,
    renderThreadAccessory: l,
    disableReactionCreates: c,
    disableReactionUpdates: u
  } = e;
  return (0, r.jsx)(o.$p, {
    message: i,
    channel: a,
    compact: s,
    hasSpoilerEmbeds: t,
    hasBailedAst: n,
    renderThreadAccessory: l,
    disableReactionCreates: c,
    disableReactionUpdates: u
  })
}