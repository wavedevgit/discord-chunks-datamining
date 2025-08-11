/** Chunk was on 45620 **/
/** chunk id: 841875, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => C
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk590305 = require("./590305.js");

function C() {
  let {
    onToggleOrbEligible: e,
    orbEligible: t,
    reset: n,
    hasFilters: a
  } = (0, Chunk501431.S)(), o = Chunk120356(), {
    enabled: s
  } = (0, Chunk822857.WX)({
    location: "Shop"
  }), c = (0, Chunk381585.sp)(), d = Chunk73800.useCallback(e => {
    g.default.track(m.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
      collectibles_shop_session_id: null == c ? true : c.sessionId,
      page_section: null == c ? true : c.pageSection,
      page_category: null == c ? true : c.pageCategory,
      page_index: null == c ? true : c.pageIndex,
      page_size: null == c ? true : c.pageSize,
      cta_name: e,
      page_type: "catalog"
    })
  }, [Chunk255835]);
  return (0, Chunk255367.jsxs)("div", {
    className: Chunk590305.filterBar,
    children: [(0, Chunk255367.jsxs)("div", {
      className: i()(Chunk590305.filterSection, Chunk590305.itemType),
      children: [(0, Chunk255367.jsx)(Chunk481060.Text, {
        variant: "text-md/semibold",
        className: Chunk590305.filterTitle,
        children: Chunk388032.intl.string(Chunk388032.t.Qk6r1d)
      }), Chunk215023.xg.map(e => (0, r.jsx)(E, {
        filter: e,
        trackFilterAction: d
      }, e)), Chunk335818 && (0, Chunk255367.jsx)(Chunk481060.XZJ, {
        value: exports,
        onChange: () => {
          Chunk410030("filter orb eligible ".concat(false === exports ? "on" : "off")), module()
        },
        children: (0, Chunk255367.jsx)(Chunk481060.Text, {
          variant: "text-md/normal",
          children: Chunk388032.intl.string(Chunk388032.t.AHHHgI)
        })
      })]
    }), (0, Chunk255367.jsx)(S, {
      trackFilterAction: Chunk410030
    }), (0, Chunk255367.jsx)(j, {
      trackFilterAction: Chunk410030
    }), Chunk990705 && (0, Chunk255367.jsx)(Chunk481060.zxk, {
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
      filter: n,
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
    return (0, r.jsx)(u.XZJ, {
      value: i.has(n),
      onChange: () => {
        var e;
        let t = (null == (e = a[n]) ? true : e.toLowerCase()) != null ? a[n].toLowerCase() : n;
        l("filter item type ".concat(t, " ").concat(false === i.has(n) ? "on" : "off")), o(n)
      },
      children: (0, r.jsx)(u.Text, {
        variant: "text-md/normal",
        children: null != (t = a[n]) ? t : ""
      })
    })
  },
  S = e => {
    let {
      trackFilterAction: t
    } = e, n = l.useMemo(() => [{
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
    return (0, r.jsxs)("div", {
      className: O.filterSection,
      children: [(0, r.jsx)(u.Text, {
        variant: "text-md/semibold",
        className: O.filterTitle,
        children: v.intl.string(v.t.K1xGoK)
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
    } = (0, b.S)();
    return (0, r.jsx)("div", {
      className: O.colorSwatchRow,
      children: t.map(e => {
        let {
          color: t,
          label: i,
          enum: o
        } = e;
        return (0, r.jsx)(x, {
          color: t,
          label: i,
          enum: o,
          isToggled: l.has(o),
          onToggleColor: a,
          trackFilterAction: n
        }, o)
      })
    })
  },
  x = e => {
    let {
      color: t,
      label: n,
      enum: l,
      isToggled: a,
      onToggleColor: o,
      trackFilterAction: s
    } = e;
    return (0, r.jsx)(u.ua7, {
      text: n,
      children: e => {
        let {
          onMouseEnter: c,
          onMouseLeave: d
        } = e;
        return (0, r.jsx)(u.P3F, {
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
          "aria-label": n,
          onClick: () => {
            s("filter color ".concat(n.toLowerCase(), " ").concat(a ? "off" : "on")), o(l)
          },
          children: a && (0, r.jsx)("div", {
            className: O.checkIcon,
            children: (0, r.jsx)(u.sV5, {
              size: "xs",
              color: u.TVs.colors.WHITE
            })
          })
        }, t)
      }
    }, n)
  },
  j = e => {
    let {
      trackFilterAction: t
    } = e, {
      themeFilters: n,
      onToggleTheme: a
    } = (0, b.S)(), o = (0, d.ZP)() === _.BR.DARK, s = l.useCallback(e => {
      if (n.has(e) || o) return "always-white"
    }, [n, o]), p = l.useCallback(e => n.has(e) || o ? u.TVs.colors.WHITE : u.TVs.colors.INTERACTIVE_NORMAL, [n, o]), g = l.useMemo(() => [{
      name: v.intl.string(v.t.aVBOKi),
      icon: (0, r.jsx)(u.wGt, {
        size: "xs",
        color: p(c.h.ANIME)
      }),
      enum: c.h.ANIME
    }, {
      name: v.intl.string(v.t["3WoZBQ"]),
      icon: (0, r.jsx)(u.iWm, {
        size: "xs",
        color: p(c.h.GAMING)
      }),
      enum: c.h.GAMING
    }, {
      name: v.intl.string(v.t.yuEmLi),
      icon: (0, r.jsx)(u.h_8, {
        size: "xs",
        color: p(c.h.CUTE_COZY)
      }),
      enum: c.h.CUTE_COZY
    }, {
      name: v.intl.string(v.t.mMvCHh),
      icon: (0, r.jsx)(u.lqV, {
        size: "xs",
        color: p(c.h.SCI_FI)
      }),
      enum: c.h.SCI_FI
    }, {
      name: v.intl.string(v.t.TlhOQE),
      icon: (0, r.jsx)(u.ED8, {
        size: "xs",
        color: p(c.h.FOOD_DRINKS)
      }),
      enum: c.h.FOOD_DRINKS
    }, {
      name: v.intl.string(v.t["4IaUIC"]),
      icon: (0, r.jsx)(u.HI3, {
        size: "xs",
        color: p(c.h.FANTASY)
      }),
      enum: c.h.FANTASY
    }, {
      name: v.intl.string(v.t.w0nSGx),
      icon: (0, r.jsx)(u.Ffc, {
        size: "xs",
        color: p(c.h.ANIMALS_PETS)
      }),
      enum: c.h.ANIMALS_PETS
    }, {
      name: v.intl.string(v.t.cJng7u),
      icon: (0, r.jsx)(u.hg2, {
        size: "xs",
        color: p(c.h.NATURE)
      }),
      enum: c.h.NATURE
    }, {
      name: v.intl.string(v.t["5mUvyM"]),
      icon: (0, r.jsx)(u.Roe, {
        size: "xs",
        color: p(c.h.MOVIES_TV_SHOWS)
      }),
      enum: c.h.MOVIES_TV_SHOWS
    }, {
      name: v.intl.string(v.t.MB9H5e),
      icon: (0, r.jsx)(u.Z6G, {
        size: "xs",
        color: p(c.h.DARK_MOODY)
      }),
      enum: c.h.DARK_MOODY
    }], [p]);
    return (0, r.jsxs)("div", {
      className: O.filterSection,
      children: [(0, r.jsx)(u.Text, {
        variant: "text-md/semibold",
        className: O.filterTitle,
        children: v.intl.string(v.t.t1Ztrq)
      }), (0, r.jsx)("div", {
        className: O.themeRow,
        children: g.map(e => {
          let {
            name: l,
            icon: o,
            enum: c
          } = e;
          return (0, r.jsxs)(u.P3F, {
            className: i()(O.theme, {
              [O.themeToggled]: n.has(c)
            }),
            onClick: () => {
              let e = n.has(c);
              t("filter theme ".concat(l.toLowerCase(), " ").concat(e ? "off" : "on")), a(c)
            },
            children: [o, (0, r.jsx)(u.Text, {
              color: s(c),
              variant: "text-sm/medium",
              children: l
            })]
          }, l)
        })
      })]
    })
  }