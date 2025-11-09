/** Chunk was on 1272 **/
/** chunk id: 701861, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk668781 = require("./668781.js"),
  Chunk493683 = require("./493683.js"),
  Chunk239091 = require("./239091.js"),
  Chunk443589 = require("./443589.jsx"),
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
  Chunk893361 = require("./893361.js");

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function j(e) {
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
    b.Z.removeFriend({
      userId: t.id,
      applicationId: l ? n : null,
      location: "Friends"
    })
  }, [n, l, t.id]), m = i.useCallback(() => {
    let e = l ? S.intl.string(S.t.RLcE6x) : S.intl.string(S.t.cvSt1J);
    c.Z.show({
      title: S.intl.formatToPlainString(S.t.fPLvZd, {
        name: _.ZP.getName(t)
      }),
      body: S.intl.formatToPlainString(S.t.l5FFq6, {
        name: _.ZP.getName(t)
      }),
      confirmText: e,
      confirmVariant: "critical-primary",
      cancelText: S.intl.string(S.t["ETE/oC"]),
      onConfirm: h
    })
  }, [h, l, t]), E = (0, s.e7)([g.Z], () => g.Z.supports(C.AN.VIDEO)), O = t.isProvisional, y = l ? S.intl.string(S.t.RLcE6x) : S.intl.string(S.t.cvSt1J);
  return (0, r.jsxs)(o.v2r, {
    navId: "friend-row",
    "aria-label": S.intl.string(S.t.liqwPJ),
    onClose: d.Zy,
    onSelect: a,
    children: [!O && E ? (0, r.jsx)(o.sNh, {
      id: "start-video-call",
      label: S.intl.string(S.t.oCqlGG),
      action: f
    }) : null, !O && (0, r.jsx)(o.sNh, {
      id: "start-voice-call",
      label: S.intl.string(S.t.focH1t),
      action: p
    }), (0, r.jsx)(o.sNh, {
      id: "remove-friend",
      label: y,
      action: m,
      color: "danger"
    })]
  })
}
class P extends Chunk647438.PureComponent {
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
    return (0, Chunk951288.jsx)(Chunk417183.Z, {
      ref: this.peopleListItemRef,
      isFocused: exports,
      isActive: Chunk493683,
      user: module,
      onOtherHover: () => Chunk493683 ? null : (0, Chunk239091.Zy)(),
      onClick: this.handleOpenPrivateChannel,
      children: t => (0, r.jsxs)("div", {
        className: T.listItemContents,
        children: [(0, r.jsx)(v.Z, {
          user: e,
          status: l,
          isMobile: a,
          subText: (0, r.jsx)(y.Z, {
            hovered: t,
            activities: n,
            applicationStream: i,
            status: l,
            user: e,
            userIgnored: m.Z.isIgnored(e.id)
          }),
          hovered: t,
          showAccountIdentifier: !s && !e.isProvisional
        }), (0, r.jsxs)("div", {
          className: T.actions,
          children: [null != c && (0, r.jsx)(p.Z, {
            recipientUser: e,
            giftIntentType: c,
            analyticsPage: I.ZY5.FRIENDS_LIST,
            shouldHighlight: t
          }), (0, r.jsx)(E.Z, {
            icon: o.kBi,
            tooltip: S.intl.string(S.t["g33r/P"]),
            onClick: this.handleOpenPrivateChannel,
            shouldHighlight: t
          }), (0, r.jsx)(E.Z, {
            icon: o.Huf,
            tooltip: S.intl.string(S.t["UKOtz+"]),
            onClick: this.handleOpenActionsMenu,
            shouldHighlight: t
          })]
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), N(this, "peopleListItemRef", i.createRef()), N(this, "state", {
      isActiveRow: false
    }), N(this, "handleOpenPrivateChannel", e => {
      let {
        user: t
      } = this.props;
      e.stopPropagation();
      let n = a().find(h.Z.getMutablePrivateChannels(), e => e.type === I.d4z.DM && e.getRecipientId() === t.id);
      null != n ? (0, f.uL)(I.Z5c.CHANNEL(I.ME, n.id)) : u.Z.openPrivateChannel({
        recipientIds: t.id
      })
    }), N(this, "handleOpenActionsMenu", e => {
      let {
        user: t,
        isGameRelationship: n,
        applicationId: i
      } = this.props;
      (0, d.vq)(e, e => (0, r.jsx)(j, function(e, t) {
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
            N(e, t, n[t])
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
let x = P