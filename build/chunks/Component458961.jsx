/** Chunk was on 73628 **/
/** chunk id: 458961, original params: e,t,A (module,exports,require) **/
require.d(exports, {
  default: () => et
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
  Chunk886025 = require("./886025.jsx"),
  Chunk159691 = require("./159691.js"),
  Chunk755721 = require("./755721.js"),
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

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var A = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(A);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(A).filter(function(e) {
      return Object.getOwnPropertyDescriptor(A, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = A[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function G(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var A = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      A.push.apply(A, r)
    }
    return A
  })(Object(t)).forEach(function(A) {
    Object.defineProperty(e, A, Object.getOwnPropertyDescriptor(t, A))
  }), e
}
let Y = (0, Chunk313201.hQ)(),
  H = (0, Chunk313201.hQ)(),
  M = (0, Chunk313201.hQ)();

function J(e) {
  let {
    text: t,
    onChange: A,
    value: n,
    disabled: a,
    warning: i
  } = e, o = (0, q.Dt)(), s = a ? "text-muted" : "text-default";
  return (0, r.jsxs)("label", {
    className: l()(B.benefitToggleContainer, {
      [B.disabled]: a
    }),
    htmlFor: o,
    children: [(0, r.jsx)(p.Text, {
      variant: "text-sm/medium",
      color: s,
      children: t
    }), null != i && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(p.LZC, {
        size: 4,
        horizontal: true
      }), i]
    }), (0, r.jsx)(p.LZC, {
      size: 16,
      horizontal: true
    }), (0, r.jsx)(f.T2, {
      onChange: A,
      checked: n,
      disabled: a,
      id: o
    })]
  })
}

function _(e, t) {
  return e.filter(e => {
    let {
      value: A,
      label: r
    } = e;
    return A.toString().includes(t) || r.includes(t)
  })
}

function $(e) {
  let {
    guildId: t,
    selectedPriceTier: A,
    setPriceTier: a,
    label: l,
    errorMessage: i
  } = e, {
    priceTiers: o
  } = (0, b.R)(t, L.RG5.GUILD_PRODUCTS), s = n.useMemo(() => (null != o ? o : null != A ? [A] : []).map(e => ({
    value: e,
    label: (0, O.T4)(e, L.pKx.USD)
  })), [o, A]);
  return (0, r.jsx)(p.VcW, {
    label: l,
    errorMessage: i,
    value: A,
    placeholder: D.intl.string(D.t.aI4J5O),
    maxVisibleItems: 5,
    options: s,
    onChange: a,
    filter: _,
    "aria-required": true
  })
}

