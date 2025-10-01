/** Chunk was on 98039 **/
/** chunk id: 144991, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./415506.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk149765 = require("./149765.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk208884 = require("./208884.js"),
  Chunk453628 = require("./453628.jsx"),
  Chunk996987 = require("./996987.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk413388 = require("./413388.js"),
  Chunk10198 = require("./10198.js");
class h extends Chunk647438.PureComponent {
  getOverwriteValue(e) {
    let {
      allow: t,
      deny: n
    } = this.props;
    if (null == t || null == n) throw Error("PermissionsForm.getOverwriteValue: Invalid allow or deny props");
    return o.e$(t, e) ? u.y.ALLOW : o.e$(n, e) ? u.y.DENY : u.y.PASSTHROUGH
  }
  getPermissionValue(e, t) {
    return o.e$(t, e)
  }
  handleChange(e, t) {
    let {
      onChange: n
    } = this.props;
    n(e, t)
  }
  renderDisabledIndicator(e) {
    return (0, i.jsx)(c.ua7, {
      text: e,
      position: "top",
      color: c.ua7.Colors.RED,
      children: e => {
        var t, n;
        return (0, i.jsx)("span", (t = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), i.forEach(function(t) {
              var i;
              i = n[t], t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = i
            })
          }
          return e
        }({}, e), n = n = {
          children: (0, i.jsx)(c.t6m, {
            size: "sm",
            color: "currentColor",
            className: g.icon
          })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
          }
          return n
        })(Object(n)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t))
      }
    })
  }
  renderTitleAccessory(e) {
    return e === m.Pl.MANAGE_MESSAGES ? (0, i.jsx)("div", {
      className: g.accessory,
      children: (0, i.jsx)(s.u, {
        asContainer: true,
        text: b.intl.string(b.t["2XIdPj"]),
        children: (0, i.jsx)(c.aNP, {
          color: c.TVs.colors.STATUS_WARNING
        })
      })
    }) : null
  }
  renderComponent(e) {
    let {
      title: t,
      description: n,
      helpdeskArticleId: r,
      flag: l
    } = e, {
      permissions: o,
      locked: s,
      permissionRender: u
    } = this.props, m = null == u ? true : u(l), b = !!(s || m), f = "string" == typeof m ? this.renderDisabledIndicator(m) : null, h = a()({
      [g.title]: null != f
    });
    return null == o ? (0, i.jsxs)(p.Z, {
      disabled: b,
      value: this.getOverwriteValue(l),
      onChange: e => this.handleChange(l, e),
      note: (0, d._u)(n),
      helpdeskArticleId: r,
      children: [f, (0, i.jsx)("span", {
        className: h,
        children: t
      }), this.renderTitleAccessory(l)]
    }, String(l)) : (0, i.jsxs)(c.j7V, {
      disabled: b,
      value: this.getPermissionValue(l, o),
      onChange: e => this.handleChange(l, e),
      note: (0, d._u)(n),
      children: [f, (0, i.jsx)("span", {
        className: h,
        children: t
      }), this.renderTitleAccessory(l)]
    }, String(l))
  }
  render() {
    let {
      spec: e,
      className: t
    } = this.props;
    return (0, Chunk951288.jsx)(Chunk481060.hjN, {
      className: exports,
      children: (0, Chunk951288.jsxs)(Chunk481060.y5t, {
        component: (0, Chunk951288.jsx)(Chunk481060.vwX, {
          className: null != module.description ? Chunk10198.marginBottom8 : Chunk10198.marginBottom20,
          children: module.title
        }),
        children: [null != module.description && (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          className: Chunk10198.marginBottom20,
          children: module.description
        }), module.permissions.map(this.renderComponent, this)]
      })
    })
  }
}
let x = h