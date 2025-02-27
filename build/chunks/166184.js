/** Chunk was on 54408 **/
t.d(i, {
  Z: () => m
}), t(266796), t(47120), t(301563);
var n = t(200651),
  l = t(192379),
  r = t(120356),
  a = t.n(r),
  s = t(780384),
  u = t(481060),
  o = t(410030),
  c = t(686546),
  d = t(372769),
  E = t(134432),
  f = t(768581),
  I = t(624138),
  _ = t(388032),
  h = t(879731),
  S = t(129512),
  g = t(330065);
let v = [16, 16, 14, 14, 12, 10, 8],
  m = function(e) {
    var i, t;
    let {
      guild: r,
      disabled: m,
      small: N,
      loading: p = !1,
      description: A,
      memberCount: T,
      presenceCount: C,
      className: D
    } = e, P = (0, o.ZP)(), [y, L] = l.useState(!1);
    if (null == r || p) return (0, n.jsx)("div", {
      className: a()(D, h.card, h.cardPlaceholder, {
        [h.cardSmall]: N,
        [h.cardDisabled]: m
      })
    });
    let {
      name: O
    } = r, R = null != r.discoverySplash && /^data:/.test(r.discoverySplash) ? r.discoverySplash : f.ZP.getGuildDiscoverySplashURL({
      id: r.id,
      splash: r.discoverySplash,
      size: 240 * (0, E.x_)()
    }), b = (0, s.wj)(P) ? S : g, j = null !== (i = f.ZP.getGuildIconURL({
      id: r.id,
      icon: r.icon,
      size: 40
    })) && void 0 !== i ? i : void 0, V = null != r.description ? r.description : A, x = null != T ? T : null == r ? void 0 : r.memberCount, G = null != C ? C : null == r ? void 0 : r.presenceCount, F = null;
    if (null != j) F = (0, n.jsx)("img", {
      src: j,
      alt: "",
      className: h.avatar
    });
    else {
      let e = (0, I.Zg)(r.name);
      F = (0, n.jsx)("div", {
        className: h.defaultIcon,
        children: (0, n.jsx)(u.Text, {
          className: h.acronym,
          style: {
            fontSize: null !== (t = v[e.length]) && void 0 !== t ? t : v[v.length - 1]
          },
          variant: "text-sm/normal",
          children: e
        })
      })
    }
    return (0, n.jsxs)("div", {
      className: a()(D, h.card, {
        [h.cardSmall]: N,
        [h.cardDisabled]: m,
        [h.splashLoaded]: y
      }),
      children: [(0, n.jsxs)("div", {
        className: h.cardHeader,
        children: [(0, n.jsx)("div", {
          className: h.splash,
          children: (0, n.jsx)("img", {
            src: null != R ? R : b,
            alt: "",
            className: h.splashImage,
            onLoad: () => L(!0)
          })
        }), (0, n.jsx)("div", {
          className: h.guildIcon,
          children: (0, n.jsx)(c.ZP, {
            mask: c.ZP.Masks.SQUIRCLE,
            width: 48,
            height: 48,
            children: (0, n.jsx)("div", {
              className: h.iconMask,
              children: (0, n.jsx)(c.ZP, {
                mask: c.ZP.Masks.SQUIRCLE,
                width: 40,
                height: 40,
                children: null != F ? F : null
              })
            })
          })
        })]
      }), (0, n.jsxs)("div", {
        className: h.guildInfo,
        children: [(0, n.jsxs)("div", {
          className: h.title,
          children: [(0, n.jsx)(d.Z, {
            className: h.verifiedIcon,
            guild: r,
            tooltipColor: u.ua7.Colors.PRIMARY
          }), (0, n.jsx)(u.Text, {
            className: h.guildName,
            variant: "text-md/normal",
            children: (0, n.jsx)("span", {
              children: O
            })
          })]
        }), (0, n.jsx)("div", {
          className: h.descriptionContainer,
          children: (0, n.jsx)(u.Text, {
            lineClamp: 3,
            className: h.description,
            variant: "text-sm/normal",
            tag: "span",
            children: V
          })
        }), (0, n.jsxs)("div", {
          className: h.memberInfo,
          children: [null != G && (0, n.jsxs)("div", {
            className: h.memberCount,
            children: [(0, n.jsx)("div", {
              className: h.dotOnline
            }), (0, n.jsx)(u.Text, {
              variant: "text-xs/normal",
              children: N ? _.NW.formatToPlainString(_.t.YMor7u, {
                count: G
              }) : _.NW.formatToPlainString(_.t["LC+S+v"], {
                membersOnline: G
              })
            })]
          }), null != x && (0, n.jsxs)("div", {
            className: h.memberCount,
            children: [(0, n.jsx)("div", {
              className: h.dotOffline
            }), (0, n.jsx)(u.Text, {
              variant: "text-xs/normal",
              children: N ? _.NW.formatToPlainString(_.t.YMor7u, {
                count: x
              }) : _.NW.formatToPlainString(_.t.zRl6XV, {
                count: x
              })
            })]
          })]
        })]
      })]
    })
  }