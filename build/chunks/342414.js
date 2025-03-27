/** Chunk was on 75607 **/
n.d(t, {
  Z: () => w
}), n(47120);
var r = n(200651);
n(192379);
var i = n(120356),
  s = n.n(i),
  a = n(481060),
  l = n(100527),
  o = n(906732),
  c = n(927359),
  d = n(975298),
  u = n(125529),
  m = n(975104),
  g = n(63063),
  p = n(775412),
  h = n(695349),
  f = n(520540),
  x = n(501862),
  N = n(533525),
  b = n(197115),
  _ = n(823188),
  E = n(184176),
  j = n(386733),
  C = n(474936),
  O = n(981631),
  S = n(388032),
  v = n(267625),
  T = n(872905),
  I = n(578478);

function y(e) {
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
let A = e => {
    let {
      className: t
    } = e, {
      headingText: n,
      headingTop: i,
      headingBottom: l
    } = Z();
    return (0, r.jsxs)("div", {
      className: s()(v.container, t),
      "data-testid": "subscriber-nitro-home-hero-header",
      children: [(0, r.jsx)("img", {
        src: T,
        alt: "",
        className: v.headerArt
      }), (0, r.jsxs)("div", {
        className: v.content,
        children: [i, (0, r.jsx)(a.X6q, {
          variant: "display-lg",
          color: "always-white",
          children: n
        }), l, (0, r.jsx)("div", {
          className: v.buttonContainer,
          children: (0, r.jsx)(b.Z, {
            color: a.Ttl.BRAND,
            buttonText: S.NW.string(S.t["3KomGR"]),
            className: v.button,
            isGift: !0
          })
        })]
      })]
    })
  },
  P = e => {
    let {
      location: t
    } = e, {
      subscriberHomeVariant: n
    } = f.g.useExperiment({
      location: t
    }, {
      autoTrackExposure: !1
    }), i = n === f.p.VARIANT_2, {
      headingText: s,
      headingTop: l,
      headingBottom: o
    } = Z();
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("img", {
        src: I,
        alt: "",
        className: v.headerArtV2
      }), (0, r.jsx)("div", {
        className: v.containerV2,
        "data-testid": "subscriber-nitro-home-hero-header",
        children: (0, r.jsxs)("div", {
          className: v.contentV2,
          children: [l, (0, r.jsx)(a.X6q, {
            variant: "display-lg",
            color: "always-white",
            children: s
          }), o, i && (0, r.jsx)("div", {
            className: v.buttonContainer,
            children: (0, r.jsx)(b.Z, {
              color: a.Ttl.BRAND,
              buttonText: S.NW.string(S.t["3KomGR"]),
              className: v.button,
              isGift: !0
            })
          }), (0, r.jsx)(j.Z, {})]
        })
      })]
    })
  },
  R = () => {
    let {
      headingText: e
    } = Z();
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("img", {
        src: I,
        alt: "",
        className: v.headerArtV2
      }), (0, r.jsx)("div", {
        className: v.reverseContainer,
        "data-testid": "subscriber-nitro-home-hero-header",
        children: (0, r.jsxs)("div", {
          className: v.contentV2,
          children: [(0, r.jsx)("div", {
            className: v.reverseTrialHomeHeader,
            children: (0, r.jsx)(a.X6q, {
              variant: "display-lg",
              color: "always-white",
              children: e
            })
          }), (0, r.jsx)(E.Z, {})]
        })
      })]
    })
  },
  [D, Z] = (0, m.Z)(),
  w = e => {
    let {
      className: t,
      location: n
    } = e, {
      analyticsLocations: i
    } = (0, o.ZP)(l.Z.PREMIUM_MARKETING_HERO_CTA), a = (0, h.W)(), m = (0, p._O)(), f = S.NW.string(S.t.qYKftb), b = (0, N.b)(n), E = (0, r.jsx)(A, {
      className: t
    }), j = S.NW.string(S.t.ifwQZW), T = !1, {
      fractionalState: I,
      endsAt: Z
    } = (0, d.Z)(), w = (0, c.Z)(Z, c.a.ENDS_IN);
    a ? (j = S.NW.string(S.t.ifwQZW), E = (0, r.jsx)(R, {})) : b && (f = S.NW.string(S.t.qYKftb), j = S.NW.string(S.t.ifwQZW), E = (0, r.jsx)(P, {
      location: n
    }));
    let k = null;
    if (I !== C.a$.NONE && !a) {
      m = !0, f = S.NW.string(S.t.vaqFvb), T = !0;
      let e = S.NW.format(S.t["yR+oDA"], {
        helpCenterLink: g.Z.getArticleURL(O.BhN.FRACTIONAL_PREMIUM_ABOUT)
      });
      k = (0, r.jsx)(u.Z, {
        text: e,
        "aria-label": e.toString(),
        tooltipClassName: v.tooltip,
        position: "right",
        children: e => {
          var t, n;
          return (0, r.jsx)("div", (t = y({}, e), n = n = {
            className: v.pillContainer,
            children: (0, r.jsx)(x.Z, {
              countdownText: w,
              showInfoIcon: !0
            })
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
          }), t))
        }
      })
    }
    let W = {
        className: s()(v.trialPill, {
          [v.hidden]: !m
        }),
        text: f,
        colorOptions: _.VE.PREMIUM_TIER_2_WHITE_FILL
      },
      L = T ? (0, r.jsx)("div", {
        className: v.flexCentered,
        children: (0, r.jsx)(_.mn, y({}, W))
      }) : (0, r.jsx)(_.Cy, y({}, W));
    return (0, r.jsx)(o.Gt, {
      value: i,
      children: (0, r.jsx)(D.Provider, {
        value: {
          headingText: j,
          headingTop: L,
          headingBottom: k
        },
        children: E
      })
    })
  }