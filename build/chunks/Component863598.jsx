/** Chunk was on 47841 **/
/** chunk id: 863598, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  h: () => v,
  y: () => O
}), require("./667532.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk478437 = require("./478437.js"),
  Chunk311907 = require("./311907.js"),
  Chunk417048 = require("./417048.jsx"),
  Chunk843282 = require("./843282.jsx"),
  Chunk999903 = require("./999903.js"),
  Chunk47167 = require("./47167.js"),
  Chunk713654 = require("./713654.js"),
  Chunk734057 = require("./734057.js"),
  Chunk769765 = require("./769765.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk997509 = require("./997509.js"),
  Chunk985018 = require("./985018.jsx");
let x = "NO_CHANNEL";

function j(e) {
  return {
    value: e.id,
    label: (0, d.m1)(e, f.default, p.A),
    channel: e,
    category: g.A.getChannel(e.parent_id)
  }
}

function _(e) {
  let {
    option: t
  } = e, {
    label: n,
    channel: l,
    category: s
  } = t, o = i.useMemo(() => (0, u.gU)(l), [l]), c = (0, d.Ay)(l);
  return (0, r.jsx)(a.X, {
    title: n,
    icon: o,
    subtitle: null != s ? c : null
  })
}

function O(e) {
  let {
    canManageGuild: t,
    guildId: n,
    afkChannelId: a,
    label: o
  } = e, d = (0, s.bG)([m.A], () => m.A.getCategories(n)), u = i.useMemo(() => {
    let e = (0, c.A)(d._categories, d).filter(e => {
      let {
        channel: t
      } = e;
      return t.type === l.r.GUILD_VOICE
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
    b.A.updateGuild({
      afkChannelId: t
    })
  }, []);
  return (0, r.jsx)(y, {
    label: o,
    value: null != a ? a : x,
    options: u,
    canManageGuild: t,
    onChange: g
  })
}

function v(e) {
  let {
    canManageGuild: t,
    guildId: n,
    systemChannelId: a,
    label: o,
    description: d,
    layout: u
  } = e, g = (0, s.bG)([m.A], () => m.A.getCategories(n)), p = i.useMemo(() => {
    let e = (0, c.A)(g._categories, g).filter(e => {
      let {
        channel: t
      } = e;
      return t.type === l.r.GUILD_TEXT
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
  }, [g]), f = i.useCallback(e => {
    let t = e === x ? null : e;
    b.A.updateGuild({
      systemChannelId: t
    })
  }, []);
  return (0, r.jsx)(y, {
    label: o,
    description: d,
    layout: u,
    value: null != a ? a : x,
    options: p,
    canManageGuild: t,
    onChange: f
  })
}

function y(e) {
  let {
    value: t,
    options: n,
    canManageGuild: l,
    onChange: s,
    label: a,
    description: c,
    layout: d
  } = e, u = i.useCallback(e => {
    if (null != e) return (0, r.jsx)(_, {
      option: e
    })
  }, []), g = i.useCallback(e => u(e[0]), [u]);
  return (0, r.jsx)(o.Te, {
    label: a,
    description: c,
    value: t,
    options: n,
    isDisabled: !l,
    onChange: s,
    renderOptionLabel: u,
    renderOptionValue: g,
    layout: d,
    "data-migration-pending": true
  })
}