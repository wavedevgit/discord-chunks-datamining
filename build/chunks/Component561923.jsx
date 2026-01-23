/** Chunk was on 47841 **/
/** chunk id: 561923, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => x
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk280513 = require("./280513.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk837011 = require("./837011.js"),
  Chunk348943 = require("./348943.js"),
  Chunk576055 = require("./576055.jsx"),
  Chunk997509 = require("./997509.js"),
  Chunk665346 = require("./665346.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk7791 = require("./7791.js");

function x(e) {
  var t;
  let {
    profile: n,
    canManageGuild: l
  } = e, x = n.id, j = a.i.VISIBLE.has(n.visibility), _ = (0, o.bG)([d.A], () => {
    var e;
    return (null == (e = d.A.getProfile(x)) ? true : e.visibility) === u.n.PUBLIC_WITH_RECRUITMENT
  }, [x]), O = i.useRef(null);
  (0, p.A)(O, f.nd0.PROFILE_VISIBILITY);
  let v = i.useCallback(() => {
      j ? m.A.updateGuildProfile(x, {
        visibility: u.n.RESTRICTED
      }) : m.A.updateGuildProfile(x, {
        visibility: _ ? u.n.PUBLIC_WITH_RECRUITMENT : u.n.PUBLIC
      })
    }, [x, _, j]),
    y = i.useCallback(() => {
      m.A.setSection(f.BEX.ACCESS, f.nd0.ACCESS_DISCOVERABLE)
    }, []),
    A = null == (t = n.features) ? true : t.includes(f.GuildFeatures.DISCOVERABLE);
  return (0, r.jsxs)("div", {
    className: h.Im,
    ref: O,
    children: [(0, r.jsxs)("div", {
      className: h.fi,
      children: [(0, r.jsx)(c.dOG, {
        label: b.intl.string(b.t.fjHWen),
        description: b.intl.string(b.t.J1YOV6),
        checked: !j,
        onChange: v,
        disabled: A || !l
      }), A && (0, r.jsx)(c.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: b.intl.format(b.t.R8jY9g, {
          accessLink: (e, t) => (0, r.jsx)(c.MzZ, {
            onClick: y,
            children: e
          }, t)
        })
      })]
    }), (0, r.jsx)("div", {
      className: s()(h.fi, {
        [h.Rl]: j
      }),
      children: (0, r.jsx)(g.A, {
        guildId: x,
        name: null
      })
    })]
  })
}