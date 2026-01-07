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
  Chunk478411 = require("./478411.js");

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
    let e = (0, u.Z)(this.props.location),
      t = (0, a.parse)(this.props.location.search);
    o.tn.post({
      url: m.ANM.DISABLE_EMAIL_NOTIFICATIONS,
      body: {
        token: e,
        pixel_uuid: t.hash,
        category: t.category,
        email_type: t.email_type
      },
      oldFormErrors: true,
      rejectWithError: true
    }).then(e => {
      let {
        body: {
          user: n
        }
      } = e, r = new f.Z(n);
      this.setState({
        success: true,
        busy: false,
        user: r,
        category: t.category
      })
    }, () => this.setState({
      success: false,
      busy: false
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
    } = this.props, s = x.intl.formatToPlainString(x.t.YDAohB, {
      category: t
    });
    return (0, i.jsxs)(d.ZP, {
      children: [(0, i.jsx)(d.Dx, {
        className: _.marginBottom8,
        children: x.intl.string(x.t.f6rdLg)
      }), (0, i.jsx)(d.DK, {
        children: s
      }), (0, i.jsx)("div", {
        className: _.marginTop20,
        children: (0, i.jsx)(c.Button, {
          text: x.intl.string(x.t.fIv16B),
          fullWidth: true,
          onClick: () => r(n)
        })
      }), (0, i.jsx)("div", {
        className: _.marginTop8,
        children: (0, i.jsx)(c.Avr, {
          text: x.intl.string(x.t.YYTirT),
          textVariant: "text-sm/normal",
          onClick: () => r(m.Z5c.SETTINGS("notifications", p.vG))
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
      let e = p.Od.find(e => e.category === r);
      if (null != e) return this.renderCategorySuccess(r, e.label())
    }
    return (0, i.jsxs)(d.ZP, {
      children: [(0, i.jsx)(d.qE, {
        src: null == n ? true : n.getAvatarURL(true, 100),
        size: c.EFr.DEPRECATED_SIZE_100,
        className: _.marginBottom20
      }), (0, i.jsx)(d.Dx, {
        className: _.marginBottom8,
        children: x.intl.string(x.t["6U6OMQ"])
      }), (0, i.jsx)(d.DK, {
        children: x.intl.string(x.t["yaDJ4/"])
      }), (0, i.jsx)("div", {
        className: _.marginTop40,
        children: (0, i.jsx)(c.Button, {
          text: x.intl.string(x.t.fIv16B),
          fullWidth: true,
          onClick: () => t(e)
        })
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
        className: _.marginBottom20
      }), (0, i.jsx)(d.Dx, {
        className: _.marginBottom8,
        children: x.intl.string(x.t.ox9hIS)
      }), (0, i.jsx)(d.DK, {
        children: x.intl.string(x.t["/dcuR5"])
      }), (0, i.jsx)("div", {
        className: _.marginTop40,
        children: (0, i.jsx)(c.Button, {
          text: x.intl.string(x.t.fIv16B),
          fullWidth: true,
          onClick: () => t(e)
        })
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
  defaultRoute: g.Z.defaultRoute
}))(v)