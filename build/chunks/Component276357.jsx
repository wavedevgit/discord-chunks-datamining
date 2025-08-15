/** Chunk was on 9456 **/
/** chunk id: 276357, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => j
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk924826 = require("./924826.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk109434 = require("./109434.js"),
  Chunk456269 = require("./456269.js"),
  Chunk228392 = require("./228392.js"),
  Chunk479099 = require("./479099.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk183132 = require("./183132.js");

function b() {
  return Promise.resolve()
}

function j(e) {
  let {
    channel: t,
    closePopout: n,
    setPopoutRef: j
  } = e, v = (0, m.Vm)(t), {
    tagFilter: _
  } = (0, u.H)(t.id), C = (0, u.v)(), y = (0, s.e7)([d.Z], () => d.Z.keyboardModeEnabled), w = i.useCallback(e => {
    (0, h.e7)({
      guildId: t.guild_id,
      channelId: t.id,
      tagId: e,
      filterTagIds: Array.from(_),
      added: !_.has(e),
      location: {
        page: f.ZY5.GUILD_CHANNEL,
        section: f.jXE.FORUM_CHANNEL_HEADER,
        object: f.qAy.CHANNEL_TAG
      }
    }), C.getState().toggleTagFilter(t.id, e)
  }, [t, _, C]), T = i.useCallback(() => {
    C.getState().setTagFilter(t.id, new Set), y || n()
  }, [C, t.id, y, n]), O = (0, a.ZP)({
    id: "".concat(t.id, "-all-tags-dropdown-navigator"),
    isEnabled: true,
    wrap: true,
    scrollToStart: b,
    scrollToEnd: b
  }), S = i.useRef(null);
  return i.useEffect(() => {
    requestAnimationFrame(() => {
      if (null != S.current) {
        let e = S.current.querySelector(".".concat(p.tag));
        null != e && e.focus()
      }
    })
  }, []), (0, r.jsxs)(c.VqE, {
    ref: e => {
      null == j || j(e)
    },
    "aria-label": x.intl.string(x.t.TdqRTk),
    className: p.container,
    children: [(0, r.jsx)("div", {
      className: p.header,
      children: (0, r.jsxs)("div", {
        className: p.headerLeft,
        children: [(0, r.jsx)(c.X6q, {
          color: "interactive-normal",
          variant: "heading-md/semibold",
          className: p.headerText,
          children: x.intl.string(x.t.HPu3kp)
        }), (0, r.jsx)("div", {
          className: p.countContainer,
          children: (0, r.jsx)(c.Text, {
            className: p.countText,
            color: "none",
            variant: "text-xs/medium",
            tabularNumbers: true,
            children: _.size
          })
        })]
      })
    }), (0, r.jsx)(l.bG, {
      navigator: O,
      children: (0, r.jsx)(l.SJ, {
        children: e => {
          var t, n, {
              ref: i
            } = e,
            a = function(e, t) {
              if (null == e) return {};
              var n, r, i = function(e, t) {
                if (null == e) return {};
                var n, r, i = {},
                  a = Object.keys(e);
                for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i
              }(e, t);
              if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
              }
              return i
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
              i.current = e, S.current = e
            }
          }, a), n = n = {
            className: p.tagContainer,
            children: v.map(e => (0, r.jsx)(g.Z, {
              className: p.tag,
              tag: e,
              selected: _.has(e.id),
              onClick: () => w(e.id)
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
      className: p.separator
    }), (0, r.jsx)(o.zx, {
      look: o.zx.Looks.LINK,
      size: o.zx.Sizes.MIN,
      color: o.zx.Colors.CUSTOM,
      className: p.clear,
      "aria-label": x.intl.string(x.t["98EPQE"]),
      onClick: T,
      children: (0, r.jsx)(c.Text, {
        variant: "text-sm/medium",
        color: "text-link",
        children: x.intl.string(x.t["98EPQE"])
      })
    })]
  })
}