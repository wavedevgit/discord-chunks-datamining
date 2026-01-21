/** Chunk was on 82124 **/
/** chunk id: 264549, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./539854.js"), require("./388685.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk714338 = require("./714338.js"),
  Chunk585483 = require("./585483.js"),
  Chunk981631 = require("./981631.js"),
  Chunk895996 = require("./895996.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let h = () => (0, r.jsxs)("div", {
  className: p.symbol,
  children: [(0, r.jsx)("div", {
    className: p.symbolBackground
  }), (0, r.jsx)("img", {
    alt: "",
    src: n(977706)
  })]
}, "symbol");
class g extends Chunk473749.PureComponent {
  componentDidMount() {
    this.setState({
      animating: true
    }), this._renderSecondaryTimeout = setTimeout(() => {
      this.setState({
        renderSecondary: true
      })
    }, 120), this._doneTimeout = setTimeout(this.done, 1e3)
  }
  componentDidUpdate(e, t) {
    this.state.renderSecondary && t.renderSecondary
  }
  componentWillUnmount() {
    clearTimeout(this._renderSecondaryTimeout), clearTimeout(this._doneTimeout)
  }
  renderPrimary() {
    return (0, r.jsxs)("div", {
      className: p.primaryExplosion,
      children: [(0, r.jsx)("img", {
        alt: "",
        className: p.circleInner,
        src: n(273226),
        width: 70,
        height: 69
      }), (0, r.jsx)("img", {
        alt: "",
        className: p.circleOuter,
        src: n(922026),
        width: 96,
        height: 95
      }), (0, r.jsx)("img", {
        alt: "",
        className: p.linesSecondary,
        src: n(827926),
        width: 183,
        height: 104
      }), (0, r.jsx)("img", {
        alt: "",
        className: p.linesMain,
        src: n(873180),
        width: 69,
        height: 180
      })]
    }, "primary-explosion")
  }
  renderSecondary(e, t) {
    return (0, r.jsxs)("div", {
      className: p.secondaryExplosion,
      style: {
        top: t,
        left: e
      },
      children: [(0, r.jsx)("img", {
        alt: "",
        className: p.circleInner,
        src: n(272162),
        width: 61,
        height: 58
      }, "circle-inner"), (0, r.jsx)("img", {
        alt: "",
        className: p.circleOuter,
        src: n(632989),
        width: 85,
        height: 85
      }, "circle-outer"), (0, r.jsx)("img", {
        alt: "",
        className: p.linesSecondary,
        src: n(376252),
        width: 162,
        height: 173
      }, "lines-secondary"), (0, r.jsx)("img", {
        alt: "",
        className: p.linesMain,
        src: n(720617),
        width: 156,
        height: 306
      }, "lines-main")]
    }, "secondary-explosion")
  }
  render() {
    let {
      renderSecondary: e,
      offsetX: t,
      offsetY: n,
      animating: i,
      scale: l
    } = this.state, o = [this.renderPrimary()];
    return e && o.push(this.renderSecondary(t, n)), (0, r.jsx)("div", {
      className: a()(p.container, {
        [p.animate]: i
      }),
      style: {
        top: this.props.top,
        left: this.props.left,
        transform: "scale(".concat(l, ")")
      },
      children: o
    })
  }
  constructor(...e) {
    super(...e), f(this, "_renderSecondaryTimeout", null), f(this, "_doneTimeout", null), f(this, "state", {
      animating: false,
      renderSecondary: false,
      scale: s().random(.6, 1, true),
      offsetX: s().random(0, 140, false) - 70,
      offsetY: s().random(0, 140, false) - 70
    }), f(this, "done", () => {
      this.props.onAnimationComplete(this.props.componentId)
    })
  }
}
class m extends Chunk473749.PureComponent {
  componentDidMount() {
    this.setTimeout(() => {
      this.setState({
        visible: true
      }), u.S.dispatch(d.CkL.SHAKE_APP, {
        duration: 2400
      })
    }, 1800), this.setTimeout(this.createExplosion, 1800)
  }
  componentWillUnmount() {
    for (let e of (c.Z.enable(), this.children.length = 0, this._timeouts)) clearTimeout(e)
  }
  render() {
    return (0, r.jsx)("div", {
      className: a()(p.ragingDemon, {
        [p.visible]: this.state.visible
      }),
      children: this.children
    })
  }
  constructor(...e) {
    super(...e), f(this, "_timeouts", []), f(this, "children", []), f(this, "state", {
      explosions: 0,
      visible: false
    }), f(this, "setTimeout", (e, t) => {
      let n = setTimeout(e, t);
      return this._timeouts.push(n), n
    }), f(this, "removeExplosion", e => {
      let t = this.children,
        n = t.findIndex(t => {
          if (t.type !== g) returnfalse;
          let n = t.props;
          return null != n.componentId && n.componentId === e
        });
      n >= 0 && t.splice(n, 1), this.forceUpdate()
    }), f(this, "createExplosion", () => {
      let e = this.children,
        t = window.innerWidth / 2 | 0,
        n = window.innerHeight / 2 | 0;
      if (this.state.explosions < 8) {
        let i = "expl-".concat(this.state.explosions);
        e.push((0, r.jsx)(g, {
          componentId: i,
          top: s().random(n - 100, n + 100, false),
          left: s().random(t - 200, t + 200, false),
          onAnimationComplete: this.removeExplosion
        }, i)), this.setTimeout(this.createExplosion, 240), this.setState({
          explosions: this.state.explosions + 1
        })
      } else this.setTimeout(this.addSymbol, 750)
    }), f(this, "addSymbol", () => {
      this.children = [(0, r.jsx)(h, {}, "symbol")], this.forceUpdate(), this.setTimeout(this.delayedClose, 3e3)
    }), f(this, "delayedClose", () => {
      this.props.handleDemonClose()
    })
  }
}
let b = m