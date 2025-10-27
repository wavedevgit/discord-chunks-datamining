/** Chunk was on web.js **/
/** chunk id: 730606, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Qk: () => C,
  WG: () => P,
  ZP: () => D
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk95398 = require("./95398.jsx"),
  Chunk991621 = require("./991621.js"),
  Chunk936141 = require("./936141.js"),
  Chunk629710 = require("./629710.js"),
  Chunk134432 = require("./134432.js"),
  Chunk124347 = require("./124347.jsx"),
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
  _.ZP.preloadImage({
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

function R(e) {
  let {
    children: t,
    isObscured: n,
    src: a
  } = e, [s, c] = i.useState(false), d = i.useCallback(() => {
    c(e => !e)
  }, []);
  return n ? (0, r.jsx)(l.aQ.Provider, {
    value: s,
    children: (0, r.jsx)(l.ZP, {
      type: l.ZP.Types.ATTACHMENT,
      reason: u.wk.EXPLICIT_CONTENT,
      obscured: true,
      isSingleMosaicItem: true,
      onToggleObscurity: d,
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

function P(e, t) {
  if ("IMAGE" === e.type) {
    if (!(0, m._H)(e)) return void(0, f.po)(e.url);
    C({
      src: (0, p.q)({
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

function D(e) {
  let {
    items: t,
    onIndexChange: n,
    startIndex: a = 0,
    enabledContentHarmTypeFlags: l = 0,
    shouldHideMediaOptions: u = false
  } = e, [f, _] = i.useState(a), p = i.useRef(a), {
    zoomed: m,
    setZoomed: C
  } = (0, E.Y)(), P = i.useCallback(e => {
    _(e = N(e, t.length)), p.current = e, null == n || n(e), C(false)
  }, [n, t, C]);
  i.useEffect(() => {
    let e = () => P(p.current + 1),
      t = () => P(p.current - 1);
    return h.S.subscribe(T.CkL.MODAL_CAROUSEL_NEXT, e), h.S.subscribe(T.CkL.MODAL_CAROUSEL_PREV, t), () => {
      h.S.unsubscribe(T.CkL.MODAL_CAROUSEL_NEXT, e), h.S.unsubscribe(T.CkL.MODAL_CAROUSEL_PREV, t)
    }
  }, [P, C]);
  let D = t[f],
    w = (0, d.g4)({
      type: c.l.GenericMedia,
      media: D
    }, l),
    L = u ? e => {
      e.stopPropagation(), e.preventDefault()
    } : () => (0, g.yg)(g.uG.CONTEXT_MENU_OPENED),
    x = t.length > 1;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(y.ZP, {
      children: e => x ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(v.Z, {
          onClick: e => {
            e.stopPropagation(), h.S.dispatch(T.CkL.MODAL_CAROUSEL_PREV)
          },
          icon: s.j9r,
          tooltip: S.intl.string(S.t.vgfxaA),
          className: o()(A.navPrev, e)
        }), (0, r.jsx)(v.Z, {
          onClick: e => {
            e.stopPropagation(), h.S.dispatch(T.CkL.MODAL_CAROUSEL_NEXT)
          },
          icon: s.d4D,
          tooltip: S.intl.string(S.t.XiOHRX),
          className: o()(A.navNext, e)
        })]
      }) : true
    }), (0, r.jsx)(b.Z, {
      items: t,
      currentIndex: f,
      children: (e, t) => (0, r.jsx)(R, {
        isObscured: !m && w,
        src: D.url,
        children: n => (0, r.jsx)(I.ZP, {
          media: D,
          maxWidth: e,
          maxHeight: t,
          obscured: n,
          onContextMenu: L
        })
      })
    }), x && (0, r.jsx)(y.ZP, {
      children: e => (0, r.jsx)(O.Z, {
        items: t,
        currentIndex: f,
        onGalleryItemClick: P,
        className: e,
        enabledContentHarmTypeFlags: l
      })
    })]
  })
}