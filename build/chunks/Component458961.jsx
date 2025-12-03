/** Chunk was on 73628 **/
/** chunk id: 458961, original params: e,t,A (module,exports,require) **/
require.d(exports, {
  default: () => _
}), require("./388685.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk399606 = require("./399606.js"),
  Chunk692547 = require("./692547.js"),
  Chunk215569 = require("./215569.js"),
  Chunk796027 = require("./796027.jsx"),
  Chunk248514 = require("./248514.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk749210 = require("./749210.js"),
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

function R(e) {
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
let k = (0, Chunk313201.hQ)(),
  E = (0, Chunk313201.hQ)(),
  G = (0, Chunk313201.hQ)();

function Y(e) {
  let {
    text: t,
    onChange: A,
    value: r,
    disabled: a,
    warning: l
  } = e, o = (0, v.Dt)(), s = a ? "text-muted" : "text-default";
  return (0, n.jsxs)("label", {
    className: i()(D.benefitToggleContainer, {
      [D.disabled]: a
    }),
    htmlFor: o,
    children: [(0, n.jsx)(f.Text, {
      variant: "text-sm/medium",
      color: s,
      children: t
    }), null != l && (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(f.LZC, {
        size: 4,
        horizontal: true
      }), l]
    }), (0, n.jsx)(f.rsf, {
      onChange: A,
      checked: r,
      disabled: a,
      id: o
    })]
  })
}

function H(e, t) {
  return e.filter(e => {
    let {
      value: A,
      label: n
    } = e;
    return A.toString().includes(t) || n.includes(t)
  })
}

function M(e) {
  let {
    guildId: t,
    selectedPriceTier: A,
    setPriceTier: a,
    label: i,
    errorMessage: l
  } = e, {
    priceTiers: o
  } = (0, h.R)(t, w.RG5.GUILD_PRODUCTS), s = r.useMemo(() => (null != o ? o : null != A ? [A] : []).map(e => ({
    value: e,
    label: (0, V.T4)(e, w.pKx.USD)
  })), [o, A]);
  return (0, n.jsx)(f.VcW, {
    label: i,
    errorMessage: l,
    value: A,
    placeholder: L.intl.string(L.t.aI4J5H),
    maxVisibleItems: 5,
    options: s,
    onChange: a,
    filter: H,
    "aria-required": true
  })
}

function J(e) {
  var t, A, a, i, l, v, h, C, H, J, $, ee;
  let {
    guildId: et,
    productId: eA,
    transitionState: en,
    onClose: er
  } = e, [ea, ei] = r.useState(eA), el = (0, s.e7)([F.Z], () => null == ea ? null : F.Z.getGuildProduct(ea), [ea]), eo = (0, s.e7)([F.Z], () => F.Z.getGuildProductsForGuild(et, {
    publishedOnly: true
  }).length, [et]), es = (null == el ? true : el.published) === true, {
    application: ed
  } = (0, m.Z)(et, B.wW.GUILD_ROLE_SUBSCRIPTIONS), eu = I.M["0"], ec = U.QK.useSetting(), eg = (0, O.n)(), ef = r.useCallback(() => {
    var e;
    return (null == el || null == (e = el.image_asset) ? true : e.application_id) == null ? eu.data : (0, x._W)(el.image_asset.application_id, el.image_asset, 600, eg && ec ? true : "webp")
  }, [eu, el, eg, ec]), {
    shouldRestrictUpdatingCreatorMonetizationSettings: ep
  } = (0, b.gX)(et);
  r.useEffect(() => {
    ep && (er(), (0, Z.B)(L.intl.string(L.t.OLf3xn), L.t["90LBVr"]))
  }, [ep, er]);
  let [em, ev] = r.useState(null != (a = null == el ? true : el.name) ? a : ""), [eh, eq] = r.useState(null != (i = null == el ? true : el.description) ? i : ""), [eb, eC] = r.useState(null != (l = null == el ? true : el.price_tier) ? l : true), [eU, ej] = r.useState(ef), [eV, ex] = r.useState(null != (v = null == el || null == (t = el.image_asset) ? true : t.filename) ? v : eu.name), [eO, eP] = r.useState(false), [eF, ey] = r.useState(), eI = r.useMemo(() => null != eb ? (0, V.T4)(eb, w.pKx.USD) : true, [eb]), [eN, eK] = r.useState(true), {
    changesSaving: eT,
    saveError: eZ,
    saveProductWithAttachments: eW,
    hasUnsavedAttachmentChanges: eX,
    cancelUnusedUploads: eQ
  } = (0, P.P)(), eS = (null == el ? true : el.attachments) != null && (null == el ? true : el.attachments.length) > 0, ez = null != eZ ? eZ : eF, ew = null != eT && "published" in eT, eB = null != eT && !ew, eL = null != (h = null == el ? true : el.role_id) ? h : null, [eD, eR] = r.useState(), ek = null != eD || null != eL, eE = (0, s.e7)([j.Z], () => null != eL && null !== eD ? j.Z.getRole(et, eL) : null != eD ? eD : true, [eD, eL, et]), eG = "";
  ek && eN ? eG = L.intl.string(L.t.ih4QMU) : ek ? eG = L.intl.string(L.t.o9xphc) : eN && (eG = L.intl.string(L.t.DWYJua));
  let eY = () => {
      eK(false), eQ()
    },
    [eH, eM] = r.useState(),
    {
      changes: eJ,
      hasUnsavedChanges: e_,
      canSaveForDraft: e$,
      canSaveForPublished: e0,
      canPublishOrUnpublish: e1
    } = r.useMemo(() => (0, y.fG)({
      guildProductListing: el,
      name: em,
      priceTier: eb,
      description: eh,
      image: eU,
      imageName: eV,
      isImageChanged: eO,
      newRoleParams: eD,
      hasSavedAttachments: eS,
      hasUnsavedAttachmentChanges: eX
    }), [el, em, eb, eh, eU, eV, eO, eD, eS, eX]),
    e3 = r.useMemo(() => e_ || null == eH || "publish" === eH || null != ez ? null : (0, n.jsx)(f.oXn, {
      className: D.successNotice,
      children: (0, n.jsx)(c.Z, {
        message: (0, n.jsxs)("div", {
          className: D.successNoticeMessage,
          children: [(0, n.jsx)(f.owK, {
            size: "md",
            color: d.Z.colors.BUTTON_POSITIVE_BACKGROUND.css,
            secondaryColor: d.Z.colors.WHITE.css
          }), (0, n.jsx)(f.Text, {
            variant: "text-md/medium",
            children: "draft" === eH ? L.intl.string(L.t["3Rv4MB"]) : "update_publish" === eH ? L.intl.string(L.t["8fPiB3"]) : L.intl.string(L.t["3LUFnI"])
          })]
        }),
        onReset: () => eM(true),
        onResetText: L.intl.string(L.t.T6QuWe)
      })
    }), [ez, e_, eH]),
    e9 = r.useCallback(() => {
      e_ ? (0, T.Z)({
        title: L.intl.string(L.t.FVDhIW),
        body: L.intl.string(L.t.Hgdhwb),
        cta: L.intl.string(L.t["h0bti/"]),
        closeLabel: L.intl.string(L.t["+WYo0m"]),
        onConfirm: () => {
          er()
        }
      }) : er()
    }, [er, e_]);
  r.useEffect(() => {
    (0, f.oav)(z.Yz, e => (0, n.jsx)(_, R({
      guildId: et,
      productId: ea
    }, e)), e9)
  }, [et, e9, ea]);
  let e6 = async e => {
    let t = (0, y.pM)({
      newRoleParams: eD
    });
    if (ey(t), null != t) return;
    let A = await eW(e);
    if (eP(false), null != A) {
      if (null != e.name && ev(A.name), null != e.description && eq(A.description), null != eD) {
        let e = A.role_id;
        o()(null != e, "Cannot update role without role ID"), await p.Z.updateRole(et, e, eD)
      }
      eR(true), ei(A.id), "published" in e && true === e.published && er()
    }
  };
  r.useEffect(() => {
    if (null != ez) {
      var e;
      (0, W.V)(ez, et, null == ed || null == (e = ed.team) ? true : e.id)
    }
  }, [ez, et, ed]), r.useEffect(() => {
    e_ && eM(true)
  }, [e_]);
  let e7 = r.useRef(null),
    e2 = !e1 || !es && eo >= z.dD;
  return (0, n.jsxs)(f.Y0X, {
    transitionState: en,
    size: f.CgR.DYNAMIC,
    className: D.modalRoot,
    "aria-labelledby": k,
    parentComponent: "GuildProductEditModal",
    "data-migration-pending": true,
    children: [(0, n.jsxs)(f.xBx, {
      className: D.modalHeader,
      separator: false,
      "data-migration-pending": true,
      children: [(0, n.jsxs)("div", {
        className: D.headerText,
        children: [(0, n.jsx)(f.Heading, {
          id: k,
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: L.intl.string(L.t.DnNl1T)
        }), (0, n.jsx)(f.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: L.intl.string(L.t["Tu7f+f"])
        })]
      }), (0, n.jsx)(f.olH, {
        onClick: e9,
        className: D.__invalid_modalCloseButton,
        "data-migration-pending": true
      })]
    }), (0, n.jsxs)(f.hzk, {
      className: D.modalContent,
      scrollbarType: "none",
      "data-migration-pending": true,
      children: [(0, n.jsx)(f.zJl, {
        children: (0, n.jsxs)("div", {
          className: D.productFieldsSection,
          ref: e7,
          children: [(0, n.jsx)(f.oil, {
            label: L.intl.string(L.t.Hsk7xT),
            error: null == ez ? true : ez.getFirstFieldErrorMessage("name"),
            value: em,
            onChange: ev,
            id: E,
            maxLength: 100,
            placeholder: L.intl.string(L.t["/BiYSO"]),
            required: true
          }), (0, n.jsx)(q.Z, {
            label: L.intl.string(L.t.QdKLyW),
            errorMessage: null != (C = null == ez ? true : ez.getFirstFieldErrorMessage("description")) ? C : true,
            id: G,
            className: D.descriptionArea,
            value: eh,
            onChange: eq,
            maxLength: 1500,
            placeholder: L.intl.string(L.t.BFwyum),
            showCharacterCount: eh.length > 0,
            parentModalKey: z.Yz,
            required: true
          }), (0, n.jsx)(M, {
            label: L.intl.string(L.t["CAY/vh"]),
            errorMessage: null != (H = null == ez ? true : ez.getFirstFieldErrorMessage("price_tier")) ? H : true,
            guildId: et,
            selectedPriceTier: eb,
            setPriceTier: eC
          }), (0, n.jsx)(f.gNt, {
            label: L.intl.string(L.t.sqXj60),
            errorMessage: null != (J = null == ez ? true : ez.getFirstFieldErrorMessage("image")) ? J : true,
            description: L.intl.string(L.t.yOU4Vm),
            children: (0, n.jsx)(X.Z, {
              presetImages: I.M,
              radioGroupAriaLabel: L.intl.string(L.t.fKzQj0),
              image: eU,
              imageName: eV,
              savedImageName: null == el || null == (A = el.image_asset) ? true : A.filename,
              onChange: (e, t) => {
                if (null != e) {
                  var A;
                  ej(e), ex(t), eP(e.startsWith("data:") || t !== (null == el || null == (A = el.image_asset) ? true : A.filename))
                }
              }
            })
          }), eN ? (0, n.jsx)(f.gNt, {
            label: L.intl.string(L.t.zLrtkN),
            errorMessage: null != ($ = null == ez ? true : ez.getFirstFieldErrorMessage("attachments")) ? $ : true,
            children: (0, n.jsx)(K.s, {
              onFileAdded: () => {
                var e;
                null == (e = e7.current) || e.scrollIntoView({
                  behavior: "smooth",
                  block: "end"
                })
              }
            })
          }) : null, ek ? (0, n.jsx)(S.ZP, {
            error: null != (ee = null == ez ? true : ez.getFirstFieldErrorMessage(y.NB)) ? ee : true,
            newRoleParams: eD,
            setNewRoleParams: eR,
            guildId: et,
            listingRoleId: eL,
            productId: ea
          }) : null]
        })
      }), (0, n.jsx)("div", {
        className: D.horizontalSeparator
      }), (0, n.jsx)(f.zJl, {
        children: (0, n.jsxs)("div", {
          className: D.productPreview,
          children: [(0, n.jsx)(Q.Z, {
            disabled: e2,
            disabledTooltip: es ? L.intl.string(L.t["0NQ00t"]) : eo >= z.dD ? L.intl.format(L.t.IqWPVt, {
              maxProducts: z.dD
            }) : L.intl.string(L.t["Ax89/c"]),
            published: es,
            onClick: () => {
              var e, t;
              o()(e1, "Attempting to publish/unpublish when not allowed"), eM(es ? "unpublish" : "publish"), e6((e = R({}, eJ), t = t = {
                published: !es
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
                var A = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var n = Object.getOwnPropertySymbols(e);
                  A.push.apply(A, n)
                }
                return A
              })(Object(t)).forEach(function(A) {
                Object.defineProperty(e, A, Object.getOwnPropertyDescriptor(t, A))
              }), e))
            },
            submitting: ew
          }), (0, n.jsx)("div", {
            className: D.verticalSeparator
          }), (0, n.jsx)(f.Heading, {
            variant: "text-xs/bold",
            color: "header-secondary",
            className: D.previewHeading,
            children: L.intl.string(L.t["6I7nQT"])
          }), (0, n.jsx)(f.LZC, {
            size: 4
          }), (0, n.jsx)(f.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: L.intl.string(L.t.Oq4dfU)
          }), (0, n.jsx)(f.LZC, {
            size: 16
          }), (0, n.jsx)(N.Z, {
            imageUrl: eU,
            name: "" === em ? L.intl.string(L.t.EmqIwl) : em,
            description: "" === eh ? L.intl.string(L.t["11NA2L"]) : eh,
            formattedPrice: eI,
            role: eE,
            productType: eG,
            ctaComponent: (0, n.jsx)(f.Button, {
              text: L.intl.string(L.t.xUi3BL)
            }),
            cardWidth: 340,
            thumbnailHeight: 190
          })]
        })
      })]
    }), (0, n.jsx)(f.mzw, {
      "data-migration-pending": true,
      children: (0, n.jsxs)("div", {
        className: D.footerActionButtons,
        children: [(0, n.jsxs)("div", {
          className: D.footerActionLeftButtons,
          children: [(0, n.jsx)(Y, {
            text: L.intl.string(L.t.YzGIVF),
            value: ek,
            onChange: e => {
              e ? eR((0, S.YP)()) : eR(true)
            },
            warning: null === eD ? (0, n.jsx)(S.aN, {}) : true,
            disabled: null != eL
          }), (0, n.jsx)(Y, {
            text: L.intl.string(L.t.C6wP2Q),
            value: eN,
            onChange: e => {
              e ? eK(true) : eX ? (0, g.Z)({
                title: L.intl.string(L.t["2WihyY"]),
                subtitle: L.intl.string(L.t.ixRBLh),
                confirmText: L.intl.string(L.t.N86XcP),
                onConfirm: eY
              }) : eY()
            },
            disabled: eS
          })]
        }), (0, n.jsx)("div", {
          className: D.footerActionRightButtons,
          children: es ? (0, n.jsx)(f.Button, {
            variant: "secondary",
            text: L.intl.string(L.t.XYBEaV),
            disabled: !e0,
            loading: eB,
            onClick: () => {
              o()(e0, "cannot save changes for published product without adding all fields"), eM("update_publish"), e6(eJ)
            }
          }) : (0, n.jsx)(f.Button, {
            variant: "secondary",
            text: L.intl.string(L.t.ZCjwob),
            disabled: !e$,
            loading: eB,
            onClick: () => {
              o()(e$, "cannot save changes without name or price tier"), eM("draft"), e6(eJ)
            }
          })
        })]
      })
    }), (0, n.jsx)(u.W, {
      component: "div",
      className: D.successNoticeContainer,
      children: e3
    })]
  })
}

function _(e) {
  var t;
  return (0, n.jsx)(P.W, {
    guildId: e.guildId,
    editSkuId: null != (t = e.productId) ? t : true,
    onFileSizeError: () => (0, C.Z)(z.ve),
    children: (0, n.jsx)(J, R({}, e))
  })
}