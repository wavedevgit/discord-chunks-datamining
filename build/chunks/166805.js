/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  P: () => j
}), n(47120), n(266796);
var r = n(200651),
  i = n(192379),
  s = n(580685),
  a = n(793030),
  l = n(442837),
  o = n(481060),
  c = n(497321),
  A = n(484614),
  d = n(314852),
  u = n(65361),
  g = n(246946),
  f = n(330010),
  m = n(600553),
  p = n(999382),
  h = n(800223),
  C = n(24318),
  b = n(822693),
  v = n(388032),
  x = n(922363);

function N(e) {
  let {
    guildId: t
  } = e, {
    guildProfile: c,
    fetchGuildProfile: g,
    fetchStatus: N
  } = (0, u.u)(t), j = N !== d.a.FETCHED, {
    fetchedEmbed: E,
    embedEnabled: I,
    embedChannelId: O
  } = (0, l.cj)([p.Z], () => {
    let {
      fetchedEmbed: e,
      embedEnabled: t,
      embedChannelId: n
    } = p.Z.getProps();
    return {
      fetchedEmbed: e,
      embedEnabled: t,
      embedChannelId: n
    }
  }), y = i.useMemo(() => (0, C.S)(t), [t]), w = i.useMemo(() => (0, C.a)(t), [t]), [P, B] = i.useState(!1), D = null != c && s.Y.VISIBLE.has(c.visibility), T = !j && !D && !I, S = (0, m.Dj)({
    guildId: t,
    location: "widget settings"
  });
  i.useEffect(() => {
    E || (0, f.R)(t)
  }, [E, t]), i.useEffect(() => {
    g()
  }, [t, g]);
  let L = i.useCallback(async e => {
    B(!0), await (0, h.c)(t, e, O), B(!1)
  }, [O, t]);
  return E ? (0, r.jsxs)("div", {
    children: [(0, r.jsx)(o.j7V, {
      disabled: P,
      value: I,
      hideBorder: !0,
      onChange: L,
      children: v.NW.string(v.t.NR6hub)
    }), T ? (0, r.jsx)(a.xv, {
      variant: "text-sm/normal",
      color: "text-secondary",
      className: x.subtext,
      children: S ? v.NW.string(v.t.zCGuJy) : v.NW.string(v.t.yInR2t)
    }) : null, I ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: x.divider
      }), (0, r.jsx)(o.vwX, {
        children: v.NW.string(v.t.LUo0Q0)
      }), (0, r.jsx)(b.m, {
        guildId: t,
        widgetEnabled: I,
        widgetChannelId: O,
        enableLocalUpdate: !0
      }), (0, r.jsx)(a.xv, {
        variant: "text-sm/medium",
        color: "text-secondary",
        className: x.subtext,
        children: v.NW.string(v.t.LxVR9P)
      }), (0, r.jsxs)("div", {
        className: x.twoColumns,
        children: [(0, r.jsxs)("div", {
          className: x.column,
          children: [(0, r.jsx)(o.vwX, {
            children: v.NW.string(v.t.TRyLUl)
          }), (0, r.jsx)(A.Z, {
            value: t
          })]
        }), (0, r.jsxs)("div", {
          className: x.column,
          children: [(0, r.jsx)(o.vwX, {
            children: v.NW.string(v.t.VECJcH)
          }), (0, r.jsx)(A.Z, {
            value: y
          })]
        })]
      }), (0, r.jsx)("div", {
        className: x.divider
      }), (0, r.jsxs)("div", {
        className: x.twoColumns,
        children: [(0, r.jsxs)("div", {
          className: x.column,
          children: [(0, r.jsx)(o.vwX, {
            children: v.NW.string(v.t.XVGbn5)
          }), (0, r.jsx)(A.Z, {
            value: w
          }), (0, r.jsx)(a.xv, {
            variant: "text-sm/medium",
            color: "text-secondary",
            className: x.subtext,
            children: v.NW.string(v.t["+baN19"])
          })]
        }), (0, r.jsx)("img", {
          className: x.column,
          "data-accessibility": "desaturate",
          alt: "",
          src: n(329488)
        })]
      })]
    }) : null]
  }) : (0, r.jsx)(o.$jN, {})
}

function j(e) {
  let {
    guildId: t
  } = e, n = (0, l.e7)([g.Z], () => g.Z.enabled);
  return (0, r.jsxs)(o.hjN, {
    title: v.NW.string(v.t.qlhNb2),
    children: [(0, r.jsx)(a.xv, {
      variant: "text-sm/medium",
      color: "text-secondary",
      className: x.description,
      children: v.NW.string(v.t["dNn/1t"])
    }), n ? (0, r.jsx)(c.Z, {}) : (0, r.jsx)(N, {
      guildId: t
    })]
  })
}