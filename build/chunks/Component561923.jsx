/** Chunk was on 47841 **/
/** chunk id: 561923, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => h
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

function h(e) {
  var t;
  let {
    profile: n,
    canManageGuild: l
  } = e, h = n.id, j = a.i.VISIBLE.has(n.visibility), O = (0, c.bG)([d.A], () => {
    var e;
    return (null == (e = d.A.getProfile(h)) ? true : e.visibility) === u.n.PUBLIC_WITH_RECRUITMENT
  }, [h]), y = i.useRef(null);
  (0, b.A)(y, m.nd0.PROFILE_VISIBILITY);
  let v = i.useCallback(() => {
      j ? g.A.updateGuildProfile(h, {
        visibility: u.n.RESTRICTED
      }) : g.A.updateGuildProfile(h, {
        visibility: O ? u.n.PUBLIC_WITH_RECRUITMENT : u.n.PUBLIC
      })
    }, [h, O, j]),
    A = i.useCallback(() => {
      g.A.setSection(m.BEX.ACCESS, m.nd0.ACCESS_DISCOVERABLE)
    }, []),
    E = null == (t = n.features) ? true : t.includes(m.GuildFeatures.DISCOVERABLE);
  return (0, r.jsxs)("div", {
    className: x.Im,
    ref: y,
    children: [(0, r.jsxs)("div", {
      className: x.fi,
      children: [(0, r.jsx)(o.dOG, {
        label: p.intl.string(p.t.fjHWen),
        description: p.intl.string(p.t.J1YOV6),
        checked: !j,
        onChange: v,
        disabled: E || !l
      }), E && (0, r.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: p.intl.format(p.t.R8jY9g, {
          accessLink: (e, t) => (0, r.jsx)(o.MzZ, {
            onClick: A,
            children: e
          }, t)
        })
      })]
    }), (0, r.jsx)("div", {
      className: s()(x.fi, {
        [x.Rl]: j
      }),
      children: (0, r.jsx)(f.A, {
        guildId: h,
        name: null
      })
    })]
  })
}