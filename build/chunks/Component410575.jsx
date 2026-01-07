/** Chunk was on web.js **/
/** chunk id: 410575, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk772848 = require("./772848.js"),
  Chunk626135 = require("./626135.js"),
  Chunk251625 = require("./251625.js"),
  Chunk981631 = require("./981631.js");

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
class f extends(r = Chunk473749.Component) {
  renderProvider(e) {
    var t, n;
    let {
      section: r,
      page: a,
      object: o,
      objectType: l,
      children: c
    } = this.props, u = this.mergeLocation(e.location, this.getLocation(a, r, o, l)), d = this.getContext(u, null != (t = this._loadDate) ? t : e.loadDate, null != (n = this._loadId) ? n : e.loadId);
    return (0, i.jsx)(s.AnalyticsContext.Provider, {
      value: d,
      children: c
    })
  }
  render() {
    let {
      context: e
    } = this.props;
    return null != e ? this.renderProvider(e) : (0, i.jsx)(s.AnalyticsContext.Consumer, {
      children: e => this.renderProvider(e)
    })
  }
  constructor(e) {
    super(e), u(this, "_loadId", null), u(this, "_loadDate", this.props.root ? Date.now() : null), u(this, "getLocation", (0, l.oH)((e, t, n, r) => {
      let i = {};
      return null != e && (i.page = e), null != t && (i.section = t), null != n && (i.object = n), null != r && (i.objectType = r), i
    })), u(this, "mergeLocation", (0, l.oH)((e, t) => d({}, e, t))), u(this, "getContext", (0, l.oH)((e, t, n) => ({
      location: e,
      loadDate: t,
      loadId: n
    }))), null != e.loadId ? this._loadId = e.loadId : e.root && (this._loadId = (0, o.Z)())
  }
}
u(f, "Pages", Chunk981631.ZY5), u(f, "Sections", Chunk981631.jXE), u(f, "Objects", Chunk981631.qAy), u(f, "ObjectTypes", Chunk981631.AnalyticsObjectTypes), u(f, "defaultProps", {
  root: false
})