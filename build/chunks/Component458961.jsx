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
  o = require.n(Chunk512722),
  Chunk831209 = require("./831209.js"),
  Chunk399606 = require("./399606.js"),
  Chunk215569 = require("./215569.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk749210 = require("./749210.js"),
  Chunk852860 = require("./852860.jsx"),
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
      n = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), n.forEach(function(A) {
      var n;
      n = t[A], A in e ? Object.defineProperty(e, A, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[A] = n
    })
  }
  return e
}

function G(e, A) {
  return A = null != A ? A : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(A)) : (function(e, A) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t.push.apply(t, n)
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
    value: r,
    disabled: l,
    warning: i
  } = e, o = (0, b.Dt)(), s = l ? "text-muted" : "text-default";
  return (0, n.jsxs)("label", {
    className: a()(L.benefitToggleContainer, {
      [L.disabled]: l
    }),
    htmlFor: o,
    children: [(0, n.jsx)(f.Text, {
      variant: "text-sm/medium",
      color: s,
      children: A
    }), null != i && (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(f.LZC, {
        size: 4,
        horizontal: true
      }), i]
    }), (0, n.jsx)(f.LZC, {
      size: 16,
      horizontal: true
    }), (0, n.jsx)(f.rsf, {
      onChange: t,
      checked: r,
      disabled: l,
      id: o
    })]
  })
}

function M(e, A) {
  return e.filter(e => {
    let {
      value: t,
      label: n
    } = e;
    return t.toString().includes(A) || n.includes(A)
  })
}

function J(e) {
  let {
    guildId: A,
    selectedPriceTier: t,
    setPriceTier: l
  } = e, {
    priceTiers: a
  } = (0, q.R)(A, w.RG5.GUILD_PRODUCTS), i = r.useMemo(() => (null != a ? a : null != t ? [t] : []).map(e => ({
    value: e,
    label: (0, U.T4)(e, w.pKx.USD)
  })), [a, t]);
  return (0, n.jsx)(f.VcW, {
    value: t,
    placeholder: B.intl.string(B.t.aI4J5O),
    maxVisibleItems: 5,
    options: i,
    onChange: l,
    filter: M,
    "aria-required": true
  })
}

