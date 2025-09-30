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

function B(e) {
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

function E(e, t) {
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
let G = (0, Chunk313201.hQ)(),
  Y = (0, Chunk313201.hQ)(),
  H = (0, Chunk313201.hQ)();

function M(e) {
  let {
    text: t,
    onChange: A,
    value: n,
    disabled: a,
    warning: i
  } = e, o = (0, v.Dt)(), s = a ? "text-muted" : "text-default";
  return (0, r.jsxs)("label", {
    className: l()(D.benefitToggleContainer, {
      [D.disabled]: a
    }),
    htmlFor: o,
    children: [(0, r.jsx)(f.Text, {
      variant: "text-sm/medium",
      color: s,
      children: t
    }), null != i && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(f.LZC, {
        size: 4,
        horizontal: true
      }), i]
    }), (0, r.jsx)(f.LZC, {
      size: 16,
      horizontal: true
    }), (0, r.jsx)(g.T2, {
      onChange: A,
      checked: n,
      disabled: a,
      id: o
    })]
  })
}

function J(e, t) {
  return e.filter(e => {
    let {
      value: A,
      label: r
    } = e;
    return A.toString().includes(t) || r.includes(t)
  })
}

function _(e) {
  let {
    guildId: t,
    selectedPriceTier: A,
    setPriceTier: a,
    label: l,
    errorMessage: i
  } = e, {
    priceTiers: o
  } = (0, q.R)(t, R.RG5.GUILD_PRODUCTS), s = n.useMemo(() => (null != o ? o : null != A ? [A] : []).map(e => ({
    value: e,
    label: (0, V.T4)(e, R.pKx.USD)
  })), [o, A]);
  return (0, r.jsx)(f.VcW, {
    label: l,
    errorMessage: i,
    value: A,
    placeholder: k.intl.string(k.t.aI4J5O),
    maxVisibleItems: 5,
    options: s,
    onChange: a,
    filter: J,
    "aria-required": true
  })
}