function ee(e) {
  var t, a, l, i, f, q, b, x, _, ee, eA, er;
  let {
    guildId: en,
    productId: ea,
    transitionState: el,
    onClose: ei
  } = e, [eo, es] = n.useState(ea), ed = (0, d.e7)([I.Z], () => null == eo ? null : I.Z.getGuildProduct(eo), [eo]), ec = (0, d.e7)([I.Z], () => I.Z.getGuildProductsForGuild(en, {
    publishedOnly: true
  }).length, [en]), eu = (null == ed ? true : ed.published) === true, {
    application: eg
  } = (0, v.Z)(en, k.wW.GUILD_ROLE_SUBSCRIPTIONS), ef = T.M["0"], ep = U.QK.useSetting(), em = (0, F.n)(), eh = n.useCallback(() => {
    var e;
    return (null == ed || null == (e = ed.image_asset) ? true : e.application_id) == null ? ef.data : (0, P._W)(ed.image_asset.application_id, ed.image_asset, 600, em && ep ? true : "webp")
  }, [ef, ed, em, ep]), {
    shouldRestrictUpdatingCreatorMonetizationSettings: ev
  } = (0, j.gX)(en);
  n.useEffect(() => {
    ev && (ei(), (0, X.B)(D.intl.string(D.t.OLf3xs), D.t["90LBVl"]))
  }, [ev, ei]);
  let [eq, eb] = n.useState(null != (l = null == ed ? true : ed.name) ? l : ""), [eC, ej] = n.useState(null != (i = null == ed ? true : ed.description) ? i : ""), [ex, eU] = n.useState(null != (f = null == ed ? true : ed.price_tier) ? f : true), [eV, eO] = n.useState(eh), [eP, eF] = n.useState(null != (q = null == ed || null == (t = ed.image_asset) ? true : t.filename) ? q : ef.name), [ey, eI] = n.useState(false), [eN, eT] = n.useState(), eK = n.useMemo(() => null != ex ? (0, O.T4)(ex, L.pKx.USD) : true, [ex]), [eZ, eW] = n.useState(true), {
    changesSaving: eX,
    saveError: eQ,
    saveProductWithAttachments: ez,
    hasUnsavedAttachmentChanges: eS,
    cancelUnusedUploads: ew
  } = (0, y.P)(), eR = (null == ed ? true : ed.attachments) != null && (null == ed ? true : ed.attachments.length) > 0, eL = null != eQ ? eQ : eN, ek = null != eX && "published" in eX, eD = null != eX && !ek, eB = null != (b = null == ed ? true : ed.role_id) ? b : null, [eE, eG] = n.useState(), eY = null != eE || null != eB, eH = (0, d.e7)([V.Z], () => null != eB && null !== eE ? V.Z.getRole(en, eB) : null != eE ? eE : true, [eE, eB, en]), eM = "";
  eY && eZ ? eM = D.intl.string(D.t.ih4QMT) : eY ? eM = D.intl.string(D.t.o9xphY) : eZ && (eM = D.intl.string(D.t.DWYJub));
  let eJ = () => {
      eW(false), ew()
    },
    [e_, e$] = n.useState(),
    {
      changes: e0,
      hasUnsavedChanges: e1,
      canSaveForDraft: e3,
      canSaveForPublished: e9,
      canPublishOrUnpublish: e6
    } = n.useMemo(() => (0, N.fG)({
      guildProductListing: ed,
      name: eq,
      priceTier: ex,
      description: eC,
      image: eV,
      imageName: eP,
      isImageChanged: ey,
      newRoleParams: eE,
      hasSavedAttachments: eR,
      hasUnsavedAttachmentChanges: eS
    }), [ed, eq, ex, eC, eV, eP, ey, eE, eR, eS]),
    e7 = n.useMemo(() => e1 || null == e_ || "publish" === e_ || null != eL ? null : (0, r.jsx)(p.oXn, {
      className: B.successNotice,
      children: (0, r.jsx)(h.Z, {
        message: (0, r.jsxs)("div", {
          className: B.successNoticeMessage,
          children: [(0, r.jsx)(p.owK, {
            size: "md",
            color: s.Z.BUTTON_POSITIVE_BACKGROUND,
            secondaryColor: s.Z.WHITE
          }), (0, r.jsx)(p.Text, {
            variant: "text-md/medium",
            children: "draft" === e_ ? D.intl.string(D.t["3Rv4MD"]) : "update_publish" === e_ ? D.intl.string(D.t["8fPiBw"]) : D.intl.string(D.t["3LUFnJ"])
          })]
        }),
        onReset: () => e$(true),
        onResetText: D.intl.string(D.t.T6QuWV)
      })
    }), [eL, e1, e_]),
    e8 = n.useCallback(() => {
      e1 ? (0, W.Z)({
        title: D.intl.string(D.t.FVDhIS),
        body: D.intl.string(D.t.Hgdhwc),
        cta: D.intl.string(D.t.h0bti4),
        closeLabel: D.intl.string(D.t["+WYo0t"]),
        onConfirm: () => {
          ei()
        }
      }) : ei()
    }, [ei, e1]);
  n.useEffect(() => {
    (0, p.oav)(R.Yz, e => (0, r.jsx)(et, E({
      guildId: en,
      productId: eo
    }, e)), e8)
  }, [en, e8, eo]);
  let e2 = async e => {
    let t = (0, N.pM)({
      newRoleParams: eE
    });
    if (eT(t), null != t) return;
    let A = await ez(e);
    if (eI(false), null != A) {
      if (null != e.name && eb(A.name), null != e.description && ej(A.description), null != eE) {
        let e = A.role_id;
        o()(null != e, "Cannot update role without role ID"), await m.Z.updateRole(en, e, eE)
      }
      eG(true), es(A.id), "published" in e && true === e.published && ei()
    }
  };
  n.useEffect(() => {
    if (null != eL) {
      var e;
      (0, Q.V)(eL, en, null == eg || null == (e = eg.team) ? true : e.id)
    }
  }, [eL, en, eg]), n.useEffect(() => {
    e1 && e$(true)
  }, [e1]);
  let e5 = n.useRef(null),
    e4 = !e6 || !eu && ec >= R.dD;
  return (0, r.jsxs)(p.Y0X, {
    transitionState: el,
    size: p.CgR.DYNAMIC,
    className: B.modalRoot,
    "aria-labelledby": Y,
    parentComponent: "GuildProductEditModal",
    "data-migration-pending": true,
    children: [(0, r.jsxs)(p.xBx, {
      className: B.modalHeader,
      separator: false,
      "data-migration-pending": true,
      children: [(0, r.jsxs)("div", {
        className: B.headerText,
        children: [(0, r.jsx)(p.X6q, {
          id: Y,
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: D.intl.string(D.t.DnNl1d)
        }), (0, r.jsx)(p.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: D.intl.string(D.t["Tu7f+f"])
        })]
      }), (0, r.jsx)(p.olH, {
        onClick: e8,
        className: B.__invalid_modalCloseButton,
        "data-migration-pending": true
      })]
    }), (0, r.jsxs)(p.hzk, {
      className: B.modalContent,
      scrollbarType: "none",
      "data-migration-pending": true,
      children: [(0, r.jsx)(p.zJl, {
        children: (0, r.jsxs)("div", {
          className: B.productFieldsSection,
          ref: e5,
          children: [(0, r.jsx)(p.oil, {
            label: D.intl.string(D.t.Hsk7xc),
            error: null == eL ? true : eL.getFirstFieldErrorMessage("name"),
            value: eq,
            onChange: eb,
            id: H,
            maxLength: 100,
            placeholder: D.intl.string(D.t["/BiYSE"]),
            required: true
          }), (0, r.jsx)(C.Z, {
            label: D.intl.string(D.t.QdKLyc),
            errorMessage: null != (x = null == eL ? true : eL.getFirstFieldErrorMessage("description")) ? x : true,
            id: M,
            className: B.descriptionArea,
            value: eC,
            onChange: ej,
            maxLength: 1500,
            placeholder: D.intl.string(D.t.BFwyur),
            showCharacterCount: eC.length > 0,
            parentModalKey: R.Yz,
            required: true
          }), (0, r.jsx)($, {
            label: D.intl.string(D.t["CAY/vr"]),
            errorMessage: null != (_ = null == eL ? true : eL.getFirstFieldErrorMessage("price_tier")) ? _ : true,
            guildId: en,
            selectedPriceTier: ex,
            setPriceTier: eU
          }), (0, r.jsx)(u.N, {
            label: D.intl.string(D.t["sqXj6+"]),
            errorMessage: null != (ee = null == eL ? true : eL.getFirstFieldErrorMessage("image")) ? ee : true,
            description: D.intl.string(D.t.yOU4Vl),
            children: (0, r.jsx)(z.Z, {
              presetImages: T.M,
              radioGroupAriaLabel: D.intl.string(D.t.fKzQj4),
              image: eV,
              imageName: eP,
              savedImageName: null == ed || null == (a = ed.image_asset) ? true : a.filename,
              onChange: (e, t) => {
                if (null != e) {
                  var A;
                  eO(e), eF(t), eI(e.startsWith("data:") || t !== (null == ed || null == (A = ed.image_asset) ? true : A.filename))
                }
              }
            })
          }), eZ ? (0, r.jsx)(u.N, {
            label: D.intl.string(D.t.zLrtkJ),
            errorMessage: null != (eA = null == eL ? true : eL.getFirstFieldErrorMessage("attachments")) ? eA : true,
            children: (0, r.jsx)(Z.s, {
              onFileAdded: () => {
                var e;
                null == (e = e5.current) || e.scrollIntoView({
                  behavior: "smooth",
                  block: "end"
                })
              }
            })
          }) : null, eY ? (0, r.jsx)(w.ZP, {
            error: null != (er = null == eL ? true : eL.getFirstFieldErrorMessage(N.NB)) ? er : true,
            newRoleParams: eE,
            setNewRoleParams: eG,
            guildId: en,
            listingRoleId: eB,
            productId: eo
          }) : null]
        })
      }), (0, r.jsx)("div", {
        className: B.horizontalSeparator
      }), (0, r.jsx)(p.zJl, {
        children: (0, r.jsxs)("div", {
          className: B.productPreview,
          children: [(0, r.jsx)(S.Z, {
            disabled: e4,
            disabledTooltip: eu ? D.intl.string(D.t["0NQ00t"]) : ec >= R.dD ? D.intl.format(D.t.IqWPVl, {
              maxProducts: R.dD
            }) : D.intl.string(D.t["Ax89/f"]),
            published: eu,
            onClick: () => {
              o()(e6, "Attempting to publish/unpublish when not allowed"), e$(eu ? "unpublish" : "publish"), e2(G(E({}, e0), {
                published: !eu
              }))
            },
            submitting: ek
          }), (0, r.jsx)("div", {
            className: B.verticalSeparator
          }), (0, r.jsx)(p.X6q, {
            variant: "text-xs/bold",
            color: "header-secondary",
            className: B.previewHeading,
            children: D.intl.string(D.t["6I7nQU"])
          }), (0, r.jsx)(p.LZC, {
            size: 4
          }), (0, r.jsx)(p.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: D.intl.string(D.t.Oq4dfX)
          }), (0, r.jsx)(p.LZC, {
            size: 16
          }), (0, r.jsx)(K.Z, {
            imageUrl: eV,
            name: "" === eq ? D.intl.string(D.t.EmqIws) : eq,
            description: "" === eC ? D.intl.string(D.t["11NA2N"]) : eC,
            formattedPrice: eK,
            role: eH,
            productType: eM,
            ctaComponent: (0, r.jsx)(g.zxk, {
              text: D.intl.string(D.t.xUi3BA)
            }),
            cardWidth: 340,
            thumbnailHeight: 190
          })]
        })
      })]
    }), (0, r.jsx)(p.mzw, {
      "data-migration-pending": true,
      children: (0, r.jsxs)("div", {
        className: B.footerActionButtons,
        children: [(0, r.jsxs)("div", {
          className: B.footerActionLeftButtons,
          children: [(0, r.jsx)(J, {
            text: D.intl.string(D.t.YzGIVF),
            value: eY,
            onChange: e => {
              e ? eG((0, w.YP)()) : eG(true)
            },
            warning: null === eE ? (0, r.jsx)(w.aN, {}) : true,
            disabled: null != eB
          }), (0, r.jsx)(J, {
            text: D.intl.string(D.t.C6wP2d),
            value: eZ,
            onChange: e => {
              e ? eW(true) : eS ? (0, p.ZDy)(async () => {
                let {
                  ConfirmModal: e
                } = await Promise.resolve().then(A.bind(A, 481060));
                return t => (0, r.jsx)(e, G(E({}, t), {
                  header: D.intl.string(D.t["2Wihyc"]),
                  confirmText: D.intl.string(D.t.N86XcH),
                  cancelText: D.intl.string(D.t["ETE/oK"]),
                  onConfirm: eJ,
                  children: (0, r.jsx)(p.Text, {
                    variant: "text-md/normal",
                    children: D.intl.string(D.t.ixRBLi)
                  })
                }))
              }) : eJ()
            },
            disabled: eR
          })]
        }), (0, r.jsx)("div", {
          className: B.footerActionRightButtons,
          children: eu ? (0, r.jsx)(g.zxk, {
            variant: "secondary",
            text: D.intl.string(D.t.XYBEaW),
            disabled: !e9,
            loading: eD,
            onClick: () => {
              o()(e9, "cannot save changes for published product without adding all fields"), e$("update_publish"), e2(e0)
            }
          }) : (0, r.jsx)(g.zxk, {
            variant: "secondary",
            text: D.intl.string(D.t.ZCjwoa),
            disabled: !e3,
            loading: eD,
            onClick: () => {
              o()(e3, "cannot save changes without name or price tier"), e$("draft"), e2(e0)
            }
          })
        })]
      })
    }), (0, r.jsx)(c.W, {
      component: "div",
      className: B.successNoticeContainer,
      children: e7
    })]
  })
}

function et(e) {
  var t;
  return (0, r.jsx)(y.W, {
    guildId: e.guildId,
    editSkuId: null != (t = e.productId) ? t : true,
    onFileSizeError: () => (0, x.Z)(R.ve),
    children: (0, r.jsx)(ee, E({}, e))
  })
}