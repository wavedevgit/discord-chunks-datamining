/** Chunk was on 86872 **/
/** chunk id: 588705, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  R: () => S,
  Z: () => A
}), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388905 = require("./388905.jsx"),
  Chunk686546 = require("./686546.jsx"),
  Chunk925329 = require("./925329.jsx"),
  Chunk372769 = require("./372769.jsx"),
  Chunk44609 = require("./44609.js"),
  Chunk47343 = require("./47343.jsx"),
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
let S = () => (0, Chunk951288.jsxs)(Chunk647438.Fragment, {
    children: [(0, Chunk951288.jsx)(Chunk388905.qE, {
      src: null,
      size: Chunk481060.EFr.DEPRECATED_SIZE_100,
      className: Chunk620838.avatar
    }), (0, Chunk951288.jsx)(Chunk388905.DK, {
      children: Chunk388032.intl.string(Chunk388032.t["3rE1Pz"])
    }), (0, Chunk951288.jsx)(Chunk388905.Dx, {
      className: Chunk620838.inviteResolvingGuildName,
      children: Chunk388032.intl.string(Chunk388032.t.ZTNur6)
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
      src: null != t ? t.getAvatarURL(true, 80) : null,
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
        animate: true
      })
    }) : null
  },
  A = e => {
    var n;
    let t, l, o, {
        invite: c,
        disableUser: S = false,
        error: A,
        flatActivityCount: T = false,
        isRegister: L = false,
        inUnclaimedFlow: P = false
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
      k = !(null != c.approximate_member_count && c.approximate_member_count > 100 || null != Z && Z.features.has(I.oNc.COMMUNITY)) && null != D,
      O = null,
      U = false;
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
      let e = h.ZP.getFormattedName(D, true);
      l = f.intl.formatToPlainString(f.t["4aF92d"], {
        username: e
      }), U = true, o = null != A ? null : (0, i.jsx)(s.DK, {
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
      }), o, null != M || U || (null == c || null == (n = c.guild) ? true : n.id) === E.fQ ? null : (0, i.jsx)(s.EJ, {
        className: j.activityCount,
        online: c.approximate_presence_count,
        total: c.approximate_member_count,
        flat: T
      }), !P && R ? (0, i.jsx)(m.R, {}) : (0, i.jsx)(s.jQ, {
        user: b
      })]
    })
  }