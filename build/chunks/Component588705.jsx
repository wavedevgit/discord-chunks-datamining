/** Chunk was on 34061 **/
/** chunk id: 588705, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  R: () => Z,
  Z: () => I
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
let Z = () => (0, Chunk54381.jsxs)(Chunk473749.Fragment, {
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
  P = e => {
    let {
      guild: l,
      user: t,
      application: i,
      compact: a
    } = e;
    return null != i ? (0, n.jsx)(d.Z, {
      className: S.appIcon,
      game: i,
      size: S.appIconSize
    }) : null != t ? (0, n.jsx)(u.qE, {
      src: null != t ? t.getAvatarURL(true, 80) : null,
      size: r.EFr.SIZE_80,
      className: a ? true : S.avatar
    }) : null != l ? (0, n.jsx)(c.ZP, {
      mask: c.ZP.Masks.SQUIRCLE,
      width: 64,
      height: 64,
      className: S.guildIcon,
      children: (0, n.jsx)(u.Vj, {
        guild: l,
        size: u.Vj.Sizes.LARGER,
        animate: true
      })
    }) : null
  },
  T = e => (0, n.jsx)(r.Text, {
    tag: "span",
    className: e.className,
    variant: "text-sm/medium",
    color: "text-subtle",
    children: e.children
  }),
  I = e => {
    var l;
    let t, i, c, {
        invite: d,
        disableUser: Z = false,
        error: I,
        flatActivityCount: C = false,
        isRegister: b = false,
        inUnclaimedFlow: D = false,
        friendMemberIds: F = [],
        showInvitedByHeader: k = true
      } = e,
      {
        currentUser: y
      } = (0, a.cj)([j.default], () => ({
        currentUser: j.default.getCurrentUser()
      }));
    if (null == d) return null;
    let z = null != F && F.length > 0,
      R = null != d.guild ? p.lM(d.guild) ? d.guild : p.Qs(d.guild) : null,
      M = null != d.channel ? (0, g.jD)(d.channel) : null,
      A = null != d.target_application ? new x.ZP(d.target_application) : null,
      K = Z || null == d.inviter ? null : new h.Z(d.inviter),
      w = !(null != d.approximate_member_count && d.approximate_member_count > 100 || null != R && R.features.has(f.GuildFeatures.COMMUNITY)) && null != K,
      L = null,
      q = false;
    if (null != R) k && (L = null == K ? _.intl.string(_.t["3rE1P8"]) : _.intl.formatToPlainString(_.t["5u47va"], {
      username: v.ZP.getFormattedName(K)
    }), d.target_type === E.Iq.STREAM && null != d.target_user && (L = _.intl.formatToPlainString(_.t.x2L32Q, {
      username: v.ZP.getFormattedName(d.target_user)
    })), d.target_type === E.Iq.EMBEDDED_APPLICATION && null != d.target_application && (L = null != K ? _.intl.formatToPlainString(_.t.UW1Cav, {
      username: v.ZP.getFormattedName(K)
    }) : _.intl.string(_.t.ENSuN3))), w && null == A && (t = (0, n.jsx)(u.Vj, {
      className: S.icon,
      guild: R,
      size: u.Vj.Sizes.SMALL
    })), i = R.name, null != A && (i = A.name, c = (0, n.jsxs)("div", {
      children: [(0, n.jsx)(u.DK, {
        className: S.appIn,
        children: _.intl.string(_.t["3gg9fF"])
      }), (0, n.jsxs)("div", {
        className: S.guildContainer,
        children: [(0, n.jsx)(u.Vj, {
          guild: R,
          size: u.Vj.Sizes.SMALL
        }), (0, n.jsx)(r.Text, {
          tag: "span",
          variant: "text-lg/normal",
          color: "header-primary",
          className: S.appGuildName,
          children: R.name
        })]
      })]
    }));
    else if (null != M) {
      if (null == K) throw Error("no inviter in group DM invite");
      let e = v.ZP.getFormattedName(K);
      null != M.name && "" !== M.name ? (L = _.intl.formatToPlainString(_.t["5u47va"], {
        username: e
      }), i = M.name, null != M.icon && (t = (0, n.jsx)(u.MC, {
        channel: M,
        size: r.EFr.SIZE_32
      }))) : (L = _.intl.string(_.t.OsdY8B), i = e)
    } else if (null != K) {
      let e = v.ZP.getFormattedName(K, true);
      i = _.intl.formatToPlainString(_.t["4aF92R"], {
        username: e
      }), q = true, c = null != I ? null : (0, n.jsx)(u.DK, {
        className: S.directInviteSubTitle,
        children: b ? _.intl.format(_.t["6r4JiR"], {
          username: e
        }) : _.intl.format(_.t.Quj7HX, {
          username: e
        })
      })
    }
    return (0, n.jsxs)(r.Kqy, {
      direction: "vertical",
      gap: z ? 16 : 8,
      className: S.container,
      justify: "center",
      align: "center",
      children: [(0, n.jsx)(P, {
        application: A,
        guild: R,
        user: w ? K : null,
        compact: q
      }), null != I ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(u.DK, {
          children: _.intl.string(_.t.mDFGFj)
        }), (0, n.jsx)(u.Dx, {
          children: I
        })]
      }) : (0, n.jsxs)(n.Fragment, {
        children: [null != L ? (0, n.jsx)(u.DK, {
          children: L
        }) : null, (0, n.jsxs)(u.Dx, {
          className: S.title,
          children: [null != R ? (0, n.jsx)(o.Z, {
            guild: R,
            className: S.guildBadge,
            tooltipPosition: "left"
          }) : null, t, i]
        })]
      }), c, (0, n.jsxs)(r.Kqy, {
        direction: "vertical",
        gap: z ? 16 : 32,
        children: [(0, n.jsxs)(r.Kqy, {
          direction: "vertical",
          gap: 8,
          children: [null != A || q || (null == d || null == (l = d.guild) ? true : l.id) === N.fQ ? null : (0, n.jsx)(u.EJ, {
            className: S.activityCount,
            online: d.approximate_presence_count,
            total: d.approximate_member_count,
            flat: C,
            renderText: z ? T : true
          }), z && (0, n.jsx)(s.Z, {
            friendMemberIds: F
          })]
        }), D || null == y ? (0, n.jsx)(u.jQ, {
          user: y
        }) : (0, n.jsx)(m.R, {})]
      })]
    })
  }