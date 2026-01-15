/** Chunk was on web.js **/
/** chunk id: 39628, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk846519 = require("./846519.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk70309 = require("./70309.js");

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

function p(e) {
  return String(e).padStart(2, "0")
}

function _(e) {
  let {
    time: t,
    padLargestUnit: n
  } = e, r = Math.floor(t) % 60, i = Math.floor(t / 60) % 60, a = Math.floor(t / 3600);
  return 0 === a ? n ? "".concat(p(i), ":").concat(p(r)) : "".concat(i, ":").concat(p(r)) : n ? "".concat(p(a), ":").concat(p(i), ":").concat(p(r)) : "".concat(a, ":").concat(p(i), ":").concat(p(r))
}
class h extends(r = Chunk473749.PureComponent) {
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
    } = this.state, l = (t - e) / 1e3, d = Math.max(Math.min((o - e) / 1e3, l), 0);
    return a ? (0, i.jsxs)("div", {
      className: s()(n, {
        [u.themed]: r
      }, u.singleLineContainer),
      children: [(0, i.jsx)("div", {
        className: u.textLeftInSingleLine,
        children: _({
          time: d,
          padLargestUnit: true
        })
      }), (0, i.jsx)("div", {
        className: u.barInSingleLine,
        children: (0, i.jsx)(f, {
          percentage: d / l,
          isSingleLine: true
        })
      }), (0, i.jsx)("div", {
        className: u.textRight,
        children: _({
          time: l,
          padLargestUnit: true
        })
      })]
    }) : (0, i.jsxs)("div", {
      className: s()(n, {
        [u.themed]: r
      }),
      children: [(0, i.jsx)(f, {
        percentage: d / l,
        isSingleLine: false
      }), (0, i.jsxs)(c.Z, {
        children: [(0, i.jsx)(c.Z.Child, {
          grow: 1,
          className: u.textLeft,
          children: _({
            time: d,
            padLargestUnit: false
          })
        }), (0, i.jsx)(c.Z.Child, {
          grow: 0,
          className: u.textRight,
          children: _({
            time: l,
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