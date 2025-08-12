/** Chunk was on 56236 **/
/** chunk id: 74562, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk434404 = require("./434404.js"),
  Chunk147754 = require("./147754.js"),
  Chunk939863 = require("./939863.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk426420 = require("./426420.js");

function f(e) {
  let {
    guildId: n,
    onClose: t
  } = e, {
    showHubEventsList: f
  } = c.Z.useExperiment({
    guildId: n,
    location: "6597ca_1"
  }, {
    autoTrackExposure: false
  }), h = (0, r.e7)([s.Z, u.Z], () => {
    let e = s.Z.getGuild(n);
    return u.Z.can(d.Plq.MANAGE_ROLES, e)
  }, [n]), v = (0, r.e7)([s.Z], () => {
    let e = s.Z.getGuild(n);
    return f && (null == e ? true : e.features.has(d.oNc.HUB))
  }, [n, f]);
  return (0, i.jsxs)("div", {
    className: p.container,
    children: [(0, i.jsx)(a.Z, {
      children: (0, i.jsx)("div", {
        className: p.circle,
        children: (0, i.jsx)(l.Que, {
          size: "custom",
          color: "currentColor",
          height: 40,
          width: 40,
          className: p.icon
        })
      })
    }), (0, i.jsx)(l.X6q, {
      color: "header-primary",
      variant: "heading-xl/semibold",
      className: p.title,
      children: v ? g.intl.string(g.t.RhXVpa) : g.intl.string(g.t["WgZ+3N"])
    }), (0, i.jsx)(l.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      className: p.subtitle,
      children: v ? g.intl.string(g.t["6hktHB"]) : g.intl.string(g.t["v/S/PD"])
    }), h && (0, i.jsx)(l.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      className: p.roleTip,
      children: g.intl.format(g.t["K+DH2t"], {
        onClick: () => {
          o.Z.open(n, d.pNK.ROLES), t()
        }
      })
    })]
  })
}