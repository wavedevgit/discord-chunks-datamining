/** Chunk was on 86872 **/
/** chunk id: 588705, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  R: () => j,
  Z: () => C
}), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388905 = require("./388905.jsx"),
  Chunk686546 = require("./686546.jsx"),
  Chunk925329 = require("./925329.jsx"),
  Chunk372769 = require("./372769.jsx"),
  Chunk420186 = require("./420186.jsx"),
  Chunk973616 = require("./973616.js"),
  Chunk131704 = require("./131704.js"),
  Chunk598077 = require("./598077.js"),
  Chunk594174 = require("./594174.js"),
  Chunk411198 = require("./411198.js"),
  Chunk51144 = require("./51144.js"),
  Chunk981631 = require("./981631.js"),
  Chunk888592 = require("./888592.js"),
  Chunk245335 = require("./245335.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk620838 = require("./620838.js");
let j = () => (0, Chunk951288.jsxs)(Chunk647438.Fragment, {
    children: [(0, Chunk951288.jsx)(Chunk388905.qE, {
      src: null,
      size: Chunk481060.EFr.DEPRECATED_SIZE_100,
      className: Chunk620838.avatar
    }), (0, Chunk951288.jsx)(Chunk388905.DK, {
      children: Chunk388032.intl.string(Chunk388032.t["3rE1P8"])
    }), (0, Chunk951288.jsx)(Chunk388905.Dx, {
      className: Chunk620838.inviteResolvingGuildName,
      children: Chunk388032.intl.string(Chunk388032.t.ZTNur7)
    })]
  }),
  S = e => {
    let {
      guild: n,
      user: t,
      application: l,
      compact: a
    } = e;
    return null != l ? (0, i.jsx)(c.Z, {
      className: v.appIcon,
      game: l,
      size: v.appIconSize
    }) : null != t ? (0, i.jsx)(s.qE, {
      src: null != t ? t.getAvatarURL(true, 80) : null,
      size: r.EFr.SIZE_80,
      className: a ? v.compactAvatar : v.avatar
    }) : null != n ? (0, i.jsx)(o.ZP, {
      mask: o.ZP.Masks.SQUIRCLE,
      width: 64,
      height: 64,
      className: v.guildIcon,
      children: (0, i.jsx)(s.Vj, {
        guild: n,
        size: s.Vj.Sizes.LARGER,
        animate: true
      })
    }) : null
  },
  C = e => {
    var n;
    let t, l, o, {
        invite: c,
        disableUser: j = false,
        error: C,
        flatActivityCount: T = false,
        isRegister: A = false,
        inUnclaimedFlow: L = false
      } = e,
      {
        currentUser: P
      } = (0, a.cj)([x.default], () => ({
        currentUser: x.default.getCurrentUser()
      }));
    if (null == c) return null;
    let b = null != c.guild ? g.lM(c.guild) ? c.guild : g.Qs(c.guild) : null,
      R = null != c.channel ? (0, p.jD)(c.channel) : null,
      Z = null != c.target_application ? new m.ZP(c.target_application) : null,
      M = j || null == c.inviter ? null : new _.Z(c.inviter),
      z = !(null != c.approximate_member_count && c.approximate_member_count > 100 || null != b && b.features.has(h.GuildFeatures.COMMUNITY)) && null != M,
      k = null,
      D = false;
    if (null != b) k = null == M ? I.intl.string(I.t["3rE1P8"]) : I.intl.formatToPlainString(I.t["5u47va"], {
      username: N.ZP.getFormattedName(M)
    }), c.target_type === E.Iq.STREAM && null != c.target_user && (k = I.intl.formatToPlainString(I.t.x2L32Q, {
      username: N.ZP.getFormattedName(c.target_user)
    })), c.target_type === E.Iq.EMBEDDED_APPLICATION && null != c.target_application && (k = null != M ? I.intl.formatToPlainString(I.t.UW1Cav, {
      username: N.ZP.getFormattedName(M)
    }) : I.intl.string(I.t.ENSuN3)), z && null == Z && (t = (0, i.jsx)(s.Vj, {
      className: v.icon,
      guild: b,
      size: s.Vj.Sizes.SMALL
    })), l = b.name, null != Z && (l = Z.name, o = (0, i.jsxs)("div", {
      children: [(0, i.jsx)(s.DK, {
        className: v.appIn,
        children: I.intl.string(I.t["3gg9fF"])
      }), (0, i.jsxs)("div", {
        className: v.guildContainer,
        children: [(0, i.jsx)(s.Vj, {
          guild: b,
          size: s.Vj.Sizes.SMALL
        }), (0, i.jsx)(r.Text, {
          tag: "span",
          variant: "text-lg/normal",
          color: "header-primary",
          className: v.appGuildName,
          children: b.name
        })]
      })]
    }));
    else if (null != R) {
      if (null == M) throw Error("no inviter in group DM invite");
      let e = N.ZP.getFormattedName(M);
      null != R.name && "" !== R.name ? (k = I.intl.formatToPlainString(I.t["5u47va"], {
        username: e
      }), l = R.name, null != R.icon && (t = (0, i.jsx)(s.MC, {
        channel: R,
        size: r.EFr.SIZE_32
      }))) : (k = I.intl.string(I.t.OsdY8B), l = e)
    } else if (null != M) {
      let e = N.ZP.getFormattedName(M, true);
      l = I.intl.formatToPlainString(I.t["4aF92R"], {
        username: e
      }), D = true, o = null != C ? null : (0, i.jsx)(s.DK, {
        className: v.directInviteSubTitle,
        children: A ? I.intl.format(I.t["6r4JiR"], {
          username: e
        }) : I.intl.format(I.t.Quj7HX, {
          username: e
        })
      })
    }
    return (0, i.jsxs)("div", {
      className: v.container,
      children: [(0, i.jsx)(S, {
        application: Z,
        guild: b,
        user: z ? M : null,
        compact: D
      }), null != C ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(s.DK, {
          children: I.intl.string(I.t.mDFGFj)
        }), (0, i.jsx)(s.Dx, {
          children: C
        })]
      }) : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(s.DK, {
          children: k
        }), (0, i.jsxs)(s.Dx, {
          className: v.title,
          children: [null != b ? (0, i.jsx)(u.Z, {
            guild: b,
            className: v.guildBadge,
            tooltipPosition: "left"
          }) : null, t, l]
        })]
      }), o, null != Z || D || (null == c || null == (n = c.guild) ? true : n.id) === f.fQ ? null : (0, i.jsx)(s.EJ, {
        className: v.activityCount,
        online: c.approximate_presence_count,
        total: c.approximate_member_count,
        flat: T
      }), L || null == P ? (0, i.jsx)(s.jQ, {
        user: P
      }) : (0, i.jsx)(d.R, {})]
    })
  }