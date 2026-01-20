/** Chunk was on 45620 **/
/** chunk id: 841875, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => S
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk990705 = require("./990705.js"),
  Chunk335818 = require("./335818.js"),
  Chunk255835 = require("./255835.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk825102 = require("./825102.js"),
  Chunk626135 = require("./626135.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk501431 = require("./501431.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk80241 = require("./80241.js");

function S() {
  let {
    onToggleOrbEligible: e,
    orbEligible: t,
    reset: n,
    hasFilters: a
  } = (0, h.S)(), i = a(), {
    enabled: o
  } = (0, g.W)({
    location: "Shop"
  }), c = (0, p.sp)(), u = l.useCallback(e => {
    b.default.track(C.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
      collectibles_shop_session_id: null == c ? true : c.sessionId,
      page_section: null == c ? true : c.pageSection,
      page_category: null == c ? true : c.pageCategory,
      page_index: null == c ? true : c.pageIndex,
      page_size: null == c ? true : c.pageSize,
      cta_name: e,
      page_type: "catalog"
    })
  }, [c]);
  return (0, r.jsxs)("div", {
    className: x.filterBar,
    children: [(0, r.jsxs)("div", {
      className: s()(x.filterSection, x.itemType),
      children: [(0, r.jsx)(d.Text, {
        variant: "text-md/semibold",
        className: x.filterTitle,
        children: v.intl.string(v.t.Qk6r1a)
      }), m.xg.map(e => (0, r.jsx)(O, {
        filter: e,
        trackFilterAction: u
      }, e)), o && (0, r.jsx)(d.Checkbox, {
        checked: t,
        onChange: () => {
          u("filter orb eligible ".concat(false === t ? "on" : "off")), e()
        },
        label: v.intl.string(v.t.AHHHgG)
      })]
    }), (0, r.jsx)(_, {
      trackFilterAction: u
    }), (0, r.jsx)(k, {
      trackFilterAction: u
    }), i && (0, r.jsx)(d.Button, {
      variant: "secondary",
      onClick: () => {
        u("filter reset"), n()
      },
      text: v.intl.string(v.t.jwH6KZ),
      fullWidth: true
    })]
  })
}
let O = e => {
    var t;
    let {
      filter: n,
      trackFilterAction: l
    } = e, a = {
      [o.G.AVATAR_DECORATION]: v.intl.string(v.t.dRZYNE),
      [o.G.PROFILE_EFFECT]: v.intl.string(v.t["1cNjtx"]),
      [o.G.NAMEPLATE]: v.intl.string(v.t.V68Fqz),
      [o.G.BUNDLE]: v.intl.string(v.t.FYFpps)
    }, {
      itemTypeFilters: s,
      onToggleItemType: i
    } = (0, h.S)();
    return (0, r.jsx)(d.Checkbox, {
      checked: s.has(n),
      onChange: () => {
        var e;
        let t = (null == (e = a[n]) ? true : e.toLowerCase()) != null ? a[n].toLowerCase() : n;
        l("filter item type ".concat(t, " ").concat(false === s.has(n) ? "on" : "off")), i(n)
      },
      label: null != (t = a[n]) ? t : ""
    })
  },
  _ = e => {
    let {
      trackFilterAction: t
    } = e, n = l.useMemo(() => [{
      color: "#9B59B6",
      label: v.intl.string(v.t.kqUD4P),
      enum: i.x.PURPLE
    }, {
      color: "#3498DB",
      label: v.intl.string(v.t.qQTRae),
      enum: i.x.BLUE
    }, {
      color: "#2ECC71",
      label: v.intl.string(v.t["f/Ylk6"]),
      enum: i.x.GREEN
    }, {
      color: "#A0522D",
      label: v.intl.string(v.t["Sd/BMa"]),
      enum: i.x.BROWN
    }, {
      color: "#F1C40F",
      label: v.intl.string(v.t["0fevYz"]),
      enum: i.x.YELLOW
    }], []), a = l.useMemo(() => [{
      color: "#E67E22",
      label: v.intl.string(v.t.ZE7weD),
      enum: i.x.ORANGE
    }, {
      color: "#E74C3C",
      label: v.intl.string(v.t.hKJGOM),
      enum: i.x.RED
    }, {
      color: "#EC407A",
      label: v.intl.string(v.t.HvLEGM),
      enum: i.x.PINK
    }, {
      color: "#FFFFFF",
      label: v.intl.string(v.t["CB+lNO"]),
      enum: i.x.WHITE
    }, {
      color: "#262626",
      label: v.intl.string(v.t["dMey+v"]),
      enum: i.x.BLACK
    }], []);
    return (0, r.jsxs)("div", {
      className: x.filterSection,
      children: [(0, r.jsx)(d.Text, {
        variant: "text-md/semibold",
        className: x.filterTitle,
        children: v.intl.string(v.t.K1xGoG)
      }), (0, r.jsx)(y, {
        colors: n,
        trackFilterAction: t
      }), (0, r.jsx)(y, {
        colors: a,
        trackFilterAction: t
      })]
    })
  },
  y = e => {
    let {
      colors: t,
      trackFilterAction: n
    } = e, {
      colorFilters: l,
      onToggleColor: a
    } = (0, h.S)();
    return (0, r.jsx)("div", {
      className: x.colorSwatchRow,
      children: t.map(e => {
        let {
          color: t,
          label: s,
          enum: i
        } = e;
        return (0, r.jsx)(j, {
          color: t,
          label: s,
          enum: i,
          isToggled: l.has(i),
          onToggleColor: a,
          trackFilterAction: n
        }, i)
      })
    })
  },
  j = e => {
    let {
      color: t,
      label: n,
      enum: l,
      isToggled: a,
      onToggleColor: i,
      trackFilterAction: o
    } = e;
    return (0, r.jsx)(u.u, {
      text: n,
      asContainer: true,
      children: (0, r.jsx)(d.P3F, {
        className: s()(x.circle, {
          [x.circleToggled]: a
        }),
        style: {
          backgroundColor: t
        },
        "aria-label": n,
        onClick: () => {
          o("filter color ".concat(n.toLowerCase(), " ").concat(a ? "off" : "on")), i(l)
        },
        children: a && (0, r.jsx)("div", {
          className: x.checkIcon,
          children: (0, r.jsx)(d.sV5, {
            size: "xs",
            color: d.TVs.colors.WHITE
          })
        })
      }, t)
    }, n)
  },
  k = e => {
    let {
      trackFilterAction: t
    } = e, {
      themeFilters: n,
      onToggleTheme: a
    } = (0, h.S)(), i = (0, f.ZP)() === E.BR.DARK, o = l.useCallback(e => {
      if (n.has(e) || i) return "always-white"
    }, [n, i]), u = l.useCallback(e => n.has(e) || i ? d.TVs.colors.WHITE : d.TVs.colors.INTERACTIVE_TEXT_DEFAULT, [n, i]), g = l.useMemo(() => [{
      name: v.intl.string(v.t.aVBOKh),
      icon: (0, r.jsx)(d.Hzt, {
        size: "xs",
        color: u(c.h.ANIME)
      }),
      enum: c.h.ANIME
    }, {
      name: v.intl.string(v.t["3WoZBc"]),
      icon: (0, r.jsx)(d.YJV, {
        size: "xs",
        color: u(c.h.GAMING)
      }),
      enum: c.h.GAMING
    }, {
      name: v.intl.string(v.t.yuEmLj),
      icon: (0, r.jsx)(d.y3H, {
        size: "xs",
        color: u(c.h.CUTE_COZY)
      }),
      enum: c.h.CUTE_COZY
    }, {
      name: v.intl.string(v.t.mMvCHo),
      icon: (0, r.jsx)(d.lqV, {
        size: "xs",
        color: u(c.h.SCI_FI)
      }),
      enum: c.h.SCI_FI
    }, {
      name: v.intl.string(v.t.TlhOQC),
      icon: (0, r.jsx)(d.ZRV, {
        size: "xs",
        color: u(c.h.FOOD_DRINKS)
      }),
      enum: c.h.FOOD_DRINKS
    }, {
      name: v.intl.string(v.t["4IaUIM"]),
      icon: (0, r.jsx)(d.GsA, {
        size: "xs",
        color: u(c.h.FANTASY)
      }),
      enum: c.h.FANTASY
    }, {
      name: v.intl.string(v.t["w0nSG/"]),
      icon: (0, r.jsx)(d.GuY, {
        size: "xs",
        color: u(c.h.ANIMALS_PETS)
      }),
      enum: c.h.ANIMALS_PETS
    }, {
      name: v.intl.string(v.t.cJng7v),
      icon: (0, r.jsx)(d.NQW, {
        size: "xs",
        color: u(c.h.NATURE)
      }),
      enum: c.h.NATURE
    }, {
      name: v.intl.string(v.t["5mUvyM"]),
      icon: (0, r.jsx)(d.Roe, {
        size: "xs",
        color: u(c.h.MOVIES_TV_SHOWS)
      }),
      enum: c.h.MOVIES_TV_SHOWS
    }, {
      name: v.intl.string(v.t.MB9H5Z),
      icon: (0, r.jsx)(d._Tr, {
        size: "xs",
        color: u(c.h.DARK_MOODY)
      }),
      enum: c.h.DARK_MOODY
    }], [u]);
    return (0, r.jsxs)("div", {
      className: x.filterSection,
      children: [(0, r.jsx)(d.Text, {
        variant: "text-md/semibold",
        className: x.filterTitle,
        children: v.intl.string(v.t.t1Ztrp)
      }), (0, r.jsx)("div", {
        className: x.themeRow,
        children: g.map(e => {
          let {
            name: l,
            icon: i,
            enum: c
          } = e;
          return (0, r.jsxs)(d.P3F, {
            className: s()(x.theme, {
              [x.themeToggled]: n.has(c)
            }),
            onClick: () => {
              let e = n.has(c);
              t("filter theme ".concat(l.toLowerCase(), " ").concat(e ? "off" : "on")), a(c)
            },
            children: [i, (0, r.jsx)(d.Text, {
              color: o(c),
              variant: "text-md/medium",
              children: l
            })]
          }, l)
        })
      })]
    })
  }