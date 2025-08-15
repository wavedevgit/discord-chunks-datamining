/** Chunk was on 78086 **/
/** chunk id: 570870, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
let _ = e => {
  let n, {
      commandType: t,
      commandTargetId: l,
      channel: _,
      guildId: O,
      onHeightUpdate: E,
      context: Z
    } = e,
    j = (0, a.e7)([p.Z], () => p.Z.getGuild(null != O ? O : _.guild_id)),
    T = (0, a.e7)([g.default], () => g.default.getUser(l)),
    S = (0, f.Z)({
      user: T,
      guildId: null == j ? true : j.id,
      context: Z
    }),
    x = i.useMemo(() => ({
      channel: _,
      type: "channel"
    }), [_]),
    {
      commands: A,
      sectionDescriptors: I,
      loading: P
    } = s.wi({
      context: x,
      filters: {
        commandTypes: [t]
      },
      options: {
        limit: m.lr
      },
      allowFetch: true
    }),
    {
      sections: C
    } = i.useMemo(() => {
      let e = {};
      return I.forEach(n => {
        e[n.id] = n
      }), {
        sections: e
      }
    }, [I]),
    w = i.useRef(P);
  i.useEffect(() => {
    P !== w.current && (w.current = P, null == E || E())
  }, [P, E]);
  let N = i.useCallback(e => {
    o()(null != _, "menu item should not show if channel is null");
    let n = C[e.applicationId],
      t = null != n ? (0, d.ky)(n) : true;
    return (0, r.jsx)(c.sNh, {
      id: e.id,
      label: e.displayName,
      iconLeft: () => null != t ? (0, r.jsx)(t, {
        channel: _,
        section: n,
        width: 18,
        height: 18,
        selectable: false
      }) : null,
      action: () => {
        (0, u.Z)({
          command: e,
          optionValues: {},
          context: {
            channel: _,
            guild: j
          },
          commandTargetId: l
        })
      }
    }, e.id)
  }, [_, j, l, C]);
  if (P ? n = (0, r.jsx)(c.sNh, {
      id: "menu-commands-placeholder",
      render: () => (0, r.jsx)(h.Z, {}),
      disabled: true
    }, "menu-commands-placeholder") : (n = 0 === A.length ? (0, r.jsx)(c.sNh, {
      id: "menu-commands-empty",
      label: v.intl.string(v.t.YSNlV1),
      disabled: true
    }, "menu-commands-empty") : A.map(N), null != S && S.length > 0 && (n = (0, r.jsxs)(r.Fragment, {
      children: [n, (0, r.jsx)(c.Clw, {}, "separator"), S]
    }))), !b.TPd.TEXTUAL.has(_.type))
    if (null == S) return null;
    else n = S;
  return (0, r.jsx)(c.sNh, {
    id: "apps",
    label: v.intl.string(v.t.PHjkRE),
    listClassName: y.list,
    children: n
  })
}