/** Chunk was on 28636 **/
/** chunk id: 455542, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk168186 = require("./168186.js");
require("./827669.js");
var Chunk985018 = require("./985018.jsx"),
  Chunk380964 = require("./380964.js");

function o(e) {
  let {
    application: t
  } = e, n = a.useMemo(() => {
    var e;
    let n = null == (e = t.directory_entry) ? true : e.popular_application_commands;
    return null != n ? n.map(e => (0, i.Oe)({
      rootCommand: e,
      command: e,
      applicationId: e.application_id
    })) : []
  }, [t]);
  return 0 === n.length ? null : (0, l.jsxs)("div", {
    className: c.hd,
    children: [(0, l.jsx)(r.Heading, {
      variant: "heading-lg/semibold",
      color: "text-strong",
      children: s.intl.string(s.t.swIgTL)
    }), (0, l.jsx)("div", {
      className: c.hQ,
      children: n.map(e => (0, l.jsxs)("div", {
        className: c.dO,
        children: [(0, l.jsxs)(r.Text, {
          className: c.p6,
          variant: "code",
          color: "text-strong",
          children: ["/", e.displayName]
        }), (0, l.jsx)(r.Text, {
          variant: "text-md/normal",
          color: "text-default",
          children: e.displayDescription
        })]
      }, e.id))
    })]
  })
}