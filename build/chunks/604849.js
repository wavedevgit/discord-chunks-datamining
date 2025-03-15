/** Chunk was on 88844 **/
n.d(t, {
  c: () => o
});
var r = n(442837),
  i = n(581883),
  a = n(594174),
  l = n(981312),
  u = n(667172);
let o = () => {
  let e = a.default.getCurrentUser(),
    t = (0, r.e7)([i.Z], () => {
      var e, t, n;
      return null === (n = null === (t = i.Z.settings.privacy) || void 0 === t ? void 0 : null === (e = t.inappropriateConversationWarnings) || void 0 === e ? void 0 : e.value) || void 0 === n || n
    }),
    n = (0, l.U)(),
    o = (0, u.v4)({
      location: "useSafetyAlertsSettingOrDefault"
    });
  return !!n && !!o || (n || (null == e ? void 0 : e.isStaff()) === !0) && t
}