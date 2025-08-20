/** Chunk was on 46653 **/
/** chunk id: 738619, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  ZP: () => R,
  d7: () => U,
  iD: () => D
}), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk980568 = require("./980568.js"),
  Chunk560768 = require("./560768.js"),
  Chunk812206 = require("./812206.js"),
  Chunk405701 = require("./405701.jsx"),
  Chunk843693 = require("./843693.js"),
  Chunk246642 = require("./246642.jsx"),
  Chunk624030 = require("./624030.js"),
  Chunk314897 = require("./314897.js"),
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

function _(t, e, i) {
  return e in t ? Object.defineProperty(t, e, {
    value: i,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = i, t
}

function A(t) {
  for (var e = 1; e < arguments.length; e++) {
    var i = null != arguments[e] ? arguments[e] : {},
      n = Object.keys(i);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(t) {
      return Object.getOwnPropertyDescriptor(i, t).enumerable
    }))), n.forEach(function(e) {
      _(t, e, i[e])
    })
  }
  return t
}
let N = [];
class M extends Chunk647438.PureComponent {
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
    let t = this.props.activity.application_id;
    null != module && false === N.indexOf(module) && (Chunk626135.default.track(Chunk981631.rMx.SHOW_TUTORIAL, {
      tutorial: "activity-invite-nux-inline",
      application_id: module
    }), N.push(module))
  }
  componentWillUnmount() {
    null !== this.timeout && clearTimeout(this.timeout)
  }
  render() {
    let {
      activity: t
    } = this.props;
    return (0, Chunk951288.jsxs)("div", {
      className: o()(Chunk458182.activityInviteEducation, {
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
  constructor(...t) {
    super(...t), _(this, "state", {
      fadeIn: false
    }), _(this, "timeout", null), _(this, "handleDismissInviteEducation", () => {
      let {
        activity: t
      } = this.props;
      null != t && null != t.application_id && h.Z.dismissForApplicationId(t.application_id)
    })
  }
}

function F(t) {
  let {
    activityInviteEducationActivity: e,
    isFocused: i,
    typingUsers: s,
    className: l,
    channel: a,
    isThreadCreation: d,
    renderDots: c,
    poggermodeEnabled: h,
    isComboing: p,
    isInTextChannel: g
  } = t, {
    rateLimitPerUser: f
  } = a, O = r.useRef(null), b = r.useRef(null), [y, S] = r.useState(false);
  if (r.useLayoutEffect(() => {
      if (null != O.current && null != b.current && g) {
        let t = () => {
          if (null != O.current && null != b.current) {
            let t = O.current.getBoundingClientRect();
            b.current.scrollWidth + 48 > t.width ? S(true) : S(false)
          }
        };
        t();
        let e = new ResizeObserver(() => {
          t()
        });
        return e.observe(O.current), e.observe(b.current), () => {
          e.disconnect()
        }
      }
    }, [g]), 0 === s.length && !(f > 0) && !p) return null != e ? (0, n.jsx)(M, {
    activity: e,
    isFocused: i
  }) : null;
  let [E, T, w] = s, I = "";
  1 === s.length ? I = j.intl.format(j.t.lJ9sZW, {
    a: E
  }) : 2 === s.length ? I = j.intl.format(j.t.rB0CUV, {
    a: E,
    b: T
  }) : 3 === s.length ? I = j.intl.format(j.t.StKTho, {
    a: E,
    b: T,
    c: w
  }) : s.length > 3 && (I = j.intl.format(j.t.Q8lUnJ, {}));
  let Z = y && s.length > 0 && s.length <= 3 ? j.intl.format(j.t["qD/0qa"], {}) : I;
  return (0, n.jsxs)("div", {
    className: o()(x.typing, {
      "stop-animation": !i,
      [x.isComboing]: h && p,
      [x.inTextChannel]: g
    }, l),
    children: [(0, n.jsxs)("div", {
      className: x.typingDots,
      ref: O,
      children: [s.length > 0 && false !== c && (0, n.jsx)(u.bbz, {
        className: x.ellipsis,
        dotRadius: 3.5,
        themed: true
      }), (0, n.jsx)("span", {
        className: x.text,
        "aria-live": "polite",
        "aria-atomic": true,
        children: Z
      }), (0, n.jsx)("span", {
        className: x.text,
        style: {
          position: "absolute",
          visibility: "hidden"
        },
        "aria-hidden": true,
        ref: b,
        children: I
      })]
    }), (0, n.jsx)(m.Z, {
      channel: a,
      isThreadCreation: d
    }), h && p && (0, n.jsx)(v.Z, {
      channelId: a.id
    })]
  })
}

function D(t) {
  let e = (0, d.e7)([E.Z], () => E.Z.getTypingUsers(t.id)),
    i = (0, d.e7)([T.default], () => T.default.getCurrentUser());
  return a()(e).keys().filter(t => t !== (null == i ? true : i.id)).reject(t => y.Z.isBlockedOrIgnored(t)).map(t => T.default.getUser(t)).filter(Z.lm).map(e => P.ZP.getName(t.guild_id, t.id, e)).value()
}

function U(t) {
  let e = (0, d.e7)([S.Z], () => S.Z.findActivity(t => null != t.application_id));
  return (0, d.e7)([O.Z, g.Z, y.Z], () => (0, p.Z)(t, e, O.Z, g.Z, y.Z)) ? e : null
}

function R(t) {
  var e, i, {
      channel: r,
      isThreadCreation: s = false
    } = t,
    o = function(t, e) {
      if (null == t) return {};
      var i, n, r = function(t, e) {
        if (null == t) return {};
        var i, n, r = {},
          s = Object.keys(t);
        for (n = 0; n < s.length; n++) i = s[n], e.indexOf(i) >= 0 || (r[i] = t[i]);
        return r
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(t);
        for (n = 0; n < s.length; n++) i = s[n], !(e.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(t, i) && (r[i] = t[i])
      }
      return r
    }(t, ["channel", "isThreadCreation"]);
  let l = (0, d.e7)([f.ZP, b.default], () => f.ZP.getUserCombo(b.default.getId(), r.id)),
    a = D(r),
    h = (e = A({}, o), i = i = {
      baseTextColor: (0, u.dQu)(c.Z.colors.INTERACTIVE_NORMAL).hex(),
      activeTextColor: (0, u.dQu)(c.Z.colors.INTERACTIVE_NORMAL).hex(),
      activityInviteEducationActivity: U(r),
      typingUsers: s ? [] : a,
      isFocused: (0, d.e7)([w.Z], () => w.Z.isFocused()),
      guildId: r.guild_id,
      isComboing: null != l,
      channel: r,
      isThreadCreation: s
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : (function(t, e) {
      var i = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        i.push.apply(i, n)
      }
      return i
    })(Object(i)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
    }), e);
  return (0, n.jsx)(F, A({}, h))
}