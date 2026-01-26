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
    applicationId: v,
    transitionState: p
  } = t, b = (0, a.bG)([o.Ay], () => o.Ay.getChannelMuteConfig(null, m)), _ = l.useMemo(() => (0, s.gv)().map(t => {
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
    transitionState: p,
    onClose: n,
    title: c.intl.string(c.t.NkwaBs),
    actions: [{
      variant: "primary",
      text: c.intl.string(c.t.cpT0Cq),
      onClick: n
    }],
    children: (0, i.jsx)(u.z6M, {
      options: _,
      onChange: t => {
        d.A.updateAppDMOverrideSettings(null, m, v, (0, s.pB)(t), g.fd.Muted)
      },
      value: null != (e = null == b ? true : b.selected_time_window) ? e : true
    })
  })
}