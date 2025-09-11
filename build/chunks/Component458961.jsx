/** Chunk was on 73628 **/
/** chunk id: 458961, original params: A,e,t (module,exports,require) **/
require.d(exports, {
  default: () => AA
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
    disabled: a,
    warning: i
  } = A, o = (0, h.Dt)(), s = a ? "text-muted" : "text-default";
  return (0, n.jsxs)("label", {
    className: l()(k.benefitToggleContainer, {
      [k.disabled]: a
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
      disabled: a,
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
    setPriceTier: a
  } = A, {
    priceTiers: l
  } = (0, b.R)(e, w.RG5.GUILD_PRODUCTS), i = r.useMemo(() => (null != l ? l : null != t ? [t] : []).map(A => ({
    value: A,
    label: (0, V.T4)(A, w.pKx.USD)
  })), [l, t]);
  return (0, n.jsx)(g.VcW, {
    value: t,
    placeholder: L.intl.string(L.t.aI4J5O),
    maxVisibleItems: 5,
    options: i,
    onChange: a,
    filter: J,
    "aria-required": true
  })
}

function $(A) {
  var e, a, l, i, f, h, b, U;
  let {
    guildId: J,
    productId: $,
    transitionState: Ae,
    onClose: At
  } = A, [An, Ar] = r.useState($), Aa = (0, d.e7)([I.Z], () => null == An ? null : I.Z.getGuildProduct(An), [An]), Al = (null == Aa ? true : Aa.published) === true, {
    application: Ai
  } = (0, q.Z)(J, B.wW.GUILD_ROLE_SUBSCRIPTIONS), Ao = y.M["0"], As = j.QK.useSetting(), Ad = (0, O.n)(), Ac = r.useCallback(() => {
    var A;
    return (null == Aa || null == (A = Aa.image_asset) ? true : A.application_id) == null ? Ao.data : (0, P._W)(Aa.image_asset.application_id, Aa.image_asset, 600, Ad && As ? true : "webp")
  }, [Ao, Aa, Ad, As]), {
    shouldRestrictUpdatingCreatorMonetizationSettings: Au
  } = (0, v.gX)(J);
  r.useEffect(() => {
    Au && (At(), (0, Z.B)(L.intl.string(L.t.OLf3xs), L.t["90LBVl"]))
  }, [Au, At]);
  let [Af, Ag] = r.useState(null != (l = null == Aa ? true : Aa.name) ? l : ""), [Ap, Am] = r.useState(null != (i = null == Aa ? true : Aa.description) ? i : ""), [Aq, Ah] = r.useState(null != (f = null == Aa ? true : Aa.price_tier) ? f : true), [Ab, AC] = r.useState(Ac), [Av, AU] = r.useState(null != (h = null == Aa || null == (e = Aa.image_asset) ? true : e.filename) ? h : Ao.name), [Aj, Ax] = r.useState(false), [AV, AP] = r.useState(), AO = r.useMemo(() => null != Aq ? (0, V.T4)(Aq, w.pKx.USD) : true, [Aq]), [AF, AI] = r.useState(true), {
    changesSaving: AK,
    saveError: Ay,
    saveProductWithAttachments: AN,
    hasUnsavedAttachmentChanges: AT,
    cancelUnusedUploads: AX
  } = (0, F.P)(), AZ = (null == Aa ? true : Aa.attachments) != null && (null == Aa ? true : Aa.attachments.length) > 0, AW = null != Ay ? Ay : AV, AQ = null != AK && "published" in AK, Az = null != AK && !AQ, AS = null != (b = null == Aa ? true : Aa.role_id) ? b : null, [AR, Aw] = r.useState(), AB = null != AR || null != AS, AL = (0, d.e7)([x.Z], () => null != AS && null !== AR ? x.Z.getRole(J, AS) : null != AR ? AR : true, [AR, AS, J]), Ak = "";
  AB && AF ? Ak = L.intl.string(L.t.ih4QMT) : AB ? Ak = L.intl.string(L.t.o9xphY) : AF && (Ak = L.intl.string(L.t.DWYJub));
  let AG = () => {
      AI(false), AX()
    },
    [AE, AY] = r.useState(),
    {
      changes: AD,
      hasUnsavedChanges: AH,
      canSaveForDraft: AM,
      canSaveForPublished: AJ,
      canPublishOrUnpublish: A_
    } = r.useMemo(() => (0, K.fG)({
      guildProductListing: Aa,
      name: Af,
      priceTier: Aq,
      description: Ap,
      image: Ab,
      imageName: Av,
      isImageChanged: Aj,
      newRoleParams: AR,
      hasSavedAttachments: AZ,
      hasUnsavedAttachmentChanges: AT
    }), [Aa, Af, Aq, Ap, Ab, Av, Aj, AR, AZ, AT]),
    A$ = r.useMemo(() => AH || null == AE || "publish" === AE || null != AW ? null : (0, n.jsx)(g.oXn, {
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
            children: "draft" === AE ? L.intl.string(L.t["3Rv4MD"]) : "update_publish" === AE ? L.intl.string(L.t["8fPiBw"]) : L.intl.string(L.t["3LUFnJ"])
          })]
        }),
        onReset: () => AY(true),
        onResetText: L.intl.string(L.t.T6QuWV)
      })
    }), [AW, AH, AE]),
    A0 = r.useCallback(() => {
      AH ? (0, X.Z)({
        title: L.intl.string(L.t.FVDhIS),
        body: L.intl.string(L.t.Hgdhwc),
        cta: L.intl.string(L.t.h0bti4),
        closeLabel: L.intl.string(L.t["+WYo0t"]),
        onConfirm: () => {
          At()
        }
      }) : At()
    }, [At, AH]);
  r.useEffect(() => {
    (0, g.oav)(R.Yz, A => (0, n.jsx)(AA, G({
      guildId: J,
      productId: An
    }, A)), A0)
  }, [J, A0, An]);
  let A1 = async A => {
    let e = (0, K.pM)({
      newRoleParams: AR
    });
    if (AP(e), null != e) return;
    let t = await AN(A);
    if (Ax(false), null != t) {
      if (null != A.name && Ag(t.name), null != A.description && Am(t.description), null != AR) {
        let A = t.role_id;
        o()(null != A, "Cannot update role without role ID"), await p.Z.updateRole(J, A, AR)
      }
      Aw(true), Ar(t.id), "published" in A && true === A.published && At()
    }
  };
  r.useEffect(() => {
    if (null != AW) {
      var A;
      (0, W.V)(AW, J, null == Ai || null == (A = Ai.team) ? true : A.id)
    }
  }, [AW, J, Ai]), r.useEffect(() => {
    AH && AY(true)
  }, [AH]);
  let A3 = r.useRef(null);
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
        onClick: A0,
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
          ref: A3,
          children: [(0, n.jsx)(g.oil, {
            label: L.intl.string(L.t.Hsk7xc),
            error: null == AW ? true : AW.getFirstFieldErrorMessage("name"),
            value: Af,
            onChange: Ag,
            id: D,
            maxLength: 100,
            placeholder: L.intl.string(L.t["/BiYSE"]),
            required: true
          }), (0, n.jsx)(g.xJW, {
            title: L.intl.string(L.t.QdKLyc),
            error: null == AW ? true : AW.getFirstFieldErrorMessage("description"),
            htmlFor: H,
            children: (0, n.jsx)(C.Z, {
              id: H,
              className: k.descriptionArea,
              value: Ap,
              onChange: Am,
              maxLength: 1500,
              placeholder: L.intl.string(L.t.BFwyur),
              showCharacterCount: Ap.length > 0,
              parentModalKey: R.Yz,
              required: true
            })
          }), (0, n.jsx)(g.xJW, {
            title: L.intl.string(L.t["CAY/vr"]),
            error: null == AW ? true : AW.getFirstFieldErrorMessage("price_tier"),
            children: (0, n.jsx)(_, {
              guildId: J,
              selectedPriceTier: Aq,
              setPriceTier: Ah
            })
          }), (0, n.jsxs)(g.xJW, {
            title: L.intl.string(L.t["sqXj6+"]),
            error: null == AW ? true : AW.getFirstFieldErrorMessage("image"),
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
              image: Ab,
              imageName: Av,
              savedImageName: null == Aa || null == (a = Aa.image_asset) ? true : a.filename,
              onChange: (A, e) => {
                if (null != A) {
                  var t;
                  AC(A), AU(e), Ax(A.startsWith("data:") || e !== (null == Aa || null == (t = Aa.image_asset) ? true : t.filename))
                }
              }
            })]
          }), AF ? (0, n.jsx)(g.xJW, {
            title: L.intl.string(L.t.zLrtkJ),
            error: null == AW ? true : AW.getFirstFieldErrorMessage("attachments"),
            children: (0, n.jsx)(T.s, {
              onFileAdded: () => {
                var A;
                null == (A = A3.current) || A.scrollIntoView({
                  behavior: "smooth",
                  block: "end"
                })
              }
            })
          }) : null, AB ? (0, n.jsx)(S.ZP, {
            error: null != (U = null == AW ? true : AW.getFirstFieldErrorMessage(K.NB)) ? U : true,
            newRoleParams: AR,
            setNewRoleParams: Aw,
            guildId: J,
            listingRoleId: AS,
            productId: An
          }) : null]
        })
      }), (0, n.jsx)("div", {
        className: k.horizontalSeparator
      }), (0, n.jsx)(g.zJl, {
        children: (0, n.jsxs)("div", {
          className: k.productPreview,
          children: [(0, n.jsx)(z.Z, {
            disabled: !A_,
            disabledTooltip: Al ? L.intl.string(L.t["0NQ00t"]) : L.intl.string(L.t["Ax89/f"]),
            published: Al,
            onClick: () => {
              o()(A_, "Attempting to publish/unpublish when not allowed"), AY(Al ? "unpublish" : "publish"), A1(E(G({}, AD), {
                published: !Al
              }))
            },
            submitting: AQ
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
            imageUrl: Ab,
            name: "" === Af ? L.intl.string(L.t.EmqIws) : Af,
            description: "" === Ap ? L.intl.string(L.t["11NA2N"]) : Ap,
            formattedPrice: AO,
            role: AL,
            productType: Ak,
            ctaComponent: (0, n.jsx)(u.zxk, {
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
            value: AB,
            onChange: A => {
              A ? Aw((0, S.YP)()) : Aw(true)
            },
            warning: null === AR ? (0, n.jsx)(S.aN, {}) : true,
            disabled: null != AS
          }), (0, n.jsx)(M, {
            text: L.intl.string(L.t.C6wP2d),
            value: AF,
            onChange: A => {
              A ? AI(true) : AT ? (0, g.ZDy)(async () => {
                let {
                  ConfirmModal: A
                } = await Promise.resolve().then(t.bind(t, 481060));
                return e => (0, n.jsx)(A, E(G({}, e), {
                  header: L.intl.string(L.t["2Wihyc"]),
                  confirmText: L.intl.string(L.t.N86XcH),
                  cancelText: L.intl.string(L.t["ETE/oK"]),
                  onConfirm: AG,
                  children: (0, n.jsx)(g.Text, {
                    variant: "text-md/normal",
                    children: L.intl.string(L.t.ixRBLi)
                  })
                }))
              }) : AG()
            },
            disabled: AZ
          })]
        }), (0, n.jsx)("div", {
          className: k.footerActionRightButtons,
          children: Al ? (0, n.jsx)(u.zxk, {
            variant: "secondary",
            text: L.intl.string(L.t.XYBEaW),
            disabled: !AJ,
            loading: Az,
            onClick: () => {
              o()(AJ, "cannot save changes for published product without adding all fields"), AY("update_publish"), A1(AD)
            }
          }) : (0, n.jsx)(u.zxk, {
            variant: "secondary",
            text: L.intl.string(L.t.ZCjwoa),
            disabled: !AM,
            loading: Az,
            onClick: () => {
              o()(AM, "cannot save changes without name or price tier"), AY("draft"), A1(AD)
            }
          })
        })]
      })
    }), (0, n.jsx)(c.W, {
      component: "div",
      className: k.successNoticeContainer,
      children: A$
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