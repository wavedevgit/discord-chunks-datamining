/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => v
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(688619),
  a = n.n(s),
  l = n(120356),
  o = n.n(l),
  c = n(866442),
  A = n(481060),
  d = n(550271),
  u = n(688298),
  g = n(995119),
  f = n(116175),
  m = n(308083),
  p = n(388032),
  h = n(187649),
  C = n(154662);
let b = [f.ZD.SWORD, f.ZD.WATER_DROP, f.ZD.SKULL, f.ZD.TOADSTOOL, f.ZD.MOON, f.ZD.LIGHTNING, f.ZD.LEAF, f.ZD.HEART, f.ZD.FIRE, f.ZD.COMPASS, f.ZD.CROSSHAIRS, f.ZD.FLOWER, f.ZD.FORCE, f.ZD.GEM, f.ZD.LAVA, f.ZD.PSYCHIC, f.ZD.SMOKE, f.ZD.SNOW, f.ZD.SOUND, f.ZD.SUN, f.ZD.WIND],
  v = e => {
    let {
      handleUpdate: t,
      badge: n,
      primaryColor: s,
      secondaryColor: l,
      tag: v,
      error: x,
      furthestStep: N,
      inSettings: j
    } = e, E = i.useMemo(() => {
      let e = (0, f.yf)();
      return {
        primary: null != s ? s : e.primary,
        secondary: null != l ? l : e.secondary
      }
    }, [s, l]);
    i.useEffect(() => {
      (null == s || null == l) && t({
        badgePrimaryColor: E.primary,
        badgeSecondaryColor: E.secondary
      })
    }, [E.primary, E.secondary, t, s, l]);
    let I = i.useMemo(() => {
        for (let e = 0; e < f.sg.length; e++)
          if (f.sg[e].primary === E.primary && f.sg[e].secondary === E.secondary) return 1 + e;
        return 0
      }, [E.primary, E.secondary]),
      [O, y] = i.useState(!1),
      w = i.useCallback(() => {
        let e = b[Math.floor(Math.random() * b.length)];
        t({
          badgeKind: e,
          badgePrimaryColor: a().random().hex(),
          badgeSecondaryColor: a().random().hex()
        })
      }, [t]);
    return i.useEffect(() => {
      N !== m.Wy.CUSTOMIZE_TAG_BADGE || j || t({
        brandPrimaryColor: E.primary,
        brandSecondaryColor: E.secondary
      })
    }, [t, E.primary, E.secondary, N, s, l, j]), (0, r.jsxs)("div", {
      className: C.slideContent,
      children: [(0, r.jsx)(A.X6q, {
        variant: "heading-xxl/medium",
        className: C.title,
        children: p.NW.string(p.t.ZcHHvr)
      }), (0, r.jsx)(A.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        className: C.subtitle,
        children: p.NW.string(p.t.Tr399P)
      }), (0, r.jsx)(g.Z, {
        onClick: w
      }), (0, r.jsxs)("div", {
        className: h.container,
        children: [(0, r.jsxs)("div", {
          className: h.badgesContainer,
          children: [(0, r.jsxs)("div", {
            className: h.pickerContainer,
            children: [(0, r.jsx)(A.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: p.NW.string(p.t.eyPefn)
            }), (0, r.jsx)("div", {
              className: h.pickerGrid,
              children: b.map(e => (0, r.jsx)(A.P3F, {
                onClick: () => t({
                  badgeKind: e
                }),
                className: o()(h.badgeAssetContainer, {
                  [h.badgeAssetContainerSelected]: e === n
                }),
                children: (0, r.jsx)(d.A, {
                  badge: e,
                  width: 32,
                  height: 32
                })
              }, "".concat(e)))
            })]
          }), (0, r.jsxs)("div", {
            className: h.pickerContainer,
            children: [(0, r.jsx)(A.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: p.NW.string(p.t["93wr6e"])
            }), (0, r.jsxs)("div", {
              className: h.pickerGrid,
              children: [(0, r.jsx)(u.Z, {
                showSecondaryColor: f.ME[n] >= 2,
                palette: E,
                onPrimaryColorChange: e => {
                  t({
                    badgePrimaryColor: (0, c.Rf)(e)
                  })
                },
                onSecondaryColorChange: e => {
                  t({
                    badgeSecondaryColor: (0, c.Rf)(e)
                  })
                },
                shouldShow: O,
                onRequestClose: () => y(!1),
                children: e => {
                  var t, n;
                  return (0, r.jsx)(A.P3F, (t = function(e) {
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
                  }({}, e), n = n = {
                    onClick: () => {
                      y(e => !e)
                    },
                    className: o()(h.badgeAssetContainer, {
                      [h.badgeAssetContainerSelected]: 0 === I
                    }),
                    children: (0, r.jsx)(A.V3v, {
                      size: "custom",
                      width: 20,
                      height: 20
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
              }), f.sg.map((e, i) => (0, r.jsx)(A.P3F, {
                onClick: () => {
                  t({
                    badgePrimaryColor: f.sg[i].primary,
                    badgeSecondaryColor: f.sg[i].secondary
                  })
                },
                className: o()(h.badgeAssetContainer, {
                  [h.badgeAssetContainerSelected]: i + 1 === I
                }),
                children: (0, r.jsx)(d.A, {
                  badge: n,
                  width: 32,
                  height: 32,
                  primaryTintColor: e.primary,
                  secondaryTintColor: e.secondary
                })
              }, "".concat(e.primary, ":").concat(e.secondary)))]
            })]
          })]
        }), (0, r.jsxs)("div", {
          className: h.tagContainer,
          children: [(0, r.jsx)(A.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            children: p.NW.string(p.t["3eZP8/"])
          }), null != x && (0, r.jsx)(A.Text, {
            variant: "text-sm/normal",
            color: "status-danger",
            className: C.errorText,
            children: x
          }), (0, r.jsx)(A.oil, {
            className: h.tagInputWrapper,
            inputClassName: h.tagInput,
            value: null != v ? v : "",
            onChange: e => t({
              tag: e
            }),
            maxLength: m.cG,
            placeholder: p.NW.string(p.t["0V0ZFx"]),
            autoFocus: !0,
            prefixElement: (0, r.jsx)(d.A, {
              badge: n,
              width: 40,
              height: 40,
              primaryTintColor: E.primary,
              secondaryTintColor: E.secondary
            })
          }), (0, r.jsx)(A.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            className: h.tagValidationText,
            children: p.NW.string(p.t.lGtFwM)
          })]
        })]
      })]
    })
  }