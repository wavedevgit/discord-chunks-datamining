/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
n.d(t, {
  Z: () => I
}), n(301563), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(525654),
  a = n.n(o),
  s = n(765053),
  l = n(442837),
  c = n(336317),
  u = n(481060),
  d = n(596454),
  f = n(406128),
  p = n(451478),
  _ = n(176354),
  h = n(63063),
  m = n(358085),
  g = n(998502),
  E = n(151851),
  v = n(981631),
  b = n(388032);

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function O() {
  let e = window.require("electron").remote.getCurrentWindow();
  g.ZP.minimize = () => e.minimize(), g.ZP.maximize = () => {
    e.isMaximized() ? e.unmaximize() : e.maximize()
  }, g.ZP.close = () => e.close()
}
let S = l.ZP.connectStores([p.Z], () => ({
  focused: p.Z.isFocused()
}))(E.Z);
class I extends i.PureComponent {
  getPlatform() {
    var e;
    let t = null === (e = a().os) || void 0 === e ? void 0 : e.family;
    return null != t && /^win/i.test(t) ? m.PlatformTypes.WINDOWS : null != t && /darwin|os x/i.test(t) ? m.PlatformTypes.OSX : m.PlatformTypes.LINUX
  }
  componentDidMount() {
    O()
  }
  render() {
    let e = (0, r.jsx)("div", {
        children: (0, r.jsxs)("p", {
          children: [b.NW.string(b.t["4tRjHB"]), " ", (0, r.jsx)(d.Z, {
            src: _.ZP.getURL(c.Z.convert.fromCodePoint("1f44c")),
            emojiName: ":ok_hand:",
            animated: !1
          })]
        })
      }),
      t = (0, r.jsx)(u.zxk, {
        size: u.PhG.LARGE,
        onClick: this.handleDownload,
        children: b.NW.string(b.t["1WjMbG"])
      });
    return (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(s.ql, {
        children: (0, r.jsx)("html", {
          className: (0, u.QeD)(v.BRd.DARK)
        })
      }), (0, r.jsx)(S, {
        type: this.getPlatform()
      }), (0, r.jsx)(f.Z, {
        title: b.NW.string(b.t["3h+n+/"]),
        note: e,
        action: t
      })]
    })
  }
  constructor(...e) {
    super(...e), y(this, "handleDownload", () => {
      window.open(this.getPlatform() === m.PlatformTypes.WINDOWS ? h.Z.getArticleURL(v.BhN.CORRUPT_INSTALLATION) : v.EYA.DOWNLOAD)
    })
  }
}