function _(e) {
  var A, l, a, i, b, q, v, M;
  let {
    guildId: _,
    productId: ee,
    transitionState: eA,
    onClose: et
  } = e, [en, er] = r.useState(ee), el = (0, d.e7)([F.Z], () => null == en ? null : F.Z.getGuildProduct(en), [en]), ea = (null == el ? true : el.published) === true, {
    application: ei
  } = (0, m.Z)(_, R.wW.GUILD_ROLE_SUBSCRIPTIONS), eo = y.M["0"], es = j.QK.useSetting(), ed = (0, O.n)(), ec = r.useCallback(() => {
    var e;
    return (null == el || null == (e = el.image_asset) ? true : e.application_id) == null ? eo.data : (0, V._W)(el.image_asset.application_id, el.image_asset, 600, ed && es ? true : "webp")
  }, [eo, el, ed, es]), {
    shouldRestrictUpdatingCreatorMonetizationSettings: eu
  } = (0, C.gX)(_);
  r.useEffect(() => {
    eu && (et(), (0, X.B)(B.intl.string(B.t.OLf3xs), B.t["90LBVl"]))
  }, [eu, et]);
  let [ef, eg] = r.useState(null != (a = null == el ? true : el.name) ? a : ""), [ep, em] = r.useState(null != (i = null == el ? true : el.description) ? i : ""), [eb, eq] = r.useState(null != (b = null == el ? true : el.price_tier) ? b : true), [eh, eC] = r.useState(ec), [ev, ej] = r.useState(null != (q = null == el || null == (A = el.image_asset) ? true : A.filename) ? q : eo.name), [ex, eU] = r.useState(false), [eV, eO] = r.useState(), eP = r.useMemo(() => null != eb ? (0, U.T4)(eb, w.pKx.USD) : true, [eb]), [eF, eI] = r.useState(true), {
    changesSaving: ey,
    saveError: eN,
    saveProductWithAttachments: eK,
    hasUnsavedAttachmentChanges: eT,
    cancelUnusedUploads: eX
  } = (0, P.P)(), eZ = (null == el ? true : el.attachments) != null && (null == el ? true : el.attachments.length) > 0, eW = null != eN ? eN : eV, eQ = null != ey && "published" in ey, ez = null != ey && !eQ, eS = null != (v = null == el ? true : el.role_id) ? v : null, [ew, eR] = r.useState(), eB = null != ew || null != eS, eL = (0, d.e7)([x.Z], () => null != eS && null !== ew ? x.Z.getRole(_, eS) : null != ew ? ew : true, [ew, eS, _]), ek = "";
  eB && eF ? ek = B.intl.string(B.t.ih4QMT) : eB ? ek = B.intl.string(B.t.o9xphY) : eF && (ek = B.intl.string(B.t.DWYJub));
  let eG = () => {
      eI(false), eX()
    },
    [eE, eY] = r.useState(),
    {
      changes: eD,
      hasUnsavedChanges: eH,
      canSaveForDraft: eM,
      canSaveForPublished: eJ,
      canPublishOrUnpublish: e_
    } = r.useMemo(() => (0, I.fG)({
      guildProductListing: el,
      name: ef,
      priceTier: eb,
      description: ep,
      image: eh,
      imageName: ev,
      isImageChanged: ex,
      newRoleParams: ew,
      hasSavedAttachments: eZ,
      hasUnsavedAttachmentChanges: eT
    }), [el, ef, eb, ep, eh, ev, ex, ew, eZ, eT]),
    e$ = r.useMemo(() => eH || null == eE || "publish" === eE || null != eW ? null : (0, n.jsx)(f.oXn, {
      className: L.successNotice,
      children: (0, n.jsx)(p.Z, {
        message: (0, n.jsxs)("div", {
          className: L.successNoticeMessage,
          children: [(0, n.jsx)(f.owK, {
            size: "md",
            color: s.Z.BUTTON_POSITIVE_BACKGROUND,
            secondaryColor: s.Z.WHITE
          }), (0, n.jsx)(f.Text, {
            variant: "text-md/medium",
            children: "draft" === eE ? B.intl.string(B.t["3Rv4MD"]) : "update_publish" === eE ? B.intl.string(B.t["8fPiBw"]) : B.intl.string(B.t["3LUFnJ"])
          })]
        }),
        onReset: () => eY(true),
        onResetText: B.intl.string(B.t.T6QuWV)
      })
    }), [eW, eH, eE]),
    e0 = r.useCallback(() => {
      eH ? (0, T.Z)({
        title: B.intl.string(B.t.FVDhIS),
        body: B.intl.string(B.t.Hgdhwc),
        cta: B.intl.string(B.t.h0bti4),
        closeLabel: B.intl.string(B.t["+WYo0t"]),
        onConfirm: () => {
          et()
        }
      }) : et()
    }, [et, eH]);
  r.useEffect(() => {
    (0, f.oav)(S.Yz, e => (0, n.jsx)($, k({
      guildId: _,
      productId: en
    }, e)), e0)
  }, [_, e0, en]);
  let e1 = async e => {
    let A = (0, I.pM)({
      newRoleParams: ew
    });
    if (eO(A), null != A) return;
    let t = await eK(e);
    if (eU(false), null != t) {
      if (null != e.name && eg(t.name), null != e.description && em(t.description), null != ew) {
        let e = t.role_id;
        o()(null != e, "Cannot update role without role ID"), await g.Z.updateRole(_, e, ew)
      }
      eR(true), er(t.id), "published" in e && true === e.published && et()
    }
  };
  r.useEffect(() => {
    if (null != eW) {
      var e;
      (0, Z.V)(eW, _, null == ei || null == (e = ei.team) ? true : e.id)
    }
  }, [eW, _, ei]), r.useEffect(() => {
    eH && eY(true)
  }, [eH]);
  let e3 = r.useRef(null);
  return (0, n.jsxs)(f.Y0X, {
    transitionState: eA,
    size: f.CgR.DYNAMIC,
    className: L.modalRoot,
    "aria-labelledby": E,
    parentComponent: "GuildProductEditModal",
    "data-migration-pending": true,
    children: [(0, n.jsxs)(f.xBx, {
      className: L.modalHeader,
      separator: false,
      "data-migration-pending": true,
      children: [(0, n.jsxs)("div", {
        className: L.headerText,
        children: [(0, n.jsx)(f.X6q, {
          id: E,
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: B.intl.string(B.t.DnNl1d)
        }), (0, n.jsx)(f.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: B.intl.string(B.t["Tu7f+f"])
        })]
      }), (0, n.jsx)(f.olH, {
        onClick: e0,
        className: L.__invalid_modalCloseButton,
        "data-migration-pending": true
      })]
    }), (0, n.jsxs)(f.hzk, {
      className: L.modalContent,
      scrollbarType: "none",
      "data-migration-pending": true,
      children: [(0, n.jsx)(f.zJl, {
        children: (0, n.jsxs)("div", {
          className: L.productFieldsSection,
          ref: e3,
          children: [(0, n.jsx)(f.xJW, {
            title: B.intl.string(B.t.Hsk7xc),
            tag: "label",
            htmlFor: Y,
            error: null == eW ? true : eW.getFirstFieldErrorMessage("name"),
            children: (0, n.jsx)(f.oil, {
              value: ef,
              onChange: eg,
              id: Y,
              maxLength: 100,
              placeholder: B.intl.string(B.t["/BiYSE"]),
              required: true
            })
          }), (0, n.jsx)(f.xJW, {
            title: B.intl.string(B.t.QdKLyc),
            tag: "label",
            error: null == eW ? true : eW.getFirstFieldErrorMessage("description"),
            htmlFor: D,
            children: (0, n.jsx)(h.Z, {
              id: D,
              className: L.descriptionArea,
              value: ep,
              onChange: em,
              maxLength: 1500,
              placeholder: B.intl.string(B.t.BFwyur),
              showCharacterCount: ep.length > 0,
              parentModalKey: S.Yz,
              required: true
            })
          }), (0, n.jsx)(f.xJW, {
            title: B.intl.string(B.t["CAY/vr"]),
            tag: "label",
            error: null == eW ? true : eW.getFirstFieldErrorMessage("price_tier"),
            children: (0, n.jsx)(J, {
              guildId: _,
              selectedPriceTier: eb,
              setPriceTier: eq
            })
          }), (0, n.jsxs)(f.xJW, {
            title: B.intl.string(B.t["sqXj6+"]),
            tag: "label",
            error: null == eW ? true : eW.getFirstFieldErrorMessage("image"),
            titleClassName: L.thumbnailLabel,
            children: [(0, n.jsx)(f.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: B.intl.string(B.t.yOU4Vl)
            }), (0, n.jsx)(f.LZC, {
              size: 10
            }), (0, n.jsx)(W.Z, {
              presetImages: y.M,
              radioGroupAriaLabel: B.intl.string(B.t.fKzQj4),
              image: eh,
              imageName: ev,
              savedImageName: null == el || null == (l = el.image_asset) ? true : l.filename,
              onChange: (e, A) => {
                if (null != e) {
                  var t;
                  eC(e), ej(A), eU(e.startsWith("data:") || A !== (null == el || null == (t = el.image_asset) ? true : t.filename))
                }
              }
            })]
          }), eF ? (0, n.jsx)(f.xJW, {
            title: B.intl.string(B.t.zLrtkJ),
            error: null == eW ? true : eW.getFirstFieldErrorMessage("attachments"),
            children: (0, n.jsx)(K.s, {
              onFileAdded: () => {
                var e;
                null == (e = e3.current) || e.scrollIntoView({
                  behavior: "smooth",
                  block: "end"
                })
              }
            })
          }) : null, eB ? (0, n.jsx)(z.ZP, {
            error: null != (M = null == eW ? true : eW.getFirstFieldErrorMessage(I.NB)) ? M : true,
            newRoleParams: ew,
            setNewRoleParams: eR,
            guildId: _,
            listingRoleId: eS,
            productId: en
          }) : null]
        })
      }), (0, n.jsx)("div", {
        className: L.horizontalSeparator
      }), (0, n.jsx)(f.zJl, {
        children: (0, n.jsxs)("div", {
          className: L.productPreview,
          children: [(0, n.jsx)(Q.Z, {
            disabled: !e_,
            disabledTooltip: ea ? B.intl.string(B.t["0NQ00t"]) : B.intl.string(B.t["Ax89/f"]),
            published: ea,
            onClick: () => {
              o()(e_, "Attempting to publish/unpublish when not allowed"), eY(ea ? "unpublish" : "publish"), e1(G(k({}, eD), {
                published: !ea
              }))
            },
            submitting: eQ
          }), (0, n.jsx)("div", {
            className: L.verticalSeparator
          }), (0, n.jsx)(f.X6q, {
            variant: "text-xs/bold",
            color: "header-secondary",
            className: L.previewHeading,
            children: B.intl.string(B.t["6I7nQU"])
          }), (0, n.jsx)(f.LZC, {
            size: 4
          }), (0, n.jsx)(f.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: B.intl.string(B.t.Oq4dfX)
          }), (0, n.jsx)(f.LZC, {
            size: 16
          }), (0, n.jsx)(N.Z, {
            imageUrl: eh,
            name: "" === ef ? B.intl.string(B.t.EmqIws) : ef,
            description: "" === ep ? B.intl.string(B.t["11NA2N"]) : ep,
            formattedPrice: eP,
            role: eL,
            productType: ek,
            ctaComponent: (0, n.jsx)(u.zx, {
              text: B.intl.string(B.t.xUi3BA)
            }),
            cardWidth: 340,
            thumbnailHeight: 190
          })]
        })
      })]
    }), (0, n.jsx)(f.mzw, {
      "data-migration-pending": true,
      children: (0, n.jsxs)("div", {
        className: L.footerActionButtons,
        children: [(0, n.jsxs)("div", {
          className: L.footerActionLeftButtons,
          children: [(0, n.jsx)(H, {
            text: B.intl.string(B.t.YzGIVF),
            value: eB,
            onChange: e => {
              e ? eR((0, z.YP)()) : eR(true)
            },
            warning: null === ew ? (0, n.jsx)(z.aN, {}) : true,
            disabled: null != eS
          }), (0, n.jsx)(H, {
            text: B.intl.string(B.t.C6wP2d),
            value: eF,
            onChange: e => {
              e ? eI(true) : eT ? (0, f.ZDy)(async () => {
                let {
                  ConfirmModal: e
                } = await Promise.resolve().then(t.bind(t, 481060));
                return A => (0, n.jsx)(e, G(k({}, A), {
                  header: B.intl.string(B.t["2Wihyc"]),
                  confirmText: B.intl.string(B.t.N86XcH),
                  cancelText: B.intl.string(B.t["ETE/oK"]),
                  onConfirm: eG,
                  children: (0, n.jsx)(f.Text, {
                    variant: "text-md/normal",
                    children: B.intl.string(B.t.ixRBLi)
                  })
                }))
              }) : eG()
            },
            disabled: eZ
          })]
        }), (0, n.jsx)("div", {
          className: L.footerActionRightButtons,
          children: ea ? (0, n.jsx)(u.zx, {
            variant: "secondary",
            text: B.intl.string(B.t.XYBEaW),
            disabled: !eJ,
            loading: ez,
            onClick: () => {
              o()(eJ, "cannot save changes for published product without adding all fields"), eY("update_publish"), e1(eD)
            }
          }) : (0, n.jsx)(u.zx, {
            variant: "secondary",
            text: B.intl.string(B.t.ZCjwoa),
            disabled: !eM,
            loading: ez,
            onClick: () => {
              o()(eM, "cannot save changes without name or price tier"), eY("draft"), e1(eD)
            }
          })
        })]
      })
    }), (0, n.jsx)(c.W, {
      component: "div",
      className: L.successNoticeContainer,
      children: e$
    })]
  })
}

function $(e) {
  var A;
  return (0, n.jsx)(P.W, {
    guildId: e.guildId,
    editSkuId: null != (A = e.productId) ? A : true,
    onFileSizeError: () => (0, v.Z)(S.ve),
    children: (0, n.jsx)(_, k({}, e))
  })
}