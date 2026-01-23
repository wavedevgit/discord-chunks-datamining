/** Chunk was on 67096 **/
/** chunk id: 559947, original params: e,A,t (module,exports,require) **/
require.d(exports, {
  default: () => _
}), require("./896048.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  o = require.n(Chunk284009),
  Chunk417597 = require("./417597.js"),
  Chunk827734 = require("./827734.js"),
  Chunk73939 = require("./73939.js"),
  Chunk36525 = require("./36525.jsx"),
  Chunk314116 = require("./314116.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk686956 = require("./686956.js"),
  Chunk262828 = require("./262828.js"),
  Chunk915089 = require("./915089.js"),
  Chunk722888 = require("./722888.js"),
  Chunk809506 = require("./809506.jsx"),
  Chunk465932 = require("./465932.js"),
  Chunk2553 = require("./2553.js"),
  Chunk253932 = require("./253932.js"),
  Chunk317525 = require("./317525.js"),
  Chunk580630 = require("./580630.js"),
  Chunk371794 = require("./371794.js"),
  Chunk218394 = require("./218394.js"),
  Chunk464990 = require("./464990.jsx"),
  Chunk871109 = require("./871109.js"),
  Chunk253141 = require("./253141.js"),
  Chunk937409 = require("./937409.js"),
  Chunk500770 = require("./500770.jsx"),
  Chunk563838 = require("./563838.jsx"),
  Chunk426043 = require("./426043.jsx"),
  Chunk575077 = require("./575077.jsx"),
  Chunk692646 = require("./692646.jsx"),
  Chunk184119 = require("./184119.jsx"),
  Chunk717040 = require("./717040.jsx"),
  Chunk319543 = require("./319543.jsx"),
  Chunk500208 = require("./500208.js"),
  Chunk652215 = require("./652215.js"),
  Chunk705751 = require("./705751.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk294851 = require("./294851.js");

function G(e) {
  for (var A = 1; A < arguments.length; A++) {
    var t = null != arguments[A] ? arguments[A] : {},
      r = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), r.forEach(function(A) {
      var r;
      r = t[A], A in e ? Object.defineProperty(e, A, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[A] = r
    })
  }
  return e
}
let k = (0, Chunk915089.Ld)(),
  E = (0, Chunk915089.Ld)(),
  B = (0, Chunk915089.Ld)();

function Y(e) {
  let {
    text: A,
    onChange: t,
    value: n,
    disabled: l,
    warning: i
  } = e, o = (0, v.GV)(), s = l ? "text-muted" : "text-default";
  return (0, r.jsxs)("label", {
    className: a()(L.$4, {
      [L.r9]: l
    }),
    htmlFor: o,
    children: [(0, r.jsx)(p.Text, {
      variant: "text-sm/medium",
      color: s,
      children: A
    }), null != i && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(p.hKd, {
        size: 4,
        horizontal: true
      }), i]
    }), (0, r.jsx)(p.dOG, {
      onChange: t,
      checked: n,
      disabled: l,
      id: o
    })]
  })
}

function H(e, A) {
  return e.filter(e => {
    let {
      value: t,
      label: r
    } = e;
    return t.toString().includes(A) || r.includes(A)
  })
}

function M(e) {
  let {
    guildId: A,
    selectedPriceTier: t,
    setPriceTier: l,
    label: a,
    errorMessage: i
  } = e, {
    priceTiers: o
  } = (0, h._)(A, w.L_o.GUILD_PRODUCTS), s = n.useMemo(() => (null != o ? o : null != t ? [t] : []).map(e => ({
    id: e.toString(),
    value: e,
    label: (0, V.$g)(e, w.Yri.USD)
  })), [o, t]);
  return (0, r.jsx)(p.ZiE, {
    selectionMode: "single",
    label: a,
    errorMessage: i,
    value: t,
    placeholder: R.intl.string(R.t.aI4J5H),
    maxOptionsVisible: 5,
    options: s,
    onSelectionChange: l,
    customMatchSorter: H,
    required: true
  })
}

