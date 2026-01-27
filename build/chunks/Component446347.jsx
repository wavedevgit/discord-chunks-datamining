/** Chunk was on web.js **/
/** chunk id: 446347, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => C
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  l = require.n(Chunk284009),
  Chunk397927 = require("./397927.js"),
  Chunk579872 = require("./579872.jsx"),
  Chunk383501 = require("./383501.js"),
  Chunk710067 = require("./710067.jsx"),
  Chunk957565 = require("./957565.js"),
  Chunk975571 = require("./975571.js"),
  Chunk723702 = require("./723702.js"),
  Chunk938463 = require("./938463.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk596475 = require("./596475.js");

function b(e, t) {
  return null != t && null != t.discord_web && e.id === t.discord_web.id && e.type === t.discord_web.type
}

function O(e) {
  let {
    url: t
  } = e, [n, a] = i.useState(false), s = i.useRef(true), l = i.useCallback(() => {
    n || (0, p.C)(t, () => {
      a(true), s.current = setTimeout(() => a(false), 2e3)
    })
  }, [t, n]);
  return i.useEffect(() => () => clearTimeout(s.current), []), p.p5 ? (0, r.jsxs)(c.DUT, {
    className: o()(y.S, n ? y.pG : null),
    onClick: l,
    children: [(0, r.jsx)(c.qYV, {
      size: "md",
      color: "currentColor",
      className: y.n7
    }), n ? E.intl.string(E.t.GmrIJY) : E.intl.string(E.t.iVzBOh)]
  }) : null
}

function v() {
  return (0, r.jsxs)(i.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: y.NT,
      children: [(0, r.jsx)("div", {
        className: o()(y.Pz, y.w9)
      }), (0, r.jsx)("div", {
        className: y.Pz
      })]
    }), (0, r.jsx)("div", {
      className: y.MM
    })]
  })
}

function A(e) {
  let {
    subHead: t,
    buildDetails: n,
    variant: a,
    buttonClick: o,
    buttonText: s,
    disabled: l = false,
    submitting: u = false
  } = e;
  return (0, r.jsxs)(i.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: y.NT,
      children: [(0, r.jsx)(c.Text, {
        variant: "text-sm/medium",
        className: y.V$,
        children: t
      }), (0, r.jsx)("div", {
        className: y.Jb,
        children: n
      })]
    }), (0, r.jsx)(c.Button, {
      text: s,
      loading: u,
      variant: a,
      onClick: o,
      fullWidth: true,
      disabled: l
    })]
  })
}

function I(e) {
  let t, n, r, {
      currentOverrides: i,
      linkMeta: a,
      applyBuildOverride: o,
      clearBuildOverride: s,
      submitting: c
    } = e,
    f = ["discord_web"];
  h.isPlatformEmbedded || f.push("discord_marketing", "discord_developers");
  let p = (0, m.A)(a, f);
  if (!p.valid) return S(p.reason);
  l()(null != a, "BuildOverrideEmbed.renderResolved: linkMeta should never be null if resolved");
  let {
    discord_web: _,
    discord_developers: g
  } = a.targetBuildOverride, y = null != _ ? _ : g;
  l()(null != y, "BuildOverrideEmbed.renderResolved: linkMeta.targetBuildOverride.discord_web or linkMeta.targetBuildOverride.discord_developers should never be null if resolved"), b(y, i) ? (n = E.intl.string(E.t.tX4xrt), t = s, r = "critical-primary") : (n = E.intl.string(E.t.nOunHC), t = o, r = "primary");
  let O = () => {
    d.A.isConnected() ? u.A.show({
      title: E.intl.string(E.t.tiu1ly),
      body: E.intl.string(E.t["zK+lqW"]),
      onConfirm: t,
      cancelText: E.intl.string(E.t["ETE/oC"]),
      confirmText: E.intl.string(E.t["QDX/qu"]),
      confirmVariant: "critical-primary"
    }) : t()
  };
  return A({
    subHead: E.intl.string(E.t.RCYGot),
    buildDetails: y.id,
    buttonClick: O,
    buttonText: n,
    variant: r,
    submitting: c
  })
}

function S(e) {
  return A({
    subHead: E.intl.string(E.t.ODXApH),
    variant: "secondary",
    buttonText: "Invalid",
    buildDetails: e,
    disabled: true
  })
}

function T(e, t, n) {
  return (0, r.jsxs)(c.Text, {
    variant: "text-xs/normal",
    className: y.lS,
    children: [(0, r.jsx)("strong", {
      className: y.DD,
      children: null != e && null != e.releaseChannel ? E.intl.formatToPlainString(E.t.bFj63b, {
        releaseChannel: e.releaseChannel
      }) : E.intl.string(E.t.Wj3LW4)
    }), (0, r.jsx)(c.MzZ, {
      className: y.Pl,
      href: _.A.getArticleURL(g.MVz.BUILD_OVERRIDE_EMBED),
      target: "_blank",
      children: (0, r.jsx)(c.mir, {
        size: "xs",
        color: "currentColor",
        className: y.G
      })
    }), n ? null : (0, r.jsx)(O, {
      url: t
    })]
  })
}
let C = e => {
  let {
    loading: t = false,
    currentOverrides: n,
    linkMeta: a,
    url: o,
    applyBuildOverride: s,
    clearBuildOverride: l
  } = e, [c, u] = i.useState(false), d = i.useCallback(() => {
    c || (u(true), s().catch(() => u(false)))
  }, [s, c]), p = i.useCallback(() => {
    c || (u(true), l().catch(() => u(false)))
  }, [l, c]);
  return (0, r.jsxs)("div", {
    className: y.iE,
    children: [T(a, o, t), (0, r.jsxs)("div", {
      className: y.Qs,
      children: [(0, r.jsx)(f.A, {
        className: y.Kk
      }), t ? v() : I({
        currentOverrides: n,
        linkMeta: a,
        applyBuildOverride: d,
        clearBuildOverride: p,
        submitting: c
      })]
    })]
  })
}