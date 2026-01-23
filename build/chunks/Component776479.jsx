/** Chunk was on 21968 **/
/** chunk id: 776479, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk998874 = require("./998874.jsx"),
  Chunk542580 = require("./542580.js"),
  Chunk803378 = require("./803378.js"),
  Chunk825453 = require("./825453.js"),
  Chunk602418 = require("./602418.jsx"),
  Chunk2655 = require("./2655.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk199271 = require("./199271.js");

function b(e) {
  let {
    application: t,
    canNavigate: n,
    guildId: d
  } = e, p = (0, l.bG)([c.A], () => c.A.isUnavailable());
  return (r.useEffect(() => (o.hu(t.id), o.AL), [t.id]), r.useEffect(() => {
    o.gV(t.id, d, t.id), o.Jw(d, t.id)
  }, [t.id, d]), p) ? null : (0, i.jsxs)(r.Fragment, {
    children: [(0, i.jsx)(s.A, {
      icon: (0, i.jsx)(a.kC9, {
        size: "md",
        color: "currentColor"
      }),
      title: m.intl.string(m.t.RGoJNN)
    }), (0, i.jsx)(a.Text, {
      color: "text-muted",
      variant: "text-sm/normal",
      children: m.intl.string(m.t.sCkD3Z)
    }), (0, i.jsx)(f, {
      guildId: d,
      applicationId: t.id
    }), (0, i.jsx)(u.A, {
      applicationIcon: t.icon,
      applicationName: t.name,
      canNavigate: n,
      guildId: d
    })]
  })
}

function f(e) {
  let {
    applicationId: t,
    guildId: n
  } = e, {
    originalApplicationPermissions: r,
    editedTargetPermissions: l,
    selectedPermissionCount: a
  } = (0, d.A)(n, t);
  return (0, i.jsx)("div", {
    className: g.zi,
    children: (0, i.jsx)(p.A, {
      applicationId: t,
      guildId: n,
      inModal: false,
      editedTargetPermissions: l,
      originalApplicationPermissions: r,
      selectedPermissionCount: a
    })
  })
}