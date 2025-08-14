/** Chunk was on web.js **/
/** chunk id: 478543, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => C
}), require("./388685.js"), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk755721 = require("./755721.js"),
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

function O(e, t) {
  return null != t && null != t.discord_web && e.id === t.discord_web.id && e.type === t.discord_web.type
}

function v(e) {
  let {
    url: t
  } = e, [n, o] = i.useState(false), s = i.useRef(true), l = i.useCallback(() => {
    n || (0, p.JG)(t, () => {
      o(true), s.current = setTimeout(() => o(false), 2e3)
    })
  }, [t, n]);
  return i.useEffect(() => () => clearTimeout(s.current), []), p.wS ? (0, r.jsxs)(u.P3F, {
    className: a()(y.copyLink, n ? y.copied : null),
    onClick: l,
    children: [(0, r.jsx)(u.xPt, {
      size: "md",
      color: "currentColor",
      className: y.copyLinkIcon
    }), n ? b.intl.string(b.t.GmrIJS) : b.intl.string(b.t.iVzBOj)]
  }) : null
}

function I() {
  return (0, Chunk255367.jsxs)(Chunk73800.Fragment, {
    children: [(0, Chunk255367.jsxs)("div", {
      className: Chunk322108.buildInfo,
      children: [(0, Chunk255367.jsx)("div", {
        className: a()(Chunk322108.barLoader, Chunk322108.barTitle)
      }), (0, Chunk255367.jsx)("div", {
        className: Chunk322108.barLoader
      })]
    }), (0, Chunk255367.jsx)("div", {
      className: Chunk322108.buttonLoader
    })]
  })
}

function T(e) {
  let {
    subHead: t,
    buildDetails: n,
    buttonColor: o,
    buttonClick: s,
    buttonText: l,
    disabled: d = false,
    submitting: f = false
  } = e;
  return (0, r.jsxs)(i.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: y.buildInfo,
      children: [(0, r.jsx)(u.Text, {
        variant: "text-sm/medium",
        className: y.subHead,
        children: t
      }), (0, r.jsx)("div", {
        className: y.buildDetails,
        children: n
      })]
    }), (0, r.jsx)(c.zx, {
      submitting: f,
      color: o,
      onClick: s,
      className: a()(y.button, d ? y.disabledButtonOverride : null),
      size: y.buttonSize,
      disabled: d,
      children: l
    })]
  })
}

function S(e) {
  let t, n, r, {
      currentOverrides: i,
      linkMeta: o,
      applyBuildOverride: a,
      clearBuildOverride: s,
      submitting: u
    } = e,
    _ = ["discord_web"];
  m.isPlatformEmbedded || _.push("discord_marketing", "discord_developers");
  let p = (0, g.Z)(o, _);
  if (!p.valid) return A(p.reason);
  l()(null != o, "BuildOverrideEmbed.renderResolved: linkMeta should never be null if resolved");
  let {
    discord_web: h,
    discord_developers: E
  } = o.targetBuildOverride, y = null != h ? h : E;
  l()(null != y, "BuildOverrideEmbed.renderResolved: linkMeta.targetBuildOverride.discord_web or linkMeta.targetBuildOverride.discord_developers should never be null if resolved"), O(y, i) ? (n = b.intl.string(b.t.tX4xrq), t = s, r = c.zx.Colors.RED) : (n = b.intl.string(b.t.nOunHB), t = a, r = c.zx.Colors.GREEN);
  let v = () => {
    f.Z.isConnected() ? d.Z.show({
      title: b.intl.string(b.t.tiu1l5),
      body: b.intl.string(b.t["zK+lqa"]),
      onConfirm: t,
      cancelText: b.intl.string(b.t["ETE/oK"]),
      confirmText: b.intl.string(b.t["QDX/qq"]),
      confirmVariant: "critical-primary"
    }) : t()
  };
  return T({
    subHead: b.intl.string(b.t.RCYGoq),
    buildDetails: y.id,
    buttonClick: v,
    buttonText: n,
    buttonColor: r,
    submitting: u
  })
}

function A(e) {
  return T({
    subHead: b.intl.string(b.t.ODXApK),
    buttonColor: c.zx.Colors.TRANSPARENT,
    buttonText: "Invalid",
    buildDetails: e,
    disabled: true
  })
}

function N(e, t, n) {
  return (0, r.jsxs)(u.Text, {
    variant: "text-xs/normal",
    className: y.titleRegion,
    children: [(0, r.jsx)("strong", {
      className: y.title,
      children: null != e && null != e.releaseChannel ? b.intl.formatToPlainString(b.t.bFj63d, {
        releaseChannel: e.releaseChannel
      }) : b.intl.string(b.t.Wj3LW1)
    }), (0, r.jsx)(u.eee, {
      className: y.infoLink,
      href: h.Z.getArticleURL(E.BhN.BUILD_OVERRIDE_EMBED),
      target: "_blank",
      children: (0, r.jsx)(u.d3s, {
        size: "xs",
        color: "currentColor",
        className: y.infoIcon
      })
    }), n ? null : (0, r.jsx)(v, {
      url: t
    })]
  })
}
let C = e => {
  let {
    loading: t = false,
    currentOverrides: n,
    linkMeta: o,
    url: a,
    applyBuildOverride: s,
    clearBuildOverride: l
  } = e, [c, u] = i.useState(false), d = i.useCallback(() => {
    c || (u(true), s().catch(() => u(false)))
  }, [s, c]), f = i.useCallback(() => {
    c || (u(true), l().catch(() => u(false)))
  }, [l, c]);
  return (0, r.jsxs)("div", {
    className: y.wrapper,
    children: [N(o, a, t), (0, r.jsxs)("div", {
      className: y.content,
      children: [(0, r.jsx)(_.Z, {
        className: y.icon
      }), t ? I() : S({
        currentOverrides: n,
        linkMeta: o,
        applyBuildOverride: d,
        clearBuildOverride: f,
        submitting: c
      })]
    })]
  })
}