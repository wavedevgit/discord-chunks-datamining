/** Chunk was on 11424 **/
/** chunk id: 738619, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  ZP: () => R,
  d7: () => M,
  iD: () => _
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

function F(t, e, i) {
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
      F(t, e, i[e])
    })
  }
  return t
}
let N = [];
class D extends Chunk647438.PureComponent {
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
    super(...t), F(this, "state", {
      fadeIn: false
    }), F(this, "timeout", null), F(this, "handleDismissInviteEducation", () => {
      let {
        activity: t
      } = this.props;
      null != t && null != t.application_id && h.Z.dismissForApplicationId(t.application_id)
    })
  }
}

function k(t) {
  let {
    activityInviteEducationActivity: e,
    isFocused: i,
    typingUsers: r,
    className: l,
    channel: a,
    isThreadCreation: d,
    renderDots: c,
    poggermodeEnabled: h,
    isComboing: g,
    isInTextChannel: p
  } = t, {
    rateLimitPerUser: m
  } = a, O = s.useRef(null), b = s.useRef(null), [S, y] = s.useState(false);
  if (s.useLayoutEffect(() => {
      if (null != O.current && null != b.current && p) {
        let t = () => {
          if (null != O.current && null != b.current) {
            let t = O.current.getBoundingClientRect();
            b.current.scrollWidth + 48 > t.width ? y(true) : y(false)
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
    }, [p]), 0 === r.length && !(m > 0) && !g) return null != e ? (0, n.jsx)(D, {
    activity: e,
    isFocused: i
  }) : null;
  let [Z, j, x] = r, w = "";
  1 === r.length ? w = P.intl.format(P.t.lJ9sZW, {
    a: Z
  }) : 2 === r.length ? w = P.intl.format(P.t.rB0CUV, {
    a: Z,
    b: j
  }) : 3 === r.length ? w = P.intl.format(P.t.StKTho, {
    a: Z,
    b: j,
    c: x
  }) : r.length > 3 && (w = P.intl.format(P.t.Q8lUnJ, {}));
  let C = S && r.length > 0 && r.length <= 3 ? P.intl.format(P.t["qD/0qa"], {}) : w;
  return (0, n.jsxs)("div", {
    className: o()(E.typing, {
      "stop-animation": !i,
      [E.isComboing]: h && g,
      [E.inTextChannel]: p
    }, l),
    children: [(0, n.jsxs)("div", {
      className: E.typingDots,
      ref: O,
      children: [r.length > 0 && false !== c && (0, n.jsx)(u.bbz, {
        className: E.ellipsis,
        dotRadius: 3.5,
        themed: true
      }), (0, n.jsx)("span", {
        className: E.text,
        "aria-live": "polite",
        "aria-atomic": true,
        children: C
      }), (0, n.jsx)("span", {
        className: E.text,
        style: {
          position: "absolute",
          visibility: "hidden"
        },
        "aria-hidden": true,
        ref: b,
        children: w
      })]
    }), (0, n.jsx)(f.Z, {
      channel: a,
      isThreadCreation: d
    }), h && g && (0, n.jsx)(v.Z, {
      channelId: a.id
    })]
  })
}

function _(t) {
  let e = (0, d.e7)([Z.Z], () => Z.Z.getTypingUsers(t.id)),
    i = (0, d.e7)([j.default], () => j.default.getCurrentUser());
  return a()(e).keys().filter(t => t !== (null == i ? true : i.id)).reject(t => S.Z.isBlockedOrIgnored(t)).map(t => j.default.getUser(t)).filter(C.lm).map(e => I.ZP.getName(t.guild_id, t.id, e)).value()
}

function M(t) {
  let e = (0, d.e7)([y.Z], () => y.Z.findActivity(t => null != t.application_id));
  return (0, d.e7)([O.Z, p.Z, S.Z], () => (0, g.Z)(t, e, O.Z, p.Z, S.Z)) ? e : null
}

function R(t) {
  var e, i, {
      channel: s,
      isThreadCreation: r = false
    } = t,
    o = function(t, e) {
      if (null == t) return {};
      var i, n, s = function(t, e) {
        if (null == t) return {};
        var i, n, s = {},
          r = Object.keys(t);
        for (n = 0; n < r.length; n++) i = r[n], e.indexOf(i) >= 0 || (s[i] = t[i]);
        return s
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        for (n = 0; n < r.length; n++) i = r[n], !(e.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(t, i) && (s[i] = t[i])
      }
      return s
    }(t, ["channel", "isThreadCreation"]);
  let l = (0, d.e7)([m.ZP, b.default], () => m.ZP.getUserCombo(b.default.getId(), s.id)),
    a = _(s),
    h = (e = A({}, o), i = i = {
      baseTextColor: (0, u.dQu)(c.Z.colors.INTERACTIVE_NORMAL).hex(),
      activeTextColor: (0, u.dQu)(c.Z.colors.INTERACTIVE_NORMAL).hex(),
      activityInviteEducationActivity: M(s),
      typingUsers: r ? [] : a,
      isFocused: (0, d.e7)([x.Z], () => x.Z.isFocused()),
      guildId: s.guild_id,
      isComboing: null != l,
      channel: s,
      isThreadCreation: r
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
  return (0, n.jsx)(k, A({}, h))
}