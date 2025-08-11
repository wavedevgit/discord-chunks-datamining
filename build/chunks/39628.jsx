/** Chunk was on web.js **/
/** chunk id: 39628, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var r, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk846519 = require("./846519.js"),
  Chunk600164 = require("./600164.js"),
  Chunk903276 = require("./903276.js");

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
  return <div className={s()({
      [u.bar]: n,
      [u.barInMultiLine]: !n
    })}><div className={u.barInner} style={{
        width: "".concat(100 * Math.max(Math.min(t, 1), 0), "%")
      }} /></div>
}

function _(e) {
  return String(e).padStart(2, "0")
}

function p(e) {
  let {
    time: t,
    padLargestUnit: n
  } = e, r = Math.floor(t) % 60, i = Math.floor(t / 60) % 60, o = Math.floor(t / 3600);
  return 0 === o ? n ? "".concat(_(i), ":").concat(_(r)) : "".concat(i, ":").concat(_(r)) : n ? "".concat(_(o), ":").concat(_(i), ":").concat(_(r)) : "".concat(o, ":").concat(_(i), ":").concat(_(r))
}
class h extends(r = Chunk73800.PureComponent) {
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
      singleLine: o = false
    } = this.props, {
      now: a
    } = this.state, l = (exports - module) / 1e3, d = Math.max(Math.min((Chunk120356 - module) / 1e3, Chunk846519), 0);
    return Chunk73800 ? <div className={s()(require, {
        [Chunk903276.themed]: r
      }, Chunk903276.singleLineContainer)}>{<div className={Chunk903276.textLeftInSingleLine}>{p({
          time: d,
          padLargestUnit: true
        })}</div>}{<div className={Chunk903276.barInSingleLine}><f percentage={d / Chunk846519} isSingleLine={true} /></div>}{<div className={Chunk903276.textRight}>{p({
          time: Chunk846519,
          padLargestUnit: true
        })}</div>}</div> : <div className={s()(require, {
        [Chunk903276.themed]: r
      })}>{<f percentage={d / Chunk846519} isSingleLine={false} />}{<Chunk600164.Z>{<Chunk600164.Z.Child grow={1} className={Chunk903276.textLeft}>{p({
            time: d,
            padLargestUnit: false
          })}</Chunk600164.Z.Child>}{<Chunk600164.Z.Child grow={0} className={Chunk903276.textRight}>{p({
            time: Chunk846519,
            padLargestUnit: false
          })}</Chunk600164.Z.Child>}</Chunk600164.Z>}</div>
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