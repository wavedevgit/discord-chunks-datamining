/** Chunk was on 95477 **/
r.d(t, {
  x: () => c
});
var n = r(200651);
r(192379);
var i = r(385499),
  a = r(245315),
  o = r(368859),
  l = r(432957);

function c(e) {
  let t, {
    message: r,
    channel: c,
    user: s,
    compact: u,
    isRepliedMessage: p,
    hideIcon: m = !1,
    children: d
  } = e;
  return ((null == r ? void 0 : r.isSystemDM()) ? t = i.Z.Types.SYSTEM_DM : null != r && (0, o.Z)(r) ? t = (0, a.cp)(r) ? i.Z.Types.OFFICIAL : i.Z.Types.SERVER : (null == s ? void 0 : s.bot) ? t = i.Z.Types.BOT : null != c && c.isForumPost() && c.ownerId === (null == s ? void 0 : s.id) && !p && (t = i.Z.Types.ORIGINAL_POSTER), null == t) ? null : (0, n.jsx)(i.Z, {
    className: u ? l.botTagCompact : l.botTagCozy,
    type: t,
    verified: null == s ? void 0 : s.isVerifiedBot(),
    hideIcon: m,
    useRemSizes: !0,
    children: d
  })
}