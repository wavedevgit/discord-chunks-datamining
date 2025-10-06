/** Chunk was on 45620 **/
/** chunk id: 841875, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => v
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk92818 = require("./92818.js");

function v() {
  let {
    onToggleOrbEligible: e,
    orbEligible: t,
    reset: n,
    hasFilters: a
  } = (0, Chunk501431.S)(), i = Chunk120356(), {
    enabled: o
  } = (0, Chunk825102.WX)({
    location: "Shop"
  }), c = (0, Chunk381585.sp)(), u = Chunk647438.useCallback(e => {
    f.default.track(m.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
      className: s()(Chunk92818.filterSection, Chunk92818.itemType),
      children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-md/semibold",
        className: Chunk92818.filterTitle,
        children: Chunk388032.intl.string(Chunk388032.t.Qk6r1d)
      }), Chunk215023.xg.map(e => (0, r.jsx)(x, {
        filter: e,
        trackFilterAction: u
      }, e)), Chunk335818 && (0, Chunk951288.jsx)(Chunk481060.XZJ, {
        checked: exports,
        onChange: () => {
          Chunk28664("filter orb eligible ".concat(false === exports ? "on" : "off")), module()
        },
        label: Chunk388032.intl.string(Chunk388032.t.AHHHgI)
      })]
    }), (0, Chunk951288.jsx)(O, {
      trackFilterAction: Chunk28664
    }), (0, Chunk951288.jsx)(j, {
      trackFilterAction: Chunk28664
    }), Chunk990705 && (0, Chunk951288.jsx)(Chunk481060.zxk, {
      variant: "secondary",
      onClick: () => {
        Chunk28664("filter reset"), require()
      },
      text: Chunk388032.intl.string(Chunk388032.t.jwH6KS),
      fullWidth: true
    })]
  })
}
let x = e => {
    var t;
    let {
      filter: n,
      trackFilterAction: l
    } = e, a = {
      [o.G.AVATAR_DECORATION]: E.intl.string(E.t.dRZYND),
      [o.G.PROFILE_EFFECT]: E.intl.string(E.t["1cNjt7"]),
      [o.G.NAMEPLATE]: E.intl.string(E.t.V68Fq6),
      [o.G.BUNDLE]: E.intl.string(E.t.FYFppq)
    }, {
      itemTypeFilters: s,
      onToggleItemType: i
    } = (0, h.S)();
    return (0, r.jsx)(d.XZJ, {
      checked: s.has(n),
      onChange: () => {
        var e;
        let t = (null == (e = a[n]) ? true : e.toLowerCase()) != null ? a[n].toLowerCase() : n;
        l("filter item type ".concat(t, " ").concat(false === s.has(n) ? "on" : "off")), i(n)
      },
      label: null != (t = a[n]) ? t : ""
    })
  },
  O = e => {
    let {
      trackFilterAction: t
    } = e, n = l.useMemo(() => [{
      color: "#9B59B6",
      label: E.intl.string(E.t.kqUD4O),
      enum: i.x.PURPLE
    }, {
      color: "#3498DB",
      label: E.intl.string(E.t.qQTRaW),
      enum: i.x.BLUE
    }, {
      color: "#2ECC71",
      label: E.intl.string(E.t["f/Ylk5"]),
      enum: i.x.GREEN
    }, {
      color: "#A0522D",
      label: E.intl.string(E.t["Sd/BMT"]),
      enum: i.x.BROWN
    }, {
      color: "#F1C40F",
      label: E.intl.string(E.t["0fevY2"]),
      enum: i.x.YELLOW
    }], []), a = l.useMemo(() => [{
      color: "#E67E22",
      label: E.intl.string(E.t.ZE7weH),
      enum: i.x.ORANGE
    }, {
      color: "#E74C3C",
      label: E.intl.string(E.t.hKJGOD),
      enum: i.x.RED
    }, {
      color: "#EC407A",
      label: E.intl.string(E.t.HvLEGB),
      enum: i.x.PINK
    }, {
      color: "#FFFFFF",
      label: E.intl.string(E.t["CB+lND"]),
      enum: i.x.WHITE
    }, {
      color: "#262626",
      label: E.intl.string(E.t["dMey+v"]),
      enum: i.x.BLACK
    }], []);
    return (0, r.jsxs)("div", {
      className: S.filterSection,
      children: [(0, r.jsx)(d.Text, {
        variant: "text-md/semibold",
        className: S.filterTitle,
        children: E.intl.string(E.t.K1xGoK)
      }), (0, r.jsx)(T, {
        colors: n,
        trackFilterAction: t
      }), (0, r.jsx)(T, {
        colors: a,
        trackFilterAction: t
      })]
    })
  },
  T = e => {
    let {
      colors: t,
      trackFilterAction: n
    } = e, {
      colorFilters: l,
      onToggleColor: a
    } = (0, h.S)();
    return (0, r.jsx)("div", {
      className: S.colorSwatchRow,
      children: t.map(e => {
        let {
          color: t,
          label: s,
          enum: i
        } = e;
        return (0, r.jsx)(y, {
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
  y = e => {
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
        className: s()(S.circle, {
          [S.circleToggled]: a
        }),
        style: {
          backgroundColor: t
        },
        "aria-label": n,
        onClick: () => {
          o("filter color ".concat(n.toLowerCase(), " ").concat(a ? "off" : "on")), i(l)
        },
        children: a && (0, r.jsx)("div", {
          className: S.checkIcon,
          children: (0, r.jsx)(d.sV5, {
            size: "xs",
            color: d.TVs.colors.WHITE
          })
        })
      }, t)
    }, n)
  },
  j = e => {
    let {
      trackFilterAction: t
    } = e, {
      themeFilters: n,
      onToggleTheme: a
    } = (0, h.S)(), i = (0, g.ZP)() === b.BR.DARK, o = l.useCallback(e => {
      if (n.has(e) || i) return "always-white"
    }, [n, i]), u = l.useCallback(e => n.has(e) || i ? d.TVs.colors.WHITE : d.TVs.colors.INTERACTIVE_NORMAL, [n, i]), p = l.useMemo(() => [{
      name: E.intl.string(E.t.aVBOKi),
      icon: (0, r.jsx)(d.Hzt, {
        size: "xs",
        color: u(c.h.ANIME)
      }),
      enum: c.h.ANIME
    }, {
      name: E.intl.string(E.t["3WoZBQ"]),
      icon: (0, r.jsx)(d.YJV, {
        size: "xs",
        color: u(c.h.GAMING)
      }),
      enum: c.h.GAMING
    }, {
      name: E.intl.string(E.t.yuEmLi),
      icon: (0, r.jsx)(d.y3H, {
        size: "xs",
        color: u(c.h.CUTE_COZY)
      }),
      enum: c.h.CUTE_COZY
    }, {
      name: E.intl.string(E.t.mMvCHh),
      icon: (0, r.jsx)(d.lqV, {
        size: "xs",
        color: u(c.h.SCI_FI)
      }),
      enum: c.h.SCI_FI
    }, {
      name: E.intl.string(E.t.TlhOQE),
      icon: (0, r.jsx)(d.ZRV, {
        size: "xs",
        color: u(c.h.FOOD_DRINKS)
      }),
      enum: c.h.FOOD_DRINKS
    }, {
      name: E.intl.string(E.t["4IaUIC"]),
      icon: (0, r.jsx)(d.GsA, {
        size: "xs",
        color: u(c.h.FANTASY)
      }),
      enum: c.h.FANTASY
    }, {
      name: E.intl.string(E.t.w0nSGx),
      icon: (0, r.jsx)(d.GuY, {
        size: "xs",
        color: u(c.h.ANIMALS_PETS)
      }),
      enum: c.h.ANIMALS_PETS
    }, {
      name: E.intl.string(E.t.cJng7u),
      icon: (0, r.jsx)(d.NQW, {
        size: "xs",
        color: u(c.h.NATURE)
      }),
      enum: c.h.NATURE
    }, {
      name: E.intl.string(E.t["5mUvyM"]),
      icon: (0, r.jsx)(d.Roe, {
        size: "xs",
        color: u(c.h.MOVIES_TV_SHOWS)
      }),
      enum: c.h.MOVIES_TV_SHOWS
    }, {
      name: E.intl.string(E.t.MB9H5e),
      icon: (0, r.jsx)(d._Tr, {
        size: "xs",
        color: u(c.h.DARK_MOODY)
      }),
      enum: c.h.DARK_MOODY
    }], [u]);
    return (0, r.jsxs)("div", {
      className: S.filterSection,
      children: [(0, r.jsx)(d.Text, {
        variant: "text-md/semibold",
        className: S.filterTitle,
        children: E.intl.string(E.t.t1Ztrq)
      }), (0, r.jsx)("div", {
        className: S.themeRow,
        children: p.map(e => {
          let {
            name: l,
            icon: i,
            enum: c
          } = e;
          return (0, r.jsxs)(d.P3F, {
            className: s()(S.theme, {
              [S.themeToggled]: n.has(c)
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