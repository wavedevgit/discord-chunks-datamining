/** Chunk was on 27978 **/
n.d(t, {
  Z: () => v
}), n(301563), n(47120);
var r, i = n(200651),
  o = n(192379),
  a = n(593473),
  l = n(442837),
  s = n(544891),
  c = n(481060),
  u = n(129293),
  d = n(388905),
  h = n(108427),
  p = n(598077),
  g = n(896797),
  _ = n(981631),
  m = n(930441),
  f = n(388032),
  b = n(455812);

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
l.ZP.initialize();
class x extends(r = o.PureComponent) {
  componentDidMount() {
    let e = (0, u.Z)(this.props.location),
      t = (0, a.parse)(this.props.location.search);
    s.tn.post({
      url: _.ANM.DISABLE_EMAIL_NOTIFICATIONS,
      body: {
        token: e,
        pixel_uuid: t.hash,
        category: t.category,
        email_type: t.email_type
      },
      oldFormErrors: !0,
      rejectWithError: !0
    }).then(e => {
      let {
        body: {
          user: n
        }
      } = e, r = new p.Z(n);
      this.setState({
        success: !0,
        busy: !1,
        user: r,
        category: t.category
      })
    }, () => this.setState({
      success: !1,
      busy: !1
    })), (0, h.e)("disable_email_notifications")
  }
  renderBusy() {
    return (0, i.jsx)(d.ZP, {
      children: (0, i.jsx)(d.Hh, {})
    })
  }
  renderCategorySuccess(e, t) {
    let {
      defaultRoute: n,
      transitionTo: r
    } = this.props, o = f.NW.formatToPlainString(f.t.YDAohI, {
      category: t
    });
    return (0, i.jsxs)(d.ZP, {
      children: [(0, i.jsx)(d.Dx, {
        className: b.marginBottom8,
        children: f.NW.string(f.t.f6rdLi)
      }), (0, i.jsx)(d.DK, {
        children: o
      }), (0, i.jsx)(d.zx, {
        className: b.marginTop20,
        onClick: () => r(n),
        children: f.NW.string(f.t.fIv16O)
      }), (0, i.jsx)(d.zx, {
        className: b.marginTop8,
        color: d.zx.Colors.LINK,
        look: d.zx.Looks.LINK,
        onClick: () => r(_.Z5c.SETTINGS("notifications", m.vG)),
        children: f.NW.string(f.t.YYTira)
      })]
    })
  }
  renderSuccess() {
    let {
      defaultRoute: e,
      transitionTo: t
    } = this.props, {
      user: n,
      category: r
    } = this.state;
    if (null != r) {
      let e = m.Od.find(e => e.category === r);
      if (null != e) return this.renderCategorySuccess(r, e.label())
    }
    return (0, i.jsxs)(d.ZP, {
      children: [(0, i.jsx)(d.qE, {
        src: null == n ? void 0 : n.getAvatarURL(void 0, 100),
        size: c.EFr.DEPRECATED_SIZE_100,
        className: b.marginBottom20
      }), (0, i.jsx)(d.Dx, {
        className: b.marginBottom8,
        children: f.NW.string(f.t["6U6OMT"])
      }), (0, i.jsx)(d.DK, {
        children: f.NW.string(f.t["yaDJ4+"])
      }), (0, i.jsx)(d.zx, {
        className: b.marginTop40,
        onClick: () => t(e),
        children: f.NW.string(f.t.fIv16O)
      })]
    })
  }
  renderError() {
    let {
      defaultRoute: e,
      transitionTo: t
    } = this.props;
    return (0, i.jsxs)(d.ZP, {
      children: [(0, i.jsx)(d.Ee, {
        src: n(105020),
        className: b.marginBottom20
      }), (0, i.jsx)(d.Dx, {
        className: b.marginBottom8,
        children: f.NW.string(f.t.ox9hIS)
      }), (0, i.jsx)(d.DK, {
        children: f.NW.string(f.t["/dcuR0"])
      }), (0, i.jsx)(d.zx, {
        className: b.marginTop40,
        onClick: () => t(e),
        children: f.NW.string(f.t.fIv16O)
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
    super(...e), N(this, "state", {
      busy: !0,
      success: !1,
      user: null,
      category: null
    })
  }
}
N(x, "defaultProps", {
  transitionTo: e => n.g.location.assign(e)
});
let v = l.ZP.connectStores([g.Z], () => ({
  defaultRoute: g.Z.defaultRoute
}))(x)