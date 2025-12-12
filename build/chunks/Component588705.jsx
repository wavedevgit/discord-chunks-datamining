/** Chunk was on 86872 **/
/** chunk id: 588705, original params: e,l,n (module,exports,require) **/
require.d(exports, {
  R: () => S,
  Z: () => C
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
let S = () => (0, Chunk54381.jsxs)(Chunk473749.Fragment, {
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
  T = e => {
    let {
      guild: l,
      user: n,
      application: i,
      compact: a
    } = e;
    return null != i ? (0, t.jsx)(o.Z, {
      className: f.appIcon,
      game: i,
      size: f.appIconSize
    }) : null != n ? (0, t.jsx)(u.qE, {
      src: null != n ? n.getAvatarURL(true, 80) : null,
      size: r.EFr.SIZE_80,
      className: a ? true : f.avatar
    }) : null != l ? (0, t.jsx)(d.ZP, {
      mask: d.ZP.Masks.SQUIRCLE,
      width: 64,
      height: 64,
      className: f.guildIcon,
      children: (0, t.jsx)(u.Vj, {
        guild: l,
        size: u.Vj.Sizes.LARGER,
        animate: true
      })
    }) : null
  },
  P = e => (0, t.jsx)(r.Text, {
    tag: "span",
    className: e.className,
    variant: "text-sm/medium",
    color: "text-subtle",
    children: e.children
  }),
  C = e => {
    var l;
    let n, i, d, {
        invite: o,
        disableUser: S = false,
        error: C,
        flatActivityCount: L = false,
        isRegister: Z = false,
        inUnclaimedFlow: M = false,
        friendMemberIds: A = [],
        showInvitedByHeader: R = true
      } = e,
      {
        currentUser: D
      } = (0, a.cj)([h.default], () => ({
        currentUser: h.default.getCurrentUser()
      }));
    if (null == o) return null;
    let k = null != A && A.length > 0,
      O = null != o.guild ? j.lM(o.guild) ? o.guild : j.Qs(o.guild) : null,
      b = null != o.channel ? (0, g.jD)(o.channel) : null,
      F = null != o.target_application ? new x.ZP(o.target_application) : null,
      U = S || null == o.inviter ? null : new v.Z(o.inviter),
      z = !(null != o.approximate_member_count && o.approximate_member_count > 100 || null != O && O.features.has(p.GuildFeatures.COMMUNITY)) && null != U,
      y = null,
      V = false;
    if (null != O) R && (y = null == U ? N.intl.string(N.t["3rE1P8"]) : N.intl.formatToPlainString(N.t["5u47va"], {
      username: E.ZP.getFormattedName(U)
    }), o.target_type === I.Iq.STREAM && null != o.target_user && (y = N.intl.formatToPlainString(N.t.x2L32Q, {
      username: E.ZP.getFormattedName(o.target_user)
    })), o.target_type === I.Iq.EMBEDDED_APPLICATION && null != o.target_application && (y = null != U ? N.intl.formatToPlainString(N.t.UW1Cav, {
      username: E.ZP.getFormattedName(U)
    }) : N.intl.string(N.t.ENSuN3))), z && null == F && (n = (0, t.jsx)(u.Vj, {
      className: f.icon,
      guild: O,
      size: u.Vj.Sizes.SMALL
    })), i = O.name, null != F && (i = F.name, d = (0, t.jsxs)("div", {
      children: [(0, t.jsx)(u.DK, {
        className: f.appIn,
        children: N.intl.string(N.t["3gg9fF"])
      }), (0, t.jsxs)("div", {
        className: f.guildContainer,
        children: [(0, t.jsx)(u.Vj, {
          guild: O,
          size: u.Vj.Sizes.SMALL
        }), (0, t.jsx)(r.Text, {
          tag: "span",
          variant: "text-lg/normal",
          color: "text-strong",
          className: f.appGuildName,
          children: O.name
        })]
      })]
    }));
    else if (null != b) {
      if (null == U) throw Error("no inviter in group DM invite");
      let e = E.ZP.getFormattedName(U);
      null != b.name && "" !== b.name ? (y = N.intl.formatToPlainString(N.t["5u47va"], {
        username: e
      }), i = b.name, null != b.icon && (n = (0, t.jsx)(u.MC, {
        channel: b,
        size: r.EFr.SIZE_32
      }))) : (y = N.intl.string(N.t.OsdY8B), i = e)
    } else if (null != U) {
      let e = E.ZP.getFormattedName(U, true);
      i = N.intl.formatToPlainString(N.t["4aF92R"], {
        username: e
      }), V = true, d = null != C ? null : (0, t.jsx)(u.DK, {
        className: f.directInviteSubTitle,
        children: Z ? N.intl.format(N.t["6r4JiR"], {
          username: e
        }) : N.intl.format(N.t.Quj7HX, {
          username: e
        })
      })
    }
    return (0, t.jsxs)(r.Kqy, {
      direction: "vertical",
      gap: k ? 16 : 8,
      className: f.container,
      justify: "center",
      align: "center",
      children: [(0, t.jsx)(T, {
        application: F,
        guild: O,
        user: z ? U : null,
        compact: V
      }), null != C ? (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)(u.DK, {
          children: N.intl.string(N.t.mDFGFj)
        }), (0, t.jsx)(u.Dx, {
          children: C
        })]
      }) : (0, t.jsxs)(t.Fragment, {
        children: [null != y ? (0, t.jsx)(u.DK, {
          children: y
        }) : null, (0, t.jsxs)(u.Dx, {
          className: f.title,
          children: [null != O ? (0, t.jsx)(c.Z, {
            guild: O,
            className: f.guildBadge,
            tooltipPosition: "left"
          }) : null, n, i]
        })]
      }), d, (0, t.jsxs)(r.Kqy, {
        direction: "vertical",
        gap: k ? 16 : 32,
        children: [(0, t.jsxs)(r.Kqy, {
          direction: "vertical",
          gap: 8,
          children: [null != F || V || (null == o || null == (l = o.guild) ? true : l.id) === _.fQ ? null : (0, t.jsx)(u.EJ, {
            className: f.activityCount,
            online: o.approximate_presence_count,
            total: o.approximate_member_count,
            flat: L,
            renderText: k ? P : true
          }), k && (0, t.jsx)(s.Z, {
            friendMemberIds: A
          })]
        }), M || null == D ? (0, t.jsx)(u.jQ, {
          user: D
        }) : (0, t.jsx)(m.R, {})]
      })]
    })
  }