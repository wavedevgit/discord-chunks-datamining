/** Chunk was on 39048 **/
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

function O(e) {
  let {
    guildId: t
  } = e, {
    guildProfile: c,
    fetchGuildProfile: m,
    fetchStatus: O
  } = (0, g.u)(t), v = O !== u.X.FETCHED, {
    fetchedEmbed: y,
    embedEnabled: A,
    embedChannelId: E
  } = (0, a.cf)([f.A], () => {
    let {
      fetchedEmbed: e,
      embedEnabled: t,
      embedChannelId: n
    } = f.A.getProps();
    return {
      fetchedEmbed: e,
      embedEnabled: t,
      embedChannelId: n
    }
  }), N = i.useMemo(() => (0, b.k)(t), [t]), S = i.useMemo(() => (0, b.Z)(t), [t]), [I, T] = i.useState(false), C = null != c && l.i.VISIBLE.has(c.visibility), P = !v && !C && !A;
  i.useEffect(() => {
    y || (0, p.D)(t)
  }, [y, t]), i.useEffect(() => {
    m()
  }, [t, m]);
  let w = i.useCallback(async e => {
    T(true), await (0, h.E)(t, e, E), T(false)
  }, [E, t]);
  return y ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(o.dOG, {
      label: j.intl.string(j.t.NR6huS),
      checked: A,
      onChange: w,
      disabled: I
    }), P ? (0, r.jsx)(s.EYj, {
      variant: "text-sm/normal",
      color: "text-subtle",
      className: _.W$,
      children: j.intl.string(j.t["zCGuJ+"])
    }) : null, A ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(x.s, {
        label: j.intl.string(j.t.LUo0Q8),
        description: j.intl.string(j.t.LxVR9A),
        guildId: t,
        widgetEnabled: A,
        widgetChannelId: E,
        enableLocalUpdate: true
      }), (0, r.jsxs)("div", {
        className: _.cL,
        children: [(0, r.jsx)("div", {
          className: _.fi,
          children: (0, r.jsx)(s.D0$, {
            label: j.intl.string(j.t.TRyLUh),
            children: (0, r.jsx)(d.A, {
              value: t
            })
          })
        }), (0, r.jsx)("div", {
          className: _.fi,
          children: (0, r.jsx)(s.D0$, {
            label: j.intl.string(j.t.VECJcK),
            children: (0, r.jsx)(d.A, {
              value: N
            })
          })
        })]
      }), (0, r.jsx)("div", {
        className: _.yF
      }), (0, r.jsxs)("div", {
        className: _.cL,
        children: [(0, r.jsx)("div", {
          className: _.fi,
          children: (0, r.jsx)(s.D0$, {
            label: j.intl.string(j.t.XVGbn1),
            description: j.intl.string(j.t["+baN11"]),
            children: (0, r.jsx)(d.A, {
              value: S
            })
          })
        }), (0, r.jsx)("img", {
          className: _.fi,
          "data-accessibility": "desaturate",
          alt: "",
          src: n(224932)
        })]
      })]
    }) : null]
  }) : (0, r.jsx)(o.y$y, {})
}

function v(e) {
  let {
    guildId: t
  } = e, n = (0, a.bG)([m.A], () => m.A.enabled);
  return (0, r.jsx)(o.nVY, {
    label: j.intl.string(j.t["qlhNb+"]),
    description: j.intl.string(j.t["dNn/1i"]),
    children: n ? (0, r.jsx)(c.A, {}) : (0, r.jsx)(O, {
      guildId: t
    })
  })
}