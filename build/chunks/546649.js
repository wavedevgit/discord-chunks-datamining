/** Chunk was on 9573 **/
t.d(e, {
  default: () => d
});
var l = t(200651);
t(192379);
var i = t(481060),
  o = t(239091),
  a = t(299206),
  r = t(461757),
  c = t(388032);

function d(n) {
  let {
    channel: e,
    channelId: t,
    originalLink: d,
    messageId: s,
    onSelect: u
  } = n, h = (0, r.Z)(e, d, s), p = (0, a.Z)({
    id: t,
    label: c.NW.string(c.t.gFHI3t)
  });
  return (0, l.jsxs)(i.v2r, {
    navId: "channel-mention-context",
    onClose: o.Zy,
    onSelect: u,
    "aria-label": c.NW.string(c.t.feGACA),
    children: [(0, l.jsx)(i.kSQ, {
      children: h
    }, "channel-mention-actions"), (0, l.jsx)(i.kSQ, {
      children: p
    }, "developer-actions")]
  })
}