/** Chunk was on 73628 **/
/** chunk id: 458961, original params: e,A,t (module,exports,require) **/
require.d(exports, {
  default: () => eA
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

function Y(e, A) {
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
let D = (0, Chunk313201.hQ)(),
  H = (0, Chunk313201.hQ)(),
  M = (0, Chunk313201.hQ)();

function J(e) {
  let {
    text: A,
    onChange: t,
    value: r,
    disabled: l,
    warning: i
  } = e, o = (0, v.Dt)(), s = l ? "text-muted" : "text-default";
  return (0, n.jsxs)("label", {
    className: a()(G.benefitToggleContainer, {
      [G.disabled]: l
    }),
    htmlFor: o,
    children: [(0, n.jsx)(p.Text, {
      variant: "text-sm/medium",
      color: s,
      children: A
    }), null != i && (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(p.LZC, {
        size: 4,
        horizontal: true
      }), i]
    }), (0, n.jsx)(p.LZC, {
      size: 16,
      horizontal: true
    }), (0, n.jsx)(f.T2, {
      onChange: t,
      checked: r,
      disabled: l,
      id: o
    })]
  })
}

function _(e, A) {
  return e.filter(e => {
    let {
      value: t,
      label: n
    } = e;
    return t.toString().includes(A) || n.includes(A)
  })
}

function $(e) {
  let {
    guildId: A,
    selectedPriceTier: t,
    setPriceTier: l,
    label: a,
    errorMessage: i
  } = e, {
    priceTiers: o
  } = (0, b.R)(A, w.RG5.GUILD_PRODUCTS), s = r.useMemo(() => (null != o ? o : null != t ? [t] : []).map(e => ({
    value: e,
    label: (0, P.T4)(e, w.pKx.USD)
  })), [o, t]);
  return (0, n.jsx)(p.VcW, {
    label: a,
    errorMessage: i,
    value: t,
    placeholder: L.intl.string(L.t.aI4J5O),
    maxVisibleItems: 5,
    options: s,
    onChange: l,
    filter: _,
    "aria-required": true
  })
}

function ee(e) {
  var A, l, a, i, f, v, b, j, _, ee, et, en;
  let {
    guildId: er,
    productId: el,
    transitionState: ea,
    onClose: ei
  } = e, [eo, es] = r.useState(el), ed = (0, d.e7)([K.Z], () => null == eo ? null : K.Z.getGuildProduct(eo), [eo]), eu = (0, d.e7)([K.Z], () => K.Z.getGuildProductsForGuild(er, {
    publishedOnly: true
  }).length, [er]), ec = (null == ed ? true : ed.published) === true, {
    application: eg
  } = (0, h.Z)(er, k.wW.GUILD_ROLE_SUBSCRIPTIONS), ef = N.M["0"], ep = V.QK.useSetting(), em = (0, F.n)(), eq = r.useCallback(() => {
    var e;
    return (null == ed || null == (e = ed.image_asset) ? true : e.application_id) == null ? ef.data : (0, O._W)(ed.image_asset.application_id, ed.image_asset, 600, em && ep ? true : "webp")
  }, [ef, ed, em, ep]), {
    shouldRestrictUpdatingCreatorMonetizationSettings: eh
  } = (0, U.gX)(er);
  r.useEffect(() => {
    eh && (ei(), (0, W.B)(L.intl.string(L.t.OLf3xs), L.t["90LBVl"]))
  }, [eh, ei]);
  let [ev, eb] = r.useState(null != (a = null == ed ? true : ed.name) ? a : ""), [eC, eU] = r.useState(null != (i = null == ed ? true : ed.description) ? i : ""), [ej, eV] = r.useState(null != (f = null == ed ? true : ed.price_tier) ? f : true), [ex, eP] = r.useState(eq), [eO, eF] = r.useState(null != (v = null == ed || null == (A = ed.image_asset) ? true : A.filename) ? v : ef.name), [eI, eK] = r.useState(false), [ey, eN] = r.useState(), eT = r.useMemo(() => null != ej ? (0, P.T4)(ej, w.pKx.USD) : true, [ej]), [eX, eZ] = r.useState(true), {
    changesSaving: eW,
    saveError: eQ,
    saveProductWithAttachments: ez,
    hasUnsavedAttachmentChanges: eS,
    cancelUnusedUploads: eR
  } = (0, I.P)(), eB = (null == ed ? true : ed.attachments) != null && (null == ed ? true : ed.attachments.length) > 0, ew = null != eQ ? eQ : ey, ek = null != eW && "published" in eW, eL = null != eW && !ek, eG = null != (b = null == ed ? true : ed.role_id) ? b : null, [eE, eY] = r.useState(), eD = null != eE || null != eG, eH = (0, d.e7)([x.Z], () => null != eG && null !== eE ? x.Z.getRole(er, eG) : null != eE ? eE : true, [eE, eG, er]), eM = "";
  eD && eX ? eM = L.intl.string(L.t.ih4QMT) : eD ? eM = L.intl.string(L.t.o9xphY) : eX && (eM = L.intl.string(L.t.DWYJub));
  let eJ = () => {
      eZ(false), eR()
    },
    [e_, e$] = r.useState(),
    {
      changes: e0,
      hasUnsavedChanges: e1,
      canSaveForDraft: e3,
      canSaveForPublished: e9,
      canPublishOrUnpublish: e6
    } = r.useMemo(() => (0, y.fG)({
      guildProductListing: ed,
      name: ev,
      priceTier: ej,
      description: eC,
      image: ex,
      imageName: eO,
      isImageChanged: eI,
      newRoleParams: eE,
      hasSavedAttachments: eB,
      hasUnsavedAttachmentChanges: eS
    }), [ed, ev, ej, eC, ex, eO, eI, eE, eB, eS]),
    e7 = r.useMemo(() => e1 || null == e_ || "publish" === e_ || null != ew ? null : (0, n.jsx)(p.oXn, {
      className: G.successNotice,
      children: (0, n.jsx)(q.Z, {
        message: (0, n.jsxs)("div", {
          className: G.successNoticeMessage,
          children: [(0, n.jsx)(p.owK, {
            size: "md",
            color: s.Z.BUTTON_POSITIVE_BACKGROUND,
            secondaryColor: s.Z.WHITE
          }), (0, n.jsx)(p.Text, {
            variant: "text-md/medium",
            children: "draft" === e_ ? L.intl.string(L.t["3Rv4MD"]) : "update_publish" === e_ ? L.intl.string(L.t["8fPiBw"]) : L.intl.string(L.t["3LUFnJ"])
          })]
        }),
        onReset: () => e$(true),
        onResetText: L.intl.string(L.t.T6QuWV)
      })
    }), [ew, e1, e_]),
    e8 = r.useCallback(() => {
      e1 ? (0, Z.Z)({
        title: L.intl.string(L.t.FVDhIS),
        body: L.intl.string(L.t.Hgdhwc),
        cta: L.intl.string(L.t.h0bti4),
        closeLabel: L.intl.string(L.t["+WYo0t"]),
        onConfirm: () => {
          ei()
        }
      }) : ei()
    }, [ei, e1]);
  r.useEffect(() => {
    (0, p.oav)(B.Yz, e => (0, n.jsx)(eA, E({
      guildId: er,
      productId: eo
    }, e)), e8)
  }, [er, e8, eo]);
  let e2 = async e => {
    let A = (0, y.pM)({
      newRoleParams: eE
    });
    if (eN(A), null != A) return;
    let t = await ez(e);
    if (eK(false), null != t) {
      if (null != e.name && eb(t.name), null != e.description && eU(t.description), null != eE) {
        let e = t.role_id;
        o()(null != e, "Cannot update role without role ID"), await m.Z.updateRole(er, e, eE)
      }
      eY(true), es(t.id), "published" in e && true === e.published && ei()
    }
  };
  r.useEffect(() => {
    if (null != ew) {
      var e;
      (0, Q.V)(ew, er, null == eg || null == (e = eg.team) ? true : e.id)
    }
  }, [ew, er, eg]), r.useEffect(() => {
    e1 && e$(true)
  }, [e1]);
  let e5 = r.useRef(null),
    e4 = !e6 || !ec && eu >= B.dD;
  return (0, n.jsxs)(p.Y0X, {
    transitionState: ea,
    size: p.CgR.DYNAMIC,
    className: G.modalRoot,
    "aria-labelledby": D,
    parentComponent: "GuildProductEditModal",
    "data-migration-pending": true,
    children: [(0, n.jsxs)(p.xBx, {
      className: G.modalHeader,
      separator: false,
      "data-migration-pending": true,
      children: [(0, n.jsxs)("div", {
        className: G.headerText,
        children: [(0, n.jsx)(p.X6q, {
          id: D,
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: L.intl.string(L.t.DnNl1d)
        }), (0, n.jsx)(p.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: L.intl.string(L.t["Tu7f+f"])
        })]
      }), (0, n.jsx)(p.olH, {
        onClick: e8,
        className: G.__invalid_modalCloseButton,
        "data-migration-pending": true
      })]
    }), (0, n.jsxs)(p.hzk, {
      className: G.modalContent,
      scrollbarType: "none",
      "data-migration-pending": true,
      children: [(0, n.jsx)(p.zJl, {
        children: (0, n.jsxs)("div", {
          className: G.productFieldsSection,
          ref: e5,
          children: [(0, n.jsx)(p.oil, {
            label: L.intl.string(L.t.Hsk7xc),
            error: null == ew ? true : ew.getFirstFieldErrorMessage("name"),
            value: ev,
            onChange: eb,
            id: H,
            maxLength: 100,
            placeholder: L.intl.string(L.t["/BiYSE"]),
            required: true
          }), (0, n.jsx)(C.Z, {
            label: L.intl.string(L.t.QdKLyc),
            errorMessage: null != (j = null == ew ? true : ew.getFirstFieldErrorMessage("description")) ? j : true,
            id: M,
            className: G.descriptionArea,
            value: eC,
            onChange: eU,
            maxLength: 1500,
            placeholder: L.intl.string(L.t.BFwyur),
            showCharacterCount: eC.length > 0,
            parentModalKey: B.Yz,
            required: true
          }), (0, n.jsx)($, {
            label: L.intl.string(L.t["CAY/vr"]),
            errorMessage: null != (_ = null == ew ? true : ew.getFirstFieldErrorMessage("price_tier")) ? _ : true,
            guildId: er,
            selectedPriceTier: ej,
            setPriceTier: eV
          }), (0, n.jsx)(c.N, {
            label: L.intl.string(L.t["sqXj6+"]),
            errorMessage: null != (ee = null == ew ? true : ew.getFirstFieldErrorMessage("image")) ? ee : true,
            description: L.intl.string(L.t.yOU4Vl),
            children: (0, n.jsx)(z.Z, {
              presetImages: N.M,
              radioGroupAriaLabel: L.intl.string(L.t.fKzQj4),
              image: ex,
              imageName: eO,
              savedImageName: null == ed || null == (l = ed.image_asset) ? true : l.filename,
              onChange: (e, A) => {
                if (null != e) {
                  var t;
                  eP(e), eF(A), eK(e.startsWith("data:") || A !== (null == ed || null == (t = ed.image_asset) ? true : t.filename))
                }
              }
            })
          }), eX ? (0, n.jsx)(c.N, {
            label: L.intl.string(L.t.zLrtkJ),
            errorMessage: null != (et = null == ew ? true : ew.getFirstFieldErrorMessage("attachments")) ? et : true,
            children: (0, n.jsx)(X.s, {
              onFileAdded: () => {
                var e;
                null == (e = e5.current) || e.scrollIntoView({
                  behavior: "smooth",
                  block: "end"
                })
              }
            })
          }) : null, eD ? (0, n.jsx)(R.ZP, {
            error: null != (en = null == ew ? true : ew.getFirstFieldErrorMessage(y.NB)) ? en : true,
            newRoleParams: eE,
            setNewRoleParams: eY,
            guildId: er,
            listingRoleId: eG,
            productId: eo
          }) : null]
        })
      }), (0, n.jsx)("div", {
        className: G.horizontalSeparator
      }), (0, n.jsx)(p.zJl, {
        children: (0, n.jsxs)("div", {
          className: G.productPreview,
          children: [(0, n.jsx)(S.Z, {
            disabled: e4,
            disabledTooltip: ec ? L.intl.string(L.t["0NQ00t"]) : eu >= B.dD ? L.intl.format(L.t.IqWPVl, {
              maxProducts: B.dD
            }) : L.intl.string(L.t["Ax89/f"]),
            published: ec,
            onClick: () => {
              o()(e6, "Attempting to publish/unpublish when not allowed"), e$(ec ? "unpublish" : "publish"), e2(Y(E({}, e0), {
                published: !ec
              }))
            },
            submitting: ek
          }), (0, n.jsx)("div", {
            className: G.verticalSeparator
          }), (0, n.jsx)(p.X6q, {
            variant: "text-xs/bold",
            color: "header-secondary",
            className: G.previewHeading,
            children: L.intl.string(L.t["6I7nQU"])
          }), (0, n.jsx)(p.LZC, {
            size: 4
          }), (0, n.jsx)(p.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: L.intl.string(L.t.Oq4dfX)
          }), (0, n.jsx)(p.LZC, {
            size: 16
          }), (0, n.jsx)(T.Z, {
            imageUrl: ex,
            name: "" === ev ? L.intl.string(L.t.EmqIws) : ev,
            description: "" === eC ? L.intl.string(L.t["11NA2N"]) : eC,
            formattedPrice: eT,
            role: eH,
            productType: eM,
            ctaComponent: (0, n.jsx)(g.zxk, {
              text: L.intl.string(L.t.xUi3BA)
            }),
            cardWidth: 340,
            thumbnailHeight: 190
          })]
        })
      })]
    }), (0, n.jsx)(p.mzw, {
      "data-migration-pending": true,
      children: (0, n.jsxs)("div", {
        className: G.footerActionButtons,
        children: [(0, n.jsxs)("div", {
          className: G.footerActionLeftButtons,
          children: [(0, n.jsx)(J, {
            text: L.intl.string(L.t.YzGIVF),
            value: eD,
            onChange: e => {
              e ? eY((0, R.YP)()) : eY(true)
            },
            warning: null === eE ? (0, n.jsx)(R.aN, {}) : true,
            disabled: null != eG
          }), (0, n.jsx)(J, {
            text: L.intl.string(L.t.C6wP2d),
            value: eX,
            onChange: e => {
              e ? eZ(true) : eS ? (0, p.ZDy)(async () => {
                let {
                  ConfirmModal: e
                } = await Promise.resolve().then(t.bind(t, 481060));
                return A => (0, n.jsx)(e, Y(E({}, A), {
                  header: L.intl.string(L.t["2Wihyc"]),
                  confirmText: L.intl.string(L.t.N86XcH),
                  cancelText: L.intl.string(L.t["ETE/oK"]),
                  onConfirm: eJ,
                  children: (0, n.jsx)(p.Text, {
                    variant: "text-md/normal",
                    children: L.intl.string(L.t.ixRBLi)
                  })
                }))
              }) : eJ()
            },
            disabled: eB
          })]
        }), (0, n.jsx)("div", {
          className: G.footerActionRightButtons,
          children: ec ? (0, n.jsx)(g.zxk, {
            variant: "secondary",
            text: L.intl.string(L.t.XYBEaW),
            disabled: !e9,
            loading: eL,
            onClick: () => {
              o()(e9, "cannot save changes for published product without adding all fields"), e$("update_publish"), e2(e0)
            }
          }) : (0, n.jsx)(g.zxk, {
            variant: "secondary",
            text: L.intl.string(L.t.ZCjwoa),
            disabled: !e3,
            loading: eL,
            onClick: () => {
              o()(e3, "cannot save changes without name or price tier"), e$("draft"), e2(e0)
            }
          })
        })]
      })
    }), (0, n.jsx)(u.W, {
      component: "div",
      className: G.successNoticeContainer,
      children: e7
    })]
  })
}

function eA(e) {
  var A;
  return (0, n.jsx)(I.W, {
    guildId: e.guildId,
    editSkuId: null != (A = e.productId) ? A : true,
    onFileSizeError: () => (0, j.Z)(B.ve),
    children: (0, n.jsx)(ee, E({}, e))
  })
}