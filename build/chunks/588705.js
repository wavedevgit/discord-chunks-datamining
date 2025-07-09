/** Chunk was on 86872 **/
t.d(n, {
  R: () => S,
  Z: () => A
}), t(415506);
var i = t(255367),
  l = t(73800),
  a = t(442837),
  r = t(481060),
  s = t(388905),
  o = t(686546),
  c = t(925329),
  u = t(372769),
  d = t(44609),
  m = t(47343),
  _ = t(973616),
  p = t(131704),
  x = t(598077),
  g = t(594174),
  N = t(411198),
  h = t(51144),
  E = t(981631),
  I = t(888592),
  v = t(245335),
  f = t(388032),
  j = t(782770);
let S = () => (0, i.jsxs)(l.Fragment, {
    children: [(0, i.jsx)(s.qE, {
      src: null,
      size: r.EFr.DEPRECATED_SIZE_100,
      className: j.avatar
    }), (0, i.jsx)(s.DK, {
      children: f.intl.string(f.t["3rE1Pz"])
    }), (0, i.jsx)(s.Dx, {
      className: j.inviteResolvingGuildName,
      children: f.intl.string(f.t.ZTNur6)
    })]
  }),
  C = e => {
    let {
      guild: n,
      user: t,
      application: l,
      compact: a
    } = e;
    return null != l ? (0, i.jsx)(c.Z, {
      className: j.appIcon,
      game: l,
      size: j.appIconSize
    }) : null != t ? (0, i.jsx)(s.qE, {
      src: null != t ? t.getAvatarURL(void 0, 80) : null,
      size: r.EFr.SIZE_80,
      className: a ? j.compactAvatar : j.avatar
    }) : null != n ? (0, i.jsx)(o.ZP, {
      mask: o.ZP.Masks.SQUIRCLE,
      width: 64,
      height: 64,
      className: j.guildIcon,
      children: (0, i.jsx)(s.Vj, {
        guild: n,
        size: s.Vj.Sizes.LARGER,
        animate: !0
      })
    }) : null
  },
  A = e => {
    var n;
    let t, l, o, {
        invite: c,
        disableUser: S = !1,
        error: A,
        flatActivityCount: T = !1,
        isRegister: L = !1,
        inUnclaimedFlow: P = !1
      } = e,
      {
        currentUser: b
      } = (0, a.cj)([g.default], () => ({
        currentUser: g.default.getCurrentUser()
      })),
      R = (0, d.WR)({
        location: "invite"
      }) && null != b;
    if (null == c) return null;
    let Z = null != c.guild ? N.lM(c.guild) ? c.guild : N.Qs(c.guild) : null,
      z = null != c.channel ? (0, p.jD)(c.channel) : null,
      M = null != c.target_application ? new _.ZP(c.target_application) : null,
      D = S || null == c.inviter ? null : new x.Z(c.inviter),
      k = !(null != c.approximate_member_count && c.approximate_member_count > 100 || null != Z && Z.features.has(E.oNc.COMMUNITY)) && null != D,
      O = null,
      U = !1;
    if (null != Z) O = null == D ? f.intl.string(f.t["3rE1Pz"]) : f.intl.formatToPlainString(f.t["5u47vb"], {
      username: h.ZP.getFormattedName(D)
    }), c.target_type === v.Iq.STREAM && null != c.target_user && (O = f.intl.formatToPlainString(f.t.x2L32d, {
      username: h.ZP.getFormattedName(c.target_user)
    })), c.target_type === v.Iq.EMBEDDED_APPLICATION && null != c.target_application && (O = null != D ? f.intl.formatToPlainString(f.t.UW1Cam, {
      username: h.ZP.getFormattedName(D)
    }) : f.intl.string(f.t.ENSuNz)), k && null == M && (t = (0, i.jsx)(s.Vj, {
      className: j.icon,
      guild: Z,
      size: s.Vj.Sizes.SMALL
    })), l = Z.name, null != M && (l = M.name, o = (0, i.jsxs)("div", {
      children: [(0, i.jsx)(s.DK, {
        className: j.appIn,
        children: f.intl.string(f.t["3gg9fH"])
      }), (0, i.jsxs)("div", {
        className: j.guildContainer,
        children: [(0, i.jsx)(s.Vj, {
          guild: Z,
          size: s.Vj.Sizes.SMALL
        }), (0, i.jsx)(r.Text, {
          tag: "span",
          variant: "text-lg/normal",
          color: "header-primary",
          className: j.appGuildName,
          children: Z.name
        })]
      })]
    }));
    else if (null != z) {
      if (null == D) throw Error("no inviter in group DM invite");
      let e = h.ZP.getFormattedName(D);
      null != z.name && "" !== z.name ? (O = f.intl.formatToPlainString(f.t["5u47vb"], {
        username: e
      }), l = z.name, null != z.icon && (t = (0, i.jsx)(s.MC, {
        channel: z,
        size: r.EFr.SIZE_32
      }))) : (O = f.intl.string(f.t.OsdY8P), l = e)
    } else if (null != D) {
      let e = h.ZP.getFormattedName(D, !0);
      l = f.intl.formatToPlainString(f.t["4aF92d"], {
        username: e
      }), U = !0, o = null != A ? null : (0, i.jsx)(s.DK, {
        className: j.directInviteSubTitle,
        children: L ? f.intl.format(f.t["6r4JiY"], {
          username: e
        }) : f.intl.format(f.t.Quj7HR, {
          username: e
        })
      })
    }
    return (0, i.jsxs)("div", {
      className: j.container,
      children: [(0, i.jsx)(C, {
        application: M,
        guild: Z,
        user: k ? D : null,
        compact: U
      }), null != A ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(s.DK, {
          children: f.intl.string(f.t.mDFGFh)
        }), (0, i.jsx)(s.Dx, {
          children: A
        })]
      }) : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(s.DK, {
          children: O
        }), (0, i.jsxs)(s.Dx, {
          className: j.title,
          children: [null != Z ? (0, i.jsx)(u.Z, {
            guild: Z,
            className: j.guildBadge,
            tooltipPosition: "left"
          }) : null, t, l]
        })]
      }), o, null != M || U || (null == c || null == (n = c.guild) ? void 0 : n.id) === I.fQ ? null : (0, i.jsx)(s.EJ, {
        className: j.activityCount,
        online: c.approximate_presence_count,
        total: c.approximate_member_count,
        flat: T
      }), !P && R ? (0, i.jsx)(m.R, {}) : (0, i.jsx)(s.jQ, {
        user: b
      })]
    })
  }