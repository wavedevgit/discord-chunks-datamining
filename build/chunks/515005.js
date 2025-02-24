/** Chunk was on web (https://canary.discord.comweb.895a2488cd77ea6e.js.js) **/
"use strict";
n.d(t, {
  Z: () => D
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(392711),
  l = n(468194),
  c = n(481060),
  u = n(239091),
  d = n(2052),
  f = n(330726),
  p = n(691251),
  _ = n(626135),
  h = n(285651),
  m = n(373228),
  g = n(378233),
  E = n(419922),
  v = n(490095),
  b = n(981631),
  y = n(388032),
  O = n(734676);

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      S(e, t, n[t])
    })
  }
  return e
}

function T(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function N(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function A(e, t) {
  if (null == e) return {};
  var n, r, i = C(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function C(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let R = (0, l.Mg)(O.__invalid_stickerPickerPreviewDimensions),
  P = (0, l.Mg)(O.__invalid_stickerPickerPreviewPadding),
  w = 250,
  D = i.memo(function(e) {
    let {
      isDisplayingIndividualStickers: t = !1,
      preferAnimation: o = !0,
      getStickerItemProps: l,
      getStickerRowProps: S,
      gutterWidth: T,
      inspectedStickerPosition: C,
      isScrolling: D,
      isUsingKeyboardNavigation: x,
      onInspect: L,
      onSelect: M,
      rowIndex: k,
      stickerClassName: j,
      stickerDescriptors: U,
      stickerPadding: G = P,
      stickerSize: B = R,
      ownedStickerPacks: Z,
      enlargeOnInteraction: F = !1,
      channel: V,
      currentUser: H,
      checkSendability: W = !0
    } = e, {
      location: Y
    } = (0, d.O)(), K = B + 2 * G, z = i.useMemo(() => ({
      gridColumnGap: T,
      gridTemplateColumns: "repeat(auto-fill, ".concat(K, "px)"),
      height: K,
      paddingRight: t ? void 0 : K
    }), [t, T, K]), q = i.useMemo(() => ({
      width: B,
      height: B,
      padding: G
    }), [G, B]), [Q, X] = (0, f.Z)(null, 300);
    return (0, r.jsx)("div", N(I({
      className: O.row,
      style: z
    }, null == S ? void 0 : S(k)), {
      children: U.map(e => {
        var d;
        let f = e.visibleRowIndex === (null == C ? void 0 : C.rowIndex) && e.columnIndex === (null == C ? void 0 : C.columnIndex),
          S = e.type === m.al.STICKER && F && f,
          T = t => {
            if ((null == D ? void 0 : D.current) === !0 || (null == x ? void 0 : x.current) === !0) return;
            let n = t.altKey;
            n && e.type === m.al.STICKER && !(0, g.gM)(e.sticker.id) && X(e.sticker.id), null == M || M(e, n)
          },
          R = (0, s.throttle)(() => {
            (null == D ? void 0 : D.current) === !0 || (null == x ? void 0 : x.current) === !0 || f || null == L || L(e)
          }, w),
          P = () => {
            e.type === m.al.CREATE_STICKER && (_.default.track(b.rMx.OPEN_MODAL, {
              type: b.jXE.CREATE_STICKER_MODAL,
              location: Y
            }), (0, c.ZDy)(async () => {
              let {
                default: t
              } = await Promise.all([n.e("93626"), n.e("7491")]).then(n.bind(n, 136735));
              return n => (0, r.jsx)(t, I({
                guildId: e.guild_id
              }, n))
            }))
          },
          U = null !== (d = null == l ? void 0 : l(e.columnIndex, k)) && void 0 !== d ? d : {},
          {
            ref: G,
            tabIndex: K,
            onFocus: z
          } = U,
          J = A(U, ["ref", "tabIndex", "onFocus"]);
        switch (e.type) {
          case m.al.CREATE_STICKER:
            return (0, r.jsx)("div", N(I({}, J), {
              children: (0, r.jsxs)(c.P3F, {
                "aria-label": e.name,
                className: a()(O.createSticker, j, {
                  [O.createInspected]: f
                }),
                innerRef: G,
                tabIndex: K,
                onFocus: null != z ? z : R,
                onMouseMove: R,
                onClick: P,
                style: q,
                children: [!F && (0, r.jsx)("div", {
                  className: O.inspectedIndicator
                }), (0, r.jsx)("div", {
                  className: O.iconWrapper,
                  children: (0, r.jsx)(c.qJs, {
                    size: "md",
                    color: "currentColor",
                    className: O.icon
                  })
                }), (0, r.jsx)(c.Text, {
                  color: "interactive-active",
                  variant: "text-xs/normal",
                  children: y.NW.string(y.t["+nEuqq"])
                })]
              })
            }), e.guild_id);
          case m.al.STICKER: {
            let s = t && null != Z && (0, g.jl)(e.sticker) && !Z.has(e.sticker.pack_id),
              l = e => {
                (0, u.jW)(e, async () => {
                  let {
                    default: e
                  } = await n.e("39010").then(n.bind(n, 269254));
                  return t => (0, r.jsx)(e, I({}, t))
                })
              };
            return (0, i.createElement)("div", N(I({}, J), {
              key: e.sticker.id
            }), (0, r.jsxs)(c.P3F, {
              className: a()(O.sticker, j, {
                [O.stickerInspected]: f,
                [O.showPulse]: Q === e.sticker.id
              }),
              innerRef: G,
              tabIndex: K,
              onFocus: null != z ? z : R,
              onMouseMove: R,
              onClick: T,
              onContextMenu: l,
              style: q,
              "data-type": p.S.STICKER,
              "data-id": e.sticker.id,
              children: [(0, r.jsx)(c.nn4, {
                children: (0, E.Co)(e.sticker)
              }), (0, r.jsxs)("div", {
                "aria-hidden": !0,
                children: [!F && (0, r.jsx)("div", {
                  className: O.inspectedIndicator
                }), (0, r.jsx)(E.ZP, {
                  className: a()(O.stickerNode, {
                    [O.stickerNodeDimmed]: F && !f && null != C && -1 !== C.rowIndex && -1 !== C.columnIndex,
                    [O.stickerNodeHidden]: S,
                    [O.stickerUnsendable]: W && !(0, h.kl)(e.sticker, H, V)
                  }),
                  disableAnimation: !f && !o,
                  enlargeOnInteraction: F,
                  isInteracting: f,
                  maskAsset: f,
                  sticker: e.sticker,
                  size: B
                }), s ? (0, r.jsx)(v.Z, {
                  size: 20
                }) : null]
              })]
            }))
          }
        }
      })
    }))
  })