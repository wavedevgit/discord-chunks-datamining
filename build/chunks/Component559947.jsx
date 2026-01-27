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
  s = require.n(Chunk284009),
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

function k(e) {
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
let G = (0, Chunk915089.Ld)(),
  E = (0, Chunk915089.Ld)(),
  B = (0, Chunk915089.Ld)();

function Y(e) {
  let {
    text: A,
    onChange: t,
    value: n,
    disabled: l,
    warning: i
  } = e, s = (0, v.GV)(), o = l ? "text-muted" : "text-default";
  return (0, r.jsxs)("label", {
    className: a()(D.$4, {
      [D.r9]: l
    }),
    htmlFor: s,
    children: [(0, r.jsx)(f.Text, {
      variant: "text-sm/medium",
      color: o,
      children: A
    }), null != i && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(f.hKd, {
        size: 4,
        horizontal: true
      }), i]
    }), (0, r.jsx)(f.dOG, {
      onChange: t,
      checked: n,
      disabled: l,
      id: s
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
    priceTiers: s
  } = (0, h._)(A, w.L_o.GUILD_PRODUCTS), o = n.useMemo(() => (null != s ? s : null != t ? [t] : []).map(e => ({
    id: e.toString(),
    value: e,
    label: (0, V.$g)(e, w.Yri.USD)
  })), [s, t]);
  return (0, r.jsx)(f.ZiE, {
    selectionMode: "single",
    label: a,
    errorMessage: i,
    value: t,
    placeholder: R.intl.string(R.t.aI4J5H),
    maxOptionsVisible: 5,
    options: o,
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
  } = e, [el, ea] = n.useState(et), ei = (0, o.bG)([P.A], () => null == el ? null : P.A.getGuildProduct(el), [el]), es = (0, o.bG)([P.A], () => P.A.getGuildProductsForGuild(eA, {
    publishedOnly: true
  }).length, [eA]), eo = (null == ei ? true : ei.published) === true, {
    application: ed
  } = (0, m.A)(eA, L.S7.GUILD_ROLE_SUBSCRIPTIONS), eu = N.D["0"], ec = j.kt.useSetting(), eg = (0, O.j)(), ef = n.useCallback(() => {
    var e;
    return (null == ei || null == (e = ei.image_asset) ? true : e.application_id) == null ? eu.data : (0, x.YE)(ei.image_asset.application_id, ei.image_asset, 600, eg && ec ? true : "webp")
  }, [eu, ei, eg, ec]), {
    shouldRestrictUpdatingCreatorMonetizationSettings: ep
  } = (0, q.nq)(eA);
  n.useEffect(() => {
    ep && (en(), (0, X.p)(R.intl.string(R.t.OLf3xn), R.t["90LBVr"]))
  }, [ep, en]);
  let [em, ev] = n.useState(null != (A = null == ei ? true : ei.name) ? A : ""), [eh, eb] = n.useState(null != (t = null == ei ? true : ei.description) ? t : ""), [eq, eC] = n.useState(null != (l = null == ei ? true : ei.price_tier) ? l : true), [ej, eU] = n.useState(ef), [eV, ex] = n.useState(null != (a = null == ei || null == ($ = ei.image_asset) ? true : $.filename) ? a : eu.name), [eO, ey] = n.useState(false), [eP, eK] = n.useState(), eN = n.useMemo(() => null != eq ? (0, V.$g)(eq, w.Yri.USD) : true, [eq]), [eI, eF] = n.useState(true), {
    changesSaving: eT,
    saveError: eX,
    saveProductWithAttachments: eW,
    hasUnsavedAttachmentChanges: eQ,
    cancelUnusedUploads: eS
  } = (0, y.Z)(), eZ = (null == ei ? true : ei.attachments) != null && (null == ei ? true : ei.attachments.length) > 0, ez = null != eX ? eX : eP, ew = null != eT && "published" in eT, eL = null != eT && !ew, eR = null != (i = null == ei ? true : ei.role_id) ? i : null, [eD, ek] = n.useState(), eG = null != eD || null != eR, eE = (0, o.bG)([U.A], () => null != eR && null !== eD ? U.A.getRole(eA, eR) : null != eD ? eD : true, [eD, eR, eA]), eB = "";
  eG && eI ? eB = R.intl.string(R.t.ih4QMU) : eG ? eB = R.intl.string(R.t.o9xphc) : eI && (eB = R.intl.string(R.t.DWYJua));
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
      priceTier: eq,
      description: eh,
      image: ej,
      imageName: eV,
      isImageChanged: eO,
      newRoleParams: eD,
      hasSavedAttachments: eZ,
      hasUnsavedAttachmentChanges: eQ
    }), [ei, em, eq, eh, ej, eV, eO, eD, eZ, eQ]),
    e9 = n.useMemo(() => e_ || null == eH || "publish" === eH || null != ez ? null : (0, r.jsx)(f.FQk, {
      className: D.Er,
      children: (0, r.jsx)(c.A, {
        message: (0, r.jsxs)("div", {
          className: D.Lk,
          children: [(0, r.jsx)(f.yr3, {
            size: "md",
            color: d.A.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT.css,
            secondaryColor: d.A.colors.WHITE.css
          }), (0, r.jsx)(f.Text, {
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
    (0, f.zbz)(z.DG, e => (0, r.jsx)(_, k({
      guildId: eA,
      productId: el
    }, e)), e6)
  }, [eA, e6, el]);
  let e3 = async e => {
    let A = (0, K.ig)({
      newRoleParams: eD
    });
    if (eK(A), null != A) return;
    let t = await eW(e);
    if (ey(false), null != t) {
      if (null != e.name && ev(t.name), null != e.description && eb(t.description), null != eD) {
        let e = t.role_id;
        s()(null != e, "Cannot update role without role ID"), await p.A.updateRole(eA, e, eD)
      }
      ek(true), ea(t.id), "published" in e && true === e.published && en()
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
  return (0, r.jsxs)(f.EOs, {
    transitionState: er,
    size: f.rIJ.DYNAMIC,
    className: D.CR,
    "aria-labelledby": G,
    parentComponent: "GuildProductEditModal",
    "data-migration-pending": true,
    children: [(0, r.jsxs)(f.rQ0, {
      className: D.Hc,
      separator: false,
      "data-migration-pending": true,
      children: [(0, r.jsxs)("div", {
        className: D.TK,
        children: [(0, r.jsx)(f.Heading, {
          id: G,
          variant: "heading-xl/semibold",
          color: "text-strong",
          children: R.intl.string(R.t.DnNl1T)
        }), (0, r.jsx)(f.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: R.intl.string(R.t["Tu7f+f"])
        })]
      }), (0, r.jsx)(f.s_y, {
        onClick: e6,
        className: D.__invalid_modalCloseButton,
        "data-migration-pending": true
      })]
    }), (0, r.jsxs)(f.$mQ, {
      className: D.jE,
      scrollbarType: "none",
      "data-migration-pending": true,
      children: [(0, r.jsx)(f.IpV, {
        children: (0, r.jsxs)("div", {
          className: D.sj,
          ref: e7,
          children: [(0, r.jsx)(f.ksK, {
            label: R.intl.string(R.t.Hsk7xT),
            error: null == ez ? true : ez.getFirstFieldErrorMessage("name"),
            value: em,
            onChange: ev,
            id: E,
            maxLength: 100,
            placeholder: R.intl.string(R.t["/BiYSO"]),
            required: true
          }), (0, r.jsx)(b.A, {
            label: R.intl.string(R.t.QdKLyW),
            errorMessage: null != (v = null == ez ? true : ez.getFirstFieldErrorMessage("description")) ? v : true,
            id: B,
            className: D.kj,
            value: eh,
            onChange: eb,
            maxLength: 1500,
            placeholder: R.intl.string(R.t.BFwyum),
            showCharacterCount: eh.length > 0,
            parentModalKey: z.DG,
            required: true
          }), (0, r.jsx)(M, {
            label: R.intl.string(R.t["CAY/vh"]),
            errorMessage: null != (h = null == ez ? true : ez.getFirstFieldErrorMessage("price_tier")) ? h : true,
            guildId: eA,
            selectedPriceTier: eq,
            setPriceTier: eC
          }), (0, r.jsx)(f.D0$, {
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
                  eU(e), ex(A), ey(e.startsWith("data:") || A !== (null == ei || null == (t = ei.image_asset) ? true : t.filename))
                }
              }
            })
          }), eI ? (0, r.jsx)(f.D0$, {
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
          }) : null, eG ? (0, r.jsx)(Z.Ay, {
            error: null != (J = null == ez ? true : ez.getFirstFieldErrorMessage(K.a)) ? J : true,
            newRoleParams: eD,
            setNewRoleParams: ek,
            guildId: eA,
            listingRoleId: eR,
            productId: el
          }) : null]
        })
      }), (0, r.jsx)("div", {
        className: D.cD
      }), (0, r.jsx)(f.IpV, {
        children: (0, r.jsxs)("div", {
          className: D.mA,
          children: [(0, r.jsx)(S.A, {
            disabled: !e1 || !eo && es >= 50,
            disabledTooltip: eo ? R.intl.string(R.t["0NQ00t"]) : es >= 50 ? R.intl.format(R.t.IqWPVt, {
              maxProducts: 50
            }) : R.intl.string(R.t["Ax89/c"]),
            published: eo,
            onClick: () => {
              var e, A;
              s()(e1, "Attempting to publish/unpublish when not allowed"), eM(eo ? "unpublish" : "publish"), e3((e = k({}, eJ), A = A = {
                published: !eo
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
            className: D.AC
          }), (0, r.jsx)(f.Heading, {
            variant: "text-xs/bold",
            color: "text-default",
            className: D.B9,
            children: R.intl.string(R.t["6I7nQT"])
          }), (0, r.jsx)(f.hKd, {
            size: 4
          }), (0, r.jsx)(f.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: R.intl.string(R.t.Oq4dfU)
          }), (0, r.jsx)(f.hKd, {
            size: 16
          }), (0, r.jsx)(I.A, {
            imageUrl: ej,
            name: "" === em ? R.intl.string(R.t.EmqIwl) : em,
            description: "" === eh ? R.intl.string(R.t["11NA2L"]) : eh,
            formattedPrice: eN,
            role: eE,
            productType: eB,
            ctaComponent: (0, r.jsx)(f.Button, {
              text: R.intl.string(R.t.xUi3BL)
            }),
            cardWidth: 340,
            thumbnailHeight: 190
          })]
        })
      })]
    }), (0, r.jsx)(f.jlY, {
      "data-migration-pending": true,
      children: (0, r.jsxs)("div", {
        className: D.jj,
        children: [(0, r.jsxs)("div", {
          className: D.mx,
          children: [(0, r.jsx)(Y, {
            text: R.intl.string(R.t.YzGIVF),
            value: eG,
            onChange: e => {
              e ? ek((0, Z.Jn)()) : ek(true)
            },
            warning: null === eD ? (0, r.jsx)(Z.id, {}) : true,
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
          className: D.TM,
          children: eo ? (0, r.jsx)(f.Button, {
            variant: "secondary",
            text: R.intl.string(R.t.XYBEaV),
            disabled: !e0,
            loading: eL,
            onClick: () => {
              s()(e0, "cannot save changes for published product without adding all fields"), eM("update_publish"), e3(eJ)
            }
          }) : (0, r.jsx)(f.Button, {
            variant: "secondary",
            text: R.intl.string(R.t.ZCjwob),
            disabled: !e$,
            loading: eL,
            onClick: () => {
              s()(e$, "cannot save changes without name or price tier"), eM("draft"), e3(eJ)
            }
          })
        })]
      })
    }), (0, r.jsx)(u.F, {
      component: "div",
      className: D.Nt,
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
    children: (0, r.jsx)(J, k({}, e))
  })
}