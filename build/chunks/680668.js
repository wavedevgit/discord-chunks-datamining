/** Chunk was on 52272 **/
n.d(t, {
  Z: () => O
}), n(789020), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(533800),
  a = n(481060),
  l = n(447543),
  s = n(100527),
  c = n(906732),
  u = n(576306),
  d = n(857395),
  p = n(358555),
  m = n(955415),
  f = n(131704),
  h = n(630388),
  g = n(267642),
  _ = n(411198),
  b = n(277707),
  v = n(358595),
  x = n(981631),
  y = n(388032),
  E = n(651873);

function O(e) {
  var t, O;
  let N, j, C, {
      onTransitionToInviteChannel: I,
      onAcceptInstantInvite: S,
      guild: T,
      invite: P,
      author: A,
      currentUserId: w
    } = e,
    Z = w === A.id,
    {
      channel: k,
      approximate_member_count: R,
      approximate_presence_count: D
    } = P,
    L = P.state === x.r2o.ACCEPTING,
    M = null != k ? (0, f.jD)(k) : null,
    W = null != T,
    U = null != M,
    F = null != M && M.isGuildVocal(),
    B = null != M && M.isGuildStageVoice(),
    G = (0, h.yE)(null !== (t = P.flags) && void 0 !== t ? t : 0, o.$.IS_GUEST_INVITE),
    H = null !== (O = null == T ? void 0 : T.hasFeature(x.oNc.HUB)) && void 0 !== O && O,
    V = (0, u.h)(),
    z = null == T ? void 0 : T.id,
    {
      analyticsLocations: K
    } = (0, c.ZP)(s.Z.INVITE_EMBED),
    [Y, X] = i.useState(!1),
    q = i.useCallback(() => X(!1), []),
    Q = i.useCallback(() => {
      let e = "noop";
      V ? (X(!0), e = "show profile") : W && (I(), e = "transition"), (0, l.CB)(z, e, K)
    }, [z, K, V, W, I]),
    J = i.useCallback(() => {
      let e = "noop";
      W ? (I(), e = "transition") : (S(), e = "accept"), (0, l.r$)(P, e, K)
    }, [P, K, W, I, S]);
  if (null == T) {
    if (null == P.guild) return (0, r.jsx)(v.Z, {});
    T = _.Qs(P.guild);
    let e = (0, g.rF)(P.guild.premium_subscription_count, P.guild.id);
    T.premiumTier = e
  }
  let $ = (0, b.e)({
    isVoiceChannel: F,
    isOwnInvite: Z,
    isGuest: G,
    isHubGuild: H,
    isStage: B,
    isStream: !1
  });
  return j = (0, r.jsxs)("span", {
    className: E.infoTitle,
    children: [(0, r.jsx)(d.Z, {
      guildId: T.id,
      name: T.name,
      shouldShow: Y,
      onRequestClose: q,
      children: () => (0, r.jsx)(m.Z.GuildName, {
        guild: T
      })
    }), (0, r.jsx)("span", {
      className: E.infoBadge,
      children: (0, r.jsx)(p.Z, {
        guild: T,
        isBannerVisible: !1,
        disableBoostClick: !0
      })
    })]
  }), G && (C = (0, r.jsx)(a.DY3, {
    className: E.tooltipContainer,
    text: y.NW.string(y.t["/FeTKy"]),
    children: (0, r.jsx)(a.d3s, {
      size: "md",
      color: "currentColor",
      className: E.infoIcon
    })
  })), F ? (j = (0, r.jsx)(m.Z.Channel, {
    channel: M
  }), N = (0, r.jsxs)("span", {
    className: E.infoTitle,
    children: [y.NW.format(y.t["2wimj4"], {
      guildName: T.name
    }), (0, r.jsx)("span", {
      className: E.infoBadge,
      children: (0, r.jsx)(p.Z, {
        guild: T,
        isBannerVisible: !1
      })
    })]
  })) : null != R && R >= 5 || null != D && D > 0 ? N = (0, r.jsx)(m.Z.Data, {
    members: R,
    membersOnline: D
  }) : U && (N = (0, r.jsx)(m.Z.Channel, {
    channel: M,
    guild: T
  })), (0, r.jsxs)(m.Z, {
    children: [(0, r.jsx)(m.Z.GuildSplash, {
      guild: T
    }), (0, r.jsx)(m.Z.Header, {
      text: $,
      extra: C
    }), (0, r.jsxs)(m.Z.Body, {
      children: [(0, r.jsxs)("div", {
        className: E.headerLine,
        children: [(0, r.jsx)(m.Z.Icon, {
          guild: T
        }), (0, r.jsx)(m.Z.Info, {
          title: j,
          onClick: Q,
          children: N
        })]
      }), (0, r.jsx)(m.Z.Button, {
        onClick: J,
        submitting: L,
        color: m.Z.Button.Colors.GREEN,
        children: F ? B ? y.NW.string(y.t["7vb2cX"]) : y.NW.string(y.t.gpqgam) : W ? y.NW.string(y.t.cEnaW1) : y.NW.string(y.t.XpeFYm)
      })]
    }), T.hasFeature(x.oNc.HUB) && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: E.separator
      }), (0, r.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: y.NW.format(y.t["/o1IfH"], {
          onClick: () => (0, a.ZDy)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("95468"), n.e("70123")]).then(n.bind(n, 650233));
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
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
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