/** Chunk was on 54052 **/
/** chunk id: 578053, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  g: () => _,
  u: () => v
}), require("./290780.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk106351 = require("./106351.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk740504 = require("./740504.js"),
  Chunk933557 = require("./933557.js"),
  Chunk471445 = require("./471445.js"),
  Chunk592125 = require("./592125.js"),
  Chunk324067 = require("./324067.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk434404 = require("./434404.js"),
  Chunk388032 = require("./388032.jsx");
let b = "NO_CHANNEL";

function x(e) {
  return {
    value: e.id,
    label: (0, c.F6)(e, p.default, g.Z),
    channel: e,
    category: u.Z.getChannel(e.parent_id)
  }
}

function j(e) {
  let {
    option: t
  } = e, {
    label: n,
    channel: l,
    category: a
  } = t, o = i.useMemo(() => (0, d.KS)(l), [l]), u = (0, c.ZP)(l);
  return (0, r.jsx)(s.ZZ$, {
    title: n,
    icon: o,
    subtitle: null != a ? u : null
  })
}

function _(e) {
  let {
    canManageGuild: t,
    guildId: n,
    afkChannelId: s
  } = e, c = (0, a.e7)([m.Z], () => m.Z.getCategories(n)), d = i.useMemo(() => {
    let e = (0, o.Z)(c._categories, c).filter(e => {
      let {
        channel: t
      } = e;
      return t.type === l.d.GUILD_VOICE
    }).map(e => {
      let {
        channel: t
      } = e;
      return x(t)
    });
    return e.unshift({
      value: b,
      label: h.intl.string(h.t.wGiHkJ)
    }), e
  }, [c]), u = i.useCallback(e => {
    let t = e === b ? null : e;
    f.Z.updateGuild({
      afkChannelId: t
    })
  }, []);
  return (0, r.jsx)(O, {
    value: null != s ? s : b,
    options: d,
    canManageGuild: t,
    onChange: u
  })
}

function v(e) {
  let {
    canManageGuild: t,
    guildId: n,
    systemChannelId: s
  } = e, c = (0, a.e7)([m.Z], () => m.Z.getCategories(n)), d = i.useMemo(() => {
    let e = (0, o.Z)(c._categories, c).filter(e => {
      let {
        channel: t
      } = e;
      return t.type === l.d.GUILD_TEXT
    }).map(e => {
      let {
        channel: t
      } = e;
      return x(t)
    });
    return e.unshift({
      value: b,
      label: h.intl.string(h.t.ibUhoa)
    }), e
  }, [c]), u = i.useCallback(e => {
    let t = e === b ? null : e;
    f.Z.updateGuild({
      systemChannelId: t
    })
  }, []);
  return (0, r.jsx)(O, {
    value: null != s ? s : b,
    options: d,
    canManageGuild: t,
    onChange: u
  })
}

function O(e) {
  let {
    value: t,
    options: n,
    canManageGuild: l,
    onChange: a
  } = e, o = i.useCallback(e => {
    if (null != e) return (0, r.jsx)(j, {
      option: e
    })
  }, []), c = i.useCallback(e => o(e[0]), [o]);
  return (0, r.jsx)(s.q4e, {
    value: t,
    options: n,
    isDisabled: !l,
    onChange: a,
    renderOptionLabel: o,
    renderOptionValue: c
  })
}