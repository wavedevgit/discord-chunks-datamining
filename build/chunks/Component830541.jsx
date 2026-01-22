/** Chunk was on 48574 **/
/** chunk id: 830541, original params: e,t,s (module,exports,require) **/
require.d(exports, {
  default: () => B
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  o = require.n(Chunk735438),
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

function D(e, t, s) {
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
      r = Object.keys(s);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(s).filter(function(e) {
      return Object.getOwnPropertyDescriptor(s, e).enumerable
    }))), r.forEach(function(t) {
      D(e, t, s[t])
    })
  }
  return e
}

function R(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var s = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      s.push.apply(s, r)
    }
    return s
  })(Object(t)).forEach(function(s) {
    Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(t, s))
  }), e
}
class M extends Chunk64700.PureComponent {
  render() {
    let {
      invite: e,
      hideDiscriminator: t,
      hideInviteCode: s
    } = this.props, n = new C.A(e.inviter);
    return (0, r.jsxs)(A.A, {
      className: a()(I.nM, _.N),
      children: [(0, r.jsxs)(A.A, {
        align: A.A.Align.CENTER,
        className: I.CE,
        children: [(0, r.jsx)(x.A, {
          user: n,
          size: u._3J.SIZE_24,
          className: I.my
        }), (0, r.jsx)(b.A, {
          user: n,
          hideDiscriminator: t,
          usernameClass: I.Xh,
          discriminatorClass: I.OM
        })]
      }), (0, r.jsx)(A.A, {
        align: A.A.Align.CENTER,
        grow: 0,
        shrink: 0,
        basis: 100,
        className: I.Kf,
        children: (0, r.jsx)(u.Text, {
          className: I.aY,
          variant: "text-sm/normal",
          children: s ? "..." : e.code
        })
      }), (0, r.jsxs)(A.A, {
        basis: 100,
        grow: 0,
        shrink: 0,
        align: A.A.Align.CENTER,
        justify: A.A.Justify.END,
        className: I.Kf,
        children: [(0, r.jsx)(u.Text, {
          className: I.qW,
          variant: "text-sm/normal",
          children: (0, r.jsx)(g.A, {
            deadline: e.getExpiresAt(),
            showDays: false
          })
        }), (0, r.jsx)(m.A, {
          className: I.eb,
          onClick: this.handleRevokeInvite
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), D(this, "handleRevokeInvite", () => {
      let {
        onRevoke: e,
        invite: t
      } = this.props;
      null != e && e(t)
    })
  }
}
class T extends Chunk64700.PureComponent {
  componentDidMount() {
    let {
      channelId: e
    } = this.props;
    d.Bo.get({
      url: w.Rsh.INSTANT_INVITES(e),
      retries: 3,
      oldFormErrors: true,
      rejectWithError: true
    }).then(e => {
      let t = e.body.map(e => new v.A(R(S({}, e), {
        maxUses: e.max_uses,
        maxAge: e.max_age,
        createdAt: e.created_at
      })));
      this.setState({
        loading: false,
        invites: t
      })
    }), E.default.track(w.HAw.OPEN_MODAL, R(S({}, (0, j.dI)(N.A.getChannel(e))), {
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
      hideInviteCodes: n
    } = this.props;
    if (e || null == t) return (0, r.jsx)(u.y$y, {
      className: P.QX,
      type: u.y$y.Type.SPINNING_CIRCLE
    });
    if (o().isEmpty(t)) return this.renderEmpty();
    let i = o()(t).sortBy(e => {
      var t;
      return (null != (t = e.inviter.username) ? t : "").toLocaleLowerCase()
    }).value();
    return (0, r.jsxs)(u.XIK, {
      "aria-label": k.intl.string(k.t["9F90ic"]),
      selectionMode: "none",
      children: [(0, r.jsxs)(u.A0N, {
        children: [(0, r.jsx)(u.VeA, {
          children: k.intl.string(k.t.EgHyKy)
        }), (0, r.jsx)(u.VeA, {
          children: k.intl.string(k.t.LBlFEN)
        }), (0, r.jsx)(u.VeA, {
          children: k.intl.string(k.t["1aM27d"])
        })]
      }), (0, r.jsx)(u.BFY, {
        items: i,
        children: e => {
          let t = new C.A(e.inviter);
          return (0, r.jsxs)(u.Hjg, {
            id: e.code,
            children: [(0, r.jsx)(u.nA6, {
              children: (0, r.jsx)(f.A, {
                avatar: (0, r.jsx)(x.A, {
                  user: t,
                  size: u._3J.SIZE_24
                }),
                name: (0, r.jsx)(b.A, {
                  user: t,
                  hideDiscriminator: s,
                  usernameClass: I.Xh,
                  discriminatorClass: I.OM
                })
              })
            }), (0, r.jsx)(u.nA6, {
              children: (0, r.jsx)(u.Text, {
                className: I.aY,
                variant: "text-sm/normal",
                children: n ? "..." : e.code
              })
            }), (0, r.jsx)(u.nA6, {
              children: (0, r.jsxs)(u.BJc, {
                direction: "horizontal",
                align: "center",
                gap: 8,
                children: [(0, r.jsx)(u.Text, {
                  className: I.qW,
                  variant: "text-sm/normal",
                  children: (0, r.jsx)(g.A, {
                    deadline: e.getExpiresAt(),
                    showDays: false
                  })
                }), (0, r.jsx)(u.K0, {
                  size: "sm",
                  "aria-label": k.intl.string(k.t.N86XcP),
                  variant: "critical-secondary",
                  icon: u.ucK,
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
    return (0, r.jsxs)(u.ppr, {
      theme: this.props.theme,
      children: [(0, r.jsx)(u.G8R, {
        darkSrc: s(774125),
        lightSrc: s(151803),
        width: 256,
        height: 130,
        style: {
          marginBottom: 0
        }
      }), (0, r.jsx)(u.SGT, {
        className: P.QX,
        children: k.intl.string(k.t["03/rlQ"])
      })]
    })
  }
  renderInvites() {
    let {
      hideDiscriminators: e,
      hideInviteCodes: t
    } = this.props;
    return o()(this.state.invites).sortBy(e => {
      var t;
      return (null != (t = e.inviter.username) ? t : "").toLocaleLowerCase()
    }).map(s => (0, r.jsx)(M, {
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
    return (0, r.jsx)(h.aFV, {
      title: k.intl.string(k.t["9F90ic"]),
      subtitle: k.intl.string(k.t.WDw38H),
      actions: [{
        text: k.intl.string(k.t.i4jeWR),
        onClick: this.handleClose
      }],
      onClose: e,
      transitionState: t,
      children: this.renderContent()
    })
  }
  constructor(...e) {
    super(...e), D(this, "state", {
      loading: true,
      invites: null
    }), D(this, "handleRevoke", e => {
      p.Ay.revokeInvite(e), this.setState({
        invites: this.state.invites.filter(t => t !== e)
      })
    }), D(this, "handleClose", () => {
      let {
        onClose: e
      } = this.props;
      null == e || e()
    })
  }
}
let B = Chunk311907.Ay.connectStores([Chunk351906.A, Chunk544028.A], () => ({
  hideDiscriminators: O.A.hidePersonalInformation,
  hideInviteCodes: O.A.hideInstantInvites,
  theme: y.A.theme
}))(T)