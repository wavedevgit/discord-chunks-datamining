/** Chunk was on web.js **/
/** chunk id: 701663, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => en
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk607399 = require("./607399.js"),
  Chunk337836 = require("./337836.jsx"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk506774 = require("./506774.js"),
  Chunk752239 = require("./752239.js"),
  Chunk397927 = require("./397927.js"),
  Chunk197808 = require("./197808.jsx"),
  Chunk318009 = require("./318009.jsx"),
  Chunk638421 = require("./638421.jsx"),
  Chunk352423 = require("./352423.js"),
  Chunk775602 = require("./775602.js"),
  Chunk697138 = require("./697138.jsx"),
  Chunk989395 = require("./989395.js"),
  Chunk139286 = require("./139286.js"),
  Chunk596155 = require("./596155.jsx"),
  Chunk501280 = require("./501280.jsx"),
  Chunk196923 = require("./196923.jsx"),
  Chunk288610 = require("./288610.jsx"),
  Chunk681582 = require("./681582.jsx"),
  Chunk172272 = require("./172272.jsx"),
  Chunk102854 = require("./102854.jsx"),
  Chunk670735 = require("./670735.jsx"),
  Chunk866822 = require("./866822.js"),
  Chunk158719 = require("./158719.js"),
  Chunk318015 = require("./318015.js"),
  Chunk611544 = require("./611544.js"),
  Chunk750506 = require("./750506.jsx"),
  Chunk361158 = require("./361158.jsx"),
  Chunk80556 = require("./80556.js"),
  Chunk267102 = require("./267102.jsx"),
  Chunk867649 = require("./867649.jsx"),
  Chunk557571 = require("./557571.jsx"),
  Chunk935261 = require("./935261.jsx"),
  Chunk975616 = require("./975616.jsx"),
  Chunk385838 = require("./385838.jsx"),
  Chunk961350 = require("./961350.js"),
  Chunk186111 = require("./186111.js"),
  Chunk723702 = require("./723702.js"),
  Chunk268218 = require("./268218.js"),
  Chunk663413 = require("./663413.jsx"),
  Chunk905790 = require("./905790.jsx"),
  Chunk404374 = require("./404374.jsx"),
  Chunk573435 = require("./573435.jsx"),
  Chunk71855 = require("./71855.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk295575 = require("./295575.js");
require("./939857.jsx"), Promise.resolve().then(require.bind(require, 677134)).then(e => {
  W.isPlatformEmbedded ? window.addEventListener("contextmenu", e.contextMenuCallbackNative, false) : window.addEventListener("contextmenu", e.contextMenuCallbackWeb, false)
}), (0, Chunk752239.h)({
  getDefaultLinkInterceptor: Chunk352423.default
}), (0, Chunk268218.Fe)({
  createPromise: () => Promise.all([n.e("94678"), n.e("896"), n.e("4787"), n.e("8188")]).then(n.bind(n, 441588)),
  webpackId: 441588
}), (0, Chunk268218.Fe)({
  createPromise: () => Promise.all([n.e("94678"), n.e("896"), n.e("4787"), n.e("56795")]).then(n.bind(n, 961881)),
  webpackId: 961881
});
let ee = (0, Chunk268218.Fe)({
    createPromise: () => n.e("99063").then(n.bind(n, 359094)),
    webpackId: 359094
  }),
  et = Chunk64700.memo(function() {
    let e = (0, u.bG)([Y.A], () => Y.A.hasLayers()),
      t = (0, p.red)(p.ueM),
      n = (0, u.bG)([H.default], () => H.default.isAuthenticated());
    return (0, r.jsx)(X.v5, {
      fixed: true,
      show: e || t || !n
    })
  }),
  en = function(e) {
    let {
      children: t,
      skipsSettingDefaultPageTitle: n
    } = e, a = (0, W.getPlatform)(), f = s.Fr || s.v1, g = (0, u.bG)([E.A], () => E.A.useForcedColors ? "yes" : "no"), H = i.useRef(document.body), Y = "".concat(g);
    (0, L.i)("AppSkeleton");
    let K = (0, P._D)("AppSkeleton"),
      X = R.wX.useConfig({
        location: "AppSkeleton"
      }).enableFastConnectEarlyIdentify,
      en = (0, D.sK)("AppSkeleton");
    return i.useEffect(() => {
      W.isPlatformEmbedded && (K ? d.w.set(P.UR, "json") : d.w.remove(P.UR))
    }, [K]), i.useEffect(() => {
      X ? d.w.set(R.Vz, true) : d.w.remove(R.Vz)
    }, [X]), i.useEffect(() => {
      en ? d.w.set(D.AL, true) : d.w.remove(D.AL)
    }, [en]), (0, r.jsx)(V.e, {
      children: (0, r.jsxs)(y.A, {
        children: [(0, r.jsx)(z.A, {
          skipsSettingDefaultPageTitle: n
        }), (0, r.jsx)(m.N, {
          children: (0, r.jsx)(w.A, {
            children: (0, r.jsxs)(p.xpW, {
              containerRef: H,
              children: [(0, r.jsx)(Q.Al, {}), (0, r.jsx)(Z.Ay, {}), (0, r.jsx)(c.Utq, {}), (0, r.jsx)(k.Wr, {
                appContext: J.BRT.APP,
                renderWindow: window,
                children: (0, r.jsxs)(x.Yf, {
                  children: [null != a ? (0, r.jsx)(et, {}) : null, (0, r.jsxs)("div", {
                    className: o()($.XX, f && $.Xq),
                    children: [(0, r.jsx)(C.C1, {}), (0, r.jsx)("div", {
                      className: $.x$,
                      "data-app-not-dev-tools": true,
                      children: (0, r.jsx)(T.l, {
                        children: (0, r.jsx)(j.ks, {
                          children: (0, r.jsx)(b.A.Provider, {
                            value: O.A,
                            children: (0, r.jsx)(S.p, {
                              children: (0, r.jsxs)(G.xq, {
                                children: [(0, r.jsx)("div", {
                                  className: o()(f ? $.C$ : $.yA),
                                  children: t
                                }), (0, r.jsx)(_.A, {}), (0, r.jsx)(A.A, {}), (0, r.jsx)(h.A, {}), (0, r.jsx)(p.bM6, {}), (0, r.jsx)(B.A, {}), (0, r.jsx)(M.up, {}), (0, r.jsx)(l.P, {}), (0, r.jsx)(x.C8, {}), (0, r.jsx)(j.ok, {}), (0, r.jsx)(p.N9M, {
                                  appContext: J.BRT.APP
                                }), (0, r.jsx)(v.A, {}), (0, r.jsx)(U.A, {}), (0, r.jsx)(ee, {}), (0, r.jsx)(F.A, {})]
                              })
                            })
                          })
                        })
                      })
                    }), (0, r.jsx)(I.A, {}), (0, r.jsx)(q.A, {
                      mobile: f
                    }), (0, r.jsx)(N.A, {
                      mobile: f
                    })]
                  }), false]
                })
              }), (0, r.jsx)(c.Utq, {})]
            })
          })
        })]
      })
    }, Y)
  }