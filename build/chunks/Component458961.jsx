/** Chunk was on 73628 **/
/** chunk id: 458961, original params: e,A,t (module,exports,require) **/
require.d(exports, {
  default: () => $
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk831209 = require("./831209.js"),
  Chunk399606 = require("./399606.js"),
  Chunk215569 = require("./215569.js"),
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

function k(e) {
  for (var A = 1; A < arguments.length; A++) {
    var t = null != arguments[A] ? arguments[A] : {},
      r = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), r.forEach(function(A) {
      var r;
      r = t[A], A in e ? Object.defineProperty(e, A, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[A] = r
    })
  }
  return e
}

function G(e, A) {
  return A = null != A ? A : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(A)) : (function(e, A) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t.push.apply(t, r)
    }
    return t
  })(Object(A)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(A, t))
  }), e
}
let E = (0, Chunk313201.hQ)(),
  Y = (0, Chunk313201.hQ)(),
  D = (0, Chunk313201.hQ)();

function H(e) {
  let {
    text: A,
    onChange: t,
    value: n,
    disabled: l,
    warning: o
  } = e, i = (0, b.Dt)(), s = l ? "text-muted" : "text-default";
  return (0, r.jsxs)("label", {
    className: a()(L.benefitToggleContainer, {
      [L.disabled]: l
    }),
    htmlFor: i,
    children: [(0, r.jsx)(u.Text, {
      variant: "text-sm/medium",
      color: s,
      children: A
    }), null != o && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(u.LZC, {
        size: 4,
        horizontal: true
      }), o]
    }), (0, r.jsx)(u.LZC, {
      size: 16,
      horizontal: true
    }), (0, r.jsx)(u.rsf, {
      onChange: t,
      checked: n,
      disabled: l,
      id: i
    })]
  })
}

function M(e, A) {
  return e.filter(e => {
    let {
      value: t,
      label: r
    } = e;
    return t.toString().includes(A) || r.includes(A)
  })
}

function J(e) {
  let {
    guildId: A,
    selectedPriceTier: t,
    setPriceTier: l
  } = e, {
    priceTiers: a
  } = (0, q.R)(A, w.RG5.GUILD_PRODUCTS), o = n.useMemo(() => (null != a ? a : null != t ? [t] : []).map(e => ({
    value: e,
    label: (0, U.T4)(e, w.pKx.USD)
  })), [a, t]);
  return (0, r.jsx)(u.VcW, {
    value: t,
    placeholder: B.intl.string(B.t.aI4J5O),
    maxVisibleItems: 5,
    options: o,
    onChange: l,
    filter: M,
    "aria-required": true
  })
}

