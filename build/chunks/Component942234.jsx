/** Chunk was on 21968 **/
/** chunk id: 942234, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
}), require("./65821.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk136722 = require("./136722.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk225419 = require("./225419.js"),
  Chunk268199 = require("./268199.jsx"),
  Chunk90430 = require("./90430.jsx"),
  Chunk644020 = require("./644020.js");
class p extends Chunk64700.PureComponent {
  getOverwriteValue(e) {
    let {
      allow: t,
      deny: n
    } = this.props;
    if (null == t || null == n) throw Error("PermissionsForm.getOverwriteValue: Invalid allow or deny props");
    return l.zy(t, e) ? c.A.ALLOW : l.zy(n, e) ? c.A.DENY : c.A.PASSTHROUGH
  }
  getPermissionValue(e, t) {
    return l.zy(t, e)
  }
  handleChange(e, t) {
    let {
      onChange: n
    } = this.props;
    n(e, t)
  }
  renderDisabledIndicator(e) {
    return (0, i.jsx)(a.m_, {
      text: e,
      position: "top",
      children: (0, i.jsx)("span", {
        children: (0, i.jsx)(s.KTN, {
          size: "sm",
          color: "currentColor",
          className: u.Kk
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
      guildId: p
    } = this.props, m = null == u ? true : u(l), g = !!(c || m), b = "string" == typeof m && "" !== m ? s.KTN : true, f = null == a ? (0, i.jsx)(d.A, {
      label: n,
      description: (0, o.Nk)(r),
      icon: b,
      disabled: g,
      value: this.getOverwriteValue(l),
      onChange: e => this.handleChange(l, e)
    }, String(l)) : (0, i.jsx)(s.dOG, {
      label: n,
      description: (0, o.Nk)(r),
      icon: b,
      disabled: g,
      checked: this.getPermissionValue(l, a),
      onChange: e => this.handleChange(l, e)
    }, String(l)), h = (0, o.x3)(l, p);
    return (0, i.jsxs)(i.Fragment, {
      children: [t > 0 && (0, i.jsx)(s.cGx, {}), (0, i.jsxs)(s.BJc, {
        gap: 8,
        children: [f, null != h && (0, i.jsx)(s.po8, {
          messageType: s.YCn.WARNING,
          children: h
        }), "string" == typeof m && "" !== m && (0, i.jsx)(s.Text, {
          variant: "text-xs/medium",
          color: "text-feedback-critical",
          children: m
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
    return (0, i.jsx)("div", {
      className: n,
      children: (0, i.jsx)(s.nVY, {
        label: t.title,
        description: null != (e = (0, o.Nk)(t.description)) ? e : true,
        children: t.permissions.map(this.renderComponent, this)
      })
    })
  }
}
let m = p