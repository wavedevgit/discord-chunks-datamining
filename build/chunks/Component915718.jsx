/** Chunk was on 5665 **/
/** chunk id: 915718, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => D
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
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
  Chunk970731 = require("./970731.jsx"),
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
  Chunk388032 = require("./388032.jsx"),
  Chunk765476 = require("./765476.js");

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class M extends Chunk647438.PureComponent {
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
      isProvisional: u
    } = this.props;
    if (require || Chunk647438 && Chunk287734 === Chunk981631.WtW.VOICE) return null;
    let d = Chunk26151.isManaged(),
      p = null,
      h = false;
    return Chunk40851 ? (h = true, p = Chunk388032.intl.string(Chunk388032.t.izMR7u), e = Chunk481060.ua7.Colors.RED) : Chunk131951.Z.supports(Chunk65154.AN.VIDEO) ? Chunk704215 ? (p = Chunk388032.intl.string(Chunk388032.t.PHzjvb), e = Chunk481060.ua7.Colors.RED, h = true) : Chunk647438 && Chunk287734 === Chunk981631.WtW.VIDEO ? (t = this.handleJoinVideoCall, p = Chunk607070 ? Chunk388032.intl.string(Chunk388032.t.S0W8Z2) : Chunk388032.intl.string(Chunk388032.t.W68MhI)) : (t = this.handleStartVideoCall, p = Chunk607070 ? Chunk388032.intl.string(Chunk388032.t.S0W8Z2) : Chunk388032.intl.string(Chunk388032.t.oCqlGB)) : (h = true, t = this.handleBrowserNotSupported, p = Chunk388032.intl.string(Chunk388032.t.UVpg3d)), (0, Chunk951288.jsx)(Chunk665149.ZP.Icon, {
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
      canShowTooltip: i,
      callActive: l,
      callUnavailable: s,
      isBlocked: c,
      channel: u,
      canShowActivityGdmTooltip: d,
      dismissibleContentTypes: p,
      isProvisional: h
    } = this.props;
    if (require) return null;
    let f = Chunk40851.isManaged(),
      g = false;
    Chunk358221 ? (g = true, e = Chunk388032.intl.string(Chunk388032.t.izMR7u), t = Chunk481060.ua7.Colors.RED) : Chunk26151 ? (e = Chunk266454 ? Chunk388032.intl.string(Chunk388032.t.LW2Gho) : Chunk388032.intl.string(Chunk388032.t.rF7lNz), t = Chunk481060.ua7.Colors.RED, g = true) : Chunk287734 ? (e = Chunk388032.intl.string(Chunk388032.t.PHzjvb), t = Chunk481060.ua7.Colors.RED, g = true) : e = Chunk442837 ? Chunk266454 ? Chunk388032.intl.string(Chunk388032.t.S0W8Z2) : Chunk388032.intl.string(Chunk388032.t.fdEeb2) : Chunk266454 ? Chunk388032.intl.string(Chunk388032.t.S0W8Z2) : Chunk388032.intl.string(Chunk388032.t.focH1t);
    let _ = (0, Chunk951288.jsx)(Chunk665149.ZP.Icon, {
      ref: this.iconRef,
      icon: Chunk481060.Csw,
      onClick: this.handleVoiceClick,
      disabled: Chunk590293,
      tooltip: module,
      tooltipColor: exports
    });
    return (0, Chunk951288.jsx)(Chunk243778.ZP, {
      contentTypes: Chunk451576,
      children: e => {
        let {
          visibleContent: t,
          markAsDismissed: l
        } = e;
        return t === a.z.ACTIVITY_GDM_CALL_TOOLTIP ? (0, r.jsx)(o.yRy, {
          targetElementRef: this.iconRef,
          position: "bottom",
          align: "center",
          animation: o.yRy.Animation.TRANSLATE,
          shouldShow: i && d && !n,
          renderPopout: e => {
            let {
              closePopout: t
            } = e;
            return (0, r.jsx)(b.ZP, {
              header: (0, r.jsx)(o.X6q, {
                variant: "heading-md/bold",
                color: "always-white",
                children: A.intl.string(A.t.HOPqzc)
              }),
              content: (0, r.jsxs)("div", {
                children: [(0, r.jsx)(o.Text, {
                  variant: "text-sm/normal",
                  color: "always-white",
                  children: A.intl.string(A.t.xAW71d)
                }), (0, r.jsx)(o.eee, {
                  href: Z.sI,
                  children: A.intl.string(A.t.hvVgAQ)
                })]
              }),
              buttonCTA: A.intl.string(A.t["NX+WJC"]),
              onClick: () => {
                t(), l(T.L.UNKNOWN)
              },
              className: w.tooltip
            })
          },
          children: () => _
        }) : _
      }
    })
  }
  render() {
    return (0, Chunk951288.jsxs)(Chunk647438.Fragment, {
      children: [this.renderVoiceCallButton(), this.renderVideoCallButton()]
    })
  }
  constructor(...e) {
    super(...e), R(this, "iconRef", i.createRef()), R(this, "handleStartCall", (e, t) => {
      let {
        channel: n,
        notFriend: r,
        appContext: i
      } = this.props, l = r ? n.getRecipientId() : null, a = () => s.Z.call(n.id, t, !r && !n.isManaged() && !(null == e ? true : e.shiftKey), l);
      t ? (0, y.Z)(a, i) : a()
    }), R(this, "handleJoinCall", e => {
      c.default.selectVoiceChannel(this.props.channel.id, e)
    }), R(this, "handleVoiceClick", e => {
      let {
        callUnavailable: t,
        callActive: n,
        canShowActivityGdmTooltip: r
      } = this.props;
      if (r && (0, f.Q3)(a.z.ACTIVITY_GDM_CALL_TOOLTIP, {
          dismissAction: T.L.AUTO
        }), t);
      else if (n) return this.handleJoinCall(false);
      else return this.handleStartCall(e, false)
    }), R(this, "handleStartVideoCall", e => {
      this.handleStartCall(e, true)
    }), R(this, "handleJoinVideoCall", () => {
      let {
        appContext: e
      } = this.props, t = () => this.handleJoinCall(true);
      (0, y.Z)(t, e)
    }), R(this, "handleBrowserNotSupported", () => {
      (0, _.Z)()
    })
  }
}

function D(e) {
  var t;
  let {
    channel: n
  } = e, o = (0, g.Z)(), s = (0, l.e7)([h.Z], () => h.Z.getMode(n.id)), c = (0, l.e7)([E.Z], () => E.Z.isInChannel(n.id)), f = (0, l.e7)([d.Z], () => d.Z.useReducedMotion), {
    callActive: m,
    callUnavailable: b
  } = (0, l.cj)([C.Z], () => ({
    callActive: C.Z.isCallActive(n.id),
    callUnavailable: C.Z.isCallUnavailable(n.id)
  })), _ = n.getRecipientId(), {
    notFriend: y,
    isBlocked: v
  } = (0, l.cj)([O.Z], () => ({
    notFriend: n.type === P.d4z.DM && null != _ && !O.Z.isFriend(_),
    isBlocked: n.type === P.d4z.DM && null != _ && O.Z.isBlocked(_)
  })), S = (0, l.e7)([j.default], () => j.default.getUser(_)), I = (0, u.bp)(), Z = [], T = (0, p.Z)(n.id), N = (0, l.e7)([x.Z], () => x.Z.hasLayers());
  T && !N && Z.push(a.z.ACTIVITY_GDM_CALL_TOOLTIP);
  let [A, w] = i.useState(false);
  return (i.useEffect(() => {
    let e = setTimeout(() => {
      w(true)
    }, 250);
    return () => clearTimeout(e)
  }, []), o || (null == S ? true : S.bot)) ? null : (0, r.jsx)(M, {
    channel: n,
    mode: s,
    inCall: c,
    callActive: m,
    isProvisional: null != (t = null == S ? true : S.isProvisional) && t,
    callUnavailable: b,
    notFriend: y,
    isBlocked: v,
    appContext: I,
    canShowTooltip: A,
    canShowActivityGdmTooltip: T,
    dismissibleContentTypes: Z,
    useReducedMotion: f
  })
}