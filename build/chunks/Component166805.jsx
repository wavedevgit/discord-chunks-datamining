/** Chunk was on 9536 **/
/** chunk id: 166805, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  P: () => y
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk854815 = require("./854815.js");

function O(e) {
  let {
    guildId: t
  } = e, {
    guildProfile: c,
    fetchGuildProfile: f,
    fetchStatus: O
  } = (0, g.u)(t), y = O !== u.a.FETCHED, {
    fetchedEmbed: C,
    embedEnabled: N,
    embedChannelId: E
  } = (0, s.cj)([b.Z], () => {
    let {
      fetchedEmbed: e,
      embedEnabled: t,
      embedChannelId: n
    } = b.Z.getProps();
    return {
      fetchedEmbed: e,
      embedEnabled: t,
      embedChannelId: n
    }
  }), I = i.useMemo(() => (0, h.S)(t), [t]), S = i.useMemo(() => (0, h.a)(t), [t]), [_, T] = i.useState(false), P = null != c && l.Y.VISIBLE.has(c.visibility), w = !y && !P && !N;
  i.useEffect(() => {
    C || (0, m.R)(t)
  }, [C, t]), i.useEffect(() => {
    f()
  }, [t, f]);
  let Z = i.useCallback(async e => {
    T(true), await (0, p.c)(t, e, E), T(false)
  }, [E, t]);
  return C ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(o.rsf, {
      label: j.intl.string(j.t.NR6huS),
      checked: N,
      onChange: Z,
      disabled: _
    }), w ? (0, r.jsx)(a.xvT, {
      variant: "text-sm/normal",
      color: "text-subtle",
      className: v.subtext,
      children: j.intl.string(j.t["zCGuJ+"])
    }) : null, N ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(x.m, {
        label: j.intl.string(j.t.LUo0Q8),
        description: j.intl.string(j.t.LxVR9A),
        guildId: t,
        widgetEnabled: N,
        widgetChannelId: E,
        enableLocalUpdate: true
      }), (0, r.jsxs)("div", {
        className: v.twoColumns,
        children: [(0, r.jsx)("div", {
          className: v.column,
          children: (0, r.jsx)(a.gNt, {
            label: j.intl.string(j.t.TRyLUh),
            children: (0, r.jsx)(d.Z, {
              value: t
            })
          })
        }), (0, r.jsx)("div", {
          className: v.column,
          children: (0, r.jsx)(a.gNt, {
            label: j.intl.string(j.t.VECJcK),
            children: (0, r.jsx)(d.Z, {
              value: I
            })
          })
        })]
      }), (0, r.jsx)("div", {
        className: v.divider
      }), (0, r.jsxs)("div", {
        className: v.twoColumns,
        children: [(0, r.jsx)("div", {
          className: v.column,
          children: (0, r.jsx)(a.gNt, {
            label: j.intl.string(j.t.XVGbn1),
            description: j.intl.string(j.t["+baN11"]),
            children: (0, r.jsx)(d.Z, {
              value: S
            })
          })
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

function y(e) {
  let {
    guildId: t
  } = e, n = (0, s.e7)([f.Z], () => f.Z.enabled);
  return (0, r.jsx)(o.C3N, {
    label: j.intl.string(j.t["qlhNb+"]),
    description: j.intl.string(j.t["dNn/1i"]),
    children: n ? (0, r.jsx)(c.Z, {}) : (0, r.jsx)(O, {
      guildId: t
    })
  })
}