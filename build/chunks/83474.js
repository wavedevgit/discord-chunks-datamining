/** Chunk was on 68241 **/
n.d(t, {
  SK: () => T,
  ZP: () => R,
  sK: () => _
}), n(266796), n(47120);
var r = n(200651),
  l = n(192379),
  a = n(120356),
  s = n.n(a),
  i = n(442837),
  c = n(692547),
  o = n(780384),
  d = n(481060),
  u = n(410030),
  m = n(686546),
  h = n(372769),
  j = n(134432),
  f = n(703656),
  x = n(314897),
  g = n(271383),
  p = n(768581),
  b = n(900849),
  v = n(249842),
  O = n(838367),
  P = n(576306),
  y = n(914620),
  N = n(981631),
  I = n(388032),
  w = n(548758),
  C = n(892561),
  S = n(494536);

function E(e) {
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
}

function Z() {
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: w.splashPlaceholder
    }), (0, r.jsxs)("div", {
      className: s()(w.body, w.hasSplash),
      children: [(0, r.jsx)("div", {
        className: w.iconPlaceholder
      }), (0, r.jsx)("div", {
        children: (0, r.jsx)("div", {
          className: w.namePlaceholder
        })
      }), (0, r.jsxs)("div", {
        className: w.memberInfo,
        children: [(0, r.jsx)("div", {
          className: w.memberCount,
          children: (0, r.jsx)("div", {
            className: w.memberInfoPlaceholder
          })
        }), (0, r.jsx)("div", {
          className: w.memberCount,
          children: (0, r.jsx)("div", {
            className: w.memberInfoPlaceholder
          })
        })]
      }), (0, r.jsx)("div", {
        className: w.viewButtonPlaceholder
      })]
    })]
  })
}

function T() {
  let e = (0, u.ZP)();
  return (0, r.jsx)(d.VqE, {
    "aria-label": I.NW.string(I.t["8LKcho"]),
    className: w.guildPopout,
    children: (0, r.jsxs)("div", {
      className: w.body,
      children: [(0, r.jsx)("img", {
        src: (0, o.wj)(e) ? C : S,
        className: w.unavailableIcon,
        width: 80,
        height: 80,
        alt: ""
      }), (0, r.jsx)(d.X6q, {
        className: w.unavailableHeader,
        variant: "heading-md/semibold",
        children: I.NW.string(I.t["+kdPHx"])
      }), (0, r.jsx)(d.Text, {
        variant: "text-sm/normal",
        children: I.NW.string(I.t["Yn1+xs"])
      })]
    })
  })
}

