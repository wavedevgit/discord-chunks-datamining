/** Chunk was on 79120 **/
"use strict";
n.d(t, {
  Z: () => c
});
var r = n(200651);
n(192379);
var l = n(557711),
  i = n(620662),
  o = n(503438),
  a = n(981631),
  s = n(139157);

function c(e) {
  let {
    activity: t,
    user: n,
    guildId: c,
    channelId: u,
    source: d,
    look: f,
    color: p,
    onAction: m
  } = e;
  return null != t && (0, i.Z)(t, a.xjy.SYNC) && (0, o.Z)(t) ? (0, r.jsx)(l.Z, {
    className: s.button,
    size: s.buttonSize,
    look: f,
    color: p,
    user: n,
    activity: t,
    guildId: null != c ? c : void 0,
    channelId: u,
    source: d,
    onAction: m
  }, "sync") : null
}