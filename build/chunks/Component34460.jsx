/** Chunk was on 9558 **/
/** chunk id: 34460, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => w
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk990547 = require("./990547.js"),
  Chunk399606 = require("./399606.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk935369 = require("./935369.js"),
  Chunk367907 = require("./367907.js"),
  Chunk213609 = require("./213609.js"),
  Chunk44315 = require("./44315.js"),
  Chunk210887 = require("./210887.js"),
  Chunk626135 = require("./626135.js"),
  Chunk923726 = require("./923726.js"),
  Chunk570849 = require("./570849.js"),
  Chunk853439 = require("./853439.js"),
  Chunk303737 = require("./303737.js"),
  Chunk587431 = require("./587431.jsx"),
  Chunk862239 = require("./862239.jsx"),
  Chunk847004 = require("./847004.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk207417 = require("./207417.js");

function O(e) {
  let {
    name: t,
    imageUrl: n,
    selected: r,
    onTap: l
  } = e;
  return (0, a.jsxs)(d.P3F, {
    onClick: l,
    className: I.templateCard,
    children: [(0, a.jsx)("img", {
      src: n,
      alt: "",
      className: I.templateCardImage
    }), (0, a.jsxs)("div", {
      className: I.templateNameRow,
      children: [(0, a.jsx)(d.X6q, {
        variant: "heading-md/normal",
        className: i()({
          [I.unselectedTemplateName]: !r
        }),
        children: t
      }), r && (0, a.jsx)(d.owK, {
        size: "md",
        secondaryColor: (0, u.Lq)(b.Ilk.WHITE_500),
        color: (0, u.Lq)(b.Ilk.BRAND_500)
      })]
    })]
  })
}

function R(e) {
  let {
    loading: t,
    error: n,
    templates: r,
    selectedTemplateIndex: l,
    handleTapTemplate: i
  } = e, s = (0, c.e7)([f.Z], () => f.Z.theme);
  return t ? (0, a.jsx)(d.$jN, {}) : null != n ? (0, a.jsx)(v.Z, {
    children: n.message
  }) : null == r || 0 === r.length ? null : (0, a.jsx)("div", {
    className: I.templateCardList,
    children: r.map((e, t) => (0, a.jsx)(O, {
      imageUrl: t === l ? e.category_image : (0, o.ap)(s) ? e.unselected_light_theme_category_image : e.unselected_dark_theme_category_image,
      name: e.category,
      selected: t === l,
      onTap: () => i(t)
    }, t))
  })
}

function E(e) {
  var t, n;
  let {
    guildId: l,
    templates: i,
    selectedTemplateIndex: s,
    priceTiers: c,
    showPriceReselection: o,
    setShowPriceReselection: d,
    handleCreateTierFromTemplate: m
  } = e, x = (0, T.g4)(l, c, null != i ? null == (n = i[s]) || null == (t = n.listings[0]) ? true : t.price_tier : true), p = null != x && x.length > 0, u = r.useCallback(e => {
    p ? d(true) : m(e)
  }, [m, p, d]);
  return null == i || 0 === i.length ? null : o && p ? (0, a.jsx)(C.Z, {
    selectedTemplate: i[s],
    handleSelectTemplate: m,
    newPricesToPick: x
  }) : (0, a.jsx)(N.Z, {
    selectedTemplate: i[s],
    handleSelectTemplate: u
  })
}

function w(e) {
  let {
    transitionState: t,
    onClose: n,
    guildId: l,
    addNewEditStateFromTemplate: i,
    addNewEditStateFromScratch: o,
    priceTiers: u
  } = e, f = (0, c.e7)([j.Z], () => j.Z.getTemplates(l)), [T, {
    loading: v,
    error: N
  }] = (0, m.Z)(g.u), C = r.useRef("voluntarily_exit");
  r.useEffect(() => {
    (null == f || 0 === f.length) && T(l)
  }, [T, l, f]), r.useEffect(() => {
    t === d.Dvm.EXITING && _.default.track(b.rMx.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), a.forEach(function(t) {
          var a;
          a = n[t], t in e ? Object.defineProperty(e, t, {
            value: a,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = a
        })
      }
      return e
    }({
      exit_reason: C.current
    }, (0, x.hH)(l)))
  }, [t, l, C]);
  let [O, w] = r.useState(0), [S, k] = r.useState(false), L = r.useCallback(e => {
    C.current = "template_selected", (0, g.l)(e, l), i(e), n()
  }, [l, i, n]), P = r.useCallback(() => {
    S ? k(false) : n()
  }, [S, n]), B = (0, h.yi)(l);
  return (0, p.Z)({
    type: s.ImpressionTypes.MODAL,
    name: s.ImpressionNames.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR,
    properties: {
      guild_id: l
    }
  }), (0, a.jsxs)(d.Y0X, {
    "data-migration-pending": true,
    transitionState: t,
    size: d.CgR.DYNAMIC,
    className: I.modalRoot,
    parentComponent: "GuildRoleSubscriptionsTierTemplateModal",
    children: [(0, a.jsx)(d.P3F, {
      onClick: P,
      className: I.closeButton,
      children: (0, a.jsx)(d.Dio, {
        size: "xxs",
        color: "currentColor"
      })
    }), (0, a.jsxs)(d.hzk, {
      className: I.modalContent,
      "data-migration-pending": true,
      children: [(0, a.jsxs)("div", {
        className: I.templatesContainer,
        children: [S && (0, a.jsx)(d.P3F, {
          className: I.blackoutOverlay,
          onClick: () => {
            S && k(false)
          },
          "aria-label": "overlay"
        }), (0, a.jsxs)(d.zJl, {
          className: I.templatesContainerBody,
          children: [(0, a.jsx)(d.X6q, {
            variant: "heading-xl/semibold",
            children: y.intl.string(y.t["9QQ+i4"])
          }), (0, a.jsx)(d.Text, {
            variant: "text-sm/normal",
            className: I.modalBodyText,
            children: y.intl.string(y.t.CvFFOj)
          }), B && (0, a.jsx)(d.Text, {
            variant: "text-sm/normal",
            className: I.creatorPortalText,
            children: y.intl.format(y.t.iQML2t, {
              creatorPortalUrl: "https://discord.com/creator-portal/learn-from-creators?tab=lightning-lessons"
            })
          }), (0, a.jsx)("div", {
            className: I.templatesContentContainer,
            children: (0, a.jsx)(R, {
              loading: v,
              error: N,
              templates: f,
              selectedTemplateIndex: O,
              handleTapTemplate: e => {
                w(e)
              }
            })
          })]
        }), (0, a.jsx)(d.Text, {
          variant: "text-sm/normal",
          children: y.intl.string(y.t.jymUTE)
        }), (0, a.jsx)(d.zxk, {
          onClick: () => {
            C.current = "create_from_scratch", o(), n()
          },
          variant: "secondary",
          icon: d.vdY,
          text: y.intl.string(y.t.a3ycUV)
        })]
      }), (0, a.jsx)(E, {
        guildId: l,
        templates: f,
        selectedTemplateIndex: O,
        priceTiers: u,
        showPriceReselection: S,
        setShowPriceReselection: k,
        handleCreateTierFromTemplate: L
      })]
    })]
  })
}