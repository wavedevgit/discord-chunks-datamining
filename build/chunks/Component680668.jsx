/** Chunk was on 66866 **/
/** chunk id: 680668, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./997841.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk533800 = require("./533800.js"),
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

function v(e) {
  var t, v, O;
  let y, x, j, {
      onTransitionToInviteChannel: I,
      onAcceptInstantInvite: S,
      guild: T,
      invite: P,
      message: N,
      currentUserId: A
    } = e,
    w = A === N.author.id,
    {
      channel: Z,
      approximate_member_count: R,
      approximate_presence_count: L
    } = P,
    D = P.state === b.r2o.ACCEPTING,
    M = null != Z ? (0, m.jD)(Z) : null,
    k = null != T,
    U = null != M,
    F = null != M && M.isGuildVocal(),
    B = null != M && M.isGuildStageVoice(),
    G = (0, f.yE)(null != (t = P.flags) ? t : 0, l.$.IS_GUEST_INVITE),
    H = null != (v = null == T ? true : T.features.has(b.oNc.HUB)) && v,
    V = null == T ? true : T.id,
    {
      analyticsLocations: z
    } = (0, c.ZP)(s.Z.INVITE_EMBED),
    [W, Y] = i.useState(false),
    K = i.useCallback(() => Y(false), []),
    X = i.useRef(null),
    q = i.useCallback(() => {
      Y(true), (0, o.CB)(V, "show profile", z)
    }, [V, z]),
    Q = i.useCallback(() => {
      let e = "noop";
      k ? (I(), e = "transition") : (S(), e = "accept"), (0, o.r$)({
        invite: P,
        action: e,
        inviter_id: N.author.id,
        invite_message_id: N.id
      }, z)
    }, [P, N, z, k, I, S]);
  if (null == T) {
    if (null == P.guild) return (0, r.jsx)(h.Z, {});
    (T = _.Qs(P.guild)).premiumTier = null != (O = P.guild.premium_tier) ? O : b.Eu4.NONE
  }
  let J = (0, g.e)({
    isVoiceChannel: F,
    isOwnInvite: w,
    isGuest: G,
    isHubGuild: H,
    isStage: B,
    isStream: false
  });
  return x = (0, r.jsxs)("span", {
    className: C.infoTitle,
    children: [(0, r.jsx)(u.Z, {
      guildId: T.id,
      name: T.name,
      shouldShow: W,
      onRequestClose: K,
      targetElementRef: X,
      children: () => (0, r.jsx)(p.Z.GuildName, {
        guild: T,
        ref: X
      })
    }), (0, r.jsx)("span", {
      className: C.infoBadge,
      children: (0, r.jsx)(d.Z, {
        guild: T,
        isBannerVisible: false,
        disableBoostClick: true
      })
    })]
  }), G && (j = (0, r.jsx)(a.DY3, {
    className: C.tooltipContainer,
    text: E.intl.string(E.t["/FeTKy"]),
    children: (0, r.jsx)(a.d3s, {
      size: "md",
      color: "currentColor",
      className: C.infoIcon
    })
  })), F ? (x = (0, r.jsx)(p.Z.Channel, {
    channel: M
  }), y = (0, r.jsxs)("span", {
    className: C.infoTitle,
    children: [E.intl.format(E.t["2wimj4"], {
      guildName: T.name
    }), (0, r.jsx)("span", {
      className: C.infoBadge,
      children: (0, r.jsx)(d.Z, {
        guild: T,
        isBannerVisible: false
      })
    })]
  })) : null != R && R >= 5 || null != L && L > 0 ? y = (0, r.jsx)(p.Z.Data, {
    members: R,
    membersOnline: L
  }) : U && (y = (0, r.jsx)(p.Z.Channel, {
    channel: M,
    guild: T
  })), (0, r.jsxs)(p.Z, {
    children: [(0, r.jsx)(p.Z.GuildSplash, {
      guild: T
    }), (0, r.jsx)(p.Z.Header, {
      text: J,
      extra: j
    }), (0, r.jsxs)(p.Z.Body, {
      children: [(0, r.jsxs)("div", {
        className: C.headerLine,
        children: [(0, r.jsx)(p.Z.Icon, {
          guild: T
        }), (0, r.jsx)(p.Z.Info, {
          title: x,
          onClick: q,
          children: y
        })]
      }), (0, r.jsx)(p.Z.Button, {
        onClick: Q,
        submitting: D,
        color: p.Z.Button.Colors.GREEN,
        children: F ? B ? E.intl.string(E.t["7vb2cX"]) : E.intl.string(E.t.gpqgam) : k ? E.intl.string(E.t.cEnaW1) : E.intl.string(E.t.XpeFYm)
      })]
    }), T.features.has(b.oNc.HUB) && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: C.separator
      }), (0, r.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: E.intl.format(E.t["/o1IfH"], {
          onClick: () => (0, a.ZDy)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("95468"), n.e("70799")]).then(n.bind(n, 650233));
            return t => (0, r.jsx)(e, function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                  r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                  var r;
                  r = n[t], t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: true,
                    configurable: true,
                    writable: true
                  }) : e[t] = r
                })
              }
              return e
            }({}, t))
          })
        })
      })]
    })]
  })
}