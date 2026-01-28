/** Chunk was on 87916 **/
/** chunk id: 682503, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => N
}), require("./896048.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js"), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk855057 = require("./855057.jsx"),
  Chunk702211 = require("./702211.js"),
  Chunk699576 = require("./699576.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk504974 = require("./504974.jsx"),
  Chunk439193 = require("./439193.js"),
  Chunk652215 = require("./652215.js"),
  Chunk339984 = require("./339984.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk392491 = require("./392491.js");

function N(e) {
  let {
    transitionState: t,
    onClose: s,
    onComplete: N,
    uploadType: y,
    showUpsellHeader: j,
    analyticsPage: E
  } = e, [v, R] = i.useState(false), L = (0, o.k34)(), {
    analyticsLocations: I,
    newestAnalyticsLocation: w
  } = (0, d.Ay)(c.A.GIF_PICKER);
  async function P(e) {
    let t, {
      gifSrc: i
    } = e;
    if (null == i || v) return;
    R(true);
    let r = (0, f.s)(i),
      l = await fetch(r),
      c = await l.blob(),
      d = "" !== c.type ? c.type : function(e) {
        var t;
        switch (null == (t = new URL(e).pathname.split(".").pop()) ? true : t.toLowerCase()) {
          case "gif":
          default:
            return "image/gif";
          case "webp":
            return "image/webp";
          case "png":
            return "image/png";
          case "jpg":
          case "jpeg":
            return "image/jpeg"
        }
      }(r),
      u = "jpeg" === (t = d.split("/")[1]) ? ".jpg" : null != t && "" !== t ? ".".concat(t) : ".gif",
      p = "selected".concat(u);
    s(), (0, o.mMO)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("35929"), n.e("74571"), n.e("67449")]).then(n.bind(n, 142630));
      return t => (0, a.jsx)(e, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), a.forEach(function(t) {
            var a;
            a = n[t], t in e ? Object.defineProperty(e, t, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = a
          })
        }
        return e
      }({
        imageUri: r,
        file: new File([c], p, {
          type: d
        }),
        onCrop: N,
        uploadType: y,
        showUpsellHeader: j
      }, t))
    }, {
      contextKey: L
    })
  }
  i.useEffect(() => {
    A.default.track(g.HAw.OPEN_MODAL, {
      type: g.JJy.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
      location_stack: I,
      location: {
        page: E
      }
    })
  }, [I, E]);
  let S = y === h.HL.AVATAR || y === h.HL.BANNER,
    U = (0, p.b)(!S);
  return (0, a.jsx)(d.f5, {
    value: I,
    children: (0, a.jsxs)(l.dWK, {
      onClose: s,
      transitionState: t,
      children: [(0, a.jsx)(l.rQ0, {
        title: x.intl.string(x.t["xsC+/y"])
      }), j && !U && (0, a.jsx)("div", {
        className: b.It,
        children: (0, a.jsx)(m.A, {
          type: y,
          analyticsPage: E,
          analyticsSection: g.JJy.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
          isGIF: true
        })
      }), (0, a.jsxs)("div", {
        className: b.SD,
        children: [(0, a.jsx)(u.A, {
          className: r()(b.XC, {
            [b.bX]: v
          }),
          onSelectGIF: P,
          headingColor: "text-subtle",
          hideFavorites: true
        }), v && (0, a.jsx)(o.y$y, {
          className: b.u1
        }), j && U && (0, a.jsx)(_.A, {
          uploadType: y,
          analyticsSource: w,
          showUpsell: true,
          className: b.Kt
        })]
      })]
    })
  })
}