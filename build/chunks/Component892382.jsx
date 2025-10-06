/** Chunk was on 97573 **/
/** chunk id: 892382, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => T
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk481060 = require("./481060.js"),
  Chunk447543 = require("./447543.js"),
  Chunk225433 = require("./225433.jsx"),
  Chunk129861 = require("./129861.jsx"),
  Chunk700582 = require("./700582.jsx"),
  Chunk367907 = require("./367907.js"),
  Chunk346486 = require("./346486.jsx"),
  Chunk600164 = require("./600164.jsx"),
  Chunk210887 = require("./210887.js"),
  Chunk758449 = require("./758449.js"),
  Chunk598077 = require("./598077.js"),
  Chunk592125 = require("./592125.js"),
  Chunk246946 = require("./246946.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk240793 = require("./240793.js"),
  Chunk504401 = require("./504401.js"),
  Chunk10198 = require("./10198.js");

function _(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = r, e
}

function P(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      _(e, t, r[t])
    })
  }
  return e
}

function R(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}
class S extends Chunk647438.PureComponent {
  render() {
    let {
      invite: e,
      hideDiscriminator: t,
      hideInviteCode: r
    } = this.props, s = new Chunk598077.Z(module.inviter);
    return (0, Chunk951288.jsxs)(Chunk600164.Z, {
      className: a()(Chunk240793.row, Chunk504401.card),
      children: [(0, Chunk951288.jsxs)(Chunk600164.Z, {
        align: Chunk600164.Z.Align.CENTER,
        className: Chunk240793.userColumn,
        children: [(0, Chunk951288.jsx)(Chunk700582.Z, {
          user: Chunk647438,
          size: Chunk481060.EFr.SIZE_24,
          className: Chunk240793.avatar
        }), (0, Chunk951288.jsx)(Chunk129861.Z, {
          user: Chunk647438,
          hideDiscriminator: exports,
          usernameClass: Chunk240793.username,
          discriminatorClass: Chunk240793.discrimClass
        })]
      }), (0, Chunk951288.jsx)(Chunk600164.Z, {
        align: Chunk600164.Z.Align.CENTER,
        grow: 0,
        shrink: 0,
        basis: 100,
        className: Chunk240793.boostZIndex,
        children: (0, Chunk951288.jsx)(Chunk481060.Text, {
          className: Chunk240793.code,
          variant: "text-sm/normal",
          children: require ? "..." : module.code
        })
      }), (0, Chunk951288.jsxs)(Chunk600164.Z, {
        basis: 100,
        grow: 0,
        shrink: 0,
        align: Chunk600164.Z.Align.CENTER,
        justify: Chunk600164.Z.Justify.END,
        className: Chunk240793.boostZIndex,
        children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
          className: Chunk240793.countdown,
          variant: "text-sm/normal",
          children: (0, Chunk951288.jsx)(Chunk346486.Z, {
            deadline: module.getExpiresAt(),
            showDays: false
          })
        }), (0, Chunk951288.jsx)(Chunk225433.Z, {
          className: Chunk240793.revokeInvite,
          onClick: this.handleRevokeInvite
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), _(this, "handleRevokeInvite", () => {
      let {
        onRevoke: e,
        invite: t
      } = this.props;
      null != e && e(t)
    })
  }
}
class D extends Chunk647438.PureComponent {
  componentDidMount() {
    let {
      channelId: e
    } = this.props;
    Chunk544891.tn.get({
      url: Chunk981631.ANM.INSTANT_INVITES(module),
      retries: 3,
      oldFormErrors: true,
      rejectWithError: true
    }).then(e => {
      let t = e.body.map(e => new Z.Z(R(P({}, e), {
        maxUses: e.max_uses,
        maxAge: e.max_age,
        createdAt: e.created_at
      })));
      this.setState({
        loading: false,
        invites: t
      })
    }), Chunk626135.default.track(Chunk981631.rMx.OPEN_MODAL, R(P({}, (0, Chunk367907.v_)(Chunk592125.Z.getChannel(module))), {
      type: "Group DM Invites",
      source: "Group DM Menu"
    }))
  }
  renderContent() {
    let {
      loading: e,
      invites: t
    } = this.state;
    return module || null == exports ? (0, Chunk951288.jsx)(Chunk481060.$jN, {
      className: Chunk10198.marginTop20,
      type: Chunk481060.$jN.Type.SPINNING_CIRCLE
    }) : l().isEmpty(exports) ? this.renderEmpty() : (0, Chunk951288.jsxs)("div", {
      className: Chunk240793.container,
      children: [this.renderHeader(), this.renderInvites()]
    })
  }
  renderEmpty() {
    return (0, Chunk951288.jsxs)(Chunk481060.ubH, {
      theme: this.props.theme,
      children: [(0, Chunk951288.jsx)(Chunk481060.oxh, {
        darkSrc: require("./914814.js"),
        lightSrc: require("./370392.js"),
        width: 256,
        height: 130,
        style: {
          marginBottom: 0
        }
      }), (0, Chunk951288.jsx)(Chunk481060.OZU, {
        className: Chunk10198.marginTop20,
        children: Chunk388032.intl.string(Chunk388032.t["03/rlZ"])
      })]
    })
  }
  renderHeader() {
    return (0, Chunk951288.jsxs)(Chunk600164.Z, {
      children: [(0, Chunk951288.jsx)(Chunk600164.Z.Child, {
        wrap: true,
        children: (0, Chunk951288.jsx)(Chunk481060.vwX, {
          children: Chunk388032.intl.string(Chunk388032.t.EgHyKy)
        })
      }), (0, Chunk951288.jsx)(Chunk600164.Z.Child, {
        wrap: true,
        grow: 0,
        shrink: 0,
        basis: 100,
        children: (0, Chunk951288.jsx)(Chunk481060.vwX, {
          children: Chunk388032.intl.string(Chunk388032.t.LBlFEB)
        })
      }), (0, Chunk951288.jsx)(Chunk600164.Z.Child, {
        wrap: true,
        grow: 0,
        shrink: 0,
        basis: 100,
        children: (0, Chunk951288.jsx)(Chunk481060.vwX, {
          className: Chunk240793.alignRight,
          children: Chunk388032.intl.string(Chunk388032.t["1aM27e"])
        })
      })]
    })
  }
  renderInvites() {
    let {
      hideDiscriminators: e,
      hideInviteCodes: t
    } = this.props;
    return l()(this.state.invites).sortBy(e => {
      var t;
      return (null != (t = e.inviter.username) ? t : "").toLocaleLowerCase()
    }).map(r => (0, n.jsx)(S, {
      invite: r,
      hideDiscriminator: e,
      hideInviteCode: t,
      onRevoke: this.handleRevoke
    }, r.code)).value()
  }
  render() {
    return (0, Chunk951288.jsxs)(Chunk481060.Y0X, {
      transitionState: this.props.transitionState,
      "aria-label": Chunk388032.intl.string(Chunk388032.t["9F90iY"]),
      size: Chunk481060.CgR.MEDIUM,
      parentComponent: "InviteSettings",
      children: [(0, Chunk951288.jsxs)(Chunk481060.xBx, {
        direction: Chunk600164.Z.Direction.VERTICAL,
        align: Chunk600164.Z.Align.START,
        separator: false,
        children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
          tag: Chunk481060.RB0.H1,
          children: Chunk388032.intl.string(Chunk388032.t["9F90iY"])
        }), (0, Chunk951288.jsx)(Chunk481060.R94, {
          type: Chunk481060.geA.DESCRIPTION,
          children: Chunk388032.intl.string(Chunk388032.t.WDw38P)
        })]
      }), (0, Chunk951288.jsx)(Chunk481060.hzk, {
        children: this.renderContent()
      }), (0, Chunk951288.jsx)(Chunk481060.mzw, {
        children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: Chunk388032.intl.string(Chunk388032.t.i4jeWV),
          onClick: this.handleClose
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), _(this, "state", {
      loading: true,
      invites: null
    }), _(this, "handleRevoke", e => {
      u.ZP.revokeInvite(e), this.setState({
        invites: this.state.invites.filter(t => t !== e)
      })
    }), _(this, "handleClose", () => {
      let {
        onClose: e
      } = this.props;
      null == e || e()
    })
  }
}
let T = Chunk442837.ZP.connectStores([Chunk246946.Z, Chunk210887.Z], () => ({
  hideDiscriminators: Chunk246946.Z.hidePersonalInformation,
  hideInviteCodes: Chunk246946.Z.hideInstantInvites,
  theme: Chunk210887.Z.theme
}))(D)