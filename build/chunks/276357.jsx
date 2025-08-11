/** Chunk was on 71879 **/
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
  Chunk479099 = require("./479099.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk414464 = require("./414464.js");

function b() {
  return Promise.resolve()
}

function j(e) {
  let {
    channel: t,
    closePopout: n,
    setPopoutRef: j
  } = e, v = (0, m.Vm)(t), {
    tagFilter: C
  } = (0, u.H)(t.id), _ = (0, u.v)(), y = (0, s.e7)([d.Z], () => d.Z.keyboardModeEnabled), O = i.useCallback(e => {
    (0, h.e7)({
      guildId: t.guild_id,
      channelId: t.id,
      tagId: e,
      filterTagIds: Array.from(C),
      added: !C.has(e),
      location: {
        page: f.ZY5.GUILD_CHANNEL,
        section: f.jXE.FORUM_CHANNEL_HEADER,
        object: f.qAy.CHANNEL_TAG
      }
    }), _.getState().toggleTagFilter(t.id, e)
  }, [t, C, _]), w = i.useCallback(() => {
    _.getState().setTagFilter(t.id, new Set), y || n()
  }, [_, t.id, y, n]), P = (0, a.ZP)({
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
  }, []), <c.VqE ref={e => {
      null == j || j(e)
    }} aria-label={x.intl.string(x.t.TdqRTk)} className={p.container}>{<div className={p.header}><div className={p.headerLeft}>{<c.X6q color={"interactive-normal"} variant={"heading-md/semibold"} className={p.headerText}>{x.intl.string(x.t.HPu3kp)}</c.X6q>}{<div className={p.countContainer}><c.Text className={p.countText} color={"none"} variant={"text-xs/medium"} tabularNumbers={true}>{C.size}</c.Text></div>}</div></div>}{<l.bG navigator={P}><l.SJ>{e => {
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
              selected: C.has(e.id),
              onClick: () => O(e.id)
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
        }}</l.SJ></l.bG>}{<div className={p.separator} />}{<o.zx look={o.zx.Looks.LINK} size={o.zx.Sizes.MIN} color={o.zx.Colors.CUSTOM} className={p.clear} aria-label={x.intl.string(x.t["98EPQE"])} onClick={w}><c.Text variant={"text-sm/medium"} color={"text-link"}>{x.intl.string(x.t["98EPQE"])}</c.Text></o.zx>}</c.VqE>
}