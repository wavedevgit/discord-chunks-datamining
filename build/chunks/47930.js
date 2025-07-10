/** Chunk was on 40694 **/
t.d(r, {
  b: () => u,
  x: () => c
});
var n = t(255367);
t(73800);
var l = t(385499),
  o = t(245315),
  i = t(368859),
  a = t(848697);

function u(e) {
  let r, {
    message: t,
    channel: n,
    user: a,
    isRepliedMessage: u
  } = e;
  return (null == t ? void 0 : t.isSystemDM()) ? r = l.Z.Types.SYSTEM_DM : null != t && (0, i.Z)(t) ? r = (0, o.cp)(t) ? l.Z.Types.OFFICIAL : l.Z.Types.SERVER : (null == a ? void 0 : a.bot) ? r = l.Z.Types.BOT : null != n && n.isForumPost() && n.ownerId === (null == a ? void 0 : a.id) && !u && (r = l.Z.Types.ORIGINAL_POSTER), r
}

function c(e) {
  let {
    message: r,
    channel: t,
    user: o,
    compact: i,
    isRepliedMessage: c,
    hideIcon: s = !1,
    children: d
  } = e, f = u({
    message: r,
    channel: t,
    user: o,
    compact: i,
    isRepliedMessage: c,
    hideIcon: s,
    children: d
  });
  return null == f ? null : (0, n.jsx)(l.Z, {
    className: i ? a.botTagCompact : a.botTagCozy,
    type: f,
    verified: null == o ? void 0 : o.isVerifiedBot(),
    hideIcon: s,
    useRemSizes: !0,
    children: d
  })
}