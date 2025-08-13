/** Chunk was on 21087 **/
/** chunk id: 915718, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => k
}), require("./388685.js"), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk63063 = require("./63063.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk261834 = require("./261834.js");

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class D extends Chunk73800.PureComponent {
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
      channel: o,
      mode: c,
      isProvisional: u
    } = this.props;
    if (require || Chunk73800 && Chunk287734 === Chunk981631.WtW.VOICE) return null;
    let d = Chunk26151.isManaged(),
      h = null,
      p = false;
    return Chunk40851 ? (p = true, h = Chunk388032.intl.string(Chunk388032.t.izMR7u), e = Chunk481060.ua7.Colors.RED) : Chunk131951.Z.supports(Chunk65154.AN.VIDEO) ? Chunk704215 ? (h = Chunk388032.intl.string(Chunk388032.t.PHzjvb), e = Chunk481060.ua7.Colors.RED, p = true) : Chunk73800 && Chunk287734 === Chunk981631.WtW.VIDEO ? (t = this.handleJoinVideoCall, h = Chunk607070 ? Chunk388032.intl.string(Chunk388032.t.S0W8Z2) : Chunk388032.intl.string(Chunk388032.t.W68MhI)) : (t = this.handleStartVideoCall, h = Chunk607070 ? Chunk388032.intl.string(Chunk388032.t.S0W8Z2) : Chunk388032.intl.string(Chunk388032.t.oCqlGB)) : (p = true, t = this.handleBrowserNotSupported, h = Chunk388032.intl.string(Chunk388032.t.UVpg3d)), (0, Chunk255367.jsx)(Chunk665149.ZP.Icon, {
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
      callUnavailable: o,
      isBlocked: c,
      channel: u,
      canShowActivityGdmTooltip: d,
      dismissibleContentTypes: h,
      isProvisional: p
    } = this.props;
    if (require) return null;
    let f = Chunk40851.isManaged(),
      m = false;
    Chunk358221 ? (m = true, e = Chunk388032.intl.string(Chunk388032.t.izMR7u), t = Chunk481060.ua7.Colors.RED) : Chunk26151 ? (e = Chunk266454 ? Chunk388032.intl.string(Chunk388032.t.LW2Gho) : Chunk388032.intl.string(Chunk388032.t.rF7lNz), t = Chunk481060.ua7.Colors.RED, m = true) : Chunk287734 ? (e = Chunk388032.intl.string(Chunk388032.t.PHzjvb), t = Chunk481060.ua7.Colors.RED, m = true) : e = Chunk442837 ? Chunk266454 ? Chunk388032.intl.string(Chunk388032.t.S0W8Z2) : Chunk388032.intl.string(Chunk388032.t.fdEeb2) : Chunk266454 ? Chunk388032.intl.string(Chunk388032.t.S0W8Z2) : Chunk388032.intl.string(Chunk388032.t.focH1t);
    let y = (0, Chunk255367.jsx)(Chunk665149.ZP.Icon, {
      ref: this.iconRef,
      icon: Chunk481060.Csw,
      onClick: this.handleVoiceClick,
      disabled: Chunk590293,
      tooltip: module,
      tooltipColor: exports
    });
    return (0, Chunk255367.jsx)(Chunk243778.ZP, {
      contentTypes: Chunk451576,
      children: e => {
        let {
          visibleContent: t,
          markAsDismissed: l
        } = e;
        return t === a.z.ACTIVITY_GDM_CALL_TOOLTIP ? (0, r.jsx)(s.yRy, {
          targetElementRef: this.iconRef,
          position: "bottom",
          align: "center",
          animation: s.yRy.Animation.TRANSLATE,
          shouldShow: i && d && !n,
          renderPopout: e => {
            let {
              closePopout: t
            } = e;
            return (0, r.jsx)(b.ZP, {
              header: (0, r.jsx)(s.X6q, {
                variant: "heading-md/bold",
                color: "always-white",
                children: R.intl.string(R.t.HOPqzc)
              }),
              content: (0, r.jsxs)("div", {
                children: [(0, r.jsx)(s.Text, {
                  variant: "text-sm/normal",
                  color: "always-white",
                  children: R.intl.string(R.t.xAW71d)
                }), (0, r.jsx)(s.eee, {
                  href: I.Z.getArticleURL(P.BhN.ACTIVITIES),
                  children: R.intl.string(R.t.hvVgAQ)
                })]
              }),
              buttonCTA: R.intl.string(R.t["NX+WJC"]),
              onClick: () => {
                t(), l(T.L.UNKNOWN)
              },
              className: w.tooltip
            })
          },
          children: () => y
        }) : y
      }
    })
  }
  render() {
    return (0, Chunk255367.jsxs)(Chunk73800.Fragment, {
      children: [this.renderVoiceCallButton(), this.renderVideoCallButton()]
    })
  }
  constructor(...e) {
    super(...e), A(this, "iconRef", i.createRef()), A(this, "handleStartCall", (e, t) => {
      let {
        channel: n,
        notFriend: r,
        appContext: i
      } = this.props, l = r ? n.getRecipientId() : null, a = () => o.Z.call(n.id, t, !r && !n.isManaged() && !(null == e ? true : e.shiftKey), l);
      t ? (0, x.Z)(a, i) : a()
    }), A(this, "handleJoinCall", e => {
      c.default.selectVoiceChannel(this.props.channel.id, e)
    }), A(this, "handleVoiceClick", e => {
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
    }), A(this, "handleStartVideoCall", e => {
      this.handleStartCall(e, true)
    }), A(this, "handleJoinVideoCall", () => {
      let {
        appContext: e
      } = this.props;
      (0, x.Z)(() => this.handleJoinCall(true), e)
    }), A(this, "handleBrowserNotSupported", () => {
      (0, y.Z)()
    })
  }
}

function k(e) {
  var t;
  let {
    channel: n
  } = e, s = (0, m.Z)(), o = (0, l.e7)([p.Z], () => p.Z.getMode(n.id)), c = (0, l.e7)([E.Z], () => E.Z.isInChannel(n.id)), f = (0, l.e7)([d.Z], () => d.Z.useReducedMotion), {
    callActive: g,
    callUnavailable: b
  } = (0, l.cj)([j.Z], () => ({
    callActive: j.Z.isCallActive(n.id),
    callUnavailable: j.Z.isCallUnavailable(n.id)
  })), y = n.getRecipientId(), {
    notFriend: x,
    isBlocked: O
  } = (0, l.cj)([v.Z], () => ({
    notFriend: n.type === P.d4z.DM && null != y && !v.Z.isFriend(y),
    isBlocked: n.type === P.d4z.DM && null != y && v.Z.isBlocked(y)
  })), S = (0, l.e7)([C.default], () => C.default.getUser(y)), I = (0, u.bp)(), Z = [], T = (0, h.Z)(n.id), N = (0, l.e7)([_.Z], () => _.Z.hasLayers());
  T && !N && Z.push(a.z.ACTIVITY_GDM_CALL_TOOLTIP);
  let [R, w] = i.useState(false);
  return (i.useEffect(() => {
    let e = setTimeout(() => {
      w(true)
    }, 250);
    return () => clearTimeout(e)
  }, []), s || (null == S ? true : S.bot)) ? null : (0, r.jsx)(D, {
    channel: n,
    mode: o,
    inCall: c,
    callActive: g,
    isProvisional: null != (t = null == S ? true : S.isProvisional) && t,
    callUnavailable: b,
    notFriend: x,
    isBlocked: O,
    appContext: I,
    canShowTooltip: R,
    canShowActivityGdmTooltip: T,
    dismissibleContentTypes: Z,
    useReducedMotion: f
  })
}