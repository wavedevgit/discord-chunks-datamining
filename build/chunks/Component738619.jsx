/** Chunk was on 87646 **/
/** chunk id: 738619, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => k,
  d7: () => M,
  iD: () => _
}), require("./539854.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk980568 = require("./980568.js"),
  Chunk393903 = require("./393903.js"),
  Chunk560768 = require("./560768.js"),
  Chunk812206 = require("./812206.js"),
  Chunk405701 = require("./405701.jsx"),
  Chunk624030 = require("./624030.js"),
  Chunk699516 = require("./699516.js"),
  Chunk885110 = require("./885110.js"),
  Chunk111583 = require("./111583.js"),
  Chunk594174 = require("./594174.js"),
  Chunk451478 = require("./451478.js"),
  Chunk626135 = require("./626135.js"),
  Chunk823379 = require("./823379.js"),
  Chunk5192 = require("./5192.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk747212 = require("./747212.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      I(e, t, n[t])
    })
  }
  return e
}
let E = [];
class F extends Chunk473749.PureComponent {
  componentDidMount() {
    this.timeout = setTimeout(() => {
      this.setState({
        fadeIn: true
      }), this.timeout = null, this.logShownEventIfNeeded()
    }, 100)
  }
  componentDidUpdate() {
    this.logShownEventIfNeeded()
  }
  logShownEventIfNeeded() {
    let e = this.props.activity.application_id;
    null != e && false === E.indexOf(e) && (y.default.track(T.rMx.SHOW_TUTORIAL, {
      tutorial: "activity-invite-nux-inline",
      application_id: e
    }), E.push(e))
  }
  componentWillUnmount() {
    null !== this.timeout && clearTimeout(this.timeout)
  }
  render() {
    let {
      activity: e
    } = this.props;
    return (0, i.jsxs)("div", {
      className: l()(w.activityInviteEducation, {
        [w.activityInviteEducationFadeIn]: this.state.fadeIn
      }),
      children: [(0, i.jsx)("div", {
        className: w.activityInviteEducationArrow
      }), (0, i.jsx)("span", {
        children: P.intl.format(P.t["i/MoCt"], {
          game: e.name,
          dismissOnClick: this.handleDismissInviteEducation
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), I(this, "state", {
      fadeIn: false
    }), I(this, "timeout", null), I(this, "handleDismissInviteEducation", () => {
      let {
        activity: e
      } = this.props;
      null != e && null != e.application_id && h.Z.dismissForApplicationId(e.application_id)
    })
  }
}

function A(e) {
  let {
    activityInviteEducationActivity: t,
    isFocused: n,
    typingUsers: r,
    className: a,
    channel: o,
    isThreadCreation: c,
    renderDots: u,
    isInTextChannel: h = false
  } = e, {
    rateLimitPerUser: m
  } = o, f = s.useRef(null), v = s.useRef(null), [b, x] = s.useState(false), O = s.useCallback(() => {
    if (null == f.current || null == v.current) return;
    let e = f.current.getBoundingClientRect();
    v.current.scrollWidth + 48 > e.width ? x(true) : x(false)
  }, []);
  if ((0, g.s)(f, O, [], {
      enabled: h
    }), (0, g.s)(v, O, [], {
      enabled: h
    }), 0 === r.length && !(m > 0)) return null != t ? (0, i.jsx)(F, {
    activity: t,
    isFocused: n
  }) : null;
  let [j, S, y] = r, C = "";
  1 === r.length ? C = P.intl.format(P.t.lJ9sZX, {
    a: j
  }) : 2 === r.length ? C = P.intl.format(P.t.rB0CUa, {
    a: j,
    b: S
  }) : 3 === r.length ? C = P.intl.format(P.t.StKThj, {
    a: j,
    b: S,
    c: y
  }) : r.length > 3 && (C = P.intl.format(P.t.Q8lUnE, {}));
  let Z = b && r.length > 0 && r.length <= 3 ? P.intl.format(P.t["qD/0qZ"], {}) : C;
  return (0, i.jsxs)("div", {
    className: l()(w.typing, {
      "stop-animation": !n,
      [w.inTextChannel]: h
    }, a),
    children: [(0, i.jsxs)("div", {
      className: w.typingDots,
      ref: f,
      children: [r.length > 0 && false !== u && (0, i.jsx)(d.bbz, {
        className: w.ellipsis,
        dotRadius: 3.5,
        themed: true
      }), (0, i.jsx)("span", {
        className: w.text,
        "aria-live": "polite",
        "aria-atomic": true,
        children: Z
      }), (0, i.jsx)("span", {
        className: w.text,
        style: {
          position: "absolute",
          visibility: "hidden"
        },
        "aria-hidden": true,
        ref: v,
        children: C
      })]
    }), (0, i.jsx)(p.Z, {
      channel: o,
      isThreadCreation: c
    })]
  })
}

function _(e) {
  let t = (0, c.e7)([O.Z], () => O.Z.getTypingUsers(e.id)),
    n = (0, c.e7)([j.default], () => j.default.getCurrentUser());
  return o()(t).keys().filter(e => e !== (null == n ? true : n.id)).reject(e => b.Z.isBlockedOrIgnored(e)).map(e => j.default.getUser(e)).filter(C.lm).map(t => Z.ZP.getName(e.guild_id, e.id, t)).value()
}

function M(e) {
  let t = (0, c.e7)([x.Z], () => x.Z.findActivity(e => null != e.application_id));
  return (0, c.e7)([v.Z, f.Z, b.Z], () => (0, m.Z)(e, t, v.Z, f.Z, b.Z)) ? t : null
}

function k(e) {
  var t, n, {
      channel: s,
      isThreadCreation: r = false
    } = e,
    l = function(e, t) {
      if (null == e) return {};
      var n, i, s = function(e, t) {
        if (null == e) return {};
        var n, i, s = {},
          r = Object.keys(e);
        for (i = 0; i < r.length; i++) n = r[i], t.indexOf(n) >= 0 || (s[n] = e[n]);
        return s
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        for (i = 0; i < r.length; i++) n = r[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n])
      }
      return s
    }(e, ["channel", "isThreadCreation"]);
  let a = _(s),
    o = (t = N({}, l), n = n = {
      baseTextColor: (0, d.dQu)(u.Z.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
      activeTextColor: (0, d.dQu)(u.Z.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
      activityInviteEducationActivity: M(s),
      typingUsers: r ? [] : a,
      isFocused: (0, c.e7)([S.Z], () => S.Z.isFocused()),
      guildId: s.guild_id,
      channel: s,
      isThreadCreation: r
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        n.push.apply(n, i)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t);
  return (0, i.jsx)(A, N({}, o))
}