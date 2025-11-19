/** Chunk was on web.js **/
/** chunk id: 478543, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => C
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk481060 = require("./481060.js"),
  Chunk240872 = require("./240872.jsx"),
  Chunk19780 = require("./19780.js"),
  Chunk942389 = require("./942389.jsx"),
  Chunk572004 = require("./572004.js"),
  Chunk63063 = require("./63063.js"),
  Chunk358085 = require("./358085.js"),
  Chunk145022 = require("./145022.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk322108 = require("./322108.js");

function y(e, t) {
  return null != t && null != t.discord_web && e.id === t.discord_web.id && e.type === t.discord_web.type
}

function O(e) {
  let {
    url: t
  } = e, [n, a] = i.useState(false), s = i.useRef(true), l = i.useCallback(() => {
    n || (0, _.JG)(t, () => {
      a(true), s.current = setTimeout(() => a(false), 2e3)
    })
  }, [t, n]);
  return i.useEffect(() => () => clearTimeout(s.current), []), _.wS ? (0, r.jsxs)(c.P3F, {
    className: o()(b.copyLink, n ? b.copied : null),
    onClick: l,
    children: [(0, r.jsx)(c.xPt, {
      size: "md",
      color: "currentColor",
      className: b.copyLinkIcon
    }), n ? E.intl.string(E.t.GmrIJY) : E.intl.string(E.t.iVzBOh)]
  }) : null
}

function v() {
  return (0, Chunk54381.jsxs)(Chunk473749.Fragment, {
    children: [(0, Chunk54381.jsxs)("div", {
      className: Chunk322108.buildInfo,
      children: [(0, Chunk54381.jsx)("div", {
        className: o()(Chunk322108.barLoader, Chunk322108.barTitle)
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk322108.barLoader
      })]
    }), (0, Chunk54381.jsx)("div", {
      className: Chunk322108.buttonLoader
    })]
  })
}

function I(e) {
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
      className: b.buildInfo,
      children: [(0, r.jsx)(c.Text, {
        variant: "text-sm/medium",
        className: b.subHead,
        children: t
      }), (0, r.jsx)("div", {
        className: b.buildDetails,
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

function T(e) {
  let t, n, r, {
      currentOverrides: i,
      linkMeta: a,
      applyBuildOverride: o,
      clearBuildOverride: s,
      submitting: c
    } = e,
    f = ["discord_web"];
  h.isPlatformEmbedded || f.push("discord_marketing", "discord_developers");
  let _ = (0, m.Z)(a, f);
  if (!_.valid) return S(_.reason);
  l()(null != a, "BuildOverrideEmbed.renderResolved: linkMeta should never be null if resolved");
  let {
    discord_web: p,
    discord_developers: g
  } = a.targetBuildOverride, b = null != p ? p : g;
  l()(null != b, "BuildOverrideEmbed.renderResolved: linkMeta.targetBuildOverride.discord_web or linkMeta.targetBuildOverride.discord_developers should never be null if resolved"), y(b, i) ? (n = E.intl.string(E.t.tX4xrt), t = s, r = "critical-primary") : (n = E.intl.string(E.t.nOunHC), t = o, r = "primary");
  let O = () => {
    d.Z.isConnected() ? u.Z.show({
      title: E.intl.string(E.t.tiu1ly),
      body: E.intl.string(E.t["zK+lqW"]),
      onConfirm: t,
      cancelText: E.intl.string(E.t["ETE/oC"]),
      confirmText: E.intl.string(E.t["QDX/qu"]),
      confirmVariant: "critical-primary"
    }) : t()
  };
  return I({
    subHead: E.intl.string(E.t.RCYGot),
    buildDetails: b.id,
    buttonClick: O,
    buttonText: n,
    variant: r,
    submitting: c
  })
}

function S(e) {
  return I({
    subHead: E.intl.string(E.t.ODXApH),
    variant: "secondary",
    buttonText: "Invalid",
    buildDetails: e,
    disabled: true
  })
}

function A(e, t, n) {
  return (0, r.jsxs)(c.Text, {
    variant: "text-xs/normal",
    className: b.titleRegion,
    children: [(0, r.jsx)("strong", {
      className: b.title,
      children: null != e && null != e.releaseChannel ? E.intl.formatToPlainString(E.t.bFj63b, {
        releaseChannel: e.releaseChannel
      }) : E.intl.string(E.t.Wj3LW4)
    }), (0, r.jsx)(c.Anchor, {
      className: b.infoLink,
      href: p.Z.getArticleURL(g.BhN.BUILD_OVERRIDE_EMBED),
      target: "_blank",
      children: (0, r.jsx)(c.d3s, {
        size: "xs",
        color: "currentColor",
        className: b.infoIcon
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
  }, [s, c]), _ = i.useCallback(() => {
    c || (u(true), l().catch(() => u(false)))
  }, [l, c]);
  return (0, r.jsxs)("div", {
    className: b.wrapper,
    children: [A(a, o, t), (0, r.jsxs)("div", {
      className: b.content,
      children: [(0, r.jsx)(f.Z, {
        className: b.icon
      }), t ? v() : T({
        currentOverrides: n,
        linkMeta: a,
        applyBuildOverride: d,
        clearBuildOverride: _,
        submitting: c
      })]
    })]
  })
}