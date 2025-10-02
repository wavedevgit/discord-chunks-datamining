/** Chunk was on 45620 **/
/** chunk id: 841875, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => v
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
  Chunk825102 = require("./825102.js"),
  Chunk626135 = require("./626135.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk501431 = require("./501431.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk92818 = require("./92818.js");

function v() {
  let {
    onToggleOrbEligible: e,
    orbEligible: t,
    reset: n,
    hasFilters: a
  } = (0, Chunk501431.S)(), s = Chunk120356(), {
    enabled: o
  } = (0, Chunk825102.WX)({
    location: "Shop"
  }), c = (0, Chunk381585.sp)(), d = Chunk647438.useCallback(e => {
    p.default.track(h.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
    className: Chunk92818.filterBar,
    children: [(0, Chunk951288.jsxs)("div", {
      className: i()(Chunk92818.filterSection, Chunk92818.itemType),
      children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-md/semibold",
        className: Chunk92818.filterTitle,
        children: Chunk388032.intl.string(Chunk388032.t.Qk6r1d)
      }), Chunk215023.xg.map(e => (0, r.jsx)(S, {
        filter: e,
        trackFilterAction: d
      }, e)), Chunk335818 && (0, Chunk951288.jsx)(Chunk481060.XZJ, {
        checked: exports,
        onChange: () => {
          Chunk410030("filter orb eligible ".concat(false === exports ? "on" : "off")), module()
        },
        label: Chunk388032.intl.string(Chunk388032.t.AHHHgI)
      })]
    }), (0, Chunk951288.jsx)(x, {
      trackFilterAction: Chunk410030
    }), (0, Chunk951288.jsx)(y, {
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
let S = e => {
    var t;
    let {
      filter: n,
      trackFilterAction: l
    } = e, a = {
      [o.G.AVATAR_DECORATION]: b.intl.string(b.t.dRZYND),
      [o.G.PROFILE_EFFECT]: b.intl.string(b.t["1cNjt7"]),
      [o.G.NAMEPLATE]: b.intl.string(b.t.V68Fq6),
      [o.G.BUNDLE]: b.intl.string(b.t.FYFppq)
    }, {
      itemTypeFilters: i,
      onToggleItemType: s
    } = (0, C.S)();
    return (0, r.jsx)(u.XZJ, {
      checked: i.has(n),
      onChange: () => {
        var e;
        let t = (null == (e = a[n]) ? true : e.toLowerCase()) != null ? a[n].toLowerCase() : n;
        l("filter item type ".concat(t, " ").concat(false === i.has(n) ? "on" : "off")), s(n)
      },
      label: null != (t = a[n]) ? t : ""
    })
  },
  x = e => {
    let {
      trackFilterAction: t
    } = e, n = l.useMemo(() => [{
      color: "#9B59B6",
      label: b.intl.string(b.t.kqUD4O),
      enum: s.x.PURPLE
    }, {
      color: "#3498DB",
      label: b.intl.string(b.t.qQTRaW),
      enum: s.x.BLUE
    }, {
      color: "#2ECC71",
      label: b.intl.string(b.t["f/Ylk5"]),
      enum: s.x.GREEN
    }, {
      color: "#A0522D",
      label: b.intl.string(b.t["Sd/BMT"]),
      enum: s.x.BROWN
    }, {
      color: "#F1C40F",
      label: b.intl.string(b.t["0fevY2"]),
      enum: s.x.YELLOW
    }], []), a = l.useMemo(() => [{
      color: "#E67E22",
      label: b.intl.string(b.t.ZE7weH),
      enum: s.x.ORANGE
    }, {
      color: "#E74C3C",
      label: b.intl.string(b.t.hKJGOD),
      enum: s.x.RED
    }, {
      color: "#EC407A",
      label: b.intl.string(b.t.HvLEGB),
      enum: s.x.PINK
    }, {
      color: "#FFFFFF",
      label: b.intl.string(b.t["CB+lND"]),
      enum: s.x.WHITE
    }, {
      color: "#262626",
      label: b.intl.string(b.t["dMey+v"]),
      enum: s.x.BLACK
    }], []);
    return (0, r.jsxs)("div", {
      className: E.filterSection,
      children: [(0, r.jsx)(u.Text, {
        variant: "text-md/semibold",
        className: E.filterTitle,
        children: b.intl.string(b.t.K1xGoK)
      }), (0, r.jsx)(O, {
        colors: n,
        trackFilterAction: t
      }), (0, r.jsx)(O, {
        colors: a,
        trackFilterAction: t
      })]
    })
  },
  O = e => {
    let {
      colors: t,
      trackFilterAction: n
    } = e, {
      colorFilters: l,
      onToggleColor: a
    } = (0, C.S)();
    return (0, r.jsx)("div", {
      className: E.colorSwatchRow,
      children: t.map(e => {
        let {
          color: t,
          label: i,
          enum: s
        } = e;
        return (0, r.jsx)(T, {
          color: t,
          label: i,
          enum: s,
          isToggled: l.has(s),
          onToggleColor: a,
          trackFilterAction: n
        }, s)
      })
    })
  },
  T = e => {
    let {
      color: t,
      label: n,
      enum: l,
      isToggled: a,
      onToggleColor: s,
      trackFilterAction: o
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
          className: i()(E.circle, {
            [E.circleToggled]: a
          }),
          style: {
            backgroundColor: t
          },
          "aria-label": n,
          onClick: () => {
            o("filter color ".concat(n.toLowerCase(), " ").concat(a ? "off" : "on")), s(l)
          },
          children: a && (0, r.jsx)("div", {
            className: E.checkIcon,
            children: (0, r.jsx)(u.sV5, {
              size: "xs",
              color: u.TVs.colors.WHITE
            })
          })
        }, t)
      }
    }, n)
  },
  y = e => {
    let {
      trackFilterAction: t
    } = e, {
      themeFilters: n,
      onToggleTheme: a
    } = (0, C.S)(), s = (0, d.ZP)() === m.BR.DARK, o = l.useCallback(e => {
      if (n.has(e) || s) return "always-white"
    }, [n, s]), g = l.useCallback(e => n.has(e) || s ? u.TVs.colors.WHITE : u.TVs.colors.INTERACTIVE_NORMAL, [n, s]), p = l.useMemo(() => [{
      name: b.intl.string(b.t.aVBOKi),
      icon: (0, r.jsx)(u.Hzt, {
        size: "xs",
        color: g(c.h.ANIME)
      }),
      enum: c.h.ANIME
    }, {
      name: b.intl.string(b.t["3WoZBQ"]),
      icon: (0, r.jsx)(u.YJV, {
        size: "xs",
        color: g(c.h.GAMING)
      }),
      enum: c.h.GAMING
    }, {
      name: b.intl.string(b.t.yuEmLi),
      icon: (0, r.jsx)(u.y3H, {
        size: "xs",
        color: g(c.h.CUTE_COZY)
      }),
      enum: c.h.CUTE_COZY
    }, {
      name: b.intl.string(b.t.mMvCHh),
      icon: (0, r.jsx)(u.lqV, {
        size: "xs",
        color: g(c.h.SCI_FI)
      }),
      enum: c.h.SCI_FI
    }, {
      name: b.intl.string(b.t.TlhOQE),
      icon: (0, r.jsx)(u.ZRV, {
        size: "xs",
        color: g(c.h.FOOD_DRINKS)
      }),
      enum: c.h.FOOD_DRINKS
    }, {
      name: b.intl.string(b.t["4IaUIC"]),
      icon: (0, r.jsx)(u.GsA, {
        size: "xs",
        color: g(c.h.FANTASY)
      }),
      enum: c.h.FANTASY
    }, {
      name: b.intl.string(b.t.w0nSGx),
      icon: (0, r.jsx)(u.GuY, {
        size: "xs",
        color: g(c.h.ANIMALS_PETS)
      }),
      enum: c.h.ANIMALS_PETS
    }, {
      name: b.intl.string(b.t.cJng7u),
      icon: (0, r.jsx)(u.NQW, {
        size: "xs",
        color: g(c.h.NATURE)
      }),
      enum: c.h.NATURE
    }, {
      name: b.intl.string(b.t["5mUvyM"]),
      icon: (0, r.jsx)(u.Roe, {
        size: "xs",
        color: g(c.h.MOVIES_TV_SHOWS)
      }),
      enum: c.h.MOVIES_TV_SHOWS
    }, {
      name: b.intl.string(b.t.MB9H5e),
      icon: (0, r.jsx)(u._Tr, {
        size: "xs",
        color: g(c.h.DARK_MOODY)
      }),
      enum: c.h.DARK_MOODY
    }], [g]);
    return (0, r.jsxs)("div", {
      className: E.filterSection,
      children: [(0, r.jsx)(u.Text, {
        variant: "text-md/semibold",
        className: E.filterTitle,
        children: b.intl.string(b.t.t1Ztrq)
      }), (0, r.jsx)("div", {
        className: E.themeRow,
        children: p.map(e => {
          let {
            name: l,
            icon: s,
            enum: c
          } = e;
          return (0, r.jsxs)(u.P3F, {
            className: i()(E.theme, {
              [E.themeToggled]: n.has(c)
            }),
            onClick: () => {
              let e = n.has(c);
              t("filter theme ".concat(l.toLowerCase(), " ").concat(e ? "off" : "on")), a(c)
            },
            children: [s, (0, r.jsx)(u.Text, {
              color: o(c),
              variant: "text-md/medium",
              children: l
            })]
          }, l)
        })
      })]
    })
  }