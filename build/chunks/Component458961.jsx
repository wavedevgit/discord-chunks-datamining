/** Chunk was on 73628 **/
/** chunk id: 458961, original params: e,A,t (module,exports,require) **/
require.d(exports, {
  default: () => $
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
  Chunk809659 = require("./809659.jsx"),
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
    disabled: a,
    warning: i
  } = e, o = (0, q.Dt)(), s = a ? "text-muted" : "text-default";
  return (0, n.jsxs)("label", {
    className: l()(L.benefitToggleContainer, {
      [L.disabled]: a
    }),
    htmlFor: o,
    children: [(0, n.jsx)(g.Text, {
      variant: "text-sm/medium",
      color: s,
      children: A
    }), null != i && (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(g.LZC, {
        size: 4,
        horizontal: true
      }), i]
    }), (0, n.jsx)(g.LZC, {
      size: 16,
      horizontal: true
    }), (0, n.jsx)(g.rsf, {
      onChange: t,
      checked: r,
      disabled: a,
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
    setPriceTier: a
  } = e, {
    priceTiers: l
  } = (0, h.R)(A, R.RG5.GUILD_PRODUCTS), i = r.useMemo(() => (null != l ? l : null != t ? [t] : []).map(e => ({
    value: e,
    label: (0, x.T4)(e, R.pKx.USD)
  })), [l, t]);
  return (0, n.jsx)(g.VcW, {
    value: t,
    placeholder: B.intl.string(B.t.aI4J5O),
    maxVisibleItems: 5,
    options: i,
    onChange: a,
    filter: M,
    "aria-required": true
  })
}

function _(e) {
  var A, a, l, i, q, h, v, M;
  let {
    guildId: _,
    productId: ee,
    transitionState: eA,
    onClose: et
  } = e, [en, er] = r.useState(ee), ea = (0, d.e7)([F.Z], () => null == en ? null : F.Z.getGuildProduct(en), [en]), el = (null == ea ? true : ea.published) === true, {
    application: ei
  } = (0, m.Z)(_, w.wW.GUILD_ROLE_SUBSCRIPTIONS), eo = K.M["0"], es = U.QK.useSetting(), ed = (0, P.n)(), ec = r.useCallback(() => {
    var e;
    return (null == ea || null == (e = ea.image_asset) ? true : e.application_id) == null ? eo.data : (0, V._W)(ea.image_asset.application_id, ea.image_asset, 600, ed && es ? true : "webp")
  }, [eo, ea, ed, es]), {
    shouldRestrictUpdatingCreatorMonetizationSettings: eu
  } = (0, b.gX)(_);
  r.useEffect(() => {
    eu && (et(), (0, X.B)(B.intl.string(B.t.OLf3xs), B.t["90LBVl"]))
  }, [eu, et]);
  let [eg, ef] = r.useState(null != (l = null == ea ? true : ea.name) ? l : ""), [ep, em] = r.useState(null != (i = null == ea ? true : ea.description) ? i : ""), [eq, eh] = r.useState(null != (q = null == ea ? true : ea.price_tier) ? q : true), [eC, eb] = r.useState(ec), [ev, eU] = r.useState(null != (h = null == ea || null == (A = ea.image_asset) ? true : A.filename) ? h : eo.name), [ej, ex] = r.useState(false), [eV, eP] = r.useState(), eO = r.useMemo(() => null != eq ? (0, x.T4)(eq, R.pKx.USD) : true, [eq]), [eF, eI] = r.useState(true), {
    changesSaving: eK,
    saveError: ey,
    saveProductWithAttachments: eN,
    hasUnsavedAttachmentChanges: eT,
    cancelUnusedUploads: eX
  } = (0, O.P)(), eZ = (null == ea ? true : ea.attachments) != null && (null == ea ? true : ea.attachments.length) > 0, eW = null != ey ? ey : eV, eQ = null != eK && "published" in eK, ez = null != eK && !eQ, eS = null != (v = null == ea ? true : ea.role_id) ? v : null, [eR, ew] = r.useState(), eB = null != eR || null != eS, eL = (0, d.e7)([j.Z], () => null != eS && null !== eR ? j.Z.getRole(_, eS) : null != eR ? eR : true, [eR, eS, _]), ek = "";
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
      guildProductListing: ea,
      name: eg,
      priceTier: eq,
      description: ep,
      image: eC,
      imageName: ev,
      isImageChanged: ej,
      newRoleParams: eR,
      hasSavedAttachments: eZ,
      hasUnsavedAttachmentChanges: eT
    }), [ea, eg, eq, ep, eC, ev, ej, eR, eZ, eT]),
    e$ = r.useMemo(() => eH || null == eE || "publish" === eE || null != eW ? null : (0, n.jsx)(g.oXn, {
      className: L.successNotice,
      children: (0, n.jsx)(p.Z, {
        message: (0, n.jsxs)("div", {
          className: L.successNoticeMessage,
          children: [(0, n.jsx)(g.owK, {
            size: "md",
            color: s.Z.BUTTON_POSITIVE_BACKGROUND,
            secondaryColor: s.Z.WHITE
          }), (0, n.jsx)(g.Text, {
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
    (0, g.oav)(S.Yz, e => (0, n.jsx)($, k({
      guildId: _,
      productId: en
    }, e)), e0)
  }, [_, e0, en]);
  let e1 = async e => {
    let A = (0, I.pM)({
      newRoleParams: eR
    });
    if (eP(A), null != A) return;
    let t = await eN(e);
    if (ex(false), null != t) {
      if (null != e.name && ef(t.name), null != e.description && em(t.description), null != eR) {
        let e = t.role_id;
        o()(null != e, "Cannot update role without role ID"), await f.Z.updateRole(_, e, eR)
      }
      ew(true), er(t.id), "published" in e && true === e.published && et()
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
  let e9 = r.useRef(null);
  return (0, n.jsxs)(g.Y0X, {
    transitionState: eA,
    size: g.CgR.DYNAMIC,
    className: L.modalRoot,
    "aria-labelledby": E,
    parentComponent: "GuildProductEditModal",
    "data-migration-pending": true,
    children: [(0, n.jsxs)(g.xBx, {
      className: L.modalHeader,
      separator: false,
      "data-migration-pending": true,
      children: [(0, n.jsxs)("div", {
        className: L.headerText,
        children: [(0, n.jsx)(g.X6q, {
          id: E,
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: B.intl.string(B.t.DnNl1d)
        }), (0, n.jsx)(g.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: B.intl.string(B.t["Tu7f+f"])
        })]
      }), (0, n.jsx)(g.olH, {
        onClick: e0,
        className: L.__invalid_modalCloseButton,
        "data-migration-pending": true
      })]
    }), (0, n.jsxs)(g.hzk, {
      className: L.modalContent,
      scrollbarType: "none",
      "data-migration-pending": true,
      children: [(0, n.jsx)(g.zJl, {
        children: (0, n.jsxs)("div", {
          className: L.productFieldsSection,
          ref: e9,
          children: [(0, n.jsx)(g.xJW, {
            title: B.intl.string(B.t.Hsk7xc),
            tag: "label",
            htmlFor: Y,
            error: null == eW ? true : eW.getFirstFieldErrorMessage("name"),
            children: (0, n.jsx)(g.oil, {
              value: eg,
              onChange: ef,
              id: Y,
              maxLength: 100,
              placeholder: B.intl.string(B.t["/BiYSE"]),
              required: true
            })
          }), (0, n.jsx)(g.xJW, {
            title: B.intl.string(B.t.QdKLyc),
            tag: "label",
            error: null == eW ? true : eW.getFirstFieldErrorMessage("description"),
            htmlFor: D,
            children: (0, n.jsx)(C.Z, {
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
          }), (0, n.jsx)(g.xJW, {
            title: B.intl.string(B.t["CAY/vr"]),
            tag: "label",
            error: null == eW ? true : eW.getFirstFieldErrorMessage("price_tier"),
            children: (0, n.jsx)(J, {
              guildId: _,
              selectedPriceTier: eq,
              setPriceTier: eh
            })
          }), (0, n.jsxs)(g.xJW, {
            title: B.intl.string(B.t["sqXj6+"]),
            tag: "label",
            error: null == eW ? true : eW.getFirstFieldErrorMessage("image"),
            titleClassName: L.thumbnailLabel,
            children: [(0, n.jsx)(g.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: B.intl.string(B.t.yOU4Vl)
            }), (0, n.jsx)(g.LZC, {
              size: 10
            }), (0, n.jsx)(W.Z, {
              presetImages: K.M,
              radioGroupAriaLabel: B.intl.string(B.t.fKzQj4),
              image: eC,
              imageName: ev,
              savedImageName: null == ea || null == (a = ea.image_asset) ? true : a.filename,
              onChange: (e, A) => {
                if (null != e) {
                  var t;
                  eb(e), eU(A), ex(e.startsWith("data:") || A !== (null == ea || null == (t = ea.image_asset) ? true : t.filename))
                }
              }
            })]
          }), eF ? (0, n.jsx)(g.xJW, {
            title: B.intl.string(B.t.zLrtkJ),
            error: null == eW ? true : eW.getFirstFieldErrorMessage("attachments"),
            children: (0, n.jsx)(N.s, {
              onFileAdded: () => {
                var e;
                null == (e = e9.current) || e.scrollIntoView({
                  behavior: "smooth",
                  block: "end"
                })
              }
            })
          }) : null, eB ? (0, n.jsx)(z.ZP, {
            error: null != (M = null == eW ? true : eW.getFirstFieldErrorMessage(I.NB)) ? M : true,
            newRoleParams: eR,
            setNewRoleParams: ew,
            guildId: _,
            listingRoleId: eS,
            productId: en
          }) : null]
        })
      }), (0, n.jsx)("div", {
        className: L.horizontalSeparator
      }), (0, n.jsx)(g.zJl, {
        children: (0, n.jsxs)("div", {
          className: L.productPreview,
          children: [(0, n.jsx)(Q.Z, {
            disabled: !e_,
            disabledTooltip: el ? B.intl.string(B.t["0NQ00t"]) : B.intl.string(B.t["Ax89/f"]),
            published: el,
            onClick: () => {
              o()(e_, "Attempting to publish/unpublish when not allowed"), eY(el ? "unpublish" : "publish"), e1(G(k({}, eD), {
                published: !el
              }))
            },
            submitting: eQ
          }), (0, n.jsx)("div", {
            className: L.verticalSeparator
          }), (0, n.jsx)(g.X6q, {
            variant: "text-xs/bold",
            color: "header-secondary",
            className: L.previewHeading,
            children: B.intl.string(B.t["6I7nQU"])
          }), (0, n.jsx)(g.LZC, {
            size: 4
          }), (0, n.jsx)(g.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: B.intl.string(B.t.Oq4dfX)
          }), (0, n.jsx)(g.LZC, {
            size: 16
          }), (0, n.jsx)(y.Z, {
            imageUrl: eC,
            name: "" === eg ? B.intl.string(B.t.EmqIws) : eg,
            description: "" === ep ? B.intl.string(B.t["11NA2N"]) : ep,
            formattedPrice: eO,
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
    }), (0, n.jsx)(g.mzw, {
      "data-migration-pending": true,
      children: (0, n.jsxs)("div", {
        className: L.footerActionButtons,
        children: [(0, n.jsxs)("div", {
          className: L.footerActionLeftButtons,
          children: [(0, n.jsx)(H, {
            text: B.intl.string(B.t.YzGIVF),
            value: eB,
            onChange: e => {
              e ? ew((0, z.YP)()) : ew(true)
            },
            warning: null === eR ? (0, n.jsx)(z.aN, {}) : true,
            disabled: null != eS
          }), (0, n.jsx)(H, {
            text: B.intl.string(B.t.C6wP2d),
            value: eF,
            onChange: e => {
              e ? eI(true) : eT ? (0, g.ZDy)(async () => {
                let {
                  ConfirmModal: e
                } = await Promise.resolve().then(t.bind(t, 481060));
                return A => (0, n.jsx)(e, G(k({}, A), {
                  header: B.intl.string(B.t["2Wihyc"]),
                  confirmText: B.intl.string(B.t.N86XcH),
                  cancelText: B.intl.string(B.t["ETE/oK"]),
                  onConfirm: eG,
                  children: (0, n.jsx)(g.Text, {
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
          children: el ? (0, n.jsx)(u.zx, {
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
  return (0, n.jsx)(O.W, {
    guildId: e.guildId,
    editSkuId: null != (A = e.productId) ? A : true,
    onFileSizeError: () => (0, v.Z)(S.ve),
    children: (0, n.jsx)(_, k({}, e))
  })
}