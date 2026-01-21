/** Chunk was on 82124 **/
/** chunk id: 915718, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => D
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk907862 = require("./907862.js"),
  Chunk481060 = require("./481060.js"),
  Chunk26151 = require("./26151.js"),
  Chunk287734 = require("./287734.js"),
  Chunk607070 = require("./607070.js"),
  Chunk451576 = require("./451576.js"),
  Chunk358221 = require("./358221.js"),
  Chunk266454 = require("./266454.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk590293 = require("./590293.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk560688 = require("./560688.jsx"),
  Chunk173507 = require("./173507.jsx"),
  Chunk523746 = require("./523746.js"),
  Chunk819640 = require("./819640.js"),
  Chunk131951 = require("./131951.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk979651 = require("./979651.js"),
  Chunk585483 = require("./585483.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk701488 = require("./701488.js"),
  Chunk921944 = require("./921944.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx");

function w(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class R extends Chunk473749.PureComponent {
  componentDidMount() {
    _.S.subscribe(P.CkL.CALL_START, this.handleVoiceClick)
  }
  componentWillUnmount() {
    _.S.unsubscribe(P.CkL.CALL_START, this.handleVoiceClick)
  }
  renderVideoCallButton() {
    let e, {
      inCall: t,
      callActive: n,
      callUnavailable: i,
      isBlocked: l,
      channel: a,
      mode: o,
      isProvisional: c
    } = this.props;
    if (t || n && o === P.WtW.VOICE) return null;
    let u = a.isManaged(),
      d = null,
      p = false;
    return c ? (p = true, d = A.intl.string(A.t.izMR7o)) : x.Z.supports(T.AN.VIDEO) ? l ? (d = A.intl.string(A.t.PHzjvX), p = true) : n && o === P.WtW.VIDEO ? (e = this.handleJoinVideoCall, d = u ? A.intl.string(A.t.S0W8Z5) : A.intl.string(A.t.W68MhH)) : (e = this.handleStartVideoCall, d = u ? A.intl.string(A.t.S0W8Z5) : A.intl.string(A.t.oCqlGG)) : (p = true, e = this.handleBrowserNotSupported, d = A.intl.string(A.t.UVpg3U)), (0, r.jsx)(I.ZP.Icon, {
      icon: s.Odl,
      onClick: e,
      disabled: p || i,
      tooltip: d
    })
  }
  renderVoiceCallButton() {
    let e, {
      inCall: t,
      callActive: n,
      callUnavailable: i,
      isBlocked: l,
      channel: c,
      dismissibleContentTypes: u,
      isProvisional: d
    } = this.props;
    if (t) return null;
    let p = c.isManaged(),
      f = false;
    d ? (f = true, e = A.intl.string(A.t.izMR7o)) : i ? (e = p ? A.intl.string(A.t.LW2Ghr) : A.intl.string(A.t.rF7lN5), f = true) : l ? (e = A.intl.string(A.t.PHzjvX), f = true) : e = n ? p ? A.intl.string(A.t.S0W8Z5) : A.intl.string(A.t.fdEeb5) : p ? A.intl.string(A.t.S0W8Z5) : A.intl.string(A.t.focH1t);
    let h = (0, r.jsx)(I.ZP.Icon, {
      ref: this.iconRef,
      icon: s.Csw,
      onClick: this.handleVoiceClick,
      disabled: f,
      tooltip: e
    });
    return (0, r.jsxs)(r.Fragment, {
      children: [h, (0, r.jsx)(g.ZP, {
        contentTypes: u,
        children: e => {
          let {
            visibleContent: t,
            markAsDismissed: n
          } = e;
          return t === a.z.ACTIVITY_GDM_CALL_TOOLTIP ? (0, r.jsx)(o.J2, {
            targetElementRef: this.iconRef,
            title: A.intl.string(A.t.HOPqzR),
            body: A.intl.format(A.t.xAW71b, {
              helpdeskUrl: Z.sI
            }),
            position: "bottom",
            align: "center",
            caretConfig: {
              align: "center"
            },
            onRequestClose: () => n(N.L.USER_DISMISS)
          }) : null
        }
      })]
    })
  }
  render() {
    return (0, r.jsxs)(i.Fragment, {
      children: [this.renderVoiceCallButton(), this.renderVideoCallButton()]
    })
  }
  constructor(...e) {
    super(...e), w(this, "iconRef", i.createRef()), w(this, "handleStartCall", (e, t) => {
      let {
        channel: n,
        notFriend: r,
        appContext: i
      } = this.props, l = r ? n.getRecipientId() : null, a = () => c.Z.call(n.id, t, !r && !n.isManaged() && !(null == e ? true : e.shiftKey), l);
      t ? (0, v.Z)(a, i) : a()
    }), w(this, "handleJoinCall", e => {
      u.default.selectVoiceChannel(this.props.channel.id, e)
    }), w(this, "handleVoiceClick", e => {
      let {
        callUnavailable: t,
        callActive: n,
        dismissibleContentTypes: r
      } = this.props;
      if (r.includes(a.z.ACTIVITY_GDM_CALL_TOOLTIP) && (0, h.Q3)(a.z.ACTIVITY_GDM_CALL_TOOLTIP, {
          dismissAction: N.L.AUTO
        }), t);
      else if (n) return this.handleJoinCall(false);
      else return this.handleStartCall(e, false)
    }), w(this, "handleStartVideoCall", e => {
      this.handleStartCall(e, true)
    }), w(this, "handleJoinVideoCall", () => {
      let {
        appContext: e
      } = this.props, t = () => this.handleJoinCall(true);
      (0, v.Z)(t, e)
    }), w(this, "handleBrowserNotSupported", () => {
      (0, y.Z)()
    })
  }
}

function D(e) {
  var t;
  let {
    channel: n
  } = e, i = (0, m.Z)(), o = (0, l.e7)([f.Z], () => f.Z.getMode(n.id)), s = (0, l.e7)([S.Z], () => S.Z.isInChannel(n.id)), c = (0, l.e7)([d.Z], () => d.Z.useReducedMotion), {
    callActive: u,
    callUnavailable: h
  } = (0, l.cj)([O.Z], () => ({
    callActive: O.Z.isCallActive(n.id),
    callUnavailable: O.Z.isCallUnavailable(n.id)
  })), g = n.getRecipientId(), {
    notFriend: y,
    isBlocked: v
  } = (0, l.cj)([C.Z], () => ({
    notFriend: n.type === P.d4z.DM && null != g && !C.Z.isFriend(g),
    isBlocked: n.type === P.d4z.DM && null != g && C.Z.isBlocked(g)
  })), x = (0, l.e7)([E.default], () => E.default.getUser(g)), _ = (0, b.bp)(), I = [], Z = (0, p.Z)(n.id), N = (0, l.e7)([j.Z], () => j.Z.hasLayers());
  return (Z && !N && I.push(a.z.ACTIVITY_GDM_CALL_TOOLTIP), i || (null == x ? true : x.bot)) ? null : (0, r.jsx)(R, {
    channel: n,
    mode: o,
    inCall: s,
    callActive: u,
    isProvisional: null != (t = null == x ? true : x.isProvisional) && t,
    callUnavailable: h,
    notFriend: y,
    isBlocked: v,
    appContext: _,
    dismissibleContentTypes: I,
    useReducedMotion: c
  })
}