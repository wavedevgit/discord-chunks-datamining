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
  Chunk40851 = require("./40851.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk451576 = require("./451576.js"),
  Chunk358221 = require("./358221.js"),
  Chunk266454 = require("./266454.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk590293 = require("./590293.js"),
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
    return Chunk287734 ? (h = true, p = Chunk388032.intl.string(Chunk388032.t.izMR7u), e = Chunk481060.ua7.Colors.RED) : Chunk131951.Z.supports(Chunk65154.AN.VIDEO) ? Chunk704215 ? (p = Chunk388032.intl.string(Chunk388032.t.PHzjvb), e = Chunk481060.ua7.Colors.RED, h = true) : Chunk647438 && Chunk26151 === Chunk981631.WtW.VIDEO ? (t = this.handleJoinVideoCall, p = Chunk40851 ? Chunk388032.intl.string(Chunk388032.t.S0W8Z2) : Chunk388032.intl.string(Chunk388032.t.W68MhI)) : (t = this.handleStartVideoCall, p = Chunk40851 ? Chunk388032.intl.string(Chunk388032.t.S0W8Z2) : Chunk388032.intl.string(Chunk388032.t.oCqlGB)) : (h = true, t = this.handleBrowserNotSupported, p = Chunk388032.intl.string(Chunk388032.t.UVpg3d)), (0, Chunk951288.jsx)(Chunk665149.ZP.Icon, {
      icon: Chunk481060.Odl,
      onClick: exports,
      disabled: Chunk451576 || Chunk442837,
      tooltip: Chunk607070,
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
    Chunk607070 ? (f = true, e = Chunk388032.intl.string(Chunk388032.t.izMR7u), t = Chunk481060.ua7.Colors.RED) : Chunk442837 ? (e = Chunk451576 ? Chunk388032.intl.string(Chunk388032.t.LW2Gho) : Chunk388032.intl.string(Chunk388032.t.rF7lNz), t = Chunk481060.ua7.Colors.RED, f = true) : Chunk26151 ? (e = Chunk388032.intl.string(Chunk388032.t.PHzjvb), t = Chunk481060.ua7.Colors.RED, f = true) : e = Chunk647438 ? Chunk451576 ? Chunk388032.intl.string(Chunk388032.t.S0W8Z2) : Chunk388032.intl.string(Chunk388032.t.fdEeb2) : Chunk451576 ? Chunk388032.intl.string(Chunk388032.t.S0W8Z2) : Chunk388032.intl.string(Chunk388032.t.focH1t);
    let g = (0, Chunk951288.jsx)(Chunk665149.ZP.Icon, {
      ref: this.iconRef,
      icon: Chunk481060.Csw,
      onClick: this.handleVoiceClick,
      disabled: Chunk358221,
      tooltip: module,
      tooltipColor: exports
    });
    return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [Chunk266454, (0, Chunk951288.jsx)(Chunk243778.ZP, {
        contentTypes: Chunk40851,
        children: e => {
          let {
            visibleContent: t,
            markAsDismissed: n
          } = e;
          return t === a.z.ACTIVITY_GDM_CALL_TOOLTIP ? (0, r.jsx)(s.J2, {
            targetElementRef: this.iconRef,
            title: R.intl.string(R.t.HOPqzc),
            body: R.intl.format(R.t.xAW71d, {
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
      t ? (0, _.Z)(a, i) : a()
    }), w(this, "handleJoinCall", e => {
      d.default.selectVoiceChannel(this.props.channel.id, e)
    }), w(this, "handleVoiceClick", e => {
      let {
        callUnavailable: t,
        callActive: n,
        dismissibleContentTypes: r
      } = this.props;
      if (r.includes(a.z.ACTIVITY_GDM_CALL_TOOLTIP) && (0, g.Q3)(a.z.ACTIVITY_GDM_CALL_TOOLTIP, {
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
      (0, _.Z)(t, e)
    }), w(this, "handleBrowserNotSupported", () => {
      (0, y.Z)()
    })
  }
}

function D(e) {
  var t;
  let {
    channel: n
  } = e, i = (0, b.Z)(), s = (0, l.e7)([f.Z], () => f.Z.getMode(n.id)), o = (0, l.e7)([I.Z], () => I.Z.isInChannel(n.id)), c = (0, l.e7)([p.Z], () => p.Z.useReducedMotion), {
    callActive: d,
    callUnavailable: g
  } = (0, l.cj)([O.Z], () => ({
    callActive: O.Z.isCallActive(n.id),
    callUnavailable: O.Z.isCallUnavailable(n.id)
  })), m = n.getRecipientId(), {
    notFriend: y,
    isBlocked: _
  } = (0, l.cj)([v.Z], () => ({
    notFriend: n.type === Z.d4z.DM && null != m && !v.Z.isFriend(m),
    isBlocked: n.type === Z.d4z.DM && null != m && v.Z.isBlocked(m)
  })), x = (0, l.e7)([C.default], () => C.default.getUser(m)), E = (0, u.bp)(), S = [], P = (0, h.Z)(n.id), T = (0, l.e7)([j.Z], () => j.Z.hasLayers());
  return (P && !T && S.push(a.z.ACTIVITY_GDM_CALL_TOOLTIP), i || (null == x ? true : x.bot)) ? null : (0, r.jsx)(A, {
    channel: n,
    mode: s,
    inCall: o,
    callActive: d,
    isProvisional: null != (t = null == x ? true : x.isProvisional) && t,
    callUnavailable: g,
    notFriend: y,
    isBlocked: _,
    appContext: E,
    dismissibleContentTypes: S,
    useReducedMotion: c
  })
}