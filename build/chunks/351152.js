/** Chunk was on 79477 **/
n.d(t, {
  Z: () => Z
}), n(13667), n(390547);
var r = n(200651);
n(192379);
var l = n(120356),
  s = n.n(l),
  i = n(392711),
  a = n.n(i),
  o = n(442837),
  c = n(481060),
  u = n(565138),
  d = n(984933),
  m = n(430824),
  p = n(496675),
  h = n(771845),
  g = n(259580),
  x = n(102172),
  v = n(148381),
  f = n(388032),
  j = n(711597),
  S = n(359026);

function N(e) {
  let {
    guildId: t,
    onClick: n
  } = e, l = (0, o.e7)([m.Z], () => m.Z.getGuild(t)), s = (0, o.e7)([d.ZP, m.Z, p.Z], () => d.ZP.getChannels(t)[d.Zb].some(e => {
    let {
      channel: t
    } = e;
    return (0, x.JL)(t, m.Z, p.Z)
  }));
  return null != l && s ? (0, r.jsxs)(c.P3F, {
    onClick: () => n(t),
    className: S.guildRow,
    children: [(0, r.jsx)(u.Z, {
      guild: l,
      size: u.Z.Sizes.SMALL,
      className: S.guildIcon
    }), (0, r.jsx)(c.Text, {
      variant: "text-md/normal",
      className: S.guildName,
      children: l.toString()
    }), (0, r.jsx)(g.Z, {
      direction: g.Z.Directions.RIGHT,
      className: S.guildArrow
    })]
  }) : null
}

function Z(e) {
  let {
    onSelectGuild: t
  } = e, n = (0, o.e7)([h.ZP], () => h.ZP.getGuildFolders());
  return (0, r.jsx)(v.Z, {
    title: f.NW.string(f.t.JsqeEh),
    scrollerClassName: s()(S.guildScroller, j.marginBottom),
    children: a().flatMap(n, e => {
      let {
        guildIds: n
      } = e;
      return n.map(e => (0, r.jsx)(N, {
        guildId: e,
        onClick: t
      }, e))
    })
  })
}