/** Chunk was on web (https://canary.discord.comweb.895a2488cd77ea6e.js.js) **/
"use strict";
n.d(t, {
  F: () => v,
  n: () => O
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(91192),
  l = n(924826),
  c = n(481060),
  u = n(600164),
  d = n(313201),
  f = n(554789);

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = E(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
class v extends i.PureComponent {
  render() {
    let {
      label: e,
      value: t,
      renderValue: n,
      className: i
    } = this.props;
    return (0, r.jsxs)(u.Z, {
      className: a()(f.quickSelect, i),
      align: u.Z.Align.CENTER,
      children: [(0, r.jsx)("div", {
        className: f.quickSelectLabel,
        children: e
      }), (0, r.jsxs)(u.Z, {
        align: u.Z.Align.CENTER,
        className: f.quickSelectClick,
        children: [(0, r.jsx)("div", {
          className: f.quickSelectValue,
          children: null != n ? n(t) : t.label
        }), (0, r.jsx)("div", {
          className: f.quickSelectArrow
        })]
      })]
    })
  }
}
class b extends i.PureComponent {
  render() {
    let {
      selected: e,
      renderOption: t,
      option: n
    } = this.props;
    return (0, r.jsx)(s.mh, {
      id: n.key,
      children: i => (0, r.jsx)(c.P3F, m(_({
        focusProps: {
          enabled: !1
        },
        className: a()(f.quickSelectPopoutOption, {
          selected: e
        }),
        onClick: this.handleClick
      }, i), {
        role: "option",
        children: t(n, e)
      }))
    })
  }
  constructor(...e) {
    super(...e), p(this, "handleClick", () => {
      let {
        option: e,
        onChange: t
      } = this.props;
      null == t || t(e)
    })
  }
}

function y(e) {
  let {
    options: t,
    value: n,
    scroller: i,
    renderOption: o,
    onChange: u,
    className: p
  } = e, h = a()(f.quickSelectPopout, p, {
    [f.quickSelectPopoutScroll]: i
  }), E = t.map(e => {
    let t = null != n && e.value === n.value,
      i = t ? void 0 : u;
    return (0, r.jsx)(b, {
      className: f.quickSelectPopoutOption,
      renderOption: o,
      option: e,
      onChange: i,
      selected: t
    }, e.key || e.value)
  }), v = (0, d.Dt)(), y = (0, l.ZP)({
    id: v,
    isEnabled: !0,
    wrap: !0,
    async scrollToStart() {},
    async scrollToEnd() {}
  }), O = y.containerProps, {
    ref: S
  } = O, I = g(O, ["ref"]);
  return (0, c.Tbt)(S), (0, r.jsx)(s.bG, {
    navigator: y,
    children: (0, r.jsx)("div", m(_({
      ref: S,
      className: h
    }, I), {
      role: "listbox",
      children: i ? (0, r.jsx)(c.Ttm, {
        className: f.quickSelectScroller,
        children: E
      }) : E
    }))
  })
}
class O extends i.PureComponent {
  render() {
    let {
      label: e,
      value: t,
      renderValue: n,
      className: i,
      popoutProps: o
    } = this.props;
    return (0, r.jsx)(c.yRy, m(_({}, o), {
      renderPopout: this.renderPopout,
      children: (o, a) => {
        let {
          isShown: s
        } = a;
        return (0, r.jsx)(c.P3F, m(_({}, o), {
          className: i,
          "aria-haspopup": "listbox",
          "aria-expanded": s,
          children: (0, r.jsx)(v, {
            label: e,
            value: t,
            renderValue: n
          })
        }))
      }
    }))
  }
  constructor(...e) {
    super(...e), p(this, "renderPopout", e => {
      let {
        closePopout: t
      } = e, {
        options: n,
        value: i,
        renderOption: o,
        popoutClassName: a,
        scroller: s
      } = this.props;
      return (0, r.jsx)(y, {
        scroller: !!s,
        className: a,
        options: n,
        value: i,
        renderOption: o,
        onChange: e => {
          this.handleChange(e), t()
        }
      })
    }), p(this, "handleChange", e => {
      let {
        onChange: t
      } = this.props;
      null == t || t(e)
    })
  }
}