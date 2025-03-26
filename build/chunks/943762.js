/** Chunk was on 52272 **/
n.d(t, {
  K: () => c,
  r: () => u
});
var r = n(200651);
n(192379);
var i = n(481060),
  o = n(884338),
  a = n(981631),
  l = n(388032),
  s = n(60533);

function c(e) {
  let {
    activityUsers: t,
    guildId: n,
    activityText: a
  } = e;
  return (0, r.jsxs)("div", {
    className: s.wrapper,
    children: [(0, r.jsx)(o.Z, {
      guildId: n,
      users: t,
      max: 6,
      size: o.u.SIZE_16
    }), (0, r.jsxs)(i.Text, {
      variant: "text-xs/normal",
      color: "none",
      children: [t.length, " ", a]
    })]
  })
}

function u(e) {
  switch (null == e ? void 0 : e.type) {
    case a.IIU.STREAMING:
      return {
        text: l.NW.string(l.t["Jpkr/v"]), Icon: i.m3e
      };
    case a.IIU.LISTENING:
      return {
        text: l.NW.string(l.t.kUEnxM), Icon: i.RZG
      };
    default:
      return {
        text: l.NW.string(l.t.BMTj29), Icon: i.iWm
      }
  }
}