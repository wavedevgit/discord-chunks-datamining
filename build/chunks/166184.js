/** Chunk was on 46408 **/
n.d(t, {
  Z: () => E
}), n(266796), n(47120), n(301563);
var i = n(200651),
  r = n(192379),
  l = n(120356),
  a = n.n(l),
  o = n(780384),
  s = n(481060),
  c = n(410030),
  d = n(686546),
  u = n(372769),
  f = n(134432),
  m = n(768581),
  _ = n(624138),
  v = n(388032),
  g = n(879731),
  h = n(129512),
  p = n(330065);
let I = [16, 16, 14, 14, 12, 10, 8],
  E = function(e) {
    var t, n;
    let {
      guild: l,
      disabled: E,
      small: b,
      loading: N = !1,
      description: C,
      memberCount: x,
      presenceCount: S,
      className: y
    } = e, O = (0, c.ZP)(), [j, T] = r.useState(!1);
    if (null == l || N) return (0, i.jsx)("div", {
      className: a()(y, g.card, g.cardPlaceholder, {
        [g.cardSmall]: b,
        [g.cardDisabled]: E
      })
    });
    let {
      name: P
    } = l, A = null != l.discoverySplash && /^data:/.test(l.discoverySplash) ? l.discoverySplash : m.ZP.getGuildDiscoverySplashURL({
      id: l.id,
      splash: l.discoverySplash,
      size: 240 * (0, f.x_)()
    }), R = (0, o.wj)(O) ? h : p, F = null !== (t = m.ZP.getGuildIconURL({
      id: l.id,
      icon: l.icon,
      size: 40
    })) && void 0 !== t ? t : void 0, D = null != l.description ? l.description : C, L = null != x ? x : null == l ? void 0 : l.memberCount, w = null != S ? S : null == l ? void 0 : l.presenceCount, M = null;
    if (null != F) M = (0, i.jsx)("img", {
      src: F,
      alt: "",
      className: g.avatar
    });
    else {
      let e = (0, _.Zg)(l.name);
      M = (0, i.jsx)("div", {
        className: g.defaultIcon,
        children: (0, i.jsx)(s.Text, {
          className: g.acronym,
          style: {
            fontSize: null !== (n = I[e.length]) && void 0 !== n ? n : I[I.length - 1]
          },
          variant: "text-sm/normal",
          children: e
        })
      })
    }
    return (0, i.jsxs)("div", {
      className: a()(y, g.card, {
        [g.cardSmall]: b,
        [g.cardDisabled]: E,
        [g.splashLoaded]: j
      }),
      children: [(0, i.jsxs)("div", {
        className: g.cardHeader,
        children: [(0, i.jsx)("div", {
          className: g.splash,
          children: (0, i.jsx)("img", {
            src: null != A ? A : R,
            alt: "",
            className: g.splashImage,
            onLoad: () => T(!0)
          })
        }), (0, i.jsx)("div", {
          className: g.guildIcon,
          children: (0, i.jsx)(d.ZP, {
            mask: d.ZP.Masks.SQUIRCLE,
            width: 48,
            height: 48,
            children: (0, i.jsx)("div", {
              className: g.iconMask,
              children: (0, i.jsx)(d.ZP, {
                mask: d.ZP.Masks.SQUIRCLE,
                width: 40,
                height: 40,
                children: null != M ? M : null
              })
            })
          })
        })]
      }), (0, i.jsxs)("div", {
        className: g.guildInfo,
        children: [(0, i.jsxs)("div", {
          className: g.title,
          children: [(0, i.jsx)(u.Z, {
            className: g.verifiedIcon,
            guild: l,
            tooltipColor: s.ua7.Colors.PRIMARY
          }), (0, i.jsx)(s.Text, {
            className: g.guildName,
            variant: "text-md/normal",
            children: (0, i.jsx)("span", {
              children: P
            })
          })]
        }), (0, i.jsx)("div", {
          className: g.descriptionContainer,
          children: (0, i.jsx)(s.Text, {
            lineClamp: 3,
            className: g.description,
            variant: "text-sm/normal",
            tag: "span",
            children: D
          })
        }), (0, i.jsxs)("div", {
          className: g.memberInfo,
          children: [null != w && (0, i.jsxs)("div", {
            className: g.memberCount,
            children: [(0, i.jsx)("div", {
              className: g.dotOnline
            }), (0, i.jsx)(s.Text, {
              variant: "text-xs/normal",
              children: b ? v.NW.formatToPlainString(v.t.YMor7u, {
                count: w
              }) : v.NW.formatToPlainString(v.t["LC+S+v"], {
                membersOnline: w
              })
            })]
          }), null != L && (0, i.jsxs)("div", {
            className: g.memberCount,
            children: [(0, i.jsx)("div", {
              className: g.dotOffline
            }), (0, i.jsx)(s.Text, {
              variant: "text-xs/normal",
              children: b ? v.NW.formatToPlainString(v.t.YMor7u, {
                count: L
              }) : v.NW.formatToPlainString(v.t.zRl6XV, {
                count: L
              })
            })]
          })]
        })]
      })]
    })
  }