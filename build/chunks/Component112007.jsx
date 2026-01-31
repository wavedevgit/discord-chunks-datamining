/** Chunk was on 64935 **/
/** chunk id: 112007, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => O
}), require("./938796.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk821418 = require("./821418.js"),
  Chunk665260 = require("./665260.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk846293 = require("./846293.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk517905 = require("./517905.jsx"),
  Chunk986268 = require("./986268.jsx"),
  Chunk529200 = require("./529200.jsx"),
  Chunk95701 = require("./95701.js"),
  Chunk860689 = require("./860689.js"),
  Chunk505417 = require("./505417.js"),
  Chunk168428 = require("./168428.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk563111 = require("./563111.js");

function O(e) {
  var t, O, x, E;
  let j, C, I, {
      onTransitionToInviteChannel: S,
      onAcceptInstantInvite: T,
      guild: N,
      invite: P,
      message: w,
      currentUserId: R
    } = e,
    D = R === w.author.id,
    {
      channel: L,
      approximate_member_count: M,
      approximate_presence_count: k
    } = P,
    U = P.state === y.elq.ACCEPTING,
    G = null != L ? (0, g.OY)(L) : null,
    B = null != N,
    F = null != G,
    H = null != G && G.isGuildStageVoice(),
    V = (0, a.Lt)(null != (t = P.flags) ? t : 0, l.Q.IS_GUEST_INVITE),
    z = null != (O = null == G ? true : G.isGuildVoiceOrThread()) && O,
    W = null != (x = null == N ? true : N.features.has(y.GuildFeatures.HUB)) && x,
    K = null == N ? true : N.id,
    {
      analyticsLocations: Y
    } = (0, d.Ay)(u.A.INVITE_EMBED),
    [q, J] = i.useState(false),
    Q = i.useCallback(() => J(false), []),
    X = i.useRef(null),
    Z = i.useCallback(() => {
      J(true), (0, c.Pq)(K, "show profile", Y)
    }, [K, Y]),
    $ = i.useCallback(() => {
      let e = "noop";
      B ? (S(), e = "transition") : (T(), e = "accept"), (0, c.he)({
        invite: P,
        action: e,
        inviter_id: w.author.id,
        invite_message_id: w.id
      }, Y)
    }, [P, w, Y, B, S, T]);
  if (null == N) {
    if (null == P.guild) return (0, r.jsx)(b.A, {});
    (N = _.DY(P.guild)).premiumTier = null != (E = P.guild.premium_tier) ? E : y.TVA.NONE
  }
  let ee = (0, h.l)({
    isVoiceChannel: z,
    isOwnInvite: D,
    isGuest: V,
    isHubGuild: W,
    isStage: H,
    isStream: false
  });
  return C = (0, r.jsxs)("span", {
    className: v.FA,
    children: [(0, r.jsx)(p.A, {
      guildId: N.id,
      name: N.name,
      shouldShow: q,
      onRequestClose: Q,
      targetElementRef: X,
      children: () => (0, r.jsx)(f.A.GuildName, {
        guild: N,
        ref: X
      })
    }), (0, r.jsx)("span", {
      className: v.E3,
      children: (0, r.jsx)(m.A, {
        guild: N,
        isBannerVisible: false,
        disableBoostClick: true
      })
    })]
  }), V && (I = (0, r.jsx)(s.m, {
    asContainer: true,
    text: A.intl.string(A.t["/FeTK6"]),
    children: (0, r.jsx)(o.mir, {
      size: "md",
      color: "currentColor",
      className: v.G
    })
  })), z ? (C = (0, r.jsx)(f.A.Channel, {
    channel: G
  }), j = (0, r.jsxs)("span", {
    className: v.FA,
    children: [A.intl.format(A.t["2wimj5"], {
      guildName: N.name
    }), (0, r.jsx)("span", {
      className: v.E3,
      children: (0, r.jsx)(m.A, {
        guild: N,
        isBannerVisible: false
      })
    })]
  })) : null != M && M >= 5 || null != k && k > 0 ? j = (0, r.jsx)(f.A.Data, {
    members: M,
    membersOnline: k
  }) : F && (j = (0, r.jsx)(f.A.Channel, {
    channel: G,
    guild: N
  })), (0, r.jsxs)(f.A, {
    children: [(0, r.jsx)(f.A.GuildSplash, {
      guild: N
    }), (0, r.jsx)(f.A.Header, {
      text: ee,
      extra: I
    }), (0, r.jsxs)(f.A.Body, {
      children: [(0, r.jsxs)("div", {
        className: v.iH,
        children: [(0, r.jsx)(f.A.Icon, {
          guild: N
        }), (0, r.jsx)(f.A.Info, {
          title: C,
          onClick: Z,
          children: j
        })]
      }), (0, r.jsx)("div", {
        className: v.UD,
        children: (0, r.jsx)(o.Button, {
          onClick: $,
          loading: U,
          variant: "active",
          fullWidth: z,
          text: z ? H ? A.intl.string(A.t["7vb2cc"]) : A.intl.string(A.t.gpqgah) : B ? A.intl.string(A.t.cEnaWx) : A.intl.string(A.t.XpeFYr)
        })
      })]
    }), N.features.has(y.GuildFeatures.HUB) && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: v.me
      }), (0, r.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: A.intl.format(A.t["/o1IfA"], {
          onClick: () => (0, o.mMO)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("98363"), n.e("13781")]).then(n.bind(n, 780086));
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