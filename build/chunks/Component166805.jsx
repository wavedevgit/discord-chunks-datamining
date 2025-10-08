/** Chunk was on 29679 **/
/** chunk id: 166805, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  P: () => C
}), require("./388685.js");
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

function v(e) {
  let {
    guildId: t
  } = e, {
    guildProfile: c,
    fetchGuildProfile: m,
    fetchStatus: v
  } = (0, g.u)(t), C = v !== u.a.FETCHED, {
    fetchedEmbed: O,
    embedEnabled: y,
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
  }), E = i.useMemo(() => (0, x.S)(t), [t]), I = i.useMemo(() => (0, x.a)(t), [t]), [S, T] = i.useState(false), P = null != c && l.Y.VISIBLE.has(c.visibility), w = !C && !P && !y;
  i.useEffect(() => {
    O || (0, p.R)(t)
  }, [O, t]), i.useEffect(() => {
    m()
  }, [t, m]);
  let Z = i.useCallback(async e => {
    T(true), await (0, h.c)(t, e, N), T(false)
  }, [N, t]);
  return O ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(o.rsf, {
      label: j.intl.string(j.t.NR6hub),
      checked: y,
      onChange: Z,
      disabled: S
    }), w ? (0, r.jsx)(s.xvT, {
      variant: "text-sm/normal",
      color: "text-secondary",
      className: _.subtext,
      children: j.intl.string(j.t.zCGuJy)
    }) : null, y ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(b.m, {
        label: j.intl.string(j.t.LUo0Q0),
        description: j.intl.string(j.t.LxVR9P),
        guildId: t,
        widgetEnabled: y,
        widgetChannelId: N,
        enableLocalUpdate: true
      }), (0, r.jsxs)("div", {
        className: _.twoColumns,
        children: [(0, r.jsx)("div", {
          className: _.column,
          children: (0, r.jsx)(s.gNt, {
            label: j.intl.string(j.t.TRyLUl),
            children: (0, r.jsx)(d.Z, {
              value: t
            })
          })
        }), (0, r.jsx)("div", {
          className: _.column,
          children: (0, r.jsx)(s.gNt, {
            label: j.intl.string(j.t.VECJcH),
            children: (0, r.jsx)(d.Z, {
              value: E
            })
          })
        })]
      }), (0, r.jsx)("div", {
        className: _.divider
      }), (0, r.jsxs)("div", {
        className: _.twoColumns,
        children: [(0, r.jsx)("div", {
          className: _.column,
          children: (0, r.jsx)(s.gNt, {
            label: j.intl.string(j.t.XVGbn5),
            description: j.intl.string(j.t["+baN19"]),
            children: (0, r.jsx)(d.Z, {
              value: I
            })
          })
        }), (0, r.jsx)("img", {
          className: _.column,
          "data-accessibility": "desaturate",
          alt: "",
          src: n(329488)
        })]
      })]
    }) : null]
  }) : (0, r.jsx)(o.$jN, {})
}

function C(e) {
  let {
    guildId: t
  } = e, n = (0, a.e7)([m.Z], () => m.Z.enabled);
  return (0, r.jsx)(o.C3N, {
    label: j.intl.string(j.t.qlhNb2),
    description: j.intl.string(j.t["dNn/1t"]),
    children: n ? (0, r.jsx)(c.Z, {}) : (0, r.jsx)(v, {
      guildId: t
    })
  })
}