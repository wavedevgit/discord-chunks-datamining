/** Chunk was on 73628 **/
/** chunk id: 458961, original params: e,t,A (module,exports,require) **/
require.d(exports, {
  default: () => $
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
  Chunk668339 = require("./668339.jsx"),
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

function k(e) {
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
let E = (0, Chunk313201.hQ)(),
  G = (0, Chunk313201.hQ)(),
  Y = (0, Chunk313201.hQ)();

function H(e) {
  let {
    text: t,
    onChange: A,
    value: r,
    disabled: a,
    warning: l
  } = e, o = (0, h.Dt)(), s = a ? "text-muted" : "text-default";
  return (0, n.jsxs)("label", {
    className: i()(R.benefitToggleContainer, {
      [R.disabled]: a
    }),
    htmlFor: o,
    children: [(0, n.jsx)(p.Text, {
      variant: "text-sm/medium",
      color: s,
      children: t
    }), null != l && (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(p.LZC, {
        size: 4,
        horizontal: true
      }), l]
    }), (0, n.jsx)(p.rsf, {
      onChange: A,
      checked: r,
      disabled: a,
      id: o
    })]
  })
}

function M(e, t) {
  return e.filter(e => {
    let {
      value: A,
      label: n
    } = e;
    return A.toString().includes(t) || n.includes(t)
  })
}

function J(e) {
  let {
    guildId: t,
    selectedPriceTier: A,
    setPriceTier: a,
    label: i,
    errorMessage: l
  } = e, {
    priceTiers: o
  } = (0, q.R)(t, B.RG5.GUILD_PRODUCTS), s = r.useMemo(() => (null != o ? o : null != A ? [A] : []).map(e => ({
    value: e,
    label: (0, x.T4)(e, B.pKx.USD)
  })), [o, A]);
  return (0, n.jsx)(g.d, {
    label: i,
    errorMessage: l,
    value: A,
    placeholder: D.intl.string(D.t.aI4J5H),
    maxVisibleItems: 5,
    options: s,
    onChange: a,
    filter: M,
    "aria-required": true
  })
}

function _(e) {
  var t, A, a, i, l, g, h, q, U, M, _, ee;
  let {
    guildId: et,
    productId: eA,
    transitionState: en,
    onClose: er
  } = e, [ea, ei] = r.useState(eA), el = (0, s.e7)([y.Z], () => null == ea ? null : y.Z.getGuildProduct(ea), [ea]), eo = (0, s.e7)([y.Z], () => y.Z.getGuildProductsForGuild(et, {
    publishedOnly: true
  }).length, [et]), es = (null == el ? true : el.published) === true, {
    application: ed
  } = (0, v.Z)(et, L.wW.GUILD_ROLE_SUBSCRIPTIONS), eu = N.M["0"], ec = j.QK.useSetting(), eg = (0, P.n)(), ef = r.useCallback(() => {
    var e;
    return (null == el || null == (e = el.image_asset) ? true : e.application_id) == null ? eu.data : (0, O._W)(el.image_asset.application_id, el.image_asset, 600, eg && ec ? true : "webp")
  }, [eu, el, eg, ec]), {
    shouldRestrictUpdatingCreatorMonetizationSettings: ep
  } = (0, C.gX)(et);
  r.useEffect(() => {
    ep && (er(), (0, W.B)(D.intl.string(D.t.OLf3xn), D.t["90LBVr"]))
  }, [ep, er]);
  let [em, ev] = r.useState(null != (a = null == el ? true : el.name) ? a : ""), [eh, eq] = r.useState(null != (i = null == el ? true : el.description) ? i : ""), [eb, eC] = r.useState(null != (l = null == el ? true : el.price_tier) ? l : true), [eU, ej] = r.useState(ef), [eV, ex] = r.useState(null != (g = null == el || null == (t = el.image_asset) ? true : t.filename) ? g : eu.name), [eO, eP] = r.useState(false), [eF, ey] = r.useState(), eI = r.useMemo(() => null != eb ? (0, x.T4)(eb, B.pKx.USD) : true, [eb]), [eN, eK] = r.useState(true), {
    changesSaving: eT,
    saveError: eZ,
    saveProductWithAttachments: eW,
    hasUnsavedAttachmentChanges: eX,
    cancelUnusedUploads: eQ
  } = (0, F.P)(), eS = (null == el ? true : el.attachments) != null && (null == el ? true : el.attachments.length) > 0, ez = null != eZ ? eZ : eF, ew = null != eT && "published" in eT, eB = null != eT && !ew, eL = null != (h = null == el ? true : el.role_id) ? h : null, [eD, eR] = r.useState(), ek = null != eD || null != eL, eE = (0, s.e7)([V.Z], () => null != eL && null !== eD ? V.Z.getRole(et, eL) : null != eD ? eD : true, [eD, eL, et]), eG = "";
  ek && eN ? eG = D.intl.string(D.t.ih4QMU) : ek ? eG = D.intl.string(D.t.o9xphc) : eN && (eG = D.intl.string(D.t.DWYJua));
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
    } = r.useMemo(() => (0, I.fG)({
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
    e3 = r.useMemo(() => e_ || null == eH || "publish" === eH || null != ez ? null : (0, n.jsx)(p.oXn, {
      className: R.successNotice,
      children: (0, n.jsx)(c.Z, {
        message: (0, n.jsxs)("div", {
          className: R.successNoticeMessage,
          children: [(0, n.jsx)(p.owK, {
            size: "md",
            color: d.Z.colors.BUTTON_POSITIVE_BACKGROUND.css,
            secondaryColor: d.Z.colors.WHITE.css
          }), (0, n.jsx)(p.Text, {
            variant: "text-md/medium",
            children: "draft" === eH ? D.intl.string(D.t["3Rv4MB"]) : "update_publish" === eH ? D.intl.string(D.t["8fPiB3"]) : D.intl.string(D.t["3LUFnI"])
          })]
        }),
        onReset: () => eM(true),
        onResetText: D.intl.string(D.t.T6QuWe)
      })
    }), [ez, e_, eH]),
    e9 = r.useCallback(() => {
      e_ ? (0, Z.Z)({
        title: D.intl.string(D.t.FVDhIW),
        body: D.intl.string(D.t.Hgdhwb),
        cta: D.intl.string(D.t["h0bti/"]),
        closeLabel: D.intl.string(D.t["+WYo0m"]),
        onConfirm: () => {
          er()
        }
      }) : er()
    }, [er, e_]);
  r.useEffect(() => {
    (0, p.oav)(w.Yz, e => (0, n.jsx)($, k({
      guildId: et,
      productId: ea
    }, e)), e9)
  }, [et, e9, ea]);
  let e6 = async e => {
    let t = (0, I.pM)({
      newRoleParams: eD
    });
    if (ey(t), null != t) return;
    let A = await eW(e);
    if (eP(false), null != A) {
      if (null != e.name && ev(A.name), null != e.description && eq(A.description), null != eD) {
        let e = A.role_id;
        o()(null != e, "Cannot update role without role ID"), await m.Z.updateRole(et, e, eD)
      }
      eR(true), ei(A.id), "published" in e && true === e.published && er()
    }
  };
  r.useEffect(() => {
    if (null != ez) {
      var e;
      (0, X.V)(ez, et, null == ed || null == (e = ed.team) ? true : e.id)
    }
  }, [ez, et, ed]), r.useEffect(() => {
    e_ && eM(true)
  }, [e_]);
  let e7 = r.useRef(null),
    e2 = !e1 || !es && eo >= w.dD;
  return (0, n.jsxs)(p.Y0X, {
    transitionState: en,
    size: p.CgR.DYNAMIC,
    className: R.modalRoot,
    "aria-labelledby": E,
    parentComponent: "GuildProductEditModal",
    "data-migration-pending": true,
    children: [(0, n.jsxs)(p.xBx, {
      className: R.modalHeader,
      separator: false,
      "data-migration-pending": true,
      children: [(0, n.jsxs)("div", {
        className: R.headerText,
        children: [(0, n.jsx)(p.Heading, {
          id: E,
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: D.intl.string(D.t.DnNl1T)
        }), (0, n.jsx)(p.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: D.intl.string(D.t["Tu7f+f"])
        })]
      }), (0, n.jsx)(p.olH, {
        onClick: e9,
        className: R.__invalid_modalCloseButton,
        "data-migration-pending": true
      })]
    }), (0, n.jsxs)(p.hzk, {
      className: R.modalContent,
      scrollbarType: "none",
      "data-migration-pending": true,
      children: [(0, n.jsx)(p.zJl, {
        children: (0, n.jsxs)("div", {
          className: R.productFieldsSection,
          ref: e7,
          children: [(0, n.jsx)(p.oil, {
            label: D.intl.string(D.t.Hsk7xT),
            error: null == ez ? true : ez.getFirstFieldErrorMessage("name"),
            value: em,
            onChange: ev,
            id: G,
            maxLength: 100,
            placeholder: D.intl.string(D.t["/BiYSO"]),
            required: true
          }), (0, n.jsx)(b.Z, {
            label: D.intl.string(D.t.QdKLyW),
            errorMessage: null != (q = null == ez ? true : ez.getFirstFieldErrorMessage("description")) ? q : true,
            id: Y,
            className: R.descriptionArea,
            value: eh,
            onChange: eq,
            maxLength: 1500,
            placeholder: D.intl.string(D.t.BFwyum),
            showCharacterCount: eh.length > 0,
            parentModalKey: w.Yz,
            required: true
          }), (0, n.jsx)(J, {
            label: D.intl.string(D.t["CAY/vh"]),
            errorMessage: null != (U = null == ez ? true : ez.getFirstFieldErrorMessage("price_tier")) ? U : true,
            guildId: et,
            selectedPriceTier: eb,
            setPriceTier: eC
          }), (0, n.jsx)(p.gNt, {
            label: D.intl.string(D.t.sqXj60),
            errorMessage: null != (M = null == ez ? true : ez.getFirstFieldErrorMessage("image")) ? M : true,
            description: D.intl.string(D.t.yOU4Vm),
            children: (0, n.jsx)(Q.Z, {
              presetImages: N.M,
              radioGroupAriaLabel: D.intl.string(D.t.fKzQj0),
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
          }), eN ? (0, n.jsx)(p.gNt, {
            label: D.intl.string(D.t.zLrtkN),
            errorMessage: null != (_ = null == ez ? true : ez.getFirstFieldErrorMessage("attachments")) ? _ : true,
            children: (0, n.jsx)(T.s, {
              onFileAdded: () => {
                var e;
                null == (e = e7.current) || e.scrollIntoView({
                  behavior: "smooth",
                  block: "end"
                })
              }
            })
          }) : null, ek ? (0, n.jsx)(z.ZP, {
            error: null != (ee = null == ez ? true : ez.getFirstFieldErrorMessage(I.NB)) ? ee : true,
            newRoleParams: eD,
            setNewRoleParams: eR,
            guildId: et,
            listingRoleId: eL,
            productId: ea
          }) : null]
        })
      }), (0, n.jsx)("div", {
        className: R.horizontalSeparator
      }), (0, n.jsx)(p.zJl, {
        children: (0, n.jsxs)("div", {
          className: R.productPreview,
          children: [(0, n.jsx)(S.Z, {
            disabled: e2,
            disabledTooltip: es ? D.intl.string(D.t["0NQ00t"]) : eo >= w.dD ? D.intl.format(D.t.IqWPVt, {
              maxProducts: w.dD
            }) : D.intl.string(D.t["Ax89/c"]),
            published: es,
            onClick: () => {
              var e, t;
              o()(e1, "Attempting to publish/unpublish when not allowed"), eM(es ? "unpublish" : "publish"), e6((e = k({}, eJ), t = t = {
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
            className: R.verticalSeparator
          }), (0, n.jsx)(p.Heading, {
            variant: "text-xs/bold",
            color: "text-default",
            className: R.previewHeading,
            children: D.intl.string(D.t["6I7nQT"])
          }), (0, n.jsx)(p.LZC, {
            size: 4
          }), (0, n.jsx)(p.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: D.intl.string(D.t.Oq4dfU)
          }), (0, n.jsx)(p.LZC, {
            size: 16
          }), (0, n.jsx)(K.Z, {
            imageUrl: eU,
            name: "" === em ? D.intl.string(D.t.EmqIwl) : em,
            description: "" === eh ? D.intl.string(D.t["11NA2L"]) : eh,
            formattedPrice: eI,
            role: eE,
            productType: eG,
            ctaComponent: (0, n.jsx)(p.Button, {
              text: D.intl.string(D.t.xUi3BL)
            }),
            cardWidth: 340,
            thumbnailHeight: 190
          })]
        })
      })]
    }), (0, n.jsx)(p.mzw, {
      "data-migration-pending": true,
      children: (0, n.jsxs)("div", {
        className: R.footerActionButtons,
        children: [(0, n.jsxs)("div", {
          className: R.footerActionLeftButtons,
          children: [(0, n.jsx)(H, {
            text: D.intl.string(D.t.YzGIVF),
            value: ek,
            onChange: e => {
              e ? eR((0, z.YP)()) : eR(true)
            },
            warning: null === eD ? (0, n.jsx)(z.aN, {}) : true,
            disabled: null != eL
          }), (0, n.jsx)(H, {
            text: D.intl.string(D.t.C6wP2Q),
            value: eN,
            onChange: e => {
              e ? eK(true) : eX ? (0, f.Z)({
                title: D.intl.string(D.t["2WihyY"]),
                subtitle: D.intl.string(D.t.ixRBLh),
                confirmText: D.intl.string(D.t.N86XcP),
                onConfirm: eY
              }) : eY()
            },
            disabled: eS
          })]
        }), (0, n.jsx)("div", {
          className: R.footerActionRightButtons,
          children: es ? (0, n.jsx)(p.Button, {
            variant: "secondary",
            text: D.intl.string(D.t.XYBEaV),
            disabled: !e0,
            loading: eB,
            onClick: () => {
              o()(e0, "cannot save changes for published product without adding all fields"), eM("update_publish"), e6(eJ)
            }
          }) : (0, n.jsx)(p.Button, {
            variant: "secondary",
            text: D.intl.string(D.t.ZCjwob),
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
      className: R.successNoticeContainer,
      children: e3
    })]
  })
}

function $(e) {
  var t;
  return (0, n.jsx)(F.W, {
    guildId: e.guildId,
    editSkuId: null != (t = e.productId) ? t : true,
    onFileSizeError: () => (0, U.Z)(w.ve),
    children: (0, n.jsx)(_, k({}, e))
  })
}