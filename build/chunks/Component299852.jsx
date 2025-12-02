/** Chunk was on 27978 **/
/** chunk id: 299852, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./35282.js"), require("./388685.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
Chunk442837.ZP.initialize();
class v extends(r = Chunk473749.PureComponent) {
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
      } = e, r = new g.Z(n);
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
    return (0, Chunk54381.jsx)(Chunk388905.ZP, {
      children: (0, Chunk54381.jsx)(Chunk388905.Hh, {})
    })
  }
  renderCategorySuccess(e, t) {
    let {
      defaultRoute: n,
      transitionTo: r
    } = this.props, s = _.intl.formatToPlainString(_.t.YDAohB, {
      category: t
    });
    return (0, i.jsxs)(d.ZP, {
      children: [(0, i.jsx)(d.Dx, {
        className: x.marginBottom8,
        children: _.intl.string(_.t.f6rdLg)
      }), (0, i.jsx)(d.DK, {
        children: s
      }), (0, i.jsx)("div", {
        className: x.marginTop20,
        children: (0, i.jsx)(c.Button, {
          text: _.intl.string(_.t.fIv16B),
          fullWidth: true,
          onClick: () => r(n)
        })
      }), (0, i.jsx)("div", {
        className: x.marginTop8,
        children: (0, i.jsx)(c.Avr, {
          text: _.intl.string(_.t.YYTirT),
          textVariant: "text-sm/normal",
          onClick: () => r(m.Z5c.SETTINGS("notifications", f.vG))
        })
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
    return (0, Chunk54381.jsxs)(Chunk388905.ZP, {
      children: [(0, Chunk54381.jsx)(Chunk388905.qE, {
        src: null == require ? true : require.getAvatarURL(true, 100),
        size: Chunk481060.EFr.DEPRECATED_SIZE_100,
        className: Chunk197571.marginBottom20
      }), (0, Chunk54381.jsx)(Chunk388905.Dx, {
        className: Chunk197571.marginBottom8,
        children: Chunk388032.intl.string(Chunk388032.t["6U6OMQ"])
      }), (0, Chunk54381.jsx)(Chunk388905.DK, {
        children: Chunk388032.intl.string(Chunk388032.t["yaDJ4/"])
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk197571.marginTop40,
        children: (0, Chunk54381.jsx)(Chunk481060.Button, {
          text: Chunk388032.intl.string(Chunk388032.t.fIv16B),
          fullWidth: true,
          onClick: () => exports(module)
        })
      })]
    })
  }
  renderError() {
    let {
      defaultRoute: e,
      transitionTo: t
    } = this.props;
    return (0, Chunk54381.jsxs)(Chunk388905.ZP, {
      children: [(0, Chunk54381.jsx)(Chunk388905.Ee, {
        src: require("./105020.js"),
        className: Chunk197571.marginBottom20
      }), (0, Chunk54381.jsx)(Chunk388905.Dx, {
        className: Chunk197571.marginBottom8,
        children: Chunk388032.intl.string(Chunk388032.t.ox9hIS)
      }), (0, Chunk54381.jsx)(Chunk388905.DK, {
        children: Chunk388032.intl.string(Chunk388032.t["/dcuR5"])
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk197571.marginTop40,
        children: (0, Chunk54381.jsx)(Chunk481060.Button, {
          text: Chunk388032.intl.string(Chunk388032.t.fIv16B),
          fullWidth: true,
          onClick: () => exports(module)
        })
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
    super(...e), E(this, "state", {
      busy: true,
      success: false,
      user: null,
      category: null
    })
  }
}
E(v, "defaultProps", {
  transitionTo: e => n.g.location.assign(e)
});
let b = Chunk442837.ZP.connectStores([Chunk896797.Z], () => ({
  defaultRoute: Chunk896797.Z.defaultRoute
}))(v)