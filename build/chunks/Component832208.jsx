/** Chunk was on web.js **/
/** chunk id: 832208, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk784550 = require("./784550.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
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
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = h(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
class m extends Chunk64700.PureComponent {
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
          onFieldFocus: a,
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
          placeholder: y
        } = e,
        b = p(d({}, _(e, ["getClassNameForLayout", "renderInput", "title", "name", "id", "placeholder"])), {
          placeholder: null == y ? true : y(),
          error: this.getError(g),
          value: n[g],
          name: g,
          "aria-labelledby": E,
          onChange: i,
          onFocus: a,
          onBlur: l
        });
      return (0, r.jsx)("div", {
        className: o()(null == f ? true : f(c)),
        children: (0, r.jsx)(s.D0$, {
          id: E,
          label: m(),
          children: h(b, u, c)
        })
      }, g)
    }), u(this, "renderFormRow", e => {
      let t = e.fields.map(this.renderFormSection);
      return (0, r.jsx)(l.A, {
        className: o()(c.nM, e.className),
        children: t
      }, e.fields.map(e => e.name).join(""))
    })
  }
}
let g = m