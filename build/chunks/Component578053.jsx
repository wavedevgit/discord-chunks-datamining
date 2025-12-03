/** Chunk was on 384 **/
/** chunk id: 578053, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  g: () => _,
  u: () => v
}), require("./290780.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
    label: (0, c.F6)(e, p.default, m.Z),
    channel: e,
    category: d.Z.getChannel(e.parent_id)
  }
}

function j(e) {
  let {
    option: t
  } = e, {
    label: n,
    channel: l,
    category: a
  } = t, o = i.useMemo(() => (0, u.KS)(l), [l]), d = (0, c.ZP)(l);
  return (0, r.jsx)(s.ZZ$, {
    title: n,
    icon: o,
    subtitle: null != a ? d : null
  })
}

function _(e) {
  let {
    canManageGuild: t,
    guildId: n,
    afkChannelId: s,
    label: c
  } = e, u = (0, a.e7)([g.Z], () => g.Z.getCategories(n)), d = i.useMemo(() => {
    let e = (0, o.Z)(u._categories, u).filter(e => {
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
      label: h.intl.string(h.t.wGiHkK)
    }), e
  }, [u]), m = i.useCallback(e => {
    let t = e === b ? null : e;
    f.Z.updateGuild({
      afkChannelId: t
    })
  }, []);
  return (0, r.jsx)(O, {
    label: c,
    value: null != s ? s : b,
    options: d,
    canManageGuild: t,
    onChange: m
  })
}

function v(e) {
  let {
    canManageGuild: t,
    guildId: n,
    systemChannelId: s,
    label: c,
    description: u,
    layout: d
  } = e, m = (0, a.e7)([g.Z], () => g.Z.getCategories(n)), p = i.useMemo(() => {
    let e = (0, o.Z)(m._categories, m).filter(e => {
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
  }, [m]), j = i.useCallback(e => {
    let t = e === b ? null : e;
    f.Z.updateGuild({
      systemChannelId: t
    })
  }, []);
  return (0, r.jsx)(O, {
    label: c,
    description: u,
    layout: d,
    value: null != s ? s : b,
    options: p,
    canManageGuild: t,
    onChange: j
  })
}

function O(e) {
  let {
    value: t,
    options: n,
    canManageGuild: l,
    onChange: a,
    label: o,
    description: c,
    layout: u
  } = e, d = i.useCallback(e => {
    if (null != e) return (0, r.jsx)(j, {
      option: e
    })
  }, []), g = i.useCallback(e => d(e[0]), [d]);
  return (0, r.jsx)(s.q4e, {
    label: o,
    description: c,
    value: t,
    options: n,
    isDisabled: !l,
    onChange: a,
    renderOptionLabel: d,
    renderOptionValue: g,
    layout: u
  })
}