/** Chunk was on 45620 **/
/** chunk id: 841875, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk587635 = require("./587635.js");

function E() {
  let {
    onToggleOrbEligible: e,
    orbEligible: t,
    reset: n,
    hasFilters: i
  } = (0, Chunk501431.S)(), o = Chunk120356(), {
    enabled: s
  } = (0, Chunk825102.WX)({
    location: "Shop"
  }), c = (0, Chunk381585.sp)(), u = Chunk473749.useCallback(e => {
    f.default.track(_.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
      collectibles_shop_session_id: null == c ? true : c.sessionId,
      page_section: null == c ? true : c.pageSection,
      page_category: null == c ? true : c.pageCategory,
      page_index: null == c ? true : c.pageIndex,
      page_size: null == c ? true : c.pageSize,
      cta_name: e,
      page_type: "catalog"
    })
  }, [Chunk255835]);
  return (0, Chunk54381.jsxs)("div", {
    className: Chunk587635.filterBar,
    children: [(0, Chunk54381.jsxs)("div", {
      className: a()(Chunk587635.filterSection, Chunk587635.itemType),
      children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-md/semibold",
        className: Chunk587635.filterTitle,
        children: Chunk388032.intl.string(Chunk388032.t.Qk6r1a)
      }), Chunk215023.xg.map(e => (0, r.jsx)(O, {
        filter: e,
        trackFilterAction: u
      }, e)), Chunk335818 && (0, Chunk54381.jsx)(Chunk481060.Checkbox, {
        checked: exports,
        onChange: () => {
          Chunk28664("filter orb eligible ".concat(false === exports ? "on" : "off")), module()
        },
        label: Chunk388032.intl.string(Chunk388032.t.AHHHgG)
      })]
    }), (0, Chunk54381.jsx)(S, {
      trackFilterAction: Chunk28664
    }), (0, Chunk54381.jsx)(k, {
      trackFilterAction: Chunk28664
    }), Chunk990705 && (0, Chunk54381.jsx)(Chunk481060.Button, {
      variant: "secondary",
      onClick: () => {
        Chunk28664("filter reset"), require()
      },
      text: Chunk388032.intl.string(Chunk388032.t.jwH6KZ),
      fullWidth: true
    })]
  })
}
let O = e => {
    var t;
    let {
      filter: n,
      trackFilterAction: l
    } = e, i = {
      [s.G.AVATAR_DECORATION]: v.intl.string(v.t.dRZYNE),
      [s.G.PROFILE_EFFECT]: v.intl.string(v.t["1cNjtx"]),
      [s.G.NAMEPLATE]: v.intl.string(v.t.V68Fqz),
      [s.G.BUNDLE]: v.intl.string(v.t.FYFpps)
    }, {
      itemTypeFilters: a,
      onToggleItemType: o
    } = (0, m.S)();
    return (0, r.jsx)(d.Checkbox, {
      checked: a.has(n),
      onChange: () => {
        var e;
        let t = (null == (e = i[n]) ? true : e.toLowerCase()) != null ? i[n].toLowerCase() : n;
        l("filter item type ".concat(t, " ").concat(false === a.has(n) ? "on" : "off")), o(n)
      },
      label: null != (t = i[n]) ? t : ""
    })
  },
  S = e => {
    let {
      trackFilterAction: t
    } = e, n = l.useMemo(() => [{
      color: "#9B59B6",
      label: v.intl.string(v.t.kqUD4P),
      enum: o.x.PURPLE
    }, {
      color: "#3498DB",
      label: v.intl.string(v.t.qQTRae),
      enum: o.x.BLUE
    }, {
      color: "#2ECC71",
      label: v.intl.string(v.t["f/Ylk6"]),
      enum: o.x.GREEN
    }, {
      color: "#A0522D",
      label: v.intl.string(v.t["Sd/BMa"]),
      enum: o.x.BROWN
    }, {
      color: "#F1C40F",
      label: v.intl.string(v.t["0fevYz"]),
      enum: o.x.YELLOW
    }], []), i = l.useMemo(() => [{
      color: "#E67E22",
      label: v.intl.string(v.t.ZE7weD),
      enum: o.x.ORANGE
    }, {
      color: "#E74C3C",
      label: v.intl.string(v.t.hKJGOM),
      enum: o.x.RED
    }, {
      color: "#EC407A",
      label: v.intl.string(v.t.HvLEGM),
      enum: o.x.PINK
    }, {
      color: "#FFFFFF",
      label: v.intl.string(v.t["CB+lNO"]),
      enum: o.x.WHITE
    }, {
      color: "#262626",
      label: v.intl.string(v.t["dMey+v"]),
      enum: o.x.BLACK
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
        colors: i,
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
      onToggleColor: i
    } = (0, m.S)();
    return (0, r.jsx)("div", {
      className: x.colorSwatchRow,
      children: t.map(e => {
        let {
          color: t,
          label: a,
          enum: o
        } = e;
        return (0, r.jsx)(j, {
          color: t,
          label: a,
          enum: o,
          isToggled: l.has(o),
          onToggleColor: i,
          trackFilterAction: n
        }, o)
      })
    })
  },
  j = e => {
    let {
      color: t,
      label: n,
      enum: l,
      isToggled: i,
      onToggleColor: o,
      trackFilterAction: s
    } = e;
    return (0, r.jsx)(u.u, {
      text: n,
      asContainer: true,
      children: (0, r.jsx)(d.P3F, {
        className: a()(x.circle, {
          [x.circleToggled]: i
        }),
        style: {
          backgroundColor: t
        },
        "aria-label": n,
        onClick: () => {
          s("filter color ".concat(n.toLowerCase(), " ").concat(i ? "off" : "on")), o(l)
        },
        children: i && (0, r.jsx)("div", {
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
      onToggleTheme: i
    } = (0, m.S)(), o = (0, p.ZP)() === b.BR.DARK, s = l.useCallback(e => {
      if (n.has(e) || o) return "always-white"
    }, [n, o]), u = l.useCallback(e => n.has(e) || o ? d.TVs.colors.WHITE : d.TVs.colors.INTERACTIVE_NORMAL, [n, o]), g = l.useMemo(() => [{
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
            icon: o,
            enum: c
          } = e;
          return (0, r.jsxs)(d.P3F, {
            className: a()(x.theme, {
              [x.themeToggled]: n.has(c)
            }),
            onClick: () => {
              let e = n.has(c);
              t("filter theme ".concat(l.toLowerCase(), " ").concat(e ? "off" : "on")), i(c)
            },
            children: [o, (0, r.jsx)(d.Text, {
              color: s(c),
              variant: "text-md/medium",
              children: l
            })]
          }, l)
        })
      })]
    })
  }