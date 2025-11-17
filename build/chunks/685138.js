/** Chunk was on 64838 **/
/** chunk id: 685138, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  n: () => c
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk427164 = require("./427164.js");

function s(e) {
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

function i(e, t) {
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
let a = new Date(Date.UTC(2025, 8, 6)),
  o = (0, Chunk427164.le)({
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
  u = () => {
    let e = document.body.style.getPropertyValue("--custom-guild-sidebar-width").slice(0, false);
    return parseInt("" !== module ? module : "375")
  };

function c(e) {
  var t;
  let {
    questConfig: n,
    location: l
  } = e, c = r.useMemo(() => new Date(n.startsAt), [n.startsAt]) >= a, d = o.useConfig({
    location: c ? l : "NONE"
  }), p = (null == (t = d.status) ? true : t.label1) ? 300 : 270, [f, m] = r.useState(() => u() < p);
  return r.useEffect(() => {
    let e = new MutationObserver(() => {
      m(u() < p)
    });
    return e.observe(document.body, {
      attributes: true,
      attributeFilter: ["style"]
    }), () => e.disconnect()
  }, [p]), r.useMemo(() => {
    var e, t, n;
    return d.enabled && c ? i(s({}, d), {
      status: i(s({}, d.status), {
        label1: (null == (e = d.status) ? true : e.label1) && !f,
        label2: (null == (t = d.status) ? true : t.label2) && !f,
        shineWipe: null == (n = d.status) ? true : n.shineWipe
      })
    }) : {
      enabled: false,
      status: true
    }
  }, [d, c, f])
}