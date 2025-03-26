/** Chunk was on 52272 **/
n.d(t, {
  FJ: () => s,
  HL: () => u,
  Yc: () => d,
  xe: () => c
});
var r = n(200651);
n(192379);
var i = n(481060),
  o = n(834129),
  a = n(388032),
  l = n(287493);

function s(e) {
  let {
    message: t,
    compact: i,
    onClick: s
  } = e;
  return (0, r.jsx)(o.Z, {
    icon: n(508933),
    timestamp: t.timestamp,
    compact: i,
    contentClassName: l.messageContent,
    children: a.NW.format(a.t.bYdG3d, {
      onClick: s
    })
  })
}

function c(e) {
  let {
    message: t,
    compact: i
  } = e;
  return (0, r.jsx)(o.Z, {
    icon: n(324606),
    timestamp: t.timestamp,
    compact: i,
    contentClassName: l.messageContent,
    children: a.NW.string(a.t.tu6tOT)
  })
}

function u(e) {
  let {
    message: t,
    compact: n
  } = e;
  return (0, r.jsx)(o.Z, {
    iconNode: (0, r.jsx)(i.P4T, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      className: l.alertIcon
    }),
    timestamp: t.timestamp,
    compact: n,
    contentClassName: l.messageContent,
    children: a.NW.string(a.t.vzfXqq)
  })
}

function d(e) {
  let {
    message: t,
    compact: n
  } = e;
  return (0, r.jsx)(o.Z, {
    iconNode: (0, r.jsx)(i.P4T, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      className: l.alertIcon
    }),
    timestamp: t.timestamp,
    compact: n,
    contentClassName: l.messageContent,
    children: a.NW.string(a.t["/Tfvyc"])
  })
}