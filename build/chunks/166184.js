/** Chunk was on 81954 **/
n.d(t, {
  Z: () => N
}), n(953529), n(388685), n(35282);
var l = n(200651),
  a = n(192379),
  r = n(120356),
  i = n.n(r),
  s = n(780384),
  o = n(481060),
  c = n(410030),
  d = n(686546),
  u = n(372769),
  m = n(134432),
  f = n(768581),
  h = n(624138),
  p = n(388032),
  x = n(192639),
  _ = n(129512),
  g = n(330065);
let v = [16, 16, 14, 14, 12, 10, 8],
  N = function(e) {
    var t, n;
    let {
      guild: r,
      disabled: N,
      small: b,
      loading: C = !1,
      description: j,
      memberCount: I,
      presenceCount: S,
      className: y
    } = e, O = (0, c.ZP)(), [P, T] = a.useState(!1);
    if (null == r || C) return (0, l.jsx)("div", {
      className: i()(y, x.card, x.cardPlaceholder, {
        [x.cardSmall]: b,
        [x.cardDisabled]: N
      })
    });
    let {
      name: F
    } = r, R = null != r.discoverySplash && /^data:/.test(r.discoverySplash) ? r.discoverySplash : f.ZP.getGuildDiscoverySplashURL({
      id: r.id,
      splash: r.discoverySplash,
      size: 240 * (0, m.x_)()
    }), E = (0, s.wj)(O) ? _ : g, M = null != (t = f.ZP.getGuildIconURL({
      id: r.id,
      icon: r.icon,
      size: 40
    })) ? t : void 0, w = null != r.description ? r.description : j, W = null != I ? I : null == r ? void 0 : r.memberCount, k = null != S ? S : null == r ? void 0 : r.presenceCount, B = null;
    if (null != M) B = (0, l.jsx)("img", {
      src: M,
      alt: "",
      className: x.avatar
    });
    else {
      let e = (0, h.Zg)(r.name);
      B = (0, l.jsx)("div", {
        className: x.defaultIcon,
        children: (0, l.jsx)(o.Text, {
          className: x.acronym,
          style: {
            fontSize: null != (n = v[e.length]) ? n : v[v.length - 1]
          },
          variant: "text-sm/normal",
          children: e
        })
      })
    }
    return (0, l.jsxs)("div", {
      className: i()(y, x.card, {
        [x.cardSmall]: b,
        [x.cardDisabled]: N,
        [x.splashLoaded]: P
      }),
      children: [(0, l.jsxs)("div", {
        className: x.cardHeader,
        children: [(0, l.jsx)("div", {
          className: x.splash,
          children: (0, l.jsx)("img", {
            src: null != R ? R : E,
            alt: "",
            className: x.splashImage,
            onLoad: () => T(!0)
          })
        }), (0, l.jsx)("div", {
          className: x.guildIcon,
          children: (0, l.jsx)(d.ZP, {
            mask: d.ZP.Masks.SQUIRCLE,
            width: 48,
            height: 48,
            children: (0, l.jsx)("div", {
              className: x.iconMask,
              children: (0, l.jsx)(d.ZP, {
                mask: d.ZP.Masks.SQUIRCLE,
                width: 40,
                height: 40,
                children: null != B ? B : null
              })
            })
          })
        })]
      }), (0, l.jsxs)("div", {
        className: x.guildInfo,
        children: [(0, l.jsxs)("div", {
          className: x.title,
          children: [(0, l.jsx)(u.Z, {
            className: x.verifiedIcon,
            guild: r,
            tooltipColor: o.ua7.Colors.PRIMARY
          }), (0, l.jsx)(o.Text, {
            className: x.guildName,
            variant: "text-md/normal",
            children: (0, l.jsx)("span", {
              children: F
            })
          })]
        }), (0, l.jsx)("div", {
          className: x.descriptionContainer,
          children: (0, l.jsx)(o.Text, {
            lineClamp: 3,
            className: x.description,
            variant: "text-sm/normal",
            tag: "span",
            children: w
          })
        }), (0, l.jsxs)("div", {
          className: x.memberInfo,
          children: [null != k && (0, l.jsxs)("div", {
            className: x.memberCount,
            children: [(0, l.jsx)("div", {
              className: x.dotOnline
            }), (0, l.jsx)(o.Text, {
              variant: "text-xs/normal",
              children: b ? p.NW.formatToPlainString(p.t.YMor7u, {
                count: k
              }) : p.NW.formatToPlainString(p.t["LC+S+v"], {
                membersOnline: k
              })
            })]
          }), null != W && (0, l.jsxs)("div", {
            className: x.memberCount,
            children: [(0, l.jsx)("div", {
              className: x.dotOffline
            }), (0, l.jsx)(o.Text, {
              variant: "text-xs/normal",
              children: b ? p.NW.formatToPlainString(p.t.YMor7u, {
                count: W
              }) : p.NW.formatToPlainString(p.t.zRl6XV, {
                count: W
              })
            })]
          })]
        })]
      })]
    })
  }