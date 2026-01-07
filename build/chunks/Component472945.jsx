/** Chunk was on 72071 **/
/** chunk id: 472945, original params: e,t,s (module,exports,require) **/
require.d(exports, {
  default: () => M
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  c = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk447543 = require("./447543.js"),
  Chunk225433 = require("./225433.jsx"),
  Chunk129861 = require("./129861.jsx"),
  Chunk700582 = require("./700582.jsx"),
  Chunk367907 = require("./367907.js"),
  Chunk570908 = require("./570908.jsx"),
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
  Chunk471785 = require("./471785.js"),
  Chunk579480 = require("./579480.js"),
  Chunk478411 = require("./478411.js");

function P(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = s, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var s = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(s);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(s).filter(function(e) {
      return Object.getOwnPropertyDescriptor(s, e).enumerable
    }))), n.forEach(function(t) {
      P(e, t, s[t])
    })
  }
  return e
}

function R(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var s = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      s.push.apply(s, n)
    }
    return s
  })(Object(t)).forEach(function(s) {
    Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(t, s))
  }), e
}
class T extends Chunk473749.PureComponent {
  render() {
    let {
      invite: e,
      hideDiscriminator: t,
      hideInviteCode: s
    } = this.props, r = new C.Z(e.inviter);
    return (0, n.jsxs)(b.Z, {
      className: a()(_.row, k.card),
      children: [(0, n.jsxs)(b.Z, {
        align: b.Z.Align.CENTER,
        className: _.userColumn,
        children: [(0, n.jsx)(j.Z, {
          user: r,
          size: u.EFr.SIZE_24,
          className: _.avatar
        }), (0, n.jsx)(x.Z, {
          user: r,
          hideDiscriminator: t,
          usernameClass: _.username,
          discriminatorClass: _.discrimClass
        })]
      }), (0, n.jsx)(b.Z, {
        align: b.Z.Align.CENTER,
        grow: 0,
        shrink: 0,
        basis: 100,
        className: _.boostZIndex,
        children: (0, n.jsx)(u.Text, {
          className: _.code,
          variant: "text-sm/normal",
          children: s ? "..." : e.code
        })
      }), (0, n.jsxs)(b.Z, {
        basis: 100,
        grow: 0,
        shrink: 0,
        align: b.Z.Align.CENTER,
        justify: b.Z.Justify.END,
        className: _.boostZIndex,
        children: [(0, n.jsx)(u.Text, {
          className: _.countdown,
          variant: "text-sm/normal",
          children: (0, n.jsx)(g.Z, {
            deadline: e.getExpiresAt(),
            showDays: false
          })
        }), (0, n.jsx)(p.Z, {
          className: _.revokeInvite,
          onClick: this.handleRevokeInvite
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), P(this, "handleRevokeInvite", () => {
      let {
        onRevoke: e,
        invite: t
      } = this.props;
      null != e && e(t)
    })
  }
}
class A extends Chunk473749.PureComponent {
  componentDidMount() {
    let {
      channelId: e
    } = this.props;
    d.tn.get({
      url: E.ANM.INSTANT_INVITES(e),
      retries: 3,
      oldFormErrors: true,
      rejectWithError: true
    }).then(e => {
      let t = e.body.map(e => new Z.Z(R(S({}, e), {
        maxUses: e.max_uses,
        maxAge: e.max_age,
        createdAt: e.created_at
      })));
      this.setState({
        loading: false,
        invites: t
      })
    }), I.default.track(E.rMx.OPEN_MODAL, R(S({}, (0, f.v_)(w.Z.getChannel(e))), {
      type: "Group DM Invites",
      source: "Group DM Menu"
    }))
  }
  renderContent() {
    let {
      loading: e,
      invites: t
    } = this.state, {
      hideDiscriminators: s,
      hideInviteCodes: r
    } = this.props;
    if (e || null == t) return (0, n.jsx)(u.$jN, {
      className: D.marginTop20,
      type: u.$jN.Type.SPINNING_CIRCLE
    });
    if (c().isEmpty(t)) return this.renderEmpty();
    let i = c()(t).sortBy(e => {
      var t;
      return (null != (t = e.inviter.username) ? t : "").toLocaleLowerCase()
    }).value();
    return (0, n.jsxs)(u.iA_, {
      "aria-label": O.intl.string(O.t["9F90ic"]),
      selectionMode: "none",
      children: [(0, n.jsxs)(u.xDH, {
        children: [(0, n.jsx)(u.DwJ, {
          children: O.intl.string(O.t.EgHyKy)
        }), (0, n.jsx)(u.DwJ, {
          children: O.intl.string(O.t.LBlFEN)
        }), (0, n.jsx)(u.DwJ, {
          children: O.intl.string(O.t["1aM27d"])
        })]
      }), (0, n.jsx)(u.RMI, {
        items: i,
        children: e => {
          let t = new C.Z(e.inviter);
          return (0, n.jsxs)(u.SCH, {
            id: e.code,
            children: [(0, n.jsx)(u.pj1, {
              children: (0, n.jsx)(v.Z, {
                avatar: (0, n.jsx)(j.Z, {
                  user: t,
                  size: u.EFr.SIZE_24
                }),
                name: (0, n.jsx)(x.Z, {
                  user: t,
                  hideDiscriminator: s,
                  usernameClass: _.username,
                  discriminatorClass: _.discrimClass
                })
              })
            }), (0, n.jsx)(u.pj1, {
              children: (0, n.jsx)(u.Text, {
                className: _.code,
                variant: "text-sm/normal",
                children: r ? "..." : e.code
              })
            }), (0, n.jsx)(u.pj1, {
              children: (0, n.jsxs)(u.Kqy, {
                direction: "horizontal",
                align: "center",
                gap: 8,
                children: [(0, n.jsx)(u.Text, {
                  className: _.countdown,
                  variant: "text-sm/normal",
                  children: (0, n.jsx)(g.Z, {
                    deadline: e.getExpiresAt(),
                    showDays: false
                  })
                }), (0, n.jsx)(u.hU, {
                  size: "sm",
                  "aria-label": O.intl.string(O.t.N86XcP),
                  variant: "critical-secondary",
                  icon: u.XHJ,
                  onClick: () => this.handleRevoke(e)
                })]
              })
            })]
          })
        }
      })]
    })
  }
  renderEmpty() {
    return (0, n.jsxs)(u.ubH, {
      theme: this.props.theme,
      children: [(0, n.jsx)(u.oxh, {
        darkSrc: s(914814),
        lightSrc: s(370392),
        width: 256,
        height: 130,
        style: {
          marginBottom: 0
        }
      }), (0, n.jsx)(u.OZU, {
        className: D.marginTop20,
        children: O.intl.string(O.t["03/rlQ"])
      })]
    })
  }
  renderInvites() {
    let {
      hideDiscriminators: e,
      hideInviteCodes: t
    } = this.props;
    return c()(this.state.invites).sortBy(e => {
      var t;
      return (null != (t = e.inviter.username) ? t : "").toLocaleLowerCase()
    }).map(s => (0, n.jsx)(T, {
      invite: s,
      hideDiscriminator: e,
      hideInviteCode: t,
      onRevoke: this.handleRevoke
    }, s.code)).value()
  }
  render() {
    let {
      onClose: e,
      transitionState: t
    } = this.props;
    return (0, n.jsx)(h.u_l, {
      title: O.intl.string(O.t["9F90ic"]),
      subtitle: O.intl.string(O.t.WDw38H),
      actions: [{
        text: O.intl.string(O.t.i4jeWR),
        onClick: this.handleClose
      }],
      onClose: e,
      transitionState: t,
      children: this.renderContent()
    })
  }
  constructor(...e) {
    super(...e), P(this, "state", {
      loading: true,
      invites: null
    }), P(this, "handleRevoke", e => {
      m.ZP.revokeInvite(e), this.setState({
        invites: this.state.invites.filter(t => t !== e)
      })
    }), P(this, "handleClose", () => {
      let {
        onClose: e
      } = this.props;
      null == e || e()
    })
  }
}
let M = Chunk442837.ZP.connectStores([Chunk246946.Z, Chunk210887.Z], () => ({
  hideDiscriminators: N.Z.hidePersonalInformation,
  hideInviteCodes: N.Z.hideInstantInvites,
  theme: y.Z.theme
}))(A)