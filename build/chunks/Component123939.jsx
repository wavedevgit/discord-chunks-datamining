/** Chunk was on 78560 **/
/** chunk id: 123939, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => m
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk832712 = require("./832712.js"),
  Chunk995102 = require("./995102.jsx"),
  Chunk543465 = require("./543465.js"),
  Chunk477427 = require("./477427.js"),
  Chunk985018 = require("./985018.jsx");
let m = t => {
  var e;
  let {
    onClose: n,
    channelId: m,
    applicationId: p,
    transitionState: h
  } = t, v = (0, a.bG)([o.Ay], () => o.Ay.getChannelMuteConfig(null, m)), A = l.useMemo(() => (0, s.gv)().map(t => {
    let {
      label: e,
      value: n
    } = t;
    return {
      name: e,
      value: n
    }
  }), []);
  return (0, i.jsx)(r.Modal, {
    transitionState: h,
    onClose: n,
    title: g.intl.string(g.t.NkwaBs),
    actions: [{
      variant: "primary",
      text: g.intl.string(g.t.cpT0Cq),
      onClick: n
    }],
    children: (0, i.jsx)(u.z6M, {
      options: A,
      onChange: t => {
        d.A.updateAppDMOverrideSettings(null, m, p, (0, s.pB)(t), c.fd.Muted)
      },
      value: null != (e = null == v ? true : v.selected_time_window) ? e : true
    })
  })
}