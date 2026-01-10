/** Chunk was on 9536 **/
/** chunk id: 578053, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  g: () => O,
  u: () => y
}), require("./290780.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk106351 = require("./106351.js"),
  Chunk442837 = require("./442837.js"),
  Chunk311047 = require("./311047.jsx"),
  Chunk199849 = require("./199849.jsx"),
  Chunk740504 = require("./740504.js"),
  Chunk933557 = require("./933557.js"),
  Chunk471445 = require("./471445.js"),
  Chunk592125 = require("./592125.js"),
  Chunk324067 = require("./324067.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk434404 = require("./434404.js"),
  Chunk388032 = require("./388032.jsx");
let x = "NO_CHANNEL";

function j(e) {
  return {
    value: e.id,
    label: (0, d.F6)(e, b.default, m.Z),
    channel: e,
    category: g.Z.getChannel(e.parent_id)
  }
}

function v(e) {
  let {
    option: t
  } = e, {
    label: n,
    channel: l,
    category: a
  } = t, o = i.useMemo(() => (0, u.KS)(l), [l]), c = (0, d.ZP)(l);
  return (0, r.jsx)(s.Z, {
    title: n,
    icon: o,
    subtitle: null != a ? c : null
  })
}

function O(e) {
  let {
    canManageGuild: t,
    guildId: n,
    afkChannelId: s,
    label: o
  } = e, d = (0, a.e7)([f.Z], () => f.Z.getCategories(n)), u = i.useMemo(() => {
    let e = (0, c.Z)(d._categories, d).filter(e => {
      let {
        channel: t
      } = e;
      return t.type === l.d.GUILD_VOICE
    }).map(e => {
      let {
        channel: t
      } = e;
      return j(t)
    });
    return e.unshift({
      value: x,
      label: h.intl.string(h.t.wGiHkK)
    }), e
  }, [d]), g = i.useCallback(e => {
    let t = e === x ? null : e;
    p.Z.updateGuild({
      afkChannelId: t
    })
  }, []);
  return (0, r.jsx)(C, {
    label: o,
    value: null != s ? s : x,
    options: u,
    canManageGuild: t,
    onChange: g
  })
}

function y(e) {
  let {
    canManageGuild: t,
    guildId: n,
    systemChannelId: s,
    label: o,
    description: d,
    layout: u
  } = e, g = (0, a.e7)([f.Z], () => f.Z.getCategories(n)), m = i.useMemo(() => {
    let e = (0, c.Z)(g._categories, g).filter(e => {
      let {
        channel: t
      } = e;
      return t.type === l.d.GUILD_TEXT
    }).map(e => {
      let {
        channel: t
      } = e;
      return j(t)
    });
    return e.unshift({
      value: x,
      label: h.intl.string(h.t.ibUhoa)
    }), e
  }, [g]), b = i.useCallback(e => {
    let t = e === x ? null : e;
    p.Z.updateGuild({
      systemChannelId: t
    })
  }, []);
  return (0, r.jsx)(C, {
    label: o,
    description: d,
    layout: u,
    value: null != s ? s : x,
    options: m,
    canManageGuild: t,
    onChange: b
  })
}

function C(e) {
  let {
    value: t,
    options: n,
    canManageGuild: l,
    onChange: a,
    label: s,
    description: c,
    layout: d
  } = e, u = i.useCallback(e => {
    if (null != e) return (0, r.jsx)(v, {
      option: e
    })
  }, []), g = i.useCallback(e => u(e[0]), [u]);
  return (0, r.jsx)(o.y6, {
    label: s,
    description: c,
    value: t,
    options: n,
    isDisabled: !l,
    onChange: a,
    renderOptionLabel: u,
    renderOptionValue: g,
    layout: d
  })
}