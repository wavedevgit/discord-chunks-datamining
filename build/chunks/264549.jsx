/** Chunk was on 34779 **/
/** chunk id: 264549, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./539854.js"), require("./388685.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk714338 = require("./714338.js"),
  Chunk585483 = require("./585483.js"),
  Chunk981631 = require("./981631.js"),
  Chunk529088 = require("./529088.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let f = {
    PRIMARY: () => true,
    SECONDARY: () => true
  },
  g = () => <div className={Chunk529088.symbol}>{<div className={Chunk529088.symbolBackground} />}{<img alt={""} src={require("./977706.js")} />}</div>;
class m extends Chunk73800.PureComponent {
  componentDidMount() {
    this.setState({
      animating: true
    }), this._renderSecondaryTimeout = setTimeout(() => {
      this.setState({
        renderSecondary: true
      })
    }, 120), this._doneTimeout = setTimeout(this.done, 1e3), f.PRIMARY()
  }
  componentDidUpdate(e, t) {
    this.state.renderSecondary && !t.renderSecondary && f.SECONDARY()
  }
  componentWillUnmount() {
    clearTimeout(this._renderSecondaryTimeout), clearTimeout(this._doneTimeout)
  }
  renderPrimary() {
    return <div className={Chunk529088.primaryExplosion}>{<img alt={""} className={Chunk529088.circleInner} src={require("./273226.js")} width={70} height={69} />}{<img alt={""} className={Chunk529088.circleOuter} src={require("./922026.js")} width={96} height={95} />}{<img alt={""} className={Chunk529088.linesSecondary} src={require("./827926.js")} width={183} height={104} />}{<img alt={""} className={Chunk529088.linesMain} src={require("./873180.js")} width={69} height={180} />}</div>
  }
  renderSecondary(e, t) {
    return <div className={h.secondaryExplosion} style={{
        top: t,
        left: e
      }}>{<img alt={""} className={h.circleInner} src={n(272162)} width={61} height={58} />}{<img alt={""} className={h.circleOuter} src={n(632989)} width={85} height={85} />}{<img alt={""} className={h.linesSecondary} src={n(376252)} width={162} height={173} />}{<img alt={""} className={h.linesMain} src={n(720617)} width={156} height={306} />}</div>
  }
  render() {
    let {
      renderSecondary: e,
      offsetX: t,
      offsetY: n,
      animating: i,
      scale: l
    } = this.state, s = [this.renderPrimary()];
    return module && Chunk392711.push(this.renderSecondary(exports, require)), <div className={o()(Chunk529088.container, {
        [Chunk529088.animate]: Chunk73800
      })} style={{
        top: this.props.top,
        left: this.props.left,
        transform: "scale(".concat(Chunk120356, ")")
      }}>{Chunk392711}</div>
  }
  constructor(...e) {
    super(...e), p(this, "_renderSecondaryTimeout", null), p(this, "_doneTimeout", null), p(this, "state", {
      animating: false,
      renderSecondary: false,
      scale: a().random(.6, 1, true),
      offsetX: a().random(0, 140, false) - 70,
      offsetY: a().random(0, 140, false) - 70
    }), p(this, "done", () => {
      this.props.onAnimationComplete(this.props.componentId)
    })
  }
}
class b extends Chunk73800.PureComponent {
  componentDidMount() {
    this.setTimeout(() => {
      this.setState({
        visible: true
      }), Chunk585483.S.dispatch(Chunk981631.CkL.SHAKE_APP, {
        duration: 2400
      })
    }, 1800), this.setTimeout(this.createExplosion, 1800)
  }
  componentWillUnmount() {
    for (let e of (Chunk714338.Z.enable(), this.children.length = 0, this._timeouts)) clearTimeout(module)
  }
  render() {
    return <div className={o()(Chunk529088.ragingDemon, {
        [Chunk529088.visible]: this.state.visible
      })}>{this.children}</div>
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
          if (t.type !== m) returnfalse;
          let n = t.props;
          return null != n.componentId && n.componentId === e
        });
      n >= 0 && t.splice(n, 1), this.forceUpdate()
    }), p(this, "createExplosion", () => {
      let e = this.children,
        t = window.innerWidth / 2 >> 0,
        n = window.innerHeight / 2 >> 0;
      if (this.state.explosions < 8) {
        let i = "expl-".concat(this.state.explosions);
        e.push(<m componentId={i} top={a().random(n - 100, n + 100, false)} left={a().random(t - 200, t + 200, false)} onAnimationComplete={this.removeExplosion} />), this.setTimeout(this.createExplosion, 240), this.setState({
          explosions: this.state.explosions + 1
        })
      } else this.setTimeout(this.addSymbol, 750)
    }), p(this, "addSymbol", () => {
      this.children = [<g />], this.forceUpdate(), this.setTimeout(this.delayedClose, 3e3)
    }), p(this, "delayedClose", () => {
      this.props.handleDemonClose()
    })
  }
}
let O = b