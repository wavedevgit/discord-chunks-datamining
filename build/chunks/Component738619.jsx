/** Chunk was on 95546 **/
/** chunk id: 738619, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => A,
  d7: () => k,
  iD: () => _
}), require("./539854.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
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

function P(e, t, n) {
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
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      P(e, t, n[t])
    })
  }
  return e
}
let C = [];
class D extends Chunk473749.PureComponent {
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
    return (0, Chunk54381.jsxs)("div", {
      className: l()(Chunk458182.activityInviteEducation, {
        [Chunk458182.activityInviteEducationFadeIn]: this.state.fadeIn
      }),
      children: [(0, Chunk54381.jsx)("div", {
        className: Chunk458182.activityInviteEducationArrow
      }), (0, Chunk54381.jsx)("span", {
        children: Chunk388032.intl.format(Chunk388032.t["i/MoCt"], {
          game: module.name,
          dismissOnClick: this.handleDismissInviteEducation
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), P(this, "state", {
      fadeIn: false
    }), P(this, "timeout", null), P(this, "handleDismissInviteEducation", () => {
      let {
        activity: e
      } = this.props;
      null != e && null != e.application_id && p.Z.dismissForApplicationId(e.application_id)
    })
  }
}

function N(e) {
  let {
    activityInviteEducationActivity: t,
    isFocused: n,
    typingUsers: o,
    className: s,
    channel: a,
    isThreadCreation: c,
    renderDots: u,
    isInTextChannel: p
  } = e, {
    rateLimitPerUser: f
  } = a, O = r.useRef(null), h = r.useRef(null), [m, g] = r.useState(false);
  if (r.useLayoutEffect(() => {
      if (null != O.current && null != h.current && p) {
        let e = () => {
          if (null != O.current && null != h.current) {
            let e = O.current.getBoundingClientRect();
            h.current.scrollWidth + 48 > e.width ? g(true) : g(false)
          }
        };
        e();
        let t = new ResizeObserver(() => {
          e()
        });
        return t.observe(O.current), t.observe(h.current), () => {
          t.disconnect()
        }
      }
    }, [p]), 0 === o.length && !(f > 0)) return null != t ? (0, i.jsx)(D, {
    activity: t,
    isFocused: n
  }) : null;
  let [y, v, S] = o, j = "";
  1 === o.length ? j = x.intl.format(x.t.lJ9sZX, {
    a: y
  }) : 2 === o.length ? j = x.intl.format(x.t.rB0CUa, {
    a: y,
    b: v
  }) : 3 === o.length ? j = x.intl.format(x.t.StKThj, {
    a: y,
    b: v,
    c: S
  }) : o.length > 3 && (j = x.intl.format(x.t.Q8lUnE, {}));
  let I = m && o.length > 0 && o.length <= 3 ? x.intl.format(x.t["qD/0qZ"], {}) : j;
  return (0, i.jsxs)("div", {
    className: l()(w.typing, {
      "stop-animation": !n,
      [w.inTextChannel]: p
    }, s),
    children: [(0, i.jsxs)("div", {
      className: w.typingDots,
      ref: O,
      children: [o.length > 0 && false !== u && (0, i.jsx)(d.bbz, {
        className: w.ellipsis,
        dotRadius: 3.5,
        themed: true
      }), (0, i.jsx)("span", {
        className: w.text,
        "aria-live": "polite",
        "aria-atomic": true,
        children: I
      }), (0, i.jsx)("span", {
        className: w.text,
        style: {
          position: "absolute",
          visibility: "hidden"
        },
        "aria-hidden": true,
        ref: h,
        children: j
      })]
    }), (0, i.jsx)(b.Z, {
      channel: a,
      isThreadCreation: c
    })]
  })
}

function _(e) {
  let t = (0, c.e7)([y.Z], () => y.Z.getTypingUsers(e.id)),
    n = (0, c.e7)([v.default], () => v.default.getCurrentUser());
  return a()(t).keys().filter(e => e !== (null == n ? true : n.id)).reject(e => m.Z.isBlockedOrIgnored(e)).map(e => v.default.getUser(e)).filter(I.lm).map(t => Z.ZP.getName(e.guild_id, e.id, t)).value()
}

function k(e) {
  let t = (0, c.e7)([g.Z], () => g.Z.findActivity(e => null != e.application_id));
  return (0, c.e7)([h.Z, O.Z, m.Z], () => (0, f.Z)(e, t, h.Z, O.Z, m.Z)) ? t : null
}

function A(e) {
  var t, n, {
      channel: r,
      isThreadCreation: o = false
    } = e,
    l = function(e, t) {
      if (null == e) return {};
      var n, i, r = function(e, t) {
        if (null == e) return {};
        var n, i, r = {},
          o = Object.keys(e);
        for (i = 0; i < o.length; i++) n = o[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
        return r
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (i = 0; i < o.length; i++) n = o[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
      }
      return r
    }(e, ["channel", "isThreadCreation"]);
  let s = _(r),
    a = (t = T({}, l), n = n = {
      baseTextColor: (0, d.dQu)(u.Z.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
      activeTextColor: (0, d.dQu)(u.Z.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
      activityInviteEducationActivity: k(r),
      typingUsers: o ? [] : s,
      isFocused: (0, c.e7)([S.Z], () => S.Z.isFocused()),
      guildId: r.guild_id,
      channel: r,
      isThreadCreation: o
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
  return (0, i.jsx)(N, T({}, a))
}