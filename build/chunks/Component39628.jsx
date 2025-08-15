/** Chunk was on 96750 **/
/** chunk id: 39628, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var r, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
    className: o()({
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

function m(e) {
  let {
    time: t,
    padLargestUnit: n
  } = e, r = Math.floor(t) % 60, i = Math.floor(t / 60) % 60, l = Math.floor(t / 3600);
  return 0 === l ? n ? "".concat(p(i), ":").concat(p(r)) : "".concat(i, ":").concat(p(r)) : n ? "".concat(p(l), ":").concat(p(i), ":").concat(p(r)) : "".concat(l, ":").concat(p(i), ":").concat(p(r))
}
class g extends(r = Chunk73800.PureComponent) {
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
      singleLine: l = false
    } = this.props, {
      now: a
    } = this.state, s = (exports - module) / 1e3, d = Math.max(Math.min((Chunk120356 - module) / 1e3, Chunk846519), 0);
    return Chunk73800 ? (0, Chunk255367.jsxs)("div", {
      className: o()(require, {
        [Chunk243404.themed]: r
      }, Chunk243404.singleLineContainer),
      children: [(0, Chunk255367.jsx)("div", {
        className: Chunk243404.textLeftInSingleLine,
        children: m({
          time: d,
          padLargestUnit: true
        })
      }), (0, Chunk255367.jsx)("div", {
        className: Chunk243404.barInSingleLine,
        children: (0, Chunk255367.jsx)(f, {
          percentage: d / Chunk846519,
          isSingleLine: true
        })
      }), (0, Chunk255367.jsx)("div", {
        className: Chunk243404.textRight,
        children: m({
          time: Chunk846519,
          padLargestUnit: true
        })
      })]
    }) : (0, Chunk255367.jsxs)("div", {
      className: o()(require, {
        [Chunk243404.themed]: r
      }),
      children: [(0, Chunk255367.jsx)(f, {
        percentage: d / Chunk846519,
        isSingleLine: false
      }), (0, Chunk255367.jsxs)(Chunk600164.Z, {
        children: [(0, Chunk255367.jsx)(Chunk600164.Z.Child, {
          grow: 1,
          className: Chunk243404.textLeft,
          children: m({
            time: d,
            padLargestUnit: false
          })
        }), (0, Chunk255367.jsx)(Chunk600164.Z.Child, {
          grow: 0,
          className: Chunk243404.textRight,
          children: m({
            time: Chunk846519,
            padLargestUnit: false
          })
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), d(this, "timer", new s.Xp), d(this, "state", {
      now: Date.now()
    })
  }
}
d(g, "defaultProps", {
  themed: false
});
let h = g