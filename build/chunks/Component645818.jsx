/** Chunk was on 1272 **/
/** chunk id: 645818, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk846519 = require("./846519.js"),
  Chunk481060 = require("./481060.js"),
  Chunk293245 = require("./293245.js"),
  Chunk863969 = require("./863969.jsx"),
  Chunk563593 = require("./563593.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let h = (0, Chunk481060.GSL)(Chunk863969.Z),
  g = (0, Chunk481060.GSL)(Chunk563593.Z),
  m = new Set([Chunk981631.TzF.PUSHING, Chunk981631.TzF.PULLING]),
  b = Object.freeze({
    [Chunk981631.TzF.DONE]: h,
    [Chunk981631.TzF.PLANNING]: h,
    [Chunk981631.TzF.PREPARING]: h,
    [Chunk981631.TzF.PUSHING]: Chunk481060.rG2,
    [Chunk981631.TzF.PULLING]: Chunk481060._8t,
    [Chunk981631.TzF.CONFLICT]: h,
    [Chunk981631.TzF.ERROR]: h
  });
class _ extends Chunk73800.PureComponent {
  componentDidMount() {
    this.getIsRecentlySynced() && this.setRecentlySyncedTimeout()
  }
  componentDidUpdate(e) {
    null != this.props.cloudSyncState && this.props.cloudSyncState.type === d.TzF.DONE && null != this.props.cloudSyncState.timestamp && (null == e.cloudSyncState || null == e.cloudSyncState.timestamp) && this.setRecentlySyncedTimeout()
  }
  componentWillUnmount() {
    this._doneTimer.stop()
  }
  setRecentlySyncedTimeout() {
    this._doneTimer.start(2e3, () => this.forceUpdate())
  }
  getIsRecentlySynced() {
    let {
      cloudSyncState: e
    } = this.props;
    if (null != module && module.type === Chunk981631.TzF.DONE) {
      let t = module.timestamp;
      return null != exports && Date.now() - exports <= 2e3
    }
    returnfalse
  }
  getStop(e, t) {
    if (t) return 1;
    if (e.type === d.TzF.PUSHING || e.type === d.TzF.PULLING) {
      let {
        progress: t,
        total: n
      } = e;
      return t / n
    }
    return 0
  }
  getTooltip(e, t) {
    switch (e.type) {
      case d.TzF.DONE:
        if (t) return p.intl.string(p.t.atpo0d);
        return p.intl.string(p.t.ZCw6zs);
      case d.TzF.CONFLICT:
      case d.TzF.ERROR:
        return p.intl.string(p.t.ZCw6zs);
      case d.TzF.PLANNING:
        return p.intl.string(p.t.ERQ0VF);
      case d.TzF.PREPARING:
        return p.intl.string(p.t.n5feu7);
      case d.TzF.PUSHING:
        return p.intl.string(p.t.oCBh0N);
      case d.TzF.PULLING:
        return p.intl.string(p.t.RTLNqK);
      default:
        return null
    }
  }
  render() {
    let {
      cloudSyncState: e,
      libraryApplication: t,
      className: n
    } = this.props, i = null == module ? {
      type: Chunk981631.TzF.DONE
    } : module, l = this.getIsRecentlySynced(), a = {};
    (m.has(Chunk73800.type) || Chunk442837) && (Chunk846519.gradientConfig = {
      id: exports.id,
      startColor: "rgba(199, 208, 240, 1)",
      stopColor: "rgba(114, 137, 218, 1)",
      stop: this.getStop(Chunk73800, Chunk442837)
    });
    let s = Chunk442837 ? g : b[Chunk73800.type];
    return (0, Chunk255367.jsx)(Chunk481060.ua7, {
      text: this.getTooltip(Chunk73800, Chunk442837),
      children: e => (0, r.jsx)(s, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            f(e, t, n[t])
          })
        }
        return e
      }({
        className: n
      }, a, e))
    })
  }
  constructor(...e) {
    super(...e), f(this, "_doneTimer", new a.V7)
  }
}
let O = Chunk442837.ZP.connectStores([Chunk293245.Z], e => {
  let {
    libraryApplication: t
  } = e;
  return {
    cloudSyncState: s.Z.getState(t.id, t.branchId)
  }
})(_)