/** Chunk was on 34061 **/
/** chunk id: 588705, original params: e,l,n (module,exports,require) **/
require.d(exports, {
  R: () => P,
  Z: () => T
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
  Chunk620838 = require("./620838.js");
let P = () => (0, Chunk54381.jsxs)(Chunk473749.Fragment, {
    children: [(0, Chunk54381.jsx)(Chunk388905.qE, {
      src: null,
      size: Chunk481060.EFr.DEPRECATED_SIZE_100,
      className: Chunk620838.avatar
    }), (0, Chunk54381.jsx)(Chunk388905.DK, {
      children: Chunk388032.intl.string(Chunk388032.t["3rE1P8"])
    }), (0, Chunk54381.jsx)(Chunk388905.Dx, {
      className: Chunk620838.inviteResolvingGuildName,
      children: Chunk388032.intl.string(Chunk388032.t.ZTNur7)
    })]
  }),
  S = e => {
    let {
      guild: l,
      user: n,
      application: i,
      compact: a
    } = e;
    return null != i ? (0, t.jsx)(d.Z, {
      className: Z.appIcon,
      game: i,
      size: Z.appIconSize
    }) : null != n ? (0, t.jsx)(u.qE, {
      src: null != n ? n.getAvatarURL(true, 80) : null,
      size: r.EFr.SIZE_80,
      className: a ? true : Z.avatar
    }) : null != l ? (0, t.jsx)(c.ZP, {
      mask: c.ZP.Masks.SQUIRCLE,
      width: 64,
      height: 64,
      className: Z.guildIcon,
      children: (0, t.jsx)(u.Vj, {
        guild: l,
        size: u.Vj.Sizes.LARGER,
        animate: true
      })
    }) : null
  },
  I = e => (0, t.jsx)(r.Text, {
    tag: "span",
    className: e.className,
    variant: "text-sm/medium",
    color: "text-subtle",
    children: e.children
  }),
  T = e => {
    var l;
    let n, i, c, {
        invite: d,
        disableUser: P = false,
        error: T,
        flatActivityCount: C = false,
        isRegister: D = false,
        inUnclaimedFlow: F = false,
        friendMemberIds: b = [],
        showInvitedByHeader: k = true
      } = e,
      {
        currentUser: y
      } = (0, a.cj)([j.default], () => ({
        currentUser: j.default.getCurrentUser()
      }));
    if (null == d) return null;
    let z = null != b && b.length > 0,
      R = null != d.guild ? p.lM(d.guild) ? d.guild : p.Qs(d.guild) : null,
      M = null != d.channel ? (0, g.jD)(d.channel) : null,
      w = null != d.target_application ? new x.ZP(d.target_application) : null,
      A = P || null == d.inviter ? null : new h.Z(d.inviter),
      L = !(null != d.approximate_member_count && d.approximate_member_count > 100 || null != R && R.features.has(N.GuildFeatures.COMMUNITY)) && null != A,
      K = null,
      U = false;
    if (null != R) k && (K = null == A ? _.intl.string(_.t["3rE1P8"]) : _.intl.formatToPlainString(_.t["5u47va"], {
      username: v.ZP.getFormattedName(A)
    }), d.target_type === E.Iq.STREAM && null != d.target_user && (K = _.intl.formatToPlainString(_.t.x2L32Q, {
      username: v.ZP.getFormattedName(d.target_user)
    })), d.target_type === E.Iq.EMBEDDED_APPLICATION && null != d.target_application && (K = null != A ? _.intl.formatToPlainString(_.t.UW1Cav, {
      username: v.ZP.getFormattedName(A)
    }) : _.intl.string(_.t.ENSuN3))), L && null == w && (n = (0, t.jsx)(u.Vj, {
      className: Z.icon,
      guild: R,
      size: u.Vj.Sizes.SMALL
    })), i = R.name, null != w && (i = w.name, c = (0, t.jsxs)("div", {
      children: [(0, t.jsx)(u.DK, {
        className: Z.appIn,
        children: _.intl.string(_.t["3gg9fF"])
      }), (0, t.jsxs)("div", {
        className: Z.guildContainer,
        children: [(0, t.jsx)(u.Vj, {
          guild: R,
          size: u.Vj.Sizes.SMALL
        }), (0, t.jsx)(r.Text, {
          tag: "span",
          variant: "text-lg/normal",
          color: "header-primary",
          className: Z.appGuildName,
          children: R.name
        })]
      })]
    }));
    else if (null != M) {
      if (null == A) throw Error("no inviter in group DM invite");
      let e = v.ZP.getFormattedName(A);
      null != M.name && "" !== M.name ? (K = _.intl.formatToPlainString(_.t["5u47va"], {
        username: e
      }), i = M.name, null != M.icon && (n = (0, t.jsx)(u.MC, {
        channel: M,
        size: r.EFr.SIZE_32
      }))) : (K = _.intl.string(_.t.OsdY8B), i = e)
    } else if (null != A) {
      let e = v.ZP.getFormattedName(A, true);
      i = _.intl.formatToPlainString(_.t["4aF92R"], {
        username: e
      }), U = true, c = null != T ? null : (0, t.jsx)(u.DK, {
        className: Z.directInviteSubTitle,
        children: D ? _.intl.format(_.t["6r4JiR"], {
          username: e
        }) : _.intl.format(_.t.Quj7HX, {
          username: e
        })
      })
    }
    return (0, t.jsxs)(r.Kqy, {
      direction: "vertical",
      gap: z ? 16 : 8,
      className: Z.container,
      justify: "center",
      align: "center",
      children: [(0, t.jsx)(S, {
        application: w,
        guild: R,
        user: L ? A : null,
        compact: U
      }), null != T ? (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)(u.DK, {
          children: _.intl.string(_.t.mDFGFj)
        }), (0, t.jsx)(u.Dx, {
          children: T
        })]
      }) : (0, t.jsxs)(t.Fragment, {
        children: [null != K ? (0, t.jsx)(u.DK, {
          children: K
        }) : null, (0, t.jsxs)(u.Dx, {
          className: Z.title,
          children: [null != R ? (0, t.jsx)(o.Z, {
            guild: R,
            className: Z.guildBadge,
            tooltipPosition: "left"
          }) : null, n, i]
        })]
      }), c, (0, t.jsxs)(r.Kqy, {
        direction: "vertical",
        gap: z ? 16 : 32,
        children: [(0, t.jsxs)(r.Kqy, {
          direction: "vertical",
          gap: 8,
          children: [null != w || U || (null == d || null == (l = d.guild) ? true : l.id) === f.fQ ? null : (0, t.jsx)(u.EJ, {
            className: Z.activityCount,
            online: d.approximate_presence_count,
            total: d.approximate_member_count,
            flat: C,
            renderText: z ? I : true
          }), z && (0, t.jsx)(s.Z, {
            friendMemberIds: b
          })]
        }), F || null == y ? (0, t.jsx)(u.jQ, {
          user: y
        }) : (0, t.jsx)(m.R, {})]
      })]
    })
  }