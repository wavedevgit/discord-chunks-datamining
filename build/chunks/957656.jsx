/** Chunk was on 69015 **/
/** chunk id: 957656, original params: e,r,t (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk198952 = require("./198952.jsx"),
  Chunk329242 = require("./329242.jsx"),
  Chunk916723 = require("./916723.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk305623 = require("./305623.js");
let d = e => {
  var r, t, {
      children: i,
      className: s
    } = e,
    c = function(e, r) {
      if (null == e) return {};
      var t, n, o = function(e, r) {
        if (null == e) return {};
        var t, n, o = {},
          i = Object.keys(e);
        for (n = 0; n < i.length; n++) t = i[n], r.indexOf(t) >= 0 || (o[t] = e[t]);
        return o
      }(e, r);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) t = i[n], !(r.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
      }
      return o
    }(e, ["children", "className"]);
  return <o.Y0X{...r = function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {},
        n = Object.keys(t);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), n.forEach(function(r) {
        var n;
        n = t[r], r in e ? Object.defineProperty(e, r, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[r] = n
      })
    }
    return e
  }({
    "data-migration-pending": true,
    className: s
  }, c), t = t = {
    parentComponent: "FamilyCenterCommonModal",
    children: i
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : (function(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t.push.apply(t, n)
    }
    return t
  })(Object(t)).forEach(function(e) {
    Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e))
  }), r} />
};
d.ButtonFooter = e => {
  let {
    children: r
  } = e;
  return <div className={l.footer}>{r}</div>
}, d.Header = e => {
  let {
    icon: r,
    currentUser: t,
    otherUser: c,
    header: a
  } = e;
  return <div className={l.header}>{<i.Z currentUser={t} otherUser={c}>{r}</i.Z>}{<div className={l.heading}>{<o.X6q variant={"text-lg/bold"}>{a}</o.X6q>}{<s.Z user={c} />}</div>}</div>
}, d.Content = e => {
  let {
    children: r
  } = e;
  return <div className={l.content}>{r}</div>
}, d.Notice = e => {
  let {
    notice: r
  } = e;
  return <div className={l.notice}>{<o.Text variant={"eyebrow"} color={"header-primary"}>{a.intl.string(c.default.cXgKMD)}</o.Text>}{<o.Text variant={"text-sm/normal"} color={"header-secondary"}>{r}</o.Text>}</div>
}, d.Error = e => {
  let {
    error: r,
    onDismiss: t
  } = e;
  return null == r ? null : <o.kzN className={l.error} onDismiss={t}>{r}</o.kzN>
};
let u = d