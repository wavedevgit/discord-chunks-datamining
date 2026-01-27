/** Chunk was on 72752 **/
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

function b(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = r, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      b(e, t, r[t])
    })
  }
  return e
}

function g(e, t) {
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
class f extends Chunk64700.PureComponent {
  componentDidMount() {
    this.mountedAt = Date.now(), this.maxScrolledPercentage = 0, this.track(m.HAw.CHANGE_LOG_OPENED, {}, true)
  }
  componentWillUnmount() {
    this.track(m.HAw.CHANGE_LOG_CLOSED)
  }
  render() {
    return (0, n.jsx)(u.A, g(p({}, this.props), {
      changeLog: this.props.changeLog,
      onClose: this.close,
      onScroll: this.handleScroll,
      track: this.track
    }))
  }
  constructor(...e) {
    var t;
    super(...e), t = this, b(this, "maxScrolledPercentage", 0), b(this, "mountedAt", 0), b(this, "close", () => ((0, i.OoC)(_.lb), Promise.resolve())), b(this, "handleScroll", e => {
      let {
        offsetHeight: t,
        scrollHeight: r,
        scrollTop: n
      } = e.getScrollerState();
      this.maxScrolledPercentage = Math.min(Math.max(this.maxScrolledPercentage, n / (r - t)), 1)
    }), b(this, "track", function(e) {
      let r = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && true !== arguments[2] && arguments[2],
        {
          changeLog: o
        } = t.props,
        {
          date: l,
          revision: a
        } = o,
        i = p({
          change_log_id: "".concat(l, ":").concat(a)
        }, r);
      n || (i = p({
        seconds_open: Math.round((Date.now() - t.mountedAt) / 1e3),
        max_scrolled_percentage: 100 * parseInt(t.maxScrolledPercentage.toPrecision(4), 10)
      }, i)), d.default.track(e, i)
    })
  }
}

function y(e) {
  let {
    changelog: t,
    loaded: r,
    clientTooOld: i
  } = (0, s.J)();
  if (o.useEffect(() => {
      if (r && null != t) return () => c.A.markChangelogAsSeen(t.id, t.date)
    }, [r, t]), i) return (0, n.jsx)(l.Modal, p({
    title: h.intl.string(h.t.V9ospk),
    actions: [{
      text: h.intl.string(h.t.BddRzS),
      onClick: e.onClose
    }]
  }, e));
  if (null == t)
    if (r) return (0, n.jsx)(l.Modal, p({
      title: h.intl.string(h.t.O1iRT8),
      actions: [{
        text: h.intl.string(h.t.BddRzS),
        onClick: e.onClose
      }]
    }, e));
    else return (0, a.A)(e);
  return (0, n.jsx)(f, g(p({}, e), {
    changeLog: t
  }))
}