/** Chunk was on 1815 **/
n.d(t, {
  Z: () => x
});
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(442837),
  o = n(481060),
  c = n(921801),
  d = n(663389),
  u = n(960412),
  m = n(151662),
  p = n(930441),
  g = n(726985),
  h = n(388032),
  f = n(45341),
  b = n(802138);

function N(e) {
  let {
    label: t,
    onChange: n,
    enabled: i,
    subLabel: s
  } = e;
  return (0, r.jsx)(o.j7V, {
    value: !!i,
    onChange: n,
    note: s,
    children: t
  })
}

function x() {
  let e = (0, l.e7)([d.Z], () => d.Z.getSubsection()),
    t = i.createRef(),
    {
      categories: n,
      initialized: s
    } = (0, l.cj)([m.Z], () => m.Z.getEmailSettings());
  i.useEffect(() => {
    if (null == s)(0, u.Y7)();
    else if (e === p.vG.toUpperCase()) {
      var n;
      null == t || null === (n = t.current) || void 0 === n || n.scrollIntoView(!0)
    }
  }, [s, t, e]);
  let x = p.M0.reduce((e, t) => e || !!n[t], !1),
    _ = {
      [p.$Z.COMMUNICATION]: g.s6.NOTIFICATIONS_EMAILS_COMMUNICATION,
      [p.$Z.SOCIAL]: g.s6.NOTIFICATIONS_EMAILS_SOCIAL,
      [p.$Z.UPDATES_AND_ANNOUNCEMENTS]: g.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES,
      [p.$Z.TIPS]: g.s6.NOTIFICATIONS_EMAILS_TIPS,
      [p.$Z.RECOMMENDATIONS_AND_EVENTS]: g.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS
    };
  return s ? (0, r.jsxs)(c.F, {
    setting: g.s6.NOTIFICATIONS_EMAILS,
    children: [(0, r.jsx)("div", {
      ref: t
    }), (0, r.jsxs)(o.hjN, {
      className: b.marginTop40,
      tag: o.RB0.H1,
      title: h.NW.string(h.t.TPchzM),
      children: [p.Od.map(e => {
        let {
          category: t,
          label: i,
          subLabel: s
        } = e, a = _[t], l = (0, r.jsx)(N, {
          label: i(),
          subLabel: s(),
          enabled: n[t],
          onChange: e => {
            (0, u.pR)(t, e)
          }
        }, i());
        return null != a ? (0, r.jsx)(c.F, {
          setting: a,
          children: l
        }, i()) : l
      }), (0, r.jsxs)(c.F, {
        setting: g.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS,
        children: [(0, r.jsx)(o.zxk, {
          className: f.marketingUnsubscribeButton,
          disabled: !x,
          look: o.iLD.LINK,
          color: o.Ttl.LINK,
          onClick: u.oc,
          children: h.NW.string(h.t.Ra9Pws)
        }), (0, r.jsx)(o.R94, {
          type: o.geA.DESCRIPTION,
          children: h.NW.string(h.t.iYjQ8f)
        }), (0, r.jsx)(o.$i$, {
          className: a()(b.marginTop40, b.marginBottom40)
        })]
      })]
    })]
  }) : null
}