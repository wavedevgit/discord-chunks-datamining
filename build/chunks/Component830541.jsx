/** Chunk was on 48574 **/
/** chunk id: 830541, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => K
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  l = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk562465 = require("./562465.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk846293 = require("./846293.js"),
  Chunk414079 = require("./414079.jsx"),
  Chunk297413 = require("./297413.jsx"),
  Chunk966327 = require("./966327.jsx"),
  Chunk58149 = require("./58149.js"),
  Chunk262295 = require("./262295.jsx"),
  Chunk576470 = require("./576470.jsx"),
  Chunk235986 = require("./235986.jsx"),
  Chunk544028 = require("./544028.js"),
  Chunk671759 = require("./671759.js"),
  Chunk427157 = require("./427157.js"),
  Chunk734057 = require("./734057.js"),
  Chunk351906 = require("./351906.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk693737 = require("./693737.js"),
  Chunk506823 = require("./506823.js"),
  Chunk473169 = require("./473169.js");

function S(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = r, e
}

function D(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      S(e, t, r[t])
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
class T extends Chunk64700.PureComponent {
  render() {
    let {
      invite: e,
      hideDiscriminator: t,
      hideInviteCode: r
    } = this.props, s = new A.A(e.inviter);
    return (0, n.jsxs)(f.A, {
      className: o()(E.nM, I.N),
      children: [(0, n.jsxs)(f.A, {
        align: f.A.Align.CENTER,
        className: E.CE,
        children: [(0, n.jsx)(y.A, {
          user: s,
          size: h._3J.SIZE_24,
          className: E.my
        }), (0, n.jsx)(m.A, {
          user: s,
          hideDiscriminator: t,
          usernameClass: E.Xh,
          discriminatorClass: E.OM
        })]
      }), (0, n.jsx)(f.A, {
        align: f.A.Align.CENTER,
        grow: 0,
        shrink: 0,
        basis: 100,
        className: E.Kf,
        children: (0, n.jsx)(h.Text, {
          className: E.aY,
          variant: "text-sm/normal",
          children: r ? "..." : e.code
        })
      }), (0, n.jsxs)(f.A, {
        basis: 100,
        grow: 0,
        shrink: 0,
        align: f.A.Align.CENTER,
        justify: f.A.Justify.END,
        className: E.Kf,
        children: [(0, n.jsx)(h.Text, {
          className: E.qW,
          variant: "text-sm/normal",
          children: (0, n.jsx)(g.A, {
            deadline: e.getExpiresAt(),
            showDays: false
          })
        }), (0, n.jsx)(b.A, {
          className: E.eb,
          onClick: this.handleRevokeInvite
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), S(this, "handleRevokeInvite", () => {
      let {
        onRevoke: e,
        invite: t
      } = this.props;
      null != e && e(t)
    })
  }
}
class M extends Chunk64700.PureComponent {
  componentDidMount() {
    let {
      channelId: e
    } = this.props;
    u.Bo.get({
      url: P.Rsh.INSTANT_INVITES(e),
      retries: 3,
      oldFormErrors: true,
      rejectWithError: true
    }).then(e => {
      let t = e.body.map(e => new v.A(R(D({}, e), {
        maxUses: e.max_uses,
        maxAge: e.max_age,
        createdAt: e.created_at
      })));
      this.setState({
        loading: false,
        invites: t
      })
    }), N.default.track(P.HAw.OPEN_MODAL, R(D({}, (0, j.dI)(w.A.getChannel(e))), {
      type: "Group DM Invites",
      source: "Group DM Menu"
    }))
  }
  renderContent() {
    let {
      loading: e,
      invites: t
    } = this.state, {
      hideDiscriminators: r,
      hideInviteCodes: s
    } = this.props;
    if (e || null == t) return (0, n.jsx)(h.y$y, {
      className: k.QX,
      type: h.y$y.Type.SPINNING_CIRCLE
    });
    if (l().isEmpty(t)) return this.renderEmpty();
    let i = l()(t).sortBy(e => {
      var t;
      return (null != (t = e.inviter.username) ? t : "").toLocaleLowerCase()
    }).value();
    return (0, n.jsxs)(h.XIK, {
      "aria-label": C.intl.string(C.t["9F90ic"]),
      selectionMode: "none",
      children: [(0, n.jsxs)(h.A0N, {
        children: [(0, n.jsx)(h.VeA, {
          children: C.intl.string(C.t.EgHyKy)
        }), (0, n.jsx)(h.VeA, {
          children: C.intl.string(C.t.LBlFEN)
        }), (0, n.jsx)(h.VeA, {
          children: C.intl.string(C.t["1aM27d"])
        })]
      }), (0, n.jsx)(h.BFY, {
        items: i,
        children: e => {
          let t = new A.A(e.inviter);
          return (0, n.jsxs)(h.Hjg, {
            id: e.code,
            children: [(0, n.jsx)(h.nA6, {
              children: (0, n.jsx)(x.A, {
                avatar: (0, n.jsx)(y.A, {
                  user: t,
                  size: h._3J.SIZE_24
                }),
                name: (0, n.jsx)(m.A, {
                  user: t,
                  hideDiscriminator: r,
                  usernameClass: E.Xh,
                  discriminatorClass: E.OM
                })
              })
            }), (0, n.jsx)(h.nA6, {
              children: (0, n.jsx)(h.Text, {
                className: E.aY,
                variant: "text-sm/normal",
                children: s ? "..." : e.code
              })
            }), (0, n.jsx)(h.nA6, {
              children: (0, n.jsxs)(h.BJc, {
                direction: "horizontal",
                align: "center",
                gap: 8,
                children: [(0, n.jsx)(h.Text, {
                  className: E.qW,
                  variant: "text-sm/normal",
                  children: (0, n.jsx)(g.A, {
                    deadline: e.getExpiresAt(),
                    showDays: false
                  })
                }), (0, n.jsx)(h.K0, {
                  size: "sm",
                  "aria-label": C.intl.string(C.t.N86XcP),
                  variant: "critical-secondary",
                  icon: h.ucK,
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
    return (0, n.jsxs)(h.ppr, {
      theme: this.props.theme,
      children: [(0, n.jsx)(h.G8R, {
        darkSrc: r(774125),
        lightSrc: r(151803),
        width: 256,
        height: 130,
        style: {
          marginBottom: 0
        }
      }), (0, n.jsx)(h.SGT, {
        className: k.QX,
        children: C.intl.string(C.t["03/rlQ"])
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
    }).map(r => (0, n.jsx)(T, {
      invite: r,
      hideDiscriminator: e,
      hideInviteCode: t,
      onRevoke: this.handleRevoke
    }, r.code)).value()
  }
  render() {
    let {
      onClose: e,
      transitionState: t
    } = this.props;
    return (0, n.jsx)(p.aFV, {
      title: C.intl.string(C.t["9F90ic"]),
      subtitle: C.intl.string(C.t.WDw38H),
      actions: [{
        text: C.intl.string(C.t.i4jeWR),
        onClick: this.handleClose
      }],
      onClose: e,
      transitionState: t,
      children: this.renderContent()
    })
  }
  constructor(...e) {
    super(...e), S(this, "state", {
      loading: true,
      invites: null
    }), S(this, "handleRevoke", e => {
      d.Ay.revokeInvite(e), this.setState({
        invites: this.state.invites.filter(t => t !== e)
      })
    }), S(this, "handleClose", () => {
      let {
        onClose: e
      } = this.props;
      null == e || e()
    })
  }
}
let K = Chunk311907.Ay.connectStores([Chunk351906.A, Chunk544028.A], () => ({
  hideDiscriminators: _.A.hidePersonalInformation,
  hideInviteCodes: _.A.hideInstantInvites,
  theme: O.A.theme
}))(M)