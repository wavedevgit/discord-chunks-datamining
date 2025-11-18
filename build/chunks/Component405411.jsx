/** Chunk was on 84283 **/
/** chunk id: 405411, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk581364 = require("./581364.js"),
  Chunk761652 = require("./761652.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk524741 = require("./524741.js");

function d(e) {
  let {
    application: t
  } = e, n = a.useMemo(() => {
    var e;
    let n = null == (e = t.directory_entry) ? true : e.popular_application_commands;
    return null != n ? n.map(e => (0, l.Z8)({
      rootCommand: e,
      command: e,
      applicationId: e.application_id
    })) : []
  }, [t]);
  return 0 === n.length ? null : (0, r.jsxs)("div", {
    className: c.sectionContainer,
    children: [(0, r.jsx)(i.Heading, {
      variant: "heading-lg/semibold",
      color: "header-primary",
      children: o.intl.string(o.t.swIgTL)
    }), (0, r.jsx)("div", {
      className: c.contentContainer,
      children: n.map(e => (0, r.jsxs)("div", {
        className: c.commandContainer,
        children: [(0, r.jsxs)(i.Text, {
          className: c.commandName,
          variant: "code",
          color: "header-primary",
          children: [s.GI, e.displayName]
        }), (0, r.jsx)(i.Text, {
          variant: "text-md/normal",
          color: "text-default",
          children: e.displayDescription
        })]
      }, e.id))
    })]
  })
}