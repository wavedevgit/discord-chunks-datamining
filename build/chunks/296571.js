/** Chunk was on 52272 **/
n.d(t, {
  Z: () => d
});
var r = n(200651);
n(192379);
var i = n(442837),
  a = n(481060),
  o = n(592125),
  l = n(739566),
  s = n(834129),
  c = n(388032),
  u = n(390502);

function d(e) {
  var t;
  let {
    message: n,
    compact: d,
    usernameHook: p,
    onClickThread: m,
    onClickViewThreads: f,
    onContextMenuThread: h
  } = e, g = (0, l.ZP)(n), _ = p(g), b = (0, i.e7)([o.Z], () => {
    var e;
    return o.Z.getChannel(null === (e = n.messageReference) || void 0 === e ? void 0 : e.channel_id)
  }), v = c.NW.format(c.t.cZ9Uf3, {
    actorName: g.nick,
    actorHook: _,
    threadName: null !== (t = null == b ? void 0 : b.name) && void 0 !== t ? t : n.content,
    threadOnClick: {
      onClick: m,
      onContextMenu: h
    },
    viewThreadsOnClick: f
  });
  return (0, r.jsx)(s.Z, {
    iconNode: (0, r.jsx)(a.or_, {
      size: "md",
      color: "currentColor",
      className: u.icon
    }),
    timestamp: n.timestamp,
    compact: d,
    children: v
  })
}