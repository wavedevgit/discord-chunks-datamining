/** Chunk was on 74023 **/
a.r(t), a.d(t, {
  default: () => C
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
  p = a(481060),
  f = a(391650),
  m = a(313201),
  x = a(314897),
  _ = a(594174),
  g = a(626135),
  h = a(361207),
  v = a(981631),
  w = a(388032),
  j = a(246404);
let N = [{
    getOs: () => w.intl.string(w.t.NK5ySE),
    icon: j.apple,
    url: () => (0, h.w4)("osx", !1),
    platformKey: 0
  }, {
    getOs: () => w.intl.string(w.t.OvKGEx),
    icon: j.windows,
    url: () => (0, h.w4)("win", !1),
    platformKey: 1
  }, {
    getOs: () => w.intl.string(w.t.dJB4PD),
    icon: j.linux,
    url: [{
      url: () => (0, h.w4)("linux", !1, "deb"),
      getText: () => w.intl.string(w.t.Sodsur)
    }, {
      url: () => (0, h.w4)("linux", !1, "tar.gz"),
      getText: () => w.intl.string(w.t.G3U6IS)
    }],
    platformKey: 2
  }],
  y = [{
    getOs: () => w.intl.string(w.t.wCVyNT),
    icon: j.ios,
    url: () => v.fzT.IOS,
    platformKey: 3
  }, {
    getOs: () => w.intl.string(w.t.wuQpJC),
    icon: j.android,
    url: () => v.fzT.ANDROID,
    platformKey: 4
  }],
  b = e => {
    let {
      url: t,
      text: a,
      onClick: n
    } = e, r = (0, p.nYM)({
      grow: !0
    });
    return (0, s.jsx)(p.eee, {
      useDefaultUnderlineStyles: !1,
      href: t,
      className: l()(r, j.refreshDownloadButton),
      onClick: n,
      children: a
    })
  },
  A = e => {
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
        platformKey: f
      } = a,
      m = c(),
      x = l()(j.icon, d);
    if (Array.isArray(u)) t = u.map((e, t) => {
      let a = i ? e.url() : "";
      return (0, s.jsx)(b, {
        url: a,
        onClick: () => n(m),
        text: e.getText()
      }, "".concat(a, "-").concat(t))
    });
    else {
      let e = i ? u() : void 0;
      t = (0, s.jsx)(b, {
        url: e,
        onClick: () => n(m),
        text: w.intl.string(w.t["1WjMbG"])
      })
    }
    return (0, s.jsx)("li", {
      className: l()(j.platform, {
        [j.active]: o
      }),
      onMouseEnter: () => r(f),
      children: (0, s.jsxs)("div", {
        className: j.contentWrapper,
        children: [(0, s.jsxs)("div", {
          className: j.iconWrap,
          children: [(0, s.jsx)("div", {
            className: x
          }), (0, s.jsx)("div", {
            className: l()(j.active, x)
          })]
        }), (0, s.jsxs)("div", {
          children: [(0, s.jsx)(p.X6q, {
            className: j.platformName,
            variant: "heading-lg/semibold",
            children: m
          }), (0, s.jsx)("div", {
            className: l()(j.downloadButtons, {
              [j.list]: Array.isArray(t)
            }),
            children: t
          })]
        })]
      })
    })
  };

function C(e) {
  let {
    source: t,
    onClose: a,
    transitionState: r
  } = e, l = (0, u.e7)([_.default], () => _.default.getCurrentUser()), o = (0, u.e7)([x.default], () => x.default.getFingerprint()), h = null == l || l.isClaimed(), [b, C] = n.useState(function() {
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
    (null != d.getToken() || null != o) && g.default.track(v.rMx.DOWNLOAD_APP, {
      platform: e,
      ptb: !1,
      released: !0,
      has_e_mail: h,
      referring_location: t,
      qr_code: !1
    }), h || (a(), f.j())
  }

  function k(e) {
    C(e)
  }
  n.useEffect(() => {
    g.default.track(v.rMx.OPEN_MODAL, {
      type: "Download App",
      source: {
        location: t
      }
    })
  }, [t]);
  let D = (0, m.Dt)();
  return (0, s.jsxs)(p.Y0X, {
    className: j.downloadApps,
    transitionState: r,
    "aria-labelledby": D,
    parentComponent: "DownloadAppsModal",
    children: [(0, s.jsx)(p.olH, {
      onClick: a,
      className: j.modalCloseButton
    }), (0, s.jsxs)(p.hzk, {
      className: j.inner,
      children: [(0, s.jsx)(p.nn4, {
        children: (0, s.jsx)(p.H, {
          id: D,
          children: w.intl.string(w.t.BK8LKy)
        })
      }), !c.tq && (0, s.jsxs)("div", {
        className: j.platformsWrap,
        children: [(0, s.jsx)(p.X6q, {
          variant: "heading-lg/semibold",
          className: j.header,
          children: w.intl.string(w.t["0KK0bG"])
        }), (0, s.jsx)("ul", {
          className: j.platforms,
          children: N.map(e => (0, s.jsx)(A, {
            isActive: b === e.platformKey,
            platform: e,
            onClick: K,
            onMouseEnter: k,
            claimed: h
          }, e.platformKey))
        })]
      }), (0, s.jsxs)("div", {
        className: j.platformsWrap,
        children: [!c.tq && (0, s.jsx)(p.X6q, {
          variant: "heading-lg/semibold",
          className: j.header,
          children: w.intl.string(w.t.RdSNWV)
        }), (0, s.jsx)("ul", {
          className: j.platforms,
          children: y.map(e => (0, s.jsx)(A, {
            isActive: b === e.platformKey,
            platform: e,
            onClick: K,
            onMouseEnter: k,
            claimed: h
          }, e.platformKey))
        })]
      })]
    }), (0, s.jsx)(p.mzw, {
      className: j.footer,
      children: (0, s.jsx)(p.Text, {
        variant: "text-sm/normal",
        children: w.intl.format(w.t["RJS+1N"], {})
      })
    })]
  })
}