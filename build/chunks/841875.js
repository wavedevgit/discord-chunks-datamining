/** Chunk was on 45620 **/
"use strict";
n.d(t, {
  Z: () => C
});
var r = n(255367),
  l = n(73800),
  i = n(120356),
  a = n.n(i),
  o = n(990705),
  s = n(335818),
  c = n(255835),
  u = n(755721),
  d = n(481060),
  p = n(410030),
  g = n(822857),
  f = n(501431),
  h = n(215023),
  b = n(231338),
  m = n(388032),
  _ = n(590305);

function C() {
  let {
    onToggleOrbEligible: e,
    orbEligible: t,
    reset: n,
    hasFilters: l
  } = (0, f.S)(), i = l(), {
    enabled: a
  } = (0, g.WX)({
    location: "Shop"
  });
  return (0, r.jsxs)("div", {
    className: _.filterBar,
    children: [(0, r.jsxs)("div", {
      className: _.filterCheckboxes,
      children: [(0, r.jsx)(d.Text, {
        variant: "text-md/semibold",
        children: m.intl.string(m.t.Qk6r1d)
      }), h.xg.map(e => (0, r.jsx)(O, {
        filter: e
      }, e)), a && (0, r.jsx)(v, {
        onChange: () => e(),
        text: m.intl.string(m.t.AHHHgI),
        value: t
      })]
    }), (0, r.jsx)(E, {}), (0, r.jsx)(y, {}), i && (0, r.jsx)(u.zx, {
      color: u.Tt.PRIMARY,
      className: _.resetButton,
      onClick: n,
      children: m.intl.string(m.t.jwH6KS)
    })]
  })
}
let O = e => {
    var t;
    let {
      filter: n
    } = e, l = {
      [s.G.AVATAR_DECORATION]: m.intl.string(m.t.dRZYND),
      [s.G.PROFILE_EFFECT]: m.intl.string(m.t["1cNjt7"]),
      [s.G.NAMEPLATE]: m.intl.string(m.t.V68Fq6),
      [s.G.BUNDLE]: m.intl.string(m.t.FYFppq)
    }, {
      itemTypeFilters: i,
      onToggleItemType: a
    } = (0, f.S)();
    return (0, r.jsx)("div", {
      children: (0, r.jsx)(v, {
        onChange: () => a(n),
        text: null != (t = l[n]) ? t : "",
        value: i.has(n)
      })
    })
  },
  v = e => {
    let {
      onChange: t,
      text: n,
      value: l
    } = e;
    return (0, r.jsxs)(d.P3F, {
      className: _.filterCheckbox,
      onClick: t,
      children: [(0, r.jsx)("div", {
        className: _.checkbox,
        children: (0, r.jsx)(d.XZJ, {
          value: l
        })
      }), (0, r.jsx)(d.Text, {
        variant: "text-md/normal",
        children: n
      })]
    })
  },
  E = () => {
    let e = l.useMemo(() => [{
        color: "#9B59B6",
        label: m.intl.string(m.t.kqUD4O),
        enum: o.x.PURPLE
      }, {
        color: "#3498DB",
        label: m.intl.string(m.t.qQTRaW),
        enum: o.x.BLUE
      }, {
        color: "#2ECC71",
        label: m.intl.string(m.t["f/Ylk5"]),
        enum: o.x.GREEN
      }, {
        color: "#A0522D",
        label: m.intl.string(m.t["Sd/BMT"]),
        enum: o.x.BROWN
      }, {
        color: "#F1C40F",
        label: m.intl.string(m.t["0fevY2"]),
        enum: o.x.YELLOW
      }], []),
      t = l.useMemo(() => [{
        color: "#E67E22",
        label: m.intl.string(m.t.ZE7weH),
        enum: o.x.ORANGE
      }, {
        color: "#E74C3C",
        label: m.intl.string(m.t.hKJGOD),
        enum: o.x.RED
      }, {
        color: "#EC407A",
        label: m.intl.string(m.t.HvLEGB),
        enum: o.x.PINK
      }, {
        color: "#FFFFFF",
        label: m.intl.string(m.t["CB+lND"]),
        enum: o.x.WHITE
      }, {
        color: "#262626",
        label: m.intl.string(m.t["dMey+v"]),
        enum: o.x.BLACK
      }], []);
    return (0, r.jsxs)("div", {
      className: _.colorSwatches,
      children: [(0, r.jsx)(d.Text, {
        variant: "text-md/semibold",
        children: m.intl.string(m.t.K1xGoK)
      }), (0, r.jsx)(S, {
        colors: e
      }), (0, r.jsx)(S, {
        colors: t
      })]
    })
  },
  S = e => {
    let {
      colors: t
    } = e, {
      colorFilters: n,
      onToggleColor: l
    } = (0, f.S)();
    return (0, r.jsx)("div", {
      className: _.colorSwatchRow,
      children: t.map(e => {
        let {
          color: t,
          label: i,
          enum: a
        } = e;
        return (0, r.jsx)(x, {
          color: t,
          label: i,
          enum: a,
          isToggled: n.has(a),
          onToggleColor: l
        }, a)
      })
    })
  },
  x = e => {
    let {
      color: t,
      label: n,
      enum: l,
      isToggled: i,
      onToggleColor: o
    } = e;
    return (0, r.jsx)(d.ua7, {
      text: n,
      children: e => {
        let {
          onMouseEnter: s,
          onMouseLeave: c
        } = e;
        return (0, r.jsx)(d.P3F, {
          onMouseEnter: s,
          onMouseLeave: c,
          onFocus: s,
          onBlur: c,
          className: a()(_.circle, {
            [_.circleToggled]: i
          }),
          style: {
            backgroundColor: t
          },
          "aria-label": n,
          onClick: () => {
            o(l)
          },
          children: i && (0, r.jsx)("div", {
            className: _.checkIcon,
            children: (0, r.jsx)(d.sV5, {
              size: "xs",
              color: d.TVs.colors.WHITE
            })
          })
        }, t)
      }
    }, n)
  },
  y = () => {
    let {
      themeFilters: e,
      onToggleTheme: t
    } = (0, f.S)(), n = (0, p.ZP)() === b.BR.DARK, i = l.useCallback(t => {
      if (e.has(t) || n) return "always-white"
    }, [e, n]), o = l.useCallback(t => e.has(t) || n ? d.TVs.colors.WHITE : d.TVs.colors.INTERACTIVE_NORMAL, [e, n]), s = l.useMemo(() => [{
      name: m.intl.string(m.t.aVBOKi),
      icon: (0, r.jsx)(d.wGt, {
        size: "xs",
        color: o(c.h.ANIME)
      }),
      enum: c.h.ANIME
    }, {
      name: m.intl.string(m.t["3WoZBQ"]),
      icon: (0, r.jsx)(d.iWm, {
        size: "xs",
        color: o(c.h.GAMING)
      }),
      enum: c.h.GAMING
    }, {
      name: m.intl.string(m.t.yuEmLi),
      icon: (0, r.jsx)(d.h_8, {
        size: "xs",
        color: o(c.h.CUTE_COZY)
      }),
      enum: c.h.CUTE_COZY
    }, {
      name: m.intl.string(m.t.mMvCHh),
      icon: (0, r.jsx)(d.lqV, {
        size: "xs",
        color: o(c.h.SCI_FI)
      }),
      enum: c.h.SCI_FI
    }, {
      name: m.intl.string(m.t.TlhOQE),
      icon: (0, r.jsx)(d.ED8, {
        size: "xs",
        color: o(c.h.FOOD_DRINKS)
      }),
      enum: c.h.FOOD_DRINKS
    }, {
      name: m.intl.string(m.t["4IaUIC"]),
      icon: (0, r.jsx)(d.HI3, {
        size: "xs",
        color: o(c.h.FANTASY)
      }),
      enum: c.h.FANTASY
    }, {
      name: m.intl.string(m.t.w0nSGx),
      icon: (0, r.jsx)(d.Ffc, {
        size: "xs",
        color: o(c.h.ANIMALS_PETS)
      }),
      enum: c.h.ANIMALS_PETS
    }, {
      name: m.intl.string(m.t.cJng7u),
      icon: (0, r.jsx)(d.hg2, {
        size: "xs",
        color: o(c.h.NATURE)
      }),
      enum: c.h.NATURE
    }, {
      name: m.intl.string(m.t["5mUvyM"]),
      icon: (0, r.jsx)(d.Roe, {
        size: "xs",
        color: o(c.h.MOVIES_TV_SHOWS)
      }),
      enum: c.h.MOVIES_TV_SHOWS
    }, {
      name: m.intl.string(m.t.MB9H5e),
      icon: (0, r.jsx)(d.Z6G, {
        size: "xs",
        color: o(c.h.DARK_MOODY)
      }),
      enum: c.h.DARK_MOODY
    }], [o]);
    return (0, r.jsxs)("div", {
      className: _.themesSection,
      children: [(0, r.jsx)(d.Text, {
        variant: "text-md/semibold",
        children: m.intl.string(m.t.t1Ztrq)
      }), (0, r.jsx)("div", {
        className: _.themeRow,
        children: s.map(n => {
          let {
            name: l,
            icon: o,
            enum: s
          } = n;
          return (0, r.jsxs)(d.P3F, {
            className: a()(_.theme, {
              [_.themeToggled]: e.has(s)
            }),
            onClick: () => t(s),
            children: [o, (0, r.jsx)(d.Text, {
              color: i(s),
              variant: "text-sm/medium",
              children: l
            })]
          }, l)
        })
      })]
    })
  }