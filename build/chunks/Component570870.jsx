/** Chunk was on 74379 **/
/** chunk id: 570870, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => v
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
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
let v = e => {
  let n, {
      commandType: t,
      commandTargetId: l,
      channel: v,
      guildId: O,
      onHeightUpdate: y,
      context: x
    } = e,
    _ = (0, s.e7)([b.Z], () => b.Z.getGuild(null != O ? O : v.guild_id)),
    w = (0, s.e7)([p.default], () => p.default.getUser(l)),
    E = (0, f.Z)({
      user: w,
      guildId: null == _ ? true : _.id,
      context: x
    }),
    P = i.useMemo(() => ({
      channel: v,
      type: "channel"
    }), [v]),
    {
      commands: S,
      sectionDescriptors: I,
      loading: C
    } = c.wi({
      context: P,
      filters: {
        commandTypes: [t]
      },
      options: {
        limit: h.lr
      },
      allowFetch: true
    }),
    {
      sections: T
    } = i.useMemo(() => {
      let e = {};
      return I.forEach(n => {
        e[n.id] = n
      }), {
        sections: e
      }
    }, [I]),
    k = i.useRef(C);
  i.useEffect(() => {
    C !== k.current && (k.current = C, null == y || y())
  }, [C, y]);
  let N = i.useCallback(e => {
    o()(null != v, "menu item should not show if channel is null");
    let n = T[e.applicationId],
      t = null != n ? (0, u.ky)(n) : true;
    return (0, r.jsx)(a.sNh, {
      id: e.id,
      label: e.displayName,
      iconLeft: () => null != t ? (0, r.jsx)(t, {
        channel: v,
        section: n,
        width: 18,
        height: 18,
        selectable: false
      }) : null,
      action: () => {
        (0, d.Z)({
          command: e,
          optionValues: {},
          context: {
            channel: v,
            guild: _
          },
          commandTargetId: l
        })
      }
    }, e.id)
  }, [v, _, l, T]);
  if (C ? n = (0, r.jsx)(a.sNh, {
      id: "menu-commands-placeholder",
      render: () => (0, r.jsx)(m.Z, {}),
      disabled: true
    }, "menu-commands-placeholder") : (n = 0 === S.length ? (0, r.jsx)(a.sNh, {
      id: "menu-commands-empty",
      label: j.intl.string(j.t.YSNlV1),
      disabled: true
    }, "menu-commands-empty") : S.map(N), null != E && E.length > 0 && (n = (0, r.jsxs)(r.Fragment, {
      children: [n, (0, r.jsx)(a.Clw, {}, "separator"), E]
    }))), !g.TPd.TEXTUAL.has(v.type))
    if (null == E) return null;
    else n = E;
  return (0, r.jsx)(a.sNh, {
    id: "apps",
    label: j.intl.string(j.t.PHjkRE),
    listClassName: Z.list,
    children: n
  })
}