/** Chunk was on 11788 **/
/** chunk id: 617379, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk110255 = require("./110255.jsx"),
  Chunk64247 = require("./64247.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function p(e) {
  let {
    channel: t
  } = e, n = i.useRef(null);
  return (0, r.jsx)(l.yRy, {
    targetElementRef: n,
    align: "right",
    animation: l.yRy.Animation.NONE,
    position: "bottom",
    renderPopout: e => t.isThread() ? (0, r.jsx)(a.Z, d(u({}, e), {
      channel: t,
      navId: "recents-thread-notifications",
      label: c.intl.string(c.t.ljs3Oe)
    })) : (0, r.jsx)(o.Z, d(u({}, e), {
      channel: t,
      navId: "recents-notifications",
      label: c.intl.string(c.t.ljs3Oe),
      location: {
        section: s.jXE.INBOX
      },
      includeGuildMute: true
    })),
    children: e => {
      let {
        onClick: t
      } = e;
      return (0, r.jsx)(l.M0o, {
        ref: n,
        tooltip: c.intl.string(c.t.h850Ss),
        color: l.YX$.TERTIARY,
        icon: (0, r.jsx)(l.Dkj, {
          size: "xs",
          color: "currentColor"
        }),
        onClick: t
      })
    }
  })
}