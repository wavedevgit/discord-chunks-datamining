/** Chunk was on 384 **/
/** chunk id: 578053, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  g: () => v,
  u: () => O
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
let b = "NO_CHANNEL";

function j(e) {
  return {
    value: e.id,
    label: (0, u.F6)(e, f.default, p.Z),
    channel: e,
    category: g.Z.getChannel(e.parent_id)
  }
}

function _(e) {
  let {
    option: t
  } = e, {
    label: n,
    channel: l,
    category: s
  } = t, o = i.useMemo(() => (0, d.KS)(l), [l]), c = (0, u.ZP)(l);
  return (0, r.jsx)(a.Z, {
    title: n,
    icon: o,
    subtitle: null != s ? c : null
  })
}

function v(e) {
  let {
    canManageGuild: t,
    guildId: n,
    afkChannelId: a,
    label: o
  } = e, u = (0, s.e7)([m.Z], () => m.Z.getCategories(n)), d = i.useMemo(() => {
    let e = (0, c.Z)(u._categories, u).filter(e => {
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
      value: b,
      label: x.intl.string(x.t.wGiHkK)
    }), e
  }, [u]), g = i.useCallback(e => {
    let t = e === b ? null : e;
    h.Z.updateGuild({
      afkChannelId: t
    })
  }, []);
  return (0, r.jsx)(C, {
    label: o,
    value: null != a ? a : b,
    options: d,
    canManageGuild: t,
    onChange: g
  })
}

function O(e) {
  let {
    canManageGuild: t,
    guildId: n,
    systemChannelId: a,
    label: o,
    description: u,
    layout: d
  } = e, g = (0, s.e7)([m.Z], () => m.Z.getCategories(n)), p = i.useMemo(() => {
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
      value: b,
      label: x.intl.string(x.t.ibUhoa)
    }), e
  }, [g]), f = i.useCallback(e => {
    let t = e === b ? null : e;
    h.Z.updateGuild({
      systemChannelId: t
    })
  }, []);
  return (0, r.jsx)(C, {
    label: o,
    description: u,
    layout: d,
    value: null != a ? a : b,
    options: p,
    canManageGuild: t,
    onChange: f
  })
}

function C(e) {
  let {
    value: t,
    options: n,
    canManageGuild: l,
    onChange: s,
    label: a,
    description: c,
    layout: u
  } = e, d = i.useCallback(e => {
    if (null != e) return (0, r.jsx)(_, {
      option: e
    })
  }, []), g = i.useCallback(e => d(e[0]), [d]);
  return (0, r.jsx)(o.y6, {
    label: a,
    description: c,
    value: t,
    options: n,
    isDisabled: !l,
    onChange: s,
    renderOptionLabel: d,
    renderOptionValue: g,
    layout: u
  })
}