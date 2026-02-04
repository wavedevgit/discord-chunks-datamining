/** Chunk was on 59275 **/
/** chunk id: 662166, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => A
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk154308 = require("./154308.js"),
  Chunk641150 = require("./641150.js"),
  Chunk121886 = require("./121886.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk151252 = require("./151252.js"),
  Chunk954571 = require("./954571.js"),
  Chunk440938 = require("./440938.jsx"),
  Chunk365491 = require("./365491.js"),
  Chunk758836 = require("./758836.js"),
  Chunk652215 = require("./652215.js"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk849660 = require("./849660.js");

function A() {
  let {
    onToggleOrbEligible: e,
    orbEligible: t,
    reset: n,
    hasFilters: s
  } = (0, b.v)(), i = s(), {
    enabled: o
  } = (0, p.Z)({
    location: "Shop"
  }), c = (0, f.uM)(), u = l.useCallback(e => {
    m.default.track(_.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
    className: C.kT,
    children: [(0, r.jsxs)("div", {
      className: a()(C.KZ, C.YG),
      children: [(0, r.jsx)(d.Text, {
        variant: "text-md/semibold",
        className: C.hr,
        children: v.intl.string(v.t.Qk6r1a)
      }), h._6.map(e => (0, r.jsx)(x, {
        filter: e,
        trackFilterAction: u
      }, e)), o && (0, r.jsx)(d.Checkbox, {
        checked: t,
        onChange: () => {
          u("filter orb eligible ".concat(false === t ? "on" : "off")), e()
        },
        label: v.intl.string(v.t.AHHHgG)
      })]
    }), (0, r.jsx)(S, {
      trackFilterAction: u
    }), (0, r.jsx)(j, {
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
let x = e => {
    var t;
    let {
      filter: n,
      trackFilterAction: l
    } = e, s = {
      [o.q.AVATAR_DECORATION]: v.intl.string(v.t.dRZYNE),
      [o.q.PROFILE_EFFECT]: v.intl.string(v.t["1cNjtx"]),
      [o.q.NAMEPLATE]: v.intl.string(v.t.V68Fqz),
      [o.q.BUNDLE]: v.intl.string(v.t.FYFpps)
    }, {
      itemTypeFilters: a,
      onToggleItemType: i
    } = (0, b.v)();
    return (0, r.jsx)(d.Checkbox, {
      checked: a.has(n),
      onChange: () => {
        var e;
        let t = (null == (e = s[n]) ? true : e.toLowerCase()) != null ? s[n].toLowerCase() : n;
        l("filter item type ".concat(t, " ").concat(false === a.has(n) ? "on" : "off")), i(n)
      },
      label: null != (t = s[n]) ? t : ""
    })
  },
  S = e => {
    let {
      trackFilterAction: t
    } = e, n = l.useMemo(() => [{
      color: "#9B59B6",
      label: v.intl.string(v.t.kqUD4P),
      enum: i.I.PURPLE
    }, {
      color: "#3498DB",
      label: v.intl.string(v.t.qQTRae),
      enum: i.I.BLUE
    }, {
      color: "#2ECC71",
      label: v.intl.string(v.t["f/Ylk6"]),
      enum: i.I.GREEN
    }, {
      color: "#A0522D",
      label: v.intl.string(v.t["Sd/BMa"]),
      enum: i.I.BROWN
    }, {
      color: "#F1C40F",
      label: v.intl.string(v.t["0fevYz"]),
      enum: i.I.YELLOW
    }], []), s = l.useMemo(() => [{
      color: "#E67E22",
      label: v.intl.string(v.t.ZE7weD),
      enum: i.I.ORANGE
    }, {
      color: "#E74C3C",
      label: v.intl.string(v.t.hKJGOM),
      enum: i.I.RED
    }, {
      color: "#EC407A",
      label: v.intl.string(v.t.HvLEGM),
      enum: i.I.PINK
    }, {
      color: "#FFFFFF",
      label: v.intl.string(v.t["CB+lNO"]),
      enum: i.I.WHITE
    }, {
      color: "#262626",
      label: v.intl.string(v.t["dMey+v"]),
      enum: i.I.BLACK
    }], []);
    return (0, r.jsxs)("div", {
      className: C.KZ,
      children: [(0, r.jsx)(d.Text, {
        variant: "text-md/semibold",
        className: C.hr,
        children: v.intl.string(v.t.K1xGoG)
      }), (0, r.jsx)(O, {
        colors: n,
        trackFilterAction: t
      }), (0, r.jsx)(O, {
        colors: s,
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
      onToggleColor: s
    } = (0, b.v)();
    return (0, r.jsx)("div", {
      className: C.OW,
      children: t.map(e => {
        let {
          color: t,
          label: a,
          enum: i
        } = e;
        return (0, r.jsx)(y, {
          color: t,
          label: a,
          enum: i,
          isToggled: l.has(i),
          onToggleColor: s,
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
      isToggled: s,
      onToggleColor: i,
      trackFilterAction: o
    } = e;
    return (0, r.jsx)(u.m, {
      text: n,
      asContainer: true,
      children: (0, r.jsx)(d.DUT, {
        className: a()(C.n1, {
          [C.lx]: s
        }),
        style: {
          backgroundColor: t
        },
        "aria-label": n,
        onClick: () => {
          o("filter color ".concat(n.toLowerCase(), " ").concat(s ? "off" : "on")), i(l)
        },
        children: s && (0, r.jsx)("div", {
          className: C.oE,
          children: (0, r.jsx)(d.rOg, {
            size: "xs",
            color: d.LU0.colors.WHITE
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
      onToggleTheme: s
    } = (0, b.v)(), i = (0, g.Ay)() === E.NJ.DARK, o = l.useCallback(e => {
      if (n.has(e) || i) return "always-white"
    }, [n, i]), u = l.useCallback(e => n.has(e) || i ? d.LU0.colors.WHITE : d.LU0.colors.INTERACTIVE_TEXT_DEFAULT, [n, i]), p = l.useMemo(() => [{
      name: v.intl.string(v.t.aVBOKh),
      icon: (0, r.jsx)(d.E4v, {
        size: "xs",
        color: u(c.K.ANIME)
      }),
      enum: c.K.ANIME
    }, {
      name: v.intl.string(v.t["3WoZBc"]),
      icon: (0, r.jsx)(d._b6, {
        size: "xs",
        color: u(c.K.GAMING)
      }),
      enum: c.K.GAMING
    }, {
      name: v.intl.string(v.t.yuEmLj),
      icon: (0, r.jsx)(d.CVi, {
        size: "xs",
        color: u(c.K.CUTE_COZY)
      }),
      enum: c.K.CUTE_COZY
    }, {
      name: v.intl.string(v.t.mMvCHo),
      icon: (0, r.jsx)(d.LIQ, {
        size: "xs",
        color: u(c.K.SCI_FI)
      }),
      enum: c.K.SCI_FI
    }, {
      name: v.intl.string(v.t.TlhOQC),
      icon: (0, r.jsx)(d.Lf3, {
        size: "xs",
        color: u(c.K.FOOD_DRINKS)
      }),
      enum: c.K.FOOD_DRINKS
    }, {
      name: v.intl.string(v.t["4IaUIM"]),
      icon: (0, r.jsx)(d.fhe, {
        size: "xs",
        color: u(c.K.FANTASY)
      }),
      enum: c.K.FANTASY
    }, {
      name: v.intl.string(v.t["w0nSG/"]),
      icon: (0, r.jsx)(d.NVR, {
        size: "xs",
        color: u(c.K.ANIMALS_PETS)
      }),
      enum: c.K.ANIMALS_PETS
    }, {
      name: v.intl.string(v.t.cJng7v),
      icon: (0, r.jsx)(d.pPb, {
        size: "xs",
        color: u(c.K.NATURE)
      }),
      enum: c.K.NATURE
    }, {
      name: v.intl.string(v.t["5mUvyM"]),
      icon: (0, r.jsx)(d.TAc, {
        size: "xs",
        color: u(c.K.MOVIES_TV_SHOWS)
      }),
      enum: c.K.MOVIES_TV_SHOWS
    }, {
      name: v.intl.string(v.t.MB9H5Z),
      icon: (0, r.jsx)(d.eEe, {
        size: "xs",
        color: u(c.K.DARK_MOODY)
      }),
      enum: c.K.DARK_MOODY
    }], [u]);
    return (0, r.jsxs)("div", {
      className: C.KZ,
      children: [(0, r.jsx)(d.Text, {
        variant: "text-md/semibold",
        className: C.hr,
        children: v.intl.string(v.t.t1Ztrp)
      }), (0, r.jsx)("div", {
        className: C.Ot,
        children: p.map(e => {
          let {
            name: l,
            icon: i,
            enum: c
          } = e;
          return (0, r.jsxs)(d.DUT, {
            className: a()(C.w4, {
              [C.C7]: n.has(c)
            }),
            onClick: () => {
              let e = n.has(c);
              t("filter theme ".concat(l.toLowerCase(), " ").concat(e ? "off" : "on")), s(c)
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