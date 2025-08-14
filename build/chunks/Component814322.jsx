/** Chunk was on 67544 **/
/** chunk id: 814322, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk393238 = require("./393238.js"),
  Chunk522474 = require("./522474.js"),
  Chunk451478 = require("./451478.js"),
  Chunk626135 = require("./626135.js"),
  Chunk830917 = require("./830917.js"),
  Chunk120421 = require("./120421.js"),
  Chunk328665 = require("./328665.js"),
  Chunk268519 = require("./268519.js"),
  Chunk723682 = require("./723682.js"),
  Chunk424984 = require("./424984.jsx"),
  Chunk326955 = require("./326955.jsx"),
  Chunk550688 = require("./550688.jsx"),
  Chunk190328 = require("./190328.jsx"),
  Chunk423915 = require("./423915.jsx"),
  Chunk477839 = require("./477839.js"),
  Chunk981631 = require("./981631.js"),
  Chunk89519 = require("./89519.js");

function _() {
  let e = Math.floor((0, Chunk442837.e7)([Chunk120421.Z], () => Chunk120421.Z.currentPoints)),
    t = module.toString().length,
    n = "0".repeat(Math.max(0, Chunk477839.eg - exports));
  return (0, Chunk255367.jsxs)("div", {
    className: Chunk89519.points,
    children: [(0, Chunk255367.jsx)("span", {
      className: Chunk89519.pointsPadding,
      children: require
    }), (0, Chunk255367.jsx)("span", {
      className: Chunk89519.pointsValue,
      children: module
    })]
  })
}

function C(e) {
  let {
    items: t,
    width: n,
    height: s,
    isPaused: o,
    windowKey: a
  } = e, c = (0, i.e7)([p.Z], () => p.Z.purchasedItems);
  return null == s || null == n ? null : (0, r.jsx)(r.Fragment, {
    children: t.map(e => {
      if (null == c[e]) return;
      let t = b.pp[e];
      return (0, r.jsx)(t, {
        isPaused: o,
        width: n,
        height: s,
        windowKey: a
      }, e)
    })
  })
}

function Z() {
  return (0, Chunk328665.f)(), (0, Chunk268519.Z)(), null
}

function w(e) {
  let {
    className: t,
    windowKey: n
  } = e, {
    ref: o,
    width: m,
    height: g
  } = (0, c.ZP)(), {
    ref: j,
    height: w
  } = (0, c.ZP)(), E = (0, i.e7)([p.Z], () => p.Z.lifetimePoints > 0), S = (0, i.e7)([u.Z, l.Z], () => {
    let e = l.Z.getWindow(n);
    return null == e || !u.Z.isFocused((0, f.ZY)(e))
  });
  return (0, s.useEffect)(() => {
    d.default.track(N.rMx.CLICKER_GAME_LAUNCHED, {
      launch_type: E ? "CONTINUE" : "NEW"
    })
  }, []), (0, r.jsxs)("div", {
    ref: o,
    className: a()(t, P.container),
    children: [(0, r.jsx)("div", {
      className: P.fullscreenItems,
      children: (0, r.jsx)(C, {
        items: b.nw,
        width: m,
        height: g,
        isPaused: S,
        windowKey: n
      })
    }), (0, r.jsxs)("div", {
      className: P.aboveGround,
      children: [(0, r.jsx)("div", {
        className: P.fullscreenItems,
        children: (0, r.jsx)(C, {
          items: b.uK,
          width: m,
          height: g,
          isPaused: S,
          windowKey: n
        })
      }), (0, r.jsxs)("div", {
        className: P.buttonAndPoints,
        children: [(0, r.jsx)(C, {
          items: b.rQ,
          width: m,
          height: g,
          isPaused: S,
          windowKey: n
        }), (0, r.jsx)(_, {}), (0, r.jsx)("div", {
          className: P.pointsItems,
          children: (0, r.jsx)(C, {
            items: b.ci,
            width: m,
            height: g,
            isPaused: S,
            windowKey: n
          })
        })]
      }), (0, r.jsx)("div", {
        className: P.fullscreenItems,
        ref: j,
        children: (0, r.jsx)(C, {
          items: b.Ou,
          width: m,
          height: w,
          isPaused: S,
          windowKey: n
        })
      })]
    }), (0, r.jsx)("div", {
      className: P.groundLine
    }), (0, r.jsxs)("div", {
      className: P.mainInteractables,
      children: [(0, r.jsx)(x.Z, {
        className: P.primaryShop
      }), (0, r.jsxs)(y.Z, {
        className: P.toolbar,
        children: [(0, r.jsx)(v.Z, {}), (0, r.jsx)("div", {
          className: P.toolbarSpacer
        }), (0, r.jsx)(C, {
          items: b.WY,
          width: m,
          height: g,
          isPaused: S,
          windowKey: n
        })]
      })]
    }), (0, r.jsxs)("div", {
      className: P.fullscreenItems,
      children: [(0, r.jsx)(C, {
        items: b.wT,
        width: m,
        height: g,
        isPaused: S,
        windowKey: n
      }), (0, r.jsx)(O.Z, {})]
    }), (0, r.jsx)(Z, {}), (0, r.jsx)(h.Z, {})]
  })
}