function _(e) {
  var A, l, a, o, b, q, v, M;
  let {
    guildId: _,
    productId: ee,
    transitionState: eA,
    onClose: et
  } = e, [er, en] = n.useState(ee), el = (0, d.e7)([F.Z], () => null == er ? null : F.Z.getGuildProduct(er), [er]), ea = (null == el ? true : el.published) === true, {
    application: eo
  } = (0, m.Z)(_, R.wW.GUILD_ROLE_SUBSCRIPTIONS), ei = y.M["0"], es = (0, d.e7)([p.Z], () => p.Z.useReducedMotion), ed = j.QK.useSetting(), ec = (0, P.n)(), eu = n.useCallback(() => {
    var e;
    return (null == el || null == (e = el.image_asset) ? true : e.application_id) == null ? ei.data : (0, V._W)(el.image_asset.application_id, el.image_asset, 600, ec && ed ? true : "webp")
  }, [ei, el, ec, ed]), {
    shouldRestrictUpdatingCreatorMonetizationSettings: ef
  } = (0, C.gX)(_);
  n.useEffect(() => {
    ef && (et(), (0, X.B)(B.intl.string(B.t.OLf3xs), B.t["90LBVl"]))
  }, [ef, et]);
  let [eg, ep] = n.useState(null != (a = null == el ? true : el.name) ? a : ""), [em, eb] = n.useState(null != (o = null == el ? true : el.description) ? o : ""), [eq, eh] = n.useState(null != (b = null == el ? true : el.price_tier) ? b : true), [eC, ev] = n.useState(eu), [ej, ex] = n.useState(null != (q = null == el || null == (A = el.image_asset) ? true : A.filename) ? q : ei.name), [eU, eV] = n.useState(false), [eP, eO] = n.useState(), eF = n.useMemo(() => null != eq ? (0, U.T4)(eq, w.pKx.USD) : true, [eq]), [eI, ey] = n.useState(true), {
    changesSaving: eN,
    saveError: eK,
    saveProductWithAttachments: eT,
    hasUnsavedAttachmentChanges: eX,
    cancelUnusedUploads: eZ
  } = (0, O.P)(), eW = (null == el ? true : el.attachments) != null && (null == el ? true : el.attachments.length) > 0, eQ = null != eK ? eK : eP, ez = null != eN && "published" in eN, eS = null != eN && !ez, ew = null != (v = null == el ? true : el.role_id) ? v : null, [eR, eB] = n.useState(), eL = null != eR || null != ew, ek = (0, d.e7)([x.Z], () => null != ew && null !== eR ? x.Z.getRole(_, ew) : null != eR ? eR : true, [eR, ew, _]), eG = "";
  eL && eI ? eG = B.intl.string(B.t.ih4QMT) : eL ? eG = B.intl.string(B.t.o9xphY) : eI && (eG = B.intl.string(B.t.DWYJub));
  let eE = () => {
      ey(false), eZ()
    },
    [eY, eD] = n.useState(),
    {
      changes: eH,
      hasUnsavedChanges: eM,
      canSaveForDraft: eJ,
      canSaveForPublished: e_,
      canPublishOrUnpublish: e$
    } = n.useMemo(() => (0, I.fG)({
      guildProductListing: el,
      name: eg,
      priceTier: eq,
      description: em,
      image: eC,
      imageName: ej,
      isImageChanged: eU,
      newRoleParams: eR,
      hasSavedAttachments: eW,
      hasUnsavedAttachmentChanges: eX
    }), [el, eg, eq, em, eC, ej, eU, eR, eW, eX]),
    e0 = n.useMemo(() => eM || null == eY || "publish" === eY || null != eQ ? null : (0, r.jsx)(u.oXn, {
      className: L.successNotice,
      children: (0, r.jsx)(g.Z, {
        message: (0, r.jsxs)("div", {
          className: L.successNoticeMessage,
          children: [(0, r.jsx)(u.owK, {
            size: "md",
            color: s.Z.BUTTON_POSITIVE_BACKGROUND,
            secondaryColor: s.Z.WHITE
          }), (0, r.jsx)(u.Text, {
            variant: "text-md/medium",
            children: "draft" === eY ? B.intl.string(B.t["3Rv4MD"]) : "update_publish" === eY ? B.intl.string(B.t["8fPiBw"]) : B.intl.string(B.t["3LUFnJ"])
          })]
        }),
        onReset: () => eD(true),
        onResetText: B.intl.string(B.t.T6QuWV)
      })
    }), [eQ, eM, eY]),
    e1 = n.useCallback(() => {
      eM ? (0, T.Z)({
        title: B.intl.string(B.t.FVDhIS),
        body: B.intl.string(B.t.Hgdhwc),
        cta: B.intl.string(B.t.h0bti4),
        closeLabel: B.intl.string(B.t["+WYo0t"]),
        onConfirm: () => {
          et()
        }
      }) : et()
    }, [et, eM]);
  n.useEffect(() => {
    (0, u.oav)(S.Yz, e => (0, r.jsx)($, k({
      guildId: _,
      productId: er
    }, e)), e1)
  }, [_, e1, er]);
  let e3 = async e => {
    let A = (0, I.pM)({
      newRoleParams: eR
    });
    if (eO(A), null != A) return;
    let t = await eT(e);
    if (eV(false), null != t) {
      if (null != e.name && ep(t.name), null != e.description && eb(t.description), null != eR) {
        let e = t.role_id;
        i()(null != e, "Cannot update role without role ID"), await f.Z.updateRole(_, e, eR)
      }
      eB(true), en(t.id), "published" in e && true === e.published && et()
    }
  };
  n.useEffect(() => {
    if (null != eQ) {
      var e;
      (0, Z.V)(eQ, _, null == eo || null == (e = eo.team) ? true : e.id)
    }
  }, [eQ, _, eo]), n.useEffect(() => {
    eM && eD(true)
  }, [eM]);
  let e9 = n.useRef(null);
  return (0, r.jsxs)(u.Y0X, {
    transitionState: eA,
    size: u.CgR.DYNAMIC,
    className: L.modalRoot,
    "aria-labelledby": E,
    parentComponent: "GuildProductEditModal",
    children: [(0, r.jsxs)(u.xBx, {
      className: L.modalHeader,
      separator: false,
      children: [(0, r.jsxs)("div", {
        className: L.headerText,
        children: [(0, r.jsx)(u.X6q, {
          id: E,
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: B.intl.string(B.t.DnNl1d)
        }), (0, r.jsx)(u.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: B.intl.string(B.t["Tu7f+f"])
        })]
      }), (0, r.jsx)(u.olH, {
        onClick: e1,
        className: L.__invalid_modalCloseButton
      })]
    }), (0, r.jsxs)(u.hzk, {
      className: L.modalContent,
      scrollbarType: "none",
      children: [(0, r.jsx)(u.zJl, {
        children: (0, r.jsxs)("div", {
          className: L.productFieldsSection,
          ref: e9,
          children: [(0, r.jsx)(u.xJW, {
            title: B.intl.string(B.t.Hsk7xc),
            tag: "label",
            htmlFor: Y,
            error: null == eQ ? true : eQ.getFirstFieldErrorMessage("name"),
            children: (0, r.jsx)(u.oil, {
              value: eg,
              onChange: ep,
              id: Y,
              maxLength: 100,
              placeholder: B.intl.string(B.t["/BiYSE"]),
              required: true
            })
          }), (0, r.jsx)(u.xJW, {
            title: B.intl.string(B.t.QdKLyc),
            tag: "label",
            error: null == eQ ? true : eQ.getFirstFieldErrorMessage("description"),
            htmlFor: D,
            children: (0, r.jsx)(h.Z, {
              id: D,
              className: L.descriptionArea,
              value: em,
              onChange: eb,
              maxLength: 1500,
              placeholder: B.intl.string(B.t.BFwyur),
              showCharacterCount: em.length > 0,
              parentModalKey: S.Yz,
              required: true
            })
          }), (0, r.jsx)(u.xJW, {
            title: B.intl.string(B.t["CAY/vr"]),
            tag: "label",
            error: null == eQ ? true : eQ.getFirstFieldErrorMessage("price_tier"),
            children: (0, r.jsx)(J, {
              guildId: _,
              selectedPriceTier: eq,
              setPriceTier: eh
            })
          }), (0, r.jsxs)(u.xJW, {
            title: B.intl.string(B.t["sqXj6+"]),
            tag: "label",
            error: null == eQ ? true : eQ.getFirstFieldErrorMessage("image"),
            titleClassName: L.thumbnailLabel,
            children: [(0, r.jsx)(u.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: B.intl.string(B.t.yOU4Vl)
            }), (0, r.jsx)(u.LZC, {
              size: 10
            }), (0, r.jsx)(W.Z, {
              presetImages: y.M,
              radioGroupAriaLabel: B.intl.string(B.t.fKzQj4),
              image: eC,
              imageName: ej,
              savedImageName: null == el || null == (l = el.image_asset) ? true : l.filename,
              onChange: (e, A) => {
                if (null != e) {
                  var t;
                  ev(e), ex(A), eV(e.startsWith("data:") || A !== (null == el || null == (t = el.image_asset) ? true : t.filename))
                }
              }
            })]
          }), eI ? (0, r.jsx)(u.xJW, {
            title: B.intl.string(B.t.zLrtkJ),
            error: null == eQ ? true : eQ.getFirstFieldErrorMessage("attachments"),
            children: (0, r.jsx)(K.s, {
              onFileAdded: () => {
                var e;
                null == (e = e9.current) || e.scrollIntoView({
                  behavior: "smooth",
                  block: "end"
                })
              }
            })
          }) : null, eL ? (0, r.jsx)(z.ZP, {
            error: null != (M = null == eQ ? true : eQ.getFirstFieldErrorMessage(I.NB)) ? M : true,
            newRoleParams: eR,
            setNewRoleParams: eB,
            guildId: _,
            listingRoleId: ew,
            productId: er
          }) : null]
        })
      }), (0, r.jsx)("div", {
        className: L.horizontalSeparator
      }), (0, r.jsx)(u.zJl, {
        children: (0, r.jsxs)("div", {
          className: L.productPreview,
          children: [(0, r.jsx)(Q.Z, {
            disabled: !e$,
            disabledTooltip: ea ? B.intl.string(B.t["0NQ00t"]) : B.intl.string(B.t["Ax89/f"]),
            published: ea,
            onClick: () => {
              i()(e$, "Attempting to publish/unpublish when not allowed"), eD(ea ? "unpublish" : "publish"), e3(G(k({}, eH), {
                published: !ea
              }))
            },
            submitting: ez
          }), (0, r.jsx)("div", {
            className: L.verticalSeparator
          }), (0, r.jsx)(u.X6q, {
            variant: "text-xs/bold",
            color: "header-secondary",
            className: L.previewHeading,
            children: B.intl.string(B.t["6I7nQU"])
          }), (0, r.jsx)(u.LZC, {
            size: 4
          }), (0, r.jsx)(u.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: B.intl.string(B.t.Oq4dfX)
          }), (0, r.jsx)(u.LZC, {
            size: 16
          }), (0, r.jsx)(N.Z, {
            imageUrl: eC,
            name: "" === eg ? B.intl.string(B.t.EmqIws) : eg,
            description: "" === em ? B.intl.string(B.t["11NA2N"]) : em,
            formattedPrice: eF,
            role: ek,
            productType: eG,
            ctaComponent: (0, r.jsx)(u.gtL, {
              shineSize: u.gtL.ShineSizes.SMALL,
              pauseAnimation: es || !ec,
              className: L.productPreviewCtaButton,
              children: B.intl.string(B.t.xUi3BA)
            }),
            cardWidth: 340,
            thumbnailHeight: 190
          })]
        })
      })]
    }), (0, r.jsx)(u.mzw, {
      children: (0, r.jsxs)("div", {
        className: L.footerActionButtons,
        children: [(0, r.jsxs)("div", {
          className: L.footerActionLeftButtons,
          children: [(0, r.jsx)(H, {
            text: B.intl.string(B.t.YzGIVF),
            value: eL,
            onChange: e => {
              e ? eB((0, z.YP)()) : eB(true)
            },
            warning: null === eR ? (0, r.jsx)(z.aN, {}) : true,
            disabled: null != ew
          }), (0, r.jsx)(H, {
            text: B.intl.string(B.t.C6wP2d),
            value: eI,
            onChange: e => {
              e ? ey(true) : eX ? (0, u.ZDy)(async () => {
                let {
                  ConfirmModal: e
                } = await Promise.resolve().then(t.bind(t, 481060));
                return A => (0, r.jsx)(e, G(k({}, A), {
                  header: B.intl.string(B.t["2Wihyc"]),
                  confirmText: B.intl.string(B.t.N86XcH),
                  cancelText: B.intl.string(B.t["ETE/oK"]),
                  onConfirm: eE,
                  children: (0, r.jsx)(u.Text, {
                    variant: "text-md/normal",
                    children: B.intl.string(B.t.ixRBLi)
                  })
                }))
              }) : eE()
            },
            disabled: eW
          })]
        }), (0, r.jsx)("div", {
          className: L.footerActionRightButtons,
          children: ea ? (0, r.jsx)(u.zxk, {
            variant: "secondary",
            text: B.intl.string(B.t.XYBEaW),
            disabled: !e_,
            loading: eS,
            onClick: () => {
              i()(e_, "cannot save changes for published product without adding all fields"), eD("update_publish"), e3(eH)
            }
          }) : (0, r.jsx)(u.zxk, {
            variant: "secondary",
            text: B.intl.string(B.t.ZCjwoa),
            disabled: !eJ,
            loading: eS,
            onClick: () => {
              i()(eJ, "cannot save changes without name or price tier"), eD("draft"), e3(eH)
            }
          })
        })]
      })
    }), (0, r.jsx)(c.W, {
      component: "div",
      className: L.successNoticeContainer,
      children: e0
    })]
  })
}

function $(e) {
  var A;
  return (0, r.jsx)(O.W, {
    guildId: e.guildId,
    editSkuId: null != (A = e.productId) ? A : true,
    onFileSizeError: () => (0, v.Z)(S.ve),
    children: (0, r.jsx)(_, k({}, e))
  })
}