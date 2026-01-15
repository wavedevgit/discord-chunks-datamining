/** Chunk was on 1272 **/
/** chunk id: 824138, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk670188 = require("./670188.jsx"),
  Chunk237583 = require("./237583.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk870569 = require("./870569.jsx"),
  Chunk345243 = require("./345243.jsx"),
  Chunk115530 = require("./115530.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk139661 = require("./139661.js");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      O(e, t, n[t])
    })
  }
  return e
}

function I(e, t) {
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
}
class y extends Chunk473749.PureComponent {
  isHost() {
    let {
      currentUser: e,
      host: t
    } = this.props;
    return e.id === (null == t ? true : t.id)
  }
  renderTitle() {
    return (0, r.jsxs)("div", {
      children: [(0, r.jsx)(m.Z, {
        children: this.isHost() ? E.intl.formatToPlainString(E.t["6UJ7mh"], {
          count: this.props.party.length
        }) : E.intl.string(E.t.RZufbH)
      }), (0, r.jsx)(h.Z, {
        children: E.intl.string(E.t["0ZHLIi"])
      })]
    })
  }
  renderStopListeningButton() {
    let {
      onStopListening: e
    } = this.props;
    return this.isHost() ? null : (0, r.jsx)(g.Z, {
      tooltipText: E.intl.string(E.t.LeZSpz),
      onClick: e,
      icon: s.Dio
    })
  }
  renderHelpIcon() {
    return this.isHost() ? (0, r.jsx)(g.Z, {
      tooltipText: E.intl.string(E.t.U7N2Hs),
      onClick: () => {
        window.open(f.Z.getArticleURL(b.BhN.SPOTIFY_CONNECTION), "_blank")
      },
      icon: s.d3s
    }) : null
  }
  render() {
    return (0, r.jsxs)("div", {
      className: _.listeningAlong,
      children: [this.renderTitle(), (0, r.jsx)(u.Z, {
        justify: u.Z.Justify.END,
        className: _.party,
        children: (0, r.jsx)(p.Z, {
          users: this.props.party,
          max: this.isHost() ? 5 : 4,
          renderUser: this.renderPartyMember,
          renderMoreUsers: this.renderPartyMemberOverflow
        })
      }), (0, r.jsxs)("div", {
        className: _.icons,
        children: [this.renderHelpIcon(), this.renderStopListeningButton()]
      })]
    })
  }
  constructor(...e) {
    super(...e), O(this, "partyMemberAvatarRef", i.createRef()), O(this, "partyMemberOverflowRef", i.createRef()), O(this, "renderPartyMember", (e, t) => {
      let n;
      if (null == e) return null;
      let {
        host: l,
        onUserContextMenu: u
      } = this.props;
      return n = (null == l ? true : l.id) === e.id ? E.intl.string(E.t["N9bqD+"]) : E.intl.string(E.t.Z2Y4c9), (0, r.jsx)(d.Z, {
        targetElementRef: this.partyMemberAvatarRef,
        user: e,
        newAnalyticsLocations: [c.Z.AVATAR],
        position: "top",
        align: "center",
        clickTrap: true,
        children: l => (0, r.jsx)(o.u, {
          text: n,
          children: (0, i.createElement)(s.qEK, I(v({}, l), {
            key: e.id,
            src: e.getAvatarURL(true, 24),
            size: s.EFr.SIZE_24,
            className: a()(_.avatar, t),
            "aria-label": e.username,
            onContextMenu: t => void(null != e && (null == u || u(t, e))),
            avatarContentRef: this.partyMemberAvatarRef
          }))
        })
      }, e.id)
    }), O(this, "renderPartyMemberOverflow", (e, t, n) => {
      let {
        renderOverflowPopout: i
      } = this.props;
      return (0, r.jsx)(s.yRy, {
        renderPopout: i,
        targetElementRef: this.partyMemberOverflowRef,
        children: n => (0, r.jsx)(o.u, {
          text: E.intl.string(E.t.Zf4NPe),
          children: (0, r.jsx)("div", I(v({}, n), {
            ref: this.partyMemberOverflowRef,
            className: a()(_.overflow, t),
            children: e
          }))
        })
      }, n)
    })
  }
}
let C = y