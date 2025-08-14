/** Chunk was on 58511 **/
/** chunk id: 144991, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./415506.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk149765 = require("./149765.js"),
  Chunk481060 = require("./481060.js"),
  Chunk208884 = require("./208884.js"),
  Chunk453628 = require("./453628.jsx"),
  Chunk996987 = require("./996987.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk557806 = require("./557806.js"),
  Chunk197571 = require("./197571.js");
class f extends Chunk73800.PureComponent {
  getOverwriteValue(e) {
    let {
      allow: t,
      deny: n
    } = this.props;
    if (null == t || null == n) throw Error("PermissionsForm.getOverwriteValue: Invalid allow or deny props");
    return a.e$(t, e) ? d.y.ALLOW : a.e$(n, e) ? d.y.DENY : d.y.PASSTHROUGH
  }
  getPermissionValue(e, t) {
    return a.e$(t, e)
  }
  handleChange(e, t) {
    let {
      onChange: n
    } = this.props;
    n(e, t)
  }
  renderDisabledIndicator(e) {
    return (0, i.jsx)(s.ua7, {
      text: e,
      position: "top",
      color: s.ua7.Colors.RED,
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
          children: (0, i.jsx)(s.t6m, {
            size: "sm",
            color: "currentColor",
            className: b.icon
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
  renderTitleAccessory(e, t) {
    return e === p.Pl.MANAGE_MESSAGES && t ? (0, i.jsx)(s.DY3, {
      text: m.intl.string(m.t["2XIdPj"]),
      className: b.accessory,
      children: (0, i.jsx)(s.aNP, {
        color: s.TVs.colors.STATUS_WARNING
      })
    }) : null
  }
  renderComponent(e) {
    var t;
    let {
      title: n,
      description: r,
      helpdeskArticleId: l,
      flag: a
    } = e, {
      permissions: d,
      locked: p,
      permissionRender: m
    } = this.props, g = null != (t = this.props.inPinPermissionExperiment) && t, f = null == m ? true : m(a), h = !!(p || f), x = "string" == typeof f ? this.renderDisabledIndicator(f) : null, j = o()({
      [b.title]: null != x
    });
    return null == d ? (0, i.jsxs)(u.Z, {
      disabled: h,
      value: this.getOverwriteValue(a),
      onChange: e => this.handleChange(a, e),
      note: (0, c._u)(r),
      helpdeskArticleId: l,
      children: [x, (0, i.jsx)("span", {
        className: j,
        children: n
      }), this.renderTitleAccessory(a, g)]
    }, String(a)) : (0, i.jsxs)(s.j7V, {
      disabled: h,
      value: this.getPermissionValue(a, d),
      onChange: e => this.handleChange(a, e),
      note: (0, c._u)(r),
      children: [x, (0, i.jsx)("span", {
        className: j,
        children: n
      }), this.renderTitleAccessory(a, g)]
    }, String(a))
  }
  render() {
    let {
      spec: e,
      className: t
    } = this.props;
    return (0, Chunk255367.jsx)(Chunk481060.hjN, {
      className: exports,
      children: (0, Chunk255367.jsxs)(Chunk481060.y5t, {
        component: (0, Chunk255367.jsx)(Chunk481060.vwX, {
          tag: Chunk481060.RB0.H5,
          className: null != module.description ? Chunk197571.marginBottom8 : Chunk197571.marginBottom20,
          children: module.title
        }),
        children: [null != module.description && (0, Chunk255367.jsx)(Chunk481060.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          className: Chunk197571.marginBottom20,
          children: module.description
        }), module.permissions.map(this.renderComponent, this)]
      })
    })
  }
}
let h = f