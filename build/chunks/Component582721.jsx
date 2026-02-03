/** Chunk was on web.js **/
/** chunk id: 582721, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => D
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  Chunk23339 = require("./23339.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk212245 = require("./212245.js"),
  Chunk304072 = require("./304072.js"),
  Chunk60587 = require("./60587.js"),
  Chunk954571 = require("./954571.js"),
  Chunk361670 = require("./361670.js"),
  Chunk842086 = require("./842086.js"),
  Chunk378058 = require("./378058.js"),
  Chunk148355 = require("./148355.jsx"),
  Chunk256698 = require("./256698.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk664445 = require("./664445.js");

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      A(e, t, n[t])
    })
  }
  return e
}

function S(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function C(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = N(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function N(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let w = (0, Chunk23339.xI)(Chunk664445.__invalid_stickerPickerPreviewDimensions),
  R = (0, Chunk23339.xI)(Chunk664445.__invalid_stickerPickerPreviewPadding),
  P = 250,
  D = Chunk64700.memo(function(e) {
    let {
      isDisplayingIndividualStickers: t = false,
      preferAnimation: a = true,
      getStickerItemProps: l,
      getStickerRowProps: A,
      gutterWidth: S,
      inspectedStickerPosition: N,
      isScrolling: D,
      isUsingKeyboardNavigation: L,
      onInspect: x,
      onSelect: M,
      rowIndex: j,
      stickerClassName: k,
      stickerDescriptors: U,
      stickerPadding: G = R,
      stickerSize: F = w,
      ownedStickerPacks: V,
      enlargeOnInteraction: B = false,
      channel: H,
      currentUser: Y,
      checkSendability: W = true
    } = e, {
      location: K
    } = (0, d.p)(), z = F + 2 * G, q = i.useMemo(() => ({
      gridColumnGap: S,
      gridTemplateColumns: "repeat(auto-fill, ".concat(z, "px)"),
      height: z,
      paddingRight: t ? true : z
    }), [t, S, z]), Z = i.useMemo(() => ({
      width: F,
      height: F,
      padding: G
    }), [G, F]), [Q, X] = (0, f.A)(null, 300);
    return (0, r.jsx)("div", T(I({
      className: v.nM,
      style: q
    }, null == A ? true : A(j)), {
      children: U.map(e => {
        var d;
        let f = e.visibleRowIndex === (null == N ? true : N.rowIndex) && e.columnIndex === (null == N ? true : N.columnIndex),
          A = e.type === m.op.STICKER && B && f,
          S = t => {
            if ((null == D ? true : D.current) === true || (null == L ? true : L.current) === true) return;
            let n = t.altKey;
            n && e.type === m.op.STICKER && !(0, g.o1)(e.sticker.id) && X(e.sticker.id), null == M || M(e, n)
          },
          w = (0, s.throttle)(() => {
            (null == D ? true : D.current) === true || (null == L ? true : L.current) === true || f || null == x || x(e)
          }, P),
          R = () => {
            e.type === m.op.CREATE_STICKER && (_.default.track(b.HAw.OPEN_MODAL, {
              type: b.JJy.CREATE_STICKER_MODAL,
              location: K
            }), (0, c.mMO)(async () => {
              let {
                default: t
              } = await Promise.all([n.e("29143"), n.e("64800")]).then(n.bind(n, 445002));
              return n => (0, r.jsx)(t, I({
                guildId: e.guild_id
              }, n))
            }))
          },
          U = null != (d = null == l ? true : l(e.columnIndex, j)) ? d : {},
          {
            ref: G,
            tabIndex: z,
            onFocus: q
          } = U,
          J = C(U, ["ref", "tabIndex", "onFocus"]);
        switch (e.type) {
          case m.op.CREATE_STICKER:
            return (0, r.jsx)("div", T(I({}, J), {
              children: (0, r.jsxs)(c.DUT, {
                "aria-label": e.name,
                className: o()(v.wP, k, {
                  [v.Kj]: f
                }),
                innerRef: G,
                tabIndex: z,
                onFocus: null != q ? q : w,
                onMouseMove: w,
                onClick: R,
                style: Z,
                children: [!B && (0, r.jsx)("div", {
                  className: v.fw
                }), (0, r.jsx)("div", {
                  className: v.P0,
                  children: (0, r.jsx)(c.j96, {
                    size: "md",
                    color: "currentColor",
                    className: v.Kk
                  })
                }), (0, r.jsx)(c.Text, {
                  color: "interactive-text-active",
                  variant: "text-xs/normal",
                  children: O.intl.string(O.t["+nEuqr"])
                })]
              })
            }), e.guild_id);
          case m.op.STICKER: {
            let s = t && null != V && (0, g.FD)(e.sticker) && !V.has(e.sticker.pack_id),
              l = e => {
                (0, u.L3)(e, async () => {
                  let {
                    default: e
                  } = await n.e("46132").then(n.bind(n, 233503));
                  return t => (0, r.jsx)(e, I({}, t))
                })
              };
            return (0, i.createElement)("div", T(I({}, J), {
              key: e.sticker.id
            }), (0, r.jsxs)(c.DUT, {
              className: o()(v.yI, k, {
                [v.PV]: f,
                [v.TV]: Q === e.sticker.id
              }),
              innerRef: G,
              tabIndex: z,
              onFocus: null != q ? q : w,
              onMouseMove: w,
              onClick: S,
              onContextMenu: l,
              style: Z,
              "data-type": p.g.STICKER,
              "data-id": e.sticker.id,
              "data-name": e.sticker.name,
              "data-format-type": e.sticker.format_type,
              children: [(0, r.jsx)(c.AC4, {
                children: (0, E.h)(e.sticker)
              }), (0, r.jsxs)("div", {
                "aria-hidden": true,
                children: [!B && (0, r.jsx)("div", {
                  className: v.fw
                }), (0, r.jsx)(E.A, {
                  className: o()(v.SI, {
                    [v.ot]: B && !f && null != N && false !== N.rowIndex && false !== N.columnIndex,
                    [v.Q$]: A,
                    [v.No]: W && !(0, h.G7)(e.sticker, Y, H)
                  }),
                  disableAnimation: !f && !a,
                  enlargeOnInteraction: B,
                  isInteracting: f,
                  maskAsset: f,
                  sticker: e.sticker,
                  size: F
                }), s ? (0, r.jsx)(y.A, {
                  size: 20
                }) : null]
              })]
            }))
          }
        }
      })
    }))
  })