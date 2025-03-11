/** Chunk was on 56826 **/
t.d(e, {
  x: () => a
});
var i = t(442837),
  r = t(594174),
  l = t(359119),
  s = t(237292),
  d = t(13279);
let a = n => {
  let e = (0, s.y0)({
      location: "context-menu-item"
    }),
    t = (0, i.e7)([r.default], () => r.default.getCurrentUser()),
    a = (0, d.z)(n.id, "context-menu-item");
  return (null == t ? void 0 : t.isStaff()) === !0 && e && n.isDM() ? {
    isTier1: (null == a ? void 0 : a.type) === l.pj.INAPPROPRIATE_CONVERSATION_TIER_1,
    isTier2: (null == a ? void 0 : a.type) === l.pj.INAPPROPRIATE_CONVERSATION_TIER_2
  } : null
}