/** Chunk was on 45620 **/
/** chunk id: 841875, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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

function _() {
  let {
    onToggleOrbEligible: e,
    orbEligible: t,
    reset: n,
    hasFilters: a
  } = (0, Chunk501431.S)(), s = Chunk120356(), {
    enabled: i
  } = (0, Chunk825102.W)({
    location: "Shop"
  }), c = (0, Chunk381585.sp)(), u = Chunk473749.useCallback(e => {
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
  return (0, Chunk54381.jsxs)("div", {
    className: Chunk80241.filterBar,
    children: [(0, Chunk54381.jsxs)("div", {
      className: o()(Chunk80241.filterSection, Chunk80241.itemType),
      children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-md/semibold",
        className: Chunk80241.filterTitle,
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
    }), (0, Chunk54381.jsx)(x, {
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
    } = e, a = {
      [i.G.AVATAR_DECORATION]: E.intl.string(E.t.dRZYNE),
      [i.G.PROFILE_EFFECT]: E.intl.string(E.t["1cNjtx"]),
      [i.G.NAMEPLATE]: E.intl.string(E.t.V68Fqz),
      [i.G.BUNDLE]: E.intl.string(E.t.FYFpps)
    }, {
      itemTypeFilters: o,
      onToggleItemType: s
    } = (0, m.S)();
    return (0, r.jsx)(d.Checkbox, {
      checked: o.has(n),
      onChange: () => {
        var e;
        let t = (null == (e = a[n]) ? true : e.toLowerCase()) != null ? a[n].toLowerCase() : n;
        l("filter item type ".concat(t, " ").concat(false === o.has(n) ? "on" : "off")), s(n)
      },
      label: null != (t = a[n]) ? t : ""
    })
  },
  x = e => {
    let {
      trackFilterAction: t
    } = e, n = l.useMemo(() => [{
      color: "#9B59B6",
      label: E.intl.string(E.t.kqUD4P),
      enum: s.x.PURPLE
    }, {
      color: "#3498DB",
      label: E.intl.string(E.t.qQTRae),
      enum: s.x.BLUE
    }, {
      color: "#2ECC71",
      label: E.intl.string(E.t["f/Ylk6"]),
      enum: s.x.GREEN
    }, {
      color: "#A0522D",
      label: E.intl.string(E.t["Sd/BMa"]),
      enum: s.x.BROWN
    }, {
      color: "#F1C40F",
      label: E.intl.string(E.t["0fevYz"]),
      enum: s.x.YELLOW
    }], []), a = l.useMemo(() => [{
      color: "#E67E22",
      label: E.intl.string(E.t.ZE7weD),
      enum: s.x.ORANGE
    }, {
      color: "#E74C3C",
      label: E.intl.string(E.t.hKJGOM),
      enum: s.x.RED
    }, {
      color: "#EC407A",
      label: E.intl.string(E.t.HvLEGM),
      enum: s.x.PINK
    }, {
      color: "#FFFFFF",
      label: E.intl.string(E.t["CB+lNO"]),
      enum: s.x.WHITE
    }, {
      color: "#262626",
      label: E.intl.string(E.t["dMey+v"]),
      enum: s.x.BLACK
    }], []);
    return (0, r.jsxs)("div", {
      className: S.filterSection,
      children: [(0, r.jsx)(d.Text, {
        variant: "text-md/semibold",
        className: S.filterTitle,
        children: E.intl.string(E.t.K1xGoG)
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
    } = (0, m.S)();
    return (0, r.jsx)("div", {
      className: S.colorSwatchRow,
      children: t.map(e => {
        let {
          color: t,
          label: o,
          enum: s
        } = e;
        return (0, r.jsx)(j, {
          color: t,
          label: o,
          enum: s,
          isToggled: l.has(s),
          onToggleColor: a,
          trackFilterAction: n
        }, s)
      })
    })
  },
  j = e => {
    let {
      color: t,
      label: n,
      enum: l,
      isToggled: a,
      onToggleColor: s,
      trackFilterAction: i
    } = e;
    return (0, r.jsx)(u.u, {
      text: n,
      asContainer: true,
      children: (0, r.jsx)(d.P3F, {
        className: o()(S.circle, {
          [S.circleToggled]: a
        }),
        style: {
          backgroundColor: t
        },
        "aria-label": n,
        onClick: () => {
          i("filter color ".concat(n.toLowerCase(), " ").concat(a ? "off" : "on")), s(l)
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
  k = e => {
    let {
      trackFilterAction: t
    } = e, {
      themeFilters: n,
      onToggleTheme: a
    } = (0, m.S)(), s = (0, f.ZP)() === v.BR.DARK, i = l.useCallback(e => {
      if (n.has(e) || s) return "always-white"
    }, [n, s]), u = l.useCallback(e => n.has(e) || s ? d.TVs.colors.WHITE : d.TVs.colors.INTERACTIVE_TEXT_DEFAULT, [n, s]), g = l.useMemo(() => [{
      name: E.intl.string(E.t.aVBOKh),
      icon: (0, r.jsx)(d.Hzt, {
        size: "xs",
        color: u(c.h.ANIME)
      }),
      enum: c.h.ANIME
    }, {
      name: E.intl.string(E.t["3WoZBc"]),
      icon: (0, r.jsx)(d.YJV, {
        size: "xs",
        color: u(c.h.GAMING)
      }),
      enum: c.h.GAMING
    }, {
      name: E.intl.string(E.t.yuEmLj),
      icon: (0, r.jsx)(d.y3H, {
        size: "xs",
        color: u(c.h.CUTE_COZY)
      }),
      enum: c.h.CUTE_COZY
    }, {
      name: E.intl.string(E.t.mMvCHo),
      icon: (0, r.jsx)(d.lqV, {
        size: "xs",
        color: u(c.h.SCI_FI)
      }),
      enum: c.h.SCI_FI
    }, {
      name: E.intl.string(E.t.TlhOQC),
      icon: (0, r.jsx)(d.ZRV, {
        size: "xs",
        color: u(c.h.FOOD_DRINKS)
      }),
      enum: c.h.FOOD_DRINKS
    }, {
      name: E.intl.string(E.t["4IaUIM"]),
      icon: (0, r.jsx)(d.GsA, {
        size: "xs",
        color: u(c.h.FANTASY)
      }),
      enum: c.h.FANTASY
    }, {
      name: E.intl.string(E.t["w0nSG/"]),
      icon: (0, r.jsx)(d.GuY, {
        size: "xs",
        color: u(c.h.ANIMALS_PETS)
      }),
      enum: c.h.ANIMALS_PETS
    }, {
      name: E.intl.string(E.t.cJng7v),
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
      name: E.intl.string(E.t.MB9H5Z),
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
        children: E.intl.string(E.t.t1Ztrp)
      }), (0, r.jsx)("div", {
        className: S.themeRow,
        children: g.map(e => {
          let {
            name: l,
            icon: s,
            enum: c
          } = e;
          return (0, r.jsxs)(d.P3F, {
            className: o()(S.theme, {
              [S.themeToggled]: n.has(c)
            }),
            onClick: () => {
              let e = n.has(c);
              t("filter theme ".concat(l.toLowerCase(), " ").concat(e ? "off" : "on")), a(c)
            },
            children: [s, (0, r.jsx)(d.Text, {
              color: i(c),
              variant: "text-md/medium",
              children: l
            })]
          }, l)
        })
      })]
    })
  }