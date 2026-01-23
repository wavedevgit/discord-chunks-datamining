/** Chunk was on web.js **/
/** chunk id: 394839, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => D
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  l = require.n(Chunk284009),
  Chunk735438 = require("./735438.js"),
  u = require.n(Chunk735438),
  Chunk643612 = require("./643612.js"),
  Chunk448381 = require("./448381.js"),
  Chunk96782 = require("./96782.jsx"),
  Chunk838541 = require("./838541.js"),
  Chunk907423 = require("./907423.js");

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

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let b = 4,
  O = Math.round((Chunk838541.Rk - b) / 2);

function v(e) {
  return i.useMemo(() => {
    let [t, n] = u().partition(e, e => (0, f.Xg)(e.item.type)), [r, i] = u().partition(t, e => (0, f.EF)(e.item.type));
    return {
      groupableVisualMediaItems: r,
      nonGroupableVisualMediaItems: i,
      nonVisualMediaItems: n
    }
  }, [e])
}

function A(e) {
  let {
    visualMediaItems: t,
    maxWidth: n,
    footer: i
  } = e;
  null != i && l()(1 === t.length, "footer only gets applied to single items");
  let a = t.length;
  if (1 === a) return (0, r.jsx)(I, {
    itemsForLayout: t,
    isSingleImage: true,
    footer: i,
    maxWidth: n
  });
  if (2 === a) return (0, r.jsx)(S, {
    itemsForLayout: t,
    maxWidth: n
  });
  if (3 === a) return (0, r.jsx)(T, {
    itemsForLayout: t,
    maxWidth: n
  });
  if (4 === a) return (0, r.jsx)(C, {
    itemsForLayout: t,
    maxWidth: n
  });
  let s = a % 3;
  return (0, r.jsxs)(r.Fragment, {
    children: [1 === s && (0, r.jsx)(I, {
      itemsForLayout: t.slice(0, s),
      maxWidth: n
    }), 2 === s && (0, r.jsx)(S, {
      itemsForLayout: t.slice(0, s),
      maxWidth: n
    }), 0 === s ? (0, r.jsx)(N, {
      itemsForLayout: t,
      maxWidth: n
    }) : (0, r.jsx)(N, {
      itemsForLayout: t.slice(s),
      maxWidth: n
    })]
  })
}

function I(e) {
  let {
    itemsForLayout: t,
    maxWidth: n,
    isSingleImage: i,
    footer: a
  } = e, o = t[0];
  return (0, r.jsx)("div", {
    className: s()(h.EO, {
      [h.Gj]: i,
      [h.Kv]: !i,
      [h.yq]: null != a
    }),
    children: (0, r.jsx)(P, {
      props: o,
      useFullWidth: !i,
      isSingleItem: true,
      maxWidth: n,
      footer: a
    })
  })
}

function S(e) {
  let {
    itemsForLayout: t,
    maxWidth: n
  } = e, i = Math.round((n - b) / 2);
  return (0, r.jsx)("div", {
    className: h.SQ,
    children: t.map(e => (0, r.jsx)("div", {
      className: h.XE,
      children: (0, r.jsx)(P, {
        props: e,
        maxWidth: i,
        maxHeight: i
      })
    }, e.item.uniqueId))
  })
}

function T(e) {
  let {
    itemsForLayout: t,
    maxWidth: n
  } = e, i = Math.round(2 * (n - b) / 3), a = i / 2;
  return (0, r.jsxs)("div", {
    className: s()(h.SQ, h.o_),
    children: [(0, r.jsx)("div", {
      className: h.es,
      children: (0, r.jsx)(P, {
        props: t[0],
        maxWidth: i
      })
    }), (0, r.jsx)("div", {
      className: h.N$,
      children: (0, r.jsx)("div", {
        className: h._i,
        children: t.splice(1).map(e => (0, r.jsx)("div", {
          className: h.$w,
          children: (0, r.jsx)(P, {
            props: e,
            maxWidth: a,
            maxHeight: O
          })
        }, e.item.uniqueId))
      })
    })]
  })
}

function C(e) {
  let {
    itemsForLayout: t,
    maxWidth: n
  } = e, i = Math.round((n - b) / 2);
  return (0, r.jsx)("div", {
    className: h.av,
    children: t.map(e => (0, r.jsx)(P, {
      props: e,
      maxWidth: i,
      maxHeight: O,
      displayGridItem: true
    }, e.item.uniqueId))
  })
}

function N(e) {
  let {
    itemsForLayout: t,
    maxWidth: n
  } = e, i = Math.round((n - 2 * b) / 3);
  return (0, r.jsx)("div", {
    className: h._f,
    children: t.map(e => (0, r.jsx)(P, {
      props: e,
      maxWidth: i,
      maxHeight: i,
      displayGridItem: true
    }, e.item.uniqueId))
  })
}
let w = e => ({
    className: s()(e, h.s_),
    imgContainerClassName: h.nh,
    imgClassName: h.g2
  }),
  R = e => ({
    className: s()(e, h.g2)
  });

function P(e) {
  let {
    props: t,
    maxWidth: n = _.k6,
    maxHeight: i = _.Rk,
    useFullWidth: a = true,
    isSingleItem: s = false,
    footer: o,
    displayGridItem: l
  } = e, c = t.item.type, u = y(g({}, t, "IMAGE" === c && w(t.className), "VIDEO" === c && R(t.className)), {
    displayGridItem: l,
    mediaLayoutType: _.dG.MOSAIC,
    maxWidth: n,
    maxHeight: i,
    useFullWidth: a,
    isSingleMosaicItem: s
  });
  return (0, r.jsx)(d.G.Provider, {
    value: t.gifFavoriteButton,
    children: (0, r.jsx)(p.Ay, y(g({}, u), {
      footer: o
    }))
  })
}
let D = function(e) {
  let {
    items: t,
    isInAppComponentsV2: n = false
  } = e, {
    groupableVisualMediaItems: i,
    nonGroupableVisualMediaItems: a,
    nonVisualMediaItems: o
  } = v(t), l = n ? _.ww : _.k6;
  return (0, r.jsxs)(r.Fragment, {
    children: [i.length > 0 && (0, r.jsx)("div", {
      className: s()(h.XU, {
        [h.dM]: n
      }),
      children: (0, r.jsx)(A, {
        visualMediaItems: i,
        maxWidth: l
      })
    }), a.length > 0 && a.map(e => {
      let t = e.renderMosaicItemFooter({
        item: e.item,
        message: e.message
      });
      return (0, r.jsx)("div", {
        className: s()(h.XU, {
          [h.dM]: n
        }),
        children: (0, r.jsx)(A, {
          visualMediaItems: [e],
          footer: t,
          maxWidth: l
        })
      }, e.item.uniqueId)
    }), o.length > 0 && (0, r.jsx)("div", {
      className: h.s,
      children: o.map(e => (0, r.jsx)("div", {
        className: h.Br,
        children: (0, r.jsx)(P, {
          props: e
        })
      }, e.item.uniqueId))
    })]
  })
}