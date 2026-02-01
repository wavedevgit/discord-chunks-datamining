/** Chunk was on 21738 **/
/** chunk id: 901133, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => v
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk342296 = require("./342296.jsx"),
  Chunk636585 = require("./636585.jsx"),
  Chunk975571 = require("./975571.js"),
  Chunk42473 = require("./42473.jsx"),
  Chunk994314 = require("./994314.jsx"),
  Chunk485599 = require("./485599.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk308685 = require("./308685.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
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
class I extends Chunk64700.PureComponent {
  isHost() {
    let {
      currentUser: e,
      host: t
    } = this.props;
    return e.id === (null == t ? true : t.id)
  }
  renderTitle() {
    return (0, r.jsxs)("div", {
      children: [(0, r.jsx)(f.A, {
        children: this.isHost() ? _.intl.formatToPlainString(_.t["6UJ7mh"], {
          count: this.props.party.length
        }) : _.intl.string(_.t.RZufbH)
      }), (0, r.jsx)(m.A, {
        children: _.intl.string(_.t["0ZHLIi"])
      })]
    })
  }
  renderStopListeningButton() {
    let {
      onStopListening: e
    } = this.props;
    return this.isHost() ? null : (0, r.jsx)(g.A, {
      tooltipText: _.intl.string(_.t.LeZSpz),
      onClick: e,
      icon: o.PGe
    })
  }
  renderHelpIcon() {
    return this.isHost() ? (0, r.jsx)(g.A, {
      tooltipText: _.intl.string(_.t.U7N2Hs),
      onClick: () => {
        window.open(h.A.getArticleURL(A.MVz.SPOTIFY_CONNECTION), "_blank")
      },
      icon: o.mir
    }) : null
  }
  render() {
    return (0, r.jsxs)("div", {
      className: b.Jh,
      children: [this.renderTitle(), (0, r.jsx)(u.A, {
        justify: u.A.Justify.END,
        className: b.Hg,
        children: (0, r.jsx)(p.A, {
          users: this.props.party,
          max: this.isHost() ? 5 : 4,
          renderUser: this.renderPartyMember,
          renderMoreUsers: this.renderPartyMemberOverflow
        })
      }), (0, r.jsxs)("div", {
        className: b.Pt,
        children: [this.renderHelpIcon(), this.renderStopListeningButton()]
      })]
    })
  }
  constructor(...e) {
    super(...e), E(this, "partyMemberAvatarRef", i.createRef()), E(this, "partyMemberOverflowRef", i.createRef()), E(this, "renderPartyMember", (e, t) => {
      let n;
      if (null == e) return null;
      let {
        host: l,
        onUserContextMenu: u
      } = this.props;
      return n = (null == l ? true : l.id) === e.id ? _.intl.string(_.t["N9bqD+"]) : _.intl.string(_.t.Z2Y4c9), (0, r.jsx)(d.A, {
        targetElementRef: this.partyMemberAvatarRef,
        user: e,
        newAnalyticsLocations: [c.A.AVATAR],
        position: "top",
        align: "center",
        clickTrap: true,
        children: l => (0, r.jsx)(s.m, {
          text: n,
          children: (0, i.createElement)(o.euF, y(O({}, l), {
            key: e.id,
            src: e.getAvatarURL(true, 24),
            size: o._3J.SIZE_24,
            className: a()(b.my, t),
            "aria-label": e.username,
            onContextMenu: t => void(null != e && (null == u || u(t, e))),
            avatarContentRef: this.partyMemberAvatarRef
          }))
        })
      }, e.id)
    }), E(this, "renderPartyMemberOverflow", (e, t, n) => {
      let {
        renderOverflowPopout: i
      } = this.props;
      return (0, r.jsx)(o.YNO, {
        renderPopout: i,
        targetElementRef: this.partyMemberOverflowRef,
        children: n => (0, r.jsx)(s.m, {
          text: _.intl.string(_.t.Zf4NPe),
          children: (0, r.jsx)("div", y(O({}, n), {
            ref: this.partyMemberOverflowRef,
            className: a()(b.ju, t),
            children: e
          }))
        })
      }, n)
    })
  }
}
let v = I