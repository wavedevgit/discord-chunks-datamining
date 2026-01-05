/** Chunk was on 9414 **/
/** chunk id: 722252, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./415506.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk149765 = require("./149765.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk208884 = require("./208884.js"),
  Chunk453628 = require("./453628.jsx"),
  Chunk996987 = require("./996987.jsx"),
  Chunk156415 = require("./156415.js");
class m extends Chunk473749.PureComponent {
  getOverwriteValue(e) {
    let {
      allow: t,
      deny: n
    } = this.props;
    if (null == t || null == n) throw Error("PermissionsForm.getOverwriteValue: Invalid allow or deny props");
    return l.e$(t, e) ? c.y.ALLOW : l.e$(n, e) ? c.y.DENY : c.y.PASSTHROUGH
  }
  getPermissionValue(e, t) {
    return l.e$(t, e)
  }
  handleChange(e, t) {
    let {
      onChange: n
    } = this.props;
    n(e, t)
  }
  renderDisabledIndicator(e) {
    return (0, i.jsx)(a.u, {
      text: e,
      position: "top",
      children: (0, i.jsx)("span", {
        children: (0, i.jsx)(o.t6m, {
          size: "sm",
          color: "currentColor",
          className: u.icon
        })
      })
    })
  }
  renderComponent(e, t) {
    let {
      title: n,
      description: r,
      flag: l
    } = e, {
      permissions: a,
      locked: c,
      permissionRender: u,
      hasBypassSlowmodePermission: m,
      guildId: b
    } = this.props, p = null == u ? true : u(l), g = !!(c || p), f = "string" == typeof p && "" !== p ? o.t6m : true, h = null == a ? (0, i.jsx)(d.Z, {
      label: n,
      description: (0, s._u)(r),
      icon: f,
      disabled: g,
      value: this.getOverwriteValue(l),
      onChange: e => this.handleChange(l, e)
    }, String(l)) : (0, i.jsx)(o.rsf, {
      label: n,
      description: (0, s._u)(r),
      icon: f,
      disabled: g,
      checked: this.getPermissionValue(l, a),
      onChange: e => this.handleChange(l, e)
    }, String(l)), x = (0, s.ih)(l, m, b);
    return (0, i.jsxs)(i.Fragment, {
      children: [t > 0 && (0, i.jsx)(o.izJ, {}), (0, i.jsxs)(o.Kqy, {
        gap: 8,
        children: [h, null != x && (0, i.jsx)(o.Wn, {
          messageType: o.QYI.WARNING,
          children: x
        }), "string" == typeof p && "" !== p && (0, i.jsx)(o.Text, {
          variant: "text-xs/medium",
          color: "text-feedback-critical",
          children: p
        })]
      })]
    })
  }
  render() {
    var e;
    let {
      spec: t,
      className: n
    } = this.props;
    return (0, Chunk54381.jsx)("div", {
      className: require,
      children: (0, Chunk54381.jsx)(Chunk481060.C3N, {
        label: exports.title,
        description: null != (e = (0, Chunk208884._u)(exports.description)) ? module : true,
        children: exports.permissions.map(this.renderComponent, this)
      })
    })
  }
}
let b = m