/** Chunk was on web.js **/
/** chunk id: 438075, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => s,
  Z: () => a
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk275344 = require("./275344.jsx"),
  Chunk938353 = require("./938353.js");

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
  return u ? null : <i.Z message={t}><o.ZP className={g} isInteracting={c} message={t} channel={n} compact={a} hasSpoilerEmbeds={s} isMessageSnapshot={d} onMediaItemContextMenu={l} renderThreadAccessory={f} disableComponentInteractivity={m} renderSuppressEmbeds={_} forceAddReactions={h} renderReactions={p} /></i.Z>
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
  return <o.$p message={n} channel={i} compact={a} hasSpoilerEmbeds={t} renderThreadAccessory={s} disableReactionCreates={l} disableReactionUpdates={c} isSearchResult={u} />
}