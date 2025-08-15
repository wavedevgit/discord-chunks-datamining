/** Chunk was on 45620 **/
/** chunk id: 841875, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => C
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk990705 = require("./990705.js"),
  Chunk335818 = require("./335818.js"),
  Chunk255835 = require("./255835.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk822857 = require("./822857.js"),
  Chunk626135 = require("./626135.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk501431 = require("./501431.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk587635 = require("./587635.js");

function C() {
  let {
    onToggleOrbEligible: e,
    orbEligible: t,
    reset: r,
    hasFilters: a
  } = (0, Chunk501431.S)(), o = Chunk120356(), {
    enabled: s
  } = (0, Chunk822857.WX)({
    location: "Shop"
  }), c = (0, Chunk381585.sp)(), d = Chunk647438.useCallback(e => {
    g.default.track(h.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
      collectibles_shop_session_id: null == c ? true : c.sessionId,
      page_section: null == c ? true : c.pageSection,
      page_category: null == c ? true : c.pageCategory,
      page_index: null == c ? true : c.pageIndex,
      page_size: null == c ? true : c.pageSize,
      cta_name: e,
      page_type: "catalog"
    })
  }, [Chunk255835]);
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk587635.filterBar,
    children: [(0, Chunk951288.jsxs)("div", {
      className: i()(Chunk587635.filterSection, Chunk587635.itemType),
      children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-md/semibold",
        className: Chunk587635.filterTitle,
        children: Chunk388032.intl.string(Chunk388032.t.Qk6r1d)
      }), Chunk215023.xg.map(e => (0, n.jsx)(E, {
        filter: e,
        trackFilterAction: d
      }, e)), Chunk335818 && (0, Chunk951288.jsx)(Chunk481060.XZJ, {
        value: exports,
        onChange: () => {
          Chunk410030("filter orb eligible ".concat(false === exports ? "on" : "off")), module()
        },
        children: (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-md/normal",
          children: Chunk388032.intl.string(Chunk388032.t.AHHHgI)
        })
      })]
    }), (0, Chunk951288.jsx)(y, {
      trackFilterAction: Chunk410030
    }), (0, Chunk951288.jsx)(j, {
      trackFilterAction: Chunk410030
    }), Chunk990705 && (0, Chunk951288.jsx)(Chunk481060.zxk, {
      variant: "secondary",
      onClick: () => {
        Chunk410030("filter reset"), require()
      },
      text: Chunk388032.intl.string(Chunk388032.t.jwH6KS),
      fullWidth: true
    })]
  })
}
let E = e => {
    var t;
    let {
      filter: r,
      trackFilterAction: l
    } = e, a = {
      [s.G.AVATAR_DECORATION]: v.intl.string(v.t.dRZYND),
      [s.G.PROFILE_EFFECT]: v.intl.string(v.t["1cNjt7"]),
      [s.G.NAMEPLATE]: v.intl.string(v.t.V68Fq6),
      [s.G.BUNDLE]: v.intl.string(v.t.FYFppq)
    }, {
      itemTypeFilters: i,
      onToggleItemType: o
    } = (0, b.S)();
    return (0, n.jsx)(u.XZJ, {
      value: i.has(r),
      onChange: () => {
        var e;
        let t = (null == (e = a[r]) ? true : e.toLowerCase()) != null ? a[r].toLowerCase() : r;
        l("filter item type ".concat(t, " ").concat(false === i.has(r) ? "on" : "off")), o(r)
      },
      children: (0, n.jsx)(u.Text, {
        variant: "text-md/normal",
        children: null != (t = a[r]) ? t : ""
      })
    })
  },
  y = e => {
    let {
      trackFilterAction: t
    } = e, r = l.useMemo(() => [{
      color: "#9B59B6",
      label: v.intl.string(v.t.kqUD4O),
      enum: o.x.PURPLE
    }, {
      color: "#3498DB",
      label: v.intl.string(v.t.qQTRaW),
      enum: o.x.BLUE
    }, {
      color: "#2ECC71",
      label: v.intl.string(v.t["f/Ylk5"]),
      enum: o.x.GREEN
    }, {
      color: "#A0522D",
      label: v.intl.string(v.t["Sd/BMT"]),
      enum: o.x.BROWN
    }, {
      color: "#F1C40F",
      label: v.intl.string(v.t["0fevY2"]),
      enum: o.x.YELLOW
    }], []), a = l.useMemo(() => [{
      color: "#E67E22",
      label: v.intl.string(v.t.ZE7weH),
      enum: o.x.ORANGE
    }, {
      color: "#E74C3C",
      label: v.intl.string(v.t.hKJGOD),
      enum: o.x.RED
    }, {
      color: "#EC407A",
      label: v.intl.string(v.t.HvLEGB),
      enum: o.x.PINK
    }, {
      color: "#FFFFFF",
      label: v.intl.string(v.t["CB+lND"]),
      enum: o.x.WHITE
    }, {
      color: "#262626",
      label: v.intl.string(v.t["dMey+v"]),
      enum: o.x.BLACK
    }], []);
    return (0, n.jsxs)("div", {
      className: O.filterSection,
      children: [(0, n.jsx)(u.Text, {
        variant: "text-md/semibold",
        className: O.filterTitle,
        children: v.intl.string(v.t.K1xGoK)
      }), (0, n.jsx)(S, {
        colors: r,
        trackFilterAction: t
      }), (0, n.jsx)(S, {
        colors: a,
        trackFilterAction: t
      })]
    })
  },
  S = e => {
    let {
      colors: t,
      trackFilterAction: r
    } = e, {
      colorFilters: l,
      onToggleColor: a
    } = (0, b.S)();
    return (0, n.jsx)("div", {
      className: O.colorSwatchRow,
      children: t.map(e => {
        let {
          color: t,
          label: i,
          enum: o
        } = e;
        return (0, n.jsx)(x, {
          color: t,
          label: i,
          enum: o,
          isToggled: l.has(o),
          onToggleColor: a,
          trackFilterAction: r
        }, o)
      })
    })
  },
  x = e => {
    let {
      color: t,
      label: r,
      enum: l,
      isToggled: a,
      onToggleColor: o,
      trackFilterAction: s
    } = e;
    return (0, n.jsx)(u.ua7, {
      text: r,
      children: e => {
        let {
          onMouseEnter: c,
          onMouseLeave: d
        } = e;
        return (0, n.jsx)(u.P3F, {
          onMouseEnter: c,
          onMouseLeave: d,
          onFocus: c,
          onBlur: d,
          className: i()(O.circle, {
            [O.circleToggled]: a
          }),
          style: {
            backgroundColor: t
          },
          "aria-label": r,
          onClick: () => {
            s("filter color ".concat(r.toLowerCase(), " ").concat(a ? "off" : "on")), o(l)
          },
          children: a && (0, n.jsx)("div", {
            className: O.checkIcon,
            children: (0, n.jsx)(u.sV5, {
              size: "xs",
              color: u.TVs.colors.WHITE
            })
          })
        }, t)
      }
    }, r)
  },
  j = e => {
    let {
      trackFilterAction: t
    } = e, {
      themeFilters: r,
      onToggleTheme: a
    } = (0, b.S)(), o = (0, d.ZP)() === _.BR.DARK, s = l.useCallback(e => {
      if (r.has(e) || o) return "always-white"
    }, [r, o]), p = l.useCallback(e => r.has(e) || o ? u.TVs.colors.WHITE : u.TVs.colors.INTERACTIVE_NORMAL, [r, o]), g = l.useMemo(() => [{
      name: v.intl.string(v.t.aVBOKi),
      icon: (0, n.jsx)(u.wGt, {
        size: "xs",
        color: p(c.h.ANIME)
      }),
      enum: c.h.ANIME
    }, {
      name: v.intl.string(v.t["3WoZBQ"]),
      icon: (0, n.jsx)(u.iWm, {
        size: "xs",
        color: p(c.h.GAMING)
      }),
      enum: c.h.GAMING
    }, {
      name: v.intl.string(v.t.yuEmLi),
      icon: (0, n.jsx)(u.h_8, {
        size: "xs",
        color: p(c.h.CUTE_COZY)
      }),
      enum: c.h.CUTE_COZY
    }, {
      name: v.intl.string(v.t.mMvCHh),
      icon: (0, n.jsx)(u.lqV, {
        size: "xs",
        color: p(c.h.SCI_FI)
      }),
      enum: c.h.SCI_FI
    }, {
      name: v.intl.string(v.t.TlhOQE),
      icon: (0, n.jsx)(u.ED8, {
        size: "xs",
        color: p(c.h.FOOD_DRINKS)
      }),
      enum: c.h.FOOD_DRINKS
    }, {
      name: v.intl.string(v.t["4IaUIC"]),
      icon: (0, n.jsx)(u.HI3, {
        size: "xs",
        color: p(c.h.FANTASY)
      }),
      enum: c.h.FANTASY
    }, {
      name: v.intl.string(v.t.w0nSGx),
      icon: (0, n.jsx)(u.Ffc, {
        size: "xs",
        color: p(c.h.ANIMALS_PETS)
      }),
      enum: c.h.ANIMALS_PETS
    }, {
      name: v.intl.string(v.t.cJng7u),
      icon: (0, n.jsx)(u.hg2, {
        size: "xs",
        color: p(c.h.NATURE)
      }),
      enum: c.h.NATURE
    }, {
      name: v.intl.string(v.t["5mUvyM"]),
      icon: (0, n.jsx)(u.Roe, {
        size: "xs",
        color: p(c.h.MOVIES_TV_SHOWS)
      }),
      enum: c.h.MOVIES_TV_SHOWS
    }, {
      name: v.intl.string(v.t.MB9H5e),
      icon: (0, n.jsx)(u.Z6G, {
        size: "xs",
        color: p(c.h.DARK_MOODY)
      }),
      enum: c.h.DARK_MOODY
    }], [p]);
    return (0, n.jsxs)("div", {
      className: O.filterSection,
      children: [(0, n.jsx)(u.Text, {
        variant: "text-md/semibold",
        className: O.filterTitle,
        children: v.intl.string(v.t.t1Ztrq)
      }), (0, n.jsx)("div", {
        className: O.themeRow,
        children: g.map(e => {
          let {
            name: l,
            icon: o,
            enum: c
          } = e;
          return (0, n.jsxs)(u.P3F, {
            className: i()(O.theme, {
              [O.themeToggled]: r.has(c)
            }),
            onClick: () => {
              let e = r.has(c);
              t("filter theme ".concat(l.toLowerCase(), " ").concat(e ? "off" : "on")), a(c)
            },
            children: [o, (0, n.jsx)(u.Text, {
              color: s(c),
              variant: "text-sm/medium",
              children: l
            })]
          }, l)
        })
      })]
    })
  }