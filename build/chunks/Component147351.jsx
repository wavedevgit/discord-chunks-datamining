/** Chunk was on 92917 **/
/** chunk id: 147351, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => v
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk732955 = require("./732955.js"),
  Chunk843472 = require("./843472.js"),
  Chunk355622 = require("./355622.js"),
  Chunk148355 = require("./148355.jsx"),
  Chunk406704 = require("./406704.js"),
  Chunk696451 = require("./696451.js"),
  Chunk576705 = require("./576705.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk661191 = require("./661191.js"),
  Chunk460350 = require("./460350.js"),
  Chunk652215 = require("./652215.js"),
  Chunk48447 = require("./48447.js");

function A(e) {
  let {
    assets: t,
    currentUser: n,
    message: r
  } = e, i = (g.default.extractTimestamp(n.id) + g.default.extractTimestamp(r.id)) % t.length;
  return t[i]
}

function y(e) {
  let {
    currentUser: t,
    channel: n,
    message: l,
    buttonLabels: u,
    stickers: d,
    event: p,
    eventProperties: m
  } = e, g = i.useMemo(() => A({
    assets: d,
    currentUser: t,
    message: l
  }), [d, t, l]), _ = i.useMemo(() => A({
    assets: u,
    currentUser: t,
    message: l
  }), [u, t, l]), b = i.useCallback(async () => {
    let {
      valid: e
    } = await (0, h.i)({
      type: o.oU.FORM,
      content: "",
      channel: n
    });
    e && (! function(e) {
      let {
        channel: t,
        message: n,
        sticker: r
      } = e;
      s.A.sendGreetMessage(t.id, r.id, s.A.getSendMessageOptionsForReply({
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
  return (0, r.jsx)(a.$nd, {
    icon: {
      type: "sticker",
      asset: g,
      component: c.A
    },
    text: _,
    onClick: b,
    variant: "secondary"
  })
}

function v(e) {
  let {
    channel: t,
    message: n,
    buttonLabels: i,
    stickers: a,
    event: s,
    eventProperties: o
  } = e, c = m.default.getCurrentUser(), f = function(e) {
    let {
      channel: t,
      message: n,
      currentUser: r
    } = e;
    return (0, l.bG)([p.A, d.Ay], () => {
      var e;
      let i = t.guild_id;
      if (null == r || null == i) returnfalse;
      let l = (0, u.UJ)(t),
        a = p.A.can(_.xBc.SEND_MESSAGES, t),
        s = null == (e = d.Ay.getMember(i, r.id)) ? true : e.isPending,
        o = n.author.bot;
      return a && !l && !s && !o
    })
  }({
    channel: t,
    message: n,
    currentUser: c
  });
  return null != c && f ? (0, r.jsx)("div", {
    className: b.S,
    children: (0, r.jsx)(y, {
      currentUser: c,
      channel: t,
      message: n,
      buttonLabels: i,
      stickers: a,
      event: s,
      eventProperties: o
    })
  }) : null
}