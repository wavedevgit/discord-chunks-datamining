/** Chunk was on 21968 **/
/** chunk id: 602418, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk253929 = require("./253929.js"),
  Chunk948040 = require("./948040.jsx"),
  Chunk636547 = require("./636547.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk388568 = require("./388568.js");

function u(e) {
  let {
    applicationIcon: t,
    applicationName: n,
    canNavigate: u,
    guildId: b
  } = e, {
    results: f,
    query: p,
    setQuery: m,
    unfilteredCount: g
  } = (0, a._)();
  return null != f && g > 0 ? (0, i.jsx)(o.A, {
    bar: (0, i.jsx)(l.IWV, {
      size: "sm",
      query: p,
      onChange: m,
      onClear: () => m("")
    }),
    inModal: false,
    title: c.intl.string(c.t["0hKkS+"]),
    children: f.map((e, a) => (0, i.jsxs)(r.Fragment, {
      children: [(0, i.jsx)(s.A, {
        applicationIcon: t,
        applicationName: n,
        canNavigate: u,
        command: e,
        guildId: b
      }), a < f.length - 1 ? (0, i.jsx)(l.cGx, {}) : null]
    }, e.id))
  }) : (0, i.jsx)(l.ZpM, {
    className: d.a,
    editable: true,
    children: (0, i.jsx)(l.Text, {
      color: "text-muted",
      variant: "text-sm/normal",
      children: c.intl.string(c.t["x78c+J"])
    })
  })
}