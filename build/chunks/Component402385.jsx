/** Chunk was on 97492 **/
/** chunk id: 402385, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => M
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk342494 = require("./342494.js"),
  Chunk397927 = require("./397927.js"),
  Chunk387755 = require("./387755.js"),
  Chunk956793 = require("./956793.js"),
  Chunk775602 = require("./775602.js"),
  Chunk641703 = require("./641703.js"),
  Chunk313961 = require("./313961.js"),
  Chunk826673 = require("./826673.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk753727 = require("./753727.js"),
  Chunk267102 = require("./267102.jsx"),
  Chunk222692 = require("./222692.jsx"),
  Chunk442353 = require("./442353.jsx"),
  Chunk470710 = require("./470710.js"),
  Chunk186111 = require("./186111.js"),
  Chunk430452 = require("./430452.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk977997 = require("./977997.js"),
  Chunk203982 = require("./203982.js"),
  Chunk58736 = require("./58736.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk360469 = require("./360469.js"),
  Chunk49999 = require("./49999.js"),
  Chunk731854 = require("./731854.js"),
  Chunk985018 = require("./985018.jsx");

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class D extends Chunk64700.PureComponent {
  componentDidMount() {
    C._.subscribe(I.jej.CALL_START, this.handleVoiceClick)
  }
  componentWillUnmount() {
    C._.unsubscribe(I.jej.CALL_START, this.handleVoiceClick)
  }
  renderVideoCallButton() {
    let e, {
      inCall: t,
      callActive: n,
      callUnavailable: l,
      isBlocked: i,
      channel: a,
      mode: s,
      isProvisional: c
    } = this.props;
    if (t || n && s === I._Of.VOICE) return null;
    let u = a.isManaged(),
      d = null,
      f = false;
    return c ? (f = true, d = w.intl.string(w.t.izMR7o)) : v.A.supports(P.O5.VIDEO) ? i ? (d = w.intl.string(w.t.PHzjvX), f = true) : n && s === I._Of.VIDEO ? (e = this.handleJoinVideoCall, d = u ? w.intl.string(w.t.S0W8Z5) : w.intl.string(w.t.W68MhH)) : (e = this.handleStartVideoCall, d = u ? w.intl.string(w.t.S0W8Z5) : w.intl.string(w.t.oCqlGG)) : (f = true, e = this.handleBrowserNotSupported, d = w.intl.string(w.t.UVpg3U)), (0, r.jsx)(S.Ay.Icon, {
      icon: o.npA,
      onClick: e,
      disabled: f || l,
      tooltip: d
    })
  }
  renderVoiceCallButton() {
    let e, {
      inCall: t,
      callActive: n,
      callUnavailable: l,
      isBlocked: i,
      channel: c,
      dismissibleContentTypes: u,
      isProvisional: d
    } = this.props;
    if (t) return null;
    let f = c.isManaged(),
      p = false;
    d ? (p = true, e = w.intl.string(w.t.izMR7o)) : l ? (e = f ? w.intl.string(w.t.LW2Ghr) : w.intl.string(w.t.rF7lN5), p = true) : i ? (e = w.intl.string(w.t.PHzjvX), p = true) : e = n ? f ? w.intl.string(w.t.S0W8Z5) : w.intl.string(w.t.fdEeb5) : f ? w.intl.string(w.t.S0W8Z5) : w.intl.string(w.t.focH1t);
    let h = (0, r.jsx)(S.Ay.Icon, {
      ref: this.iconRef,
      icon: o._jp,
      onClick: this.handleVoiceClick,
      disabled: p,
      tooltip: e
    });
    return (0, r.jsxs)(r.Fragment, {
      children: [h, (0, r.jsx)(b.Ay, {
        contentTypes: u,
        children: e => {
          let {
            visibleContent: t,
            markAsDismissed: n
          } = e;
          return t === a.M.ACTIVITY_GDM_CALL_TOOLTIP ? (0, r.jsx)(s.AM, {
            targetElementRef: this.iconRef,
            title: w.intl.string(w.t.HOPqzR),
            body: w.intl.format(w.t.xAW71b, {
              helpdeskUrl: N.DY
            }),
            position: "bottom",
            align: "center",
            caretConfig: {
              align: "center"
            },
            onRequestClose: () => n(T.i.USER_DISMISS)
          }) : null
        }
      })]
    })
  }
  render() {
    return (0, r.jsxs)(l.Fragment, {
      children: [this.renderVoiceCallButton(), this.renderVideoCallButton()]
    })
  }
  constructor(...e) {
    super(...e), R(this, "iconRef", l.createRef()), R(this, "handleStartCall", (e, t) => {
      let {
        channel: n,
        notFriend: r,
        appContext: l
      } = this.props, i = r ? n.getRecipientId() : null, a = () => c.A.call(n.id, t, !r && !n.isManaged() && !(null == e ? true : e.shiftKey), i);
      t ? (0, y.A)(a, l) : a()
    }), R(this, "handleJoinCall", e => {
      u.default.selectVoiceChannel(this.props.channel.id, e)
    }), R(this, "handleVoiceClick", e => {
      let {
        callUnavailable: t,
        callActive: n,
        dismissibleContentTypes: r
      } = this.props;
      if (r.includes(a.M.ACTIVITY_GDM_CALL_TOOLTIP) && (0, h.Dr)(a.M.ACTIVITY_GDM_CALL_TOOLTIP, {
          dismissAction: T.i.AUTO
        }), t);
      else if (n) return this.handleJoinCall(false);
      else return this.handleStartCall(e, false)
    }), R(this, "handleStartVideoCall", e => {
      this.handleStartCall(e, true)
    }), R(this, "handleJoinVideoCall", () => {
      let {
        appContext: e
      } = this.props, t = () => this.handleJoinCall(true);
      (0, y.A)(t, e)
    }), R(this, "handleBrowserNotSupported", () => {
      (0, A.A)()
    })
  }
}

function M(e) {
  var t;
  let {
    channel: n
  } = e, l = (0, g.A)(), s = (0, i.bG)([p.A], () => p.A.getMode(n.id)), o = (0, i.bG)([_.A], () => _.A.isInChannel(n.id)), c = (0, i.bG)([d.A], () => d.A.useReducedMotion), {
    callActive: u,
    callUnavailable: h
  } = (0, i.cf)([O.A], () => ({
    callActive: O.A.isCallActive(n.id),
    callUnavailable: O.A.isCallUnavailable(n.id)
  })), b = n.getRecipientId(), {
    notFriend: A,
    isBlocked: y
  } = (0, i.cf)([x.A], () => ({
    notFriend: n.type === I.rbe.DM && null != b && !x.A.isFriend(b),
    isBlocked: n.type === I.rbe.DM && null != b && x.A.isBlocked(b)
  })), v = (0, i.bG)([E.default], () => E.default.getUser(b)), C = (0, m.Us)(), S = [], N = (0, f.A)(n.id), T = (0, i.bG)([j.A], () => j.A.hasLayers());
  return (N && !T && S.push(a.M.ACTIVITY_GDM_CALL_TOOLTIP), l || (null == v ? true : v.bot)) ? null : (0, r.jsx)(D, {
    channel: n,
    mode: s,
    inCall: o,
    callActive: u,
    isProvisional: null != (t = null == v ? true : v.isProvisional) && t,
    callUnavailable: h,
    notFriend: A,
    isBlocked: y,
    appContext: C,
    dismissibleContentTypes: S,
    useReducedMotion: c
  })
}