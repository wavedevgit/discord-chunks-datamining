/** Chunk was on web.js **/
/** chunk id: 329816, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => J
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk873546 = require("./873546.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk335854 = require("./335854.js"),
  Chunk481060 = require("./481060.js"),
  Chunk721037 = require("./721037.jsx"),
  Chunk490173 = require("./490173.jsx"),
  Chunk735246 = require("./735246.jsx"),
  Chunk315263 = require("./315263.js"),
  Chunk607070 = require("./607070.js"),
  Chunk899663 = require("./899663.jsx"),
  Chunk793903 = require("./793903.js"),
  Chunk213609 = require("./213609.js"),
  Chunk613413 = require("./613413.jsx"),
  Chunk559407 = require("./559407.jsx"),
  Chunk556766 = require("./556766.jsx"),
  Chunk195302 = require("./195302.jsx"),
  Chunk260035 = require("./260035.jsx"),
  Chunk482215 = require("./482215.jsx"),
  Chunk366841 = require("./366841.jsx"),
  Chunk947519 = require("./947519.jsx"),
  Chunk248687 = require("./248687.jsx"),
  Chunk859678 = require("./859678.js"),
  Chunk314910 = require("./314910.jsx"),
  Chunk84615 = require("./84615.jsx"),
  Chunk429142 = require("./429142.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk813744 = require("./813744.jsx"),
  Chunk746106 = require("./746106.jsx"),
  Chunk526665 = require("./526665.js"),
  Chunk811513 = require("./811513.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk819640 = require("./819640.js"),
  Chunk358085 = require("./358085.js"),
  Chunk663993 = require("./663993.js"),
  Chunk823453 = require("./823453.jsx"),
  Chunk744048 = require("./744048.jsx"),
  Chunk436774 = require("./436774.jsx"),
  Chunk686546 = require("./686546.jsx"),
  Chunk950796 = require("./950796.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk302821 = require("./302821.js");
require("./29973.jsx"), Promise.resolve().then(require.bind(require, 62883)).then(e => {
  B.isPlatformEmbedded ? window.addEventListener("contextmenu", e.contextMenuCallbackNative, false) : window.addEventListener("contextmenu", e.contextMenuCallbackWeb, false)
}), (0, Chunk335854.E)({
  getDefaultLinkInterceptor: Chunk315263.default
}), (0, Chunk663993.Un)({
  createPromise: () => Promise.all([require.e("50448"), require.e("82821"), require.e("30634"), require.e("33551")]).then(require.bind(require, 849493)),
  webpackId: 849493
}), (0, Chunk663993.Un)({
  createPromise: () => Promise.all([require.e("50448"), require.e("82821"), require.e("30634"), require.e("58493")]).then(require.bind(require, 80753)),
  webpackId: 80753
});
let q = (0, Chunk663993.Un)({
    createPromise: () => require.e("67110").then(require.bind(require, 177741)),
    webpackId: 177741
  }),
  X = (0, Chunk663993.Un)({
    createPromise: () => require.e("13474").then(require.bind(require, 420541)),
    webpackId: 420541
  }),
  Q = Chunk647438.memo(function() {
    let e = (0, Chunk442837.e7)([Chunk819640.Z], () => Chunk819640.Z.hasLayers()),
      t = (0, Chunk526665.wy)("AppSkeleton"),
      n = (0, Chunk442837.e7)([Chunk819640.Z], () => Chunk819640.Z.getLayers().includes(Chunk981631.S9g.USER_SETTINGS)),
      i = (0, Chunk481060.s9z)(Chunk481060.$sL),
      a = (0, Chunk442837.e7)([Chunk314897.default], () => Chunk314897.default.isAuthenticated());
    if (!require || !exports) return (0, Chunk951288.jsx)(Chunk950796.Dg, {
      fixed: true,
      show: module || Chunk647438 || !Chunk120356
    })
  }),
  J = function(e) {
    let {
      children: t,
      skipsSettingDefaultPageTitle: n
    } = e, a = (0, B.getPlatform)(), u = s.tq || s.Em, h = (0, c.e7)([m.Z], () => m.Z.useForcedColors ? "yes" : "no"), k = i.useRef(document.body), U = "".concat(h);
    return (0, A.G)(), (0, R.G)("AppSkeleton"), (0, r.jsx)(M.w, {
      children: (0, r.jsxs)(g.Z, {
        children: [(0, r.jsx)(F.Z, {
          skipsSettingDefaultPageTitle: n
        }), (0, r.jsx)(p.T, {
          children: (0, r.jsx)(N.Z, {
            children: (0, r.jsxs)(d.JcV, {
              containerRef: k,
              children: [(0, r.jsx)(Y.Co, {}), (0, r.jsx)(H.ZP, {}), (0, r.jsx)(l.OUJ, {}), (0, r.jsx)(L.Wu, {
                appContext: K.IlC.APP,
                renderWindow: window,
                children: (0, r.jsxs)(P.yP, {
                  children: [null != a ? (0, r.jsx)(Q, {}) : null, (0, r.jsxs)("div", {
                    className: o()(z.appAsidePanelWrapper, u && z.mobileAppAsidePanelWrapper),
                    children: [(0, r.jsx)(S.K, {}), (0, r.jsx)("div", {
                      className: z.notAppAsidePanel,
                      "data-app-not-dev-tools": true,
                      children: (0, r.jsx)(T.m, {
                        children: (0, r.jsx)(D.OR, {
                          children: (0, r.jsx)(E.Z.Provider, {
                            value: b.Z,
                            children: (0, r.jsxs)(I.p, {
                              children: [(0, r.jsx)("div", {
                                className: o()(u ? z.mobileApp : z.app),
                                children: t
                              }), (0, r.jsx)(f.Z, {}), (0, r.jsx)(O.Z, {}), (0, r.jsx)(_.Z, {}), (0, r.jsx)(d.nKe, {}), (0, r.jsx)(j.Z, {}), (0, r.jsx)(w.Ox, {}), (0, r.jsx)(P.Un, {}), (0, r.jsx)(D.ot, {}), (0, r.jsx)(d.Ixi, {
                                appContext: K.IlC.APP
                              }), (0, r.jsx)(y.Z, {}), (0, r.jsx)(x.Z, {}), (0, r.jsx)(q, {}), (0, r.jsx)(X, {})]
                            })
                          })
                        })
                      })
                    }), (0, r.jsx)(v.Z, {}), (0, r.jsx)(V.Z, {
                      mobile: u
                    }), (0, r.jsx)(C.Z, {
                      mobile: u
                    })]
                  }), false]
                })
              }), (0, r.jsx)(l.OUJ, {})]
            })
          })
        })]
      })
    }, U)
  }