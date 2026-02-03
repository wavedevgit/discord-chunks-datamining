/** Chunk was on 44669 **/
/** chunk id: 510560, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk461678 = require("./461678.jsx"),
  Chunk914703 = require("./914703.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function d(e) {
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

function p(e, t) {
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

function h(e) {
  let {
    channel: t
  } = e, n = l.useRef(null);
  return (0, r.jsx)(s.YNO, {
    targetElementRef: n,
    align: "right",
    animation: s.YNO.Animation.NONE,
    position: "bottom",
    renderPopout: e => t.isThread() ? (0, r.jsx)(o.A, p(d({}, e), {
      channel: t,
      navId: "recents-thread-notifications",
      label: u.intl.string(u.t.ljs3Oe)
    })) : (0, r.jsx)(a.A, p(d({}, e), {
      channel: t,
      navId: "recents-notifications",
      label: u.intl.string(u.t.ljs3Oe),
      location: {
        section: c.JJy.INBOX
      },
      includeGuildMute: true
    })),
    children: e => {
      let {
        onClick: t
      } = e;
      return (0, r.jsx)(i.m_, {
        text: u.intl.string(u.t.h850Ss),
        targetElementRef: n,
        children: (0, r.jsx)(s.K0, {
          "aria-label": u.intl.string(u.t.h850Ss),
          icon: s.XFE,
          variant: "secondary",
          size: "sm",
          onClick: t
        })
      })
    }
  })
}