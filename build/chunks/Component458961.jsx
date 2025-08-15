/** Chunk was on 73628 **/
/** chunk id: 458961, original params: e,t,A (module,exports,require) **/
require.d(exports, {
  default: () => ee
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk831209 = require("./831209.js"),
  Chunk399606 = require("./399606.js"),
  Chunk215569 = require("./215569.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk749210 = require("./749210.js"),
  Chunk852860 = require("./852860.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk725803 = require("./725803.js"),
  Chunk313201 = require("./313201.js"),
  Chunk76535 = require("./76535.js"),
  Chunk215388 = require("./215388.jsx"),
  Chunk674180 = require("./674180.js"),
  Chunk884858 = require("./884858.js"),
  Chunk695346 = require("./695346.js"),
  Chunk485386 = require("./485386.js"),
  Chunk937615 = require("./937615.js"),
  Chunk73346 = require("./73346.js"),
  Chunk506071 = require("./506071.js"),
  Chunk587123 = require("./587123.jsx"),
  Chunk240864 = require("./240864.js"),
  Chunk863663 = require("./863663.js"),
  Chunk923400 = require("./923400.js"),
  Chunk623488 = require("./623488.jsx"),
  Chunk152980 = require("./152980.jsx"),
  Chunk120651 = require("./120651.jsx"),
  Chunk871388 = require("./871388.jsx"),
  Chunk412110 = require("./412110.jsx"),
  Chunk513669 = require("./513669.jsx"),
  Chunk972797 = require("./972797.jsx"),
  Chunk943516 = require("./943516.jsx"),
  Chunk302463 = require("./302463.js"),
  Chunk981631 = require("./981631.js"),
  Chunk674563 = require("./674563.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk179598 = require("./179598.js");

function D(e) {
  for (var t = 1; t < arguments.length; t++) {
    var A = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(A);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(A).filter(function(e) {
      return Object.getOwnPropertyDescriptor(A, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = A[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var A = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      A.push.apply(A, n)
    }
    return A
  })(Object(t)).forEach(function(A) {
    Object.defineProperty(e, A, Object.getOwnPropertyDescriptor(t, A))
  }), e
}
let G = (0, Chunk313201.hQ)(),
  Y = (0, Chunk313201.hQ)(),
  H = (0, Chunk313201.hQ)();

function M(e) {
  let {
    text: t,
    onChange: A,
    value: r,
    disabled: a,
    warning: i
  } = e, o = (0, v.Dt)(), s = a ? "text-muted" : "text-default";
  return (0, n.jsxs)("label", {
    className: l()(B.benefitToggleContainer, {
      [B.disabled]: a
    }),
    htmlFor: o,
    children: [(0, n.jsx)(g.Text, {
      variant: "text-sm/medium",
      color: s,
      children: t
    }), null != i && (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(g.LZC, {
        size: 4,
        horizontal: true
      }), i]
    }), (0, n.jsx)(g.LZC, {
      size: 16,
      horizontal: true
    }), (0, n.jsx)(g.rsf, {
      onChange: A,
      checked: r,
      disabled: a,
      id: o
    })]
  })
}

function J(e, t) {
  return e.filter(e => {
    let {
      value: A,
      label: n
    } = e;
    return A.toString().includes(t) || n.includes(t)
  })
}

function _(e) {
  let {
    guildId: t,
    selectedPriceTier: A,
    setPriceTier: a
  } = e, {
    priceTiers: l
  } = (0, b.R)(t, R.RG5.GUILD_PRODUCTS), i = r.useMemo(() => (null != l ? l : null != A ? [A] : []).map(e => ({
    value: e,
    label: (0, O.T4)(e, R.pKx.USD)
  })), [l, A]);
  return (0, n.jsx)(g.VcW, {
    value: A,
    placeholder: k.intl.string(k.t.aI4J5O),
    maxVisibleItems: 5,
    options: i,
    onChange: a,
    filter: J,
    "aria-required": true
  })
}

function $(e) {
  var t, a, l, i, v, b, x, J;
  let {
    guildId: $,
    productId: et,
    transitionState: eA,
    onClose: en
  } = e, [er, ea] = r.useState(et), el = (0, c.e7)([N.Z], () => null == er ? null : N.Z.getGuildProduct(er), [er]), ei = (null == el ? true : el.published) === true, {
    application: eo
  } = (0, m.Z)($, L.wW.GUILD_ROLE_SUBSCRIPTIONS), es = F.M["0"], ec = (0, c.e7)([h.Z], () => h.Z.useReducedMotion), ed = j.QK.useSetting(), eu = (0, P.n)(), eg = r.useCallback(() => {
    var e;
    return (null == el || null == (e = el.image_asset) ? true : e.application_id) == null ? es.data : (0, V._W)(el.image_asset.application_id, el.image_asset, 600, eu && ed ? true : "webp")
  }, [es, el, eu, ed]), {
    shouldRestrictUpdatingCreatorMonetizationSettings: ef
  } = (0, q.gX)($);
  r.useEffect(() => {
    ef && (en(), (0, W.B)(k.intl.string(k.t.OLf3xs), k.t["90LBVl"]))
  }, [ef, en]);
  let [ep, eh] = r.useState(null != (l = null == el ? true : el.name) ? l : ""), [em, ev] = r.useState(null != (i = null == el ? true : el.description) ? i : ""), [eb, eC] = r.useState(null != (v = null == el ? true : el.price_tier) ? v : true), [eq, ex] = r.useState(eg), [ej, eU] = r.useState(null != (b = null == el || null == (t = el.image_asset) ? true : t.filename) ? b : es.name), [eO, eV] = r.useState(false), [eP, ey] = r.useState(), eN = r.useMemo(() => null != eb ? (0, O.T4)(eb, R.pKx.USD) : true, [eb]), [eI, eF] = r.useState(true), {
    changesSaving: eT,
    saveError: eK,
    saveProductWithAttachments: eZ,
    hasUnsavedAttachmentChanges: eW,
    cancelUnusedUploads: eX
  } = (0, y.P)(), ez = (null == el ? true : el.attachments) != null && (null == el ? true : el.attachments.length) > 0, eS = null != eK ? eK : eP, eQ = null != eT && "published" in eT, ew = null != eT && !eQ, eR = null != (x = null == el ? true : el.role_id) ? x : null, [eL, ek] = r.useState(), eB = null != eL || null != eR, eD = (0, c.e7)([U.Z], () => null != eR && null !== eL ? U.Z.getRole($, eR) : null != eL ? eL : true, [eL, eR, $]), eE = "";
  eB && eI ? eE = k.intl.string(k.t.ih4QMT) : eB ? eE = k.intl.string(k.t.o9xphY) : eI && (eE = k.intl.string(k.t.DWYJub));
  let eG = () => {
      eF(false), eX()
    },
    [eY, eH] = r.useState(),
    {
      changes: eM,
      hasUnsavedChanges: eJ,
      canSaveForDraft: e_,
      canSaveForPublished: e$,
      canPublishOrUnpublish: e0
    } = r.useMemo(() => (0, I.fG)({
      guildProductListing: el,
      name: ep,
      priceTier: eb,
      description: em,
      image: eq,
      imageName: ej,
      isImageChanged: eO,
      newRoleParams: eL,
      hasSavedAttachments: ez,
      hasUnsavedAttachmentChanges: eW
    }), [el, ep, eb, em, eq, ej, eO, eL, ez, eW]),
    e1 = r.useMemo(() => eJ || null == eY || "publish" === eY || null != eS ? null : (0, n.jsx)(g.oXn, {
      className: B.successNotice,
      children: (0, n.jsx)(p.Z, {
        message: (0, n.jsxs)("div", {
          className: B.successNoticeMessage,
          children: [(0, n.jsx)(g.owK, {
            size: "md",
            color: s.Z.BUTTON_POSITIVE_BACKGROUND,
            secondaryColor: s.Z.WHITE
          }), (0, n.jsx)(g.Text, {
            variant: "text-md/medium",
            children: "draft" === eY ? k.intl.string(k.t["3Rv4MD"]) : "update_publish" === eY ? k.intl.string(k.t["8fPiBw"]) : k.intl.string(k.t["3LUFnJ"])
          })]
        }),
        onReset: () => eH(true),
        onResetText: k.intl.string(k.t.T6QuWV)
      })
    }), [eS, eJ, eY]),
    e3 = r.useCallback(() => {
      eJ ? (0, Z.Z)({
        title: k.intl.string(k.t.FVDhIS),
        body: k.intl.string(k.t.Hgdhwc),
        cta: k.intl.string(k.t.h0bti4),
        closeLabel: k.intl.string(k.t["+WYo0t"]),
        onConfirm: () => {
          en()
        }
      }) : en()
    }, [en, eJ]);
  r.useEffect(() => {
    (0, g.oav)(w.Yz, e => (0, n.jsx)(ee, D({
      guildId: $,
      productId: er
    }, e)), e3)
  }, [$, e3, er]);
  let e9 = async e => {
    let t = (0, I.pM)({
      newRoleParams: eL
    });
    if (ey(t), null != t) return;
    let A = await eZ(e);
    if (eV(false), null != A) {
      if (null != e.name && eh(A.name), null != e.description && ev(A.description), null != eL) {
        let e = A.role_id;
        o()(null != e, "Cannot update role without role ID"), await f.Z.updateRole($, e, eL)
      }
      ek(true), ea(A.id), "published" in e && true === e.published && en()
    }
  };
  r.useEffect(() => {
    if (null != eS) {
      var e;
      (0, X.V)(eS, $, null == eo || null == (e = eo.team) ? true : e.id)
    }
  }, [eS, $, eo]), r.useEffect(() => {
    eJ && eH(true)
  }, [eJ]);
  let e6 = r.useRef(null);
  return (0, n.jsxs)(g.Y0X, {
    transitionState: eA,
    size: g.CgR.DYNAMIC,
    className: B.modalRoot,
    "aria-labelledby": G,
    parentComponent: "GuildProductEditModal",
    children: [(0, n.jsxs)(g.xBx, {
      className: B.modalHeader,
      separator: false,
      children: [(0, n.jsxs)("div", {
        className: B.headerText,
        children: [(0, n.jsx)(g.X6q, {
          id: G,
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: k.intl.string(k.t.DnNl1d)
        }), (0, n.jsx)(g.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: k.intl.string(k.t["Tu7f+f"])
        })]
      }), (0, n.jsx)(g.olH, {
        onClick: e3,
        className: B.__invalid_modalCloseButton
      })]
    }), (0, n.jsxs)(g.hzk, {
      className: B.modalContent,
      scrollbarType: "none",
      children: [(0, n.jsx)(g.zJl, {
        children: (0, n.jsxs)("div", {
          className: B.productFieldsSection,
          ref: e6,
          children: [(0, n.jsx)(g.xJW, {
            title: k.intl.string(k.t.Hsk7xc),
            tag: "label",
            htmlFor: Y,
            error: null == eS ? true : eS.getFirstFieldErrorMessage("name"),
            children: (0, n.jsx)(u.iS, {
              value: ep,
              onChange: eh,
              id: Y,
              maxLength: 100,
              placeholder: k.intl.string(k.t["/BiYSE"]),
              rows: 1,
              autosize: true,
              showCharacterCount: ep.length > 0,
              showRemainingCharacterCount: ep.length > 0,
              required: true,
              className: ep.length > 0 ? B.nameArea : true
            })
          }), (0, n.jsx)(g.xJW, {
            title: k.intl.string(k.t.QdKLyc),
            tag: "label",
            error: null == eS ? true : eS.getFirstFieldErrorMessage("description"),
            htmlFor: H,
            children: (0, n.jsx)(C.Z, {
              id: H,
              className: B.descriptionArea,
              value: em,
              onChange: ev,
              maxLength: 1500,
              placeholder: k.intl.string(k.t.BFwyur),
              showCharacterCount: em.length > 0,
              parentModalKey: w.Yz,
              required: true
            })
          }), (0, n.jsx)(g.xJW, {
            title: k.intl.string(k.t["CAY/vr"]),
            tag: "label",
            error: null == eS ? true : eS.getFirstFieldErrorMessage("price_tier"),
            children: (0, n.jsx)(_, {
              guildId: $,
              selectedPriceTier: eb,
              setPriceTier: eC
            })
          }), (0, n.jsxs)(g.xJW, {
            title: k.intl.string(k.t["sqXj6+"]),
            tag: "label",
            error: null == eS ? true : eS.getFirstFieldErrorMessage("image"),
            titleClassName: B.thumbnailLabel,
            children: [(0, n.jsx)(g.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: k.intl.string(k.t.yOU4Vl)
            }), (0, n.jsx)(g.LZC, {
              size: 10
            }), (0, n.jsx)(z.Z, {
              presetImages: F.M,
              radioGroupAriaLabel: k.intl.string(k.t.fKzQj4),
              image: eq,
              imageName: ej,
              savedImageName: null == el || null == (a = el.image_asset) ? true : a.filename,
              onChange: (e, t) => {
                if (null != e) {
                  var A;
                  ex(e), eU(t), eV(e.startsWith("data:") || t !== (null == el || null == (A = el.image_asset) ? true : A.filename))
                }
              }
            })]
          }), eI ? (0, n.jsx)(g.xJW, {
            title: k.intl.string(k.t.zLrtkJ),
            error: null == eS ? true : eS.getFirstFieldErrorMessage("attachments"),
            children: (0, n.jsx)(K.s, {
              onFileAdded: () => {
                var e;
                null == (e = e6.current) || e.scrollIntoView({
                  behavior: "smooth",
                  block: "end"
                })
              }
            })
          }) : null, eB ? (0, n.jsx)(Q.ZP, {
            error: null != (J = null == eS ? true : eS.getFirstFieldErrorMessage(I.NB)) ? J : true,
            newRoleParams: eL,
            setNewRoleParams: ek,
            guildId: $,
            listingRoleId: eR,
            productId: er
          }) : null]
        })
      }), (0, n.jsx)("div", {
        className: B.horizontalSeparator
      }), (0, n.jsx)(g.zJl, {
        children: (0, n.jsxs)("div", {
          className: B.productPreview,
          children: [(0, n.jsx)(S.Z, {
            disabled: !e0,
            disabledTooltip: ei ? k.intl.string(k.t["0NQ00t"]) : k.intl.string(k.t["Ax89/f"]),
            published: ei,
            onClick: () => {
              o()(e0, "Attempting to publish/unpublish when not allowed"), eH(ei ? "unpublish" : "publish"), e9(E(D({}, eM), {
                published: !ei
              }))
            },
            submitting: eQ
          }), (0, n.jsx)("div", {
            className: B.verticalSeparator
          }), (0, n.jsx)(g.X6q, {
            variant: "text-xs/bold",
            color: "header-secondary",
            className: B.previewHeading,
            children: k.intl.string(k.t["6I7nQU"])
          }), (0, n.jsx)(g.LZC, {
            size: 4
          }), (0, n.jsx)(g.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: k.intl.string(k.t.Oq4dfX)
          }), (0, n.jsx)(g.LZC, {
            size: 16
          }), (0, n.jsx)(T.Z, {
            imageUrl: eq,
            name: "" === ep ? k.intl.string(k.t.EmqIws) : ep,
            description: "" === em ? k.intl.string(k.t["11NA2N"]) : em,
            formattedPrice: eN,
            role: eD,
            productType: eE,
            ctaComponent: (0, n.jsx)(g.gtL, {
              shineSize: g.gtL.ShineSizes.SMALL,
              pauseAnimation: ec || !eu,
              className: B.productPreviewCtaButton,
              children: k.intl.string(k.t.xUi3BA)
            }),
            cardWidth: 340,
            thumbnailHeight: 190
          })]
        })
      })]
    }), (0, n.jsx)(g.mzw, {
      children: (0, n.jsxs)("div", {
        className: B.footerActionButtons,
        children: [(0, n.jsxs)("div", {
          className: B.footerActionLeftButtons,
          children: [(0, n.jsx)(M, {
            text: k.intl.string(k.t.YzGIVF),
            value: eB,
            onChange: e => {
              e ? ek((0, Q.YP)()) : ek(true)
            },
            warning: null === eL ? (0, n.jsx)(Q.aN, {}) : true,
            disabled: null != eR
          }), (0, n.jsx)(M, {
            text: k.intl.string(k.t.C6wP2d),
            value: eI,
            onChange: e => {
              e ? eF(true) : eW ? (0, g.ZDy)(async () => {
                let {
                  ConfirmModal: e
                } = await Promise.resolve().then(A.bind(A, 481060));
                return t => (0, n.jsx)(e, E(D({}, t), {
                  header: k.intl.string(k.t["2Wihyc"]),
                  confirmText: k.intl.string(k.t.N86XcH),
                  cancelText: k.intl.string(k.t["ETE/oK"]),
                  onConfirm: eG,
                  children: (0, n.jsx)(g.Text, {
                    variant: "text-md/normal",
                    children: k.intl.string(k.t.ixRBLi)
                  })
                }))
              }) : eG()
            },
            disabled: ez
          })]
        }), (0, n.jsx)("div", {
          className: B.footerActionRightButtons,
          children: ei ? (0, n.jsx)(g.zxk, {
            variant: "secondary",
            text: k.intl.string(k.t.XYBEaW),
            disabled: !e$,
            loading: ew,
            onClick: () => {
              o()(e$, "cannot save changes for published product without adding all fields"), eH("update_publish"), e9(eM)
            }
          }) : (0, n.jsx)(g.zxk, {
            variant: "secondary",
            text: k.intl.string(k.t.ZCjwoa),
            disabled: !e_,
            loading: ew,
            onClick: () => {
              o()(e_, "cannot save changes without name or price tier"), eH("draft"), e9(eM)
            }
          })
        })]
      })
    }), (0, n.jsx)(d.W, {
      component: "div",
      className: B.successNoticeContainer,
      children: e1
    })]
  })
}

function ee(e) {
  var t;
  return (0, n.jsx)(y.W, {
    guildId: e.guildId,
    editSkuId: null != (t = e.productId) ? t : true,
    onFileSizeError: () => (0, x.Z)(w.ve),
    children: (0, n.jsx)($, D({}, e))
  })
}