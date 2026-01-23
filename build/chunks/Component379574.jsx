/** Chunk was on 28636 **/
/** chunk id: 379574, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
}), require("./896048.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js"), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk976860 = require("./976860.js"),
  Chunk961350 = require("./961350.js"),
  Chunk449054 = require("./449054.js"),
  Chunk412461 = require("./412461.js"),
  Chunk933171 = require("./933171.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let m = "redirect_to_support_server";

function g(e) {
  var t;
  let n, g, _, {
      application: b,
      className: f
    } = e,
    {
      onGoToSupportServer: x
    } = (t = b, n = (0, d.DB)(), g = (0, i.bG)([o.default], () => o.default.getSessionId()), _ = l.useCallback(async () => {
      try {
        var e;
        let n = null == t || null == (e = t.guild) ? true : e.id;
        if (null != n) {
          (0, d.TR)(p.HAw.APP_DIRECTORY_SUPPORT_SERVER_JOINED, {
            application_id: t.id,
            support_guild_id: n
          });
          let e = {
            page: p.liQ.APPLICATION_DIRECTORY
          };
          await (0, c.Z2)(n, e)
        }
      } catch (e) {}
    }, [t]), l.useEffect(() => {
      let e = new URL(location.href);
      if (null != t && n && null != g && "true" === e.searchParams.get(m)) {
        e.searchParams.delete(m);
        let t = e.pathname + e.search;
        (0, s.bG)(t), _()
      }
    }, [n, _, g, t]), {
      onGoToSupportServer: l.useCallback(() => {
        var e;
        null != (null == t || null == (e = t.guild) ? true : e.id) && (n ? _() : (0, d.jL)({
          [m]: "true"
        }))
      }, [t, _, n])
    });
  return null != b.guild && b.guild.features.includes(p.GuildFeatures.DISCOVERABLE) ? (0, r.jsxs)("div", {
    className: f,
    children: [(0, r.jsx)(a.Heading, {
      variant: "heading-sm/semibold",
      color: "text-strong",
      children: h.intl.string(h.t.KJEO27)
    }), (0, r.jsx)(u.A, {
      guild: b.guild,
      onClick: x
    })]
  }) : null
}