/** Chunk was on 40694 **/
n.d(r, {
  b: () => u,
  x: () => c
});
var t = n(255367);
n(73800);
var l = n(385499),
  o = n(245315),
  i = n(368859),
  a = n(848697);

function u(e) {
  let r, {
    message: n,
    channel: t,
    user: a,
    isRepliedMessage: u
  } = e;
  return (null == n ? void 0 : n.isSystemDM()) ? r = l.Z.Types.SYSTEM_DM : null != n && (0, i.Z)(n) ? r = (0, o.cp)(n) ? l.Z.Types.OFFICIAL : l.Z.Types.SERVER : (null == a ? void 0 : a.bot) ? r = l.Z.Types.BOT : null != t && t.isForumPost() && t.ownerId === (null == a ? void 0 : a.id) && !u && (r = l.Z.Types.ORIGINAL_POSTER), r
}

function c(e) {
  let {
    message: r,
    channel: n,
    user: o,
    compact: i,
    isRepliedMessage: c,
    hideIcon: s = !1,
    children: d
  } = e, f = u({
    message: r,
    channel: n,
    user: o,
    compact: i,
    isRepliedMessage: c,
    hideIcon: s,
    children: d
  });
  return null == f ? null : (0, t.jsx)(l.Z, {
    className: i ? a.botTagCompact : a.botTagCozy,
    type: f,
    verified: null == o ? void 0 : o.isVerifiedBot(),
    hideIcon: s,
    useRemSizes: !0,
    children: d
  })
}