/** Chunk was on 21738 **/
/** chunk id: 471761, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk451988 = require("./451988.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk465797 = require("./465797.js"),
  Chunk186975 = require("./186975.jsx"),
  Chunk379103 = require("./379103.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let f = (0, Chunk397927.kHD)(Chunk186975.A),
  g = (0, Chunk397927.kHD)(Chunk379103.A),
  m = new Set([Chunk652215.VX0.PUSHING, Chunk652215.VX0.PULLING]),
  A = Object.freeze({
    [Chunk652215.VX0.DONE]: f,
    [Chunk652215.VX0.PLANNING]: f,
    [Chunk652215.VX0.PREPARING]: f,
    [Chunk652215.VX0.PUSHING]: Chunk397927.JMY,
    [Chunk652215.VX0.PULLING]: Chunk397927.s3U,
    [Chunk652215.VX0.CONFLICT]: f,
    [Chunk652215.VX0.ERROR]: f
  });
class _ extends Chunk64700.PureComponent {
  componentDidMount() {
    this.getIsRecentlySynced() && this.setRecentlySyncedTimeout()
  }
  componentDidUpdate(e) {
    null != this.props.cloudSyncState && this.props.cloudSyncState.type === p.VX0.DONE && null != this.props.cloudSyncState.timestamp && (null == e.cloudSyncState || null == e.cloudSyncState.timestamp) && this.setRecentlySyncedTimeout()
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
    if (null != e && e.type === p.VX0.DONE) {
      let t = e.timestamp;
      return null != t && Date.now() - t <= 2e3
    }
    returnfalse
  }
  getStop(e, t) {
    if (t) return 1;
    if (e.type === p.VX0.PUSHING || e.type === p.VX0.PULLING) {
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
      case p.VX0.DONE:
        if (t) return h.intl.string(h.t.atpo0W);
        return h.intl.string(h.t.ZCw6zh);
      case p.VX0.CONFLICT:
      case p.VX0.ERROR:
        return h.intl.string(h.t.ZCw6zh);
      case p.VX0.PLANNING:
        return h.intl.string(h.t.ERQ0VA);
      case p.VX0.PREPARING:
        return h.intl.string(h.t.n5feu3);
      case p.VX0.PUSHING:
        return h.intl.string(h.t.oCBh0J);
      case p.VX0.PULLING:
        return h.intl.string(h.t.RTLNqC);
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
      type: p.VX0.DONE
    } : e, l = this.getIsRecentlySynced();
    (m.has(i.type) || l) && (t.id, this.getStop(i, l));
    let a = l ? g : A[i.type];
    return (0, r.jsx)(s.m, {
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
      }(this, "_doneTimer", new a.Ep)
  }
}
let b = Chunk311907.Ay.connectStores([Chunk465797.A], e => {
  let {
    libraryApplication: t
  } = e;
  return {
    cloudSyncState: c.A.getState(t.id, t.branchId)
  }
})(_)