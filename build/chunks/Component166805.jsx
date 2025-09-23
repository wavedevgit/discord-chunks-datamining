/** Chunk was on 71512 **/
/** chunk id: 166805, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  P: () => O
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk580685 = require("./580685.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk497321 = require("./497321.jsx"),
  Chunk484614 = require("./484614.jsx"),
  Chunk314852 = require("./314852.js"),
  Chunk65361 = require("./65361.js"),
  Chunk246946 = require("./246946.js"),
  Chunk330010 = require("./330010.js"),
  Chunk999382 = require("./999382.js"),
  Chunk800223 = require("./800223.js"),
  Chunk24318 = require("./24318.js"),
  Chunk822693 = require("./822693.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk189501 = require("./189501.js");

function _(e) {
  let {
    guildId: t
  } = e, {
    guildProfile: c,
    fetchGuildProfile: g,
    fetchStatus: _
  } = (0, m.u)(t), O = _ !== u.a.FETCHED, {
    fetchedEmbed: y,
    embedEnabled: C,
    embedChannelId: N
  } = (0, a.cj)([f.Z], () => {
    let {
      fetchedEmbed: e,
      embedEnabled: t,
      embedChannelId: n
    } = f.Z.getProps();
    return {
      fetchedEmbed: e,
      embedEnabled: t,
      embedChannelId: n
    }
  }), E = i.useMemo(() => (0, b.S)(t), [t]), I = i.useMemo(() => (0, b.a)(t), [t]), [S, T] = i.useState(false), P = null != c && l.Y.VISIBLE.has(c.visibility), w = !O && !P && !C;
  i.useEffect(() => {
    y || (0, p.R)(t)
  }, [y, t]), i.useEffect(() => {
    g()
  }, [t, g]);
  let R = i.useCallback(async e => {
    T(true), await (0, h.c)(t, e, N), T(false)
  }, [N, t]);
  return y ? (0, r.jsxs)("div", {
    children: [(0, r.jsx)(o.j7V, {
      disabled: S,
      value: C,
      hideBorder: true,
      onChange: R,
      children: j.intl.string(j.t.NR6hub)
    }), w ? (0, r.jsx)(s.xvT, {
      variant: "text-sm/normal",
      color: "text-secondary",
      className: v.subtext,
      children: j.intl.string(j.t.zCGuJy)
    }) : null, C ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: v.divider
      }), (0, r.jsx)(o.vwX, {
        children: j.intl.string(j.t.LUo0Q0)
      }), (0, r.jsx)(x.m, {
        guildId: t,
        widgetEnabled: C,
        widgetChannelId: N,
        enableLocalUpdate: true
      }), (0, r.jsx)(s.xvT, {
        variant: "text-sm/medium",
        color: "text-secondary",
        className: v.subtext,
        children: j.intl.string(j.t.LxVR9P)
      }), (0, r.jsxs)("div", {
        className: v.twoColumns,
        children: [(0, r.jsxs)("div", {
          className: v.column,
          children: [(0, r.jsx)(o.vwX, {
            children: j.intl.string(j.t.TRyLUl)
          }), (0, r.jsx)(d.Z, {
            value: t
          })]
        }), (0, r.jsxs)("div", {
          className: v.column,
          children: [(0, r.jsx)(o.vwX, {
            children: j.intl.string(j.t.VECJcH)
          }), (0, r.jsx)(d.Z, {
            value: E
          })]
        })]
      }), (0, r.jsx)("div", {
        className: v.divider
      }), (0, r.jsxs)("div", {
        className: v.twoColumns,
        children: [(0, r.jsxs)("div", {
          className: v.column,
          children: [(0, r.jsx)(o.vwX, {
            children: j.intl.string(j.t.XVGbn5)
          }), (0, r.jsx)(d.Z, {
            value: I
          }), (0, r.jsx)(s.xvT, {
            variant: "text-sm/medium",
            color: "text-secondary",
            className: v.subtext,
            children: j.intl.string(j.t["+baN19"])
          })]
        }), (0, r.jsx)("img", {
          className: v.column,
          "data-accessibility": "desaturate",
          alt: "",
          src: n(329488)
        })]
      })]
    }) : null]
  }) : (0, r.jsx)(o.$jN, {})
}

function O(e) {
  let {
    guildId: t
  } = e, n = (0, a.e7)([g.Z], () => g.Z.enabled);
  return (0, r.jsxs)(o.hjN, {
    title: j.intl.string(j.t.qlhNb2),
    children: [(0, r.jsx)(s.xvT, {
      variant: "text-sm/medium",
      color: "text-secondary",
      className: v.description,
      children: j.intl.string(j.t["dNn/1t"])
    }), n ? (0, r.jsx)(c.Z, {}) : (0, r.jsx)(_, {
      guildId: t
    })]
  })
}