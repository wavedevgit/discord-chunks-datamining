/** Chunk was on 9753 **/
/** chunk id: 699352, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => a,
  J: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk21878 = require("./21878.jsx"),
  Chunk756369 = require("./756369.jsx");

function a(e) {
  let {
    channelMessageProps: {
      message: t,
      channel: n,
      compact: a = false
    },
    hasSpoilerEmbeds: s,
    hasBailedAst: o,
    handleContextMenu: c,
    isInteracting: u,
    isAutomodBlockedMessage: d,
    isMessageSnapshot: p,
    renderThreadAccessory: m,
    renderSuppressEmbeds: f,
    renderReactions: g,
    forceAddReactions: _,
    disableComponentInteractivity: h,
    className: b
  } = e;
  return d ? null : (0, r.jsx)(i.A, {
    message: t,
    children: (0, r.jsx)(l.Ay, {
      className: b,
      isInteracting: u,
      message: t,
      channel: n,
      compact: a,
      hasSpoilerEmbeds: s,
      hasBailedAst: o,
      isMessageSnapshot: p,
      onMediaItemContextMenu: c,
      renderThreadAccessory: m,
      disableComponentInteractivity: h,
      renderSuppressEmbeds: f,
      forceAddReactions: _,
      renderReactions: g
    })
  })
}

function s(e, t, n) {
  let {
    message: i,
    channel: a,
    compact: s = false,
    renderThreadAccessory: o,
    disableReactionCreates: c,
    disableReactionUpdates: u
  } = e;
  return (0, r.jsx)(l.OC, {
    message: i,
    channel: a,
    compact: s,
    hasSpoilerEmbeds: t,
    hasBailedAst: n,
    renderThreadAccessory: o,
    disableReactionCreates: c,
    disableReactionUpdates: u
  })
}