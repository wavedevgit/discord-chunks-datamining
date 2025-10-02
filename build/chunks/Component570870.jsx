/** Chunk was on 81364 **/
/** chunk id: 570870, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => I
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
  Chunk891628 = require("./891628.js");
let I = e => {
  let n, {
      commandType: t,
      commandTargetId: o,
      channel: I,
      guildId: T,
      onHeightUpdate: Z,
      context: j
    } = e,
    C = (0, a.e7)([m.Z], () => m.Z.getGuild(null != T ? T : I.guild_id)),
    w = (0, a.e7)([_.default], () => _.default.getUser(o)),
    k = (0, p.Z)({
      user: w,
      guildId: null == C ? true : C.id,
      context: j
    }),
    v = i.useMemo(() => ({
      channel: I,
      type: "channel"
    }), [I]),
    {
      commands: y,
      sectionDescriptors: N,
      loading: H
    } = u.wi({
      context: v,
      filters: {
        commandTypes: [t]
      },
      options: {
        limit: g.lr
      },
      allowFetch: true
    }),
    {
      sections: M
    } = i.useMemo(() => {
      let e = {};
      return N.forEach(n => {
        e[n.id] = n
      }), {
        sections: e
      }
    }, [N]),
    E = i.useRef(H);
  i.useEffect(() => {
    H !== E.current && (E.current = H, null == Z || Z())
  }, [H, Z]);
  let P = i.useCallback(e => {
    s()(null != I, "menu item should not show if channel is null");
    let n = M[e.applicationId],
      t = null != n ? (0, d.ky)(n) : true;
    return (0, l.jsx)(c.sNh, {
      id: e.id,
      label: e.displayName,
      iconLeft: () => null != t ? (0, l.jsx)(t, {
        channel: I,
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
            channel: I,
            guild: C
          },
          commandTargetId: o
        })
      }
    }, e.id)
  }, [I, C, o, M]);
  if (H ? n = (0, l.jsx)(c.sNh, {
      id: "menu-commands-placeholder",
      render: () => (0, l.jsx)(f.Z, {}),
      disabled: true
    }, "menu-commands-placeholder") : (n = 0 === y.length ? (0, l.jsx)(c.sNh, {
      id: "menu-commands-empty",
      label: x.intl.string(x.t.YSNlV1),
      disabled: true
    }, "menu-commands-empty") : y.map(P), null != k && k.length > 0 && (n = (0, l.jsxs)(l.Fragment, {
      children: [n, (0, l.jsx)(c.Clw, {}, "separator"), k]
    }))), !h.TPd.TEXTUAL.has(I.type))
    if (null == k) return null;
    else n = k;
  return (0, l.jsx)(c.sNh, {
    id: "apps",
    label: x.intl.string(x.t.PHjkRE),
    listClassName: b.list,
    children: n
  })
}