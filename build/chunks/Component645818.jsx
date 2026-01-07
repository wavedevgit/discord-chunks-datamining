/** Chunk was on 1272 **/
/** chunk id: 645818, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk846519 = require("./846519.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk293245 = require("./293245.js"),
  Chunk863969 = require("./863969.jsx"),
  Chunk563593 = require("./563593.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let g = (0, Chunk481060.GSL)(Chunk863969.Z),
  m = (0, Chunk481060.GSL)(Chunk563593.Z),
  h = new Set([Chunk981631.TzF.PUSHING, Chunk981631.TzF.PULLING]),
  b = Object.freeze({
    [Chunk981631.TzF.DONE]: g,
    [Chunk981631.TzF.PLANNING]: g,
    [Chunk981631.TzF.PREPARING]: g,
    [Chunk981631.TzF.PUSHING]: Chunk481060.rG2,
    [Chunk981631.TzF.PULLING]: Chunk481060._8t,
    [Chunk981631.TzF.CONFLICT]: g,
    [Chunk981631.TzF.ERROR]: g
  });
class _ extends Chunk473749.PureComponent {
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
    if (null != e && e.type === p.TzF.DONE) {
      let t = e.timestamp;
      return null != t && Date.now() - t <= 2e3
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
    } = this.props, i = null == e ? {
      type: p.TzF.DONE
    } : e, l = this.getIsRecentlySynced();
    (h.has(i.type) || l) && (t.id, this.getStop(i, l));
    let a = l ? m : b[i.type];
    return (0, r.jsx)(o.u, {
      text: this.getTooltip(i, l),
      children: (0, r.jsx)(a, {
        className: n
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
})(_)