/** Chunk was on 46746 **/
n.d(t, {
  Z: () => C
}), n(13667), n(390547);
var r = n(200651);
n(192379);
var l = n(120356),
  i = n.n(l),
  s = n(392711),
  o = n.n(s),
  a = n(442837),
  c = n(481060),
  d = n(565138),
  u = n(984933),
  f = n(430824),
  h = n(496675),
  m = n(771845),
  p = n(259580),
  x = n(102172),
  g = n(148381),
  _ = n(388032),
  v = n(711597),
  j = n(359026);

function b(e) {
  let {
    guildId: t,
    onClick: n
  } = e, l = (0, a.e7)([f.Z], () => f.Z.getGuild(t)), i = (0, a.e7)([u.ZP, f.Z, h.Z], () => u.ZP.getChannels(t)[u.Zb].some(e => {
    let {
      channel: t
    } = e;
    return (0, x.JL)(t, f.Z, h.Z)
  }));
  return null != l && i ? (0, r.jsxs)(c.P3F, {
    onClick: () => n(t),
    className: j.guildRow,
    children: [(0, r.jsx)(d.Z, {
      guild: l,
      size: d.Z.Sizes.SMALL,
      className: j.guildIcon
    }), (0, r.jsx)(c.Text, {
      variant: "text-md/normal",
      className: j.guildName,
      children: l.toString()
    }), (0, r.jsx)(p.Z, {
      direction: p.Z.Directions.RIGHT,
      className: j.guildArrow
    })]
  }) : null
}

function C(e) {
  let {
    onSelectGuild: t
  } = e, n = (0, a.e7)([m.ZP], () => m.ZP.getGuildFolders());
  return (0, r.jsx)(g.Z, {
    title: _.NW.string(_.t.JsqeEh),
    scrollerClassName: i()(j.guildScroller, v.marginBottom),
    children: o().flatMap(n, e => {
      let {
        guildIds: n
      } = e;
      return n.map(e => (0, r.jsx)(b, {
        guildId: e,
        onClick: t
      }, e))
    })
  })
}