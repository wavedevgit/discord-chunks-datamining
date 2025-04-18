/** Chunk was on 71350 **/
n.d(t, {
  Dv: () => c,
  Gq: () => o,
  Gx: () => p,
  XX: () => s,
  bX: () => u,
  bY: () => d,
  iG: () => m,
  ut: () => r
}), n(781311);
var a = n(446108),
  i = n(901461),
  l = n(981631);

function r(e) {
  return "message-content-".concat(e.id)
}

function o(e) {
  return "message-reply-context-".concat(e.id)
}

function s(e, t) {
  let n = null != t ? t : e.id;
  return "message-username-".concat(n)
}

function c(e) {
  return "message-timestamp-".concat(e.id)
}

function d(e) {
  return "message-reactions-".concat(e.id)
}

function u(e) {
  return "message-accessories-".concat(e.id)
}

function m(e, t, n) {
  let d = e.type === l.uaV.REPLY && null != e.messageReference,
    m = e.embeds.length > 0,
    p = e.attachments.length > 0,
    g = e.stickerItems.length > 0,
    _ = e.codedLinks.length > 0,
    f = e.hasFlag(l.iLy.HAS_THREAD),
    h = m || p || g || _ || f || e.type === l.uaV.THREAD_CREATED,
    b = m && e.content === e.embeds[0].url && e.embeds[0].type === l.hBH.GIFV,
    y = e.type !== l.uaV.DEFAULT || !b && "" !== e.content,
    C = (0, i.Z)(e),
    x = !C && (null == n ? void 0 : n.hasTimestamp) !== !1,
    v = s(e, t),
    T = o(e),
    O = C ? "" : "".concat(d ? T : v, " ").concat(a.Z0);
  if (y) {
    let t = r(e);
    O += " ".concat(t)
  }
  if (h) {
    let t = u(e);
    O += " ".concat(t)
  }
  if (x) {
    let t = c(e);
    O += " ".concat(a.fy, " ").concat(t)
  }
  return O.trim()
}

function p(e) {
  if (0 === e.reactions.length) return;
  let t = d(e);
  return "".concat(a.Mb, " ").concat(t)
}