function J(e) {
  var A, t, l, a, i, v, h, C, H, J, $, ee;
  let {
    guildId: eA,
    productId: et,
    transitionState: er,
    onClose: en
  } = e, [el, ea] = n.useState(et), ei = (0, s.bG)([P.A], () => null == el ? null : P.A.getGuildProduct(el), [el]), eo = (0, s.bG)([P.A], () => P.A.getGuildProductsForGuild(eA, {
    publishedOnly: true
  }).length, [eA]), es = (null == ei ? true : ei.published) === true, {
    application: ed
  } = (0, m.A)(eA, D.S7.GUILD_ROLE_SUBSCRIPTIONS), eu = N.D["0"], ec = j.kt.useSetting(), eg = (0, x.j)(), ep = n.useCallback(() => {
    var e;
    return (null == ei || null == (e = ei.image_asset) ? true : e.application_id) == null ? eu.data : (0, O.YE)(ei.image_asset.application_id, ei.image_asset, 600, eg && ec ? true : "webp")
  }, [eu, ei, eg, ec]), {
    shouldRestrictUpdatingCreatorMonetizationSettings: ef
  } = (0, b.nq)(eA);
  n.useEffect(() => {
    ef && (en(), (0, X.p)(R.intl.string(R.t.OLf3xn), R.t["90LBVr"]))
  }, [ef, en]);
  let [em, ev] = n.useState(null != (A = null == ei ? true : ei.name) ? A : ""), [eh, eq] = n.useState(null != (t = null == ei ? true : ei.description) ? t : ""), [eb, eC] = n.useState(null != (l = null == ei ? true : ei.price_tier) ? l : true), [ej, eU] = n.useState(ep), [eV, eO] = n.useState(null != (a = null == ei || null == ($ = ei.image_asset) ? true : $.filename) ? a : eu.name), [ex, ey] = n.useState(false), [eP, eK] = n.useState(), eN = n.useMemo(() => null != eb ? (0, V.$g)(eb, w.Yri.USD) : true, [eb]), [eI, eF] = n.useState(true), {
    changesSaving: eT,
    saveError: eX,
    saveProductWithAttachments: eW,
    hasUnsavedAttachmentChanges: eQ,
    cancelUnusedUploads: eS
  } = (0, y.Z)(), eZ = (null == ei ? true : ei.attachments) != null && (null == ei ? true : ei.attachments.length) > 0, ez = null != eX ? eX : eP, ew = null != eT && "published" in eT, eD = null != eT && !ew, eR = null != (i = null == ei ? true : ei.role_id) ? i : null, [eL, eG] = n.useState(), ek = null != eL || null != eR, eE = (0, s.bG)([U.A], () => null != eR && null !== eL ? U.A.getRole(eA, eR) : null != eL ? eL : true, [eL, eR, eA]), eB = "";
  ek && eI ? eB = R.intl.string(R.t.ih4QMU) : ek ? eB = R.intl.string(R.t.o9xphc) : eI && (eB = R.intl.string(R.t.DWYJua));
  let eY = () => {
      eF(false), eS()
    },
    [eH, eM] = n.useState(),
    {
      changes: eJ,
      hasUnsavedChanges: e_,
      canSaveForDraft: e$,
      canSaveForPublished: e0,
      canPublishOrUnpublish: e1
    } = n.useMemo(() => (0, K.EY)({
      guildProductListing: ei,
      name: em,
      priceTier: eb,
      description: eh,
      image: ej,
      imageName: eV,
      isImageChanged: ex,
      newRoleParams: eL,
      hasSavedAttachments: eZ,
      hasUnsavedAttachmentChanges: eQ
    }), [ei, em, eb, eh, ej, eV, ex, eL, eZ, eQ]),
    e9 = n.useMemo(() => e_ || null == eH || "publish" === eH || null != ez ? null : (0, r.jsx)(p.FQk, {
      className: L.Er,
      children: (0, r.jsx)(c.A, {
        message: (0, r.jsxs)("div", {
          className: L.Lk,
          children: [(0, r.jsx)(p.yr3, {
            size: "md",
            color: d.A.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT.css,
            secondaryColor: d.A.colors.WHITE.css
          }), (0, r.jsx)(p.Text, {
            variant: "text-md/medium",
            children: "draft" === eH ? R.intl.string(R.t["3Rv4MB"]) : "update_publish" === eH ? R.intl.string(R.t["8fPiB3"]) : R.intl.string(R.t["3LUFnI"])
          })]
        }),
        onReset: () => eM(true),
        onResetText: R.intl.string(R.t.T6QuWe)
      })
    }), [ez, e_, eH]),
    e6 = n.useCallback(() => {
      e_ ? (0, T.A)({
        title: R.intl.string(R.t.FVDhIW),
        body: R.intl.string(R.t.Hgdhwb),
        cta: R.intl.string(R.t["h0bti/"]),
        closeLabel: R.intl.string(R.t["+WYo0m"]),
        onConfirm: () => {
          en()
        }
      }) : en()
    }, [en, e_]);
  n.useEffect(() => {
    (0, p.zbz)(z.DG, e => (0, r.jsx)(_, G({
      guildId: eA,
      productId: el
    }, e)), e6)
  }, [eA, e6, el]);
  let e3 = async e => {
    let A = (0, K.ig)({
      newRoleParams: eL
    });
    if (eK(A), null != A) return;
    let t = await eW(e);
    if (ey(false), null != t) {
      if (null != e.name && ev(t.name), null != e.description && eq(t.description), null != eL) {
        let e = t.role_id;
        o()(null != e, "Cannot update role without role ID"), await f.A.updateRole(eA, e, eL)
      }
      eG(true), ea(t.id), "published" in e && true === e.published && en()
    }
  };
  n.useEffect(() => {
    if (null != ez) {
      var e;
      (0, W.Z)(ez, eA, null == ed || null == (e = ed.team) ? true : e.id)
    }
  }, [ez, eA, ed]), n.useEffect(() => {
    e_ && eM(true)
  }, [e_]);
  let e7 = n.useRef(null);
  return (0, r.jsxs)(p.EOs, {
    transitionState: er,
    size: p.rIJ.DYNAMIC,
    className: L.CR,
    "aria-labelledby": k,
    parentComponent: "GuildProductEditModal",
    "data-migration-pending": true,
    children: [(0, r.jsxs)(p.rQ0, {
      className: L.Hc,
      separator: false,
      "data-migration-pending": true,
      children: [(0, r.jsxs)("div", {
        className: L.TK,
        children: [(0, r.jsx)(p.Heading, {
          id: k,
          variant: "heading-xl/semibold",
          color: "text-strong",
          children: R.intl.string(R.t.DnNl1T)
        }), (0, r.jsx)(p.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: R.intl.string(R.t["Tu7f+f"])
        })]
      }), (0, r.jsx)(p.s_y, {
        onClick: e6,
        className: L.__invalid_modalCloseButton,
        "data-migration-pending": true
      })]
    }), (0, r.jsxs)(p.$mQ, {
      className: L.jE,
      scrollbarType: "none",
      "data-migration-pending": true,
      children: [(0, r.jsx)(p.IpV, {
        children: (0, r.jsxs)("div", {
          className: L.sj,
          ref: e7,
          children: [(0, r.jsx)(p.ksK, {
            label: R.intl.string(R.t.Hsk7xT),
            error: null == ez ? true : ez.getFirstFieldErrorMessage("name"),
            value: em,
            onChange: ev,
            id: E,
            maxLength: 100,
            placeholder: R.intl.string(R.t["/BiYSO"]),
            required: true
          }), (0, r.jsx)(q.A, {
            label: R.intl.string(R.t.QdKLyW),
            errorMessage: null != (v = null == ez ? true : ez.getFirstFieldErrorMessage("description")) ? v : true,
            id: B,
            className: L.kj,
            value: eh,
            onChange: eq,
            maxLength: 1500,
            placeholder: R.intl.string(R.t.BFwyum),
            showCharacterCount: eh.length > 0,
            parentModalKey: z.DG,
            required: true
          }), (0, r.jsx)(M, {
            label: R.intl.string(R.t["CAY/vh"]),
            errorMessage: null != (h = null == ez ? true : ez.getFirstFieldErrorMessage("price_tier")) ? h : true,
            guildId: eA,
            selectedPriceTier: eb,
            setPriceTier: eC
          }), (0, r.jsx)(p.D0$, {
            label: R.intl.string(R.t.sqXj60),
            errorMessage: null != (C = null == ez ? true : ez.getFirstFieldErrorMessage("image")) ? C : true,
            description: R.intl.string(R.t.yOU4Vm),
            children: (0, r.jsx)(Q.A, {
              presetImages: N.D,
              radioGroupAriaLabel: R.intl.string(R.t.fKzQj0),
              image: ej,
              imageName: eV,
              savedImageName: null == ei || null == (ee = ei.image_asset) ? true : ee.filename,
              onChange: (e, A) => {
                if (null != e) {
                  var t;
                  eU(e), eO(A), ey(e.startsWith("data:") || A !== (null == ei || null == (t = ei.image_asset) ? true : t.filename))
                }
              }
            })
          }), eI ? (0, r.jsx)(p.D0$, {
            label: R.intl.string(R.t.zLrtkN),
            errorMessage: null != (H = null == ez ? true : ez.getFirstFieldErrorMessage("attachments")) ? H : true,
            children: (0, r.jsx)(F.F, {
              onFileAdded: () => {
                var e;
                null == (e = e7.current) || e.scrollIntoView({
                  behavior: "smooth",
                  block: "end"
                })
              }
            })
          }) : null, ek ? (0, r.jsx)(Z.Ay, {
            error: null != (J = null == ez ? true : ez.getFirstFieldErrorMessage(K.a)) ? J : true,
            newRoleParams: eL,
            setNewRoleParams: eG,
            guildId: eA,
            listingRoleId: eR,
            productId: el
          }) : null]
        })
      }), (0, r.jsx)("div", {
        className: L.cD
      }), (0, r.jsx)(p.IpV, {
        children: (0, r.jsxs)("div", {
          className: L.mA,
          children: [(0, r.jsx)(S.A, {
            disabled: !e1 || !es && eo >= 50,
            disabledTooltip: es ? R.intl.string(R.t["0NQ00t"]) : eo >= 50 ? R.intl.format(R.t.IqWPVt, {
              maxProducts: 50
            }) : R.intl.string(R.t["Ax89/c"]),
            published: es,
            onClick: () => {
              var e, A;
              o()(e1, "Attempting to publish/unpublish when not allowed"), eM(es ? "unpublish" : "publish"), e3((e = G({}, eJ), A = A = {
                published: !es
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(A)) : (function(e, A) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  t.push.apply(t, r)
                }
                return t
              })(Object(A)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(A, t))
              }), e))
            },
            submitting: ew
          }), (0, r.jsx)("div", {
            className: L.AC
          }), (0, r.jsx)(p.Heading, {
            variant: "text-xs/bold",
            color: "text-default",
            className: L.B9,
            children: R.intl.string(R.t["6I7nQT"])
          }), (0, r.jsx)(p.hKd, {
            size: 4
          }), (0, r.jsx)(p.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: R.intl.string(R.t.Oq4dfU)
          }), (0, r.jsx)(p.hKd, {
            size: 16
          }), (0, r.jsx)(I.A, {
            imageUrl: ej,
            name: "" === em ? R.intl.string(R.t.EmqIwl) : em,
            description: "" === eh ? R.intl.string(R.t["11NA2L"]) : eh,
            formattedPrice: eN,
            role: eE,
            productType: eB,
            ctaComponent: (0, r.jsx)(p.Button, {
              text: R.intl.string(R.t.xUi3BL)
            }),
            cardWidth: 340,
            thumbnailHeight: 190
          })]
        })
      })]
    }), (0, r.jsx)(p.jlY, {
      "data-migration-pending": true,
      children: (0, r.jsxs)("div", {
        className: L.jj,
        children: [(0, r.jsxs)("div", {
          className: L.mx,
          children: [(0, r.jsx)(Y, {
            text: R.intl.string(R.t.YzGIVF),
            value: ek,
            onChange: e => {
              e ? eG((0, Z.Jn)()) : eG(true)
            },
            warning: null === eL ? (0, r.jsx)(Z.id, {}) : true,
            disabled: null != eR
          }), (0, r.jsx)(Y, {
            text: R.intl.string(R.t.C6wP2Q),
            value: eI,
            onChange: e => {
              e ? eF(true) : eQ ? (0, g.A)({
                title: R.intl.string(R.t["2WihyY"]),
                subtitle: R.intl.string(R.t.ixRBLh),
                confirmText: R.intl.string(R.t.N86XcP),
                onConfirm: eY
              }) : eY()
            },
            disabled: eZ
          })]
        }), (0, r.jsx)("div", {
          className: L.TM,
          children: es ? (0, r.jsx)(p.Button, {
            variant: "secondary",
            text: R.intl.string(R.t.XYBEaV),
            disabled: !e0,
            loading: eD,
            onClick: () => {
              o()(e0, "cannot save changes for published product without adding all fields"), eM("update_publish"), e3(eJ)
            }
          }) : (0, r.jsx)(p.Button, {
            variant: "secondary",
            text: R.intl.string(R.t.ZCjwob),
            disabled: !e$,
            loading: eD,
            onClick: () => {
              o()(e$, "cannot save changes without name or price tier"), eM("draft"), e3(eJ)
            }
          })
        })]
      })
    }), (0, r.jsx)(u.F, {
      component: "div",
      className: L.Nt,
      children: e9
    })]
  })
}

function _(e) {
  var A;
  return (0, r.jsx)(y.R, {
    guildId: e.guildId,
    editSkuId: null != (A = e.productId) ? A : true,
    onFileSizeError: () => (0, C.A)(z.vN),
    children: (0, r.jsx)(J, G({}, e))
  })
}