/** Chunk was on 51724 **/
n.d(t, {
  Z: () => C
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(119617),
  o = n(481060),
  c = n(975298),
  d = n(410154),
  u = n(695349),
  m = n(314684),
  p = n(687362),
  g = n(675619),
  h = n(119850),
  f = n(32173),
  x = n(391110),
  b = n(75077),
  N = n(320319),
  _ = n(730313);
let E = e => {
    let {
      showAllPerksButton: t,
      leftAlignHeaders: n,
      title: i,
      headerClassname: s
    } = e, a = (0, r.jsx)(o.X6q, {
      variant: "heading-xxl/extrabold",
      color: "header-primary",
      className: null != s ? s : _.heading,
      children: i
    });
    return null == t ? a : n ? (0, r.jsxs)("div", {
      className: _.sectionHeader,
      children: [a, null != t && (0, r.jsx)("div", {
        className: _.showAllPerksButton,
        children: t
      })]
    }) : (0, r.jsx)("div", {
      className: _.container,
      children: (0, r.jsx)("div", {
        className: _.sectionHeaderSeeAll,
        children: a
      })
    })
  },
  C = e => {
    var t;
    let {
      className: n,
      variant: s = x.R0.PERKS_DISCOVERABILITY,
      noBackground: C = !1,
      leftAlignHeaders: j = !1,
      showAllPerksButton: O,
      headerClassname: v,
      isFullScreen: S = !0,
      shouldAutoScroll: T = !1
    } = e, I = i.useRef(null), y = (0, m.Er)(), A = (0, p.v)(y), P = (0, d.ZP)("perks-discoverability"), R = s === x.R0.WHATS_NEW, D = (0, m.IY)(), Z = (0, h.x)();
    i.useEffect(() => {
      R && !A && (D(), Z())
    }, [D, Z, R, A]);
    let w = () => {
        R && A && D()
      },
      k = A && R;
    (0, g.r)({
      ref: I,
      shouldScroll: k || T,
      onScrollEnd: w,
      onCleanup: w
    });
    let W = (0, b.Op)(R),
      L = (0, f.Z)(),
      B = (0, b.mN)(),
      {
        fractionalState: M
      } = (0, c.Z)(),
      U = (0, u.W)(),
      V = (0, b.sP)({
        perksCards: L,
        variant: s,
        shopMarketingVariation: P,
        isFullScreen: S,
        showTenureCard: null == y ? void 0 : y.showCard,
        isPremiumSubscriber: B,
        fractionalState: M,
        isInReverseTrial: U
      }),
      G = V.some(e => null != e.pillText),
      [F, H] = i.useState(null),
      z = i.useRef(new l.qA);
    return (0, r.jsxs)(r.Fragment, {
      children: [(null == L ? void 0 : null === (t = L.tenureRewardCollectible) || void 0 === t ? void 0 : t.name) === f.u.TENURE_REWARD_COLLECTIBLE && (0, r.jsx)(l.O_, {
        ref: H,
        className: _.confettiCanvas,
        environment: z.current
      }), (0, r.jsxs)("div", {
        ref: I,
        className: a()(_.section, {
          [_.centerAlignSection]: !j,
          [_.leftAlignSection]: j
        }, n),
        children: [(0, r.jsx)(E, {
          showAllPerksButton: O,
          leftAlignHeaders: j,
          title: W.title,
          headerClassname: v
        }), (0, r.jsx)(o.Text, {
          variant: "text-lg/normal",
          color: "header-primary",
          className: a()(_.subtitle, {
            [_.subtitle]: null == O || j,
            [_.subtitleWithButton]: null != O && !j,
            [_.fullWidth]: R || j,
            [_.moreSubtitleMargin]: G,
            [_.leftAlignSubtitle]: j,
            [_.centerAlignSubtitle]: !j
          }),
          children: W.subtitle
        }), !j && null != O && (0, r.jsx)("div", {
          className: _.showAllPerksButtonCenter,
          children: O
        }), (0, r.jsx)("div", {
          className: a()({
            [_.cardContainer]: S,
            [_.cardContainerNarrowWidth]: !S
          }),
          children: V.map((e, t) => {
            var n, i;
            return (0, r.jsx)(N.Z, (n = function(e) {
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
            }({
              confettiCanvas: e.name === f.u.TENURE_REWARD_COLLECTIBLE ? F : void 0
            }, e), i = i = {
              forceShadow: C
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
              }
              return n
            })(Object(i)).forEach(function(e) {
              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
            }), n), "".concat(e.name, "_").concat(t))
          })
        })]
      })]
    })
  }