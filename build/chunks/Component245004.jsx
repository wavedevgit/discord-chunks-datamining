/** Chunk was on web.js **/
/** chunk id: 245004, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  xm: () => d
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js"), require("./399606.js");
var Chunk481060 = require("./481060.js");
require("./607070.js");
var Chunk388032 = require("./388032.jsx");
require("./810878.js");
var Chunk630564 = require("./630564.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
    })
  }
  return e
}

function c(e, t) {
  if (null == e) return {};
  var n, r, i = u(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function u(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function d(e) {
  let {
    heading: t,
    description: n,
    label: s,
    isEnabled: l
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(i.Heading, {
      className: o.topPerksCardHeading,
      variant: "heading-lg/extrabold",
      children: t
    }), (0, r.jsx)(i.Text, {
      className: o.topPerksCardDescription,
      variant: "text-sm/normal",
      children: n
    }), (0, r.jsxs)("div", {
      className: o.labelsContainer,
      children: [null != s && (0, r.jsxs)("div", {
        className: o.topPerksCardLabelContainer,
        children: [(0, r.jsx)(i.Ucv, {
          size: "sm",
          color: i.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
        }), (0, r.jsx)(i.Text, {
          variant: "text-sm/semibold",
          children: s
        })]
      }), l && (0, r.jsxs)("div", {
        className: o.topPerksCardLabelContainer,
        children: [(0, r.jsx)(i.owK, {
          size: "custom",
          height: 14,
          width: 14,
          color: "currentColor"
        }), (0, r.jsx)(i.Text, {
          variant: "text-sm/semibold",
          color: "currentColor",
          children: a.intl.string(a.t.pCMkDb)
        })]
      })]
    })]
  })
}
require("./567949.js"), require("./552781.js"), require("./952567.js"), require("./807159.js")