/** Chunk was on 58023 **/
n.d(t, {
  W: () => m
});
var r = n(200651),
  l = n(192379),
  i = n(481060),
  a = n(479531),
  s = n(434404),
  o = n(496675),
  c = n(981631),
  u = n(388032),
  d = n(821022);

function m(e) {
  let {
    guild: t,
    error: n,
    onClose: m
  } = e, h = t.id, g = l.useCallback(() => {
    m(), s.Z.open(h, c.pNK.INSTANT_INVITES)
  }, [h, m]), x = l.useCallback(e => (0, r.jsx)(i.P3F, {
    className: d.errorLink,
    onClick: g,
    children: (0, r.jsx)(i.Text, {
      variant: "text-xs/normal",
      color: "text-link",
      tag: "span",
      children: e
    })
  }), [g]), p = l.useCallback(e => (0, r.jsx)(i.eee, {
    href: c.EYA.INVITES_HELP,
    target: "_blank",
    children: (0, r.jsx)(i.Text, {
      variant: "text-xs/normal",
      color: "text-link",
      tag: "span",
      children: e
    })
  }), []), f = n instanceof a.Z ? n.code !== c.evJ.TOO_MANY_INVITES ? n.getAnyErrorMessage() : o.Z.can(c.Plq.MANAGE_GUILD, t) ? u.NW.format(u.t["H/RUY2"], {
    inviteListHook: x,
    inviteHelpHook: p
  }) : u.NW.string(u.t["/FxH6O"]) : "message" in n ? n.message : u.NW.string(u.t.eAn6z8);
  return (0, r.jsx)(i.Text, {
    className: d.errorMessage,
    variant: "text-xs/normal",
    color: "text-danger",
    children: f
  })
}