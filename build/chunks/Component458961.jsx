/** Chunk was on 73628 **/
/** chunk id: 458961, original params: e,t,A (module,exports,require) **/
require.d(exports, {
  default: () => _
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
  Chunk707449 = require("./707449.js");

function D(e) {
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

function k(e, t) {
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
let B = (0, Chunk313201.hQ)(),
  E = (0, Chunk313201.hQ)(),
  G = (0, Chunk313201.hQ)();

function Y(e) {
  let {
    text: t,
    onChange: A,
    value: n,
    disabled: a,
    warning: i
  } = e, o = (0, m.Dt)(), s = a ? "text-muted" : "text-default";
  return (0, r.jsxs)("label", {
    className: l()(L.benefitToggleContainer, {
      [L.disabled]: a
    }),
    htmlFor: o,
    children: [(0, r.jsx)(u.Text, {
      variant: "text-sm/medium",
      color: s,
      children: t
    }), null != i && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(u.LZC, {
        size: 4,
        horizontal: true
      }), i]
    }), (0, r.jsx)(u.rsf, {
      onChange: A,
      checked: n,
      disabled: a,
      id: o
    })]
  })
}

function H(e, t) {
  return e.filter(e => {
    let {
      value: A,
      label: r
    } = e;
    return A.toString().includes(t) || r.includes(t)
  })
}

function M(e) {
  let {
    guildId: t,
    selectedPriceTier: A,
    setPriceTier: a,
    label: l,
    errorMessage: i
  } = e, {
    priceTiers: o
  } = (0, h.R)(t, z.RG5.GUILD_PRODUCTS), s = n.useMemo(() => (null != o ? o : null != A ? [A] : []).map(e => ({
    value: e,
    label: (0, x.T4)(e, z.pKx.USD)
  })), [o, A]);
  return (0, r.jsx)(u.VcW, {
    label: l,
    errorMessage: i,
    value: A,
    placeholder: R.intl.string(R.t.aI4J5O),
    maxVisibleItems: 5,
    options: s,
    onChange: a,
    filter: H,
    "aria-required": true
  })
}

function J(e) {
  var t, a, l, i, m, h, b, H, J, $, ee, et;
  let {
    guildId: eA,
    productId: er,
    transitionState: en,
    onClose: ea
  } = e, [el, ei] = n.useState(er), eo = (0, d.e7)([P.Z], () => null == el ? null : P.Z.getGuildProduct(el), [el]), es = (0, d.e7)([P.Z], () => P.Z.getGuildProductsForGuild(eA, {
    publishedOnly: true
  }).length, [eA]), ed = (null == eo ? true : eo.published) === true, {
    application: ec
  } = (0, p.Z)(eA, w.wW.GUILD_ROLE_SUBSCRIPTIONS), eu = y.M["0"], eg = C.QK.useSetting(), ef = (0, V.n)(), ep = n.useCallback(() => {
    var e;
    return (null == eo || null == (e = eo.image_asset) ? true : e.application_id) == null ? eu.data : (0, U._W)(eo.image_asset.application_id, eo.image_asset, 600, ef && eg ? true : "webp")
  }, [eu, eo, ef, eg]), {
    shouldRestrictUpdatingCreatorMonetizationSettings: em
  } = (0, q.gX)(eA);
  n.useEffect(() => {
    em && (ea(), (0, K.B)(R.intl.string(R.t.OLf3xs), R.t["90LBVl"]))
  }, [em, ea]);
  let [eh, ev] = n.useState(null != (l = null == eo ? true : eo.name) ? l : ""), [eq, eb] = n.useState(null != (i = null == eo ? true : eo.description) ? i : ""), [eC, ej] = n.useState(null != (m = null == eo ? true : eo.price_tier) ? m : true), [ex, eU] = n.useState(ep), [eV, eO] = n.useState(null != (h = null == eo || null == (t = eo.image_asset) ? true : t.filename) ? h : eu.name), [eP, eF] = n.useState(false), [ey, eI] = n.useState(), eN = n.useMemo(() => null != eC ? (0, x.T4)(eC, z.pKx.USD) : true, [eC]), [eT, eK] = n.useState(true), {
    changesSaving: eZ,
    saveError: eW,
    saveProductWithAttachments: eX,
    hasUnsavedAttachmentChanges: eQ,
    cancelUnusedUploads: eS
  } = (0, O.P)(), ez = (null == eo ? true : eo.attachments) != null && (null == eo ? true : eo.attachments.length) > 0, ew = null != eW ? eW : ey, eR = null != eZ && "published" in eZ, eL = null != eZ && !eR, eD = null != (b = null == eo ? true : eo.role_id) ? b : null, [ek, eB] = n.useState(), eE = null != ek || null != eD, eG = (0, d.e7)([j.Z], () => null != eD && null !== ek ? j.Z.getRole(eA, eD) : null != ek ? ek : true, [ek, eD, eA]), eY = "";
  eE && eT ? eY = R.intl.string(R.t.ih4QMT) : eE ? eY = R.intl.string(R.t.o9xphY) : eT && (eY = R.intl.string(R.t.DWYJub));
  let eH = () => {
      eK(false), eS()
    },
    [eM, eJ] = n.useState(),
    {
      changes: e_,
      hasUnsavedChanges: e$,
      canSaveForDraft: e0,
      canSaveForPublished: e1,
      canPublishOrUnpublish: e3
    } = n.useMemo(() => (0, F.fG)({
      guildProductListing: eo,
      name: eh,
      priceTier: eC,
      description: eq,
      image: ex,
      imageName: eV,
      isImageChanged: eP,
      newRoleParams: ek,
      hasSavedAttachments: ez,
      hasUnsavedAttachmentChanges: eQ
    }), [eo, eh, eC, eq, ex, eV, eP, ek, ez, eQ]),
    e9 = n.useMemo(() => e$ || null == eM || "publish" === eM || null != ew ? null : (0, r.jsx)(u.oXn, {
      className: L.successNotice,
      children: (0, r.jsx)(f.Z, {
        message: (0, r.jsxs)("div", {
          className: L.successNoticeMessage,
          children: [(0, r.jsx)(u.owK, {
            size: "md",
            color: s.Z.BUTTON_POSITIVE_BACKGROUND,
            secondaryColor: s.Z.WHITE
          }), (0, r.jsx)(u.Text, {
            variant: "text-md/medium",
            children: "draft" === eM ? R.intl.string(R.t["3Rv4MD"]) : "update_publish" === eM ? R.intl.string(R.t["8fPiBw"]) : R.intl.string(R.t["3LUFnJ"])
          })]
        }),
        onReset: () => eJ(true),
        onResetText: R.intl.string(R.t.T6QuWV)
      })
    }), [ew, e$, eM]),
    e6 = n.useCallback(() => {
      e$ ? (0, T.Z)({
        title: R.intl.string(R.t.FVDhIS),
        body: R.intl.string(R.t.Hgdhwc),
        cta: R.intl.string(R.t.h0bti4),
        closeLabel: R.intl.string(R.t["+WYo0t"]),
        onConfirm: () => {
          ea()
        }
      }) : ea()
    }, [ea, e$]);
  n.useEffect(() => {
    (0, u.oav)(S.Yz, e => (0, r.jsx)(_, D({
      guildId: eA,
      productId: el
    }, e)), e6)
  }, [eA, e6, el]);
  let e8 = async e => {
    let t = (0, F.pM)({
      newRoleParams: ek
    });
    if (eI(t), null != t) return;
    let A = await eX(e);
    if (eF(false), null != A) {
      if (null != e.name && ev(A.name), null != e.description && eb(A.description), null != ek) {
        let e = A.role_id;
        o()(null != e, "Cannot update role without role ID"), await g.Z.updateRole(eA, e, ek)
      }
      eB(true), ei(A.id), "published" in e && true === e.published && ea()
    }
  };
  n.useEffect(() => {
    if (null != ew) {
      var e;
      (0, Z.V)(ew, eA, null == ec || null == (e = ec.team) ? true : e.id)
    }
  }, [ew, eA, ec]), n.useEffect(() => {
    e$ && eJ(true)
  }, [e$]);
  let e7 = n.useRef(null),
    e2 = !e3 || !ed && es >= S.dD;
  return (0, r.jsxs)(u.Y0X, {
    transitionState: en,
    size: u.CgR.DYNAMIC,
    className: L.modalRoot,
    "aria-labelledby": B,
    parentComponent: "GuildProductEditModal",
    "data-migration-pending": true,
    children: [(0, r.jsxs)(u.xBx, {
      className: L.modalHeader,
      separator: false,
      "data-migration-pending": true,
      children: [(0, r.jsxs)("div", {
        className: L.headerText,
        children: [(0, r.jsx)(u.X6q, {
          id: B,
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: R.intl.string(R.t.DnNl1d)
        }), (0, r.jsx)(u.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: R.intl.string(R.t["Tu7f+f"])
        })]
      }), (0, r.jsx)(u.olH, {
        onClick: e6,
        className: L.__invalid_modalCloseButton,
        "data-migration-pending": true
      })]
    }), (0, r.jsxs)(u.hzk, {
      className: L.modalContent,
      scrollbarType: "none",
      "data-migration-pending": true,
      children: [(0, r.jsx)(u.zJl, {
        children: (0, r.jsxs)("div", {
          className: L.productFieldsSection,
          ref: e7,
          children: [(0, r.jsx)(u.oil, {
            label: R.intl.string(R.t.Hsk7xc),
            error: null == ew ? true : ew.getFirstFieldErrorMessage("name"),
            value: eh,
            onChange: ev,
            id: E,
            maxLength: 100,
            placeholder: R.intl.string(R.t["/BiYSE"]),
            required: true
          }), (0, r.jsx)(v.Z, {
            label: R.intl.string(R.t.QdKLyc),
            errorMessage: null != (H = null == ew ? true : ew.getFirstFieldErrorMessage("description")) ? H : true,
            id: G,
            className: L.descriptionArea,
            value: eq,
            onChange: eb,
            maxLength: 1500,
            placeholder: R.intl.string(R.t.BFwyur),
            showCharacterCount: eq.length > 0,
            parentModalKey: S.Yz,
            required: true
          }), (0, r.jsx)(M, {
            label: R.intl.string(R.t["CAY/vr"]),
            errorMessage: null != (J = null == ew ? true : ew.getFirstFieldErrorMessage("price_tier")) ? J : true,
            guildId: eA,
            selectedPriceTier: eC,
            setPriceTier: ej
          }), (0, r.jsx)(u.gNt, {
            label: R.intl.string(R.t["sqXj6+"]),
            errorMessage: null != ($ = null == ew ? true : ew.getFirstFieldErrorMessage("image")) ? $ : true,
            description: R.intl.string(R.t.yOU4Vl),
            children: (0, r.jsx)(W.Z, {
              presetImages: y.M,
              radioGroupAriaLabel: R.intl.string(R.t.fKzQj4),
              image: ex,
              imageName: eV,
              savedImageName: null == eo || null == (a = eo.image_asset) ? true : a.filename,
              onChange: (e, t) => {
                if (null != e) {
                  var A;
                  eU(e), eO(t), eF(e.startsWith("data:") || t !== (null == eo || null == (A = eo.image_asset) ? true : A.filename))
                }
              }
            })
          }), eT ? (0, r.jsx)(u.gNt, {
            label: R.intl.string(R.t.zLrtkJ),
            errorMessage: null != (ee = null == ew ? true : ew.getFirstFieldErrorMessage("attachments")) ? ee : true,
            children: (0, r.jsx)(N.s, {
              onFileAdded: () => {
                var e;
                null == (e = e7.current) || e.scrollIntoView({
                  behavior: "smooth",
                  block: "end"
                })
              }
            })
          }) : null, eE ? (0, r.jsx)(Q.ZP, {
            error: null != (et = null == ew ? true : ew.getFirstFieldErrorMessage(F.NB)) ? et : true,
            newRoleParams: ek,
            setNewRoleParams: eB,
            guildId: eA,
            listingRoleId: eD,
            productId: el
          }) : null]
        })
      }), (0, r.jsx)("div", {
        className: L.horizontalSeparator
      }), (0, r.jsx)(u.zJl, {
        children: (0, r.jsxs)("div", {
          className: L.productPreview,
          children: [(0, r.jsx)(X.Z, {
            disabled: e2,
            disabledTooltip: ed ? R.intl.string(R.t["0NQ00t"]) : es >= S.dD ? R.intl.format(R.t.IqWPVl, {
              maxProducts: S.dD
            }) : R.intl.string(R.t["Ax89/f"]),
            published: ed,
            onClick: () => {
              o()(e3, "Attempting to publish/unpublish when not allowed"), eJ(ed ? "unpublish" : "publish"), e8(k(D({}, e_), {
                published: !ed
              }))
            },
            submitting: eR
          }), (0, r.jsx)("div", {
            className: L.verticalSeparator
          }), (0, r.jsx)(u.X6q, {
            variant: "text-xs/bold",
            color: "header-secondary",
            className: L.previewHeading,
            children: R.intl.string(R.t["6I7nQU"])
          }), (0, r.jsx)(u.LZC, {
            size: 4
          }), (0, r.jsx)(u.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: R.intl.string(R.t.Oq4dfX)
          }), (0, r.jsx)(u.LZC, {
            size: 16
          }), (0, r.jsx)(I.Z, {
            imageUrl: ex,
            name: "" === eh ? R.intl.string(R.t.EmqIws) : eh,
            description: "" === eq ? R.intl.string(R.t["11NA2N"]) : eq,
            formattedPrice: eN,
            role: eG,
            productType: eY,
            ctaComponent: (0, r.jsx)(u.zxk, {
              text: R.intl.string(R.t.xUi3BA)
            }),
            cardWidth: 340,
            thumbnailHeight: 190
          })]
        })
      })]
    }), (0, r.jsx)(u.mzw, {
      "data-migration-pending": true,
      children: (0, r.jsxs)("div", {
        className: L.footerActionButtons,
        children: [(0, r.jsxs)("div", {
          className: L.footerActionLeftButtons,
          children: [(0, r.jsx)(Y, {
            text: R.intl.string(R.t.YzGIVF),
            value: eE,
            onChange: e => {
              e ? eB((0, Q.YP)()) : eB(true)
            },
            warning: null === ek ? (0, r.jsx)(Q.aN, {}) : true,
            disabled: null != eD
          }), (0, r.jsx)(Y, {
            text: R.intl.string(R.t.C6wP2d),
            value: eT,
            onChange: e => {
              e ? eK(true) : eQ ? (0, u.ZDy)(async () => {
                let {
                  ConfirmModal: e
                } = await Promise.resolve().then(A.bind(A, 481060));
                return t => (0, r.jsx)(e, k(D({}, t), {
                  header: R.intl.string(R.t["2Wihyc"]),
                  confirmText: R.intl.string(R.t.N86XcH),
                  cancelText: R.intl.string(R.t["ETE/oK"]),
                  onConfirm: eH,
                  children: (0, r.jsx)(u.Text, {
                    variant: "text-md/normal",
                    children: R.intl.string(R.t.ixRBLi)
                  })
                }))
              }) : eH()
            },
            disabled: ez
          })]
        }), (0, r.jsx)("div", {
          className: L.footerActionRightButtons,
          children: ed ? (0, r.jsx)(u.zxk, {
            variant: "secondary",
            text: R.intl.string(R.t.XYBEaW),
            disabled: !e1,
            loading: eL,
            onClick: () => {
              o()(e1, "cannot save changes for published product without adding all fields"), eJ("update_publish"), e8(e_)
            }
          }) : (0, r.jsx)(u.zxk, {
            variant: "secondary",
            text: R.intl.string(R.t.ZCjwoa),
            disabled: !e0,
            loading: eL,
            onClick: () => {
              o()(e0, "cannot save changes without name or price tier"), eJ("draft"), e8(e_)
            }
          })
        })]
      })
    }), (0, r.jsx)(c.W, {
      component: "div",
      className: L.successNoticeContainer,
      children: e9
    })]
  })
}

function _(e) {
  var t;
  return (0, r.jsx)(O.W, {
    guildId: e.guildId,
    editSkuId: null != (t = e.productId) ? t : true,
    onFileSizeError: () => (0, b.Z)(S.ve),
    children: (0, r.jsx)(J, D({}, e))
  })
}