/** Chunk was on web.js **/
/** chunk id: 765585, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk428967 = require("./428967.js"),
  Chunk266454 = require("./266454.js"),
  Chunk605236 = require("./605236.js"),
  Chunk279745 = require("./279745.jsx"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk418952 = require("./418952.js");
let g = 280,
  E = Chunk73800.forwardRef(function(e, t) {
    let {
      body: n,
      header: o,
      artClassName: E,
      headerClassName: b,
      contentClassName: y,
      tryItText: O,
      dismissText: v,
      onTryFeature: I,
      onClose: T,
      className: S,
      inlineArt: A = false,
      isPremiumFeature: N = false,
      shouldUseHorizontalButtons: C = false,
      showGIFTag: R = false,
      dismissibleContent: P,
      position: w = "top",
      align: D = "center",
      art: L,
      isPremiumEarlyAccess: x = false,
      maxWidth: M = g,
      hideDismissButton: k = false,
      pointerClassName: j,
      dismissIconClassName: U,
      dismissIcon: G,
      onDismissIconClick: B,
      tryItButtonColor: Z
    } = e, F = C ? s.zx.Sizes.LARGE : s.zx.Sizes.MAX, [V, H] = i.useState(false), {
      ref: Y,
      width: W
    } = (0, c.ZP)();

    function K(e) {
      if ((0, u.lg)(P)) return void(0, f.bj)(P, {
        dismissAction: e
      });
      (0, d.Q3)(P, {
        dismissAction: e
      })
    }

    function z() {
      return null == n ? null : "string" == typeof n ? <l.Text variant={"text-sm/normal"} color={"always-white"}>{n}</l.Text> : n
    }
    return i.useEffect(() => {
      var e, t;
      let n = (null != (t = null == (e = Y.current) ? true : e.scrollWidth) ? t : 0) + 64;
      !V && n > M && H(true)
    }, [V, W, Y, M]), i.useEffect(() => {
      (0, f.kk)(P)
    }, [P]), <div className={S} ref={t}><div className={a()(m.content, y, {
          [m.contentNoArt]: null == E || A,
          [m.contentPremium]: N || x
        })}>{null != G && <l.P3F onClick={B} className={U}>{G}</l.P3F>}{<div className={a()(E, A ? m.artInline : m.artAbsolute)}>{R && <_.Z className={m.gifTag} />}{L}</div>}{<div className={m.body}>{<l.X6q className={a()(N ? m.headerWithPremiumIcon : m.header, b)} variant={"heading-md/bold"} color={"always-white"}>{N && !x ? <l.SrA size={"md"} color={"currentColor"} className={m.premiumIcon} /> : null}{x ? <l.Text color={"always-white"} variant={"eyebrow"} className={m.earlyAccessBadgeContainer}>{<l.SrA size={"md"} color={"currentColor"} className={m.earlyAccessIcon} />}{<span className={m.earlyAccessText}>{h.intl.string(h.t.phHyIS)}</span>}</l.Text> : null}{o}</l.X6q>}{z()}</div>}{<div ref={Y} className={V || !C ? m.buttonContainerVertical : m.buttonContainerHorizontal}>{null != I ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(s.zx, {
              className: m.button,
              size: F,
              onClick: e => {
                null == T || T(e), I(e), K(p.L.PRIMARY)
              },
              color: null != Z ? Z : N || x ? s.zx.Colors.BRAND_INVERTED : s.zx.Colors.WHITE,
              children: null != O ? O : h.intl.string(h.t.IHf1RE)
            }), !k && (0, r.jsx)(s.zx, {
              className: m.button,
              size: F,
              onClick: e => {
                null == T || T(e), K(p.L.DISMISS)
              },
              color: N || x ? s.zx.Colors.WHITE : s.zx.Colors.BRAND,
              look: N || x ? s.zx.Looks.LINK : s.zx.Looks.FILLED,
              children: null != v ? v : h.intl.string(h.t.om7Ovr)
            })]
          }) : (0, r.jsx)(s.zx, {
            className: m.button,
            size: s.zx.Sizes.MAX,
            onClick: e => {
              null == T || T(e), K(p.L.PRIMARY)
            },
            color: s.zx.Colors.WHITE,
            children: h.intl.string(h.t.HU2IR0)
          })}</div>}{<div className={a()(m.pointer, j, {
            [m.bottomPointer]: "top" === w,
            [m.centerLeftPointer]: "right" === w && "center" === D,
            [m.topLeftPointer]: "right" === w && "top" === D,
            [m.bottomLeftPointer]: "right" === w && "bottom" === D
          })} />}</div></div>
  })