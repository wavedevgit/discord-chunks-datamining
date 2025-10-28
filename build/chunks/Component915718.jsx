/** Chunk was on 91053 **/
/** chunk id: 915718, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => D
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
class A extends Chunk647438.PureComponent {
  componentDidMount() {
    Chunk585483.S.subscribe(Chunk981631.CkL.CALL_START, this.handleVoiceClick)
  }
  componentWillUnmount() {
    Chunk585483.S.unsubscribe(Chunk981631.CkL.CALL_START, this.handleVoiceClick)
  }
  renderVideoCallButton() {
    let e, t, {
      inCall: n,
      callActive: i,
      callUnavailable: l,
      isBlocked: a,
      channel: s,
      mode: c,
      isProvisional: d
    } = this.props;
    if (require || Chunk647438 && Chunk26151 === Chunk981631.WtW.VOICE) return null;
    let u = Chunk907862.isManaged(),
      p = null,
      h = false;
    return Chunk287734 ? (h = true, p = Chunk388032.intl.string(Chunk388032.t.izMR7o), e = Chunk481060.aML.Colors.RED) : Chunk131951.Z.supports(Chunk65154.AN.VIDEO) ? Chunk704215 ? (p = Chunk388032.intl.string(Chunk388032.t.PHzjvX), e = Chunk481060.aML.Colors.RED, h = true) : Chunk647438 && Chunk26151 === Chunk981631.WtW.VIDEO ? (t = this.handleJoinVideoCall, p = Chunk607070 ? Chunk388032.intl.string(Chunk388032.t.S0W8Z5) : Chunk388032.intl.string(Chunk388032.t.W68MhH)) : (t = this.handleStartVideoCall, p = Chunk607070 ? Chunk388032.intl.string(Chunk388032.t.S0W8Z5) : Chunk388032.intl.string(Chunk388032.t.oCqlGG)) : (h = true, t = this.handleBrowserNotSupported, p = Chunk388032.intl.string(Chunk388032.t.UVpg3U)), (0, Chunk951288.jsx)(Chunk665149.ZP.Icon, {
      icon: Chunk481060.Odl,
      onClick: exports,
      disabled: Chunk358221 || Chunk442837,
      tooltip: Chunk451576,
      tooltipColor: module
    })
  }
  renderVoiceCallButton() {
    let e, t, {
      inCall: n,
      callActive: i,
      callUnavailable: l,
      isBlocked: c,
      channel: d,
      dismissibleContentTypes: u,
      isProvisional: p
    } = this.props;
    if (require) return null;
    let h = Chunk287734.isManaged(),
      f = false;
    Chunk451576 ? (f = true, e = Chunk388032.intl.string(Chunk388032.t.izMR7o), t = Chunk481060.aML.Colors.RED) : Chunk442837 ? (e = Chunk358221 ? Chunk388032.intl.string(Chunk388032.t.LW2Ghr) : Chunk388032.intl.string(Chunk388032.t.rF7lN5), t = Chunk481060.aML.Colors.RED, f = true) : Chunk26151 ? (e = Chunk388032.intl.string(Chunk388032.t.PHzjvX), t = Chunk481060.aML.Colors.RED, f = true) : e = Chunk647438 ? Chunk358221 ? Chunk388032.intl.string(Chunk388032.t.S0W8Z5) : Chunk388032.intl.string(Chunk388032.t.fdEeb5) : Chunk358221 ? Chunk388032.intl.string(Chunk388032.t.S0W8Z5) : Chunk388032.intl.string(Chunk388032.t.focH1t);
    let m = (0, Chunk951288.jsx)(Chunk665149.ZP.Icon, {
      ref: this.iconRef,
      icon: Chunk481060.Csw,
      onClick: this.handleVoiceClick,
      disabled: Chunk266454,
      tooltip: module,
      tooltipColor: exports
    });
    return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [Chunk590293, (0, Chunk951288.jsx)(Chunk243778.ZP, {
        contentTypes: Chunk607070,
        children: e => {
          let {
            visibleContent: t,
            markAsDismissed: n
          } = e;
          return t === a.z.ACTIVITY_GDM_CALL_TOOLTIP ? (0, r.jsx)(s.J2, {
            targetElementRef: this.iconRef,
            title: R.intl.string(R.t.HOPqzR),
            body: R.intl.format(R.t.xAW71b, {
              helpdeskUrl: P.sI
            }),
            position: "bottom",
            align: "center",
            caretConfig: {
              align: "center"
            },
            onRequestClose: () => n(T.L.USER_DISMISS)
          }) : null
        }
      })]
    })
  }
  render() {
    return (0, Chunk951288.jsxs)(Chunk647438.Fragment, {
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
      t ? (0, y.Z)(a, i) : a()
    }), w(this, "handleJoinCall", e => {
      d.default.selectVoiceChannel(this.props.channel.id, e)
    }), w(this, "handleVoiceClick", e => {
      let {
        callUnavailable: t,
        callActive: n,
        dismissibleContentTypes: r
      } = this.props;
      if (r.includes(a.z.ACTIVITY_GDM_CALL_TOOLTIP) && (0, f.Q3)(a.z.ACTIVITY_GDM_CALL_TOOLTIP, {
          dismissAction: T.L.AUTO
        }), t);
      else if (n) return this.handleJoinCall(false);
      else return this.handleStartCall(e, false)
    }), w(this, "handleStartVideoCall", e => {
      this.handleStartCall(e, true)
    }), w(this, "handleJoinVideoCall", () => {
      let {
        appContext: e
      } = this.props, t = () => this.handleJoinCall(true);
      (0, y.Z)(t, e)
    }), w(this, "handleBrowserNotSupported", () => {
      (0, _.Z)()
    })
  }
}

function D(e) {
  var t;
  let {
    channel: n
  } = e, i = (0, m.Z)(), s = (0, l.e7)([h.Z], () => h.Z.getMode(n.id)), o = (0, l.e7)([I.Z], () => I.Z.isInChannel(n.id)), c = (0, l.e7)([u.Z], () => u.Z.useReducedMotion), {
    callActive: d,
    callUnavailable: f
  } = (0, l.cj)([x.Z], () => ({
    callActive: x.Z.isCallActive(n.id),
    callUnavailable: x.Z.isCallUnavailable(n.id)
  })), g = n.getRecipientId(), {
    notFriend: _,
    isBlocked: y
  } = (0, l.cj)([O.Z], () => ({
    notFriend: n.type === Z.d4z.DM && null != g && !O.Z.isFriend(g),
    isBlocked: n.type === Z.d4z.DM && null != g && O.Z.isBlocked(g)
  })), j = (0, l.e7)([C.default], () => C.default.getUser(g)), S = (0, b.bp)(), E = [], P = (0, p.Z)(n.id), T = (0, l.e7)([v.Z], () => v.Z.hasLayers());
  return (P && !T && E.push(a.z.ACTIVITY_GDM_CALL_TOOLTIP), i || (null == j ? true : j.bot)) ? null : (0, r.jsx)(A, {
    channel: n,
    mode: s,
    inCall: o,
    callActive: d,
    isProvisional: null != (t = null == j ? true : j.isProvisional) && t,
    callUnavailable: f,
    notFriend: _,
    isBlocked: y,
    appContext: S,
    dismissibleContentTypes: E,
    useReducedMotion: c
  })
}