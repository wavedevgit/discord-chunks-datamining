/** Chunk was on 86872 **/
/** chunk id: 588705, original params: e,l,n (module,exports,require) **/
require.d(exports, {
  R: () => T,
  Z: () => L
}), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk664926 = require("./664926.jsx"),
  Chunk388905 = require("./388905.jsx"),
  Chunk686546 = require("./686546.jsx"),
  Chunk925329 = require("./925329.jsx"),
  Chunk372769 = require("./372769.jsx"),
  Chunk420186 = require("./420186.jsx"),
  Chunk254887 = require("./254887.jsx"),
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
  Chunk725194 = require("./725194.js");
let T = () => (0, Chunk54381.jsxs)(Chunk473749.Fragment, {
    children: [(0, Chunk54381.jsx)(Chunk388905.qE, {
      src: null,
      size: Chunk481060.EFr.DEPRECATED_SIZE_100,
      className: Chunk725194.avatar
    }), (0, Chunk54381.jsx)(Chunk388905.DK, {
      children: Chunk388032.intl.string(Chunk388032.t["3rE1P8"])
    }), (0, Chunk54381.jsx)(Chunk388905.Dx, {
      className: Chunk725194.inviteResolvingGuildName,
      children: Chunk388032.intl.string(Chunk388032.t.ZTNur7)
    })]
  }),
  P = e => {
    let {
      guild: l,
      user: n,
      application: i,
      compact: a
    } = e;
    return null != i ? (0, t.jsx)(d.Z, {
      className: S.appIcon,
      game: i,
      size: S.appIconSize
    }) : null != n ? (0, t.jsx)(u.qE, {
      src: null != n ? n.getAvatarURL(true, 80) : null,
      size: r.EFr.SIZE_80,
      className: a ? true : S.avatar
    }) : null != l ? (0, t.jsx)(o.ZP, {
      mask: o.ZP.Masks.SQUIRCLE,
      width: 64,
      height: 64,
      className: S.guildIcon,
      children: (0, t.jsx)(u.Vj, {
        guild: l,
        size: u.Vj.Sizes.LARGER,
        animate: true
      })
    }) : null
  },
  C = e => (0, t.jsx)(r.Text, {
    tag: "span",
    className: e.className,
    variant: "text-sm/medium",
    color: "text-subtle",
    children: e.children
  }),
  L = e => {
    var l;
    let n, i, o, {
        invite: d,
        disableUser: T = false,
        error: L,
        flatActivityCount: Z = false,
        isRegister: M = false,
        inUnclaimedFlow: A = false,
        friendMemberIds: R = [],
        showInvitedByHeader: D = true
      } = e,
      {
        currentUser: k
      } = (0, a.cj)([h.default], () => ({
        currentUser: h.default.getCurrentUser()
      }));
    if (null == d) return null;
    let O = null != R && R.length > 0,
      b = null != d.guild ? E.lM(d.guild) ? d.guild : E.Qs(d.guild) : null,
      F = null != d.channel ? (0, v.jD)(d.channel) : null,
      U = null != d.target_application ? new g.ZP(d.target_application) : null,
      z = T || null == d.inviter ? null : new j.Z(d.inviter),
      y = !(null != d.approximate_member_count && d.approximate_member_count > 100 || null != b && b.features.has(_.GuildFeatures.COMMUNITY)) && null != z,
      V = null,
      w = false;
    if (null != b) D && (V = null == z ? f.intl.string(f.t["3rE1P8"]) : f.intl.formatToPlainString(f.t["5u47va"], {
      username: p.ZP.getFormattedName(z)
    }), d.target_type === N.Iq.STREAM && null != d.target_user && (V = f.intl.formatToPlainString(f.t.x2L32Q, {
      username: p.ZP.getFormattedName(d.target_user)
    })), d.target_type === N.Iq.EMBEDDED_APPLICATION && null != d.target_application && (V = null != z ? f.intl.formatToPlainString(f.t.UW1Cav, {
      username: p.ZP.getFormattedName(z)
    }) : f.intl.string(f.t.ENSuN3))), y && null == U && (n = (0, t.jsx)(u.Vj, {
      className: S.icon,
      guild: b,
      size: u.Vj.Sizes.SMALL
    })), i = b.name, null != U && (i = U.name, o = (0, t.jsxs)("div", {
      children: [(0, t.jsx)(u.DK, {
        className: S.appIn,
        children: f.intl.string(f.t["3gg9fF"])
      }), (0, t.jsxs)("div", {
        className: S.guildContainer,
        children: [(0, t.jsx)(u.Vj, {
          guild: b,
          size: u.Vj.Sizes.SMALL
        }), (0, t.jsx)(r.Text, {
          tag: "span",
          variant: "text-lg/normal",
          color: "text-strong",
          className: S.appGuildName,
          children: b.name
        })]
      })]
    }));
    else if (null != F) {
      if (null == z) throw Error("no inviter in group DM invite");
      let e = p.ZP.getFormattedName(z);
      null != F.name && "" !== F.name ? (V = f.intl.formatToPlainString(f.t["5u47va"], {
        username: e
      }), i = F.name, null != F.icon && (n = (0, t.jsx)(u.MC, {
        channel: F,
        size: r.EFr.SIZE_32
      }))) : (V = f.intl.string(f.t.OsdY8B), i = e)
    } else if (null != z) {
      let e = p.ZP.getFormattedName(z, true);
      i = f.intl.formatToPlainString(f.t["4aF92R"], {
        username: e
      }), w = true, o = null != L ? null : (0, t.jsx)(u.DK, {
        className: S.directInviteSubTitle,
        children: M ? f.intl.format(f.t["6r4JiR"], {
          username: e
        }) : f.intl.format(f.t.Quj7HX, {
          username: e
        })
      })
    }
    return (0, t.jsxs)(r.Kqy, {
      direction: "vertical",
      gap: O ? 16 : 8,
      className: S.container,
      justify: "center",
      align: "center",
      children: [(0, t.jsx)(P, {
        application: U,
        guild: b,
        user: y ? z : null,
        compact: w
      }), null != L ? (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)(u.DK, {
          children: f.intl.string(f.t.mDFGFj)
        }), (0, t.jsx)(u.Dx, {
          children: L
        })]
      }) : (0, t.jsxs)(t.Fragment, {
        children: [null != V ? (0, t.jsx)(u.DK, {
          children: V
        }) : null, (0, t.jsxs)(u.Dx, {
          className: S.title,
          children: [null != b ? (0, t.jsx)(c.Z, {
            guild: b,
            className: S.guildBadge,
            tooltipPosition: "left"
          }) : null, n, i]
        })]
      }), o, (0, t.jsxs)(r.Kqy, {
        direction: "vertical",
        gap: O ? 16 : 32,
        children: [(0, t.jsxs)(r.Kqy, {
          direction: "vertical",
          gap: 8,
          children: [null != U || w || (null == d || null == (l = d.guild) ? true : l.id) === I.fQ ? null : (0, t.jsx)(u.EJ, {
            className: S.activityCount,
            online: d.approximate_presence_count,
            total: d.approximate_member_count,
            flat: Z,
            renderText: O ? C : true
          }), O && (0, t.jsx)(s.Z, {
            friendMemberIds: R
          })]
        }), (0, t.jsx)(x.Z, {
          guild: b,
          roles: d.roles,
          className: S.rolesList
        }), A || null == k ? (0, t.jsx)(u.jQ, {
          user: k
        }) : (0, t.jsx)(m.R, {})]
      })]
    })
  }