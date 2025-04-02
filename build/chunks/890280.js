/** Chunk was on 35755 **/
n.d(t, {
  Z: () => a
});
var i = n(192379),
  r = n(442837),
  l = n(110924),
  o = n(317381);

function a(e) {
  let {
    applicationId: t,
    context: n,
    launchingComponentId: a,
    onSubmissionComplete: c
  } = e, s = (0, r.e7)([o.ZP], () => o.ZP.getLaunchState(t, "channel" === n.type ? n.channel.id : void 0)), d = null != s && s.isLaunching && s.componentId === a, u = (0, l.Z)(d);
  return i.useEffect(() => {
    !d && u && (null == c || c())
  }, [d, u, c]), {
    submitting: d,
    wasSubmitting: u
  }
}