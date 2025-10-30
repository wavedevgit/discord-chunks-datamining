/** Chunk was on 86872 **/
/** chunk id: 588705, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  R: () => j,
  Z: () => b
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
  Chunk737525 = require("./737525.js");
let j = () => (0, Chunk951288.jsxs)(Chunk647438.Fragment, {
    children: [(0, Chunk951288.jsx)(Chunk388905.qE, {
      src: null,
      size: Chunk481060.EFr.DEPRECATED_SIZE_100,
      className: Chunk737525.avatar
    }), (0, Chunk951288.jsx)(Chunk388905.DK, {
      children: Chunk388032.intl.string(Chunk388032.t["3rE1P8"])
    }), (0, Chunk951288.jsx)(Chunk388905.Dx, {
      className: Chunk737525.inviteResolvingGuildName,
      children: Chunk388032.intl.string(Chunk388032.t.ZTNur7)
    })]
  }),
  S = e => {
    let {
      guild: n,
      user: t,
      application: i,
      compact: r
    } = e;
    return null != i ? (0, l.jsx)(c.Z, {
      className: I.appIcon,
      game: i,
      size: I.appIconSize
    }) : null != t ? (0, l.jsx)(s.qE, {
      src: null != t ? t.getAvatarURL(true, 80) : null,
      size: a.EFr.SIZE_80,
      className: r ? I.compactAvatar : I.avatar
    }) : null != n ? (0, l.jsx)(o.ZP, {
      mask: o.ZP.Masks.SQUIRCLE,
      width: 64,
      height: 64,
      className: I.guildIcon,
      children: (0, l.jsx)(s.Vj, {
        guild: n,
        size: s.Vj.Sizes.LARGER,
        animate: true
      })
    }) : null
  },
  b = e => {
    var n;
    let t, i, o, {
        invite: c,
        disableUser: j = false,
        error: b,
        flatActivityCount: C = false,
        isRegister: L = false,
        inUnclaimedFlow: A = false
      } = e,
      {
        currentUser: P
      } = (0, r.cj)([x.default], () => ({
        currentUser: x.default.getCurrentUser()
      }));
    if (null == c) return null;
    let T = null != c.guild ? g.lM(c.guild) ? c.guild : g.Qs(c.guild) : null,
      O = null != c.channel ? (0, p.jD)(c.channel) : null,
      R = null != c.target_application ? new m.ZP(c.target_application) : null,
      Z = j || null == c.inviter ? null : new _.Z(c.inviter),
      k = !(null != c.approximate_member_count && c.approximate_member_count > 100 || null != T && T.features.has(N.GuildFeatures.COMMUNITY)) && null != Z,
      M = null,
      y = false;
    if (null != T) M = null == Z ? E.intl.string(E.t["3rE1P8"]) : E.intl.formatToPlainString(E.t["5u47va"], {
      username: f.ZP.getFormattedName(Z)
    }), c.target_type === v.Iq.STREAM && null != c.target_user && (M = E.intl.formatToPlainString(E.t.x2L32Q, {
      username: f.ZP.getFormattedName(c.target_user)
    })), c.target_type === v.Iq.EMBEDDED_APPLICATION && null != c.target_application && (M = null != Z ? E.intl.formatToPlainString(E.t.UW1Cav, {
      username: f.ZP.getFormattedName(Z)
    }) : E.intl.string(E.t.ENSuN3)), k && null == R && (t = (0, l.jsx)(s.Vj, {
      className: I.icon,
      guild: T,
      size: s.Vj.Sizes.SMALL
    })), i = T.name, null != R && (i = R.name, o = (0, l.jsxs)("div", {
      children: [(0, l.jsx)(s.DK, {
        className: I.appIn,
        children: E.intl.string(E.t["3gg9fF"])
      }), (0, l.jsxs)("div", {
        className: I.guildContainer,
        children: [(0, l.jsx)(s.Vj, {
          guild: T,
          size: s.Vj.Sizes.SMALL
        }), (0, l.jsx)(a.Text, {
          tag: "span",
          variant: "text-lg/normal",
          color: "header-primary",
          className: I.appGuildName,
          children: T.name
        })]
      })]
    }));
    else if (null != O) {
      if (null == Z) throw Error("no inviter in group DM invite");
      let e = f.ZP.getFormattedName(Z);
      null != O.name && "" !== O.name ? (M = E.intl.formatToPlainString(E.t["5u47va"], {
        username: e
      }), i = O.name, null != O.icon && (t = (0, l.jsx)(s.MC, {
        channel: O,
        size: a.EFr.SIZE_32
      }))) : (M = E.intl.string(E.t.OsdY8B), i = e)
    } else if (null != Z) {
      let e = f.ZP.getFormattedName(Z, true);
      i = E.intl.formatToPlainString(E.t["4aF92R"], {
        username: e
      }), y = true, o = null != b ? null : (0, l.jsx)(s.DK, {
        className: I.directInviteSubTitle,
        children: L ? E.intl.format(E.t["6r4JiR"], {
          username: e
        }) : E.intl.format(E.t.Quj7HX, {
          username: e
        })
      })
    }
    return (0, l.jsxs)("div", {
      className: I.container,
      children: [(0, l.jsx)(S, {
        application: R,
        guild: T,
        user: k ? Z : null,
        compact: y
      }), null != b ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(s.DK, {
          children: E.intl.string(E.t.mDFGFj)
        }), (0, l.jsx)(s.Dx, {
          children: b
        })]
      }) : (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(s.DK, {
          children: M
        }), (0, l.jsxs)(s.Dx, {
          className: I.title,
          children: [null != T ? (0, l.jsx)(u.Z, {
            guild: T,
            className: I.guildBadge,
            tooltipPosition: "left"
          }) : null, t, i]
        })]
      }), o, null != R || y || (null == c || null == (n = c.guild) ? true : n.id) === h.fQ ? null : (0, l.jsx)(s.EJ, {
        className: I.activityCount,
        online: c.approximate_presence_count,
        total: c.approximate_member_count,
        flat: C
      }), A || null == P ? (0, l.jsx)(s.jQ, {
        user: P
      }) : (0, l.jsx)(d.R, {})]
    })
  }