/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  Z: () => g
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(481060),
  l = n(600164),
  c = n(251127);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = h(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
class m extends i.PureComponent {
  componentDidUpdate(e) {
    if (this.props.formError !== e.formError) this.setState({
      changedSinceError: new Set
    });
    else if (null != this.props.formError) {
      let {
        changedSinceError: t
      } = this.state;
      this.getChangedValues(e).forEach(e => t.add(e)), this.setState({
        changedSinceError: t
      })
    }
  }
  getChangedValues(e) {
    let {
      values: t
    } = this.props, {
      values: n
    } = e;
    return Object.keys(t).filter(e => t[e] !== n[e])
  }
  getError(e) {
    let {
      errors: t,
      formError: n
    } = this.props;
    return null != t[e] ? t[e] : null == n || this.state.changedSinceError.has(e) ? null : n.getFieldMessage(e)
  }
  render() {
    let {
      form: e,
      className: t
    } = this.props, n = e.map(this.renderFormRow);
    return (0, r.jsx)("div", {
      className: t,
      children: n
    })
  }
  constructor(...e) {
    super(...e), u(this, "state", {
      changedSinceError: new Set
    }), u(this, "renderFormSection", e => {
      let t = this.props,
        {
          values: n,
          onFieldChange: i,
          onFieldFocus: o,
          onFieldBlur: l,
          layout: c
        } = t,
        u = _(t, ["values", "onFieldChange", "onFieldFocus", "onFieldBlur", "layout"]),
        {
          getClassNameForLayout: f,
          renderInput: h,
          title: m,
          name: g,
          id: E,
          placeholder: v
        } = e,
        b = p(d({}, _(e, ["getClassNameForLayout", "renderInput", "title", "name", "id", "placeholder"])), {
          placeholder: null == v ? void 0 : v(),
          layout: c,
          error: this.getError(g),
          value: n[g],
          name: g,
          "aria-labelledby": E,
          onChange: i,
          onFocus: o,
          onBlur: l
        });
      return (0, r.jsx)(s.hjN, {
        className: a()(null == f ? void 0 : f(c)),
        title: m(),
        titleId: E,
        children: h(b, u)
      }, g)
    }), u(this, "renderFormRow", e => {
      let t = e.fields.map(this.renderFormSection);
      return (0, r.jsx)(l.Z, {
        className: a()(c.row, e.className),
        children: t
      }, e.fields.map(e => e.name).join(""))
    })
  }
}
let g = m