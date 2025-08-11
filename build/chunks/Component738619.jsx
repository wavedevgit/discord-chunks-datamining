/** Chunk was on web.js **/
/** chunk id: 738619, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => F,
  d7: () => Z,
  iD: () => B
}), require("./539854.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
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
  Chunk486850 = require("./486850.js");

function w(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function D(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      w(e, t, n[t])
    })
  }
  return e
}

function L(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function x(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : L(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function M(e, t) {
  if (null == e) return {};
  var n, r, i = k(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function k(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let j = [];
class U extends Chunk73800.PureComponent {
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
    null != module && false === j.indexOf(module) && (Chunk626135.default.track(Chunk981631.rMx.SHOW_TUTORIAL, {
      tutorial: "activity-invite-nux-inline",
      application_id: module
    }), j.push(module))
  }
  componentWillUnmount() {
    null !== this.timeout && clearTimeout(this.timeout)
  }
  render() {
    let {
      activity: e
    } = this.props;
    return (0, Chunk255367.jsxs)("div", {
      className: a()(Chunk486850.activityInviteEducation, {
        [Chunk486850.activityInviteEducationFadeIn]: this.state.fadeIn
      }),
      children: [(0, Chunk255367.jsx)("div", {
        className: Chunk486850.activityInviteEducationArrow
      }), (0, Chunk255367.jsx)("span", {
        children: Chunk388032.intl.format(Chunk388032.t["i/MoCg"], {
          game: module.name,
          dismissOnClick: this.handleDismissInviteEducation
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), w(this, "state", {
      fadeIn: false
    }), w(this, "timeout", null), w(this, "handleDismissInviteEducation", () => {
      let {
        activity: e
      } = this.props;
      null != e && null != e.application_id && f.Z.dismissForApplicationId(e.application_id)
    })
  }
}

function G(e) {
  let {
    activityInviteEducationActivity: t,
    isFocused: n,
    typingUsers: o,
    className: s,
    channel: l,
    isThreadCreation: c,
    renderDots: u,
    poggermodeEnabled: f,
    isComboing: _,
    isInTextChannel: p
  } = e, {
    rateLimitPerUser: m
  } = l, E = m > 0, b = i.useRef(null), y = i.useRef(null), [O, v] = i.useState(false);
  if (i.useLayoutEffect(() => {
      if (null != b.current && null != y.current && p) {
        let e = () => {
          if (null != b.current && null != y.current) {
            let e = b.current.getBoundingClientRect();
            y.current.scrollWidth + 48 > e.width ? v(true) : v(false)
          }
        };
        e();
        let t = new ResizeObserver(() => {
          e()
        });
        return t.observe(b.current), t.observe(y.current), () => {
          t.disconnect()
        }
      }
    }, [p]), 0 === o.length && !E && !_) return null != t ? (0, r.jsx)(U, {
    activity: t,
    isFocused: n
  }) : null;
  let [I, T, S] = o, A = "";
  1 === o.length ? A = R.intl.format(R.t.lJ9sZW, {
    a: I
  }) : 2 === o.length ? A = R.intl.format(R.t.rB0CUV, {
    a: I,
    b: T
  }) : 3 === o.length ? A = R.intl.format(R.t.StKTho, {
    a: I,
    b: T,
    c: S
  }) : o.length > 3 && (A = R.intl.format(R.t.Q8lUnJ, {}));
  let N = O && o.length > 0 && o.length <= 3 ? R.intl.format(R.t["qD/0qa"], {}) : A;
  return (0, r.jsxs)("div", {
    className: a()(P.typing, {
      "stop-animation": !n,
      [P.isComboing]: f && _,
      [P.inTextChannel]: p
    }, s),
    children: [(0, r.jsxs)("div", {
      className: P.typingDots,
      ref: b,
      children: [o.length > 0 && false !== u && (0, r.jsx)(d.bbz, {
        className: P.ellipsis,
        dotRadius: 3.5,
        themed: true
      }), (0, r.jsx)("span", {
        className: P.text,
        "aria-live": "polite",
        "aria-atomic": true,
        children: N
      }), (0, r.jsx)("span", {
        className: P.text,
        style: {
          position: "absolute",
          visibility: "hidden"
        },
        "aria-hidden": true,
        ref: y,
        children: A
      })]
    }), (0, r.jsx)(h.Z, {
      channel: l,
      isThreadCreation: c
    }), f && _ && (0, r.jsx)(g.Z, {
      channelId: l.id
    })]
  })
}

function B(e) {
  let t = (0, c.e7)([v.Z], () => v.Z.getTypingUsers(e.id)),
    n = (0, c.e7)([I.default], () => I.default.getCurrentUser());
  return l()(t).keys().filter(e => e !== (null == n ? true : n.id)).reject(e => y.Z.isBlockedOrIgnored(e)).map(e => I.default.getUser(e)).filter(A.lm).map(t => N.ZP.getName(e.guild_id, e.id, t)).value()
}

function Z(e) {
  let t = (0, c.e7)([O.Z], () => O.Z.findActivity(e => null != e.application_id));
  return (0, c.e7)([E.Z, p.Z, y.Z], () => (0, _.Z)(e, t, E.Z, p.Z, y.Z)) ? t : null
}

function F(e) {
  var {
    channel: t,
    isThreadCreation: n = false
  } = e, i = M(e, ["channel", "isThreadCreation"]);
  let o = (0, c.e7)([m.ZP, b.default], () => m.ZP.getUserCombo(b.default.getId(), t.id)),
    a = B(t),
    s = x(D({}, i), {
      baseTextColor: (0, d.dQu)(u.Z.colors.INTERACTIVE_NORMAL).hex(),
      activeTextColor: (0, d.dQu)(u.Z.colors.INTERACTIVE_NORMAL).hex(),
      activityInviteEducationActivity: Z(t),
      typingUsers: n ? [] : a,
      isFocused: (0, c.e7)([T.Z], () => T.Z.isFocused()),
      guildId: t.guild_id,
      isComboing: null != o,
      channel: t,
      isThreadCreation: n
    });
  return (0, r.jsx)(G, D({}, s))
}