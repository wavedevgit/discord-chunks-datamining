/** Chunk was on 74023 **/
a.r(t), a.d(t, {
  default: () => K
}), a(388685);
var s = a(255367),
  n = a(73800),
  r = a(120356),
  l = a.n(r),
  o = a(525654),
  i = a.n(o),
  c = a(873546),
  d = a(213919),
  u = a(442837),
  p = a(755721),
  f = a(481060),
  m = a(391650),
  _ = a(313201),
  x = a(314897),
  h = a(594174),
  g = a(626135),
  w = a(361207),
  j = a(981631),
  v = a(388032),
  N = a(246404);
let y = [{
    getOs: () => v.intl.string(v.t.NK5ySE),
    icon: N.apple,
    url: () => (0, w.w4)("osx", !1),
    platformKey: 0
  }, {
    getOs: () => v.intl.string(v.t.OvKGEx),
    icon: N.windows,
    url: () => (0, w.w4)("win", !1),
    platformKey: 1
  }, {
    getOs: () => v.intl.string(v.t.dJB4PD),
    icon: N.linux,
    url: [{
      url: () => (0, w.w4)("linux", !1, "deb"),
      getText: () => v.intl.string(v.t.Sodsur)
    }, {
      url: () => (0, w.w4)("linux", !1, "tar.gz"),
      getText: () => v.intl.string(v.t.G3U6IS)
    }],
    platformKey: 2
  }],
  A = [{
    getOs: () => v.intl.string(v.t.wCVyNT),
    icon: N.ios,
    url: () => j.fzT.IOS,
    platformKey: 3
  }, {
    getOs: () => v.intl.string(v.t.wuQpJC),
    icon: N.android,
    url: () => j.fzT.ANDROID,
    platformKey: 4
  }],
  C = e => {
    let {
      url: t,
      text: a,
      onClick: n
    } = e, r = (0, p.nY)({
      grow: !0
    });
    return (0, s.jsx)(f.eee, {
      useDefaultUnderlineStyles: !1,
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
      let e = i ? u() : void 0;
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
    switch (null == (e = i().os) ? void 0 : e.family) {
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
      ptb: !1,
      released: !0,
      has_e_mail: p,
      referring_location: t,
      qr_code: !1
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