function _(e) {
  var t, n;
  let {
    guild: a,
    channelId: o,
    messageId: u
  } = e, {
    name: v,
    id: O,
    discoverySplash: P,
    icon: y,
    description: C,
    presenceCount: S,
    memberCount: Z,
    emojis: T
  } = a, _ = (0, i.e7)([x.default], () => x.default.getId()), k = (0, i.e7)([g.ZP], () => g.ZP.isMember(O, _), [O, _]), [R, U] = l.useState(!1), D = e => {
    if (e.stopPropagation(), k)(0, f.XU)(O, o, u);
    else {
      let e = {
        page: N.ZY5.GUILD_CHANNEL,
        section: N.jXE.GUILD_POPOUT,
        object: N.qAy.CARD
      };
      (0, b.Ub)(O, e)
    }
    U(!0)
  }, F = p.ZP.getGuildDiscoverySplashURL({
    id: O,
    splash: P,
    size: 250 * (0, j.x_)()
  }), L = null !== (t = p.ZP.getGuildIconURL({
    id: O,
    icon: y,
    size: 80
  })) && void 0 !== t ? t : void 0, G = T, W = null;
  return null != G && G.length > 6 && null != T && (G = null !== (n = null == T ? void 0 : T.slice(Math.max((null == T ? void 0 : T.length) - 6, 0))) && void 0 !== n ? n : [], W = T.length - 6), (0, r.jsxs)(d.VqE, {
    "aria-label": v,
    className: w.guildPopout,
    children: [null != F ? (0, r.jsx)("img", {
      src: F,
      alt: "",
      className: w.splashImage
    }) : null, (0, r.jsxs)("div", {
      className: s()(w.body, {
        [w.hasSplash]: null != F
      }),
      children: [(0, r.jsx)("div", {
        className: s()({
          [w.iconWithSplash]: null != F
        }),
        children: (0, r.jsx)(d.P3F, {
          onClick: D,
          children: (0, r.jsx)(m.ZP, {
            mask: m.ZP.Masks.SQUIRCLE,
            width: 88,
            height: 88,
            children: (0, r.jsx)("div", {
              className: w.iconMask,
              children: (0, r.jsx)(m.ZP, {
                mask: m.ZP.Masks.SQUIRCLE,
                width: 80,
                height: 80,
                children: (0, r.jsx)("img", {
                  src: L,
                  alt: "",
                  className: w.avatar
                })
              })
            })
          })
        })
      }), null != v ? (0, r.jsxs)("div", {
        className: w.guildNameWrapper,
        children: [(0, r.jsx)(h.Z, {
          className: w.badge,
          guild: a,
          tooltipPosition: "top",
          tooltipColor: d.ua7.Colors.PRIMARY,
          badgeColor: c.Z.unsafe_rawColors.PRIMARY_500.css
        }), (0, r.jsx)(d.Text, {
          variant: "text-md/semibold",
          className: w.guildName,
          children: v
        })]
      }) : null, null != C ? (0, r.jsx)(d.Text, {
        color: "header-secondary",
        className: w.description,
        variant: "text-sm/normal",
        children: C
      }) : null, (0, r.jsxs)("div", {
        className: w.memberInfo,
        children: [null != S ? (0, r.jsxs)("div", {
          className: w.memberCount,
          children: [(0, r.jsx)("div", {
            className: w.dotOnline
          }), (0, r.jsx)(d.Text, {
            variant: "text-xs/normal",
            className: w.memberText,
            children: I.NW.format(I.t["LC+S+v"], {
              membersOnline: S
            })
          })]
        }) : null, null != Z ? (0, r.jsxs)("div", {
          className: w.memberCount,
          children: [(0, r.jsx)("div", {
            className: w.dotOffline
          }), (0, r.jsx)(d.Text, {
            variant: "text-xs/normal",
            className: w.memberText,
            children: I.NW.format(I.t.zRl6XV, {
              count: Z
            })
          })]
        }) : null]
      })]
    }), (0, r.jsxs)("div", {
      className: w.footer,
      children: [null != G && G.length > 0 ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(d.X6q, {
          variant: "heading-deprecated-12/semibold",
          className: w.emojiHeader,
          color: "header-secondary",
          children: I.NW.string(I.t.Q60n1N)
        }), (0, r.jsxs)("div", {
          className: s()(w.emojiContainer, {
            [w.withCounter]: null != W
          }),
          children: [G.map(e => {
            let t = p.ZP.getEmojiURL({
              id: e.id,
              animated: !1,
              size: 24
            });
            return (0, r.jsx)(d.ua7, {
              text: ":".concat(e.name, ":"),
              children: e => {
                var n, l;
                return (0, r.jsx)("img", (n = E({}, e), l = l = {
                  width: 24,
                  height: 24,
                  src: t,
                  className: s()({
                    [w.emoji]: null == W
                  }),
                  alt: ""
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                  }
                  return n
                })(Object(l)).forEach(function(e) {
                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
                }), n))
              }
            }, e.id)
          }), null != W ? (0, r.jsx)(d.X6q, {
            variant: "heading-deprecated-12/semibold",
            className: w.emojiCounter,
            color: "header-secondary",
            children: "+".concat(W)
          }) : null]
        })]
      }) : null, (0, r.jsx)(d.zxk, {
        look: d.zxk.Looks.FILLED,
        color: d.zxk.Colors.BRAND,
        size: d.zxk.Sizes.SMALL,
        onClick: D,
        submitting: R,
        autoFocus: !0,
        children: I.NW.string(I.t["K+WeR0"])
      })]
    })]
  })
}

function k(e) {
  let {
    guildId: t,
    channelId: n,
    messageId: a
  } = e, {
    loading: s,
    unavailable: c,
    guild: o
  } = (0, i.cj)([O.Z], () => ({
    guild: O.Z.getGuild(t),
    loading: O.Z.isFetchingGuild(t),
    unavailable: O.Z.hasFetchFailed(t)
  }), [t]);
  return (l.useEffect(() => {
    null != o || s || c || (0, v.P)(t)
  }, [o, t, s, c]), s) ? (0, r.jsx)(d.VqE, {
    "aria-label": I.NW.string(I.t.ZTNur6),
    className: w.guildPopout,
    children: (0, r.jsx)(Z, {})
  }) : null == o || c ? (0, r.jsx)(T, {}) : (0, r.jsx)(_, {
    guild: o,
    channelId: n,
    messageId: a
  })
}

function R(e) {
  return (0, P.h)() ? (0, r.jsx)(y.Z, {
    setPopoutRef: e.setPopoutRef,
    guildId: e.guildId,
    name: e.name
  }) : (0, r.jsx)(k, E({}, e))
}