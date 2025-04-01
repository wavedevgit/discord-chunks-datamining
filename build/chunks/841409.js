/** Chunk was on 13323 **/
n.d(t, {
  Z: () => c
});
var r = n(399606),
  i = n(626135),
  s = n(260722),
  a = n(914788),
  o = n(292352),
  l = n(981631);
let c = () => ({
  selectedTab: (0, r.e7)([a.Z], () => a.Z.getSelectedTab()),
  handleTabChange: e => {
    s.ZP.selectTab(e), i.default.track(l.rMx.FAMILY_CENTER_ACTION, {
      action: o.YC.TabChange,
      tab: e
    })
  }
})