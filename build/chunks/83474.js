/** Chunk was on 68241 **/
n.d(t, {
  SK: () => k,
  ZP: () => R,
  sK: () => T
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
  p = n(314897),
  b = n(271383),
  g = n(768581),
  x = n(900849),
  O = n(249842),
  v = n(838367),
  P = n(576306),
  y = n(914620),
  N = n(981631),
  w = n(388032),
  C = n(548758),
  E = n(892561),
  I = n(494536);

function S(e) {
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
      className: C.splashPlaceholder
    }), (0, r.jsxs)("div", {
      className: s()(C.body, C.hasSplash),
      children: [(0, r.jsx)("div", {
        className: C.iconPlaceholder
      }), (0, r.jsx)("div", {
        children: (0, r.jsx)("div", {
          className: C.namePlaceholder
        })
      }), (0, r.jsxs)("div", {
        className: C.memberInfo,
        children: [(0, r.jsx)("div", {
          className: C.memberCount,
          children: (0, r.jsx)("div", {
            className: C.memberInfoPlaceholder
          })
        }), (0, r.jsx)("div", {
          className: C.memberCount,
          children: (0, r.jsx)("div", {
            className: C.memberInfoPlaceholder
          })
        })]
      }), (0, r.jsx)("div", {
        className: C.viewButtonPlaceholder
      })]
    })]
  })
}

function k() {
  let e = (0, u.ZP)();
  return (0, r.jsx)(d.VqE, {
    "aria-label": w.NW.string(w.t["8LKcho"]),
    className: C.guildPopout,
    children: (0, r.jsxs)("div", {
      className: C.body,
      children: [(0, r.jsx)("img", {
        src: (0, o.wj)(e) ? E : I,
        className: C.unavailableIcon,
        width: 80,
        height: 80,
        alt: ""
      }), (0, r.jsx)(d.X6q, {
        className: C.unavailableHeader,
        variant: "heading-md/semibold",
        children: w.NW.string(w.t["+kdPHx"])
      }), (0, r.jsx)(d.Text, {
        variant: "text-sm/normal",
        children: w.NW.string(w.t["Yn1+xs"])
      })]
    })
  })
}

