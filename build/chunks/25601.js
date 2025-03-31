/** Chunk was on 73181 **/
n.d(t, {
  Z: () => a
});
var r = n(200651);
n(192379);
var i = n(831209),
  o = n(481060),
  l = n(74185);

function a(e) {
  let {
    mentionsCount: t,
    isMentionLowImportance: n
  } = e;
  return (0, r.jsx)("div", {
    className: l.mentionsBadge,
    "aria-hidden": !0,
    children: (0, r.jsx)(o.mAB, {
      count: t,
      color: n ? i.Z.BACKGROUND_ACCENT : i.Z.STATUS_DANGER
    })
  })
}