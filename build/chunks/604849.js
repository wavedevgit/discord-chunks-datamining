/** Chunk was on 81281 **/
n.d(e, {
  c: () => o
});
var r = n(442837),
  i = n(581883),
  a = n(594174),
  l = n(981312),
  u = n(667172);
let o = () => {
  let t = a.default.getCurrentUser(),
    e = (0, r.e7)([i.Z], () => {
      var t, e, n;
      return null === (n = null === (e = i.Z.settings.privacy) || void 0 === e ? void 0 : null === (t = e.inappropriateConversationWarnings) || void 0 === t ? void 0 : t.value) || void 0 === n || n
    }),
    n = (0, l.U)(),
    o = (0, u.v4)({
      location: "useSafetyAlertsSettingOrDefault"
    });
  return !!n && !!o || (n || (null == t ? void 0 : t.isStaff()) === !0) && e
}