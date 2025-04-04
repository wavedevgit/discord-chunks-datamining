/** Chunk was on 95477 **/
r.d(t, {
  b: () => c,
  x: () => s
});
var n = r(200651);
r(192379);
var o = r(385499),
  l = r(245315),
  i = r(368859),
  a = r(848697);

function c(e) {
  let t, {
    message: r,
    channel: n,
    user: a,
    isRepliedMessage: c
  } = e;
  return (null == r ? void 0 : r.isSystemDM()) ? t = o.Z.Types.SYSTEM_DM : null != r && (0, i.Z)(r) ? t = (0, l.cp)(r) ? o.Z.Types.OFFICIAL : o.Z.Types.SERVER : (null == a ? void 0 : a.bot) ? t = o.Z.Types.BOT : null != n && n.isForumPost() && n.ownerId === (null == a ? void 0 : a.id) && !c && (t = o.Z.Types.ORIGINAL_POSTER), t
}

function s(e) {
  let {
    message: t,
    channel: r,
    user: l,
    compact: i,
    isRepliedMessage: s,
    hideIcon: u = !1,
    children: m
  } = e, p = c({
    message: t,
    channel: r,
    user: l,
    compact: i,
    isRepliedMessage: s,
    hideIcon: u,
    children: m
  });
  return null == p ? null : (0, n.jsx)(o.Z, {
    className: i ? a.botTagCompact : a.botTagCozy,
    type: p,
    verified: null == l ? void 0 : l.isVerifiedBot(),
    hideIcon: u,
    useRemSizes: !0,
    children: m
  })
}