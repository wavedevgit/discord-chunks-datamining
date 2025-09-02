/** Chunk was on 73628 **/
/** chunk id: 458961, original params: A,e,t (module,exports,require) **/
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

function k(A) {
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

function G(A, e) {
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
let E = (0, Chunk313201.hQ)(),
  Y = (0, Chunk313201.hQ)(),
  D = (0, Chunk313201.hQ)();

function H(A) {
  let {
    text: e,
    onChange: t,
    value: r,
    disabled: a,
    warning: i
  } = A, o = (0, q.Dt)(), s = a ? "text-muted" : "text-default";
  return (0, n.jsxs)("label", {
    className: l()(L.benefitToggleContainer, {
      [L.disabled]: a
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
    }), (0, n.jsx)(g.rsf, {
      onChange: t,
      checked: r,
      disabled: a,
      id: o
    })]
  })
}

function M(A, e) {
  return A.filter(A => {
    let {
      value: t,
      label: n
    } = A;
    return t.toString().includes(e) || n.includes(e)
  })
}

function J(A) {
  let {
    guildId: e,
    selectedPriceTier: t,
    setPriceTier: a
  } = A, {
    priceTiers: l
  } = (0, h.R)(e, R.RG5.GUILD_PRODUCTS), i = r.useMemo(() => (null != l ? l : null != t ? [t] : []).map(A => ({
    value: A,
    label: (0, x.T4)(A, R.pKx.USD)
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

function _(A) {
  var e, a, l, i, q, h, v, M;
  let {
    guildId: _,
    productId: AA,
    transitionState: Ae,
    onClose: At
  } = A, [An, Ar] = r.useState(AA), Aa = (0, d.e7)([F.Z], () => null == An ? null : F.Z.getGuildProduct(An), [An]), Al = (null == Aa ? true : Aa.published) === true, {
    application: Ai
  } = (0, m.Z)(_, w.wW.GUILD_ROLE_SUBSCRIPTIONS), Ao = K.M["0"], As = U.QK.useSetting(), Ad = (0, P.n)(), Ac = r.useCallback(() => {
    var A;
    return (null == Aa || null == (A = Aa.image_asset) ? true : A.application_id) == null ? Ao.data : (0, V._W)(Aa.image_asset.application_id, Aa.image_asset, 600, Ad && As ? true : "webp")
  }, [Ao, Aa, Ad, As]), {
    shouldRestrictUpdatingCreatorMonetizationSettings: Au
  } = (0, C.gX)(_);
  r.useEffect(() => {
    Au && (At(), (0, X.B)(B.intl.string(B.t.OLf3xs), B.t["90LBVl"]))
  }, [Au, At]);
  let [Ag, Af] = r.useState(null != (l = null == Aa ? true : Aa.name) ? l : ""), [Ap, Am] = r.useState(null != (i = null == Aa ? true : Aa.description) ? i : ""), [Aq, Ah] = r.useState(null != (q = null == Aa ? true : Aa.price_tier) ? q : true), [Ab, AC] = r.useState(Ac), [Av, AU] = r.useState(null != (h = null == Aa || null == (e = Aa.image_asset) ? true : e.filename) ? h : Ao.name), [Aj, Ax] = r.useState(false), [AV, AP] = r.useState(), AO = r.useMemo(() => null != Aq ? (0, x.T4)(Aq, R.pKx.USD) : true, [Aq]), [AF, AI] = r.useState(true), {
    changesSaving: AK,
    saveError: Ay,
    saveProductWithAttachments: AN,
    hasUnsavedAttachmentChanges: AT,
    cancelUnusedUploads: AX
  } = (0, O.P)(), AZ = (null == Aa ? true : Aa.attachments) != null && (null == Aa ? true : Aa.attachments.length) > 0, AW = null != Ay ? Ay : AV, AQ = null != AK && "published" in AK, Az = null != AK && !AQ, AS = null != (v = null == Aa ? true : Aa.role_id) ? v : null, [AR, Aw] = r.useState(), AB = null != AR || null != AS, AL = (0, d.e7)([j.Z], () => null != AS && null !== AR ? j.Z.getRole(_, AS) : null != AR ? AR : true, [AR, AS, _]), Ak = "";
  AB && AF ? Ak = B.intl.string(B.t.ih4QMT) : AB ? Ak = B.intl.string(B.t.o9xphY) : AF && (Ak = B.intl.string(B.t.DWYJub));
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
    } = r.useMemo(() => (0, I.fG)({
      guildProductListing: Aa,
      name: Ag,
      priceTier: Aq,
      description: Ap,
      image: Ab,
      imageName: Av,
      isImageChanged: Aj,
      newRoleParams: AR,
      hasSavedAttachments: AZ,
      hasUnsavedAttachmentChanges: AT
    }), [Aa, Ag, Aq, Ap, Ab, Av, Aj, AR, AZ, AT]),
    A$ = r.useMemo(() => AH || null == AE || "publish" === AE || null != AW ? null : (0, n.jsx)(g.oXn, {
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
            children: "draft" === AE ? B.intl.string(B.t["3Rv4MD"]) : "update_publish" === AE ? B.intl.string(B.t["8fPiBw"]) : B.intl.string(B.t["3LUFnJ"])
          })]
        }),
        onReset: () => AY(true),
        onResetText: B.intl.string(B.t.T6QuWV)
      })
    }), [AW, AH, AE]),
    A0 = r.useCallback(() => {
      AH ? (0, T.Z)({
        title: B.intl.string(B.t.FVDhIS),
        body: B.intl.string(B.t.Hgdhwc),
        cta: B.intl.string(B.t.h0bti4),
        closeLabel: B.intl.string(B.t["+WYo0t"]),
        onConfirm: () => {
          At()
        }
      }) : At()
    }, [At, AH]);
  r.useEffect(() => {
    (0, g.oav)(S.Yz, A => (0, n.jsx)($, k({
      guildId: _,
      productId: An
    }, A)), A0)
  }, [_, A0, An]);
  let A1 = async A => {
    let e = (0, I.pM)({
      newRoleParams: AR
    });
    if (AP(e), null != e) return;
    let t = await AN(A);
    if (Ax(false), null != t) {
      if (null != A.name && Af(t.name), null != A.description && Am(t.description), null != AR) {
        let A = t.role_id;
        o()(null != A, "Cannot update role without role ID"), await f.Z.updateRole(_, A, AR)
      }
      Aw(true), Ar(t.id), "published" in A && true === A.published && At()
    }
  };
  r.useEffect(() => {
    if (null != AW) {
      var A;
      (0, Z.V)(AW, _, null == Ai || null == (A = Ai.team) ? true : A.id)
    }
  }, [AW, _, Ai]), r.useEffect(() => {
    AH && AY(true)
  }, [AH]);
  let A9 = r.useRef(null);
  return (0, n.jsxs)(g.Y0X, {
    transitionState: Ae,
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
        onClick: A0,
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
          ref: A9,
          children: [(0, n.jsx)(g.xJW, {
            title: B.intl.string(B.t.Hsk7xc),
            tag: "label",
            htmlFor: Y,
            error: null == AW ? true : AW.getFirstFieldErrorMessage("name"),
            children: (0, n.jsx)(g.oil, {
              value: Ag,
              onChange: Af,
              id: Y,
              maxLength: 100,
              placeholder: B.intl.string(B.t["/BiYSE"]),
              required: true
            })
          }), (0, n.jsx)(g.xJW, {
            title: B.intl.string(B.t.QdKLyc),
            tag: "label",
            error: null == AW ? true : AW.getFirstFieldErrorMessage("description"),
            htmlFor: D,
            children: (0, n.jsx)(b.Z, {
              id: D,
              className: L.descriptionArea,
              value: Ap,
              onChange: Am,
              maxLength: 1500,
              placeholder: B.intl.string(B.t.BFwyur),
              showCharacterCount: Ap.length > 0,
              parentModalKey: S.Yz,
              required: true
            })
          }), (0, n.jsx)(g.xJW, {
            title: B.intl.string(B.t["CAY/vr"]),
            tag: "label",
            error: null == AW ? true : AW.getFirstFieldErrorMessage("price_tier"),
            children: (0, n.jsx)(J, {
              guildId: _,
              selectedPriceTier: Aq,
              setPriceTier: Ah
            })
          }), (0, n.jsxs)(g.xJW, {
            title: B.intl.string(B.t["sqXj6+"]),
            tag: "label",
            error: null == AW ? true : AW.getFirstFieldErrorMessage("image"),
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
            title: B.intl.string(B.t.zLrtkJ),
            error: null == AW ? true : AW.getFirstFieldErrorMessage("attachments"),
            children: (0, n.jsx)(N.s, {
              onFileAdded: () => {
                var A;
                null == (A = A9.current) || A.scrollIntoView({
                  behavior: "smooth",
                  block: "end"
                })
              }
            })
          }) : null, AB ? (0, n.jsx)(z.ZP, {
            error: null != (M = null == AW ? true : AW.getFirstFieldErrorMessage(I.NB)) ? M : true,
            newRoleParams: AR,
            setNewRoleParams: Aw,
            guildId: _,
            listingRoleId: AS,
            productId: An
          }) : null]
        })
      }), (0, n.jsx)("div", {
        className: L.horizontalSeparator
      }), (0, n.jsx)(g.zJl, {
        children: (0, n.jsxs)("div", {
          className: L.productPreview,
          children: [(0, n.jsx)(Q.Z, {
            disabled: !A_,
            disabledTooltip: Al ? B.intl.string(B.t["0NQ00t"]) : B.intl.string(B.t["Ax89/f"]),
            published: Al,
            onClick: () => {
              o()(A_, "Attempting to publish/unpublish when not allowed"), AY(Al ? "unpublish" : "publish"), A1(G(k({}, AD), {
                published: !Al
              }))
            },
            submitting: AQ
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
            imageUrl: Ab,
            name: "" === Ag ? B.intl.string(B.t.EmqIws) : Ag,
            description: "" === Ap ? B.intl.string(B.t["11NA2N"]) : Ap,
            formattedPrice: AO,
            role: AL,
            productType: Ak,
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
            value: AB,
            onChange: A => {
              A ? Aw((0, z.YP)()) : Aw(true)
            },
            warning: null === AR ? (0, n.jsx)(z.aN, {}) : true,
            disabled: null != AS
          }), (0, n.jsx)(H, {
            text: B.intl.string(B.t.C6wP2d),
            value: AF,
            onChange: A => {
              A ? AI(true) : AT ? (0, g.ZDy)(async () => {
                let {
                  ConfirmModal: A
                } = await Promise.resolve().then(t.bind(t, 481060));
                return e => (0, n.jsx)(A, G(k({}, e), {
                  header: B.intl.string(B.t["2Wihyc"]),
                  confirmText: B.intl.string(B.t.N86XcH),
                  cancelText: B.intl.string(B.t["ETE/oK"]),
                  onConfirm: AG,
                  children: (0, n.jsx)(g.Text, {
                    variant: "text-md/normal",
                    children: B.intl.string(B.t.ixRBLi)
                  })
                }))
              }) : AG()
            },
            disabled: AZ
          })]
        }), (0, n.jsx)("div", {
          className: L.footerActionRightButtons,
          children: Al ? (0, n.jsx)(u.zx, {
            variant: "secondary",
            text: B.intl.string(B.t.XYBEaW),
            disabled: !AJ,
            loading: Az,
            onClick: () => {
              o()(AJ, "cannot save changes for published product without adding all fields"), AY("update_publish"), A1(AD)
            }
          }) : (0, n.jsx)(u.zx, {
            variant: "secondary",
            text: B.intl.string(B.t.ZCjwoa),
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
      className: L.successNoticeContainer,
      children: A$
    })]
  })
}

function $(A) {
  var e;
  return (0, n.jsx)(O.W, {
    guildId: A.guildId,
    editSkuId: null != (e = A.productId) ? e : true,
    onFileSizeError: () => (0, v.Z)(S.ve),
    children: (0, n.jsx)(_, k({}, A))
  })
}