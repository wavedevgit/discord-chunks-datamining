/** Chunk was on 86915 **/
/** chunk id: 162389, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk787014 = require("./787014.js"),
  Chunk603211 = require("./603211.js"),
  Chunk710344 = require("./710344.js"),
  Chunk496675 = require("./496675.js"),
  Chunk479099 = require("./479099.jsx"),
  Chunk710352 = require("./710352.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk244736 = require("./244736.js");

function j(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function y(e) {
  let {
    channel: t
  } = e, r = (0, a.e7)([g.Z], () => g.Z.can(f.Plq.MANAGE_CHANNELS, t), [t]), u = t.availableTags.length >= m.pC, p = t.availableTags.length > 0, y = l.useCallback(() => {
    let e = t.availableTags.length >= m.pC;
    r && !e && (0, c.ZDy)(async () => {
      let {
        default: e
      } = await n.e("21971").then(n.bind(n, 201049));
      return n => (0, i.jsx)(e, v(j({}, n), {
        channelId: t.id,
        guildId: t.guild_id
      }))
    })
  }, [t, r]), S = l.useCallback(e => {
    r && (0, c.ZDy)(async () => {
      let {
        default: l
      } = await n.e("21971").then(n.bind(n, 201049));
      return n => (0, i.jsx)(l, v(j({}, n), {
        channelId: t.id,
        guildId: t.guild_id,
        tag: e
      }))
    })
  }, [r, t]), {
    handleDragStart: N,
    handleDragReset: O,
    handleDragComplete: Z
  } = (0, h.Z)(t.availableTags, e => {
    (0, d.pW)({
      availableTags: e
    })
  });
  return (0, i.jsxs)("div", {
    className: x.tags,
    children: [p ? t.availableTags.map(e => (0, i.jsx)(C, {
      tag: e,
      availableTags: t.availableTags,
      canManageChannels: r,
      onTagClick: S,
      onDragComplete: Z,
      onDragReset: O,
      onDragStart: N
    }, e.id)) : null, p ? (0, i.jsx)(c.P3F, {
      onClick: y,
      className: s()(x.addTags, {
        [x.disabled]: !r || u
      }),
      children: (0, i.jsx)(c.qJs, {
        size: "custom",
        "aria-label": b.intl.string(b.t["/jubeD"]),
        color: o.Z.unsafe_rawColors.WHITE_500.css,
        width: 20,
        height: 20
      })
    }) : (0, i.jsx)(c.Button, {
      variant: "primary",
      text: b.intl.string(b.t["/jubeD"]),
      disabled: !r,
      onClick: y
    })]
  })
}

function C(e) {
  let {
    tag: t,
    availableTags: n,
    canManageChannels: l,
    onTagClick: r,
    onDragComplete: a,
    onDragStart: o,
    onDragReset: c
  } = e, d = n.findIndex(e => e.id === t.id), {
    drag: h,
    dragSourcePosition: g,
    drop: m,
    setIsDraggable: f
  } = (0, u.Z)({
    type: "CHANNEL_SETTINGS_FORUM_TAGS",
    index: d,
    optionId: t.id,
    onDragStart: o,
    onDragComplete: a,
    onDragReset: c
  });
  return (0, i.jsx)("div", {
    className: s()(x.container, {
      [x.dropIndicatorBefore]: null != g && d < g,
      [x.dropIndicatorAfter]: null != g && d > g
    }),
    ref: e => {
      h(m(e))
    },
    onMouseEnter: () => f(l),
    onMouseLeave: () => f(false),
    children: (0, i.jsx)(p.Z, {
      tag: t,
      disabled: !l,
      ariaLabel: b.intl.formatToPlainString(b.t.jhSvB9, {
        name: t.name
      }),
      onClick: l ? () => r(t) : true
    })
  })
}