/** Chunk was on web.js **/
/** chunk id: 39628, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk846519 = require("./846519.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk243404 = require("./243404.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  let {
    percentage: t,
    isSingleLine: n
  } = e;
  return (0, i.jsx)("div", {
    className: s()({
      [u.bar]: n,
      [u.barInMultiLine]: !n
    }),
    children: (0, i.jsx)("div", {
      className: u.barInner,
      style: {
        width: "".concat(100 * Math.max(Math.min(t, 1), 0), "%")
      }
    })
  })
}

function _(e) {
  return String(e).padStart(2, "0")
}

function p(e) {
  let {
    time: t,
    padLargestUnit: n
  } = e, r = Math.floor(t) % 60, i = Math.floor(t / 60) % 60, a = Math.floor(t / 3600);
  return 0 === a ? n ? "".concat(_(i), ":").concat(_(r)) : "".concat(i, ":").concat(_(r)) : n ? "".concat(_(a), ":").concat(_(i), ":").concat(_(r)) : "".concat(a, ":").concat(_(i), ":").concat(_(r))
}
class h extends(r = Chunk647438.PureComponent) {
  componentDidMount() {
    this.timer.start(500, () => {
      this.setState({
        now: Date.now()
      })
    })
  }
  componentWillUnmount() {
    this.timer.stop()
  }
  render() {
    let {
      start: e,
      end: t,
      className: n,
      themed: r,
      singleLine: a = false
    } = this.props, {
      now: o
    } = this.state, l = (exports - module) / 1e3, d = Math.max(Math.min((Chunk120356 - module) / 1e3, Chunk846519), 0);
    return Chunk647438 ? (0, Chunk951288.jsxs)("div", {
      className: s()(require, {
        [Chunk243404.themed]: r
      }, Chunk243404.singleLineContainer),
      children: [(0, Chunk951288.jsx)("div", {
        className: Chunk243404.textLeftInSingleLine,
        children: p({
          time: d,
          padLargestUnit: true
        })
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk243404.barInSingleLine,
        children: (0, Chunk951288.jsx)(f, {
          percentage: d / Chunk846519,
          isSingleLine: true
        })
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk243404.textRight,
        children: p({
          time: Chunk846519,
          padLargestUnit: true
        })
      })]
    }) : (0, Chunk951288.jsxs)("div", {
      className: s()(require, {
        [Chunk243404.themed]: r
      }),
      children: [(0, Chunk951288.jsx)(f, {
        percentage: d / Chunk846519,
        isSingleLine: false
      }), (0, Chunk951288.jsxs)(Chunk600164.Z, {
        children: [(0, Chunk951288.jsx)(Chunk600164.Z.Child, {
          grow: 1,
          className: Chunk243404.textLeft,
          children: p({
            time: d,
            padLargestUnit: false
          })
        }), (0, Chunk951288.jsx)(Chunk600164.Z.Child, {
          grow: 0,
          className: Chunk243404.textRight,
          children: p({
            time: Chunk846519,
            padLargestUnit: false
          })
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), d(this, "timer", new l.Xp), d(this, "state", {
      now: Date.now()
    })
  }
}
d(h, "defaultProps", {
  themed: false
});
let m = h