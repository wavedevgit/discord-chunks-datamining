/** Chunk was on 76030 **/
n.r(t), n.d(t, {
  default: () => I
}), n(47120);
var r = n(200651),
  i = n(192379),
  a = n(120356),
  o = n.n(a),
  l = n(525654),
  s = n.n(l),
  c = n(873546),
  d = n(213919),
  u = n(442837),
  p = n(481060),
  m = n(391650),
  f = n(313201),
  h = n(540059),
  g = n(314897),
  _ = n(594174),
  b = n(626135),
  v = n(361207),
  y = n(981631),
  x = n(388032),
  O = n(882528);
let E = [{
    getOs: () => x.NW.string(x.t.NK5ySE),
    icon: O.apple,
    url: () => (0, v.w4)("osx", !1),
    platformKey: 0
  }, {
    getOs: () => x.NW.string(x.t.OvKGEx),
    icon: O.windows,
    url: () => (0, v.w4)("win", !1),
    platformKey: 1
  }, {
    getOs: () => x.NW.string(x.t.dJB4PD),
    icon: O.linux,
    url: [{
      url: () => (0, v.w4)("linux", !1, "deb"),
      getText: () => x.NW.string(x.t.Sodsur)
    }, {
      url: () => (0, v.w4)("linux", !1, "tar.gz"),
      getText: () => x.NW.string(x.t.G3U6IS)
    }],
    platformKey: 2
  }],
  j = [{
    getOs: () => x.NW.string(x.t.wCVyNT),
    icon: O.ios,
    url: () => y.fzT.IOS,
    platformKey: 3
  }, {
    getOs: () => x.NW.string(x.t.wuQpJC),
    icon: O.android,
    url: () => y.fzT.ANDROID,
    platformKey: 4
  }],
  N = e => {
    let {
      url: t,
      text: n,
      onClick: i
    } = e, a = (0, h.Q3)("DownloadButton"), l = (0, p.nYM)({
      grow: !0
    });
    return (0, r.jsx)(p.eee, {
      useDefaultUnderlineStyles: !1,
      href: t,
      className: a ? o()(l, O.refreshDownloadButton) : O.downloadButton,
      onClick: i,
      children: n
    })
  },
  C = e => {
    let t, {
        platform: n,
        onClick: i,
        onMouseEnter: a,
        isActive: l,
        claimed: s
      } = e,
      {
        getOs: c,
        icon: d,
        url: u,
        platformKey: m
      } = n,
      f = c(),
      h = o()(O.icon, d);
    if (Array.isArray(u)) t = u.map((e, t) => {
      let n = s ? e.url() : "";
      return (0, r.jsx)(N, {
        url: n,
        onClick: () => i(f),
        text: e.getText()
      }, "".concat(n, "-").concat(t))
    });
    else {
      let e = s ? u() : void 0;
      t = (0, r.jsx)(N, {
        url: e,
        onClick: () => i(f),
        text: x.NW.string(x.t["1WjMbG"])
      })
    }
    return (0, r.jsx)("li", {
      className: o()(O.platform, {
        [O.active]: l
      }),
      onMouseEnter: () => a(m),
      children: (0, r.jsxs)("div", {
        className: O.contentWrapper,
        children: [(0, r.jsxs)("div", {
          className: O.iconWrap,
          children: [(0, r.jsx)("div", {
            className: h
          }), (0, r.jsx)("div", {
            className: o()(O.active, h)
          })]
        }), (0, r.jsxs)("div", {
          children: [(0, r.jsx)(p.X6q, {
            className: O.platformName,
            variant: "heading-lg/semibold",
            children: f
          }), (0, r.jsx)("div", {
            className: o()(O.downloadButtons, {
              [O.list]: Array.isArray(t)
            }),
            children: t
          })]
        })]
      })
    })
  };

function I(e) {
  let {
    source: t,
    onClose: n,
    transitionState: a
  } = e, l = (0, u.e7)([_.default], () => _.default.getCurrentUser()), v = (0, u.e7)([g.default], () => g.default.getFingerprint()), N = null == l || l.isClaimed(), [I, S] = i.useState(function() {
    var e;
    switch (null === (e = s().os) || void 0 === e ? void 0 : e.family) {
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

  function T(e) {
    (null != d.getToken() || null != v) && b.default.track(y.rMx.DOWNLOAD_APP, {
      platform: e,
      ptb: !1,
      released: !0,
      has_e_mail: N,
      referring_location: t,
      qr_code: !1
    }), N || (n(), m.j())
  }

  function P(e) {
    S(e)
  }
  i.useEffect(() => {
    b.default.track(y.rMx.OPEN_MODAL, {
      type: "Download App",
      source: {
        location: t
      }
    })
  }, [t]);
  let A = (0, f.Dt)(),
    w = (0, h.Q3)("DownloadAppsModal");
  return (0, r.jsx)(p.f6W, {
    theme: y.BRd.LIGHT,
    children: e => (0, r.jsxs)(p.Y0X, {
      className: o()(O.downloadApps, w ? void 0 : e),
      transitionState: a,
      "aria-labelledby": A,
      children: [(0, r.jsx)(p.olH, {
        onClick: n,
        className: O.modalCloseButton
      }), (0, r.jsxs)(p.hzk, {
        className: O.inner,
        children: [(0, r.jsx)(p.nn4, {
          children: (0, r.jsx)(p.H, {
            id: A,
            children: x.NW.string(x.t.BK8LKy)
          })
        }), !c.tq && (0, r.jsxs)("div", {
          className: O.platformsWrap,
          children: [(0, r.jsx)(p.X6q, {
            variant: "heading-lg/semibold",
            className: O.header,
            children: x.NW.string(x.t["0KK0bG"])
          }), (0, r.jsx)("ul", {
            className: O.platforms,
            children: E.map(e => (0, r.jsx)(C, {
              isActive: I === e.platformKey,
              platform: e,
              onClick: T,
              onMouseEnter: P,
              claimed: N
            }, e.platformKey))
          })]
        }), (0, r.jsxs)("div", {
          className: O.platformsWrap,
          children: [!c.tq && (0, r.jsx)(p.X6q, {
            variant: "heading-lg/semibold",
            className: O.header,
            children: x.NW.string(x.t.RdSNWV)
          }), (0, r.jsx)("ul", {
            className: O.platforms,
            children: j.map(e => (0, r.jsx)(C, {
              isActive: I === e.platformKey,
              platform: e,
              onClick: T,
              onMouseEnter: P,
              claimed: N
            }, e.platformKey))
          })]
        })]
      }), (0, r.jsx)(p.mzw, {
        className: O.footer,
        children: (0, r.jsx)(p.Text, {
          variant: "text-sm/normal",
          children: x.NW.format(x.t["RJS+1N"], {})
        })
      })]
    })
  })
}