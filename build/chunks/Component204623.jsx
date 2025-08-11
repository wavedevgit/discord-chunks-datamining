/** Chunk was on web.js **/
/** chunk id: 204623, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./35282.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk525654 = require("./525654.js"),
  a = require.n(Chunk525654),
  Chunk446431 = require("./446431.js"),
  Chunk442837 = require("./442837.js"),
  Chunk336317 = require("./336317.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk406128 = require("./406128.jsx"),
  Chunk451478 = require("./451478.js"),
  Chunk176354 = require("./176354.js"),
  Chunk63063 = require("./63063.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk151851 = require("./151851.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I() {
  let e = window.require("electron").remote.getCurrentWindow();
  Chunk998502.ZP.minimize = () => module.minimize(), Chunk998502.ZP.maximize = () => {
    module.isMaximized() ? module.unmaximize() : module.maximize()
  }, Chunk998502.ZP.close = () => module.close()
}
let T = Chunk442837.ZP.connectStores([Chunk451478.Z], () => ({
  focused: Chunk451478.Z.isFocused()
}))(Chunk151851.Z);
class S extends Chunk73800.PureComponent {
  getPlatform() {
    var e;
    let t = null == (e = a().os) ? true : module.family;
    return null != exports && /^win/i.test(exports) ? Chunk358085.PlatformTypes.WINDOWS : null != exports && /darwin|os x/i.test(exports) ? Chunk358085.PlatformTypes.OSX : Chunk358085.PlatformTypes.LINUX
  }
  componentDidMount() {
    I()
  }
  render() {
    let e = (0, Chunk255367.jsx)("div", {
        children: (0, Chunk255367.jsxs)("p", {
          children: [Chunk388032.intl.string(Chunk388032.t["4tRjHB"]), " ", (0, Chunk255367.jsx)(Chunk596454.Z, {
            src: Chunk176354.ZP.getURL(Chunk336317.Z.convert.fromCodePoint("1f44c")),
            emojiName: ":ok_hand:",
            animated: false
          })]
        })
      }),
      t = (0, Chunk255367.jsx)(Chunk755721.zx, {
        size: Chunk755721.Ph.LARGE,
        onClick: this.handleDownload,
        children: Chunk388032.intl.string(Chunk388032.t["1WjMbG"])
      });
    return (0, Chunk255367.jsxs)(Chunk73800.Fragment, {
      children: [(0, Chunk255367.jsx)(Chunk446431.ql, {
        children: (0, Chunk255367.jsx)("html", {
          className: (0, Chunk481060.QeD)(Chunk981631.BRd.DARK)
        })
      }), (0, Chunk255367.jsx)(T, {
        type: this.getPlatform()
      }), (0, Chunk255367.jsx)(Chunk406128.Z, {
        title: Chunk388032.intl.string(Chunk388032.t["3h+n+/"]),
        note: module,
        action: exports
      })]
    })
  }
  constructor(...e) {
    super(...e), v(this, "handleDownload", () => {
      window.open(this.getPlatform() === g.PlatformTypes.WINDOWS ? m.Z.getArticleURL(y.BhN.CORRUPT_INSTALLATION) : y.EYA.DOWNLOAD)
    })
  }
}