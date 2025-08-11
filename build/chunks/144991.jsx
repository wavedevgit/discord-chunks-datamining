/** Chunk was on 13616 **/
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
  Chunk453628 = require("./453628.js"),
  Chunk996987 = require("./996987.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.js"),
  Chunk326946 = require("./326946.js"),
  Chunk20493 = require("./20493.js");
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
    return <s.ua7 text={e} position={"top"} color={s.ua7.Colors.RED}>{e => {
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
      }}</s.ua7>
  }
  renderTitleAccessory(e, t) {
    return e === p.Pl.MANAGE_MESSAGES && t ? <s.DY3 text={m.intl.string(m.t["2XIdPj"])} className={b.accessory}><s.aNP color={s.TVs.colors.STATUS_WARNING} /></s.DY3> : null
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
    return null == d ? <u.Z disabled={h} value={this.getOverwriteValue(a)} onChange={e => this.handleChange(a, e)} note={(0, c._u)(r)} helpdeskArticleId={l}>{x}{<span className={j}>{n}</span>}{this.renderTitleAccessory(a, g)}</u.Z> : <s.j7V disabled={h} value={this.getPermissionValue(a, d)} onChange={e => this.handleChange(a, e)} note={(0, c._u)(r)}>{x}{<span className={j}>{n}</span>}{this.renderTitleAccessory(a, g)}</s.j7V>
  }
  render() {
    let {
      spec: e,
      className: t
    } = this.props;
    return <Chunk481060.hjN className={exports}><Chunk481060.y5t component={(0, Chunk255367.jsx)(Chunk481060.vwX, {
          tag: Chunk481060.RB0.H5,
          className: null != module.description ? Chunk20493.marginBottom8 : Chunk20493.marginBottom20,
          children: module.title
        })}>{null != module.description && <Chunk481060.Text variant={"text-sm/normal"} color={"header-secondary"} className={Chunk20493.marginBottom20}>{module.description}</Chunk481060.Text>}{module.permissions.map(this.renderComponent, this)}</Chunk481060.y5t></Chunk481060.hjN>
  }
}
let h = f