/** Chunk was on 3205 **/
"use strict";
n.d(t, {
  P: () => _
}), n(47120), n(266796);
var r = n(200651),
  i = n(192379),
  s = n(580685),
  a = n(793030),
  l = n(442837),
  o = n(481060),
  c = n(497321),
  d = n(484614),
  u = n(314852),
  m = n(65361),
  g = n(246946),
  p = n(434404),
  h = n(330010),
  f = n(999382),
  b = n(24318),
  x = n(822693),
  j = n(388032),
  N = n(922363);

function v(e) {
  let {
    guildId: t
  } = e, {
    guildProfile: c,
    fetchGuildProfile: g,
    fetchStatus: v
  } = (0, m.u)(t), _ = v !== u.a.FETCHED, {
    fetchedEmbed: O,
    embedEnabled: y,
    embedChannelId: C
  } = (0, l.cj)([f.Z], () => {
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
  }), I = i.useMemo(() => (0, b.S)(t), [t]), E = i.useMemo(() => (0, b.a)(t), [t]), [S, T] = i.useState(!1), P = !_ && (null == c ? void 0 : c.visibility) !== s.k.PUBLIC && !y;
  i.useEffect(() => {
    O || (0, h.R)(t)
  }, [O, t]), i.useEffect(() => {
    g()
  }, [t, g]);
  let w = i.useCallback(async e => {
    T(!0);
    try {
      await p.Z.updateEmbed(t, e, C)
    } finally {
      T(!1)
    }
  }, [C, t]);
  return O ? (0, r.jsxs)("div", {
    children: [(0, r.jsx)(o.j7V, {
      disabled: S,
      value: y,
      hideBorder: !0,
      onChange: w,
      children: j.NW.string(j.t.NR6hub)
    }), P ? (0, r.jsx)(a.xv, {
      variant: "text-sm/normal",
      color: "text-secondary",
      className: N.subtext,
      children: j.NW.string(j.t.zCGuJy)
    }) : null, y ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: N.divider
      }), (0, r.jsx)(o.vwX, {
        children: j.NW.string(j.t.LUo0Q0)
      }), (0, r.jsx)(x.m, {
        guildId: t,
        widgetEnabled: y,
        widgetChannelId: C
      }), (0, r.jsx)(a.xv, {
        variant: "text-sm/medium",
        color: "text-secondary",
        className: N.subtext,
        children: j.NW.string(j.t.LxVR9P)
      }), (0, r.jsxs)("div", {
        className: N.twoColumns,
        children: [(0, r.jsxs)("div", {
          className: N.column,
          children: [(0, r.jsx)(o.vwX, {
            children: j.NW.string(j.t.TRyLUl)
          }), (0, r.jsx)(d.Z, {
            value: t
          })]
        }), (0, r.jsxs)("div", {
          className: N.column,
          children: [(0, r.jsx)(o.vwX, {
            children: j.NW.string(j.t.VECJcH)
          }), (0, r.jsx)(d.Z, {
            value: I
          })]
        })]
      }), (0, r.jsx)("div", {
        className: N.divider
      }), (0, r.jsxs)("div", {
        className: N.twoColumns,
        children: [(0, r.jsxs)("div", {
          className: N.column,
          children: [(0, r.jsx)(o.vwX, {
            children: j.NW.string(j.t.XVGbn5)
          }), (0, r.jsx)(d.Z, {
            value: E
          }), (0, r.jsx)(a.xv, {
            variant: "text-sm/medium",
            color: "text-secondary",
            className: N.subtext,
            children: j.NW.string(j.t["+baN19"])
          })]
        }), (0, r.jsx)("img", {
          className: N.column,
          "data-accessibility": "desaturate",
          alt: "",
          src: n(329488)
        })]
      })]
    }) : null]
  }) : (0, r.jsx)(o.$jN, {})
}

function _(e) {
  let {
    guildId: t
  } = e, n = (0, l.e7)([g.Z], () => g.Z.enabled);
  return (0, r.jsxs)(o.hjN, {
    title: j.NW.string(j.t.qlhNb2),
    children: [(0, r.jsx)(a.xv, {
      variant: "text-sm/medium",
      color: "text-secondary",
      className: N.description,
      children: j.NW.string(j.t["dNn/1t"])
    }), n ? (0, r.jsx)(c.Z, {}) : (0, r.jsx)(v, {
      guildId: t
    })]
  })
}