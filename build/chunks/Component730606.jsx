/** Chunk was on web.js **/
/** chunk id: 730606, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Qk: () => C,
  WG: () => R,
  ZP: () => w
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk991621 = require("./991621.js"),
  Chunk936141 = require("./936141.js"),
  Chunk629710 = require("./629710.js"),
  Chunk134432 = require("./134432.js"),
  Chunk124347 = require("./124347.jsx"),
  Chunk411405 = require("./411405.jsx"),
  Chunk52824 = require("./52824.js"),
  Chunk585483 = require("./585483.js"),
  Chunk956664 = require("./956664.js"),
  Chunk254109 = require("./254109.js"),
  Chunk212459 = require("./212459.js"),
  Chunk792297 = require("./792297.jsx"),
  Chunk369171 = require("./369171.js"),
  Chunk683528 = require("./683528.jsx"),
  Chunk545093 = require("./545093.jsx"),
  Chunk549635 = require("./549635.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk810348 = require("./810348.js");

function C(e) {
  let {
    src: t,
    width: n,
    height: r,
    hasMultiple: i = false,
    options: a
  } = e, {
    width: o,
    height: s
  } = (0, b.p)(i, {
    width: n,
    height: r
  });
  f.ZP.preloadImage({
    src: t,
    dimensions: {
      maxWidth: o,
      maxHeight: s,
      imageWidth: n,
      imageHeight: r
    },
    options: a
  })
}

function N(e, t) {
  return (e % t + t) % t
}

function P(e) {
  let {
    children: t,
    isObscured: n,
    src: a
  } = e, [s, l] = i.useState(false), u = i.useCallback(() => {
    l(e => !e)
  }, []);
  return n ? (0, r.jsx)(p.aQ.Provider, {
    value: s,
    children: (0, r.jsx)(p.ZP, {
      type: p.ZP.Types.ATTACHMENT,
      reason: c.wk.EXPLICIT_CONTENT,
      obscured: true,
      isSingleMosaicItem: true,
      onToggleObscurity: u,
      children: e => (0, r.jsx)("div", {
        className: o()(A.obscureWrapper, {
          [A.obscure]: e
        }),
        children: t(e)
      })
    }, a)
  }) : (0, r.jsx)(r.Fragment, {
    children: t(false)
  })
}

function R(e, t) {
  if ("IMAGE" === e.type) {
    if (!(0, h._H)(e)) return void(0, d.po)(e.url);
    C({
      src: (0, _.q)({
        proxyURL: e.proxyUrl,
        url: e.url
      }),
      width: e.width,
      height: e.height,
      hasMultiple: t,
      options: e
    })
  }
}

function w(e) {
  let {
    items: t,
    onIndexChange: n,
    startIndex: a = 0,
    enabledContentHarmTypeFlags: c = 0,
    shouldHideMediaOptions: d = false
  } = e, [f, p] = i.useState(a), _ = i.useRef(a), {
    zoomed: h,
    setZoomed: C
  } = (0, E.Y)(), R = i.useCallback(e => {
    p(e = N(e, t.length)), _.current = e, null == n || n(e), C(false)
  }, [n, t, C]);
  i.useEffect(() => {
    let e = () => R(_.current + 1),
      t = () => R(_.current - 1);
    return m.S.subscribe(I.CkL.MODAL_CAROUSEL_NEXT, e), m.S.subscribe(I.CkL.MODAL_CAROUSEL_PREV, t), () => {
      m.S.unsubscribe(I.CkL.MODAL_CAROUSEL_NEXT, e), m.S.unsubscribe(I.CkL.MODAL_CAROUSEL_PREV, t)
    }
  }, [R, C]);
  let w = t[f],
    D = (0, u.g4)({
      type: l.l.GenericMedia,
      media: w
    }, c),
    x = d ? e => {
      e.stopPropagation(), e.preventDefault()
    } : () => (0, g.yg)(g.uG.CONTEXT_MENU_OPENED),
    L = t.length > 1;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(y.ZP, {
      children: e => L ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(v.Z, {
          onClick: e => {
            e.stopPropagation(), m.S.dispatch(I.CkL.MODAL_CAROUSEL_PREV)
          },
          icon: s.j9r,
          tooltip: T.intl.string(T.t.vgfxaA),
          className: o()(A.navPrev, e)
        }), (0, r.jsx)(v.Z, {
          onClick: e => {
            e.stopPropagation(), m.S.dispatch(I.CkL.MODAL_CAROUSEL_NEXT)
          },
          icon: s.d4D,
          tooltip: T.intl.string(T.t.XiOHRX),
          className: o()(A.navNext, e)
        })]
      }) : true
    }), (0, r.jsx)(b.Z, {
      items: t,
      currentIndex: f,
      children: (e, t) => (0, r.jsx)(P, {
        isObscured: !h && D,
        src: w.url,
        children: n => (0, r.jsx)(S.ZP, {
          media: w,
          maxWidth: e,
          maxHeight: t,
          obscured: n,
          onContextMenu: x
        })
      })
    }), L && (0, r.jsx)(y.ZP, {
      children: e => (0, r.jsx)(O.Z, {
        items: t,
        currentIndex: f,
        onGalleryItemClick: R,
        className: e,
        enabledContentHarmTypeFlags: c
      })
    })]
  })
}