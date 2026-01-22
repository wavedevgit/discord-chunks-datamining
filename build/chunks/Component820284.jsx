/** Chunk was on web.js **/
/** chunk id: 820284, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk835245 = require("./835245.js"),
  Chunk954571 = require("./954571.js"),
  Chunk583613 = require("./583613.js"),
  Chunk652215 = require("./652215.js");

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
class f extends(r = Chunk64700.Component) {
  renderProvider(e) {
    var t, n;
    let {
      section: r,
      page: a,
      object: s,
      objectType: l,
      children: c
    } = this.props, u = this.mergeLocation(e.location, this.getLocation(a, r, s, l)), d = this.getContext(u, null != (t = this._loadDate) ? t : e.loadDate, null != (n = this._loadId) ? n : e.loadId);
    return (0, i.jsx)(o.AnalyticsContext.Provider, {
      value: d,
      children: c
    })
  }
  render() {
    let {
      context: e
    } = this.props;
    return null != e ? this.renderProvider(e) : (0, i.jsx)(o.AnalyticsContext.Consumer, {
      children: e => this.renderProvider(e)
    })
  }
  constructor(e) {
    super(e), u(this, "_loadId", null), u(this, "_loadDate", this.props.root ? Date.now() : null), u(this, "getLocation", (0, l.L_)((e, t, n, r) => {
      let i = {};
      return null != e && (i.page = e), null != t && (i.section = t), null != n && (i.object = n), null != r && (i.objectType = r), i
    })), u(this, "mergeLocation", (0, l.L_)((e, t) => d({}, e, t))), u(this, "getContext", (0, l.L_)((e, t, n) => ({
      location: e,
      loadDate: t,
      loadId: n
    }))), null != e.loadId ? this._loadId = e.loadId : e.root && (this._loadId = (0, s.A)())
  }
}
u(f, "Pages", Chunk652215.liQ), u(f, "Sections", Chunk652215.JJy), u(f, "Objects", Chunk652215.ZSU), u(f, "ObjectTypes", Chunk652215.AnalyticsObjectTypes), u(f, "defaultProps", {
  root: false
})