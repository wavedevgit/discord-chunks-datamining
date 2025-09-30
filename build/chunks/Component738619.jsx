/** Chunk was on 95546 **/
/** chunk id: 738619, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => A,
  d7: () => k,
  iD: () => _
}), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  c = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk980568 = require("./980568.js"),
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
  Chunk458182 = require("./458182.js");

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      x(e, t, n[t])
    })
  }
  return e
}
let C = [];
class N extends Chunk647438.PureComponent {
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
    null != module && false === C.indexOf(module) && (Chunk626135.default.track(Chunk981631.rMx.SHOW_TUTORIAL, {
      tutorial: "activity-invite-nux-inline",
      application_id: module
    }), C.push(module))
  }
  componentWillUnmount() {
    null !== this.timeout && clearTimeout(this.timeout)
  }
  render() {
    let {
      activity: e
    } = this.props;
    return (0, Chunk951288.jsxs)("div", {
      className: l()(Chunk458182.activityInviteEducation, {
        [Chunk458182.activityInviteEducationFadeIn]: this.state.fadeIn
      }),
      children: [(0, Chunk951288.jsx)("div", {
        className: Chunk458182.activityInviteEducationArrow
      }), (0, Chunk951288.jsx)("span", {
        children: Chunk388032.intl.format(Chunk388032.t["i/MoCg"], {
          game: module.name,
          dismissOnClick: this.handleDismissInviteEducation
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), x(this, "state", {
      fadeIn: false
    }), x(this, "timeout", null), x(this, "handleDismissInviteEducation", () => {
      let {
        activity: e
      } = this.props;
      null != e && null != e.application_id && p.Z.dismissForApplicationId(e.application_id)
    })
  }
}

function D(e) {
  let {
    activityInviteEducationActivity: t,
    isFocused: n,
    typingUsers: o,
    className: s,
    channel: c,
    isThreadCreation: a,
    renderDots: u,
    isInTextChannel: p
  } = e, {
    rateLimitPerUser: f
  } = c, O = i.useRef(null), y = i.useRef(null), [g, h] = i.useState(false);
  if (i.useLayoutEffect(() => {
      if (null != O.current && null != y.current && p) {
        let e = () => {
          if (null != O.current && null != y.current) {
            let e = O.current.getBoundingClientRect();
            y.current.scrollWidth + 48 > e.width ? h(true) : h(false)
          }
        };
        e();
        let t = new ResizeObserver(() => {
          e()
        });
        return t.observe(O.current), t.observe(y.current), () => {
          t.disconnect()
        }
      }
    }, [p]), 0 === o.length && !(f > 0)) return null != t ? (0, r.jsx)(N, {
    activity: t,
    isFocused: n
  }) : null;
  let [m, v, j] = o, S = "";
  1 === o.length ? S = Z.intl.format(Z.t.lJ9sZW, {
    a: m
  }) : 2 === o.length ? S = Z.intl.format(Z.t.rB0CUV, {
    a: m,
    b: v
  }) : 3 === o.length ? S = Z.intl.format(Z.t.StKTho, {
    a: m,
    b: v,
    c: j
  }) : o.length > 3 && (S = Z.intl.format(Z.t.Q8lUnJ, {}));
  let P = g && o.length > 0 && o.length <= 3 ? Z.intl.format(Z.t["qD/0qa"], {}) : S;
  return (0, r.jsxs)("div", {
    className: l()(E.typing, {
      "stop-animation": !n,
      [E.inTextChannel]: p
    }, s),
    children: [(0, r.jsxs)("div", {
      className: E.typingDots,
      ref: O,
      children: [o.length > 0 && false !== u && (0, r.jsx)(d.bbz, {
        className: E.ellipsis,
        dotRadius: 3.5,
        themed: true
      }), (0, r.jsx)("span", {
        className: E.text,
        "aria-live": "polite",
        "aria-atomic": true,
        children: P
      }), (0, r.jsx)("span", {
        className: E.text,
        style: {
          position: "absolute",
          visibility: "hidden"
        },
        "aria-hidden": true,
        ref: y,
        children: S
      })]
    }), (0, r.jsx)(b.Z, {
      channel: c,
      isThreadCreation: a
    })]
  })
}

function _(e) {
  let t = (0, a.e7)([m.Z], () => m.Z.getTypingUsers(e.id)),
    n = (0, a.e7)([v.default], () => v.default.getCurrentUser());
  return c()(t).keys().filter(e => e !== (null == n ? true : n.id)).reject(e => g.Z.isBlockedOrIgnored(e)).map(e => v.default.getUser(e)).filter(P.lm).map(t => w.ZP.getName(e.guild_id, e.id, t)).value()
}

function k(e) {
  let t = (0, a.e7)([h.Z], () => h.Z.findActivity(e => null != e.application_id));
  return (0, a.e7)([y.Z, O.Z, g.Z], () => (0, f.Z)(e, t, y.Z, O.Z, g.Z)) ? t : null
}

function A(e) {
  var t, n, {
      channel: i,
      isThreadCreation: o = false
    } = e,
    l = function(e, t) {
      if (null == e) return {};
      var n, r, i = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
      }
      return i
    }(e, ["channel", "isThreadCreation"]);
  let s = _(i),
    c = (t = T({}, l), n = n = {
      baseTextColor: (0, d.dQu)(u.Z.colors.INTERACTIVE_NORMAL).hex(),
      activeTextColor: (0, d.dQu)(u.Z.colors.INTERACTIVE_NORMAL).hex(),
      activityInviteEducationActivity: k(i),
      typingUsers: o ? [] : s,
      isFocused: (0, a.e7)([j.Z], () => j.Z.isFocused()),
      guildId: i.guild_id,
      channel: i,
      isThreadCreation: o
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t);
  return (0, r.jsx)(D, T({}, c))
}