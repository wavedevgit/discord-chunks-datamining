/** Chunk was on 74023 **/
/** chunk id: 431583, original params: e,a,t (module,exports,require) **/
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
    getOs: () => Chunk388032.intl.string(Chunk388032.t.NK5ySE),
    icon: Chunk789053.apple,
    url: () => (0, Chunk361207.w4)("osx", false),
    platformKey: 0
  }, {
    getOs: () => Chunk388032.intl.string(Chunk388032.t.OvKGEx),
    icon: Chunk789053.windows,
    url: () => (0, Chunk361207.w4)("win", false),
    platformKey: 1
  }, {
    getOs: () => Chunk388032.intl.string(Chunk388032.t.dJB4PD),
    icon: Chunk789053.linux,
    url: [{
      url: () => (0, Chunk361207.w4)("linux", false, "deb"),
      getText: () => Chunk388032.intl.string(Chunk388032.t.Sodsur)
    }, {
      url: () => (0, Chunk361207.w4)("linux", false, "tar.gz"),
      getText: () => Chunk388032.intl.string(Chunk388032.t.G3U6IS)
    }],
    platformKey: 2
  }],
  A = [{
    getOs: () => Chunk388032.intl.string(Chunk388032.t.wCVyNT),
    icon: Chunk789053.ios,
    url: () => Chunk981631.fzT.IOS,
    platformKey: 3
  }, {
    getOs: () => Chunk388032.intl.string(Chunk388032.t.wuQpJC),
    icon: Chunk789053.android,
    url: () => Chunk981631.fzT.ANDROID,
    platformKey: 4
  }],
  C = e => {
    let {
      url: a,
      text: t,
      onClick: l
    } = e, r = (0, p.nY)({
      grow: true
    });
    return (0, n.jsx)(m.Anchor, {
      useDefaultUnderlineStyles: false,
      href: a,
      className: s()(r, v.refreshDownloadButton),
      onClick: l,
      children: t
    })
  },
  K = e => {
    let a, {
        platform: t,
        onClick: l,
        onMouseEnter: r,
        isActive: i,
        claimed: o
      } = e,
      {
        getOs: c,
        icon: d,
        url: u,
        platformKey: p
      } = t,
      f = c(),
      _ = s()(v.icon, d);
    if (Array.isArray(u)) a = u.map((e, a) => {
      let t = o ? e.url() : "";
      return (0, n.jsx)(C, {
        url: t,
        onClick: () => l(f),
        text: e.getText()
      }, "".concat(t, "-").concat(a))
    });
    else {
      let e = o ? u() : true;
      a = (0, n.jsx)(C, {
        url: e,
        onClick: () => l(f),
        text: N.intl.string(N.t["1WjMbG"])
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
              [v.list]: Array.isArray(a)
            }),
            children: a
          })]
        })]
      })
    })
  };

function k(e) {
  let {
    source: a,
    onClose: t,
    transitionState: r
  } = e, s = (0, u.e7)([h.default], () => h.default.getCurrentUser()), i = (0, u.e7)([x.default], () => x.default.getFingerprint()), p = null == s || s.isClaimed(), [w, C] = l.useState(function() {
    var e;
    switch (null == (e = o().os) ? true : e.family) {
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

  function k(e) {
    (null != d.getToken() || null != i) && g.default.track(j.rMx.DOWNLOAD_APP, {
      platform: e,
      ptb: false,
      released: true,
      has_e_mail: p,
      referring_location: a,
      qr_code: false
    }), p || (t(), f.j())
  }

  function D(e) {
    C(e)
  }
  l.useEffect(() => {
    g.default.track(j.rMx.OPEN_MODAL, {
      type: "Download App",
      source: {
        location: a
      }
    })
  }, [a]);
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
          children: N.intl.string(N.t.BK8LKy)
        })
      }), !c.tq && (0, n.jsxs)("div", {
        className: v.platformsWrap,
        children: [(0, n.jsx)(m.Heading, {
          variant: "heading-lg/semibold",
          className: v.header,
          children: N.intl.string(N.t["0KK0bG"])
        }), (0, n.jsx)("ul", {
          className: v.platforms,
          children: y.map(e => (0, n.jsx)(K, {
            isActive: w === e.platformKey,
            platform: e,
            onClick: k,
            onMouseEnter: D,
            claimed: p
          }, e.platformKey))
        })]
      }), (0, n.jsxs)("div", {
        className: v.platformsWrap,
        children: [!c.tq && (0, n.jsx)(m.Heading, {
          variant: "heading-lg/semibold",
          className: v.header,
          children: N.intl.string(N.t.RdSNWV)
        }), (0, n.jsx)("ul", {
          className: v.platforms,
          children: A.map(e => (0, n.jsx)(K, {
            isActive: w === e.platformKey,
            platform: e,
            onClick: k,
            onMouseEnter: D,
            claimed: p
          }, e.platformKey))
        })]
      })]
    }), (0, n.jsx)(m.mzw, {
      className: v.footer,
      children: (0, n.jsx)(m.Text, {
        variant: "text-sm/normal",
        children: N.intl.format(N.t["RJS+1N"], {})
      })
    })]
  })
}