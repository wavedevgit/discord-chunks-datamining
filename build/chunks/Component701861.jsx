/** Chunk was on 1272 **/
/** chunk id: 701861, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Z
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk668781 = require("./668781.js"),
  Chunk493683 = require("./493683.js"),
  Chunk239091 = require("./239091.js"),
  Chunk100527 = require("./100527.js"),
  Chunk522558 = require("./522558.js"),
  Chunk762500 = require("./762500.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk592125 = require("./592125.js"),
  Chunk131951 = require("./131951.js"),
  Chunk699516 = require("./699516.js"),
  Chunk51144 = require("./51144.js"),
  Chunk298213 = require("./298213.js"),
  Chunk321488 = require("./321488.jsx"),
  Chunk417183 = require("./417183.jsx"),
  Chunk825682 = require("./825682.jsx"),
  Chunk170245 = require("./170245.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk934422 = require("./934422.js");

function P(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function x(e) {
  let {
    user: t,
    applicationId: n,
    isGameRelationship: l,
    onSelect: a
  } = e, p = i.useCallback(() => {
    u.Z.openPrivateChannel({
      recipientIds: t.id,
      joinCall: true
    })
  }, [t.id]), f = i.useCallback(() => {
    u.Z.openPrivateChannel({
      recipientIds: t.id,
      joinCall: true,
      joinCallVideo: true
    })
  }, [t.id]), h = i.useCallback(() => {
    O.Z.removeFriend({
      userId: t.id,
      applicationId: l ? n : null,
      location: "Friends"
    })
  }, [n, l, t.id]), g = i.useCallback(() => {
    let e = l ? N.intl.string(N.t.RLcE6x) : N.intl.string(N.t.cvSt1J);
    c.Z.show({
      title: N.intl.formatToPlainString(N.t.fPLvZd, {
        name: E.ZP.getName(t)
      }),
      body: N.intl.formatToPlainString(N.t.l5FFq6, {
        name: E.ZP.getName(t)
      }),
      confirmText: e,
      confirmVariant: "critical-primary",
      cancelText: N.intl.string(N.t["ETE/oC"]),
      onConfirm: h
    })
  }, [h, l, t]), m = (0, s.e7)([_.Z], () => _.Z.supports(T.AN.VIDEO)), b = t.isProvisional, y = l ? N.intl.string(N.t.RLcE6x) : N.intl.string(N.t.cvSt1J);
  return (0, r.jsxs)(o.v2r, {
    navId: "friend-row",
    "aria-label": N.intl.string(N.t.liqwPJ),
    onClose: d.Zy,
    onSelect: a,
    children: [!b && m ? (0, r.jsx)(o.sNh, {
      id: "start-video-call",
      label: N.intl.string(N.t.oCqlGG),
      action: f
    }) : null, !b && (0, r.jsx)(o.sNh, {
      id: "start-voice-call",
      label: N.intl.string(N.t.focH1t),
      action: p
    }), (0, r.jsx)(o.sNh, {
      id: "remove-friend",
      label: y,
      action: g,
      color: "danger"
    })]
  })
}
class A extends Chunk473749.PureComponent {
  componentWillLeave(e) {
    null != this.peopleListItemRef.current && this.peopleListItemRef.current.componentWillLeave(e)
  }
  componentWillEnter(e) {
    null != this.peopleListItemRef.current && this.peopleListItemRef.current.componentWillEnter(e)
  }
  render() {
    let {
      user: e,
      isFocused: t,
      activities: n,
      applicationStream: i,
      status: l,
      isMobile: a,
      isGameRelationship: s,
      giftIntentType: c
    } = this.props, {
      isActiveRow: u
    } = this.state;
    return (0, Chunk522558.i)(Chunk100527.Z.FRIENDS_LIST) && null != Chunk668781 ? (0, Chunk54381.jsx)(Chunk762500.Z, {
      ref: this.peopleListItemRef,
      isFocused: exports,
      isActive: Chunk493683,
      recipientUser: module,
      onOtherHover: () => Chunk493683 ? null : (0, Chunk239091.Zy)(),
      onClick: this.handleOpenPrivateChannel,
      giftIntentType: Chunk668781,
      status: Chunk392711,
      activities: require,
      applicationStream: Chunk473749,
      isMobile: a,
      isGameRelationship: Chunk442837
    }) : (0, Chunk54381.jsx)(Chunk417183.Z, {
      ref: this.peopleListItemRef,
      isFocused: exports,
      isActive: Chunk493683,
      user: module,
      onOtherHover: () => Chunk493683 ? null : (0, Chunk239091.Zy)(),
      onClick: this.handleOpenPrivateChannel,
      children: t => (0, r.jsxs)("div", {
        className: j.listItemContents,
        children: [(0, r.jsx)(C.Z, {
          user: e,
          status: l,
          isMobile: a,
          subText: (0, r.jsx)(I.Z, {
            hovered: t,
            activities: n,
            applicationStream: i,
            status: l,
            user: e,
            userIgnored: b.Z.isIgnored(e.id)
          }),
          hovered: t,
          showAccountIdentifier: !s && !e.isProvisional
        }), (0, r.jsxs)("div", {
          className: j.actions,
          children: [(0, r.jsx)(y.Z, {
            icon: o.kBi,
            tooltip: N.intl.string(N.t["g33r/P"]),
            onClick: this.handleOpenPrivateChannel,
            shouldHighlight: t
          }), (0, r.jsx)(y.Z, {
            icon: o.Huf,
            tooltip: N.intl.string(N.t["UKOtz+"]),
            onClick: this.handleOpenActionsMenu,
            shouldHighlight: t
          })]
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), P(this, "peopleListItemRef", i.createRef()), P(this, "state", {
      isActiveRow: false
    }), P(this, "handleOpenPrivateChannel", e => {
      let {
        user: t
      } = this.props;
      e.stopPropagation();
      let n = a().find(m.Z.getMutablePrivateChannels(), e => e.type === S.d4z.DM && e.getRecipientId() === t.id);
      null != n ? (0, g.uL)(S.Z5c.CHANNEL(S.ME, n.id)) : u.Z.openPrivateChannel({
        recipientIds: t.id
      })
    }), P(this, "handleOpenActionsMenu", e => {
      let {
        user: t,
        isGameRelationship: n,
        applicationId: i
      } = this.props;
      (0, d.vq)(e, e => (0, r.jsx)(x, function(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(t)).forEach(function(n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
      }(function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            P(e, t, n[t])
          })
        }
        return e
      }({}, e), {
        user: t,
        applicationId: i,
        isGameRelationship: n
      })), {
        onClose: () => {
          this.setState({
            isActiveRow: false
          })
        }
      }), this.setState({
        isActiveRow: true
      })
    })
  }
}
let Z = A