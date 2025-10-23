/** Chunk was on 1272 **/
/** chunk id: 645818, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk846519 = require("./846519.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk293245 = require("./293245.js"),
  Chunk863969 = require("./863969.jsx"),
  Chunk563593 = require("./563593.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let h = (0, Chunk481060.GSL)(Chunk863969.Z),
  m = (0, Chunk481060.GSL)(Chunk563593.Z),
  g = new Set([Chunk981631.TzF.PUSHING, Chunk981631.TzF.PULLING]),
  _ = Object.freeze({
    [Chunk981631.TzF.DONE]: h,
    [Chunk981631.TzF.PLANNING]: h,
    [Chunk981631.TzF.PREPARING]: h,
    [Chunk981631.TzF.PUSHING]: Chunk481060.rG2,
    [Chunk981631.TzF.PULLING]: Chunk481060._8t,
    [Chunk981631.TzF.CONFLICT]: h,
    [Chunk981631.TzF.ERROR]: h
  });
class b extends Chunk647438.PureComponent {
  componentDidMount() {
    this.getIsRecentlySynced() && this.setRecentlySyncedTimeout()
  }
  componentDidUpdate(e) {
    null != this.props.cloudSyncState && this.props.cloudSyncState.type === p.TzF.DONE && null != this.props.cloudSyncState.timestamp && (null == e.cloudSyncState || null == e.cloudSyncState.timestamp) && this.setRecentlySyncedTimeout()
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
    if (e.type === p.TzF.PUSHING || e.type === p.TzF.PULLING) {
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
      case p.TzF.DONE:
        if (t) return f.intl.string(f.t.atpo0W);
        return f.intl.string(f.t.ZCw6zh);
      case p.TzF.CONFLICT:
      case p.TzF.ERROR:
        return f.intl.string(f.t.ZCw6zh);
      case p.TzF.PLANNING:
        return f.intl.string(f.t.ERQ0VA);
      case p.TzF.PREPARING:
        return f.intl.string(f.t.n5feu3);
      case p.TzF.PUSHING:
        return f.intl.string(f.t.oCBh0J);
      case p.TzF.PULLING:
        return f.intl.string(f.t.RTLNqC);
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
    } : module, l = this.getIsRecentlySynced();
    (g.has(Chunk647438.type) || Chunk442837) && (exports.id, this.getStop(Chunk647438, Chunk442837));
    let a = Chunk442837 ? m : _[Chunk647438.type];
    return (0, Chunk951288.jsx)(Chunk28664.u, {
      text: this.getTooltip(Chunk647438, Chunk442837),
      children: (0, Chunk951288.jsx)(Chunk846519, {
        className: require
      })
    })
  }
  constructor(...e) {
    super(...e),
      function(e, t, n) {
        t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = n
      }(this, "_doneTimer", new a.V7)
  }
}
let E = Chunk442837.ZP.connectStores([Chunk293245.Z], e => {
  let {
    libraryApplication: t
  } = e;
  return {
    cloudSyncState: c.Z.getState(t.id, t.branchId)
  }
})(b)