/** Chunk was on 49131 **/
/** chunk id: 276357, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk924826 = require("./924826.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk109434 = require("./109434.js"),
  Chunk456269 = require("./456269.js"),
  Chunk228392 = require("./228392.js"),
  Chunk479099 = require("./479099.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk909454 = require("./909454.js");

function b() {
  return Promise.resolve()
}

function p(e) {
  let {
    channel: t,
    closePopout: n,
    setPopoutRef: p
  } = e, j = (0, u.Vm)(t), {
    tagFilter: v
  } = (0, d.H)(t.id), C = (0, d.v)(), y = (0, s.e7)([c.Z], () => c.Z.keyboardModeEnabled), T = a.useCallback(e => {
    (0, m.e7)({
      guildId: t.guild_id,
      channelId: t.id,
      tagId: e,
      filterTagIds: Array.from(v),
      added: !v.has(e),
      location: {
        page: f.ZY5.GUILD_CHANNEL,
        section: f.jXE.FORUM_CHANNEL_HEADER,
        object: f.qAy.CHANNEL_TAG
      }
    }), C.getState().toggleTagFilter(t.id, e)
  }, [t, v, C]), S = a.useCallback(() => {
    C.getState().setTagFilter(t.id, new Set), y || n()
  }, [C, t.id, y, n]), N = (0, i.ZP)({
    id: "".concat(t.id, "-all-tags-dropdown-navigator"),
    isEnabled: true,
    wrap: true,
    scrollToStart: b,
    scrollToEnd: b
  }), w = a.useRef(null);
  return a.useEffect(() => {
    requestAnimationFrame(() => {
      if (null != w.current) {
        let e = w.current.querySelector(".".concat(x.tag));
        null != e && e.focus()
      }
    })
  }, []), (0, r.jsxs)(o.VqE, {
    ref: e => {
      null == p || p(e)
    },
    "aria-label": g.intl.string(g.t.TdqRTh),
    className: x.container,
    children: [(0, r.jsx)("div", {
      className: x.header,
      children: (0, r.jsxs)("div", {
        className: x.headerLeft,
        children: [(0, r.jsx)(o.Heading, {
          color: "interactive-text-default",
          variant: "heading-md/semibold",
          className: x.headerText,
          children: g.intl.string(g.t.HPu3kq)
        }), (0, r.jsx)("div", {
          className: x.countContainer,
          children: (0, r.jsx)(o.Text, {
            className: x.countText,
            color: "none",
            variant: "text-xs/medium",
            tabularNumbers: true,
            children: v.size
          })
        })]
      })
    }), (0, r.jsx)(l.bG, {
      navigator: N,
      children: (0, r.jsx)(l.SJ, {
        children: e => {
          var t, n, {
              ref: a
            } = e,
            i = function(e, t) {
              if (null == e) return {};
              var n, r, a = function(e, t) {
                if (null == e) return {};
                var n, r, a = {},
                  i = Object.keys(e);
                for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                return a
              }(e, t);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
              }
              return a
            }(e, ["ref"]);
          return (0, r.jsx)("div", (t = function(e) {
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
          }({
            ref: e => {
              a.current = e, w.current = e
            }
          }, i), n = n = {
            className: x.tagContainer,
            children: j.map(e => (0, r.jsx)(h.Z, {
              className: x.tag,
              tag: e,
              selected: v.has(e.id),
              onClick: () => T(e.id)
            }, e.id))
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
        }
      })
    }), (0, r.jsx)("div", {
      className: x.separator
    }), (0, r.jsx)(o.Avr, {
      "aria-label": g.intl.string(g.t["98EPQP"]),
      onClick: S,
      text: g.intl.string(g.t["98EPQP"])
    })]
  })
}