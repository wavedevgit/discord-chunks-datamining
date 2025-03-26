/** Chunk was on 52272 **/
n.d(t, {
  Z: () => u
});
var r = n(200651),
  i = n(192379),
  o = n(442837),
  a = n(481060),
  l = n(468706),
  s = n(774863),
  c = n(388032);

function u(e) {
  let {
    messageId: t,
    channelId: n
  } = e, u = (0, o.e7)([s.Z], () => s.Z.canSubmitFpReport(t)), d = i.useCallback(() => {
    (0, l.e)(n, t)
  }, [n, t]);
  return (0, r.jsx)(a.zxk, {
    size: a.zxk.Sizes.MEDIUM,
    color: a.zxk.Colors.PRIMARY,
    onClick: d,
    disabled: !u,
    children: c.NW.string(c.t["4q1ElZ"])
  })
}