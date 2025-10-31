/** Chunk was on web.js **/
/** chunk id: 680668, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
}), require("./997841.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk533800 = require("./533800.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk447543 = require("./447543.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk857395 = require("./857395.jsx"),
  Chunk358555 = require("./358555.jsx"),
  Chunk955415 = require("./955415.jsx"),
  Chunk131704 = require("./131704.js"),
  Chunk630388 = require("./630388.js"),
  Chunk411198 = require("./411198.js"),
  Chunk277707 = require("./277707.js"),
  Chunk358595 = require("./358595.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk105341 = require("./105341.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
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

function T(e) {
  var t, v, T;
  let S, A, C, {
      onTransitionToInviteChannel: N,
      onAcceptInstantInvite: R,
      guild: P,
      invite: w,
      message: D,
      currentUserId: x
    } = e,
    L = x === D.author.id,
    {
      channel: M,
      approximate_member_count: j,
      approximate_presence_count: k
    } = w,
    U = w.state === b.r2o.ACCEPTING,
    G = null != M ? (0, p.jD)(M) : null,
    B = null != P,
    Z = null != G,
    F = null != G && G.isGuildVocal(),
    V = null != G && G.isGuildStageVoice(),
    H = (0, h.yE)(null != (t = w.flags) ? t : 0, a.$.IS_GUEST_INVITE),
    Y = null != (v = null == P ? true : P.features.has(b.GuildFeatures.HUB)) && v,
    W = null == P ? true : P.id,
    {
      analyticsLocations: K
    } = (0, u.ZP)(c.Z.INVITE_EMBED),
    [z, q] = i.useState(false),
    X = i.useCallback(() => q(false), []),
    Q = i.useRef(null),
    J = i.useCallback(() => {
      q(true), (0, l.CB)(W, "show profile", K)
    }, [W, K]),
    $ = i.useCallback(() => {
      let e = "noop";
      B ? (N(), e = "transition") : (R(), e = "accept"), (0, l.r$)({
        invite: w,
        action: e,
        inviter_id: D.author.id,
        invite_message_id: D.id
      }, K)
    }, [w, D, K, B, N, R]);
  if (null == P) {
    if (null == w.guild) return (0, r.jsx)(E.Z, {});
    (P = m.Qs(w.guild)).premiumTier = null != (T = w.guild.premium_tier) ? T : b.Eu4.NONE
  }
  let ee = (0, g.e)({
    isVoiceChannel: F,
    isOwnInvite: L,
    isGuest: H,
    isHubGuild: Y,
    isStage: V,
    isStream: false
  });
  return A = (0, r.jsxs)("span", {
    className: O.infoTitle,
    children: [(0, r.jsx)(d.Z, {
      guildId: P.id,
      name: P.name,
      shouldShow: z,
      onRequestClose: X,
      targetElementRef: Q,
      children: () => (0, r.jsx)(_.Z.GuildName, {
        guild: P,
        ref: Q
      })
    }), (0, r.jsx)("span", {
      className: O.infoBadge,
      children: (0, r.jsx)(f.Z, {
        guild: P,
        isBannerVisible: false,
        disableBoostClick: true
      })
    })]
  }), H && (C = (0, r.jsx)(o.u, {
    asContainer: true,
    text: y.intl.string(y.t["/FeTK6"]),
    children: (0, r.jsx)(s.d3s, {
      size: "md",
      color: "currentColor",
      className: O.infoIcon
    })
  })), F ? (A = (0, r.jsx)(_.Z.Channel, {
    channel: G
  }), S = (0, r.jsxs)("span", {
    className: O.infoTitle,
    children: [y.intl.format(y.t["2wimj5"], {
      guildName: P.name
    }), (0, r.jsx)("span", {
      className: O.infoBadge,
      children: (0, r.jsx)(f.Z, {
        guild: P,
        isBannerVisible: false
      })
    })]
  })) : null != j && j >= 5 || null != k && k > 0 ? S = (0, r.jsx)(_.Z.Data, {
    members: j,
    membersOnline: k
  }) : Z && (S = (0, r.jsx)(_.Z.Channel, {
    channel: G,
    guild: P
  })), (0, r.jsxs)(_.Z, {
    children: [(0, r.jsx)(_.Z.GuildSplash, {
      guild: P
    }), (0, r.jsx)(_.Z.Header, {
      text: ee,
      extra: C
    }), (0, r.jsxs)(_.Z.Body, {
      children: [(0, r.jsxs)("div", {
        className: O.headerLine,
        children: [(0, r.jsx)(_.Z.Icon, {
          guild: P
        }), (0, r.jsx)(_.Z.Info, {
          title: A,
          onClick: J,
          children: S
        })]
      }), (0, r.jsx)("div", {
        className: O.buttonContainer,
        children: (0, r.jsx)(s.Button, {
          onClick: $,
          loading: U,
          variant: "active",
          fullWidth: F,
          text: F ? V ? y.intl.string(y.t["7vb2cc"]) : y.intl.string(y.t.gpqgah) : B ? y.intl.string(y.t.cEnaWx) : y.intl.string(y.t.XpeFYr)
        })
      })]
    }), P.features.has(b.GuildFeatures.HUB) && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: O.separator
      }), (0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: y.intl.format(y.t["/o1IfA"], {
          onClick: () => (0, s.ZDy)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("95468"), n.e("70799")]).then(n.bind(n, 650233));
            return t => (0, r.jsx)(e, I({}, t))
          })
        })
      })]
    })]
  })
}