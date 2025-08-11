/** Chunk was on 47495 **/
/** chunk id: 305813, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk22267 = require("./22267.jsx"),
  Chunk786761 = require("./786761.js"),
  Chunk3148 = require("./3148.js"),
  Chunk739566 = require("./739566.js"),
  Chunk753206 = require("./753206.js"),
  Chunk678135 = require("./678135.js"),
  Chunk687158 = require("./687158.js"),
  Chunk28660 = require("./28660.js"),
  Chunk502762 = require("./502762.js"),
  Chunk598077 = require("./598077.js"),
  Chunk626135 = require("./626135.js"),
  Chunk63063 = require("./63063.js"),
  Chunk981631 = require("./981631.js"),
  Chunk228168 = require("./228168.js"),
  Chunk698282 = require("./698282.js"),
  Chunk388032 = require("./388032.js"),
  Chunk454507 = require("./454507.js");

function v(e) {
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

function k(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function E(e) {
  let {
    user: t,
    selectedFontId: n,
    selectedEffectId: l,
    selectedColors: E,
    onClose: T
  } = e, D = new x.Z(k(v({}, t), {
    displayNameStyles: {
      fontId: n,
      effectId: l,
      colors: E
    }
  })), w = (0, s.ZP)(), I = (0, i.wjy)(w), [A, L] = (0, o.useState)(I), R = (0, g.ZP)(t.id, null), {
    bannerSrc: B
  } = (0, h.Z)({
    displayProfile: R,
    size: 413,
    canAnimate: false
  }), M = A ? S.BRd.DARK : S.BRd.LIGHT;
  (I && A || !I && !A) && (M = w);
  let Z = (0, o.useCallback)(() => {
      j.default.track(S.rMx.DISPLAY_NAME_STYLES_CLOSED), T()
    }, [T]),
    Y = (0, o.useCallback)(e => {
      L(e === S.BRd.DARK), j.default.track(S.rMx.DISPLAY_NAME_STYLES_THEME_TOGGLE, {
        dark: e === S.BRd.DARK
      })
    }, []);
  return <div className={P.previewSection}>{<i.xBx data-migration-pending={true} separator={false} className={P.sectionHeader}><i.olH data-migration-pending={true} onClick={Z} innerClassName={P.closeButton} /></i.xBx>}{null != B && <b.Z user={D} displayProfile={R} themeType={C.lY.MODAL_V2} className={P.backgroundThemeContainer} forceUserTheme={true}><div className={P.bannerBackground} style={{
          backgroundImage: "url(".concat(B, ")")
        }} /></b.Z>}{<i.f6W theme={M}>{e => (0, r.jsxs)("div", {
        className: a()(P.previewCards, e),
        inert: true,
        children: [(0, r.jsx)(m.Z, {
          user: D,
          pendingAvatar: true,
          canUsePremiumCustomization: true,
          disabledInputs: true,
          hideCustomStatus: true,
          hideBioSection: true,
          containerClassName: P.profile,
          interactive: false,
          hideViewFullProfileButton: true
        }), (0, r.jsx)(f.Z, {
          author: (0, p.ij)(D, null),
          message: (0, d.e5)(k(v({}, (0, u.ZP)({
            channelId: "1337",
            content: O.intl.string(y.default.h5Cuen)
          })), {
            state: S.yb.SENT,
            id: "0"
          })),
          isGroupStart: true,
          hideSimpleEmbedContent: true,
          hideGuildTag: true,
          className: P.chatMessage
        }), (0, r.jsx)(c.Z, {
          user: D,
          nameplate: null,
          nameplateData: D.nameplate,
          className: P.nameplate
        })]
      })}</i.f6W>}{<div className={P.themeToggleSection}>{<i.Text variant={"text-xs/normal"} color={"text-muted"}>{O.intl.format(y.default.prQba2, {
          helpArticleLink: _.Z.getArticleURL(S.BhN.DISPLAY_NAME_STYLES)
        })}</i.Text>}{<N darkPreview={A} onToggleTheme={Y} />}</div>}</div>
}

function N(e) {
  let {
    darkPreview: t,
    onToggleTheme: n
  } = e;
  return <i.sY7 className={P.themeToggleControl} optionClassName={P.themeToggleOption} options={[{
      name: "",
      tooltip: O.intl.string(O.t.b8Cei4),
      value: S.BRd.DARK,
      icon: i.Z6G
    }, {
      name: "",
      tooltip: O.intl.string(O.t.K2sFfn),
      value: S.BRd.LIGHT,
      icon: i.chG
    }]} value={t ? S.BRd.DARK : S.BRd.LIGHT} onChange={e => {
      let {
        value: t
      } = e;
      return n(t)
    }} look={"pill"} />
}