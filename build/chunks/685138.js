/** Chunk was on web.js **/
/** chunk id: 685138, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  n: () => f
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk427164 = require("./427164.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      a(e, t, n[t])
    })
  }
  return e
}

function s(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function l(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : s(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let c = new Date(Date.UTC(2025, 8, 6)),
  u = (0, Chunk427164.le)({
    name: "2025-09-quest-brand-color-removal-phase-2",
    kind: "user",
    defaultConfig: {
      enabled: false,
      status: true
    },
    variations: {
      0: {
        enabled: false,
        status: true
      },
      1: {
        enabled: true,
        status: {
          progressBlur: true,
          label1: false,
          label2: false,
          shineWipe: true
        }
      },
      2: {
        enabled: true,
        status: {
          progressBlur: false,
          label1: true,
          label2: false,
          shineWipe: false
        }
      },
      3: {
        enabled: true,
        status: {
          progressBlur: false,
          label1: false,
          label2: true,
          shineWipe: false
        }
      },
      4: {
        enabled: true,
        status: {
          progressBlur: false,
          label1: false,
          label2: false,
          shineWipe: true
        }
      }
    }
  }),
  d = () => {
    let e = document.body.style.getPropertyValue("--custom-guild-sidebar-width").slice(0, false);
    return parseInt("" !== module ? module : "375")
  };

function f(e) {
  var t;
  let {
    questConfig: n,
    location: i
  } = e, a = r.useMemo(() => new Date(n.startsAt), [n.startsAt]) >= c, s = u.useConfig({
    location: a ? i : "NONE"
  }), f = (null == (t = s.status) ? true : t.label1) ? 300 : 270, [_, p] = r.useState(() => d() < f);
  return r.useEffect(() => {
    let e = new MutationObserver(() => {
      p(d() < f)
    });
    return e.observe(document.body, {
      attributes: true,
      attributeFilter: ["style"]
    }), () => e.disconnect()
  }, [f]), r.useMemo(() => {
    var e, t, n;
    return s.enabled && a ? l(o({}, s), {
      status: l(o({}, s.status), {
        label1: (null == (e = s.status) ? true : e.label1) && !_,
        label2: (null == (t = s.status) ? true : t.label2) && !_,
        shineWipe: (null == (n = s.status) ? true : n.shineWipe) || _
      })
    }) : {
      enabled: false,
      status: true
    }
  }, [s, a, _])
}