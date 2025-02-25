/** Chunk was on 79477 **/
n.d(t, {
  Z: () => Z
}), n(13667), n(390547);
var l = n(200651);
n(192379);
var r = n(120356),
  s = n.n(r),
  i = n(392711),
  a = n.n(i),
  o = n(442837),
  c = n(481060),
  u = n(565138),
  d = n(984933),
  m = n(430824),
  g = n(496675),
  h = n(771845),
  x = n(259580),
  p = n(102172),
  v = n(148381),
  f = n(388032),
  j = n(382840),
  S = n(902187);

function N(e) {
  let {
    guildId: t,
    onClick: n
  } = e, r = (0, o.e7)([m.Z], () => m.Z.getGuild(t)), s = (0, o.e7)([d.ZP, m.Z, g.Z], () => d.ZP.getChannels(t)[d.Zb].some(e => {
    let {
      channel: t
    } = e;
    return (0, p.JL)(t, m.Z, g.Z)
  }));
  return null != r && s ? (0, l.jsxs)(c.P3F, {
    onClick: () => n(t),
    className: S.guildRow,
    children: [(0, l.jsx)(u.Z, {
      guild: r,
      size: u.Z.Sizes.SMALL,
      className: S.guildIcon
    }), (0, l.jsx)(c.Text, {
      variant: "text-md/normal",
      className: S.guildName,
      children: r.toString()
    }), (0, l.jsx)(x.Z, {
      direction: x.Z.Directions.RIGHT,
      className: S.guildArrow
    })]
  }) : null
}

function Z(e) {
  let {
    onSelectGuild: t
  } = e, n = (0, o.e7)([h.ZP], () => h.ZP.getGuildFolders());
  return (0, l.jsx)(v.Z, {
    title: f.NW.string(f.t.JsqeEh),
    scrollerClassName: s()(S.guildScroller, j.marginBottom),
    children: a().flatMap(n, e => {
      let {
        guildIds: n
      } = e;
      return n.map(e => (0, l.jsx)(N, {
        guildId: e,
        onClick: t
      }, e))
    })
  })
}