/** Chunk was on web.js **/
/** chunk id: 699352, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s,
  J: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk21878 = require("./21878.jsx"),
  Chunk756369 = require("./756369.jsx");

function s(e) {
  let {
    channelMessageProps: {
      message: t,
      channel: n,
      compact: s = false
    },
    hasSpoilerEmbeds: o,
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
  return d ? null : (0, r.jsx)(i.A, {
    message: t,
    children: (0, r.jsx)(a.Ay, {
      className: E,
      isInteracting: u,
      message: t,
      channel: n,
      compact: s,
      hasSpoilerEmbeds: o,
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

function o(e, t, n) {
  let {
    message: i,
    channel: s,
    compact: o = false,
    renderThreadAccessory: l,
    disableReactionCreates: c,
    disableReactionUpdates: u
  } = e;
  return (0, r.jsx)(a.OC, {
    message: i,
    channel: s,
    compact: o,
    hasSpoilerEmbeds: t,
    hasBailedAst: n,
    renderThreadAccessory: l,
    disableReactionCreates: c,
    disableReactionUpdates: u
  })
}