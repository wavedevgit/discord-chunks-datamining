/** Chunk was on 36084 **/
/** chunk id: 570870, original params: e,t,n (module,exports,require) **/
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
  Chunk386348 = require("./386348.js");
let v = e => {
  let t, {
      commandType: n,
      commandTargetId: l,
      channel: v,
      guildId: P,
      onHeightUpdate: j,
      context: E
    } = e,
    Z = (0, u.e7)([g.Z], () => g.Z.getGuild(null != P ? P : v.guild_id)),
    S = (0, u.e7)([O.default], () => O.default.getUser(l)),
    A = (0, f.Z)({
      user: S,
      guildId: null == Z ? true : Z.id,
      context: E
    }),
    I = i.useMemo(() => ({
      channel: v,
      type: "channel"
    }), [v]),
    {
      commands: T,
      sectionDescriptors: R,
      loading: N
    } = c.wi({
      context: I,
      filters: {
        commandTypes: [n]
      },
      options: {
        limit: b.lr
      },
      allowFetch: true
    }),
    {
      sections: x
    } = i.useMemo(() => {
      let e = {};
      return R.forEach(t => {
        e[t.id] = t
      }), {
        sections: e
      }
    }, [R]),
    _ = i.useRef(N);
  i.useEffect(() => {
    N !== _.current && (_.current = N, null == j || j())
  }, [N, j]);
  let w = i.useCallback(e => {
    o()(null != v, "menu item should not show if channel is null");
    let t = x[e.applicationId],
      n = null != t ? (0, d.ky)(t) : true;
    return (0, r.jsx)(a.sNh, {
      id: e.id,
      label: e.displayName,
      iconLeft: () => null != n ? (0, r.jsx)(n, {
        channel: v,
        section: t,
        width: 18,
        height: 18,
        selectable: false
      }) : null,
      action: () => {
        (0, s.Z)({
          command: e,
          optionValues: {},
          context: {
            channel: v,
            guild: Z
          },
          commandTargetId: l
        })
      }
    }, e.id)
  }, [v, Z, l, x]);
  if (N ? t = (0, r.jsx)(a.sNh, {
      id: "menu-commands-placeholder",
      render: () => (0, r.jsx)(p.Z, {}),
      disabled: true
    }, "menu-commands-placeholder") : (t = 0 === T.length ? (0, r.jsx)(a.sNh, {
      id: "menu-commands-empty",
      label: y.intl.string(y.t.YSNlV1),
      disabled: true
    }, "menu-commands-empty") : T.map(w), null != A && A.length > 0 && (t = (0, r.jsxs)(r.Fragment, {
      children: [t, (0, r.jsx)(a.Clw, {}, "separator"), A]
    }))), !m.TPd.TEXTUAL.has(v.type))
    if (null == A) return null;
    else t = A;
  return (0, r.jsx)(a.sNh, {
    id: "apps",
    label: y.intl.string(y.t.PHjkRE),
    listClassName: h.list,
    children: t
  })
}