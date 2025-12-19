/** Chunk was on 95546 **/
/** chunk id: 738619, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => U,
  d7: () => A,
  iD: () => k
}), require("./539854.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
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

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      T(e, t, n[t])
    })
  }
  return e
}
let D = [];
class N extends Chunk473749.PureComponent {
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
    null != module && false === D.indexOf(module) && (Chunk626135.default.track(Chunk981631.rMx.SHOW_TUTORIAL, {
      tutorial: "activity-invite-nux-inline",
      application_id: module
    }), D.push(module))
  }
  componentWillUnmount() {
    null !== this.timeout && clearTimeout(this.timeout)
  }
  render() {
    let {
      activity: e
    } = this.props;
    return (0, Chunk54381.jsxs)("div", {
      className: o()(Chunk747212.activityInviteEducation, {
        [Chunk747212.activityInviteEducationFadeIn]: this.state.fadeIn
      }),
      children: [(0, Chunk54381.jsx)("div", {
        className: Chunk747212.activityInviteEducationArrow
      }), (0, Chunk54381.jsx)("span", {
        children: Chunk388032.intl.format(Chunk388032.t["i/MoCt"], {
          game: module.name,
          dismissOnClick: this.handleDismissInviteEducation
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), T(this, "state", {
      fadeIn: false
    }), T(this, "timeout", null), T(this, "handleDismissInviteEducation", () => {
      let {
        activity: e
      } = this.props;
      null != e && null != e.application_id && p.Z.dismissForApplicationId(e.application_id)
    })
  }
}

function _(e) {
  let {
    activityInviteEducationActivity: t,
    isFocused: n,
    typingUsers: l,
    className: s,
    channel: a,
    isThreadCreation: c,
    renderDots: u,
    isInTextChannel: p = false
  } = e, {
    rateLimitPerUser: O
  } = a, b = r.useRef(null), m = r.useRef(null), [g, y] = r.useState(false), v = r.useCallback(() => {
    if (null == b.current || null == m.current) return;
    let e = b.current.getBoundingClientRect();
    m.current.scrollWidth + 48 > e.width ? y(true) : y(false)
  }, []);
  if ((0, f.s)(b, v, [], {
      enabled: p
    }), (0, f.s)(m, v, [], {
      enabled: p
    }), 0 === l.length && !(O > 0)) return null != t ? (0, i.jsx)(N, {
    activity: t,
    isFocused: n
  }) : null;
  let [S, j, I] = l, Z = "";
  1 === l.length ? Z = w.intl.format(w.t.lJ9sZX, {
    a: S
  }) : 2 === l.length ? Z = w.intl.format(w.t.rB0CUa, {
    a: S,
    b: j
  }) : 3 === l.length ? Z = w.intl.format(w.t.StKThj, {
    a: S,
    b: j,
    c: I
  }) : l.length > 3 && (Z = w.intl.format(w.t.Q8lUnE, {}));
  let E = g && l.length > 0 && l.length <= 3 ? w.intl.format(w.t["qD/0qZ"], {}) : Z;
  return (0, i.jsxs)("div", {
    className: o()(P.typing, {
      "stop-animation": !n,
      [P.inTextChannel]: p
    }, s),
    children: [(0, i.jsxs)("div", {
      className: P.typingDots,
      ref: b,
      children: [l.length > 0 && false !== u && (0, i.jsx)(d.bbz, {
        className: P.ellipsis,
        dotRadius: 3.5,
        themed: true
      }), (0, i.jsx)("span", {
        className: P.text,
        "aria-live": "polite",
        "aria-atomic": true,
        children: E
      }), (0, i.jsx)("span", {
        className: P.text,
        style: {
          position: "absolute",
          visibility: "hidden"
        },
        "aria-hidden": true,
        ref: m,
        children: Z
      })]
    }), (0, i.jsx)(h.Z, {
      channel: a,
      isThreadCreation: c
    })]
  })
}

function k(e) {
  let t = (0, c.e7)([v.Z], () => v.Z.getTypingUsers(e.id)),
    n = (0, c.e7)([S.default], () => S.default.getCurrentUser());
  return a()(t).keys().filter(e => e !== (null == n ? true : n.id)).reject(e => g.Z.isBlockedOrIgnored(e)).map(e => S.default.getUser(e)).filter(Z.lm).map(t => E.ZP.getName(e.guild_id, e.id, t)).value()
}

function A(e) {
  let t = (0, c.e7)([y.Z], () => y.Z.findActivity(e => null != e.application_id));
  return (0, c.e7)([m.Z, b.Z, g.Z], () => (0, O.Z)(e, t, m.Z, b.Z, g.Z)) ? t : null
}

function U(e) {
  var t, n, {
      channel: r,
      isThreadCreation: l = false
    } = e,
    o = function(e, t) {
      if (null == e) return {};
      var n, i, r = function(e, t) {
        if (null == e) return {};
        var n, i, r = {},
          l = Object.keys(e);
        for (i = 0; i < l.length; i++) n = l[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
        return r
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (i = 0; i < l.length; i++) n = l[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
      }
      return r
    }(e, ["channel", "isThreadCreation"]);
  let s = k(r),
    a = (t = C({}, o), n = n = {
      baseTextColor: (0, d.dQu)(u.Z.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
      activeTextColor: (0, d.dQu)(u.Z.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
      activityInviteEducationActivity: A(r),
      typingUsers: l ? [] : s,
      isFocused: (0, c.e7)([j.Z], () => j.Z.isFocused()),
      guildId: r.guild_id,
      channel: r,
      isThreadCreation: l
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
  return (0, i.jsx)(_, C({}, a))
}