/** Chunk was on web.js **/
/** chunk id: 884182, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => D
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  u = require.n(Chunk392711),
  Chunk947849 = require("./947849.js"),
  Chunk499376 = require("./499376.js"),
  Chunk546432 = require("./546432.jsx"),
  Chunk217702 = require("./217702.js"),
  Chunk400003 = require("./400003.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let y = 4,
  O = Math.round((Chunk217702.Jj - y) / 2);

function v(e) {
  return i.useMemo(() => {
    let [t, n] = u().partition(e, e => (0, f.R_)(e.item.type)), [r, i] = u().partition(t, e => (0, f.Ld)(e.item.type));
    return {
      groupableVisualMediaItems: r,
      nonGroupableVisualMediaItems: i,
      nonVisualMediaItems: n
    }
  }, [e])
}

function I(e) {
  let {
    visualMediaItems: t,
    maxWidth: n,
    footer: i
  } = e;
  null != i && l()(1 === t.length, "footer only gets applied to single items");
  let o = t.length;
  if (1 === o) return <T itemsForLayout={t} isSingleImage={true} footer={i} maxWidth={n} />;
  if (2 === o) return <S itemsForLayout={t} maxWidth={n} />;
  if (3 === o) return <A itemsForLayout={t} maxWidth={n} />;
  if (4 === o) return <N itemsForLayout={t} maxWidth={n} />;
  let a = o % 3;
  return <r.Fragment>{1 === a && <T itemsForLayout={t.slice(0, a)} maxWidth={n} />}{2 === a && <S itemsForLayout={t.slice(0, a)} maxWidth={n} />}{0 === a ? <C itemsForLayout={t} maxWidth={n} /> : <C itemsForLayout={t.slice(a)} maxWidth={n} />}</r.Fragment>
}

function T(e) {
  let {
    itemsForLayout: t,
    maxWidth: n,
    isSingleImage: i,
    footer: o
  } = e, s = t[0];
  return <div className={a()(h.oneByOneGrid, {
      [h.oneByOneGridSingle]: i,
      [h.oneByOneGridMosaic]: !i,
      [h.hasFooter]: null != o
    })}><w props={s} useFullWidth={!i} isSingleItem={true} maxWidth={n} footer={o} /></div>
}

function S(e) {
  let {
    itemsForLayout: t,
    maxWidth: n
  } = e, i = Math.round((n - y) / 2);
  return <div className={h.oneByTwoGrid}>{t.map(e => (0, r.jsx)("div", {
      className: h.oneByTwoGridItem,
      children: (0, r.jsx)(w, {
        props: e,
        maxWidth: i,
        maxHeight: i
      })
    }, e.item.uniqueId))}</div>
}

function A(e) {
  let {
    itemsForLayout: t,
    maxWidth: n
  } = e, i = Math.round(2 * (n - y) / 3), o = i / 2;
  return <div className={a()(h.oneByTwoGrid, h.oneByTwoLayoutThreeGrid)}>{<div className={h.oneByTwoSoloItem}><w props={t[0]} maxWidth={i} /></div>}{<div className={h.oneByTwoDuoItem}><div className={h.twoByOneGrid}>{t.splice(1).map(e => (0, r.jsx)("div", {
          className: h.twoByOneGridItem,
          children: (0, r.jsx)(w, {
            props: e,
            maxWidth: o,
            maxHeight: O
          })
        }, e.item.uniqueId))}</div></div>}</div>
}

function N(e) {
  let {
    itemsForLayout: t,
    maxWidth: n
  } = e, i = Math.round((n - y) / 2);
  return <div className={h.twoByTwoGrid}>{t.map(e => (0, r.jsx)(w, {
      props: e,
      maxWidth: i,
      maxHeight: O,
      displayGridItem: true
    }, e.item.uniqueId))}</div>
}

function C(e) {
  let {
    itemsForLayout: t,
    maxWidth: n
  } = e, i = Math.round((n - 2 * y) / 3);
  return <div className={h.threeByThreeGrid}>{t.map(e => (0, r.jsx)(w, {
      props: e,
      maxWidth: i,
      maxHeight: i,
      displayGridItem: true
    }, e.item.uniqueId))}</div>
}
let R = e => ({
    className: a()(e, h.itemContentContainer),
    imgContainerClassName: h.lazyImgContainer,
    imgClassName: h.lazyImg
  }),
  P = e => ({
    className: a()(e, h.lazyImg)
  });

function w(e) {
  let {
    props: t,
    maxWidth: n = p.mT,
    maxHeight: i = p.Jj,
    useFullWidth: o = true,
    isSingleItem: a = false,
    footer: s,
    displayGridItem: l
  } = e, c = t.item.type, u = b(g({}, t, "IMAGE" === c && R(t.className), "VIDEO" === c && P(t.className)), {
    displayGridItem: l,
    mediaLayoutType: p.hV.MOSAIC,
    maxWidth: n,
    maxHeight: i,
    useFullWidth: o,
    isSingleMosaicItem: a
  });
  return <d.h.Provider value={t.gifFavoriteButton}><_.ZP{...b(g({}, u), {
      footer: s
    })} /></d.h.Provider>
}
let D = function(e) {
  let {
    items: t,
    isInAppComponentsV2: n = false
  } = e, {
    groupableVisualMediaItems: i,
    nonGroupableVisualMediaItems: o,
    nonVisualMediaItems: s
  } = v(t), l = n ? p.Y9 : p.mT;
  return <r.Fragment>{i.length > 0 && <div className={a()(h.visualMediaItemContainer, {
        [h.isInAppComponentsV2]: n
      })}><I visualMediaItems={i} maxWidth={l} /></div>}{o.length > 0 && o.map(e => {
      let t = e.renderMosaicItemFooter({
        item: e.item,
        message: e.message
      });
      return <div className={a()(h.visualMediaItemContainer, {
          [h.isInAppComponentsV2]: n
        })}><I visualMediaItems={[e]} footer={t} maxWidth={l} /></div>
    })}{s.length > 0 && <div className={h.nonVisualMediaItemContainer}>{s.map(e => (0, r.jsx)("div", {
        className: h.nonVisualMediaItem,
        children: (0, r.jsx)(w, {
          props: e
        })
      }, e.item.uniqueId))}</div>}</r.Fragment>
}