/** Chunk was on web.js **/
/** chunk id: 855187, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk952572 = require("./952572.js"),
  Chunk961350 = require("./961350.js"),
  Chunk430452 = require("./430452.js"),
  Chunk985018 = require("./985018.jsx");

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
  let u = (0, a.k34)(),
    {
      videoEnabled: f,
      hasVideoDevice: _
    } = (0, i.cf)([l.A], () => ({
      videoEnabled: l.A.isVideoEnabled(),
      hasVideoDevice: l.A.isVideoAvailable()
    })),
    h = (0, i.bG)([s.default], () => s.default.getId() === e),
    m = (0, o.A)();

  function g() {
    (0, a.mMO)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("95782"), n.e("82277")]).then(n.bind(n, 308229));
      return t => (0, r.jsx)(e, p(d({}, t), {
        videoEnabled: f
      }))
    }, {
      modalKey: "camera-preview",
      contextKey: null != t ? (0, a.TId)(t) : u
    })
  }
  return (!f || m) && h && _ ? (0, r.jsx)(a.Drp, {
    id: "change-video-background",
    label: f ? c.intl.string(c.t.mZKxHb) : c.intl.string(c.t["vkV93/"]),
    action: g,
    icon: f ? a.fBX : a.bMW,
    leadingAccessory: {
      type: "icon",
      icon: f ? a.fBX : a.bMW
    }
  }) : null
}