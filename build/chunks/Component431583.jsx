/** Chunk was on 74023 **/
/** chunk id: 431583, original params: e,t,r (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => k
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk525654 = require("./525654.js"),
  s = require.n(Chunk525654),
  Chunk873546 = require("./873546.js"),
  Chunk213919 = require("./213919.js"),
  Chunk442837 = require("./442837.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk391650 = require("./391650.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk361207 = require("./361207.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk394369 = require("./394369.js");
let v = [{
    getOs: () => Chunk388032.intl.string(Chunk388032.t.NK5ySJ),
    icon: Chunk394369.apple,
    url: () => (0, Chunk361207.w4)("osx", false),
    platformKey: 0
  }, {
    getOs: () => Chunk388032.intl.string(Chunk388032.t.OvKGE6),
    icon: Chunk394369.windows,
    url: () => (0, Chunk361207.w4)("win", false),
    platformKey: 1
  }, {
    getOs: () => Chunk388032.intl.string(Chunk388032.t.dJB4PN),
    icon: Chunk394369.linux,
    url: [{
      url: () => (0, Chunk361207.w4)("linux", false, "deb"),
      getText: () => Chunk388032.intl.string(Chunk388032.t.Sodsus)
    }, {
      url: () => (0, Chunk361207.w4)("linux", false, "tar.gz"),
      getText: () => Chunk388032.intl.string(Chunk388032.t.G3U6IV)
    }],
    platformKey: 2
  }],
  O = [{
    getOs: () => Chunk388032.intl.string(Chunk388032.t.wCVyNT),
    icon: Chunk394369.ios,
    url: () => Chunk981631.fzT.IOS,
    platformKey: 3
  }, {
    getOs: () => Chunk388032.intl.string(Chunk388032.t.wuQpJD),
    icon: Chunk394369.android,
    url: () => Chunk981631.fzT.ANDROID,
    platformKey: 4
  }],
  w = e => {
    let {
      os: t,
      url: r,
      onClick: l
    } = e, i = a.useRef(null), [o, s] = a.useState(false), c = a.useCallback(e => {
      let {
        closePopout: a
      } = e;
      return Array.isArray(r) ? (0, n.jsx)(m.v2r, {
        navId: "download-app-menu",
        "aria-label": h.intl.string(h.t["+1H47t"]),
        onClose: a,
        onSelect: true,
        children: r.map(e => (0, n.jsx)(m.sNh, {
          id: e.url(),
          label: e.getText(),
          action: () => l(t, e.url())
        }, e.url()))
      }) : null
    }, [t, r, l]);
    return Array.isArray(r) ? (0, n.jsx)(m.yRy, {
      renderPopout: c,
      targetElementRef: i,
      align: "left",
      position: "bottom",
      onRequestOpen: () => s(true),
      onRequestClose: () => s(false),
      children: e => {
        var t, r;
        return (0, n.jsx)(d.zxk, (t = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
              n = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
              return Object.getOwnPropertyDescriptor(r, e).enumerable
            }))), n.forEach(function(t) {
              var n;
              n = r[t], t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = n
            })
          }
          return e
        }({}, e), r = r = {
          buttonRef: i,
          text: h.intl.string(h.t["1WjMbC"]),
          variant: "primary",
          size: "sm",
          fullWidth: true,
          icon: o ? d.sXD : d.hic,
          iconPosition: "end"
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r.push.apply(r, n)
          }
          return r
        })(Object(r)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }), t))
      }
    }) : (0, n.jsx)(d.zxk, {
      text: h.intl.string(h.t["1WjMbC"]),
      onClick: () => l(t, r()),
      variant: "primary",
      size: "sm",
      fullWidth: true,
      role: "link"
    })
  },
  N = e => {
    let {
      platform: t,
      onClick: r,
      onMouseEnter: a,
      isActive: l
    } = e, {
      getOs: o,
      icon: s,
      url: c,
      platformKey: p
    } = t, u = o(), d = i()(y.icon, s);
    return (0, n.jsx)("li", {
      className: i()(y.platform, {
        [y.active]: l
      }),
      onMouseEnter: () => a(p),
      children: (0, n.jsxs)("div", {
        className: y.contentWrapper,
        children: [(0, n.jsxs)("div", {
          className: y.iconWrap,
          children: [(0, n.jsx)("div", {
            className: d
          }), (0, n.jsx)("div", {
            className: i()(y.active, d)
          })]
        }), (0, n.jsxs)("div", {
          children: [(0, n.jsx)(m.Heading, {
            className: y.platformName,
            variant: "heading-lg/semibold",
            children: u
          }), (0, n.jsx)("div", {
            className: y.downloadButton,
            children: (0, n.jsx)(w, {
              os: u,
              url: c,
              onClick: r
            })
          })]
        })]
      })
    })
  };

function k(e) {
  let {
    source: t,
    onClose: r,
    transitionState: l
  } = e, o = (0, u.e7)([x.default], () => x.default.getCurrentUser()), b = (0, u.e7)([g.default], () => g.default.getFingerprint()), w = null == o || o.isClaimed(), [k, P] = a.useState(function() {
    var e;
    switch (null == (e = s().os) ? true : e.family) {
      case "OS X":
        return 0;
      case "Windows":
        return 1;
      case "Ubuntu":
      case "Debian":
      case "Fedora":
      case "Red Hat":
      case "SuSE":
      case "Linux":
        return 2;
      case "iOS":
        return 3;
      case "Android":
        return 4;
      default:
        return
    }
  }());

  function S(e, n) {
    (null != p.getToken() || null != b) && _.default.track(j.rMx.DOWNLOAD_APP, {
      platform: e,
      ptb: false,
      released: true,
      has_e_mail: w,
      referring_location: t,
      qr_code: false
    }), w ? window.open(n, "_blank") : (r(), f.j())
  }

  function W(e) {
    P(e)
  }
  return a.useEffect(() => {
    _.default.track(j.rMx.OPEN_MODAL, {
      type: "Download App",
      source: {
        location: t
      }
    })
  }, [t]), (0, n.jsx)(d.u_l, {
    title: h.intl.string(h.t["BK8LK+"]),
    actions: true,
    onClose: r,
    transitionState: l,
    preview: (0, n.jsx)(m.Text, {
      variant: "text-sm/normal",
      children: h.intl.format(h.t["RJS+1P"], {})
    }),
    children: (0, n.jsxs)("div", {
      className: y.container,
      children: [!c.tq && (0, n.jsxs)("div", {
        className: y.platformsWrap,
        children: [(0, n.jsx)(m.Heading, {
          variant: "heading-md/normal",
          color: "text-subtle",
          className: y.header,
          children: h.intl.string(h.t["0KK0bP"])
        }), (0, n.jsx)("ul", {
          className: i()(y.platforms, y.platformsDesktop),
          children: v.map(e => (0, n.jsx)(N, {
            isActive: k === e.platformKey,
            platform: e,
            onClick: S,
            onMouseEnter: W
          }, e.platformKey))
        })]
      }), (0, n.jsxs)("div", {
        className: y.platformsWrap,
        children: [!c.tq && (0, n.jsx)(m.Heading, {
          variant: "heading-md/normal",
          color: "text-subtle",
          className: y.header,
          children: h.intl.string(h.t.RdSNWa)
        }), (0, n.jsx)("ul", {
          className: i()(y.platforms, y.platformsMobile),
          children: O.map(e => (0, n.jsx)(N, {
            isActive: k === e.platformKey,
            platform: e,
            onClick: S,
            onMouseEnter: W
          }, e.platformKey))
        })]
      })]
    })
  })
}