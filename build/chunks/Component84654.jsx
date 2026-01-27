/** Chunk was on web.js **/
/** chunk id: 84654, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => O
}), require("./747238.js"), require("./812715.js"), require("./866193.js"), require("./896048.js"), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk91871 = require("./91871.js"),
  o = require.n(Chunk91871),
  Chunk397927 = require("./397927.js"),
  Chunk100392 = require("./100392.js"),
  Chunk102609 = require("./102609.js"),
  Chunk386976 = require("./386976.js"),
  Chunk32523 = require("./32523.js"),
  Chunk769054 = require("./769054.js"),
  Chunk957565 = require("./957565.js"),
  Chunk222735 = require("./222735.js"),
  Chunk985018 = require("./985018.jsx");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function b(e) {
  let {
    id: t,
    experiment: n,
    currentBucket: i,
    system: a
  } = e, o = (0, f.h)(n);
  return (0, r.jsxs)(s.Drp, {
    id: t.replaceAll("--", "__"),
    label: n.title,
    action: () => (0, c.t$)(a, t, null),
    children: [o.map(e => (0, r.jsx)(s.sLh, {
      id: "".concat(e.id),
      label: e.shortLabel,
      checked: e.id === (null == i ? true : i.variantId),
      action: () => (0, c.t$)(a, t, e.id)
    }, "".concat(e.id))), (0, r.jsxs)(s.rXV, {
      children: [p.p5 && (0, r.jsx)(s.Drp, {
        id: "copy-link",
        label: "Copy Link",
        action: () => {
          let e = (0, l.yA)(t);
          (0, p.C)(e, () => {
            (0, s.showToast)({
              id: "experiment-link-copied",
              message: "Copied experiment link",
              type: s.ToastType.SUCCESS
            })
          })
        }
      }), null != i && (0, r.jsx)(s.Drp, {
        id: "clear-override",
        label: "Clear Override",
        color: "danger",
        icon: s.ucK,
        action: () => (0, c.t$)(a, t, null)
      })]
    })]
  }, t)
}

function O() {
  let {
    experiments: e,
    overridesInfo: t
  } = (0, d.hI)(), {
    experiments: n,
    overridesInfo: a
  } = (0, u.op)(), l = i.useMemo(() => {
    let r = g({}, e, n),
      i = g({}, t, a);
    return (0, _.R3)((0, _.Fm)(r), i).map(e => {
      let {
        id: t,
        experiment: n
      } = e;
      return {
        id: t,
        experiment: n,
        currentBucket: i[t],
        system: n.system
      }
    })
  }, [e, t, n, a]), [c, f] = i.useState(""), [p, m] = i.useState([]);
  i.useEffect(() => {
    0 === c.trim().length ? m(l) : m(l.filter(e => o()(c, e.experiment.title.toLowerCase())))
  }, [l, c]);
  let E = i.useMemo(() => l.filter(e => {
      let {
        currentBucket: t
      } = e;
      return null != t
    }), [l]),
    O = i.useMemo(() => p.filter(e => {
      let {
        currentBucket: t
      } = e;
      return null == t
    }), [p]),
    v = i.useMemo(() => E.map(b), [E]),
    A = i.useMemo(() => O.map(b), [O]),
    I = (0, r.jsx)(s.aK1, {
      id: "experiments-search",
      control: (e, t) => (0, r.jsx)(s.VPO, y(g({}, e), {
        query: c,
        onChange: f,
        ref: t,
        placeholder: h.intl.string(h.t["5h0QOP"])
      }))
    }, "experiments-search");
  return v.length > 0 ? [(0, r.jsx)(s.rXV, {
    label: "Overridden Experiments",
    children: v
  }, "overridden-group"), (0, r.jsx)(s.bXX, {}, "separator-2"), (0, r.jsxs)(s.Drp, {
    id: "other-experiments",
    label: "Other Experiments",
    children: [I, A]
  }, "other-experiments")] : [I, ...A]
}