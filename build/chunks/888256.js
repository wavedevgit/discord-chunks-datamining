/** Chunk was on 10451 **/
n.d(t, {
  Z: () => c
}), n(266796);
var r = n(200651);
n(192379);
var i = n(481060),
  s = n(921801),
  a = n(726985),
  o = n(388032),
  l = n(607687);

function c(e) {
  let {
    className: t,
    currentUser: n,
    handleDisableAccount: c,
    handleDeleteAccount: d
  } = e, u = n.isClaimed();
  return (0, r.jsx)(s.F, {
    setting: a.s6.ACCOUNT_DISABLE_ACCOUNT,
    children: (0, r.jsxs)(i.hjN, {
      className: t,
      title: o.NW.string(o.t.ZKsIkp),
      children: [(0, r.jsx)(i.R94, {
        className: l.description,
        type: i.R94.Types.DESCRIPTION,
        children: u ? o.NW.string(o.t.TIh3Ym) : o.NW.string(o.t.czsGAw)
      }), (0, r.jsxs)("div", {
        className: l.buttonContainer,
        children: [u ? (0, r.jsx)(i.zxk, {
          className: l.disableButton,
          look: i.iLD.FILLED,
          color: i.Ttl.RED,
          size: i.PhG.SMALL,
          onClick: c,
          children: o.NW.string(o.t.jf5GGR)
        }) : null, (0, r.jsx)(s.F, {
          setting: a.s6.ACCOUNT_DELETE_ACCOUNT,
          children: (0, r.jsx)(i.zxk, {
            look: i.iLD.OUTLINED,
            color: i.Ttl.RED,
            size: i.PhG.SMALL,
            onClick: d,
            children: o.NW.string(o.t["8lQ2ra"])
          })
        })]
      })]
    })
  })
}