function $(e) {
  var t, a, l, i, g, v, q, j, J, $, et, eA;
  let {
    guildId: er,
    productId: en,
    transitionState: ea,
    onClose: el
  } = e, [ei, eo] = n.useState(en), es = (0, d.e7)([y.Z], () => null == ei ? null : y.Z.getGuildProduct(ei), [ei]), ed = (0, d.e7)([y.Z], () => y.Z.getGuildProductsForGuild(er, {
    publishedOnly: true
  }).length, [er]), ec = (null == es ? true : es.published) === true, {
    application: eu
  } = (0, h.Z)(er, L.wW.GUILD_ROLE_SUBSCRIPTIONS), eg = N.M["0"], ef = x.QK.useSetting(), ep = (0, P.n)(), em = n.useCallback(() => {
    var e;
    return (null == es || null == (e = es.image_asset) ? true : e.application_id) == null ? eg.data : (0, O._W)(es.image_asset.application_id, es.image_asset, 600, ep && ef ? true : "webp")
  }, [eg, es, ep, ef]), {
    shouldRestrictUpdatingCreatorMonetizationSettings: eh
  } = (0, C.gX)(er);
  n.useEffect(() => {
    eh && (el(), (0, W.B)(k.intl.string(k.t.OLf3xs), k.t["90LBVl"]))
  }, [eh, el]);
  let [ev, eq] = n.useState(null != (l = null == es ? true : es.name) ? l : ""), [eb, eC] = n.useState(null != (i = null == es ? true : es.description) ? i : ""), [ej, ex] = n.useState(null != (g = null == es ? true : es.price_tier) ? g : true), [eU, eV] = n.useState(em), [eO, eP] = n.useState(null != (v = null == es || null == (t = es.image_asset) ? true : t.filename) ? v : eg.name), [eF, ey] = n.useState(false), [eI, eN] = n.useState(), eT = n.useMemo(() => null != ej ? (0, V.T4)(ej, R.pKx.USD) : true, [ej]), [eK, eZ] = n.useState(true), {
    changesSaving: eW,
    saveError: eX,
    saveProductWithAttachments: eQ,
    hasUnsavedAttachmentChanges: ez,
    cancelUnusedUploads: eS
  } = (0, F.P)(), ew = (null == es ? true : es.attachments) != null && (null == es ? true : es.attachments.length) > 0, eR = null != eX ? eX : eI, eL = null != eW && "published" in eW, ek = null != eW && !eL, eD = null != (q = null == es ? true : es.role_id) ? q : null, [eB, eE] = n.useState(), eG = null != eB || null != eD, eY = (0, d.e7)([U.Z], () => null != eD && null !== eB ? U.Z.getRole(er, eD) : null != eB ? eB : true, [eB, eD, er]), eH = "";
  eG && eK ? eH = k.intl.string(k.t.ih4QMT) : eG ? eH = k.intl.string(k.t.o9xphY) : eK && (eH = k.intl.string(k.t.DWYJub));
  let eM = () => {
      eZ(false), eS()
    },
    [eJ, e_] = n.useState(),
    {
      changes: e$,
      hasUnsavedChanges: e0,
      canSaveForDraft: e1,
      canSaveForPublished: e3,
      canPublishOrUnpublish: e9
    } = n.useMemo(() => (0, I.fG)({
      guildProductListing: es,
      name: ev,
      priceTier: ej,
      description: eb,
      image: eU,
      imageName: eO,
      isImageChanged: eF,
      newRoleParams: eB,
      hasSavedAttachments: ew,
      hasUnsavedAttachmentChanges: ez
    }), [es, ev, ej, eb, eU, eO, eF, eB, ew, ez]),
    e6 = n.useMemo(() => e0 || null == eJ || "publish" === eJ || null != eR ? null : (0, r.jsx)(f.oXn, {
      className: D.successNotice,
      children: (0, r.jsx)(m.Z, {
        message: (0, r.jsxs)("div", {
          className: D.successNoticeMessage,
          children: [(0, r.jsx)(f.owK, {
            size: "md",
            color: s.Z.BUTTON_POSITIVE_BACKGROUND,
            secondaryColor: s.Z.WHITE
          }), (0, r.jsx)(f.Text, {
            variant: "text-md/medium",
            children: "draft" === eJ ? k.intl.string(k.t["3Rv4MD"]) : "update_publish" === eJ ? k.intl.string(k.t["8fPiBw"]) : k.intl.string(k.t["3LUFnJ"])
          })]
        }),
        onReset: () => e_(true),
        onResetText: k.intl.string(k.t.T6QuWV)
      })
    }), [eR, e0, eJ]),
    e7 = n.useCallback(() => {
      e0 ? (0, Z.Z)({
        title: k.intl.string(k.t.FVDhIS),
        body: k.intl.string(k.t.Hgdhwc),
        cta: k.intl.string(k.t.h0bti4),
        closeLabel: k.intl.string(k.t["+WYo0t"]),
        onConfirm: () => {
          el()
        }
      }) : el()
    }, [el, e0]);
  n.useEffect(() => {
    (0, f.oav)(w.Yz, e => (0, r.jsx)(ee, B({
      guildId: er,
      productId: ei
    }, e)), e7)
  }, [er, e7, ei]);
  let e8 = async e => {
    let t = (0, I.pM)({
      newRoleParams: eB
    });
    if (eN(t), null != t) return;
    let A = await eQ(e);
    if (ey(false), null != A) {
      if (null != e.name && eq(A.name), null != e.description && eC(A.description), null != eB) {
        let e = A.role_id;
        o()(null != e, "Cannot update role without role ID"), await p.Z.updateRole(er, e, eB)
      }
      eE(true), eo(A.id), "published" in e && true === e.published && el()
    }
  };
  n.useEffect(() => {
    if (null != eR) {
      var e;
      (0, X.V)(eR, er, null == eu || null == (e = eu.team) ? true : e.id)
    }
  }, [eR, er, eu]), n.useEffect(() => {
    e0 && e_(true)
  }, [e0]);
  let e2 = n.useRef(null),
    e5 = !e9 || !ec && ed >= w.dD;
  return (0, r.jsxs)(f.Y0X, {
    transitionState: ea,
    size: f.CgR.DYNAMIC,
    className: D.modalRoot,
    "aria-labelledby": G,
    parentComponent: "GuildProductEditModal",
    "data-migration-pending": true,
    children: [(0, r.jsxs)(f.xBx, {
      className: D.modalHeader,
      separator: false,
      "data-migration-pending": true,
      children: [(0, r.jsxs)("div", {
        className: D.headerText,
        children: [(0, r.jsx)(f.X6q, {
          id: G,
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: k.intl.string(k.t.DnNl1d)
        }), (0, r.jsx)(f.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: k.intl.string(k.t["Tu7f+f"])
        })]
      }), (0, r.jsx)(f.olH, {
        onClick: e7,
        className: D.__invalid_modalCloseButton,
        "data-migration-pending": true
      })]
    }), (0, r.jsxs)(f.hzk, {
      className: D.modalContent,
      scrollbarType: "none",
      "data-migration-pending": true,
      children: [(0, r.jsx)(f.zJl, {
        children: (0, r.jsxs)("div", {
          className: D.productFieldsSection,
          ref: e2,
          children: [(0, r.jsx)(f.oil, {
            label: k.intl.string(k.t.Hsk7xc),
            error: null == eR ? true : eR.getFirstFieldErrorMessage("name"),
            value: ev,
            onChange: eq,
            id: Y,
            maxLength: 100,
            placeholder: k.intl.string(k.t["/BiYSE"]),
            required: true
          }), (0, r.jsx)(b.Z, {
            label: k.intl.string(k.t.QdKLyc),
            errorMessage: null != (j = null == eR ? true : eR.getFirstFieldErrorMessage("description")) ? j : true,
            id: H,
            className: D.descriptionArea,
            value: eb,
            onChange: eC,
            maxLength: 1500,
            placeholder: k.intl.string(k.t.BFwyur),
            showCharacterCount: eb.length > 0,
            parentModalKey: w.Yz,
            required: true
          }), (0, r.jsx)(_, {
            label: k.intl.string(k.t["CAY/vr"]),
            errorMessage: null != (J = null == eR ? true : eR.getFirstFieldErrorMessage("price_tier")) ? J : true,
            guildId: er,
            selectedPriceTier: ej,
            setPriceTier: ex
          }), (0, r.jsx)(f.NIc, {
            label: k.intl.string(k.t["sqXj6+"]),
            errorMessage: null != ($ = null == eR ? true : eR.getFirstFieldErrorMessage("image")) ? $ : true,
            description: k.intl.string(k.t.yOU4Vl),
            children: (0, r.jsx)(Q.Z, {
              presetImages: N.M,
              radioGroupAriaLabel: k.intl.string(k.t.fKzQj4),
              image: eU,
              imageName: eO,
              savedImageName: null == es || null == (a = es.image_asset) ? true : a.filename,
              onChange: (e, t) => {
                if (null != e) {
                  var A;
                  eV(e), eP(t), ey(e.startsWith("data:") || t !== (null == es || null == (A = es.image_asset) ? true : A.filename))
                }
              }
            })
          }), eK ? (0, r.jsx)(f.NIc, {
            label: k.intl.string(k.t.zLrtkJ),
            errorMessage: null != (et = null == eR ? true : eR.getFirstFieldErrorMessage("attachments")) ? et : true,
            children: (0, r.jsx)(K.s, {
              onFileAdded: () => {
                var e;
                null == (e = e2.current) || e.scrollIntoView({
                  behavior: "smooth",
                  block: "end"
                })
              }
            })
          }) : null, eG ? (0, r.jsx)(S.ZP, {
            error: null != (eA = null == eR ? true : eR.getFirstFieldErrorMessage(I.NB)) ? eA : true,
            newRoleParams: eB,
            setNewRoleParams: eE,
            guildId: er,
            listingRoleId: eD,
            productId: ei
          }) : null]
        })
      }), (0, r.jsx)("div", {
        className: D.horizontalSeparator
      }), (0, r.jsx)(f.zJl, {
        children: (0, r.jsxs)("div", {
          className: D.productPreview,
          children: [(0, r.jsx)(z.Z, {
            disabled: e5,
            disabledTooltip: ec ? k.intl.string(k.t["0NQ00t"]) : ed >= w.dD ? k.intl.format(k.t.IqWPVl, {
              maxProducts: w.dD
            }) : k.intl.string(k.t["Ax89/f"]),
            published: ec,
            onClick: () => {
              o()(e9, "Attempting to publish/unpublish when not allowed"), e_(ec ? "unpublish" : "publish"), e8(E(B({}, e$), {
                published: !ec
              }))
            },
            submitting: eL
          }), (0, r.jsx)("div", {
            className: D.verticalSeparator
          }), (0, r.jsx)(f.X6q, {
            variant: "text-xs/bold",
            color: "header-secondary",
            className: D.previewHeading,
            children: k.intl.string(k.t["6I7nQU"])
          }), (0, r.jsx)(f.LZC, {
            size: 4
          }), (0, r.jsx)(f.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: k.intl.string(k.t.Oq4dfX)
          }), (0, r.jsx)(f.LZC, {
            size: 16
          }), (0, r.jsx)(T.Z, {
            imageUrl: eU,
            name: "" === ev ? k.intl.string(k.t.EmqIws) : ev,
            description: "" === eb ? k.intl.string(k.t["11NA2N"]) : eb,
            formattedPrice: eT,
            role: eY,
            productType: eH,
            ctaComponent: (0, r.jsx)(u.zxk, {
              text: k.intl.string(k.t.xUi3BA)
            }),
            cardWidth: 340,
            thumbnailHeight: 190
          })]
        })
      })]
    }), (0, r.jsx)(f.mzw, {
      "data-migration-pending": true,
      children: (0, r.jsxs)("div", {
        className: D.footerActionButtons,
        children: [(0, r.jsxs)("div", {
          className: D.footerActionLeftButtons,
          children: [(0, r.jsx)(M, {
            text: k.intl.string(k.t.YzGIVF),
            value: eG,
            onChange: e => {
              e ? eE((0, S.YP)()) : eE(true)
            },
            warning: null === eB ? (0, r.jsx)(S.aN, {}) : true,
            disabled: null != eD
          }), (0, r.jsx)(M, {
            text: k.intl.string(k.t.C6wP2d),
            value: eK,
            onChange: e => {
              e ? eZ(true) : ez ? (0, f.ZDy)(async () => {
                let {
                  ConfirmModal: e
                } = await Promise.resolve().then(A.bind(A, 481060));
                return t => (0, r.jsx)(e, E(B({}, t), {
                  header: k.intl.string(k.t["2Wihyc"]),
                  confirmText: k.intl.string(k.t.N86XcH),
                  cancelText: k.intl.string(k.t["ETE/oK"]),
                  onConfirm: eM,
                  children: (0, r.jsx)(f.Text, {
                    variant: "text-md/normal",
                    children: k.intl.string(k.t.ixRBLi)
                  })
                }))
              }) : eM()
            },
            disabled: ew
          })]
        }), (0, r.jsx)("div", {
          className: D.footerActionRightButtons,
          children: ec ? (0, r.jsx)(u.zxk, {
            variant: "secondary",
            text: k.intl.string(k.t.XYBEaW),
            disabled: !e3,
            loading: ek,
            onClick: () => {
              o()(e3, "cannot save changes for published product without adding all fields"), e_("update_publish"), e8(e$)
            }
          }) : (0, r.jsx)(u.zxk, {
            variant: "secondary",
            text: k.intl.string(k.t.ZCjwoa),
            disabled: !e1,
            loading: ek,
            onClick: () => {
              o()(e1, "cannot save changes without name or price tier"), e_("draft"), e8(e$)
            }
          })
        })]
      })
    }), (0, r.jsx)(c.W, {
      component: "div",
      className: D.successNoticeContainer,
      children: e6
    })]
  })
}

function ee(e) {
  var t;
  return (0, r.jsx)(F.W, {
    guildId: e.guildId,
    editSkuId: null != (t = e.productId) ? t : true,
    onFileSizeError: () => (0, j.Z)(w.ve),
    children: (0, r.jsx)($, B({}, e))
  })
}