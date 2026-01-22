/** Chunk was on web.js **/
/** chunk id: 169982, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => S
}), require("./747238.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk481613 = require("./481613.js"),
  s = require.n(Chunk481613),
  Chunk422998 = require("./422998.js"),
  Chunk311907 = require("./311907.js"),
  Chunk838677 = require("./838677.js"),
  Chunk397927 = require("./397927.js"),
  Chunk565645 = require("./565645.jsx"),
  Chunk582322 = require("./582322.jsx"),
  Chunk531685 = require("./531685.js"),
  Chunk690521 = require("./690521.js"),
  Chunk975571 = require("./975571.js"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js"),
  Chunk721668 = require("./721668.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A() {
  let e = window.require("electron").remote.getCurrentWindow();
  g.Ay.minimize = () => e.minimize(), g.Ay.maximize = () => {
    e.isMaximized() ? e.unmaximize() : e.maximize()
  }, g.Ay.close = () => e.close()
}
let v = Chunk311907.Ay.connectStores([Chunk531685.A], () => ({
  focused: p.A.isFocused()
}))(Chunk582322.A);
class S extends Chunk64700.PureComponent {
  getPlatform() {
    var e;
    let t = null == (e = s().os) ? true : e.family;
    return null != t && /^win/i.test(t) ? m.PlatformTypes.WINDOWS : null != t && /darwin|os x/i.test(t) ? m.PlatformTypes.OSX : m.PlatformTypes.LINUX
  }
  componentDidMount() {
    A()
  }
  render() {
    let e = (0, r.jsx)("div", {
      children: (0, r.jsxs)("p", {
        children: [y.intl.string(y.t["4tRjHC"]), " ", (0, r.jsx)(d.A, {
          src: _.Ay.getURL(c.A.convert.fromCodePoint("1f44c")),
          emojiName: ":ok_hand:",
          animated: false
        })]
      })
    });
    return (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(o.mg, {
        children: (0, r.jsx)("html", {
          className: (0, u.mo9)(b.NJ8.DARK)
        })
      }), (0, r.jsx)(v, {
        type: this.getPlatform()
      }), (0, r.jsx)(E.A, {
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
      window.open(this.getPlatform() === m.PlatformTypes.WINDOWS ? h.A.getArticleURL(b.MVz.CORRUPT_INSTALLATION) : b.X7G.DOWNLOAD)
    })
  }
}