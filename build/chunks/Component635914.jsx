/** Chunk was on 97492 **/
/** chunk id: 635914, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
}), require("./321073.js"), require("./896048.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  o = require.n(Chunk735438),
  Chunk775121 = require("./775121.js"),
  Chunk203982 = require("./203982.js"),
  Chunk652215 = require("./652215.js"),
  Chunk549756 = require("./549756.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let h = () => (0, r.jsxs)("div", {
  className: f.HR,
  children: [(0, r.jsx)("div", {
    className: f.tW
  }), (0, r.jsx)("img", {
    alt: "",
    src: n(24160)
  })]
}, "symbol");
class b extends Chunk64700.PureComponent {
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
      className: f.e8,
      children: [(0, r.jsx)("img", {
        alt: "",
        className: f.Lc,
        src: n(383922),
        width: 70,
        height: 69
      }), (0, r.jsx)("img", {
        alt: "",
        className: f.QP,
        src: n(815995),
        width: 96,
        height: 95
      }), (0, r.jsx)("img", {
        alt: "",
        className: f.WB,
        src: n(32315),
        width: 183,
        height: 104
      }), (0, r.jsx)("img", {
        alt: "",
        className: f.FQ,
        src: n(144298),
        width: 69,
        height: 180
      })]
    }, "primary-explosion")
  }
  renderSecondary(e, t) {
    return (0, r.jsxs)("div", {
      className: f.wv,
      style: {
        top: t,
        left: e
      },
      children: [(0, r.jsx)("img", {
        alt: "",
        className: f.Lc,
        src: n(61631),
        width: 61,
        height: 58
      }, "circle-inner"), (0, r.jsx)("img", {
        alt: "",
        className: f.QP,
        src: n(850166),
        width: 85,
        height: 85
      }, "circle-outer"), (0, r.jsx)("img", {
        alt: "",
        className: f.WB,
        src: n(822548),
        width: 162,
        height: 173
      }, "lines-secondary"), (0, r.jsx)("img", {
        alt: "",
        className: f.FQ,
        src: n(275242),
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
      animating: l,
      scale: i
    } = this.state, s = [this.renderPrimary()];
    return e && s.push(this.renderSecondary(t, n)), (0, r.jsx)("div", {
      className: a()(f.kL, {
        [f.i0]: l
      }),
      style: {
        top: this.props.top,
        left: this.props.left,
        transform: "scale(".concat(i, ")")
      },
      children: s
    })
  }
  constructor(...e) {
    super(...e), p(this, "_renderSecondaryTimeout", null), p(this, "_doneTimeout", null), p(this, "state", {
      animating: false,
      renderSecondary: false,
      scale: o().random(.6, 1, true),
      offsetX: o().random(0, 140, false) - 70,
      offsetY: o().random(0, 140, false) - 70
    }), p(this, "done", () => {
      this.props.onAnimationComplete(this.props.componentId)
    })
  }
}
class g extends Chunk64700.PureComponent {
  componentDidMount() {
    this.setTimeout(() => {
      this.setState({
        visible: true
      }), u._.dispatch(d.jej.SHAKE_APP, {
        duration: 2400
      })
    }, 1800), this.setTimeout(this.createExplosion, 1800)
  }
  componentWillUnmount() {
    for (let e of (c.A.enable(), this.children.length = 0, this._timeouts)) clearTimeout(e)
  }
  render() {
    return (0, r.jsx)("div", {
      className: a()(f.QO, {
        [f.RK]: this.state.visible
      }),
      children: this.children
    })
  }
  constructor(...e) {
    super(...e), p(this, "_timeouts", []), p(this, "children", []), p(this, "state", {
      explosions: 0,
      visible: false
    }), p(this, "setTimeout", (e, t) => {
      let n = setTimeout(e, t);
      return this._timeouts.push(n), n
    }), p(this, "removeExplosion", e => {
      let t = this.children,
        n = t.findIndex(t => {
          if (t.type !== b) returnfalse;
          let n = t.props;
          return null != n.componentId && n.componentId === e
        });
      n >= 0 && t.splice(n, 1), this.forceUpdate()
    }), p(this, "createExplosion", () => {
      let e = this.children,
        t = window.innerWidth / 2 | 0,
        n = window.innerHeight / 2 | 0;
      if (this.state.explosions < 8) {
        let l = "expl-".concat(this.state.explosions);
        e.push((0, r.jsx)(b, {
          componentId: l,
          top: o().random(n - 100, n + 100, false),
          left: o().random(t - 200, t + 200, false),
          onAnimationComplete: this.removeExplosion
        }, l)), this.setTimeout(this.createExplosion, 240), this.setState({
          explosions: this.state.explosions + 1
        })
      } else this.setTimeout(this.addSymbol, 750)
    }), p(this, "addSymbol", () => {
      this.children = [(0, r.jsx)(h, {}, "symbol")], this.forceUpdate(), this.setTimeout(this.delayedClose, 3e3)
    }), p(this, "delayedClose", () => {
      this.props.handleDemonClose()
    })
  }
}
let m = g