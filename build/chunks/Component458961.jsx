/** Chunk was on 73628 **/
/** chunk id: 458961, original params: e,t,A (module,exports,require) **/
require.d(exports, {
  default: () => ee
}), require("./388685.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
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

function G(e) {
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
let Y = (0, Chunk313201.hQ)(),
  D = (0, Chunk313201.hQ)(),
  H = (0, Chunk313201.hQ)();

function M(e) {
  let {
    text: t,
    onChange: A,
    value: r,
    disabled: l,
    warning: o
  } = e, i = (0, C.Dt)(), s = l ? "text-muted" : "text-default";
  return (0, n.jsxs)("label", {
    className: a()(k.benefitToggleContainer, {
      [k.disabled]: l
    }),
    htmlFor: i,
    children: [(0, n.jsx)(f.Text, {
      variant: "text-sm/medium",
      color: s,
      children: t
    }), null != o && (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(f.LZC, {
        size: 4,
        horizontal: true
      }), o]
    }), (0, n.jsx)(f.LZC, {
      size: 16,
      horizontal: true
    }), (0, n.jsx)(f.rsf, {
      onChange: A,
      checked: r,
      disabled: l,
      id: i
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
    setPriceTier: l
  } = e, {
    priceTiers: a
  } = (0, q.R)(t, w.RG5.GUILD_PRODUCTS), o = r.useMemo(() => (null != a ? a : null != A ? [A] : []).map(e => ({
    value: e,
    label: (0, V.T4)(e, w.pKx.USD)
  })), [a, A]);
  return (0, n.jsx)(f.VcW, {
    value: A,
    placeholder: L.intl.string(L.t.aI4J5O),
    maxVisibleItems: 5,
    options: o,
    onChange: l,
    filter: J,
    "aria-required": true
  })
}

function $(e) {
  var t, l, a, o, C, q, x, J;
  let {
    guildId: $,
    productId: et,
    transitionState: eA,
    onClose: en
  } = e, [er, el] = r.useState(et), ea = (0, d.e7)([N.Z], () => null == er ? null : N.Z.getGuildProduct(er), [er]), eo = (null == ea ? true : ea.published) === true, {
    application: ei
  } = (0, h.Z)($, B.wW.GUILD_ROLE_SUBSCRIPTIONS), es = y.M["0"], ed = (0, d.e7)([m.Z], () => m.Z.useReducedMotion), ec = j.QK.useSetting(), eu = (0, O.n)(), ef = r.useCallback(() => {
    var e;
    return (null == ea || null == (e = ea.image_asset) ? true : e.application_id) == null ? es.data : (0, P._W)(ea.image_asset.application_id, ea.image_asset, 600, eu && ec ? true : "webp")
  }, [es, ea, eu, ec]), {
    shouldRestrictUpdatingCreatorMonetizationSettings: eg
  } = (0, v.gX)($);
  r.useEffect(() => {
    eg && (en(), (0, X.B)(L.intl.string(L.t.OLf3xs), L.t["90LBVl"]))
  }, [eg, en]);
  let [ep, em] = r.useState(null != (a = null == ea ? true : ea.name) ? a : ""), [eh, eC] = r.useState(null != (o = null == ea ? true : ea.description) ? o : ""), [eq, eb] = r.useState(null != (C = null == ea ? true : ea.price_tier) ? C : true), [ev, ex] = r.useState(ef), [ej, eU] = r.useState(null != (q = null == ea || null == (t = ea.image_asset) ? true : t.filename) ? q : es.name), [eV, eP] = r.useState(false), [eO, eI] = r.useState(), eN = r.useMemo(() => null != eq ? (0, V.T4)(eq, w.pKx.USD) : true, [eq]), [eF, ey] = r.useState(true), {
    changesSaving: eK,
    saveError: eT,
    saveProductWithAttachments: eZ,
    hasUnsavedAttachmentChanges: eX,
    cancelUnusedUploads: eW
  } = (0, I.P)(), ez = (null == ea ? true : ea.attachments) != null && (null == ea ? true : ea.attachments.length) > 0, eQ = null != eT ? eT : eO, eS = null != eK && "published" in eK, eR = null != eK && !eS, ew = null != (x = null == ea ? true : ea.role_id) ? x : null, [eB, eL] = r.useState(), ek = null != eB || null != ew, eG = (0, d.e7)([U.Z], () => null != ew && null !== eB ? U.Z.getRole($, ew) : null != eB ? eB : true, [eB, ew, $]), eE = "";
  ek && eF ? eE = L.intl.string(L.t.ih4QMT) : ek ? eE = L.intl.string(L.t.o9xphY) : eF && (eE = L.intl.string(L.t.DWYJub));
  let eY = () => {
      ey(false), eW()
    },
    [eD, eH] = r.useState(),
    {
      changes: eM,
      hasUnsavedChanges: eJ,
      canSaveForDraft: e_,
      canSaveForPublished: e$,
      canPublishOrUnpublish: e0
    } = r.useMemo(() => (0, F.fG)({
      guildProductListing: ea,
      name: ep,
      priceTier: eq,
      description: eh,
      image: ev,
      imageName: ej,
      isImageChanged: eV,
      newRoleParams: eB,
      hasSavedAttachments: ez,
      hasUnsavedAttachmentChanges: eX
    }), [ea, ep, eq, eh, ev, ej, eV, eB, ez, eX]),
    e1 = r.useMemo(() => eJ || null == eD || "publish" === eD || null != eQ ? null : (0, n.jsx)(f.oXn, {
      className: k.successNotice,
      children: (0, n.jsx)(p.Z, {
        message: (0, n.jsxs)("div", {
          className: k.successNoticeMessage,
          children: [(0, n.jsx)(f.owK, {
            size: "md",
            color: s.Z.BUTTON_POSITIVE_BACKGROUND,
            secondaryColor: s.Z.WHITE
          }), (0, n.jsx)(f.Text, {
            variant: "text-md/medium",
            children: "draft" === eD ? L.intl.string(L.t["3Rv4MD"]) : "update_publish" === eD ? L.intl.string(L.t["8fPiBw"]) : L.intl.string(L.t["3LUFnJ"])
          })]
        }),
        onReset: () => eH(true),
        onResetText: L.intl.string(L.t.T6QuWV)
      })
    }), [eQ, eJ, eD]),
    e3 = r.useCallback(() => {
      eJ ? (0, Z.Z)({
        title: L.intl.string(L.t.FVDhIS),
        body: L.intl.string(L.t.Hgdhwc),
        cta: L.intl.string(L.t.h0bti4),
        closeLabel: L.intl.string(L.t["+WYo0t"]),
        onConfirm: () => {
          en()
        }
      }) : en()
    }, [en, eJ]);
  r.useEffect(() => {
    (0, f.oav)(R.Yz, e => (0, n.jsx)(ee, G({
      guildId: $,
      productId: er
    }, e)), e3)
  }, [$, e3, er]);
  let e6 = async e => {
    let t = (0, F.pM)({
      newRoleParams: eB
    });
    if (eI(t), null != t) return;
    let A = await eZ(e);
    if (eP(false), null != A) {
      if (null != e.name && em(A.name), null != e.description && eC(A.description), null != eB) {
        let e = A.role_id;
        i()(null != e, "Cannot update role without role ID"), await g.Z.updateRole($, e, eB)
      }
      eL(true), el(A.id), "published" in e && true === e.published && en()
    }
  };
  r.useEffect(() => {
    if (null != eQ) {
      var e;
      (0, W.V)(eQ, $, null == ei || null == (e = ei.team) ? true : e.id)
    }
  }, [eQ, $, ei]), r.useEffect(() => {
    eJ && eH(true)
  }, [eJ]);
  let e9 = r.useRef(null);
  return (0, n.jsxs)(f.Y0X, {
    transitionState: eA,
    size: f.CgR.DYNAMIC,
    className: k.modalRoot,
    "aria-labelledby": Y,
    parentComponent: "GuildProductEditModal",
    children: [(0, n.jsxs)(f.xBx, {
      className: k.modalHeader,
      separator: false,
      children: [(0, n.jsxs)("div", {
        className: k.headerText,
        children: [(0, n.jsx)(f.X6q, {
          id: Y,
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: L.intl.string(L.t.DnNl1d)
        }), (0, n.jsx)(f.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: L.intl.string(L.t["Tu7f+f"])
        })]
      }), (0, n.jsx)(f.olH, {
        onClick: e3,
        className: k.__invalid_modalCloseButton
      })]
    }), (0, n.jsxs)(f.hzk, {
      className: k.modalContent,
      scrollbarType: "none",
      children: [(0, n.jsx)(f.zJl, {
        children: (0, n.jsxs)("div", {
          className: k.productFieldsSection,
          ref: e9,
          children: [(0, n.jsx)(f.xJW, {
            title: L.intl.string(L.t.Hsk7xc),
            tag: "label",
            htmlFor: D,
            error: null == eQ ? true : eQ.getFirstFieldErrorMessage("name"),
            children: (0, n.jsx)(u.iS, {
              value: ep,
              onChange: em,
              id: D,
              maxLength: 100,
              placeholder: L.intl.string(L.t["/BiYSE"]),
              rows: 1,
              autosize: true,
              showCharacterCount: ep.length > 0,
              showRemainingCharacterCount: ep.length > 0,
              required: true,
              className: ep.length > 0 ? k.nameArea : true
            })
          }), (0, n.jsx)(f.xJW, {
            title: L.intl.string(L.t.QdKLyc),
            tag: "label",
            error: null == eQ ? true : eQ.getFirstFieldErrorMessage("description"),
            htmlFor: H,
            children: (0, n.jsx)(b.Z, {
              id: H,
              className: k.descriptionArea,
              value: eh,
              onChange: eC,
              maxLength: 1500,
              placeholder: L.intl.string(L.t.BFwyur),
              showCharacterCount: eh.length > 0,
              parentModalKey: R.Yz,
              required: true
            })
          }), (0, n.jsx)(f.xJW, {
            title: L.intl.string(L.t["CAY/vr"]),
            tag: "label",
            error: null == eQ ? true : eQ.getFirstFieldErrorMessage("price_tier"),
            children: (0, n.jsx)(_, {
              guildId: $,
              selectedPriceTier: eq,
              setPriceTier: eb
            })
          }), (0, n.jsxs)(f.xJW, {
            title: L.intl.string(L.t["sqXj6+"]),
            tag: "label",
            error: null == eQ ? true : eQ.getFirstFieldErrorMessage("image"),
            titleClassName: k.thumbnailLabel,
            children: [(0, n.jsx)(f.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: L.intl.string(L.t.yOU4Vl)
            }), (0, n.jsx)(f.LZC, {
              size: 10
            }), (0, n.jsx)(z.Z, {
              presetImages: y.M,
              radioGroupAriaLabel: L.intl.string(L.t.fKzQj4),
              image: ev,
              imageName: ej,
              savedImageName: null == ea || null == (l = ea.image_asset) ? true : l.filename,
              onChange: (e, t) => {
                if (null != e) {
                  var A;
                  ex(e), eU(t), eP(e.startsWith("data:") || t !== (null == ea || null == (A = ea.image_asset) ? true : A.filename))
                }
              }
            })]
          }), eF ? (0, n.jsx)(f.xJW, {
            title: L.intl.string(L.t.zLrtkJ),
            error: null == eQ ? true : eQ.getFirstFieldErrorMessage("attachments"),
            children: (0, n.jsx)(T.s, {
              onFileAdded: () => {
                var e;
                null == (e = e9.current) || e.scrollIntoView({
                  behavior: "smooth",
                  block: "end"
                })
              }
            })
          }) : null, ek ? (0, n.jsx)(S.ZP, {
            error: null != (J = null == eQ ? true : eQ.getFirstFieldErrorMessage(F.NB)) ? J : true,
            newRoleParams: eB,
            setNewRoleParams: eL,
            guildId: $,
            listingRoleId: ew,
            productId: er
          }) : null]
        })
      }), (0, n.jsx)("div", {
        className: k.horizontalSeparator
      }), (0, n.jsx)(f.zJl, {
        children: (0, n.jsxs)("div", {
          className: k.productPreview,
          children: [(0, n.jsx)(Q.Z, {
            disabled: !e0,
            disabledTooltip: eo ? L.intl.string(L.t["0NQ00t"]) : L.intl.string(L.t["Ax89/f"]),
            published: eo,
            onClick: () => {
              i()(e0, "Attempting to publish/unpublish when not allowed"), eH(eo ? "unpublish" : "publish"), e6(E(G({}, eM), {
                published: !eo
              }))
            },
            submitting: eS
          }), (0, n.jsx)("div", {
            className: k.verticalSeparator
          }), (0, n.jsx)(f.X6q, {
            variant: "text-xs/bold",
            color: "header-secondary",
            className: k.previewHeading,
            children: L.intl.string(L.t["6I7nQU"])
          }), (0, n.jsx)(f.LZC, {
            size: 4
          }), (0, n.jsx)(f.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: L.intl.string(L.t.Oq4dfX)
          }), (0, n.jsx)(f.LZC, {
            size: 16
          }), (0, n.jsx)(K.Z, {
            imageUrl: ev,
            name: "" === ep ? L.intl.string(L.t.EmqIws) : ep,
            description: "" === eh ? L.intl.string(L.t["11NA2N"]) : eh,
            formattedPrice: eN,
            role: eG,
            productType: eE,
            ctaComponent: (0, n.jsx)(f.gtL, {
              shineSize: f.gtL.ShineSizes.SMALL,
              pauseAnimation: ed || !eu,
              className: k.productPreviewCtaButton,
              children: L.intl.string(L.t.xUi3BA)
            }),
            cardWidth: 340,
            thumbnailHeight: 190
          })]
        })
      })]
    }), (0, n.jsx)(f.mzw, {
      children: (0, n.jsxs)("div", {
        className: k.footerActionButtons,
        children: [(0, n.jsxs)("div", {
          className: k.footerActionLeftButtons,
          children: [(0, n.jsx)(M, {
            text: L.intl.string(L.t.YzGIVF),
            value: ek,
            onChange: e => {
              e ? eL((0, S.YP)()) : eL(true)
            },
            warning: null === eB ? (0, n.jsx)(S.aN, {}) : true,
            disabled: null != ew
          }), (0, n.jsx)(M, {
            text: L.intl.string(L.t.C6wP2d),
            value: eF,
            onChange: e => {
              e ? ey(true) : eX ? (0, f.ZDy)(async () => {
                let {
                  ConfirmModal: e
                } = await Promise.resolve().then(A.bind(A, 481060));
                return t => (0, n.jsx)(e, E(G({}, t), {
                  header: L.intl.string(L.t["2Wihyc"]),
                  confirmText: L.intl.string(L.t.N86XcH),
                  cancelText: L.intl.string(L.t["ETE/oK"]),
                  onConfirm: eY,
                  children: (0, n.jsx)(f.Text, {
                    variant: "text-md/normal",
                    children: L.intl.string(L.t.ixRBLi)
                  })
                }))
              }) : eY()
            },
            disabled: ez
          })]
        }), (0, n.jsx)("div", {
          className: k.footerActionRightButtons,
          children: eo ? (0, n.jsx)(f.zxk, {
            variant: "secondary",
            text: L.intl.string(L.t.XYBEaW),
            disabled: !e$,
            loading: eR,
            onClick: () => {
              i()(e$, "cannot save changes for published product without adding all fields"), eH("update_publish"), e6(eM)
            }
          }) : (0, n.jsx)(f.zxk, {
            variant: "secondary",
            text: L.intl.string(L.t.ZCjwoa),
            disabled: !e_,
            loading: eR,
            onClick: () => {
              i()(e_, "cannot save changes without name or price tier"), eH("draft"), e6(eM)
            }
          })
        })]
      })
    }), (0, n.jsx)(c.W, {
      component: "div",
      className: k.successNoticeContainer,
      children: e1
    })]
  })
}

function ee(e) {
  var t;
  return (0, n.jsx)(I.W, {
    guildId: e.guildId,
    editSkuId: null != (t = e.productId) ? t : true,
    onFileSizeError: () => (0, x.Z)(R.ve),
    children: (0, n.jsx)($, G({}, e))
  })
}