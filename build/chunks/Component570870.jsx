/** Chunk was on web.js **/
/** chunk id: 570870, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk10718 = require("./10718.js"),
  Chunk667204 = require("./667204.js"),
  Chunk826298 = require("./826298.js"),
  Chunk276022 = require("./276022.jsx"),
  Chunk978983 = require("./978983.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js"),
  Chunk689079 = require("./689079.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk891628 = require("./891628.js");
let y = e => {
  let t, {
      commandType: n,
      commandTargetId: o,
      channel: y,
      guildId: O,
      onHeightUpdate: v,
      context: I
    } = e,
    T = (0, s.e7)([p.Z], () => p.Z.getGuild(null != O ? O : y.guild_id)),
    S = (0, s.e7)([h.default], () => h.default.getUser(o)),
    A = (0, f.Z)({
      user: S,
      guildId: null == T ? true : T.id,
      context: I
    }),
    N = i.useMemo(() => ({
      channel: y,
      type: "channel"
    }), [y]),
    {
      commands: C,
      sectionDescriptors: R,
      loading: P
    } = c.wi({
      context: N,
      filters: {
        commandTypes: [n]
      },
      options: {
        limit: g.lr
      },
      allowFetch: true
    }),
    {
      sections: w
    } = i.useMemo(() => {
      let e = {};
      return R.forEach(t => {
        e[t.id] = t
      }), {
        sections: e
      }
    }, [R]),
    D = i.useRef(P);
  i.useEffect(() => {
    P !== D.current && (D.current = P, null == v || v())
  }, [P, v]);
  let L = i.useCallback(e => {
    a()(null != y, "menu item should not show if channel is null");
    let t = w[e.applicationId],
      n = null != t ? (0, d.ky)(t) : true;
    return (0, r.jsx)(l.sNh, {
      id: e.id,
      label: e.displayName,
      iconLeft: () => null != n ? (0, r.jsx)(n, {
        channel: y,
        section: t,
        width: 18,
        height: 18,
        selectable: false
      }) : null,
      action: () => {
        (0, u.Z)({
          command: e,
          optionValues: {},
          context: {
            channel: y,
            guild: T
          },
          commandTargetId: o
        })
      }
    }, e.id)
  }, [y, T, o, w]);
  if (P ? t = (0, r.jsx)(l.sNh, {
      id: "menu-commands-placeholder",
      render: () => (0, r.jsx)(_.Z, {}),
      disabled: true
    }, "menu-commands-placeholder") : (t = 0 === C.length ? (0, r.jsx)(l.sNh, {
      id: "menu-commands-empty",
      label: E.intl.string(E.t.YSNlV1),
      disabled: true
    }, "menu-commands-empty") : C.map(L), null != A && A.length > 0 && (t = (0, r.jsxs)(r.Fragment, {
      children: [t, (0, r.jsx)(l.Clw, {}, "separator"), A]
    }))), !m.TPd.TEXTUAL.has(y.type))
    if (null == A) return null;
    else t = A;
  return (0, r.jsx)(l.sNh, {
    id: "apps",
    label: E.intl.string(E.t.PHjkRE),
    listClassName: b.list,
    children: t
  })
}