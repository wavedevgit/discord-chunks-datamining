/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => H
}), n(653041), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(392711),
  l = n.n(s),
  c = n(442837),
  u = n(692547),
  d = n(481060),
  f = n(980568),
  _ = n(560768),
  p = n(812206),
  h = n(405701),
  g = n(540059),
  m = n(243778),
  E = n(843693),
  v = n(246642),
  b = n(921227),
  y = n(314897),
  O = n(430824),
  S = n(699516),
  I = n(885110),
  T = n(111583),
  N = n(594174),
  A = n(451478),
  C = n(626135),
  R = n(823379),
  P = n(5192),
  D = n(981631),
  w = n(388032),
  L = n(45364);

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function M(e) {
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

function k(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function j(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : k(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function U(e, t) {
  if (null == e) return {};
  var n, r, i = G(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function G(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let B = [];
class V extends i.PureComponent {
  componentDidMount() {
    this.timeout = setTimeout(() => {
      this.setState({
        fadeIn: !0
      }), this.timeout = null, this.logShownEventIfNeeded()
    }, 100)
  }
  componentDidUpdate() {
    this.logShownEventIfNeeded()
  }
  logShownEventIfNeeded() {
    let e = this.props.activity.application_id;
    null != e && -1 === B.indexOf(e) && (C.default.track(D.rMx.SHOW_TUTORIAL, {
      tutorial: "activity-invite-nux-inline",
      application_id: e
    }), B.push(e))
  }
  componentWillUnmount() {
    null !== this.timeout && clearTimeout(this.timeout)
  }
  render() {
    let {
      activity: e,
      isRefreshChatInputEnabled: t
    } = this.props;
    return (0, r.jsxs)("div", {
      className: a()(L.activityInviteEducation, {
        [L.activityInviteEducationFadeIn]: this.state.fadeIn
      }),
      children: [t ? (0, r.jsx)(d.whL, {
        size: "sm",
        className: L.activityInviteEducationLeftArrow
      }) : (0, r.jsx)("div", {
        className: L.activityInviteEducationArrow
      }), (0, r.jsx)("span", {
        children: w.NW.format(w.t["i/MoCg"], {
          game: e.name,
          dismissOnClick: this.handleDismissInviteEducation
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), x(this, "state", {
      fadeIn: !1
    }), x(this, "timeout", null), x(this, "handleDismissInviteEducation", () => {
      let {
        activity: e
      } = this.props;
      null != e && null != e.application_id && f.Z.dismissForApplicationId(e.application_id)
    })
  }
}

function F(e) {
  let {
    channel: t,
    guild: n
  } = e, i = [];
  return (0, r.jsx)(m.ZP, {
    contentTypes: i,
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: n
      } = e;
      return null
    }
  })
}

function Z(e) {
  let {
    guildId: t,
    activity: n,
    showInviteEducation: i,
    isFocused: o,
    typingUsers: s,
    className: c,
    channel: u,
    isThreadCreation: f,
    renderDots: _,
    poggermodeEnabled: p,
    isComboing: m
  } = e, {
    rateLimitPerUser: E
  } = u, b = N.default.getCurrentUser(), y = O.Z.getGuild(t), I = E > 0, T = f ? [] : l()(s).keys().filter(e => e !== (null == b ? void 0 : b.id)).reject(e => S.Z.isBlockedOrIgnored(e)).map(e => N.default.getUser(e)).filter(R.lm).map(e => P.ZP.getName(t, u.id, e)).value(), A = (0, g.R6)("TypingUsers");
  if (0 === T.length && !I && !m) return i && null != n ? (0, r.jsx)(V, {
    activity: n,
    isFocused: o,
    isRefreshChatInputEnabled: A
  }) : (0, r.jsx)(F, {
    channel: u,
    guild: y
  });
  let [C, D, x] = T, M = "";
  return 1 === T.length ? M = w.NW.format(w.t.lJ9sZW, {
    a: C
  }) : 2 === T.length ? M = w.NW.format(w.t.rB0CUV, {
    a: C,
    b: D
  }) : 3 === T.length ? M = w.NW.format(w.t.StKTho, {
    a: C,
    b: D,
    c: x
  }) : T.length > 3 && (M = w.NW.string(w.t.uVDhqa)), (0, r.jsxs)("div", {
    className: a()(L.typing, {
      "stop-animation": !o,
      [L.isComboing]: p && m
    }, c),
    children: [(0, r.jsxs)("div", {
      className: L.typingDots,
      children: [T.length > 0 && !1 !== _ && (0, r.jsx)(d.bbz, {
        className: L.ellipsis,
        dotRadius: 3.5,
        themed: !0
      }), (0, r.jsx)("span", {
        className: L.text,
        "aria-live": "polite",
        "aria-atomic": !0,
        children: M
      })]
    }), A ? null : (0, r.jsx)(h.Z, {
      channel: u,
      isThreadCreation: f
    }), p && m && (0, r.jsx)(v.Z, {
      channelId: u.id
    })]
  })
}

function H(e) {
  var {
    channel: t,
    isThreadCreation: n = !1
  } = e, i = U(e, ["channel", "isThreadCreation"]);
  let o = (0, c.e7)([I.Z], () => I.Z.findActivity(e => null != e.application_id)),
    a = (0, c.e7)([E.ZP, y.default], () => E.ZP.getUserCombo(y.default.getId(), t.id)),
    s = (0, c.e7)([b.Z, p.Z], () => (0, _.Z)(t, o, b.Z, p.Z)),
    l = j(M({}, i), {
      baseTextColor: (0, d.dQu)(u.Z.colors.INTERACTIVE_NORMAL).hex(),
      activeTextColor: (0, d.dQu)(u.Z.colors.INTERACTIVE_NORMAL).hex(),
      showInviteEducation: s,
      activity: o,
      typingUsers: (0, c.e7)([T.Z], () => T.Z.getTypingUsers(t.id)),
      isFocused: (0, c.e7)([A.Z], () => A.Z.isFocused()),
      guildId: t.guild_id,
      isComboing: null != a,
      channel: t,
      isThreadCreation: n
    });
  return (0, r.jsx)(Z, M({}, l))
}