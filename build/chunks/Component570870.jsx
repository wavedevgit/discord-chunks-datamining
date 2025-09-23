/** Chunk was on 45136 **/
/** chunk id: 570870, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
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
  Chunk386348 = require("./386348.js");
let x = e => {
  let n, {
      commandType: t,
      commandTargetId: o,
      channel: x,
      guildId: T,
      onHeightUpdate: N,
      context: C
    } = e,
    P = (0, a.e7)([m.Z], () => m.Z.getGuild(null != T ? T : x.guild_id)),
    Z = (0, a.e7)([_.default], () => _.default.getUser(o)),
    M = (0, f.Z)({
      user: Z,
      guildId: null == P ? true : P.id,
      context: C
    }),
    v = l.useMemo(() => ({
      channel: x,
      type: "channel"
    }), [x]),
    {
      commands: j,
      sectionDescriptors: w,
      loading: E
    } = c.wi({
      context: v,
      filters: {
        commandTypes: [t]
      },
      options: {
        limit: h.lr
      },
      allowFetch: true
    }),
    {
      sections: R
    } = l.useMemo(() => {
      let e = {};
      return w.forEach(n => {
        e[n.id] = n
      }), {
        sections: e
      }
    }, [w]),
    A = l.useRef(E);
  l.useEffect(() => {
    E !== A.current && (A.current = E, null == N || N())
  }, [E, N]);
  let O = l.useCallback(e => {
    s()(null != x, "menu item should not show if channel is null");
    let n = R[e.applicationId],
      t = null != n ? (0, d.ky)(n) : true;
    return (0, i.jsx)(u.sNh, {
      id: e.id,
      label: e.displayName,
      iconLeft: () => null != t ? (0, i.jsx)(t, {
        channel: x,
        section: n,
        width: 18,
        height: 18,
        selectable: false
      }) : null,
      action: () => {
        (0, r.Z)({
          command: e,
          optionValues: {},
          context: {
            channel: x,
            guild: P
          },
          commandTargetId: o
        })
      }
    }, e.id)
  }, [x, P, o, R]);
  if (E ? n = (0, i.jsx)(u.sNh, {
      id: "menu-commands-placeholder",
      render: () => (0, i.jsx)(p.Z, {}),
      disabled: true
    }, "menu-commands-placeholder") : (n = 0 === j.length ? (0, i.jsx)(u.sNh, {
      id: "menu-commands-empty",
      label: I.intl.string(I.t.YSNlV1),
      disabled: true
    }, "menu-commands-empty") : j.map(O), null != M && M.length > 0 && (n = (0, i.jsxs)(i.Fragment, {
      children: [n, (0, i.jsx)(u.Clw, {}, "separator"), M]
    }))), !g.TPd.TEXTUAL.has(x.type))
    if (null == M) return null;
    else n = M;
  return (0, i.jsx)(u.sNh, {
    id: "apps",
    label: I.intl.string(I.t.PHjkRE),
    listClassName: b.list,
    children: n
  })
}