function T(e) {
  var t, n;
  let {
    guild: a,
    channelId: o,
    messageId: u
  } = e, {
    name: O,
    id: v,
    discoverySplash: P,
    icon: y,
    description: E,
    presenceCount: I,
    memberCount: Z,
    emojis: k
  } = a, T = (0, i.e7)([p.default], () => p.default.getId()), _ = (0, i.e7)([b.ZP], () => b.ZP.isMember(v, T), [v, T]), [R, U] = l.useState(!1), D = e => {
    if (e.stopPropagation(), _)(0, f.XU)(v, o, u);
    else {
      let e = {
        page: N.ZY5.GUILD_CHANNEL,
        section: N.jXE.GUILD_POPOUT,
        object: N.qAy.CARD
      };
      (0, x.Ub)(v, e)
    }
    U(!0)
  }, F = g.ZP.getGuildDiscoverySplashURL({
    id: v,
    splash: P,
    size: 250 * (0, j.x_)()
  }), L = null !== (t = g.ZP.getGuildIconURL({
    id: v,
    icon: y,
    size: 80
  })) && void 0 !== t ? t : void 0, G = k, A = null;
  return null != G && G.length > 6 && null != k && (G = null !== (n = null == k ? void 0 : k.slice(Math.max((null == k ? void 0 : k.length) - 6, 0))) && void 0 !== n ? n : [], A = k.length - 6), (0, r.jsxs)(d.VqE, {
    "aria-label": O,
    className: C.guildPopout,
    children: [null != F ? (0, r.jsx)("img", {
      src: F,
      alt: "",
      className: C.splashImage
    }) : null, (0, r.jsxs)("div", {
      className: s()(C.body, {
        [C.hasSplash]: null != F
      }),
      children: [(0, r.jsx)("div", {
        className: s()({
          [C.iconWithSplash]: null != F
        }),
        children: (0, r.jsx)(d.P3F, {
          onClick: D,
          children: (0, r.jsx)(m.ZP, {
            mask: m.ZP.Masks.SQUIRCLE,
            width: 88,
            height: 88,
            children: (0, r.jsx)("div", {
              className: C.iconMask,
              children: (0, r.jsx)(m.ZP, {
                mask: m.ZP.Masks.SQUIRCLE,
                width: 80,
                height: 80,
                children: (0, r.jsx)("img", {
                  src: L,
                  alt: "",
                  className: C.avatar
                })
              })
            })
          })
        })
      }), null != O ? (0, r.jsxs)("div", {
        className: C.guildNameWrapper,
        children: [(0, r.jsx)(h.Z, {
          className: C.badge,
          guild: a,
          tooltipPosition: "top",
          tooltipColor: d.ua7.Colors.PRIMARY,
          badgeColor: c.Z.unsafe_rawColors.PRIMARY_500.css
        }), (0, r.jsx)(d.Text, {
          variant: "text-md/semibold",
          className: C.guildName,
          children: O
        })]
      }) : null, null != E ? (0, r.jsx)(d.Text, {
        color: "header-secondary",
        className: C.description,
        variant: "text-sm/normal",
        children: E
      }) : null, (0, r.jsxs)("div", {
        className: C.memberInfo,
        children: [null != I ? (0, r.jsxs)("div", {
          className: C.memberCount,
          children: [(0, r.jsx)("div", {
            className: C.dotOnline
          }), (0, r.jsx)(d.Text, {
            variant: "text-xs/normal",
            className: C.memberText,
            children: w.NW.format(w.t["LC+S+v"], {
              membersOnline: I
            })
          })]
        }) : null, null != Z ? (0, r.jsxs)("div", {
          className: C.memberCount,
          children: [(0, r.jsx)("div", {
            className: C.dotOffline
          }), (0, r.jsx)(d.Text, {
            variant: "text-xs/normal",
            className: C.memberText,
            children: w.NW.format(w.t.zRl6XV, {
              count: Z
            })
          })]
        }) : null]
      })]
    }), (0, r.jsxs)("div", {
      className: C.footer,
      children: [null != G && G.length > 0 ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(d.X6q, {
          variant: "heading-deprecated-12/semibold",
          className: C.emojiHeader,
          color: "header-secondary",
          children: w.NW.string(w.t.Q60n1N)
        }), (0, r.jsxs)("div", {
          className: s()(C.emojiContainer, {
            [C.withCounter]: null != A
          }),
          children: [G.map(e => {
            let t = g.ZP.getEmojiURL({
              id: e.id,
              animated: !1,
              size: 24
            });
            return (0, r.jsx)(d.ua7, {
              text: ":".concat(e.name, ":"),
              children: e => {
                var n, l;
                return (0, r.jsx)("img", (n = S({}, e), l = l = {
                  width: 24,
                  height: 24,
                  src: t,
                  className: s()({
                    [C.emoji]: null == A
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
          }), null != A ? (0, r.jsx)(d.X6q, {
            variant: "heading-deprecated-12/semibold",
            className: C.emojiCounter,
            color: "header-secondary",
            children: "+".concat(A)
          }) : null]
        })]
      }) : null, (0, r.jsx)(d.zxk, {
        look: d.zxk.Looks.FILLED,
        color: d.zxk.Colors.BRAND,
        size: d.zxk.Sizes.SMALL,
        onClick: D,
        submitting: R,
        autoFocus: !0,
        children: w.NW.string(w.t["K+WeR0"])
      })]
    })]
  })
}

function _(e) {
  let {
    guildId: t,
    channelId: n,
    messageId: a
  } = e, {
    loading: s,
    unavailable: c,
    guild: o
  } = (0, i.cj)([v.Z], () => ({
    guild: v.Z.getGuild(t),
    loading: v.Z.isFetchingGuild(t),
    unavailable: v.Z.hasFetchFailed(t)
  }), [t]);
  return (l.useEffect(() => {
    null != o || s || c || (0, O.P)(t)
  }, [o, t, s, c]), s) ? (0, r.jsx)(d.VqE, {
    "aria-label": w.NW.string(w.t.ZTNur6),
    className: C.guildPopout,
    children: (0, r.jsx)(Z, {})
  }) : null == o || c ? (0, r.jsx)(k, {}) : (0, r.jsx)(T, {
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
  }) : (0, r.jsx)(_, S({}, e))
}