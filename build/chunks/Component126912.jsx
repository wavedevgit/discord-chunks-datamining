/** Chunk was on 86142 **/
/** chunk id: 126912, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => v
}), require("./747238.js"), require("./896048.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk492462 = require("./492462.js"),
  Chunk311907 = require("./311907.js"),
  Chunk562465 = require("./562465.js"),
  Chunk397927 = require("./397927.js"),
  Chunk396681 = require("./396681.js"),
  Chunk854378 = require("./854378.jsx"),
  Chunk210714 = require("./210714.js"),
  Chunk427157 = require("./427157.js"),
  Chunk650048 = require("./650048.js"),
  Chunk652215 = require("./652215.js"),
  Chunk431144 = require("./431144.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk473169 = require("./473169.js");

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
Chunk311907.Ay.initialize();
class E extends(r = Chunk64700.PureComponent) {
  componentDidMount() {
    let e = (0, u.A)(this.props.location),
      t = (0, l.parse)(this.props.location.search);
    o.Bo.post({
      url: m.Rsh.DISABLE_EMAIL_NOTIFICATIONS,
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
      } = e, r = new p.A(n);
      this.setState({
        success: true,
        busy: false,
        user: r,
        category: t.category
      })
    }, () => this.setState({
      success: false,
      busy: false
    })), (0, h.d)("disable_email_notifications")
  }
  renderBusy() {
    return (0, i.jsx)(d.Ay, {
      children: (0, i.jsx)(d.CK, {})
    })
  }
  renderCategorySuccess(e, t) {
    let {
      defaultRoute: n,
      transitionTo: r
    } = this.props, s = _.intl.formatToPlainString(_.t.YDAohB, {
      category: t
    });
    return (0, i.jsxs)(d.Ay, {
      children: [(0, i.jsx)(d.hE, {
        className: A.QB,
        children: _.intl.string(_.t.f6rdLg)
      }), (0, i.jsx)(d.tK, {
        children: s
      }), (0, i.jsx)("div", {
        className: A.QX,
        children: (0, i.jsx)(c.Button, {
          text: _.intl.string(_.t.fIv16B),
          fullWidth: true,
          onClick: () => r(n)
        })
      }), (0, i.jsx)("div", {
        className: A.Ot,
        children: (0, i.jsx)(c.QWc, {
          text: _.intl.string(_.t.YYTirT),
          textVariant: "text-sm/normal",
          onClick: () => r(m.BVt.SETTINGS("notifications", f.oh))
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
      let e = f.px.find(e => e.category === r);
      if (null != e) return this.renderCategorySuccess(r, e.label())
    }
    return (0, i.jsxs)(d.Ay, {
      children: [(0, i.jsx)(d.eu, {
        src: null == n ? true : n.getAvatarURL(true, 100),
        size: c._3J.DEPRECATED_SIZE_100,
        className: A.SX
      }), (0, i.jsx)(d.hE, {
        className: A.QB,
        children: _.intl.string(_.t["6U6OMQ"])
      }), (0, i.jsx)(d.tK, {
        children: _.intl.string(_.t["yaDJ4/"])
      }), (0, i.jsx)("div", {
        className: A.eT,
        children: (0, i.jsx)(c.Button, {
          text: _.intl.string(_.t.fIv16B),
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
    return (0, i.jsxs)(d.Ay, {
      children: [(0, i.jsx)(d._V, {
        src: n(37772),
        className: A.SX
      }), (0, i.jsx)(d.hE, {
        className: A.QB,
        children: _.intl.string(_.t.ox9hIS)
      }), (0, i.jsx)(d.tK, {
        children: _.intl.string(_.t["/dcuR5"])
      }), (0, i.jsx)("div", {
        className: A.eT,
        children: (0, i.jsx)(c.Button, {
          text: _.intl.string(_.t.fIv16B),
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
    super(...e), x(this, "state", {
      busy: true,
      success: false,
      user: null,
      category: null
    })
  }
}
x(E, "defaultProps", {
  transitionTo: e => n.g.location.assign(e)
});
let v = Chunk311907.Ay.connectStores([Chunk650048.A], () => ({
  defaultRoute: g.A.defaultRoute
}))(E)