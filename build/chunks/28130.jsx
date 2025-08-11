/** Chunk was on 89289 **/
/** chunk id: 28130, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => U
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk807582 = require("./807582.js"),
  Chunk813197 = require("./813197.js"),
  Chunk222062 = require("./222062.js"),
  Chunk530329 = require("./530329.js"),
  Chunk373230 = require("./373230.js"),
  Chunk72703 = require("./72703.js"),
  Chunk782818 = require("./782818.js"),
  Chunk442552 = require("./442552.js"),
  Chunk430824 = require("./430824.js"),
  Chunk914010 = require("./914010.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk267642 = require("./267642.js"),
  Chunk74538 = require("./74538.js"),
  Chunk621961 = require("./621961.js"),
  Chunk884858 = require("./884858.js"),
  Chunk981631 = require("./981631.js"),
  Chunk486324 = require("./486324.js"),
  Chunk869783 = require("./869783.js"),
  Chunk388032 = require("./388032.js"),
  Chunk355484 = require("./355484.js");

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}
let F = [{
  gif: require("./495682.js"),
  png: require("./458060.js")
}, {
  gif: require("./842786.js"),
  png: require("./460790.js")
}, {
  gif: require("./578831.js"),
  png: require("./642193.js")
}, {
  gif: require("./145908.js"),
  png: require("./690695.js")
}];

function Z(e) {
  let {
    shouldAnimate: t = true
  } = e;
  return <div className={R.gifGrid}>{F.map(e => (0, r.jsx)("div", {
      className: R.gif,
      style: {
        backgroundImage: "url(".concat(t ? e.gif : e.png, ")")
      }
    }, e.gif))}</div>
}

function D(e) {
  let {
    guildFeature: t,
    guild: n
  } = e;
  if (null == t || null == n) return;
  let r = (0, v._p)(t),
    a = n.features.has(t);
  if (null == r) return;
  let l = (0, v.nW)(r);
  return a ? T.intl.formatToPlainString(T.t.u3L3TU, {
    levelName: l
  }) : T.intl.formatToPlainString(T.t["r/v25e"], {
    levelName: l
  })
}

function I(e) {
  let {
    guildFeature: t,
    guild: n
  } = e;
  return <div className={R.boostingPill}><d.Z guildFeature={t} guild={n} hideTooltip={true} /></div>
}

function k(e) {
  let {
    icon: t,
    label: n,
    guildFeature: a,
    guild: l,
    shouldShowPremiumIcon: s
  } = e, c = null != l && null != a;
  return <div className={i()(R.optionDescription, {
      [R.hasBoostingPill]: c
    })} aria-hidden={true}>{<div className={R.optionIconAndLabel}>{t}{<o.Text variant={"text-sm/semibold"} className={i()(R.optionLabelText, {
          [R.hasPremiumIcon]: s
        })}>{s && <o.DY3 text={T.intl.string(T.t["5AFxuL"])}><o.SrA size={"xs"} color={"currentColor"} className={R.premiumWheel} /></o.DY3>}{n}</o.Text>}</div>}{c && <I guild={l} guildFeature={a} />}</div>
}

function M(e) {
  let {
    label: t,
    uploadType: n,
    guild: a,
    maxFileSizeBytes: l,
    filters: s,
    handleOpenImageEditingModal: c,
    handleFileSizeError: u
  } = e, d = (0, E.GY)(n), p = (0, E.C6)(n, {
    isGIF: false
  }), g = D({
    guildFeature: p,
    guild: a
  });
  return <r.Fragment>{<o.tEY within={true}><div className={i()(R.option, R.imageUploadOption)}>{<k icon={(0, r.jsx)(o.FmF, {
            size: "md",
            color: "currentColor"
          })} label={t} guildFeature={p} guild={a} shouldShowPremiumIcon={d} />}{<f.ZP aria-label={t} tabIndex={0} onChange={c} maxFileSizeBytes={l} onFileSizeError={u} filters={s} multiple={false} />}</div></o.tEY>}{null != g && <o.nn4>{g}</o.nn4>}</r.Fragment>
}

function L(e) {
  let {
    uploadType: t,
    guild: n,
    handleOpenGIFPickerModal: a
  } = e, {
    shouldAnimate: l,
    onMouseEnter: i,
    onMouseLeave: s
  } = (0, j.Z)(), c = (0, E.Kq)(t), u = (0, E.C6)(t, {
    isGIF: true
  }), d = D({
    guildFeature: u,
    guild: n
  });
  return <r.Fragment>{<o.P3F className={R.option} onClick={a} aria-label={T.intl.string(T.t["xsC+//"])} onMouseEnter={i} onMouseLeave={s}>{<Z shouldAnimate={l} />}{<k icon={(0, r.jsx)(o.OUq, {
          size: "md",
          color: "currentColor"
        })} label={T.intl.string(T.t["xsC+//"])} guildFeature={u} guild={n} shouldShowPremiumIcon={c} />}</o.P3F>}{null != d && <o.nn4>{d}</o.nn4>}</r.Fragment>
}

function U(e) {
  let {
    transitionState: t,
    onClose: l,
    onComplete: i,
    uploadType: d,
    maxFileSizeBytes: f,
    showUpsellHeader: j,
    filters: v,
    analyticsLocation: E,
    analyticsLocations: F = [],
    imageSpecifications: Z,
    modalTitle: D = T.intl.string(T.t.DToW4e),
    uploadOptionTitle: I = T.intl.string(T.t["MsUY/f"]),
    allowRecentAvatarsSelection: k = true
  } = e, U = (0, s.e7)([A.default], () => A.default.getCurrentUser()), B = (0, s.e7)([x.Z], () => x.Z.getGuildId()), H = (0, s.e7)([y.Z], () => y.Z.getGuild(B)), V = (0, o.vRw)(), z = d === w.pC.AVATAR || d === w.pC.BANNER, G = !O.ZP.canUseAnimatedAvatar(U) && d === w.pC.AVATAR, q = (0, p.M)(!z), W = (0, m.T)({
    location: "NewSelectImageModal"
  }) && k, {
    analyticsLocations: Y,
    newestAnalyticsLocation: X
  } = (0, u.ZP)(F, c.Z.SELECT_IMAGE_MODAL), J = a.useCallback(e => {
    let {
      assetOrigin: t = h.q.NEW_ASSET,
      imageUri: n,
      file: r,
      originalAsset: a,
      isFromTenor: s = false
    } = e;
    l(), i({
      assetOrigin: t,
      imageUri: n,
      file: r,
      originalAsset: a,
      isFromTenor: s
    })
  }, [l, i]), K = a.useCallback((e, t) => {
    if (t.type === P.m.MP4) return J({
      imageUri: e,
      file: t
    });
    (0, o.ZDy)(async () => {
      let {
        default: a
      } = await Promise.all([n.e("59732"), n.e("58989")]).then(n.bind(n, 712451));
      return n => <a{..._({
        imageUri: e,
        file: t,
        onCrop: J,
        uploadType: d,
        showUpsellHeader: j,
        analyticsPage: null == E ? true : E.page
      }, n)} />
    }, {
      contextKey: V
    })
  }, [null == E ? true : E.page, V, J, j, d]), $ = a.useCallback(() => {
    (0, N.Z)(f)
  }, [f]), Q = a.useCallback(() => {
    (0, o.ZDy)(async () => {
      let {
        default: e
      } = await n.e("72891").then(n.bind(n, 195297));
      return t => <e{..._({
        uploadType: d,
        onComplete: e => {
          let {
            imageUri: t,
            file: n
          } = e;
          return J({
            imageUri: t,
            file: n,
            isFromTenor: true
          })
        },
        showUpsellHeader: j,
        analyticsPage: null == E ? true : E.page
      }, t)} />
    }, {
      contextKey: V
    })
  }, [null == E ? true : E.page, V, J, j, d]);
  a.useEffect(() => {
    G && C.default.track(S.rMx.PREMIUM_UPSELL_VIEWED, {
      type: S.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
      location_stack: Y
    }), C.default.track(S.rMx.OPEN_MODAL, {
      type: S.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
      location: E,
      location_stack: Y,
      upload_type: d
    })
  }, [G, E, Y, d]);
  let ee = j && q,
    et = d === w.pC.AVATAR && W;
  return <o.Y0X transitionState={t} size={o.CgR.DYNAMIC} className={R.modal} parentComponent={"SelectImageModal"}>{<o.xBx className={R.modalHeader} separator={false}>{<o.X6q variant={"heading-lg/semibold"}>{D}</o.X6q>}{<o.olH onClick={l} className={R.modalCloseButton} />}</o.xBx>}{<o.hzk className={R.modalContent}>{<div className={R.imageSelectionSection}>{<ul className={R.optionsList} aria-label={T.intl.string(T.t.iBnqtb)}>{<li><M label={I} uploadType={d} guild={H} handleOpenImageEditingModal={K} maxFileSizeBytes={f} filters={v} handleFileSizeError={$} /></li>}{<li><L uploadType={d} guild={H} handleOpenGIFPickerModal={Q} /></li>}</ul>}{null != Z ? <o.Text className={R.imageSpecifications} variant={"text-sm/normal"} color={"text-muted"}>{Z}</o.Text> : null}</div>}{et && <b.Z onComplete={J} />}{ee && <g.Z uploadType={d} analyticsSource={X} showUpsell={true} position={"inline"} showShadow={false} className={R.premiumUpsell} />}</o.hzk>}</o.Y0X>
}