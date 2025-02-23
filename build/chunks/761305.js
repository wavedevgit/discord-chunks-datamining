/** Chunk was on 27978 (f779563f0d0d4e3d.js) **/
n.d(t, {
  Z: () => N
}), n(301563), n(47120);
var r, i = n(200651),
  o = n(192379),
  a = n(593473),
  l = n(442837),
  s = n(544891),
  c = n(108427),
  u = n(601964),
  d = n(896797),
  h = n(129293),
  p = n(388905),
  g = n(981631),
  _ = n(388032),
  m = n(455812);

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
l.ZP.initialize();
class b extends(r = o.PureComponent) {
  componentDidMount() {
    let e = (0, h.Z)(this.props.location),
      t = (0, a.parse)(this.props.location.search);
    s.tn.post({
      url: g.ANM.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
      body: {
        token: e,
        pixel_uuid: t.hash,
        guild_id: t.guild_id
      },
      oldFormErrors: !0,
      rejectWithError: !0
    }).then(e => {
      let {
        body: {
          guild: t
        }
      } = e, n = new u.ZP(t);
      this.setState({
        success: !0,
        busy: !1,
        guild: n
      })
    }, () => this.setState({
      success: !1,
      busy: !1
    })), (0, c.e)("disable_server_highlight_notifications")
  }
  renderBusy() {
    return (0, i.jsx)(p.ZP, {
      children: (0, i.jsx)(p.Hh, {})
    })
  }
  renderSuccess() {
    let {
      defaultRoute: e,
      transitionTo: t
    } = this.props, {
      guild: n
    } = this.state;
    return (0, i.jsxs)(p.ZP, {
      children: [(0, i.jsx)(p.Dx, {
        className: m.marginBottom8,
        children: _.NW.string(_.t.Z33eiI)
      }), (0, i.jsx)(p.DK, {
        children: _.NW.format(_.t.NRWtfH, {
          guildName: n.name
        })
      }), (0, i.jsx)(p.zx, {
        className: m.marginTop40,
        onClick: () => t(e),
        children: _.NW.string(_.t.fIv16O)
      }), (0, i.jsx)(p.zx, {
        className: m.marginTop8,
        color: p.zx.Colors.LINK,
        look: p.zx.Looks.LINK,
        onClick: () => {
          t(g.Z5c.USER_GUILD_NOTIFICATION_SETTINGS(n.id))
        },
        children: _.NW.string(_.t["cGmT/P"])
      })]
    })
  }
  renderError() {
    let {
      defaultRoute: e,
      transitionTo: t
    } = this.props;
    return (0, i.jsxs)(p.ZP, {
      children: [(0, i.jsx)(p.Ee, {
        src: n(105020),
        className: m.marginBottom20
      }), (0, i.jsx)(p.Dx, {
        className: m.marginBottom8,
        children: _.NW.string(_.t.ox9hIS)
      }), (0, i.jsx)(p.DK, {
        children: _.NW.string(_.t["/dcuR0"])
      }), (0, i.jsx)(p.zx, {
        className: m.marginTop40,
        onClick: () => t(e),
        children: _.NW.string(_.t.fIv16O)
      })]
    })
  }
  render() {
    let {
      busy: e,
      success: t
    } = this.state;
    return e ? this.renderBusy() : t ? this.renderSuccess() : this.renderError()
  }
  constructor(...e) {
    super(...e), f(this, "state", {
      busy: !0,
      success: !1,
      guild: null
    })
  }
}
f(b, "defaultProps", {
  transitionTo: e => n.g.location.assign(e)
});
let N = l.ZP.connectStores([d.Z], () => ({
  defaultRoute: d.Z.defaultRoute
}))(b)