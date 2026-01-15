/** Chunk was on web.js **/
/** chunk id: 936079, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
}), require("./35282.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk525654 = require("./525654.js"),
  o = require.n(Chunk525654),
  Chunk131271 = require("./131271.js"),
  Chunk442837 = require("./442837.js"),
  Chunk336317 = require("./336317.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk151851 = require("./151851.jsx"),
  Chunk451478 = require("./451478.js"),
  Chunk176354 = require("./176354.js"),
  Chunk63063 = require("./63063.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk406128 = require("./406128.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v() {
  let e = window.require("electron").remote.getCurrentWindow();
  g.ZP.minimize = () => e.minimize(), g.ZP.maximize = () => {
    e.isMaximized() ? e.unmaximize() : e.maximize()
  }, g.ZP.close = () => e.close()
}
let S = Chunk442837.ZP.connectStores([Chunk451478.Z], () => ({
  focused: p.Z.isFocused()
}))(Chunk151851.Z);
class I extends Chunk473749.PureComponent {
  getPlatform() {
    var e;
    let t = null == (e = o().os) ? true : e.family;
    return null != t && /^win/i.test(t) ? m.PlatformTypes.WINDOWS : null != t && /darwin|os x/i.test(t) ? m.PlatformTypes.OSX : m.PlatformTypes.LINUX
  }
  componentDidMount() {
    v()
  }
  render() {
    let e = (0, r.jsx)("div", {
      children: (0, r.jsxs)("p", {
        children: [y.intl.string(y.t["4tRjHC"]), " ", (0, r.jsx)(d.Z, {
          src: _.ZP.getURL(c.Z.convert.fromCodePoint("1f44c")),
          emojiName: ":ok_hand:",
          animated: false
        })]
      })
    });
    return (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(s.ql, {
        children: (0, r.jsx)("html", {
          className: (0, u.QeD)(b.BRd.DARK)
        })
      }), (0, r.jsx)(S, {
        type: this.getPlatform()
      }), (0, r.jsx)(E.Z, {
        title: y.intl.string(y.t["3h+n+8"]),
        note: e,
        action: (0, r.jsx)(u.Button, {
          size: "md",
          variant: "primary",
          text: y.intl.string(y.t["1WjMbC"]),
          onClick: this.handleDownload
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), O(this, "handleDownload", () => {
      window.open(this.getPlatform() === m.PlatformTypes.WINDOWS ? h.Z.getArticleURL(b.BhN.CORRUPT_INSTALLATION) : b.EYA.DOWNLOAD)
    })
  }
}