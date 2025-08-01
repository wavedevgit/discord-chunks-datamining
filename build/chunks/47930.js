/** Chunk was on 40694 **/
t.d(n, {
  b: () => a,
  x: () => c
});
var r = t(255367);
t(73800);
var l = t(385499),
  o = t(245315),
  i = t(368859),
  u = t(848697);

function a(e) {
  let n, {
    message: t,
    channel: r,
    user: u,
    isRepliedMessage: a
  } = e;
  return (null == t ? void 0 : t.isSystemDM()) ? n = l.Z.Types.SYSTEM_DM : null != t && (0, i.Z)(t) ? n = (0, o.cp)(t) ? l.Z.Types.OFFICIAL : l.Z.Types.SERVER : (null == u ? void 0 : u.bot) ? n = l.Z.Types.BOT : null != r && r.isForumPost() && r.ownerId === (null == u ? void 0 : u.id) && !a && (n = l.Z.Types.ORIGINAL_POSTER), n
}

function c(e) {
  let {
    message: n,
    channel: t,
    user: o,
    compact: i,
    isRepliedMessage: c,
    hideIcon: s = !1,
    children: d
  } = e, f = a({
    message: n,
    channel: t,
    user: o,
    compact: i,
    isRepliedMessage: c,
    hideIcon: s,
    children: d
  });
  return null == f ? null : (0, r.jsx)(l.Z, {
    className: i ? u.botTagCompact : u.botTagCozy,
    type: f,
    verified: null == o ? void 0 : o.isVerifiedBot(),
    hideIcon: s,
    useRemSizes: !0,
    children: d
  })
}