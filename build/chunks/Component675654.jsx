/** Chunk was on 47841 **/
/** chunk id: 675654, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  E: () => v
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk280513 = require("./280513.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk974544 = require("./974544.jsx"),
  Chunk416052 = require("./416052.jsx"),
  Chunk837011 = require("./837011.js"),
  Chunk90084 = require("./90084.js"),
  Chunk351906 = require("./351906.js"),
  Chunk794967 = require("./794967.js"),
  Chunk555337 = require("./555337.js"),
  Chunk875331 = require("./875331.js"),
  Chunk545055 = require("./545055.js"),
  Chunk966394 = require("./966394.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk93100 = require("./93100.js");

function y(e) {
  let {
    guildId: t
  } = e, {
    guildProfile: o,
    fetchGuildProfile: g,
    fetchStatus: y
  } = (0, f.u)(t), v = y !== u.X.FETCHED, {
    fetchedEmbed: A,
    embedEnabled: E,
    embedChannelId: N
  } = (0, a.cf)([m.A], () => {
    let {
      fetchedEmbed: e,
      embedEnabled: t,
      embedChannelId: n
    } = m.A.getProps();
    return {
      fetchedEmbed: e,
      embedEnabled: t,
      embedChannelId: n
    }
  }), _ = i.useMemo(() => (0, x.k)(t), [t]), S = i.useMemo(() => (0, x.Z)(t), [t]), [T, I] = i.useState(false), C = null != o && l.i.VISIBLE.has(o.visibility), P = !v && !C && !E;
  i.useEffect(() => {
    A || (0, b.D)(t)
  }, [A, t]), i.useEffect(() => {
    g()
  }, [t, g]);
  let w = i.useCallback(async e => {
    I(true), await (0, p.E)(t, e, N), I(false)
  }, [N, t]);
  return A ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.dOG, {
      label: j.intl.string(j.t.NR6huS),
      checked: E,
      onChange: w,
      disabled: T
    }), P ? (0, r.jsx)(s.EYj, {
      variant: "text-sm/normal",
      color: "text-subtle",
      className: O.W$,
      children: j.intl.string(j.t["zCGuJ+"])
    }) : null, E ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(h.s, {
        label: j.intl.string(j.t.LUo0Q8),
        description: j.intl.string(j.t.LxVR9A),
        guildId: t,
        widgetEnabled: E,
        widgetChannelId: N,
        enableLocalUpdate: true
      }), (0, r.jsxs)("div", {
        className: O.cL,
        children: [(0, r.jsx)("div", {
          className: O.fi,
          children: (0, r.jsx)(s.D0$, {
            label: j.intl.string(j.t.TRyLUh),
            children: (0, r.jsx)(d.A, {
              value: t
            })
          })
        }), (0, r.jsx)("div", {
          className: O.fi,
          children: (0, r.jsx)(s.D0$, {
            label: j.intl.string(j.t.VECJcK),
            children: (0, r.jsx)(d.A, {
              value: _
            })
          })
        })]
      }), (0, r.jsx)("div", {
        className: O.yF
      }), (0, r.jsxs)("div", {
        className: O.cL,
        children: [(0, r.jsx)("div", {
          className: O.fi,
          children: (0, r.jsx)(s.D0$, {
            label: j.intl.string(j.t.XVGbn1),
            description: j.intl.string(j.t["+baN11"]),
            children: (0, r.jsx)(d.A, {
              value: S
            })
          })
        }), (0, r.jsx)("img", {
          className: O.fi,
          "data-accessibility": "desaturate",
          alt: "",
          src: n(224932)
        })]
      })]
    }) : null]
  }) : (0, r.jsx)(c.y$y, {})
}

function v(e) {
  let {
    guildId: t
  } = e, n = (0, a.bG)([g.A], () => g.A.enabled);
  return (0, r.jsx)(c.nVY, {
    label: j.intl.string(j.t["qlhNb+"]),
    description: j.intl.string(j.t["dNn/1i"]),
    children: n ? (0, r.jsx)(o.A, {}) : (0, r.jsx)(y, {
      guildId: t
    })
  })
}