/** Chunk was on 44808 **/
/** chunk id: 678420, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => f
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk661111 = require("./661111.js"),
  Chunk766411 = require("./766411.js"),
  Chunk626135 = require("./626135.js"),
  Chunk388080 = require("./388080.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk596401 = require("./596401.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk209239 = require("./209239.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}
class x extends Chunk647438.PureComponent {
  componentDidMount() {
    this.mountedAt = Date.now(), this.maxScrolledPercentage = 0, this.track(Chunk981631.rMx.CHANGE_LOG_OPENED, {}, true)
  }
  componentWillUnmount() {
    this.track(Chunk981631.rMx.CHANGE_LOG_CLOSED)
  }
  render() {
    var e, t;
    return (0, Chunk951288.jsx)(Chunk388080.Z, (e = m({}, this.props), t = t = {
      onClose: this.close,
      onScroll: this.handleScroll,
      track: this.track
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(module, Object.getOwnPropertyDescriptors(exports)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(exports)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), module))
  }
  constructor(...e) {
    var t;
    super(...e), t = this, p(this, "maxScrolledPercentage", 0), p(this, "mountedAt", 0), p(this, "close", () => {
      (0, o.Mr3)(h.Xd)
    }), p(this, "handleScroll", e => {
      let {
        offsetHeight: t,
        scrollHeight: n,
        scrollTop: r
      } = e.getScrollerState();
      this.maxScrolledPercentage = Math.min(Math.max(this.maxScrolledPercentage, r / (n - t)), 1)
    }), p(this, "track", function(e) {
      let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
        r = arguments.length > 2 && true !== arguments[2] && arguments[2],
        {
          changeLog: l
        } = t.props,
        {
          date: o,
          revision: a
        } = l,
        i = m({
          change_log_id: "".concat(o, ":").concat(a)
        }, n);
      r || (i = m({
        seconds_open: Math.round((Date.now() - t.mountedAt) / 1e3),
        max_scrolled_percentage: 100 * parseInt(t.maxScrolledPercentage.toPrecision(4), 10)
      }, i)), s.default.track(e, i)
    })
  }
}

function f(e) {
  let {
    changelog: t,
    loaded: n,
    clientTooOld: s
  } = (0, i.E)();
  if (l.useEffect(() => {
      if (n && null != t) return () => a.Z.markChangelogAsSeen(t.id, t.date)
    }, [n, t]), s) return (0, r.jsx)(o.Y0X, {
    transitionState: e.transitionState,
    parentComponent: "ChangeLog",
    children: (0, r.jsx)("div", {
      className: g.empty,
      children: (0, r.jsx)(o.X6q, {
        variant: "heading-lg/medium",
        children: u.intl.string(u.t.V9ospq)
      })
    })
  });
  if (null == t)
    if (n) return (0, r.jsx)(o.Y0X, {
      transitionState: e.transitionState,
      parentComponent: "ChangeLog",
      children: (0, r.jsx)("div", {
        className: g.empty,
        children: (0, r.jsx)(o.Text, {
          variant: "text-md/semibold",
          children: u.intl.string(u.t.O1iRT0)
        })
      })
    });
    else return (0, r.jsx)(o.Y0X, {
      transitionState: e.transitionState,
      parentComponent: "ChangeLog",
      children: (0, r.jsx)("div", {
        className: g.empty,
        children: (0, r.jsx)(o.$jN, {
          type: o.$jN.Type.WANDERING_CUBES
        })
      })
    });
  return (0, r.jsx)(o.Y0X, {
    transitionState: e.transitionState,
    parentComponent: "ChangeLog",
    children: (0, r.jsx)(x, {
      changeLog: t
    })
  })
}