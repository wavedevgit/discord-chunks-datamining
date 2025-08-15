/** Chunk was on 27978 **/
/** chunk id: 299852, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./35282.js"), require("./388685.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk593473 = require("./593473.js"),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk481060 = require("./481060.js"),
  Chunk129293 = require("./129293.js"),
  Chunk388905 = require("./388905.jsx"),
  Chunk108427 = require("./108427.js"),
  Chunk598077 = require("./598077.js"),
  Chunk896797 = require("./896797.js"),
  Chunk981631 = require("./981631.js"),
  Chunk930441 = require("./930441.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk197571 = require("./197571.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
Chunk442837.ZP.initialize();
class v extends(r = Chunk647438.PureComponent) {
  componentDidMount() {
    let e = (0, Chunk129293.Z)(this.props.location),
      t = (0, Chunk593473.parse)(this.props.location.search);
    Chunk544891.tn.post({
      url: Chunk981631.ANM.DISABLE_EMAIL_NOTIFICATIONS,
      body: {
        token: module,
        pixel_uuid: exports.hash,
        category: exports.category,
        email_type: exports.email_type
      },
      oldFormErrors: true,
      rejectWithError: true
    }).then(e => {
      let {
        body: {
          user: n
        }
      } = e, r = new p.Z(n);
      this.setState({
        success: true,
        busy: false,
        user: r,
        category: t.category
      })
    }, () => this.setState({
      success: false,
      busy: false
    })), (0, Chunk108427.e)("disable_email_notifications")
  }
  renderBusy() {
    return (0, Chunk951288.jsx)(Chunk388905.ZP, {
      children: (0, Chunk951288.jsx)(Chunk388905.Hh, {})
    })
  }
  renderCategorySuccess(e, t) {
    let {
      defaultRoute: n,
      transitionTo: r
    } = this.props, l = _.intl.formatToPlainString(_.t.YDAohI, {
      category: t
    });
    return (0, i.jsxs)(d.ZP, {
      children: [(0, i.jsx)(d.Dx, {
        className: x.marginBottom8,
        children: _.intl.string(_.t.f6rdLi)
      }), (0, i.jsx)(d.DK, {
        children: l
      }), (0, i.jsx)(d.zx, {
        className: x.marginTop20,
        onClick: () => r(n),
        children: _.intl.string(_.t.fIv16O)
      }), (0, i.jsx)(d.zx, {
        className: x.marginTop8,
        color: d.zx.Colors.LINK,
        look: d.zx.Looks.LINK,
        onClick: () => r(g.Z5c.SETTINGS("notifications", f.vG)),
        children: _.intl.string(_.t.YYTira)
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
      let e = Chunk930441.Od.find(e => e.category === r);
      if (null != module) return this.renderCategorySuccess(r, module.label())
    }
    return (0, Chunk951288.jsxs)(Chunk388905.ZP, {
      children: [(0, Chunk951288.jsx)(Chunk388905.qE, {
        src: null == require ? true : require.getAvatarURL(true, 100),
        size: Chunk481060.EFr.DEPRECATED_SIZE_100,
        className: Chunk197571.marginBottom20
      }), (0, Chunk951288.jsx)(Chunk388905.Dx, {
        className: Chunk197571.marginBottom8,
        children: Chunk388032.intl.string(Chunk388032.t["6U6OMT"])
      }), (0, Chunk951288.jsx)(Chunk388905.DK, {
        children: Chunk388032.intl.string(Chunk388032.t["yaDJ4+"])
      }), (0, Chunk951288.jsx)(Chunk388905.zx, {
        className: Chunk197571.marginTop40,
        onClick: () => exports(module),
        children: Chunk388032.intl.string(Chunk388032.t.fIv16O)
      })]
    })
  }
  renderError() {
    let {
      defaultRoute: e,
      transitionTo: t
    } = this.props;
    return (0, Chunk951288.jsxs)(Chunk388905.ZP, {
      children: [(0, Chunk951288.jsx)(Chunk388905.Ee, {
        src: require("./105020.js"),
        className: Chunk197571.marginBottom20
      }), (0, Chunk951288.jsx)(Chunk388905.Dx, {
        className: Chunk197571.marginBottom8,
        children: Chunk388032.intl.string(Chunk388032.t.ox9hIS)
      }), (0, Chunk951288.jsx)(Chunk388905.DK, {
        children: Chunk388032.intl.string(Chunk388032.t["/dcuR0"])
      }), (0, Chunk951288.jsx)(Chunk388905.zx, {
        className: Chunk197571.marginTop40,
        onClick: () => exports(module),
        children: Chunk388032.intl.string(Chunk388032.t.fIv16O)
      })]
    })
  }
  render() {
    let {
      busy: e,
      success: t
    } = this.state;
    return module ? this.renderBusy() : exports ? this.renderSuccess() : this.renderError()
  }
  constructor(...e) {
    super(...e), b(this, "state", {
      busy: true,
      success: false,
      user: null,
      category: null
    })
  }
}
b(v, "defaultProps", {
  transitionTo: e => n.g.location.assign(e)
});
let E = Chunk442837.ZP.connectStores([Chunk896797.Z], () => ({
  defaultRoute: Chunk896797.Z.defaultRoute
}))(v)