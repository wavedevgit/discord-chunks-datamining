/** Chunk was on 74023 **/
/** chunk id: 431583, original params: e,t,a (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => K
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk525654 = require("./525654.js"),
  i = require.n(Chunk525654),
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
  Chunk246404 = require("./246404.js");
let y = [{
    getOs: () => Chunk388032.intl.string(Chunk388032.t.NK5ySE),
    icon: Chunk246404.apple,
    url: () => (0, Chunk361207.w4)("osx", false),
    platformKey: 0
  }, {
    getOs: () => Chunk388032.intl.string(Chunk388032.t.OvKGEx),
    icon: Chunk246404.windows,
    url: () => (0, Chunk361207.w4)("win", false),
    platformKey: 1
  }, {
    getOs: () => Chunk388032.intl.string(Chunk388032.t.dJB4PD),
    icon: Chunk246404.linux,
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
    icon: Chunk246404.ios,
    url: () => Chunk981631.fzT.IOS,
    platformKey: 3
  }, {
    getOs: () => Chunk388032.intl.string(Chunk388032.t.wuQpJC),
    icon: Chunk246404.android,
    url: () => Chunk981631.fzT.ANDROID,
    platformKey: 4
  }],
  C = e => {
    let {
      url: t,
      text: a,
      onClick: n
    } = e, r = (0, p.nY)({
      grow: true
    });
    return (0, s.jsx)(f.eee, {
      useDefaultUnderlineStyles: false,
      href: t,
      className: l()(r, N.refreshDownloadButton),
      onClick: n,
      children: a
    })
  },
  b = e => {
    let t, {
        platform: a,
        onClick: n,
        onMouseEnter: r,
        isActive: o,
        claimed: i
      } = e,
      {
        getOs: c,
        icon: d,
        url: u,
        platformKey: p
      } = a,
      m = c(),
      _ = l()(N.icon, d);
    if (Array.isArray(u)) t = u.map((e, t) => {
      let a = i ? e.url() : "";
      return (0, s.jsx)(C, {
        url: a,
        onClick: () => n(m),
        text: e.getText()
      }, "".concat(a, "-").concat(t))
    });
    else {
      let e = i ? u() : true;
      t = (0, s.jsx)(C, {
        url: e,
        onClick: () => n(m),
        text: v.intl.string(v.t["1WjMbG"])
      })
    }
    return (0, s.jsx)("li", {
      className: l()(N.platform, {
        [N.active]: o
      }),
      onMouseEnter: () => r(p),
      children: (0, s.jsxs)("div", {
        className: N.contentWrapper,
        children: [(0, s.jsxs)("div", {
          className: N.iconWrap,
          children: [(0, s.jsx)("div", {
            className: _
          }), (0, s.jsx)("div", {
            className: l()(N.active, _)
          })]
        }), (0, s.jsxs)("div", {
          children: [(0, s.jsx)(f.X6q, {
            className: N.platformName,
            variant: "heading-lg/semibold",
            children: m
          }), (0, s.jsx)("div", {
            className: l()(N.downloadButtons, {
              [N.list]: Array.isArray(t)
            }),
            children: t
          })]
        })]
      })
    })
  };

function K(e) {
  let {
    source: t,
    onClose: a,
    transitionState: r
  } = e, l = (0, u.e7)([h.default], () => h.default.getCurrentUser()), o = (0, u.e7)([x.default], () => x.default.getFingerprint()), p = null == l || l.isClaimed(), [w, C] = n.useState(function() {
    var e;
    switch (null == (e = i().os) ? true : e.family) {
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

  function K(e) {
    (null != d.getToken() || null != o) && g.default.track(j.rMx.DOWNLOAD_APP, {
      platform: e,
      ptb: false,
      released: true,
      has_e_mail: p,
      referring_location: t,
      qr_code: false
    }), p || (a(), m.j())
  }

  function k(e) {
    C(e)
  }
  n.useEffect(() => {
    g.default.track(j.rMx.OPEN_MODAL, {
      type: "Download App",
      source: {
        location: t
      }
    })
  }, [t]);
  let D = (0, _.Dt)();
  return (0, s.jsxs)(f.Y0X, {
    className: N.downloadApps,
    transitionState: r,
    "aria-labelledby": D,
    parentComponent: "DownloadAppsModal",
    children: [(0, s.jsx)(f.olH, {
      onClick: a,
      className: N.modalCloseButton
    }), (0, s.jsxs)(f.hzk, {
      className: N.inner,
      children: [(0, s.jsx)(f.nn4, {
        children: (0, s.jsx)(f.H, {
          id: D,
          children: v.intl.string(v.t.BK8LKy)
        })
      }), !c.tq && (0, s.jsxs)("div", {
        className: N.platformsWrap,
        children: [(0, s.jsx)(f.X6q, {
          variant: "heading-lg/semibold",
          className: N.header,
          children: v.intl.string(v.t["0KK0bG"])
        }), (0, s.jsx)("ul", {
          className: N.platforms,
          children: y.map(e => (0, s.jsx)(b, {
            isActive: w === e.platformKey,
            platform: e,
            onClick: K,
            onMouseEnter: k,
            claimed: p
          }, e.platformKey))
        })]
      }), (0, s.jsxs)("div", {
        className: N.platformsWrap,
        children: [!c.tq && (0, s.jsx)(f.X6q, {
          variant: "heading-lg/semibold",
          className: N.header,
          children: v.intl.string(v.t.RdSNWV)
        }), (0, s.jsx)("ul", {
          className: N.platforms,
          children: A.map(e => (0, s.jsx)(b, {
            isActive: w === e.platformKey,
            platform: e,
            onClick: K,
            onMouseEnter: k,
            claimed: p
          }, e.platformKey))
        })]
      })]
    }), (0, s.jsx)(f.mzw, {
      className: N.footer,
      children: (0, s.jsx)(f.Text, {
        variant: "text-sm/normal",
        children: v.intl.format(v.t["RJS+1N"], {})
      })
    })]
  })
}