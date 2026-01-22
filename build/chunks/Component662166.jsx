/** Chunk was on 59275 **/
/** chunk id: 662166, original params: e,t,l (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => S
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

function S() {
  let {
    onToggleOrbEligible: e,
    orbEligible: t,
    reset: l,
    hasFilters: s
  } = (0, m.v)(), i = s(), {
    enabled: o
  } = (0, b.Z)({
    location: "Shop"
  }), c = (0, p.uM)(), u = r.useCallback(e => {
    g.default.track(E.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
      collectibles_shop_session_id: null == c ? true : c.sessionId,
      page_section: null == c ? true : c.pageSection,
      page_category: null == c ? true : c.pageCategory,
      page_index: null == c ? true : c.pageIndex,
      page_size: null == c ? true : c.pageSize,
      cta_name: e,
      page_type: "catalog"
    })
  }, [c]);
  return (0, n.jsxs)("div", {
    className: x.kT,
    children: [(0, n.jsxs)("div", {
      className: a()(x.KZ, x.YG),
      children: [(0, n.jsx)(d.Text, {
        variant: "text-md/semibold",
        className: x.hr,
        children: A.intl.string(A.t.Qk6r1a)
      }), h._6.map(e => (0, n.jsx)(C, {
        filter: e,
        trackFilterAction: u
      }, e)), o && (0, n.jsx)(d.Checkbox, {
        checked: t,
        onChange: () => {
          u("filter orb eligible ".concat(false === t ? "on" : "off")), e()
        },
        label: A.intl.string(A.t.AHHHgG)
      })]
    }), (0, n.jsx)(O, {
      trackFilterAction: u
    }), (0, n.jsx)(j, {
      trackFilterAction: u
    }), i && (0, n.jsx)(d.Button, {
      variant: "secondary",
      onClick: () => {
        u("filter reset"), l()
      },
      text: A.intl.string(A.t.jwH6KZ),
      fullWidth: true
    })]
  })
}
let C = e => {
    var t;
    let {
      filter: l,
      trackFilterAction: r
    } = e, s = {
      [o.q.AVATAR_DECORATION]: A.intl.string(A.t.dRZYNE),
      [o.q.PROFILE_EFFECT]: A.intl.string(A.t["1cNjtx"]),
      [o.q.NAMEPLATE]: A.intl.string(A.t.V68Fqz),
      [o.q.BUNDLE]: A.intl.string(A.t.FYFpps)
    }, {
      itemTypeFilters: a,
      onToggleItemType: i
    } = (0, m.v)();
    return (0, n.jsx)(d.Checkbox, {
      checked: a.has(l),
      onChange: () => {
        var e;
        let t = (null == (e = s[l]) ? true : e.toLowerCase()) != null ? s[l].toLowerCase() : l;
        r("filter item type ".concat(t, " ").concat(false === a.has(l) ? "on" : "off")), i(l)
      },
      label: null != (t = s[l]) ? t : ""
    })
  },
  O = e => {
    let {
      trackFilterAction: t
    } = e, l = r.useMemo(() => [{
      color: "#9B59B6",
      label: A.intl.string(A.t.kqUD4P),
      enum: i.I.PURPLE
    }, {
      color: "#3498DB",
      label: A.intl.string(A.t.qQTRae),
      enum: i.I.BLUE
    }, {
      color: "#2ECC71",
      label: A.intl.string(A.t["f/Ylk6"]),
      enum: i.I.GREEN
    }, {
      color: "#A0522D",
      label: A.intl.string(A.t["Sd/BMa"]),
      enum: i.I.BROWN
    }, {
      color: "#F1C40F",
      label: A.intl.string(A.t["0fevYz"]),
      enum: i.I.YELLOW
    }], []), s = r.useMemo(() => [{
      color: "#E67E22",
      label: A.intl.string(A.t.ZE7weD),
      enum: i.I.ORANGE
    }, {
      color: "#E74C3C",
      label: A.intl.string(A.t.hKJGOM),
      enum: i.I.RED
    }, {
      color: "#EC407A",
      label: A.intl.string(A.t.HvLEGM),
      enum: i.I.PINK
    }, {
      color: "#FFFFFF",
      label: A.intl.string(A.t["CB+lNO"]),
      enum: i.I.WHITE
    }, {
      color: "#262626",
      label: A.intl.string(A.t["dMey+v"]),
      enum: i.I.BLACK
    }], []);
    return (0, n.jsxs)("div", {
      className: x.KZ,
      children: [(0, n.jsx)(d.Text, {
        variant: "text-md/semibold",
        className: x.hr,
        children: A.intl.string(A.t.K1xGoG)
      }), (0, n.jsx)(_, {
        colors: l,
        trackFilterAction: t
      }), (0, n.jsx)(_, {
        colors: s,
        trackFilterAction: t
      })]
    })
  },
  _ = e => {
    let {
      colors: t,
      trackFilterAction: l
    } = e, {
      colorFilters: r,
      onToggleColor: s
    } = (0, m.v)();
    return (0, n.jsx)("div", {
      className: x.OW,
      children: t.map(e => {
        let {
          color: t,
          label: a,
          enum: i
        } = e;
        return (0, n.jsx)(y, {
          color: t,
          label: a,
          enum: i,
          isToggled: r.has(i),
          onToggleColor: s,
          trackFilterAction: l
        }, i)
      })
    })
  },
  y = e => {
    let {
      color: t,
      label: l,
      enum: r,
      isToggled: s,
      onToggleColor: i,
      trackFilterAction: o
    } = e;
    return (0, n.jsx)(u.m, {
      text: l,
      asContainer: true,
      children: (0, n.jsx)(d.DUT, {
        className: a()(x.n1, {
          [x.lx]: s
        }),
        style: {
          backgroundColor: t
        },
        "aria-label": l,
        onClick: () => {
          o("filter color ".concat(l.toLowerCase(), " ").concat(s ? "off" : "on")), i(r)
        },
        children: s && (0, n.jsx)("div", {
          className: x.oE,
          children: (0, n.jsx)(d.rOg, {
            size: "xs",
            color: d.LU0.colors.WHITE
          })
        })
      }, t)
    }, l)
  },
  j = e => {
    let {
      trackFilterAction: t
    } = e, {
      themeFilters: l,
      onToggleTheme: s
    } = (0, m.v)(), i = (0, f.Ay)() === v.NJ.DARK, o = r.useCallback(e => {
      if (l.has(e) || i) return "always-white"
    }, [l, i]), u = r.useCallback(e => l.has(e) || i ? d.LU0.colors.WHITE : d.LU0.colors.INTERACTIVE_TEXT_DEFAULT, [l, i]), b = r.useMemo(() => [{
      name: A.intl.string(A.t.aVBOKh),
      icon: (0, n.jsx)(d.E4v, {
        size: "xs",
        color: u(c.K.ANIME)
      }),
      enum: c.K.ANIME
    }, {
      name: A.intl.string(A.t["3WoZBc"]),
      icon: (0, n.jsx)(d._b6, {
        size: "xs",
        color: u(c.K.GAMING)
      }),
      enum: c.K.GAMING
    }, {
      name: A.intl.string(A.t.yuEmLj),
      icon: (0, n.jsx)(d.CVi, {
        size: "xs",
        color: u(c.K.CUTE_COZY)
      }),
      enum: c.K.CUTE_COZY
    }, {
      name: A.intl.string(A.t.mMvCHo),
      icon: (0, n.jsx)(d.LIQ, {
        size: "xs",
        color: u(c.K.SCI_FI)
      }),
      enum: c.K.SCI_FI
    }, {
      name: A.intl.string(A.t.TlhOQC),
      icon: (0, n.jsx)(d.Lf3, {
        size: "xs",
        color: u(c.K.FOOD_DRINKS)
      }),
      enum: c.K.FOOD_DRINKS
    }, {
      name: A.intl.string(A.t["4IaUIM"]),
      icon: (0, n.jsx)(d.fhe, {
        size: "xs",
        color: u(c.K.FANTASY)
      }),
      enum: c.K.FANTASY
    }, {
      name: A.intl.string(A.t["w0nSG/"]),
      icon: (0, n.jsx)(d.NVR, {
        size: "xs",
        color: u(c.K.ANIMALS_PETS)
      }),
      enum: c.K.ANIMALS_PETS
    }, {
      name: A.intl.string(A.t.cJng7v),
      icon: (0, n.jsx)(d.pPb, {
        size: "xs",
        color: u(c.K.NATURE)
      }),
      enum: c.K.NATURE
    }, {
      name: A.intl.string(A.t["5mUvyM"]),
      icon: (0, n.jsx)(d.TAc, {
        size: "xs",
        color: u(c.K.MOVIES_TV_SHOWS)
      }),
      enum: c.K.MOVIES_TV_SHOWS
    }, {
      name: A.intl.string(A.t.MB9H5Z),
      icon: (0, n.jsx)(d.eEe, {
        size: "xs",
        color: u(c.K.DARK_MOODY)
      }),
      enum: c.K.DARK_MOODY
    }], [u]);
    return (0, n.jsxs)("div", {
      className: x.KZ,
      children: [(0, n.jsx)(d.Text, {
        variant: "text-md/semibold",
        className: x.hr,
        children: A.intl.string(A.t.t1Ztrp)
      }), (0, n.jsx)("div", {
        className: x.Ot,
        children: b.map(e => {
          let {
            name: r,
            icon: i,
            enum: c
          } = e;
          return (0, n.jsxs)(d.DUT, {
            className: a()(x.w4, {
              [x.C7]: l.has(c)
            }),
            onClick: () => {
              let e = l.has(c);
              t("filter theme ".concat(r.toLowerCase(), " ").concat(e ? "off" : "on")), s(c)
            },
            children: [i, (0, n.jsx)(d.Text, {
              color: o(c),
              variant: "text-md/medium",
              children: r
            })]
          }, r)
        })
      })]
    })
  }