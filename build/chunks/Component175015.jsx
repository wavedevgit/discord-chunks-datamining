/** Chunk was on 39297 **/
/** chunk id: 175015, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  K: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk300284 = require("./300284.js"),
  Chunk430824 = require("./430824.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk342214 = require("./342214.js");

function u(e, t, n, u, m) {
  let p = (0, r.e7)([s.Z], () => s.Z.getGuild(e)),
    h = (0, o.Z)({
      guild: p,
      analyticsLocations: t
    }),
    x = (0, o.Z)({
      analyticsLocations: t
    });
  return (0, a.jsxs)(a.Fragment, {
    children: [null != p ? (0, a.jsx)(l.sNh, {
      id: "edit-server-profile",
      "aria-label": c.intl.string(c.t["9ESaO7"]),
      label: () => (0, a.jsxs)("div", {
        className: d.item,
        children: [(0, a.jsx)(i.Z, {
          guild: p,
          size: i.Z.Sizes.SMOL,
          className: d.guildIcon
        }), (0, a.jsxs)("div", {
          children: [(0, a.jsx)(l.Text, {
            variant: "text-sm/medium",
            children: c.intl.string(c.t["9ESaO7"])
          }), (0, a.jsx)(l.Text, {
            variant: "text-xs/normal",
            lineClamp: 1,
            style: {
              maxWidth: "150px"
            },
            children: null == p ? true : p.name
          })]
        })]
      }),
      action: () => {
        h(), null == m || m(), null == u || u()
      }
    }, "edit-server-profile") : null, (0, a.jsx)(l.sNh, {
      id: "edit-main-profile",
      "aria-label": c.intl.string(c.t.HmFaFB),
      label: () => (0, a.jsxs)("div", {
        className: d.item,
        children: [(0, a.jsx)(l.kYE, {
          size: "custom",
          width: 18,
          height: 18
        }), (0, a.jsx)(l.Text, {
          variant: "text-sm/medium",
          children: c.intl.string(c.t.HmFaFB)
        }), n ? (0, a.jsx)(l.IGR, {
          text: c.intl.string(c.t.y2b7CA)
        }) : true]
      }),
      action: () => {
        x(), null == m || m(), null == u || u()
      }
    }, "edit-main-profile")]
  })
}