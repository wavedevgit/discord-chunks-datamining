/** Chunk was on 50737 **/
/** chunk id: 88872, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => y
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk450507 = require("./450507.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk256311 = require("./256311.js"),
  Chunk954571 = require("./954571.js"),
  Chunk824611 = require("./824611.js"),
  Chunk45813 = require("./45813.jsx"),
  Chunk559868 = require("./559868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function f(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = r, e
}

function b(e) {
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

function O(e, t) {
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
class m extends Chunk64700.PureComponent {
  componentDidMount() {
    this.mountedAt = Date.now(), this.maxScrolledPercentage = 0, this.track(g.HAw.CHANGE_LOG_OPENED, {}, true)
  }
  componentWillUnmount() {
    this.track(g.HAw.CHANGE_LOG_CLOSED)
  }
  render() {
    return (0, n.jsx)(h.A, O(b({}, this.props), {
      changeLog: this.props.changeLog,
      onClose: this.close,
      onScroll: this.handleScroll,
      track: this.track
    }))
  }
  constructor(...e) {
    var t;
    super(...e), t = this, f(this, "maxScrolledPercentage", 0), f(this, "mountedAt", 0), f(this, "close", () => ((0, c.OoC)(d.lb), Promise.resolve())), f(this, "handleScroll", e => {
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
        c = b({
          change_log_id: "".concat(o, ":").concat(i)
        }, r);
      n || (c = b({
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
  } = (0, u.J)();
  if (l.useEffect(() => {
      if (r && null != t) return () => a.A.markChangelogAsSeen(t.id, t.date)
    }, [r, t]), c) return (0, n.jsx)(o.Modal, b({
    title: p.intl.string(p.t.V9ospk),
    actions: [{
      text: p.intl.string(p.t.BddRzS),
      onClick: e.onClose
    }]
  }, e));
  if (null == t)
    if (r) return (0, n.jsx)(o.Modal, b({
      title: p.intl.string(p.t.O1iRT8),
      actions: [{
        text: p.intl.string(p.t.BddRzS),
        onClick: e.onClose
      }]
    }, e));
    else return (0, i.A)(e);
  return (0, n.jsx)(m, O(b({}, e), {
    changeLog: t
  }))
}