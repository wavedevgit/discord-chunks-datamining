/** Chunk was on 84283 **/
/** chunk id: 691703, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk703656 = require("./703656.js"),
  Chunk314897 = require("./314897.js"),
  Chunk900849 = require("./900849.js"),
  Chunk881294 = require("./881294.js"),
  Chunk949507 = require("./949507.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let h = "redirect_to_support_server";

function g(e) {
  let {
    application: t,
    className: n
  } = e, {
    onGoToSupportServer: g
  } = function(e) {
    let t = (0, d.nu)(),
      n = (0, i.e7)([o.default], () => o.default.getSessionId()),
      r = a.useCallback(async () => {
        try {
          var t;
          let n = null == e || null == (t = e.guild) ? true : t.id;
          if (null != n) {
            (0, d.zZ)(p.rMx.APP_DIRECTORY_SUPPORT_SERVER_JOINED, {
              application_id: e.id,
              support_guild_id: n
            });
            let t = {
              page: p.ZY5.APPLICATION_DIRECTORY
            };
            await (0, c.Ub)(n, t)
          }
        } catch (e) {}
      }, [e]);
    return a.useEffect(() => {
      let a = new URL(location.href);
      if (null != e && t && null != n && "true" === a.searchParams.get(h)) {
        a.searchParams.delete(h);
        let e = a.pathname + a.search;
        (0, s.dL)(e), r()
      }
    }, [t, r, n, e]), {
      onGoToSupportServer: a.useCallback(() => {
        var n;
        null != (null == e || null == (n = e.guild) ? true : n.id) && (t ? r() : (0, d.rf)({
          [h]: "true"
        }))
      }, [e, r, t])
    }
  }(t);
  return null != t.guild && t.guild.features.includes(p.GuildFeatures.DISCOVERABLE) ? (0, r.jsxs)("div", {
    className: n,
    children: [(0, r.jsx)(l.Heading, {
      variant: "heading-sm/semibold",
      color: "header-primary",
      children: m.intl.string(m.t.KJEO27)
    }), (0, r.jsx)(u.Z, {
      guild: t.guild,
      onClick: g
    })]
  }) : null
}