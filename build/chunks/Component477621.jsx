/** Chunk was on 91236 **/
/** chunk id: 477621, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => y
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk338305 = require("./338305.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk661111 = require("./661111.js"),
  Chunk626135 = require("./626135.js"),
  Chunk766411 = require("./766411.js"),
  Chunk554226 = require("./554226.jsx"),
  Chunk596401 = require("./596401.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function f(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = r, e
}

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      f(e, t, r[t])
    })
  }
  return e
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}
class m extends Chunk473749.PureComponent {
  componentDidMount() {
    this.mountedAt = Date.now(), this.maxScrolledPercentage = 0, this.track(g.rMx.CHANGE_LOG_OPENED, {}, true)
  }
  componentWillUnmount() {
    this.track(g.rMx.CHANGE_LOG_CLOSED)
  }
  render() {
    return (0, n.jsx)(h.Z, b(O({}, this.props), {
      changeLog: this.props.changeLog,
      onClose: this.close,
      onScroll: this.handleScroll,
      track: this.track
    }))
  }
  constructor(...e) {
    var t;
    super(...e), t = this, f(this, "maxScrolledPercentage", 0), f(this, "mountedAt", 0), f(this, "close", () => ((0, c.Mr3)(d.Xd), Promise.resolve())), f(this, "handleScroll", e => {
      let {
        offsetHeight: t,
        scrollHeight: r,
        scrollTop: n
      } = e.getScrollerState();
      this.maxScrolledPercentage = Math.min(Math.max(this.maxScrolledPercentage, n / (r - t)), 1)
    }), f(this, "track", function(e) {
      let r = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && true !== arguments[2] && arguments[2],
        {
          changeLog: l
        } = t.props,
        {
          date: o,
          revision: i
        } = l,
        c = O({
          change_log_id: "".concat(o, ":").concat(i)
        }, r);
      n || (c = O({
        seconds_open: Math.round((Date.now() - t.mountedAt) / 1e3),
        max_scrolled_percentage: 100 * parseInt(t.maxScrolledPercentage.toPrecision(4), 10)
      }, c)), s.default.track(e, c)
    })
  }
}

function y(e) {
  let {
    changelog: t,
    loaded: r,
    clientTooOld: c
  } = (0, u.E)();
  if (l.useEffect(() => {
      if (r && null != t) return () => a.Z.markChangelogAsSeen(t.id, t.date)
    }, [r, t]), c) return (0, n.jsx)(o.Modal, O({
    title: p.intl.string(p.t.V9ospk),
    actions: [{
      text: p.intl.string(p.t.BddRzS),
      onClick: e.onClose
    }]
  }, e));
  if (null == t)
    if (r) return (0, n.jsx)(o.Modal, O({
      title: p.intl.string(p.t.O1iRT8),
      actions: [{
        text: p.intl.string(p.t.BddRzS),
        onClick: e.onClose
      }]
    }, e));
    else return (0, i.Z)(e);
  return (0, n.jsx)(m, b(O({}, e), {
    changeLog: t
  }))
}