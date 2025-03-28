/** Chunk was on 95477 **/
r.d(t, {
  x: () => c
});
var n = r(200651);
r(192379);
var o = r(385499),
  i = r(245315),
  l = r(368859),
  a = r(432957);

function c(e) {
  let t, {
    message: r,
    channel: c,
    user: s,
    compact: u,
    isRepliedMessage: m,
    hideIcon: p = !1,
    children: d
  } = e;
  return ((null == r ? void 0 : r.isSystemDM()) ? t = o.Z.Types.SYSTEM_DM : null != r && (0, l.Z)(r) ? t = (0, i.cp)(r) ? o.Z.Types.OFFICIAL : o.Z.Types.SERVER : (null == s ? void 0 : s.bot) ? t = o.Z.Types.BOT : null != c && c.isForumPost() && c.ownerId === (null == s ? void 0 : s.id) && !m && (t = o.Z.Types.ORIGINAL_POSTER), null == t) ? null : (0, n.jsx)(o.Z, {
    className: u ? a.botTagCompact : a.botTagCozy,
    type: t,
    verified: null == s ? void 0 : s.isVerifiedBot(),
    hideIcon: p,
    useRemSizes: !0,
    children: d
  })
}