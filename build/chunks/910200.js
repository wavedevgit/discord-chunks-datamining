/** Chunk was on 84335 **/
n.d(t, {
  N3: () => h,
  Z7: () => b,
  ZP: () => p
}), n(266796);
var r = n(200651);
n(192379);
var l = n(120356),
  i = n.n(l),
  a = n(692547),
  o = n(481060),
  c = n(114487),
  s = n(686546),
  u = n(813197),
  d = n(15210),
  m = n(464647),
  v = n(43542),
  f = n(723776),
  j = n(686369),
  x = n(22858);

function b(e) {
  let {
    profile: t,
    className: n
  } = e, l = function(e, t) {
    let n = (0, j.q)(e, t);
    return null != e.brandColorPrimary ? e.brandColorPrimary : n
  }(t, (0, o.dQu)(a.Z.colors.BG_BASE_TERTIARY).hex()), c = (0, j.d)(l, t);
  return (0, r.jsx)("div", {
    className: i()(n, x.banner),
    style: {
      background: c
    }
  })
}

function h(e) {
  let {
    profile: t,
    onIconChange: n
  } = e;
  return null == n ? (0, r.jsx)("div", {
    className: x.avatarContainer,
    children: (0, r.jsx)(s.ZP, {
      mask: s.QS.CLAN_ICON,
      width: 70,
      height: 70,
      children: (0, r.jsx)("div", {
        className: x.avatarWrapper,
        children: (0, r.jsx)(c.b, {
          guildId: t.id,
          guildName: t.name,
          guildIcon: t.icon,
          iconSize: 64
        })
      })
    })
  }) : (0, r.jsx)("div", {
    className: x.avatarContainer,
    children: (0, r.jsx)(o.tEY, {
      within: !0,
      children: (0, r.jsx)(s.ZP, {
        mask: s.QS.CLAN_ICON,
        width: 70,
        height: 70,
        children: (0, r.jsxs)("div", {
          className: i()(x.avatarWrapper, x.clickable),
          children: [(0, r.jsx)(c.b, {
            guildId: t.id,
            guildName: t.name,
            guildIcon: t.icon,
            iconSize: 64
          }), (0, r.jsx)("div", {
            className: x.overlay
          }), (0, r.jsx)(o.vdY, {
            size: "custom",
            className: x.overlayIcon,
            width: 20,
            height: 20,
            color: "white"
          }), (0, r.jsx)(u.ZP, {
            tabIndex: 0,
            onChange: n
          })]
        })
      })
    })
  })
}

function p(e) {
  let {
    profile: t,
    onIconChange: n,
    className: l,
    disableCTA: a,
    CTAOverride: c
  } = e, s = null;
  return null != c ? s = c : a || (s = (0, r.jsx)(d.Z, {
    profile: t
  })), (0, r.jsxs)("div", {
    className: i()(x.container, l),
    children: [(0, r.jsx)(b, {
      profile: t
    }), (0, r.jsx)(h, {
      onIconChange: n,
      profile: t
    }), (0, r.jsx)(v.Z, {
      profile: t
    }), (0, r.jsxs)("div", {
      className: x.body,
      children: [(0, r.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: t.description
      }), (0, r.jsx)(m.Z, {
        profile: t
      }), (0, r.jsx)(f.F, {
        profile: t
      })]
    }), null != s && (0, r.jsx)("div", {
      className: x.buttonContainer,
      children: s
    })]
  })
}