/** Chunk was on web.js **/
/** chunk id: 680668, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
}), require("./997841.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk533800 = require("./533800.js"),
  Chunk95015 = require("./95015.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk447543 = require("./447543.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk857395 = require("./857395.jsx"),
  Chunk358555 = require("./358555.jsx"),
  Chunk955415 = require("./955415.jsx"),
  Chunk131704 = require("./131704.js"),
  Chunk411198 = require("./411198.js"),
  Chunk277707 = require("./277707.js"),
  Chunk358595 = require("./358595.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk222922 = require("./222922.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}

function I(e) {
  var t, v, I, T;
  let C, A, N, {
      onTransitionToInviteChannel: P,
      onAcceptInstantInvite: R,
      guild: w,
      invite: D,
      message: x,
      currentUserId: L
    } = e,
    j = L === x.author.id,
    {
      channel: M,
      approximate_member_count: k,
      approximate_presence_count: U
    } = D,
    G = D.state === b.r2o.ACCEPTING,
    Z = null != M ? (0, m.jD)(M) : null,
    F = null != w,
    B = null != Z,
    V = null != Z && Z.isGuildStageVoice(),
    H = (0, o.yE)(null != (t = D.flags) ? t : 0, a.$.IS_GUEST_INVITE),
    Y = null != (v = null == Z ? true : Z.isGuildVoiceOrThread()) && v,
    W = null != (I = null == w ? true : w.features.has(b.GuildFeatures.HUB)) && I,
    K = null == w ? true : w.id,
    {
      analyticsLocations: z
    } = (0, d.ZP)(u.Z.INVITE_EMBED),
    [q, Q] = i.useState(false),
    X = i.useCallback(() => Q(false), []),
    J = i.useRef(null),
    $ = i.useCallback(() => {
      Q(true), (0, c.CB)(K, "show profile", z)
    }, [K, z]),
    ee = i.useCallback(() => {
      let e = "noop";
      F ? (P(), e = "transition") : (R(), e = "accept"), (0, c.r$)({
        invite: D,
        action: e,
        inviter_id: x.author.id,
        invite_message_id: x.id
      }, z)
    }, [D, x, z, F, P, R]);
  if (null == w) {
    if (null == D.guild) return (0, r.jsx)(E.Z, {});
    (w = h.Qs(D.guild)).premiumTier = null != (T = D.guild.premium_tier) ? T : b.Eu4.NONE
  }
  let et = (0, g.e)({
    isVoiceChannel: Y,
    isOwnInvite: j,
    isGuest: H,
    isHubGuild: W,
    isStage: V,
    isStream: false
  });
  return A = (0, r.jsxs)("span", {
    className: O.infoTitle,
    children: [(0, r.jsx)(f.Z, {
      guildId: w.id,
      name: w.name,
      shouldShow: q,
      onRequestClose: X,
      targetElementRef: J,
      children: () => (0, r.jsx)(_.Z.GuildName, {
        guild: w,
        ref: J
      })
    }), (0, r.jsx)("span", {
      className: O.infoBadge,
      children: (0, r.jsx)(p.Z, {
        guild: w,
        isBannerVisible: false,
        disableBoostClick: true
      })
    })]
  }), H && (N = (0, r.jsx)(s.u, {
    asContainer: true,
    text: y.intl.string(y.t["/FeTK6"]),
    children: (0, r.jsx)(l.d3s, {
      size: "md",
      color: "currentColor",
      className: O.infoIcon
    })
  })), Y ? (A = (0, r.jsx)(_.Z.Channel, {
    channel: Z
  }), C = (0, r.jsxs)("span", {
    className: O.infoTitle,
    children: [y.intl.format(y.t["2wimj5"], {
      guildName: w.name
    }), (0, r.jsx)("span", {
      className: O.infoBadge,
      children: (0, r.jsx)(p.Z, {
        guild: w,
        isBannerVisible: false
      })
    })]
  })) : null != k && k >= 5 || null != U && U > 0 ? C = (0, r.jsx)(_.Z.Data, {
    members: k,
    membersOnline: U
  }) : B && (C = (0, r.jsx)(_.Z.Channel, {
    channel: Z,
    guild: w
  })), (0, r.jsxs)(_.Z, {
    children: [(0, r.jsx)(_.Z.GuildSplash, {
      guild: w
    }), (0, r.jsx)(_.Z.Header, {
      text: et,
      extra: N
    }), (0, r.jsxs)(_.Z.Body, {
      children: [(0, r.jsxs)("div", {
        className: O.headerLine,
        children: [(0, r.jsx)(_.Z.Icon, {
          guild: w
        }), (0, r.jsx)(_.Z.Info, {
          title: A,
          onClick: $,
          children: C
        })]
      }), (0, r.jsx)("div", {
        className: O.buttonContainer,
        children: (0, r.jsx)(l.Button, {
          onClick: ee,
          loading: G,
          variant: "active",
          fullWidth: Y,
          text: Y ? V ? y.intl.string(y.t["7vb2cc"]) : y.intl.string(y.t.gpqgah) : F ? y.intl.string(y.t.cEnaWx) : y.intl.string(y.t.XpeFYr)
        })
      })]
    }), w.features.has(b.GuildFeatures.HUB) && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: O.separator
      }), (0, r.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: y.intl.format(y.t["/o1IfA"], {
          onClick: () => (0, l.ZDy)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("7082"), n.e("43790")]).then(n.bind(n, 650233));
            return t => (0, r.jsx)(e, S({}, t))
          })
        })
      })]
    })]
  })
}