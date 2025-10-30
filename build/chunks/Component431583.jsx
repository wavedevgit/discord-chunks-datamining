/** Chunk was on 74023 **/
/** chunk id: 431583, original params: a,e,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => k
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk525654 = require("./525654.js"),
  o = require.n(Chunk525654),
  Chunk873546 = require("./873546.js"),
  Chunk213919 = require("./213919.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk391650 = require("./391650.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk314897 = require("./314897.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk361207 = require("./361207.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk789053 = require("./789053.js");
let y = [{
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
  A = [{
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
  C = a => {
    let {
      url: e,
      text: t,
      onClick: l
    } = a, r = (0, p.nY)({
      grow: true
    });
    return (0, n.jsx)(m.Anchor, {
      useDefaultUnderlineStyles: false,
      href: e,
      className: s()(r, v.refreshDownloadButton),
      onClick: l,
      children: t
    })
  },
  K = a => {
    let e, {
        platform: t,
        onClick: l,
        onMouseEnter: r,
        isActive: i,
        claimed: o
      } = a,
      {
        getOs: c,
        icon: d,
        url: u,
        platformKey: p
      } = t,
      f = c(),
      _ = s()(v.icon, d);
    if (Array.isArray(u)) e = u.map((a, e) => {
      let t = o ? a.url() : "";
      return (0, n.jsx)(C, {
        url: t,
        onClick: () => l(f),
        text: a.getText()
      }, "".concat(t, "-").concat(e))
    });
    else {
      let a = o ? u() : true;
      e = (0, n.jsx)(C, {
        url: a,
        onClick: () => l(f),
        text: N.intl.string(N.t["1WjMbC"])
      })
    }
    return (0, n.jsx)("li", {
      className: s()(v.platform, {
        [v.active]: i
      }),
      onMouseEnter: () => r(p),
      children: (0, n.jsxs)("div", {
        className: v.contentWrapper,
        children: [(0, n.jsxs)("div", {
          className: v.iconWrap,
          children: [(0, n.jsx)("div", {
            className: _
          }), (0, n.jsx)("div", {
            className: s()(v.active, _)
          })]
        }), (0, n.jsxs)("div", {
          children: [(0, n.jsx)(m.Heading, {
            className: v.platformName,
            variant: "heading-lg/semibold",
            children: f
          }), (0, n.jsx)("div", {
            className: s()(v.downloadButtons, {
              [v.list]: Array.isArray(e)
            }),
            children: e
          })]
        })]
      })
    })
  };

function k(a) {
  let {
    source: e,
    onClose: t,
    transitionState: r
  } = a, s = (0, u.e7)([h.default], () => h.default.getCurrentUser()), i = (0, u.e7)([x.default], () => x.default.getFingerprint()), p = null == s || s.isClaimed(), [w, C] = l.useState(function() {
    var a;
    switch (null == (a = o().os) ? true : a.family) {
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

  function k(a) {
    (null != d.getToken() || null != i) && g.default.track(j.rMx.DOWNLOAD_APP, {
      platform: a,
      ptb: false,
      released: true,
      has_e_mail: p,
      referring_location: e,
      qr_code: false
    }), p || (t(), f.j())
  }

  function D(a) {
    C(a)
  }
  l.useEffect(() => {
    g.default.track(j.rMx.OPEN_MODAL, {
      type: "Download App",
      source: {
        location: e
      }
    })
  }, [e]);
  let O = (0, _.Dt)();
  return (0, n.jsxs)(m.Y0X, {
    className: v.downloadApps,
    transitionState: r,
    "aria-labelledby": O,
    parentComponent: "DownloadAppsModal",
    children: [(0, n.jsx)(m.olH, {
      onClick: t,
      className: v.modalCloseButton
    }), (0, n.jsxs)(m.hzk, {
      className: v.inner,
      children: [(0, n.jsx)(m.nn4, {
        children: (0, n.jsx)(m.H, {
          id: O,
          children: N.intl.string(N.t["BK8LK+"])
        })
      }), !c.tq && (0, n.jsxs)("div", {
        className: v.platformsWrap,
        children: [(0, n.jsx)(m.Heading, {
          variant: "heading-lg/semibold",
          className: v.header,
          children: N.intl.string(N.t["0KK0bP"])
        }), (0, n.jsx)("ul", {
          className: v.platforms,
          children: y.map(a => (0, n.jsx)(K, {
            isActive: w === a.platformKey,
            platform: a,
            onClick: k,
            onMouseEnter: D,
            claimed: p
          }, a.platformKey))
        })]
      }), (0, n.jsxs)("div", {
        className: v.platformsWrap,
        children: [!c.tq && (0, n.jsx)(m.Heading, {
          variant: "heading-lg/semibold",
          className: v.header,
          children: N.intl.string(N.t.RdSNWa)
        }), (0, n.jsx)("ul", {
          className: v.platforms,
          children: A.map(a => (0, n.jsx)(K, {
            isActive: w === a.platformKey,
            platform: a,
            onClick: k,
            onMouseEnter: D,
            claimed: p
          }, a.platformKey))
        })]
      })]
    }), (0, n.jsx)(m.mzw, {
      className: v.footer,
      children: (0, n.jsx)(m.Text, {
        variant: "text-sm/normal",
        children: N.intl.format(N.t["RJS+1P"], {})
      })
    })]
  })
}