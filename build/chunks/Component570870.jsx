/** Chunk was on 43812 **/
/** chunk id: 570870, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk386348 = require("./386348.js");
let E = e => {
  let t, {
      commandType: n,
      commandTargetId: l,
      channel: E,
      guildId: _,
      onHeightUpdate: y,
      context: A
    } = e,
    Z = (0, o.e7)([v.Z], () => v.Z.getGuild(null != _ ? _ : E.guild_id)),
    C = (0, o.e7)([g.default], () => g.default.getUser(l)),
    R = (0, f.Z)({
      user: C,
      guildId: null == Z ? true : Z.id,
      context: A
    }),
    I = r.useMemo(() => ({
      channel: E,
      type: "channel"
    }), [E]),
    {
      commands: P,
      sectionDescriptors: S,
      loading: T
    } = d.wi({
      context: I,
      filters: {
        commandTypes: [n]
      },
      options: {
        limit: O.lr
      },
      allowFetch: true
    }),
    {
      sections: N
    } = r.useMemo(() => {
      let e = {};
      return S.forEach(t => {
        e[t.id] = t
      }), {
        sections: e
      }
    }, [S]),
    j = r.useRef(T);
  r.useEffect(() => {
    T !== j.current && (j.current = T, null == y || y())
  }, [T, y]);
  let U = r.useCallback(e => {
    a()(null != E, "menu item should not show if channel is null");
    let t = N[e.applicationId],
      n = null != t ? (0, c.ky)(t) : true;
    return (0, i.jsx)(u.sNh, {
      id: e.id,
      label: e.displayName,
      iconLeft: () => null != n ? (0, i.jsx)(n, {
        channel: E,
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
            channel: E,
            guild: Z
          },
          commandTargetId: l
        })
      }
    }, e.id)
  }, [E, Z, l, N]);
  if (T ? t = (0, i.jsx)(u.sNh, {
      id: "menu-commands-placeholder",
      render: () => (0, i.jsx)(p.Z, {}),
      disabled: true
    }, "menu-commands-placeholder") : (t = 0 === P.length ? (0, i.jsx)(u.sNh, {
      id: "menu-commands-empty",
      label: m.intl.string(m.t.YSNlV1),
      disabled: true
    }, "menu-commands-empty") : P.map(U), null != R && R.length > 0 && (t = (0, i.jsxs)(i.Fragment, {
      children: [t, (0, i.jsx)(u.Clw, {}, "separator"), R]
    }))), !h.TPd.TEXTUAL.has(E.type))
    if (null == R) return null;
    else t = R;
  return (0, i.jsx)(u.sNh, {
    id: "apps",
    label: m.intl.string(m.t.PHjkRE),
    listClassName: b.list,
    children: t
  })
}