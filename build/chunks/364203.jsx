/** Chunk was on web.js **/
/** chunk id: 364203, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => ee
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk954955 = require("./954955.js"),
  l = require.n(Chunk954955),
  Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk146187 = require("./146187.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk213609 = require("./213609.js"),
  Chunk357352 = require("./357352.js"),
  Chunk565942 = require("./565942.js"),
  Chunk784238 = require("./784238.js"),
  Chunk612659 = require("./612659.js"),
  Chunk703656 = require("./703656.js"),
  Chunk727939 = require("./727939.js"),
  Chunk592125 = require("./592125.js"),
  Chunk626135 = require("./626135.js"),
  Chunk839606 = require("./839606.js"),
  Chunk411149 = require("./411149.js"),
  Chunk988290 = require("./988290.js"),
  Chunk721359 = require("./721359.js"),
  Chunk640963 = require("./640963.js"),
  Chunk628309 = require("./628309.js"),
  Chunk461762 = require("./461762.js"),
  Chunk680783 = require("./680783.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.js"),
  Chunk874577 = require("./874577.js");

function G(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function B(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      G(e, t, n[t])
    })
  }
  return e
}

function Z(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function F(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Z(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let V = 88,
  H = "remove-wallpaper",
  Y = .5,
  W = 250;

function K(e) {
  let {
    handleClose: t
  } = e;
  return (0, g.Z)({
    type: c.ImpressionTypes.POPOUT,
    name: c.ImpressionNames.CHAT_WALLPAPER_PICKER_COACHMARK
  }), <div className={U.coachmarkHeaderContainer}>{<div className={U.badgeAndCloseRow}>{<_.lBU text={j.intl.string(j.t.oW0eUV)} />}{<div className={U.coachmarkCloseIcon}><d.P size={"sm"} onClick={() => {
            S.default.track(x.rMx.CHAT_WALLPAPER_PICKER_CANCEL_CLICKED, {
              cta_location: "coachmark_header"
            }), t()
          }} /></div>}</div>}{<div className={U.coachmarkHeaderTextContainer}>{<_.X6q variant={"heading-lg/extrabold"}>{j.intl.string(j.t.dFhhcX)}</_.X6q>}{<_.Text className={U.subtitle} variant={"text-xs/medium"} color={"text-muted"}>{j.intl.string(j.t.u7Hzjo)}</_.Text>}</div>}</div>
}

function z(e) {
  let {
    isPremiumTier2Subscriber: t,
    handleClose: n
  } = e;
  return <div className={U.headerContainer}>{<div>{<_.X6q variant={"heading-md/semibold"}>{j.intl.string(j.t.EJ4k19)}</_.X6q>}{<_.Text className={U.subtitle} variant={"text-sm/medium"}>{t ? j.intl.string(j.t.MnUZLS) : j.intl.string(j.t.frNDKS)}</_.Text>}</div>}{<div className={U.closeContainer}><d.P size={"sm"} onClick={() => {
          S.default.track(x.rMx.CHAT_WALLPAPER_PICKER_CANCEL_CLICKED, {
            cta_location: "header"
          }), n()
        }} /></div>}</div>
}

function q(e) {
  let {
    isSelected: t,
    onSelect: n,
    selectionId: o,
    tooltipText: s,
    label: u,
    className: d,
    children: f
  } = e, p = (0, _.xUy)({
    label: u,
    isSelected: t
  }), h = i.useRef(null);
  i.useEffect(() => {
    let e = new IntersectionObserver(e => {
      e.forEach(e => {
        e.isIntersecting && (0, g.h)({
          type: c.ImpressionTypes.VIEW,
          name: c.ImpressionNames.CHAT_WALLPAPER_WALLPAPER_OPTION,
          properties: {
            design_group_id: o
          }
        })
      })
    }, {
      threshold: Y
    });
    return null != h.current && e.observe(h.current), () => {
      e.disconnect()
    }
  }, [o, h]);
  let [m, E] = i.useState("top");
  return i.useEffect(() => {
    let e = h.current;
    if (null == e) return;
    let t = l()(e => {
        E(e.intersectionRect.top === e.boundingClientRect.top ? "top" : "bottom")
      }, 200),
      n = new IntersectionObserver(e => {
        e.forEach(e => {
          t(e)
        })
      }, {
        threshold: [0, 1]
      });
    return n.observe(e), () => {
      n.disconnect(), t.cancel()
    }
  }, []), <_.ua7 text={s} position={m}>{e => (0, r.jsx)("div", {
      ref: h,
      className: a()(d, t && U.wallpaperSelected),
      children: (0, r.jsx)(_.P3F, F(B({}, e, p), {
        className: U.wallpaperSelectionClickableContainer,
        tabIndex: p.tabIndex,
        onClick: t ? x.dG4 : () => n(o),
        children: f
      }))
    })}</_.ua7>
}

function X(e) {
  let {
    isSelected: t,
    onSelect: n,
    chatWallpaperMetadata: o
  } = e, a = (0, D.Z)(o.id), {
    label: s,
    designGroupId: l
  } = o, [c, u] = i.useState(false);
  return (i.useEffect(() => {
    let e;
    if (t) {
      var n;
      let t = false,
        r = (0, E.I)(null != (n = null == a ? true : a.asset) ? n : "");
      (0, b.p)(r, () => {
        u(false), t = true
      }), e = setTimeout(() => {
        t || u(true)
      }, W)
    } else u(false);
    return () => {
      clearTimeout(e), u(false)
    }
  }, [t, a]), null == a) ? null : <q isSelected={t} onSelect={n} selectionId={l} tooltipText={s} label={s} className={U.wallpaper}>{c && <_.$jN className={U.previewLoadingSpinner} />}{<img src={(0, E.I)(a.icon)} alt={s} width={V} height={V} draggable={false} className={U.wallpaperImage} />}</q>
}

function Q(e) {
  let {
    isSelected: t,
    onSelect: n
  } = e;
  return <q isSelected={t} onSelect={n} selectionId={H} tooltipText={j.intl.string(j.t["C/MRFx"])} label={j.intl.string(j.t["C/MRFx"])} className={U.wallpaperRemoveSelection}><_.t6m size={"lg"} color={_.TVs.colors.TEXT_MUTED} /></q>
}

function J(e) {
  let {
    canApply: t,
    isUpdating: n,
    isBlurEnabled: i,
    onBlurEnabledChange: o,
    onClose: a,
    onApply: s
  } = e;
  return <_.Kqy direction={"horizontal"} justify={"space-between"} align={"center"} className={U.footerContainerStack} padding={16}>{<_.XZJ type={_.XZJ.Types.INVERTED} value={i} onChange={(e, t) => {
        S.default.track(x.rMx.CHAT_WALLPAPER_PICKER_BLUR_TOGGLED, {
          selected: t
        }), o(t)
      }}>{j.intl.string(j.t["3nPvdH"])}</_.XZJ>}{<_.Kqy direction={"horizontal"} justify={"end"} gap={0}><_.hE2>{<_.zxk variant={"secondary"} text={j.intl.string(j.t["ETE/oK"])} onClick={() => {
            S.default.track(x.rMx.CHAT_WALLPAPER_PICKER_CANCEL_CLICKED, {
              cta_location: "footer"
            }), a()
          }} disabled={n} />}{<_.zxk variant={"primary"} text={j.intl.string(j.t["1Qm829"])} onClick={s} disabled={!t} loading={n} />}</_.hE2></_.Kqy>}</_.Kqy>
}

function $() {
  return <Chunk481060.Kqy direction={"horizontal"} justify={"space-between"} className={Chunk874577.footerContainerStack} padding={16}>{<Chunk481060.Text variant={"text-sm/medium"} color={"text-muted"} className={Chunk874577.nonTier2FooterText}>{Chunk388032.intl.format(Chunk388032.t["0Tapv7"], {
        onClickNitro: () => {
          Chunk626135.default.track(Chunk981631.rMx.CHAT_WALLPAPER_NITRO_LINK_CLICKED), (0, Chunk703656.uL)(Chunk981631.Z5c.NITRO_HOME)
        }
      })}</Chunk481060.Text>}{<Chunk784238.Z className={Chunk874577.getNitroButton} textOptions={{
        textOverride: Chunk388032.intl.string(Chunk388032.t.JST6jo),
        textClassName: Chunk874577.getNitroButtonText
      }} subscriptionTier={Chunk474936.Si.TIER_2} showGradient={true} color={Chunk755721.Tt.BRAND} size={Chunk755721.zx.Sizes.MEDIUM} />}</Chunk481060.Kqy>
}
let ee = function(e) {
  let {
    className: t,
    position: o = x.VD2.TOP_RIGHT,
    config: s
  } = e, {
    analyticsLocations: l
  } = (0, m.ZP)(h.Z.CHAT_WALLPAPER_PICKER), {
    activePickerChannelId: c,
    closePicker: d,
    setPreviewWallpaperId: f
  } = (0, A.B)(), g = (0, L.Z)(c), E = (0, O.m)(k.p9.TIER_2), [b, y] = i.useState(false), v = (0, C.e)(b), D = (0, w.u)();
  (0, R.W)();
  let G = (0, u.e7)([N.Z], () => N.Z.isFetchingWallpapers),
    B = (0, u.e7)([N.Z], () => N.Z.failedToFetchWallpapers),
    Z = (0, u.e7)([N.Z], () => N.Z.getWallpaperById(null == g ? true : g.wallpaperId)),
    F = i.useRef(null),
    V = i.useRef(null);
  (0, _.Tbt)(V), i.useEffect(() => {
    V.current = F.current
  }, [F]), i.useEffect(() => {
    null != Z && y(Z.isBlurred && E)
  }, [Z, E]);
  let H = i.useCallback(() => {
      d()
    }, [d]),
    {
      isUpdating: Y,
      updateChatWallpaper: W
    } = (0, P.x)({
      channelId: c,
      onUpdateComplete: H
    }),
    q = i.useCallback(function() {
      let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : M.L.USER_DISMISS;
      (null == s ? true : s.markDismissed) != null && s.markDismissed(e), d()
    }, [d, s]);
  (0, p.ZP)(() => () => {
    q(M.L.INDIRECT_ACTION)
  });
  let ee = i.useCallback(() => {
      if (null == c || null == g || true === g.wallpaperId) return;
      let e = T.Z.getChannel(c);
      S.default.track(x.rMx.CHAT_WALLPAPER_PICKER_APPLY_CLICKED, {
        wallpaper_id: g.wallpaperId,
        is_blur_enabled: b,
        channel_id: c,
        channel_type: null == e ? true : e.type
      }), W(c, g.wallpaperId, () => {
        (0, _.showToast)((0, _.createToast)(j.intl.string(j.t.F8FvU1), _.ToastType.FAILURE))
      })
    }, [c, g, W, b]),
    et = i.useCallback(e => {
      if ((null == Z ? true : Z.designGroupId) != null) {
        var t;
        let n = D[Z.designGroupId].find(t => t.isBlurred === e);
        f(null != (t = null == n ? true : n.id) ? t : null)
      } else y(e)
    }, [null == Z ? true : Z.designGroupId, D, f]),
    en = i.useCallback(e => {
      let t = D[e];
      if (null == t) return;
      let n = t.find(e => e.isBlurred === b);
      null != n && (S.default.track(x.rMx.CHAT_WALLPAPER_WALLPAPER_OPTION_SELECTED, {
        wallpaper_id: n.id,
        is_blurred: n.isBlurred
      }), f(n.id))
    }, [b, D, f]),
    er = i.useCallback(e => {
      e.keyCode === x.yXg.ESCAPE && q()
    }, [q]);
  i.useEffect(() => {
    let e = e => {
      var t;
      V.current = (null == (t = F.current) ? true : t.contains(e.target)) ? F.current : null
    };
    return document.addEventListener("mousedown", e), () => {
      document.removeEventListener("mousedown", e)
    }
  }, [F]);
  let ei = null == c && (null == s ? true : s.pickerType) !== A.j.COACHMARK,
    eo = null;
  return eo = B || ei ? <div className={U.errorContainer}>{<_.Eep src={n(167969)} alt={"Error"} height={100} width={200} />}{<_.Text variant={"text-sm/medium"} color={"text-muted"} className={U.errorText}>{j.intl.string(j.t.F8FvU1)}</_.Text>}</div> : G ? <div className={U.loadingContainer}><_.$jN /></div> : <r.Fragment>{<_.Ttm className={U.wallpapersContainer}>{<Q isSelected={null == g || null === g.wallpaperId} onSelect={() => {
          S.default.track(x.rMx.CHAT_WALLPAPER_WALLPAPER_OPTION_SELECTED, {
            wallpaper_id: null,
            is_blurred: false
          }), f(null)
        }} />}{v.map(e => <X isSelected={(null == Z ? true : Z.designGroupId) === e.designGroupId} onSelect={en} chatWallpaperMetadata={e} />)}</_.Ttm>}{E ? <J canApply={(null == g ? true : g.wallpaperId) !== true} isUpdating={Y} isBlurEnabled={b} onBlurEnabledChange={et} onClose={q} onApply={ee} /> : <$ />}</r.Fragment>, <m.Gt value={l}><I.Z className={a()(U.draggableContainer, t)} defaultPosition={o} topOffset={88}><div className={U.container} ref={F} onKeyDown={er}>{(null == s ? true : s.pickerType) === A.j.COACHMARK ? <K handleClose={q} isPremiumTier2Subscriber={E} /> : <z handleClose={q} isPremiumTier2Subscriber={E} />}{<div className={U.divider} />}{<_.JcV containerRef={F}>{eo}</_.JcV>}</div></I.Z></m.Gt>
}