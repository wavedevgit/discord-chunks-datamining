/** Chunk was on web.js **/
/** chunk id: 369254, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => P,
  Z5: () => R,
  t1: () => C
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk930125 = require("./930125.js"),
  Chunk338717 = require("./338717.js"),
  Chunk282108 = require("./282108.js"),
  Chunk776231 = require("./776231.js"),
  Chunk619517 = require("./619517.jsx"),
  Chunk302031 = require("./302031.jsx"),
  Chunk644447 = require("./644447.js"),
  Chunk203982 = require("./203982.js"),
  Chunk515718 = require("./515718.js"),
  Chunk793367 = require("./793367.js"),
  Chunk454290 = require("./454290.js"),
  Chunk976247 = require("./976247.jsx"),
  Chunk358731 = require("./358731.js"),
  Chunk215050 = require("./215050.jsx"),
  Chunk597351 = require("./597351.jsx"),
  Chunk608214 = require("./608214.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk720308 = require("./720308.js");

function C(e) {
  let {
    src: t,
    width: n,
    height: r,
    hasMultiple: i = false,
    options: a
  } = e, {
    width: s,
    height: o
  } = (0, y.z)(i, {
    width: n,
    height: r
  });
  f.Ay.preloadImage({
    src: t,
    dimensions: {
      maxWidth: s,
      maxHeight: o,
      imageWidth: n,
      imageHeight: r
    },
    options: a
  })
}

function N(e, t) {
  return (e % t + t) % t
}

function w(e) {
  let {
    children: t,
    isObscured: n,
    src: a
  } = e, [o, l] = i.useState(false), u = i.useCallback(() => {
    l(e => !e)
  }, []);
  return n ? (0, r.jsx)(p.Bs.Provider, {
    value: o,
    children: (0, r.jsx)(p.Ay, {
      type: p.Ay.Types.ATTACHMENT,
      reason: c.Oc.EXPLICIT_CONTENT,
      obscured: true,
      isSingleMosaicItem: true,
      onToggleObscurity: u,
      children: e => (0, r.jsx)("div", {
        className: s()(T.JT, {
          [T.Qr]: e
        }),
        children: t(e)
      })
    }, a)
  }) : (0, r.jsx)(r.Fragment, {
    children: t(false)
  })
}

function R(e, t) {
  "IMAGE" !== e.type || ((0, m.eJ)(e) ? C({
    src: (0, _.E)({
      proxyURL: e.proxyUrl,
      url: e.url
    }),
    width: e.width,
    height: e.height,
    hasMultiple: t,
    options: e
  }) : (0, d.yt)(e.url))
}

function P(e) {
  let {
    items: t,
    onIndexChange: n,
    startIndex: a = 0,
    enabledContentHarmTypeFlags: c = 0,
    shouldHideMediaOptions: d = false
  } = e, [f, p] = i.useState(a), _ = i.useRef(a), {
    zoomed: m,
    setZoomed: C
  } = (0, E.Q)(), R = i.useCallback(e => {
    p(e = N(e, t.length)), _.current = e, null == n || n(e), C(false)
  }, [n, t, C]);
  i.useEffect(() => {
    let e = () => R(_.current + 1),
      t = () => R(_.current - 1);
    return h._.subscribe(I.jej.MODAL_CAROUSEL_NEXT, e), h._.subscribe(I.jej.MODAL_CAROUSEL_PREV, t), () => {
      h._.unsubscribe(I.jej.MODAL_CAROUSEL_NEXT, e), h._.unsubscribe(I.jej.MODAL_CAROUSEL_PREV, t)
    }
  }, [R, C]);
  let P = t[f],
    D = (0, u.qo)({
      type: l.D.GenericMedia,
      media: P
    }, c),
    x = d ? e => {
      e.stopPropagation(), e.preventDefault()
    } : () => (0, g.Yq)(g.NJ.CONTEXT_MENU_OPENED),
    L = t.length > 1;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(b.Ay, {
      children: e => L ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(v.A, {
          onClick: e => {
            e.stopPropagation(), h._.dispatch(I.jej.MODAL_CAROUSEL_PREV)
          },
          icon: o.Zge,
          tooltip: S.intl.string(S.t.vgfxaA),
          className: s()(T.vi, e)
        }), (0, r.jsx)(v.A, {
          onClick: e => {
            e.stopPropagation(), h._.dispatch(I.jej.MODAL_CAROUSEL_NEXT)
          },
          icon: o.KS6,
          tooltip: S.intl.string(S.t.XiOHRX),
          className: s()(T.f8, e)
        })]
      }) : true
    }), (0, r.jsx)(y.A, {
      items: t,
      currentIndex: f,
      children: (e, t) => (0, r.jsx)(w, {
        isObscured: !m && D,
        src: P.url,
        children: n => (0, r.jsx)(A.Ay, {
          media: P,
          maxWidth: e,
          maxHeight: t,
          obscured: n,
          onContextMenu: x
        })
      })
    }), L && (0, r.jsx)(b.Ay, {
      children: e => (0, r.jsx)(O.A, {
        items: t,
        currentIndex: f,
        onGalleryItemClick: R,
        className: e,
        enabledContentHarmTypeFlags: c
      })
    })]
  })
}