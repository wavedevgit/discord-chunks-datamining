/** Chunk was on web.js **/
/** chunk id: 432166, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m
}), require("./896048.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk451988 = require("./451988.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk703740 = require("./703740.js");

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
    className: o()({
      [u.M0]: n,
      [u.Sg]: !n
    }),
    children: (0, i.jsx)("div", {
      className: u.qT,
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
class h extends(r = Chunk64700.PureComponent) {
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
      now: s
    } = this.state, l = (t - e) / 1e3, d = Math.max(Math.min((s - e) / 1e3, l), 0);
    return a ? (0, i.jsxs)("div", {
      className: o()(n, {
        [u.Sp]: r
      }, u.Od),
      children: [(0, i.jsx)("div", {
        className: u.Iq,
        children: _({
          time: d,
          padLargestUnit: true
        })
      }), (0, i.jsx)("div", {
        className: u.h7,
        children: (0, i.jsx)(f, {
          percentage: d / l,
          isSingleLine: true
        })
      }), (0, i.jsx)("div", {
        className: u.EL,
        children: _({
          time: l,
          padLargestUnit: true
        })
      })]
    }) : (0, i.jsxs)("div", {
      className: o()(n, {
        [u.Sp]: r
      }),
      children: [(0, i.jsx)(f, {
        percentage: d / l,
        isSingleLine: false
      }), (0, i.jsxs)(c.A, {
        children: [(0, i.jsx)(c.A.Child, {
          grow: 1,
          className: u.n_,
          children: _({
            time: d,
            padLargestUnit: false
          })
        }), (0, i.jsx)(c.A.Child, {
          grow: 0,
          className: u.EL,
          children: _({
            time: l,
            padLargestUnit: false
          })
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), d(this, "timer", new l.IX), d(this, "state", {
      now: Date.now()
    })
  }
}
d(h, "defaultProps", {
  themed: false
});
let m = h