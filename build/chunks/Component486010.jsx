/** Chunk was on 263 **/
/** chunk id: 486010, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  default: () => R
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk110259 = require("./110259.js"),
  Chunk417597 = require("./417597.js"),
  Chunk827734 = require("./827734.js"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk608461 = require("./608461.js"),
  Chunk58149 = require("./58149.js"),
  Chunk139286 = require("./139286.js"),
  Chunk544028 = require("./544028.js"),
  Chunk954571 = require("./954571.js"),
  Chunk567305 = require("./567305.js"),
  Chunk336200 = require("./336200.js"),
  Chunk74399 = require("./74399.js"),
  Chunk739455 = require("./739455.js"),
  Chunk752942 = require("./752942.jsx"),
  Chunk128088 = require("./128088.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk904268 = require("./904268.js");

function I(e) {
  let {
    name: t,
    imageUrl: a,
    selected: n,
    onTap: s
  } = e;
  return (0, r.jsxs)(m.DUT, {
    onClick: s,
    className: C.rz,
    children: [(0, r.jsx)("img", {
      src: a,
      alt: "",
      className: C.ks
    }), (0, r.jsxs)("div", {
      className: C.GY,
      children: [(0, r.jsx)(m.Heading, {
        variant: "heading-md/normal",
        className: l()({
          [C.kE]: !n
        }),
        children: t
      }), n && (0, r.jsx)(m.yr3, {
        size: "md",
        secondaryColor: o.A.unsafe_rawColors.WHITE.css,
        color: o.A.unsafe_rawColors.BRAND_500.css
      })]
    })]
  })
}

function O(e) {
  let {
    loading: t,
    error: a,
    templates: n,
    selectedTemplateIndex: s,
    handleTapTemplate: l
  } = e, i = (0, c.bG)([p.A], () => p.A.theme);
  return t ? (0, r.jsx)(m.y$y, {}) : null != a ? (0, r.jsx)(m.wx6, {
    type: "critical",
    children: a.message
  }) : null == n || 0 === n.length ? null : (0, r.jsx)("div", {
    className: C.PJ,
    children: n.map((e, t) => (0, r.jsx)(I, {
      imageUrl: t === s ? e.category_image : (0, d.qB)(i) ? e.unselected_light_theme_category_image : e.unselected_dark_theme_category_image,
      name: e.category,
      selected: t === s,
      onTap: () => l(t)
    }, t))
  })
}

function E(e) {
  var t, a;
  let {
    guildId: s,
    templates: l,
    selectedTemplateIndex: i,
    priceTiers: c,
    showPriceReselection: o,
    setShowPriceReselection: d,
    handleCreateTierFromTemplate: m
  } = e, x = (0, T.zu)(s, c, null != l ? null == (a = l[i]) || null == (t = a.listings[0]) ? true : t.price_tier : true), u = null != x && x.length > 0, _ = n.useCallback(e => {
    u ? d(true) : m(e)
  }, [m, u, d]);
  return null == l || 0 === l.length ? null : o && u ? (0, r.jsx)(y.A, {
    selectedTemplate: l[i],
    handleSelectTemplate: m,
    newPricesToPick: x
  }) : (0, r.jsx)(v.A, {
    selectedTemplate: l[i],
    handleSelectTemplate: _
  })
}

function R(e) {
  let {
    transitionState: t,
    onClose: a,
    guildId: s,
    addNewEditStateFromTemplate: l,
    addNewEditStateFromScratch: o,
    priceTiers: d
  } = e, p = (0, c.bG)([g.A], () => g.A.getTemplates(s)), [T, {
    loading: v,
    error: y
  }] = (0, x.A)(h.y), I = n.useRef("voluntarily_exit");
  n.useEffect(() => {
    (null == p || 0 === p.length) && T(s)
  }, [T, s, p]), n.useEffect(() => {
    t === m.ip4.EXITING && f.default.track(N.HAw.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(a);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
          return Object.getOwnPropertyDescriptor(a, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = a[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = r
        })
      }
      return e
    }({
      exit_reason: I.current
    }, (0, u.H$)(s)))
  }, [t, s, I]);
  let [R, S] = n.useState(0), [w, L] = n.useState(false), A = n.useCallback(e => {
    I.current = "template_selected", (0, h.c)(e, s), l(e), a()
  }, [s, l, a]), P = n.useCallback(() => {
    w ? L(false) : a()
  }, [w, a]), k = (0, j.Xi)(s);
  return (0, _.A)({
    type: i.ImpressionTypes.MODAL,
    name: i.ImpressionNames.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR,
    properties: {
      guild_id: s
    }
  }), (0, r.jsxs)(m.EOs, {
    "data-migration-pending": true,
    transitionState: t,
    size: m.rIJ.DYNAMIC,
    className: C.CR,
    parentComponent: "GuildRoleSubscriptionsTierTemplateModal",
    children: [(0, r.jsx)(m.DUT, {
      onClick: P,
      className: C.b,
      children: (0, r.jsx)(m.PGe, {
        size: "xxs",
        color: "currentColor"
      })
    }), (0, r.jsxs)(m.$mQ, {
      className: C.jE,
      "data-migration-pending": true,
      children: [(0, r.jsxs)("div", {
        className: C.pv,
        children: [w && (0, r.jsx)(m.DUT, {
          className: C.wZ,
          onClick: () => {
            w && L(false)
          },
          "aria-label": "overlay"
        }), (0, r.jsxs)(m.IpV, {
          className: C.H2,
          children: [(0, r.jsx)(m.Heading, {
            variant: "heading-xl/semibold",
            children: b.intl.string(b.t["9QQ+i+"])
          }), (0, r.jsx)(m.Text, {
            variant: "text-sm/normal",
            className: C.jJ,
            children: b.intl.string(b.t.CvFFOv)
          }), k && (0, r.jsx)(m.Text, {
            variant: "text-sm/normal",
            className: C.uL,
            children: b.intl.format(b.t.iQML2g, {
              creatorPortalUrl: "https://discord.com/creator-portal/learn-from-creators?tab=lightning-lessons"
            })
          }), (0, r.jsx)("div", {
            className: C.QX,
            children: (0, r.jsx)(O, {
              loading: v,
              error: y,
              templates: p,
              selectedTemplateIndex: R,
              handleTapTemplate: e => {
                S(e)
              }
            })
          })]
        }), (0, r.jsx)(m.Text, {
          variant: "text-sm/normal",
          children: b.intl.string(b.t.jymUTC)
        }), (0, r.jsx)(m.Button, {
          onClick: () => {
            I.current = "create_from_scratch", o(), a()
          },
          variant: "secondary",
          icon: m.R2l,
          text: b.intl.string(b.t.a3ycUX)
        })]
      }), (0, r.jsx)(E, {
        guildId: s,
        templates: p,
        selectedTemplateIndex: R,
        priceTiers: d,
        showPriceReselection: w,
        setShowPriceReselection: L,
        handleCreateTierFromTemplate: A
      })]
    })]
  })
}