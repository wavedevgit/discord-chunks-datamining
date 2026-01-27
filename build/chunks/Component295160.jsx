/** Chunk was on web.js **/
/** chunk id: 295160, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
}), require("./896048.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk31582 = require("./31582.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var f = function(e) {
  return e.SINGLE_AVATAR = "1", e.MULTIPLE_AVATAR = "2", e
}(f || {});
let p = {
  [Chunk397927._3J.SIZE_32]: Chunk31582.dT,
  [Chunk397927._3J.SIZE_40]: Chunk31582.Jb
};
class _ extends(r = Chunk64700.Component) {
  render() {
    let {
      type: e,
      avatarSize: t,
      className: n,
      childrenClassName: r,
      doNotAnimate: a
    } = this.props;
    return "2" === e ? (0, i.jsxs)("div", {
      className: s()(u.ce, u.jO, n),
      children: [(0, i.jsxs)(c.A, {
        children: [(0, i.jsx)("div", {
          className: s()(u.RH, p[t], u.hC)
        }), (0, i.jsx)("div", {
          className: s()(u.RH, p[t], u.hC)
        }), (0, i.jsx)("div", {
          className: s()(u.RH, p[t])
        })]
      }), (0, i.jsx)(c.A, {
        grow: 1,
        className: u.eC,
        style: {
          maxWidth: this.placeholderMaxWidth
        }
      })]
    }) : (0, i.jsxs)(c.A, {
      className: s()(u.qf, !a && u.lN, n),
      children: [(0, i.jsx)("div", {
        className: s()(u.RH, p[t], r)
      }), (0, i.jsx)(c.A, {
        grow: 1,
        className: s()(u.gM, r),
        style: {
          maxWidth: this.placeholderMaxWidth
        }
      })]
    })
  }
  constructor(...e) {
    super(...e), d(this, "placeholderMaxWidth", "".concat(Math.floor(40 * Math.random()) + 40, "%"))
  }
}
d(_, "defaultProps", {
  type: "1"
}), d(_, "Types", f);
let h = _