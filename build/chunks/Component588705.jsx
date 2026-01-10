/** Chunk was on 86872 **/
/** chunk id: 588705, original params: e,l,n (module,exports,require) **/
require.d(exports, {
  R: () => C,
  Z: () => M
}), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
let C = () => (0, t.jsxs)(i.Fragment, {
    children: [(0, t.jsx)(o.qE, {
      src: null,
      size: u.EFr.DEPRECATED_SIZE_100,
      className: P.avatar
    }), (0, t.jsx)(o.DK, {
      children: T.intl.string(T.t["3rE1P8"])
    }), (0, t.jsx)(o.Dx, {
      className: P.inviteResolvingGuildName,
      children: T.intl.string(T.t.ZTNur7)
    })]
  }),
  L = e => {
    let {
      guild: l,
      user: n,
      application: i,
      compact: r
    } = e;
    return null != i ? (0, t.jsx)(m.Z, {
      className: P.appIcon,
      game: i,
      size: P.appIconSize
    }) : null != n ? (0, t.jsx)(o.qE, {
      src: null != n ? n.getAvatarURL(true, 80) : null,
      size: u.EFr.SIZE_80,
      className: r ? true : P.avatar
    }) : null != l ? (0, t.jsx)(c.ZP, {
      mask: c.ZP.Masks.SQUIRCLE,
      width: 64,
      height: 64,
      className: P.guildIcon,
      children: (0, t.jsx)(o.Vj, {
        guild: l,
        size: o.Vj.Sizes.LARGER,
        animate: true
      })
    }) : null
  },
  Z = e => (0, t.jsx)(u.Text, {
    tag: "span",
    className: e.className,
    variant: "text-sm/medium",
    color: "text-subtle",
    children: e.children
  }),
  M = e => {
    var l;
    let n, i, r, {
        invite: c,
        disableUser: m = false,
        error: C,
        flatActivityCount: M = false,
        isRegister: A = false,
        inUnclaimedFlow: R = false,
        friendMemberIds: D = [],
        showInvitedByHeader: k = true,
        className: O
      } = e,
      {
        currentUser: b
      } = (0, s.cj)([p.default], () => ({
        currentUser: p.default.getCurrentUser()
      }));
    if (null == c) return null;
    let F = null != D && D.length > 0,
      U = null != c.guild ? _.lM(c.guild) ? c.guild : _.Qs(c.guild) : null,
      z = null != c.channel ? (0, h.jD)(c.channel) : null,
      y = null != c.target_application ? new j.ZP(c.target_application) : null,
      V = m || null == c.inviter ? null : new E.Z(c.inviter),
      w = !(null != c.approximate_member_count && c.approximate_member_count > 100 || null != U && U.features.has(N.GuildFeatures.COMMUNITY)) && null != V,
      H = null,
      K = false;
    if (null != U) k && (H = null == V ? T.intl.string(T.t["3rE1P8"]) : T.intl.formatToPlainString(T.t["5u47va"], {
      username: I.ZP.getFormattedName(V)
    }), c.target_type === S.Iq.STREAM && null != c.target_user && (H = T.intl.formatToPlainString(T.t.x2L32Q, {
      username: I.ZP.getFormattedName(c.target_user)
    })), c.target_type === S.Iq.EMBEDDED_APPLICATION && null != c.target_application && (H = null != V ? T.intl.formatToPlainString(T.t.UW1Cav, {
      username: I.ZP.getFormattedName(V)
    }) : T.intl.string(T.t.ENSuN3))), w && null == y && (n = (0, t.jsx)(o.Vj, {
      className: P.icon,
      guild: U,
      size: o.Vj.Sizes.SMALL
    })), i = U.name, null != y && (i = y.name, r = (0, t.jsxs)("div", {
      children: [(0, t.jsx)(o.DK, {
        className: P.appIn,
        children: T.intl.string(T.t["3gg9fF"])
      }), (0, t.jsxs)("div", {
        className: P.guildContainer,
        children: [(0, t.jsx)(o.Vj, {
          guild: U,
          size: o.Vj.Sizes.SMALL
        }), (0, t.jsx)(u.Text, {
          tag: "span",
          variant: "text-lg/normal",
          color: "text-strong",
          className: P.appGuildName,
          children: U.name
        })]
      })]
    }));
    else if (null != z) {
      if (null == V) throw Error("no inviter in group DM invite");
      let e = I.ZP.getFormattedName(V);
      null != z.name && "" !== z.name ? (H = T.intl.formatToPlainString(T.t["5u47va"], {
        username: e
      }), i = z.name, null != z.icon && (n = (0, t.jsx)(o.MC, {
        channel: z,
        size: u.EFr.SIZE_32
      }))) : (H = T.intl.string(T.t.OsdY8B), i = e)
    } else if (null != V) {
      let e = I.ZP.getFormattedName(V, true);
      i = T.intl.formatToPlainString(T.t["4aF92R"], {
        username: e
      }), K = true, r = null != C ? null : (0, t.jsx)(o.DK, {
        className: P.directInviteSubTitle,
        children: A ? T.intl.format(T.t["6r4JiR"], {
          username: e
        }) : T.intl.format(T.t.Quj7HX, {
          username: e
        })
      })
    }
    return (0, t.jsxs)(u.Kqy, {
      direction: "vertical",
      gap: 8,
      className: a()(P.container, O),
      justify: "center",
      align: "center",
      children: [(0, t.jsx)(L, {
        application: y,
        guild: U,
        user: w ? V : null,
        compact: K
      }), null != C ? (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)(o.DK, {
          children: T.intl.string(T.t.mDFGFj)
        }), (0, t.jsx)(o.Dx, {
          children: C
        })]
      }) : (0, t.jsxs)(t.Fragment, {
        children: [null != H ? (0, t.jsx)(o.DK, {
          children: H
        }) : null, (0, t.jsxs)(o.Dx, {
          className: P.title,
          children: [null != U ? (0, t.jsx)(x.Z, {
            guild: U,
            className: P.guildBadge,
            tooltipPosition: "left"
          }) : null, n, i]
        })]
      }), r, (0, t.jsxs)(u.Kqy, {
        direction: "vertical",
        gap: 24,
        children: [(0, t.jsxs)(u.Kqy, {
          direction: "vertical",
          gap: 4,
          children: [null != y || K || (null == c || null == (l = c.guild) ? true : l.id) === f.fQ ? null : (0, t.jsx)(o.EJ, {
            online: c.approximate_presence_count,
            total: c.approximate_member_count,
            flat: M,
            renderText: F ? Z : true
          }), F && (0, t.jsx)(d.Z, {
            friendMemberIds: D
          })]
        }), (0, t.jsx)(v.Z, {
          guild: U,
          roles: c.roles,
          className: P.rolesList
        }), R || null == b ? (0, t.jsx)(o.jQ, {
          user: b
        }) : (0, t.jsx)(g.R, {})]
      })]
    })
  }