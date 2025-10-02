/** Chunk was on 1272 **/
/** chunk id: 824138, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk934537 = require("./934537.js");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
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

function v(e, t) {
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
class y extends Chunk647438.PureComponent {
  isHost() {
    let {
      currentUser: e,
      host: t
    } = this.props;
    return module.id === (null == exports ? true : exports.id)
  }
  renderTitle() {
    return (0, Chunk951288.jsxs)("div", {
      children: [(0, Chunk951288.jsx)(Chunk115530.Z, {
        children: this.isHost() ? Chunk388032.intl.formatToPlainString(Chunk388032.t["6UJ7mp"], {
          count: this.props.party.length
        }) : Chunk388032.intl.string(Chunk388032.t.RZufbG)
      }), (0, Chunk951288.jsx)(Chunk345243.Z, {
        children: Chunk388032.intl.string(Chunk388032.t["0ZHLIi"])
      })]
    })
  }
  renderStopListeningButton() {
    let {
      onStopListening: e
    } = this.props;
    return this.isHost() ? null : (0, Chunk951288.jsx)(Chunk870569.Z, {
      tooltipText: Chunk388032.intl.string(Chunk388032.t.LeZSp6),
      onClick: module,
      icon: Chunk481060.Dio
    })
  }
  renderHelpIcon() {
    return this.isHost() ? (0, Chunk951288.jsx)(Chunk870569.Z, {
      tooltipText: Chunk388032.intl.string(Chunk388032.t.U7N2Hh),
      onClick: () => {
        window.open(Chunk63063.Z.getArticleURL(Chunk981631.BhN.SPOTIFY_CONNECTION), "_blank")
      },
      icon: Chunk481060.d3s
    }) : null
  }
  render() {
    return (0, Chunk951288.jsxs)("div", {
      className: Chunk934537.listeningAlong,
      children: [this.renderTitle(), (0, Chunk951288.jsx)(Chunk600164.Z, {
        justify: Chunk600164.Z.Justify.END,
        className: Chunk934537.party,
        children: (0, Chunk951288.jsx)(Chunk237583.Z, {
          users: this.props.party,
          max: this.isHost() ? 5 : 4,
          renderUser: this.renderPartyMember,
          renderMoreUsers: this.renderPartyMemberOverflow
        })
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk934537.icons,
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
        onUserContextMenu: c
      } = this.props;
      return n = (null == l ? true : l.id) === e.id ? b.intl.string(b.t.N9bqDw) : b.intl.string(b.t.Z2Y4c3), (0, r.jsx)(u.Z, {
        targetElementRef: this.partyMemberAvatarRef,
        user: e,
        newAnalyticsLocations: [s.Z.AVATAR],
        position: "top",
        align: "center",
        clickTrap: true,
        children: l => (0, r.jsx)(o.ua7, {
          text: n,
          children: n => {
            let {
              onMouseEnter: r,
              onMouseLeave: s
            } = n;
            return (0, i.createElement)(o.qEK, v(E({}, l), {
              key: e.id,
              src: e.getAvatarURL(true, 24),
              size: o.EFr.SIZE_24,
              className: a()(_.avatar, t),
              "aria-label": e.username,
              onMouseEnter: r,
              onMouseLeave: s,
              onContextMenu: t => void(null != e && (null == c || c(t, e))),
              avatarContentRef: this.partyMemberAvatarRef
            }))
          }
        })
      }, e.id)
    }), O(this, "renderPartyMemberOverflow", (e, t, n) => {
      let {
        renderOverflowPopout: i
      } = this.props;
      return (0, r.jsx)(o.yRy, {
        renderPopout: i,
        targetElementRef: this.partyMemberOverflowRef,
        children: n => (0, r.jsx)(o.ua7, {
          text: b.intl.string(b.t.Zf4NPT),
          children: i => (0, r.jsx)("div", v(E({
            ref: this.partyMemberOverflowRef,
            className: a()(_.overflow, t)
          }, i, n), {
            children: e
          }))
        })
      }, n)
    })
  }
}
let I = y