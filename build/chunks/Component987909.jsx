/** Chunk was on 26434 **/
/** chunk id: 987909, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk159691 = require("./159691.js"),
  Chunk904245 = require("./904245.js"),
  Chunk541716 = require("./541716.js"),
  Chunk419922 = require("./419922.jsx"),
  Chunk665906 = require("./665906.js"),
  Chunk271383 = require("./271383.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk709054 = require("./709054.js"),
  Chunk838440 = require("./838440.js"),
  Chunk981631 = require("./981631.js"),
  Chunk463116 = require("./463116.js");

function E(e) {
  let {
    assets: t,
    currentUser: n,
    message: r
  } = e, i = (g.default.extractTimestamp(n.id) + g.default.extractTimestamp(r.id)) % t.length;
  return t[i]
}

function C(e) {
  let {
    currentUser: t,
    channel: n,
    message: l,
    buttonLabels: u,
    stickers: d,
    event: p,
    eventProperties: m
  } = e, g = i.useMemo(() => E({
    assets: d,
    currentUser: t,
    message: l
  }), [d, t, l]), h = i.useMemo(() => E({
    assets: u,
    currentUser: t,
    message: l
  }), [u, t, l]), b = i.useCallback(async () => {
    let {
      valid: e
    } = await (0, _.v)({
      type: s.Ie.FORM,
      content: "",
      channel: n
    });
    e && (! function(e) {
      let {
        channel: t,
        message: n,
        sticker: r
      } = e;
      a.Z.sendGreetMessage(t.id, r.id, a.Z.getSendMessageOptionsForReply({
        channel: t,
        message: n,
        shouldMention: true,
        showMentionToggle: true
      }))
    }({
      channel: n,
      message: l,
      sticker: g
    }), function(e) {
      var t, n;
      let {
        sticker: r,
        event: i,
        eventProperties: l
      } = e;
      null != i && f.default.track(i, (t = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({}, l), n = n = {
        sticker_id: r.id
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }), t))
    }({
      sticker: g,
      event: p,
      eventProperties: m
    }))
  }, [n, l, g, p, m]);
  return (0, r.jsx)(o.zx, {
    icon: {
      type: "sticker",
      asset: g,
      component: c.Z
    },
    text: h,
    onClick: b,
    variant: "secondary"
  })
}

function v(e) {
  let {
    channel: t,
    message: n,
    buttonLabels: i,
    stickers: o,
    event: a,
    eventProperties: s
  } = e, c = m.default.getCurrentUser(), f = function(e) {
    let {
      channel: t,
      message: n,
      currentUser: r
    } = e;
    return (0, l.e7)([p.Z, d.ZP], () => {
      var e;
      let i = t.guild_id;
      if (null == r || null == i) returnfalse;
      let l = (0, u.xl)(t),
        o = p.Z.can(h.Plq.SEND_MESSAGES, t),
        a = null == (e = d.ZP.getMember(i, r.id)) ? true : e.isPending,
        s = n.author.bot;
      return o && !l && !a && !s
    })
  }({
    channel: t,
    message: n,
    currentUser: c
  });
  return null != c && f ? (0, r.jsx)("div", {
    className: b.CTAMessage,
    children: (0, r.jsx)(C, {
      currentUser: c,
      channel: t,
      message: n,
      buttonLabels: i,
      stickers: o,
      event: a,
      eventProperties: s
    })
  }) : null
}