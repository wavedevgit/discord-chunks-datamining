/** Chunk was on 78431 **/
r.d(t, {
  Z: () => g
});
var n = r(255367);
r(73800);
var i = r(120356),
  o = r.n(i),
  l = r(755721),
  s = r(481060),
  c = r(367907),
  a = r(357352),
  d = r(434404),
  u = r(626135),
  C = r(629481),
  p = r(981631),
  f = r(388032),
  b = r(765214);

function j(e) {
  let {
    pills: t
  } = e;
  return (0, n.jsx)("div", {
    className: b.row,
    children: t.map(e => (0, n.jsx)("div", {
      className: b.pill,
      children: (0, n.jsx)(s.Text, {
        variant: "text-sm/normal",
        children: e
      })
    }, e))
  })
}

function g(e) {
  let {
    guildId: t,
    showCTA: r,
    responsive: i = !0
  } = e, g = [
    [f.intl.string(f.t["73h51N"]), f.intl.string(f.t["gbjs//"])],
    [f.intl.string(f.t.mCoH0d), f.intl.string(f.t["l/BuSE"])],
    [f.intl.string(f.t.psQktr), f.intl.string(f.t.nMhIZW)],
    [f.intl.string(f.t["0ItLmJ"]), f.intl.string(f.t.yQHqsL)]
  ];
  return (0, n.jsx)("div", {
    className: o()({
      [b.responsive]: i
    }),
    children: (0, n.jsxs)("div", {
      className: b.container,
      children: [(0, n.jsxs)("div", {
        className: b.content,
        children: [(0, n.jsx)("div", {
          className: b.pillContainer,
          children: g.map((e, t) => (0, n.jsx)(j, {
            pills: e
          }, "pill-row-".concat(t)))
        }), (0, n.jsxs)("div", {
          className: b.ctaContent,
          children: [(0, n.jsx)(s.Text, {
            variant: "text-lg/medium",
            color: "header-primary",
            children: f.intl.string(f.t["67arYG"])
          }), r && (0, n.jsxs)(s.gtL, {
            size: l.zx.Sizes.MEDIUM,
            className: b.getStartedButton,
            innerClassName: b.getStartedButtonContents,
            shineSize: s.gtL.ShineSizes.SMALL,
            onClick: () => {
              var e, r;
              u.default.track(p.rMx.GUILD_SHOP_PREVIEW_CLICK, (e = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                  "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                  }))), n.forEach(function(t) {
                    var n;
                    n = r[t], t in e ? Object.defineProperty(e, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                    }) : e[t] = n
                  })
                }
                return e
              }({}, (0, c.hH)(t)), r = r = {
                action_taken: C.mz.GET_STARTED_CLICK
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var n = Object.getOwnPropertySymbols(e);
                  r.push.apply(r, n)
                }
                return r
              })(Object(r)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              }), e)), d.Z.open(t, p.pNK.GUILD_PRODUCTS)
            },
            children: [f.intl.string(f.t.oyzLpK), (0, n.jsx)(s.ZSh, {
              size: "md",
              color: "currentColor",
              className: b.getStartedArrow
            })]
          })]
        })]
      }), (0, n.jsxs)("div", {
        className: b.muralImageContainer,
        children: [(0, n.jsx)("img", {
          src: (0, a.b)("server_products/storefront/preview-mural.png"),
          alt: "",
          className: b.muralImage
        }), (0, n.jsx)("img", {
          src: (0, a.b)("server_products/storefront/preview-mural-reduced.png"),
          alt: "",
          className: b.muralImageReducedWidth
        })]
      })]
    })
  })
}