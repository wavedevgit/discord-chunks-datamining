/** Chunk was on 48812 **/
n.d(t, {
  b: () => c,
  x: () => s
});
var r = n(255367);
n(73800);
var i = n(385499),
  l = n(245315),
  o = n(368859),
  a = n(848697);

function c(e) {
  let t, {
    message: n,
    channel: r,
    user: a,
    isRepliedMessage: c
  } = e;
  return (null == n ? void 0 : n.isSystemDM()) ? t = i.Z.Types.SYSTEM_DM : null != n && (0, o.Z)(n) ? t = (0, l.cp)(n) ? i.Z.Types.OFFICIAL : i.Z.Types.SERVER : (null == a ? void 0 : a.bot) ? t = i.Z.Types.BOT : null != r && r.isForumPost() && r.ownerId === (null == a ? void 0 : a.id) && !c && (t = i.Z.Types.ORIGINAL_POSTER), t
}

function s(e) {
  let {
    message: t,
    channel: n,
    user: l,
    compact: o,
    isRepliedMessage: s,
    hideIcon: u = !1,
    children: d
  } = e, _ = c({
    message: t,
    channel: n,
    user: l,
    compact: o,
    isRepliedMessage: s,
    hideIcon: u,
    children: d
  });
  return null == _ ? null : (0, r.jsx)(i.Z, {
    className: o ? a.botTagCompact : a.botTagCozy,
    type: _,
    verified: null == l ? void 0 : l.isVerifiedBot(),
    hideIcon: u,
    useRemSizes: !0,
    children: d
  })
}