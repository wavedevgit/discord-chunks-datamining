/** Chunk was on 86872 **/
/** chunk id: 588705, original params: e,l,n (module,exports,require) **/
require.d(exports, {
  R: () => Z,
  Z: () => R
}), require("./997841.js"), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk533800 = require("./533800.js"),
  Chunk95015 = require("./95015.js"),
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
let Z = () => (0, t.jsxs)(i.Fragment, {
    children: [(0, t.jsx)(m.qE, {
      src: null,
      size: o.EFr.DEPRECATED_SIZE_100,
      className: L.avatar
    }), (0, t.jsx)(m.DK, {
      children: C.intl.string(C.t["3rE1P8"])
    }), (0, t.jsx)(m.Dx, {
      className: L.inviteResolvingGuildName,
      children: C.intl.string(C.t.ZTNur7)
    })]
  }),
  M = e => {
    let {
      guild: l,
      user: n,
      application: i,
      compact: r
    } = e;
    return null != i ? (0, t.jsx)(g.Z, {
      className: L.appIcon,
      game: i,
      size: L.appIconSize
    }) : null != n ? (0, t.jsx)(m.qE, {
      src: null != n ? n.getAvatarURL(true, 80) : null,
      size: o.EFr.SIZE_80,
      className: r ? true : L.avatar
    }) : null != l ? (0, t.jsx)(x.ZP, {
      mask: x.ZP.Masks.SQUIRCLE,
      width: 64,
      height: 64,
      className: L.guildIcon,
      children: (0, t.jsx)(m.Vj, {
        guild: l,
        size: m.Vj.Sizes.LARGER,
        animate: true
      })
    }) : null
  },
  A = e => (0, t.jsx)(o.Text, {
    tag: "span",
    className: e.className,
    variant: "text-sm/medium",
    color: "text-subtle",
    children: e.children
  }),
  R = e => {
    var l, n;
    let i, r, x, {
        invite: g,
        disableUser: Z = false,
        error: R,
        flatActivityCount: D = false,
        isRegister: k = false,
        inUnclaimedFlow: O = false,
        friendMemberIds: b = [],
        showInvitedByHeader: F = true,
        className: U
      } = e,
      {
        currentUser: z
      } = (0, d.cj)([I.default], () => ({
        currentUser: I.default.getCurrentUser()
      }));
    if (null == g) return null;
    let y = null != b && b.length > 0,
      V = null != g.guild ? N.lM(g.guild) ? g.guild : N.Qs(g.guild) : null,
      w = null != g.channel ? (0, p.jD)(g.channel) : null,
      H = null != g.target_application ? new h.ZP(g.target_application) : null,
      K = Z || null == g.inviter ? null : new _.Z(g.inviter),
      W = !(null != g.approximate_member_count && g.approximate_member_count > 100 || null != V && V.features.has(S.GuildFeatures.COMMUNITY)) && null != K,
      G = null,
      X = (0, u.yE)(null != (n = g.flags) ? n : 0, s.$.IS_GUEST_INVITE),
      q = false;
    if (null != V) F && (G = null == K ? C.intl.string(C.t["3rE1P8"]) : C.intl.formatToPlainString(C.t["5u47va"], {
      username: f.ZP.getFormattedName(K)
    }), g.target_type === P.Iq.STREAM && null != g.target_user && (G = C.intl.formatToPlainString(C.t.x2L32Q, {
      username: f.ZP.getFormattedName(g.target_user)
    })), g.target_type === P.Iq.EMBEDDED_APPLICATION && null != g.target_application && (G = null != K ? C.intl.formatToPlainString(C.t.UW1Cav, {
      username: f.ZP.getFormattedName(K)
    }) : C.intl.string(C.t.ENSuN3))), W && null == H && (i = (0, t.jsx)(m.Vj, {
      className: L.icon,
      guild: V,
      size: m.Vj.Sizes.SMALL
    })), r = V.name, null != H && (r = H.name, x = (0, t.jsxs)("div", {
      children: [(0, t.jsx)(m.DK, {
        className: L.appIn,
        children: C.intl.string(C.t["3gg9fF"])
      }), (0, t.jsxs)("div", {
        className: L.guildContainer,
        children: [(0, t.jsx)(m.Vj, {
          guild: V,
          size: m.Vj.Sizes.SMALL
        }), (0, t.jsx)(o.Text, {
          tag: "span",
          variant: "text-lg/normal",
          color: "text-strong",
          className: L.appGuildName,
          children: V.name
        })]
      })]
    }));
    else if (null != w) {
      if (null == K) throw Error("no inviter in group DM invite");
      let e = f.ZP.getFormattedName(K);
      null != w.name && "" !== w.name ? (G = C.intl.formatToPlainString(C.t["5u47va"], {
        username: e
      }), r = w.name, null != w.icon && (i = (0, t.jsx)(m.MC, {
        channel: w,
        size: o.EFr.SIZE_32
      }))) : (G = C.intl.string(C.t.OsdY8B), r = e)
    } else if (null != K) {
      let e = f.ZP.getFormattedName(K, true);
      r = C.intl.formatToPlainString(C.t["4aF92R"], {
        username: e
      }), q = true, x = null != R ? null : (0, t.jsx)(m.DK, {
        className: L.directInviteSubTitle,
        children: k ? C.intl.format(C.t["6r4JiR"], {
          username: e
        }) : C.intl.format(C.t.Quj7HX, {
          username: e
        })
      })
    }
    return (0, t.jsxs)(o.Kqy, {
      direction: "vertical",
      gap: 8,
      className: a()(L.container, U),
      justify: "center",
      align: "center",
      children: [(0, t.jsx)(M, {
        application: H,
        guild: V,
        user: W ? K : null,
        compact: q
      }), null != R ? (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)(m.DK, {
          children: C.intl.string(C.t.mDFGFj)
        }), (0, t.jsx)(m.Dx, {
          children: R
        })]
      }) : (0, t.jsxs)(t.Fragment, {
        children: [null != G ? (0, t.jsx)(m.DK, {
          children: G
        }) : null, (0, t.jsxs)(m.Dx, {
          className: L.title,
          children: [null != V ? (0, t.jsx)(v.Z, {
            guild: V,
            className: L.guildBadge,
            tooltipPosition: "left"
          }) : null, i, r]
        })]
      }), x, (0, t.jsxs)(o.Kqy, {
        direction: "vertical",
        gap: 24,
        children: [(0, t.jsxs)(o.Kqy, {
          direction: "vertical",
          gap: 4,
          children: [null != H || q || (null == g || null == (l = g.guild) ? true : l.id) === T.fQ ? null : (0, t.jsx)(m.EJ, {
            online: g.approximate_presence_count,
            total: g.approximate_member_count,
            flat: D,
            renderText: y ? A : true
          }), y && (0, t.jsx)(c.Z, {
            friendMemberIds: b
          })]
        }), (0, t.jsx)(j.Z, {
          guild: V,
          roles: g.roles,
          className: L.rolesList
        }), O || X || null == z ? (0, t.jsx)(m.jQ, {
          user: z
        }) : (0, t.jsx)(E.R, {})]
      })]
    })
  }