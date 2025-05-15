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
  x = t(601964),
  g = t(598077),
  N = t(594174),
  h = t(51144),
  E = t(981631),
  I = t(888592),
  f = t(245335),
  v = t(388032),
  j = t(782770);
let S = () => (0, i.jsxs)(l.Fragment, {
    children: [(0, i.jsx)(s.qE, {
      src: null,
      size: r.EFr.DEPRECATED_SIZE_100,
      className: j.avatar
    }), (0, i.jsx)(s.DK, {
      children: v.intl.string(v.t["3rE1Pz"])
    }), (0, i.jsx)(s.Dx, {
      className: j.inviteResolvingGuildName,
      children: v.intl.string(v.t.ZTNur6)
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
        inUnclaimedFlowExperiment: P = !1
      } = e,
      {
        currentUser: b
      } = (0, a.cj)([N.default], () => ({
        currentUser: N.default.getCurrentUser()
      })),
      R = (0, d.WR)({
        location: "invite"
      }) && null != b;
    if (null == c) return null;
    let Z = null != c.guild ? new x.ZP(c.guild) : null,
      z = null != c.channel ? (0, p.jD)(c.channel) : null,
      D = null != c.target_application ? new _.ZP(c.target_application) : null,
      M = S || null == c.inviter ? null : new g.Z(c.inviter),
      k = !(null != c.approximate_member_count && c.approximate_member_count > 100 || null != Z && Z.hasFeature(E.oNc.COMMUNITY)) && null != M,
      O = null,
      U = !1;
    if (null != Z) O = null == M ? v.intl.string(v.t["3rE1Pz"]) : v.intl.formatToPlainString(v.t["5u47vb"], {
      username: h.ZP.getFormattedName(M)
    }), c.target_type === f.Iq.STREAM && null != c.target_user && (O = v.intl.formatToPlainString(v.t.x2L32d, {
      username: h.ZP.getFormattedName(c.target_user)
    })), c.target_type === f.Iq.EMBEDDED_APPLICATION && null != c.target_application && (O = null != M ? v.intl.formatToPlainString(v.t.UW1Cam, {
      username: h.ZP.getFormattedName(M)
    }) : v.intl.string(v.t.ENSuNz)), k && null == D && (t = (0, i.jsx)(s.Vj, {
      className: j.icon,
      guild: Z,
      size: s.Vj.Sizes.SMALL
    })), l = Z.name, null != D && (l = D.name, o = (0, i.jsxs)("div", {
      children: [(0, i.jsx)(s.DK, {
        className: j.appIn,
        children: v.intl.string(v.t["3gg9fH"])
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
      if (null == M) throw Error("no inviter in group DM invite");
      let e = h.ZP.getFormattedName(M);
      null != z.name && "" !== z.name ? (O = v.intl.formatToPlainString(v.t["5u47vb"], {
        username: e
      }), l = z.name, null != z.icon && (t = (0, i.jsx)(s.MC, {
        channel: z,
        size: r.EFr.SIZE_32
      }))) : (O = v.intl.string(v.t.OsdY8P), l = e)
    } else if (null != M) {
      let e = h.ZP.getFormattedName(M, !0);
      l = v.intl.formatToPlainString(v.t["4aF92d"], {
        username: e
      }), U = !0, o = null != A ? null : (0, i.jsx)(s.DK, {
        className: j.directInviteSubTitle,
        children: L ? v.intl.format(v.t["6r4JiY"], {
          username: e
        }) : v.intl.format(v.t.Quj7HR, {
          username: e
        })
      })
    }
    return (0, i.jsxs)("div", {
      className: j.container,
      children: [(0, i.jsx)(C, {
        application: D,
        guild: Z,
        user: k ? M : null,
        compact: U
      }), null != A ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(s.DK, {
          children: v.intl.string(v.t.mDFGFh)
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
      }), o, null != D || U || (null == c || null == (n = c.guild) ? void 0 : n.id) === I.fQ ? null : (0, i.jsx)(s.EJ, {
        className: j.activityCount,
        online: c.approximate_presence_count,
        total: c.approximate_member_count,
        flat: T
      }), !P && R ? (0, i.jsx)(m.R, {}) : (0, i.jsx)(s.jQ, {
        user: b
      })]
    })
  }