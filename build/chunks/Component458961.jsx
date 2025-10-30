/** Chunk was on 73628 **/
/** chunk id: 458961, original params: e,t,A (module,exports,require) **/
require.d(exports, {
  default: () => _
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk831209 = require("./831209.js"),
  Chunk399606 = require("./399606.js"),
  Chunk215569 = require("./215569.js"),
  Chunk796027 = require("./796027.jsx"),
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
  Chunk707449 = require("./707449.js");

function D(e) {
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

function R(e, t) {
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
  } = e, o = (0, m.Dt)(), s = a ? "text-muted" : "text-default";
  return (0, n.jsxs)("label", {
    className: i()(L.benefitToggleContainer, {
      [L.disabled]: a
    }),
    htmlFor: o,
    children: [(0, n.jsx)(g.Text, {
      variant: "text-sm/medium",
      color: s,
      children: t
    }), null != l && (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(g.LZC, {
        size: 4,
        horizontal: true
      }), l]
    }), (0, n.jsx)(g.rsf, {
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
  } = (0, h.R)(t, z.RG5.GUILD_PRODUCTS), s = r.useMemo(() => (null != o ? o : null != A ? [A] : []).map(e => ({
    value: e,
    label: (0, j.T4)(e, z.pKx.USD)
  })), [o, A]);
  return (0, n.jsx)(g.VcW, {
    label: i,
    errorMessage: l,
    value: A,
    placeholder: B.intl.string(B.t.aI4J5H),
    maxVisibleItems: 5,
    options: s,
    onChange: a,
    filter: H,
    "aria-required": true
  })
}

function J(e) {
  var t, a, i, l, m, h, b, H, J, $, ee, et;
  let {
    guildId: eA,
    productId: en,
    transitionState: er,
    onClose: ea
  } = e, [ei, el] = r.useState(en), eo = (0, d.e7)([P.Z], () => null == ei ? null : P.Z.getGuildProduct(ei), [ei]), es = (0, d.e7)([P.Z], () => P.Z.getGuildProductsForGuild(eA, {
    publishedOnly: true
  }).length, [eA]), ed = (null == eo ? true : eo.published) === true, {
    application: eu
  } = (0, p.Z)(eA, w.wW.GUILD_ROLE_SUBSCRIPTIONS), ec = y.M["0"], eg = C.QK.useSetting(), ef = (0, x.n)(), ep = r.useCallback(() => {
    var e;
    return (null == eo || null == (e = eo.image_asset) ? true : e.application_id) == null ? ec.data : (0, V._W)(eo.image_asset.application_id, eo.image_asset, 600, ef && eg ? true : "webp")
  }, [ec, eo, ef, eg]), {
    shouldRestrictUpdatingCreatorMonetizationSettings: em
  } = (0, q.gX)(eA);
  r.useEffect(() => {
    em && (ea(), (0, T.B)(B.intl.string(B.t.OLf3xn), B.t["90LBVr"]))
  }, [em, ea]);
  let [eh, ev] = r.useState(null != (i = null == eo ? true : eo.name) ? i : ""), [eq, eb] = r.useState(null != (l = null == eo ? true : eo.description) ? l : ""), [eC, eU] = r.useState(null != (m = null == eo ? true : eo.price_tier) ? m : true), [ej, eV] = r.useState(ep), [ex, eO] = r.useState(null != (h = null == eo || null == (t = eo.image_asset) ? true : t.filename) ? h : ec.name), [eP, eF] = r.useState(false), [ey, eI] = r.useState(), eN = r.useMemo(() => null != eC ? (0, j.T4)(eC, z.pKx.USD) : true, [eC]), [eK, eT] = r.useState(true), {
    changesSaving: eZ,
    saveError: eW,
    saveProductWithAttachments: eX,
    hasUnsavedAttachmentChanges: eQ,
    cancelUnusedUploads: eS
  } = (0, O.P)(), ez = (null == eo ? true : eo.attachments) != null && (null == eo ? true : eo.attachments.length) > 0, ew = null != eW ? eW : ey, eB = null != eZ && "published" in eZ, eL = null != eZ && !eB, eD = null != (b = null == eo ? true : eo.role_id) ? b : null, [eR, ek] = r.useState(), eE = null != eR || null != eD, eG = (0, d.e7)([U.Z], () => null != eD && null !== eR ? U.Z.getRole(eA, eD) : null != eR ? eR : true, [eR, eD, eA]), eY = "";
  eE && eK ? eY = B.intl.string(B.t.ih4QMU) : eE ? eY = B.intl.string(B.t.o9xphc) : eK && (eY = B.intl.string(B.t.DWYJua));
  let eH = () => {
      eT(false), eS()
    },
    [eM, eJ] = r.useState(),
    {
      changes: e_,
      hasUnsavedChanges: e$,
      canSaveForDraft: e0,
      canSaveForPublished: e1,
      canPublishOrUnpublish: e3
    } = r.useMemo(() => (0, F.fG)({
      guildProductListing: eo,
      name: eh,
      priceTier: eC,
      description: eq,
      image: ej,
      imageName: ex,
      isImageChanged: eP,
      newRoleParams: eR,
      hasSavedAttachments: ez,
      hasUnsavedAttachmentChanges: eQ
    }), [eo, eh, eC, eq, ej, ex, eP, eR, ez, eQ]),
    e9 = r.useMemo(() => e$ || null == eM || "publish" === eM || null != ew ? null : (0, n.jsx)(g.oXn, {
      className: L.successNotice,
      children: (0, n.jsx)(c.Z, {
        message: (0, n.jsxs)("div", {
          className: L.successNoticeMessage,
          children: [(0, n.jsx)(g.owK, {
            size: "md",
            color: s.Z.BUTTON_POSITIVE_BACKGROUND,
            secondaryColor: s.Z.WHITE
          }), (0, n.jsx)(g.Text, {
            variant: "text-md/medium",
            children: "draft" === eM ? B.intl.string(B.t["3Rv4MB"]) : "update_publish" === eM ? B.intl.string(B.t["8fPiB3"]) : B.intl.string(B.t["3LUFnI"])
          })]
        }),
        onReset: () => eJ(true),
        onResetText: B.intl.string(B.t.T6QuWe)
      })
    }), [ew, e$, eM]),
    e6 = r.useCallback(() => {
      e$ ? (0, K.Z)({
        title: B.intl.string(B.t.FVDhIW),
        body: B.intl.string(B.t.Hgdhwb),
        cta: B.intl.string(B.t["h0bti/"]),
        closeLabel: B.intl.string(B.t["+WYo0m"]),
        onConfirm: () => {
          ea()
        }
      }) : ea()
    }, [ea, e$]);
  r.useEffect(() => {
    (0, g.oav)(S.Yz, e => (0, n.jsx)(_, D({
      guildId: eA,
      productId: ei
    }, e)), e6)
  }, [eA, e6, ei]);
  let e8 = async e => {
    let t = (0, F.pM)({
      newRoleParams: eR
    });
    if (eI(t), null != t) return;
    let A = await eX(e);
    if (eF(false), null != A) {
      if (null != e.name && ev(A.name), null != e.description && eb(A.description), null != eR) {
        let e = A.role_id;
        o()(null != e, "Cannot update role without role ID"), await f.Z.updateRole(eA, e, eR)
      }
      ek(true), el(A.id), "published" in e && true === e.published && ea()
    }
  };
  r.useEffect(() => {
    if (null != ew) {
      var e;
      (0, Z.V)(ew, eA, null == eu || null == (e = eu.team) ? true : e.id)
    }
  }, [ew, eA, eu]), r.useEffect(() => {
    e$ && eJ(true)
  }, [e$]);
  let e7 = r.useRef(null),
    e2 = !e3 || !ed && es >= S.dD;
  return (0, n.jsxs)(g.Y0X, {
    transitionState: er,
    size: g.CgR.DYNAMIC,
    className: L.modalRoot,
    "aria-labelledby": k,
    parentComponent: "GuildProductEditModal",
    "data-migration-pending": true,
    children: [(0, n.jsxs)(g.xBx, {
      className: L.modalHeader,
      separator: false,
      "data-migration-pending": true,
      children: [(0, n.jsxs)("div", {
        className: L.headerText,
        children: [(0, n.jsx)(g.Heading, {
          id: k,
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: B.intl.string(B.t.DnNl1T)
        }), (0, n.jsx)(g.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: B.intl.string(B.t["Tu7f+f"])
        })]
      }), (0, n.jsx)(g.olH, {
        onClick: e6,
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
          ref: e7,
          children: [(0, n.jsx)(g.oil, {
            label: B.intl.string(B.t.Hsk7xT),
            error: null == ew ? true : ew.getFirstFieldErrorMessage("name"),
            value: eh,
            onChange: ev,
            id: E,
            maxLength: 100,
            placeholder: B.intl.string(B.t["/BiYSO"]),
            required: true
          }), (0, n.jsx)(v.Z, {
            label: B.intl.string(B.t.QdKLyW),
            errorMessage: null != (H = null == ew ? true : ew.getFirstFieldErrorMessage("description")) ? H : true,
            id: G,
            className: L.descriptionArea,
            value: eq,
            onChange: eb,
            maxLength: 1500,
            placeholder: B.intl.string(B.t.BFwyum),
            showCharacterCount: eq.length > 0,
            parentModalKey: S.Yz,
            required: true
          }), (0, n.jsx)(M, {
            label: B.intl.string(B.t["CAY/vh"]),
            errorMessage: null != (J = null == ew ? true : ew.getFirstFieldErrorMessage("price_tier")) ? J : true,
            guildId: eA,
            selectedPriceTier: eC,
            setPriceTier: eU
          }), (0, n.jsx)(g.gNt, {
            label: B.intl.string(B.t.sqXj60),
            errorMessage: null != ($ = null == ew ? true : ew.getFirstFieldErrorMessage("image")) ? $ : true,
            description: B.intl.string(B.t.yOU4Vm),
            children: (0, n.jsx)(W.Z, {
              presetImages: y.M,
              radioGroupAriaLabel: B.intl.string(B.t.fKzQj0),
              image: ej,
              imageName: ex,
              savedImageName: null == eo || null == (a = eo.image_asset) ? true : a.filename,
              onChange: (e, t) => {
                if (null != e) {
                  var A;
                  eV(e), eO(t), eF(e.startsWith("data:") || t !== (null == eo || null == (A = eo.image_asset) ? true : A.filename))
                }
              }
            })
          }), eK ? (0, n.jsx)(g.gNt, {
            label: B.intl.string(B.t.zLrtkN),
            errorMessage: null != (ee = null == ew ? true : ew.getFirstFieldErrorMessage("attachments")) ? ee : true,
            children: (0, n.jsx)(N.s, {
              onFileAdded: () => {
                var e;
                null == (e = e7.current) || e.scrollIntoView({
                  behavior: "smooth",
                  block: "end"
                })
              }
            })
          }) : null, eE ? (0, n.jsx)(Q.ZP, {
            error: null != (et = null == ew ? true : ew.getFirstFieldErrorMessage(F.NB)) ? et : true,
            newRoleParams: eR,
            setNewRoleParams: ek,
            guildId: eA,
            listingRoleId: eD,
            productId: ei
          }) : null]
        })
      }), (0, n.jsx)("div", {
        className: L.horizontalSeparator
      }), (0, n.jsx)(g.zJl, {
        children: (0, n.jsxs)("div", {
          className: L.productPreview,
          children: [(0, n.jsx)(X.Z, {
            disabled: e2,
            disabledTooltip: ed ? B.intl.string(B.t["0NQ00t"]) : es >= S.dD ? B.intl.format(B.t.IqWPVt, {
              maxProducts: S.dD
            }) : B.intl.string(B.t["Ax89/c"]),
            published: ed,
            onClick: () => {
              o()(e3, "Attempting to publish/unpublish when not allowed"), eJ(ed ? "unpublish" : "publish"), e8(R(D({}, e_), {
                published: !ed
              }))
            },
            submitting: eB
          }), (0, n.jsx)("div", {
            className: L.verticalSeparator
          }), (0, n.jsx)(g.Heading, {
            variant: "text-xs/bold",
            color: "header-secondary",
            className: L.previewHeading,
            children: B.intl.string(B.t["6I7nQT"])
          }), (0, n.jsx)(g.LZC, {
            size: 4
          }), (0, n.jsx)(g.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: B.intl.string(B.t.Oq4dfU)
          }), (0, n.jsx)(g.LZC, {
            size: 16
          }), (0, n.jsx)(I.Z, {
            imageUrl: ej,
            name: "" === eh ? B.intl.string(B.t.EmqIwl) : eh,
            description: "" === eq ? B.intl.string(B.t["11NA2L"]) : eq,
            formattedPrice: eN,
            role: eG,
            productType: eY,
            ctaComponent: (0, n.jsx)(g.Button, {
              text: B.intl.string(B.t.xUi3BL)
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
          children: [(0, n.jsx)(Y, {
            text: B.intl.string(B.t.YzGIVF),
            value: eE,
            onChange: e => {
              e ? ek((0, Q.YP)()) : ek(true)
            },
            warning: null === eR ? (0, n.jsx)(Q.aN, {}) : true,
            disabled: null != eD
          }), (0, n.jsx)(Y, {
            text: B.intl.string(B.t.C6wP2Q),
            value: eK,
            onChange: e => {
              e ? eT(true) : eQ ? (0, g.ZDy)(async () => {
                let {
                  ConfirmModal: e
                } = await Promise.resolve().then(A.bind(A, 481060));
                return t => (0, n.jsx)(e, R(D({}, t), {
                  header: B.intl.string(B.t["2WihyY"]),
                  confirmText: B.intl.string(B.t.N86XcP),
                  cancelText: B.intl.string(B.t["ETE/oC"]),
                  onConfirm: eH,
                  children: (0, n.jsx)(g.Text, {
                    variant: "text-md/normal",
                    children: B.intl.string(B.t.ixRBLh)
                  })
                }))
              }) : eH()
            },
            disabled: ez
          })]
        }), (0, n.jsx)("div", {
          className: L.footerActionRightButtons,
          children: ed ? (0, n.jsx)(g.Button, {
            variant: "secondary",
            text: B.intl.string(B.t.XYBEaV),
            disabled: !e1,
            loading: eL,
            onClick: () => {
              o()(e1, "cannot save changes for published product without adding all fields"), eJ("update_publish"), e8(e_)
            }
          }) : (0, n.jsx)(g.Button, {
            variant: "secondary",
            text: B.intl.string(B.t.ZCjwob),
            disabled: !e0,
            loading: eL,
            onClick: () => {
              o()(e0, "cannot save changes without name or price tier"), eJ("draft"), e8(e_)
            }
          })
        })]
      })
    }), (0, n.jsx)(u.W, {
      component: "div",
      className: L.successNoticeContainer,
      children: e9
    })]
  })
}

function _(e) {
  var t;
  return (0, n.jsx)(O.W, {
    guildId: e.guildId,
    editSkuId: null != (t = e.productId) ? t : true,
    onFileSizeError: () => (0, b.Z)(S.ve),
    children: (0, n.jsx)(J, D({}, e))
  })
}