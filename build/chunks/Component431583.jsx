/** Chunk was on 74023 **/
/** chunk id: 431583, original params: e,t,r (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => k
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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
  Chunk789053 = require("./789053.js");
let v = [{
    getOs: () => Chunk388032.intl.string(Chunk388032.t.NK5ySJ),
    icon: Chunk789053.apple,
    url: () => (0, Chunk361207.w4)("osx", false),
    platformKey: 0
  }, {
    getOs: () => Chunk388032.intl.string(Chunk388032.t.OvKGE6),
    icon: Chunk789053.windows,
    url: () => (0, Chunk361207.w4)("win", false),
    platformKey: 1
  }, {
    getOs: () => Chunk388032.intl.string(Chunk388032.t.dJB4PN),
    icon: Chunk789053.linux,
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
    icon: Chunk789053.ios,
    url: () => Chunk981631.fzT.IOS,
    platformKey: 3
  }, {
    getOs: () => Chunk388032.intl.string(Chunk388032.t.wuQpJD),
    icon: Chunk789053.android,
    url: () => Chunk981631.fzT.ANDROID,
    platformKey: 4
  }],
  w = e => {
    let {
      os: t,
      url: r,
      onClick: i
    } = e, l = a.useRef(null), [o, s] = a.useState(false), c = a.useCallback(e => {
      let {
        closePopout: a
      } = e;
      return Array.isArray(r) ? (0, n.jsx)(m.v2r, {
        navId: "download-app-menu",
        "aria-label": y.intl.string(y.t["+1H47t"]),
        onClose: a,
        onSelect: true,
        children: r.map(e => (0, n.jsx)(m.sNh, {
          id: e.url(),
          label: e.getText(),
          action: () => i(t, e.url())
        }, e.url()))
      }) : null
    }, [t, r, i]);
    return Array.isArray(r) ? (0, n.jsx)(m.yRy, {
      renderPopout: c,
      targetElementRef: l,
      align: "left",
      position: "bottom",
      onRequestOpen: () => s(true),
      onRequestClose: () => s(false),
      children: e => {
        var t, r;
        return (0, n.jsx)(u.zxk, (t = function(e) {
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
          buttonRef: l,
          text: y.intl.string(y.t["1WjMbC"]),
          variant: "primary",
          size: "sm",
          fullWidth: true,
          icon: o ? u.sXD : u.hic,
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
    }) : (0, n.jsx)(u.zxk, {
      text: y.intl.string(y.t["1WjMbC"]),
      onClick: () => i(t, r()),
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
      isActive: i
    } = e, {
      getOs: o,
      icon: s,
      url: c,
      platformKey: p
    } = t, d = o(), u = l()(h.icon, s);
    return (0, n.jsx)("li", {
      className: l()(h.platform, {
        [h.active]: i
      }),
      onMouseEnter: () => a(p),
      children: (0, n.jsxs)("div", {
        className: h.contentWrapper,
        children: [(0, n.jsxs)("div", {
          className: h.iconWrap,
          children: [(0, n.jsx)("div", {
            className: u
          }), (0, n.jsx)("div", {
            className: l()(h.active, u)
          })]
        }), (0, n.jsxs)("div", {
          children: [(0, n.jsx)(m.Heading, {
            className: h.platformName,
            variant: "heading-lg/semibold",
            children: d
          }), (0, n.jsx)("div", {
            className: h.downloadButton,
            children: (0, n.jsx)(w, {
              os: d,
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
    transitionState: i
  } = e, o = (0, d.e7)([x.default], () => x.default.getCurrentUser()), j = (0, d.e7)([g.default], () => g.default.getFingerprint()), w = null == o || o.isClaimed(), [k, P] = a.useState(function() {
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
    (null != p.getToken() || null != j) && _.default.track(b.rMx.DOWNLOAD_APP, {
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
    _.default.track(b.rMx.OPEN_MODAL, {
      type: "Download App",
      source: {
        location: t
      }
    })
  }, [t]), (0, n.jsx)(u.u_l, {
    title: y.intl.string(y.t["BK8LK+"]),
    actions: true,
    onClose: r,
    transitionState: i,
    preview: (0, n.jsx)(m.Text, {
      variant: "text-sm/normal",
      children: y.intl.format(y.t["RJS+1P"], {})
    }),
    children: (0, n.jsxs)("div", {
      className: h.container,
      children: [!c.tq && (0, n.jsxs)("div", {
        className: h.platformsWrap,
        children: [(0, n.jsx)(m.Heading, {
          variant: "heading-md/normal",
          color: "text-secondary",
          className: h.header,
          children: y.intl.string(y.t["0KK0bP"])
        }), (0, n.jsx)("ul", {
          className: l()(h.platforms, h.platformsDesktop),
          children: v.map(e => (0, n.jsx)(N, {
            isActive: k === e.platformKey,
            platform: e,
            onClick: S,
            onMouseEnter: W
          }, e.platformKey))
        })]
      }), (0, n.jsxs)("div", {
        className: h.platformsWrap,
        children: [!c.tq && (0, n.jsx)(m.Heading, {
          variant: "heading-md/normal",
          color: "text-secondary",
          className: h.header,
          children: y.intl.string(y.t.RdSNWa)
        }), (0, n.jsx)("ul", {
          className: l()(h.platforms, h.platformsMobile),
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