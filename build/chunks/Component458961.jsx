/** Chunk was on 73628 **/
/** chunk id: 458961, original params: A,e,t (module,exports,require) **/
require.d(exports, {
  default: () => AA
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

function G(A) {
  for (var e = 1; e < arguments.length; e++) {
    var t = null != arguments[e] ? arguments[e] : {},
      n = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(A) {
      return Object.getOwnPropertyDescriptor(t, A).enumerable
    }))), n.forEach(function(e) {
      var n;
      n = t[e], e in A ? Object.defineProperty(A, e, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : A[e] = n
    })
  }
  return A
}

function E(A, e) {
  return e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(e)) : (function(A, e) {
    var t = Object.keys(A);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(A);
      t.push.apply(t, n)
    }
    return t
  })(Object(e)).forEach(function(t) {
    Object.defineProperty(A, t, Object.getOwnPropertyDescriptor(e, t))
  }), A
}
let Y = (0, Chunk313201.hQ)(),
  D = (0, Chunk313201.hQ)(),
  H = (0, Chunk313201.hQ)();

function M(A) {
  let {
    text: e,
    onChange: t,
    value: r,
    disabled: l,
    warning: i
  } = A, o = (0, h.Dt)(), s = l ? "text-muted" : "text-default";
  return (0, n.jsxs)("label", {
    className: a()(k.benefitToggleContainer, {
      [k.disabled]: l
    }),
    htmlFor: o,
    children: [(0, n.jsx)(g.Text, {
      variant: "text-sm/medium",
      color: s,
      children: e
    }), null != i && (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(g.LZC, {
        size: 4,
        horizontal: true
      }), i]
    }), (0, n.jsx)(g.LZC, {
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

function J(A, e) {
  return A.filter(A => {
    let {
      value: t,
      label: n
    } = A;
    return t.toString().includes(e) || n.includes(e)
  })
}

function _(A) {
  let {
    guildId: e,
    selectedPriceTier: t,
    setPriceTier: l
  } = A, {
    priceTiers: a
  } = (0, b.R)(e, w.RG5.GUILD_PRODUCTS), i = r.useMemo(() => (null != a ? a : null != t ? [t] : []).map(A => ({
    value: A,
    label: (0, V.T4)(A, w.pKx.USD)
  })), [a, t]);
  return (0, n.jsx)(g.VcW, {
    value: t,
    placeholder: L.intl.string(L.t.aI4J5O),
    maxVisibleItems: 5,
    options: i,
    onChange: l,
    filter: J,
    "aria-required": true
  })
}

function $(A) {
  var e, l, a, i, f, h, b, U;
  let {
    guildId: J,
    productId: $,
    transitionState: Ae,
    onClose: At
  } = A, [An, Ar] = r.useState($), Al = (0, d.e7)([I.Z], () => null == An ? null : I.Z.getGuildProduct(An), [An]), Aa = (0, d.e7)([I.Z], () => I.Z.getGuildProductsForGuild(J, {
    publishedOnly: true
  }).length, [J]), Ai = (null == Al ? true : Al.published) === true, {
    application: Ao
  } = (0, q.Z)(J, B.wW.GUILD_ROLE_SUBSCRIPTIONS), As = y.M["0"], Ad = j.QK.useSetting(), Au = (0, O.n)(), Ac = r.useCallback(() => {
    var A;
    return (null == Al || null == (A = Al.image_asset) ? true : A.application_id) == null ? As.data : (0, P._W)(Al.image_asset.application_id, Al.image_asset, 600, Au && Ad ? true : "webp")
  }, [As, Al, Au, Ad]), {
    shouldRestrictUpdatingCreatorMonetizationSettings: Af
  } = (0, v.gX)(J);
  r.useEffect(() => {
    Af && (At(), (0, Z.B)(L.intl.string(L.t.OLf3xs), L.t["90LBVl"]))
  }, [Af, At]);
  let [Ag, Ap] = r.useState(null != (a = null == Al ? true : Al.name) ? a : ""), [Am, Aq] = r.useState(null != (i = null == Al ? true : Al.description) ? i : ""), [Ah, Ab] = r.useState(null != (f = null == Al ? true : Al.price_tier) ? f : true), [AC, Av] = r.useState(Ac), [AU, Aj] = r.useState(null != (h = null == Al || null == (e = Al.image_asset) ? true : e.filename) ? h : As.name), [Ax, AV] = r.useState(false), [AP, AO] = r.useState(), AF = r.useMemo(() => null != Ah ? (0, V.T4)(Ah, w.pKx.USD) : true, [Ah]), [AI, AK] = r.useState(true), {
    changesSaving: Ay,
    saveError: AN,
    saveProductWithAttachments: AT,
    hasUnsavedAttachmentChanges: AX,
    cancelUnusedUploads: AZ
  } = (0, F.P)(), AW = (null == Al ? true : Al.attachments) != null && (null == Al ? true : Al.attachments.length) > 0, AQ = null != AN ? AN : AP, Az = null != Ay && "published" in Ay, AS = null != Ay && !Az, AR = null != (b = null == Al ? true : Al.role_id) ? b : null, [Aw, AB] = r.useState(), AL = null != Aw || null != AR, Ak = (0, d.e7)([x.Z], () => null != AR && null !== Aw ? x.Z.getRole(J, AR) : null != Aw ? Aw : true, [Aw, AR, J]), AG = "";
  AL && AI ? AG = L.intl.string(L.t.ih4QMT) : AL ? AG = L.intl.string(L.t.o9xphY) : AI && (AG = L.intl.string(L.t.DWYJub));
  let AE = () => {
      AK(false), AZ()
    },
    [AY, AD] = r.useState(),
    {
      changes: AH,
      hasUnsavedChanges: AM,
      canSaveForDraft: AJ,
      canSaveForPublished: A_,
      canPublishOrUnpublish: A$
    } = r.useMemo(() => (0, K.fG)({
      guildProductListing: Al,
      name: Ag,
      priceTier: Ah,
      description: Am,
      image: AC,
      imageName: AU,
      isImageChanged: Ax,
      newRoleParams: Aw,
      hasSavedAttachments: AW,
      hasUnsavedAttachmentChanges: AX
    }), [Al, Ag, Ah, Am, AC, AU, Ax, Aw, AW, AX]),
    A0 = r.useMemo(() => AM || null == AY || "publish" === AY || null != AQ ? null : (0, n.jsx)(g.oXn, {
      className: k.successNotice,
      children: (0, n.jsx)(m.Z, {
        message: (0, n.jsxs)("div", {
          className: k.successNoticeMessage,
          children: [(0, n.jsx)(g.owK, {
            size: "md",
            color: s.Z.BUTTON_POSITIVE_BACKGROUND,
            secondaryColor: s.Z.WHITE
          }), (0, n.jsx)(g.Text, {
            variant: "text-md/medium",
            children: "draft" === AY ? L.intl.string(L.t["3Rv4MD"]) : "update_publish" === AY ? L.intl.string(L.t["8fPiBw"]) : L.intl.string(L.t["3LUFnJ"])
          })]
        }),
        onReset: () => AD(true),
        onResetText: L.intl.string(L.t.T6QuWV)
      })
    }), [AQ, AM, AY]),
    A1 = r.useCallback(() => {
      AM ? (0, X.Z)({
        title: L.intl.string(L.t.FVDhIS),
        body: L.intl.string(L.t.Hgdhwc),
        cta: L.intl.string(L.t.h0bti4),
        closeLabel: L.intl.string(L.t["+WYo0t"]),
        onConfirm: () => {
          At()
        }
      }) : At()
    }, [At, AM]);
  r.useEffect(() => {
    (0, g.oav)(R.Yz, A => (0, n.jsx)(AA, G({
      guildId: J,
      productId: An
    }, A)), A1)
  }, [J, A1, An]);
  let A3 = async A => {
    let e = (0, K.pM)({
      newRoleParams: Aw
    });
    if (AO(e), null != e) return;
    let t = await AT(A);
    if (AV(false), null != t) {
      if (null != A.name && Ap(t.name), null != A.description && Aq(t.description), null != Aw) {
        let A = t.role_id;
        o()(null != A, "Cannot update role without role ID"), await p.Z.updateRole(J, A, Aw)
      }
      AB(true), Ar(t.id), "published" in A && true === A.published && At()
    }
  };
  r.useEffect(() => {
    if (null != AQ) {
      var A;
      (0, W.V)(AQ, J, null == Ao || null == (A = Ao.team) ? true : A.id)
    }
  }, [AQ, J, Ao]), r.useEffect(() => {
    AM && AD(true)
  }, [AM]);
  let A9 = r.useRef(null),
    A6 = !A$ || !Ai && Aa >= R.dD;
  return (0, n.jsxs)(g.Y0X, {
    transitionState: Ae,
    size: g.CgR.DYNAMIC,
    className: k.modalRoot,
    "aria-labelledby": Y,
    parentComponent: "GuildProductEditModal",
    "data-migration-pending": true,
    children: [(0, n.jsxs)(g.xBx, {
      className: k.modalHeader,
      separator: false,
      "data-migration-pending": true,
      children: [(0, n.jsxs)("div", {
        className: k.headerText,
        children: [(0, n.jsx)(g.X6q, {
          id: Y,
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: L.intl.string(L.t.DnNl1d)
        }), (0, n.jsx)(g.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: L.intl.string(L.t["Tu7f+f"])
        })]
      }), (0, n.jsx)(g.olH, {
        onClick: A1,
        className: k.__invalid_modalCloseButton,
        "data-migration-pending": true
      })]
    }), (0, n.jsxs)(g.hzk, {
      className: k.modalContent,
      scrollbarType: "none",
      "data-migration-pending": true,
      children: [(0, n.jsx)(g.zJl, {
        children: (0, n.jsxs)("div", {
          className: k.productFieldsSection,
          ref: A9,
          children: [(0, n.jsx)(g.oil, {
            label: L.intl.string(L.t.Hsk7xc),
            error: null == AQ ? true : AQ.getFirstFieldErrorMessage("name"),
            value: Ag,
            onChange: Ap,
            id: D,
            maxLength: 100,
            placeholder: L.intl.string(L.t["/BiYSE"]),
            required: true
          }), (0, n.jsx)(g.xJW, {
            title: L.intl.string(L.t.QdKLyc),
            error: null == AQ ? true : AQ.getFirstFieldErrorMessage("description"),
            htmlFor: H,
            children: (0, n.jsx)(C.Z, {
              id: H,
              className: k.descriptionArea,
              value: Am,
              onChange: Aq,
              maxLength: 1500,
              placeholder: L.intl.string(L.t.BFwyur),
              showCharacterCount: Am.length > 0,
              parentModalKey: R.Yz,
              required: true
            })
          }), (0, n.jsx)(g.xJW, {
            title: L.intl.string(L.t["CAY/vr"]),
            error: null == AQ ? true : AQ.getFirstFieldErrorMessage("price_tier"),
            children: (0, n.jsx)(_, {
              guildId: J,
              selectedPriceTier: Ah,
              setPriceTier: Ab
            })
          }), (0, n.jsxs)(g.xJW, {
            title: L.intl.string(L.t["sqXj6+"]),
            error: null == AQ ? true : AQ.getFirstFieldErrorMessage("image"),
            titleClassName: k.thumbnailLabel,
            children: [(0, n.jsx)(g.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: L.intl.string(L.t.yOU4Vl)
            }), (0, n.jsx)(g.LZC, {
              size: 10
            }), (0, n.jsx)(Q.Z, {
              presetImages: y.M,
              radioGroupAriaLabel: L.intl.string(L.t.fKzQj4),
              image: AC,
              imageName: AU,
              savedImageName: null == Al || null == (l = Al.image_asset) ? true : l.filename,
              onChange: (A, e) => {
                if (null != A) {
                  var t;
                  Av(A), Aj(e), AV(A.startsWith("data:") || e !== (null == Al || null == (t = Al.image_asset) ? true : t.filename))
                }
              }
            })]
          }), AI ? (0, n.jsx)(g.xJW, {
            title: L.intl.string(L.t.zLrtkJ),
            error: null == AQ ? true : AQ.getFirstFieldErrorMessage("attachments"),
            children: (0, n.jsx)(T.s, {
              onFileAdded: () => {
                var A;
                null == (A = A9.current) || A.scrollIntoView({
                  behavior: "smooth",
                  block: "end"
                })
              }
            })
          }) : null, AL ? (0, n.jsx)(S.ZP, {
            error: null != (U = null == AQ ? true : AQ.getFirstFieldErrorMessage(K.NB)) ? U : true,
            newRoleParams: Aw,
            setNewRoleParams: AB,
            guildId: J,
            listingRoleId: AR,
            productId: An
          }) : null]
        })
      }), (0, n.jsx)("div", {
        className: k.horizontalSeparator
      }), (0, n.jsx)(g.zJl, {
        children: (0, n.jsxs)("div", {
          className: k.productPreview,
          children: [(0, n.jsx)(z.Z, {
            disabled: A6,
            disabledTooltip: Ai ? L.intl.string(L.t["0NQ00t"]) : Aa >= R.dD ? L.intl.format(L.t.IqWPVl, {
              maxProducts: R.dD
            }) : L.intl.string(L.t["Ax89/f"]),
            published: Ai,
            onClick: () => {
              o()(A$, "Attempting to publish/unpublish when not allowed"), AD(Ai ? "unpublish" : "publish"), A3(E(G({}, AH), {
                published: !Ai
              }))
            },
            submitting: Az
          }), (0, n.jsx)("div", {
            className: k.verticalSeparator
          }), (0, n.jsx)(g.X6q, {
            variant: "text-xs/bold",
            color: "header-secondary",
            className: k.previewHeading,
            children: L.intl.string(L.t["6I7nQU"])
          }), (0, n.jsx)(g.LZC, {
            size: 4
          }), (0, n.jsx)(g.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: L.intl.string(L.t.Oq4dfX)
          }), (0, n.jsx)(g.LZC, {
            size: 16
          }), (0, n.jsx)(N.Z, {
            imageUrl: AC,
            name: "" === Ag ? L.intl.string(L.t.EmqIws) : Ag,
            description: "" === Am ? L.intl.string(L.t["11NA2N"]) : Am,
            formattedPrice: AF,
            role: Ak,
            productType: AG,
            ctaComponent: (0, n.jsx)(c.zxk, {
              text: L.intl.string(L.t.xUi3BA)
            }),
            cardWidth: 340,
            thumbnailHeight: 190
          })]
        })
      })]
    }), (0, n.jsx)(g.mzw, {
      "data-migration-pending": true,
      children: (0, n.jsxs)("div", {
        className: k.footerActionButtons,
        children: [(0, n.jsxs)("div", {
          className: k.footerActionLeftButtons,
          children: [(0, n.jsx)(M, {
            text: L.intl.string(L.t.YzGIVF),
            value: AL,
            onChange: A => {
              A ? AB((0, S.YP)()) : AB(true)
            },
            warning: null === Aw ? (0, n.jsx)(S.aN, {}) : true,
            disabled: null != AR
          }), (0, n.jsx)(M, {
            text: L.intl.string(L.t.C6wP2d),
            value: AI,
            onChange: A => {
              A ? AK(true) : AX ? (0, g.ZDy)(async () => {
                let {
                  ConfirmModal: A
                } = await Promise.resolve().then(t.bind(t, 481060));
                return e => (0, n.jsx)(A, E(G({}, e), {
                  header: L.intl.string(L.t["2Wihyc"]),
                  confirmText: L.intl.string(L.t.N86XcH),
                  cancelText: L.intl.string(L.t["ETE/oK"]),
                  onConfirm: AE,
                  children: (0, n.jsx)(g.Text, {
                    variant: "text-md/normal",
                    children: L.intl.string(L.t.ixRBLi)
                  })
                }))
              }) : AE()
            },
            disabled: AW
          })]
        }), (0, n.jsx)("div", {
          className: k.footerActionRightButtons,
          children: Ai ? (0, n.jsx)(c.zxk, {
            variant: "secondary",
            text: L.intl.string(L.t.XYBEaW),
            disabled: !A_,
            loading: AS,
            onClick: () => {
              o()(A_, "cannot save changes for published product without adding all fields"), AD("update_publish"), A3(AH)
            }
          }) : (0, n.jsx)(c.zxk, {
            variant: "secondary",
            text: L.intl.string(L.t.ZCjwoa),
            disabled: !AJ,
            loading: AS,
            onClick: () => {
              o()(AJ, "cannot save changes without name or price tier"), AD("draft"), A3(AH)
            }
          })
        })]
      })
    }), (0, n.jsx)(u.W, {
      component: "div",
      className: k.successNoticeContainer,
      children: A0
    })]
  })
}

function AA(A) {
  var e;
  return (0, n.jsx)(F.W, {
    guildId: A.guildId,
    editSkuId: null != (e = A.productId) ? e : true,
    onFileSizeError: () => (0, U.Z)(R.ve),
    children: (0, n.jsx)($, G({}, A))
  })
}