/** Chunk was on 74023 **/
a.r(t), a.d(t, {
  default: () => C
}), a(388685);
var s = a(255367),
  n = a(73800),
  r = a(120356),
  o = a.n(r),
  l = a(525654),
  i = a.n(l),
  c = a(873546),
  d = a(213919),
  u = a(442837),
  p = a(481060),
  f = a(391650),
  m = a(313201),
  x = a(540059),
  _ = a(314897),
  g = a(594174),
  h = a(626135),
  w = a(361207),
  v = a(981631),
  j = a(388032),
  N = a(246404);
let y = [{
    getOs: () => j.intl.string(j.t.NK5ySE),
    icon: N.apple,
    url: () => (0, w.w4)("osx", !1),
    platformKey: 0
  }, {
    getOs: () => j.intl.string(j.t.OvKGEx),
    icon: N.windows,
    url: () => (0, w.w4)("win", !1),
    platformKey: 1
  }, {
    getOs: () => j.intl.string(j.t.dJB4PD),
    icon: N.linux,
    url: [{
      url: () => (0, w.w4)("linux", !1, "deb"),
      getText: () => j.intl.string(j.t.Sodsur)
    }, {
      url: () => (0, w.w4)("linux", !1, "tar.gz"),
      getText: () => j.intl.string(j.t.G3U6IS)
    }],
    platformKey: 2
  }],
  b = [{
    getOs: () => j.intl.string(j.t.wCVyNT),
    icon: N.ios,
    url: () => v.fzT.IOS,
    platformKey: 3
  }, {
    getOs: () => j.intl.string(j.t.wuQpJC),
    icon: N.android,
    url: () => v.fzT.ANDROID,
    platformKey: 4
  }],
  A = e => {
    let {
      url: t,
      text: a,
      onClick: n
    } = e, r = (0, x.Q3)("DownloadButton"), l = (0, p.nYM)({
      grow: !0
    });
    return (0, s.jsx)(p.eee, {
      useDefaultUnderlineStyles: !1,
      href: t,
      className: r ? o()(l, N.refreshDownloadButton) : N.downloadButton,
      onClick: n,
      children: a
    })
  },
  B = e => {
    let t, {
        platform: a,
        onClick: n,
        onMouseEnter: r,
        isActive: l,
        claimed: i
      } = e,
      {
        getOs: c,
        icon: d,
        url: u,
        platformKey: f
      } = a,
      m = c(),
      x = o()(N.icon, d);
    if (Array.isArray(u)) t = u.map((e, t) => {
      let a = i ? e.url() : "";
      return (0, s.jsx)(A, {
        url: a,
        onClick: () => n(m),
        text: e.getText()
      }, "".concat(a, "-").concat(t))
    });
    else {
      let e = i ? u() : void 0;
      t = (0, s.jsx)(A, {
        url: e,
        onClick: () => n(m),
        text: j.intl.string(j.t["1WjMbG"])
      })
    }
    return (0, s.jsx)("li", {
      className: o()(N.platform, {
        [N.active]: l
      }),
      onMouseEnter: () => r(f),
      children: (0, s.jsxs)("div", {
        className: N.contentWrapper,
        children: [(0, s.jsxs)("div", {
          className: N.iconWrap,
          children: [(0, s.jsx)("div", {
            className: x
          }), (0, s.jsx)("div", {
            className: o()(N.active, x)
          })]
        }), (0, s.jsxs)("div", {
          children: [(0, s.jsx)(p.X6q, {
            className: N.platformName,
            variant: "heading-lg/semibold",
            children: m
          }), (0, s.jsx)("div", {
            className: o()(N.downloadButtons, {
              [N.list]: Array.isArray(t)
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
  } = e, l = (0, u.e7)([g.default], () => g.default.getCurrentUser()), w = (0, u.e7)([_.default], () => _.default.getFingerprint()), A = null == l || l.isClaimed(), [C, D] = n.useState(function() {
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
    (null != d.getToken() || null != w) && h.default.track(v.rMx.DOWNLOAD_APP, {
      platform: e,
      ptb: !1,
      released: !0,
      has_e_mail: A,
      referring_location: t,
      qr_code: !1
    }), A || (a(), f.j())
  }

  function W(e) {
    D(e)
  }
  n.useEffect(() => {
    h.default.track(v.rMx.OPEN_MODAL, {
      type: "Download App",
      source: {
        location: t
      }
    })
  }, [t]);
  let k = (0, m.Dt)(),
    O = (0, x.Q3)("DownloadAppsModal");
  return (0, s.jsx)(p.f6W, {
    theme: v.BRd.LIGHT,
    children: e => (0, s.jsxs)(p.Y0X, {
      className: o()(N.downloadApps, O ? void 0 : e),
      transitionState: r,
      "aria-labelledby": k,
      parentComponent: "DownloadAppsModal",
      children: [(0, s.jsx)(p.olH, {
        onClick: a,
        className: N.modalCloseButton
      }), (0, s.jsxs)(p.hzk, {
        className: N.inner,
        children: [(0, s.jsx)(p.nn4, {
          children: (0, s.jsx)(p.H, {
            id: k,
            children: j.intl.string(j.t.BK8LKy)
          })
        }), !c.tq && (0, s.jsxs)("div", {
          className: N.platformsWrap,
          children: [(0, s.jsx)(p.X6q, {
            variant: "heading-lg/semibold",
            className: N.header,
            children: j.intl.string(j.t["0KK0bG"])
          }), (0, s.jsx)("ul", {
            className: N.platforms,
            children: y.map(e => (0, s.jsx)(B, {
              isActive: C === e.platformKey,
              platform: e,
              onClick: K,
              onMouseEnter: W,
              claimed: A
            }, e.platformKey))
          })]
        }), (0, s.jsxs)("div", {
          className: N.platformsWrap,
          children: [!c.tq && (0, s.jsx)(p.X6q, {
            variant: "heading-lg/semibold",
            className: N.header,
            children: j.intl.string(j.t.RdSNWV)
          }), (0, s.jsx)("ul", {
            className: N.platforms,
            children: b.map(e => (0, s.jsx)(B, {
              isActive: C === e.platformKey,
              platform: e,
              onClick: K,
              onMouseEnter: W,
              claimed: A
            }, e.platformKey))
          })]
        })]
      }), (0, s.jsx)(p.mzw, {
        className: N.footer,
        children: (0, s.jsx)(p.Text, {
          variant: "text-sm/normal",
          children: j.intl.format(j.t["RJS+1N"], {})
        })
      })]
    })
  })
}