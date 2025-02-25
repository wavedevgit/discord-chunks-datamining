/** Chunk was on 93259 **/
n.d(t, {
  dx: () => l
}), n(610138), n(216116), n(78328), n(815648), n(47120);
var a = n(749681);
n(703656), n(34674), n(132871);
var o = n(272242);
n(981631);
var r = n(49898),
  i = n(979007);
let l = e => {
  let {
    guildId: t,
    applicationId: n,
    applicationSection: l,
    entrypoint: c,
    skuId: s,
    restorePreviousView: d
  } = e, _ = null == n ? void 0 : l === o.c.STORE ? i.GlobalDiscoveryAppsSections.STORE : i.GlobalDiscoveryAppsSections.ABOUT;
  return (0, a.transitionToGlobalDiscovery)({
    tab: r.GlobalDiscoveryTab.APPS,
    applicationId: n,
    section: _,
    skuId: _ === i.GlobalDiscoveryAppsSections.STORE ? s : void 0,
    newSessionState: {
      guildId: null != t ? t : null,
      entrypoint: c,
      restorePreviousView: d
    }
  })
}