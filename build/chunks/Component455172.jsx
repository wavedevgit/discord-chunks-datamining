/** Chunk was on 17302 **/
/** chunk id: 455172, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => P
}), require("./361932.js"), require("./187205.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk317381 = require("./317381.js"),
  Chunk884338 = require("./884338.jsx"),
  Chunk470883 = require("./470883.js"),
  Chunk933557 = require("./933557.js"),
  Chunk777861 = require("./777861.jsx"),
  Chunk752048 = require("./752048.js"),
  Chunk439944 = require("./439944.js"),
  Chunk199902 = require("./199902.js"),
  Chunk699516 = require("./699516.js"),
  Chunk9156 = require("./9156.js"),
  Chunk594174 = require("./594174.js"),
  Chunk938475 = require("./938475.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk132789 = require("./132789.js"),
  Chunk78480 = require("./78480.js");

function C(e) {
  let {
    icon: t,
    users: n
  } = e;
  return 0 === n.length ? null : (0, r.jsxs)("div", {
    className: j.row,
    children: [(0, r.jsx)(t, {
      className: j.activityIcon,
      color: "currentColor"
    }), (0, r.jsx)(u.ZP, {
      users: n,
      max: 6
    })]
  })
}

function E(e) {
  let {
    muteConfig: t,
    className: n
  } = e;
  return (null == t ? true : t.end_time) == null ? (0, r.jsx)(s.Text, {
    variant: "text-xs/normal",
    color: "text-muted",
    className: n,
    children: v.intl.string(v.t.fpKdS1)
  }) : (0, r.jsx)(p.Z, {
    muteConfig: t,
    className: n
  })
}

function S(e) {
  let {
    channel: t
  } = e, n = t.id, {
    activityUsers: l,
    streamUsers: u,
    voiceUsers: f
  } = function(e) {
    let t = e.id,
      n = (0, a.Wu)([b.Z], () => b.Z.getBlockedOrIgnoredIDs()),
      r = (0, a.e7)([h.Z], () => h.Z.getUserAffinitiesMap(), []),
      l = (0, a.Wu)([c.ZP, y.default], () => c.ZP.getEmbeddedActivitiesForChannel(t).flatMap(e => Array.from(e.userIds)).map(e => y.default.getUser(e)), [t]),
      o = i.useMemo(() => (0, d.dq)(l, n), [l, n]),
      s = i.useMemo(() => (0, g.C)(o, r, "DirectMessageTooltip - activityUsers"), [o, r]),
      u = (0, a.Wu)([m.Z, y.default], () => {
        let e = m.Z.getAllApplicationStreamsForChannel(t).map(e => e.ownerId).map(e => y.default.getUser(e));
        return (0, d.dq)(e, n)
      }, [t, n]),
      f = i.useMemo(() => (0, d.dq)(u, n), [u, n]),
      p = i.useMemo(() => (0, g.C)(f, r, "DirectMessageTooltip - activityUsers"), [f, r]),
      _ = i.useMemo(() => p.filter(e => !s.some(t => t.id === e.id)), [p, s]),
      v = (0, a.Wu)([O.ZP], () => {
        let t = O.ZP.getVoiceStatesForChannel(e).map(e => {
          let {
            user: t
          } = e;
          return t
        });
        return (0, d.dq)(t, n)
      }, [e, n]),
      j = i.useMemo(() => (0, d.dq)(v, n), [v, n]),
      x = i.useMemo(() => (0, g.C)(j, r, "DirectMessageTooltip - voiceUsers"), [j, r]);
    return {
      voiceUsers: i.useMemo(() => x.filter(e => !s.some(t => t.id === e.id) && !p.some(t => t.id === e.id)), [x, s, p]),
      streamUsers: _,
      activityUsers: s
    }
  }(t), p = (0, r.jsx)(C, {
    icon: s.gj8,
    users: f
  }), v = (0, r.jsx)(C, {
    icon: s.hGI,
    users: u
  }), x = (0, r.jsx)(C, {
    icon: s.nG3,
    users: l
  }), {
    isMuted: S,
    muteConfig: I
  } = (0, a.cj)([_.ZP], () => ({
    isMuted: _.ZP.isChannelMuted(null, n),
    muteConfig: _.ZP.getChannelMuteConfig(null, n)
  }), [n]);
  return (0, r.jsxs)(r.Fragment, {
    children: [p, v, x, S ? (0, r.jsx)(E, {
      muteConfig: I,
      className: o()(j.muteText, {
        [j.muteTextWithActivity]: null != p || null != v
      })
    }) : null]
  })
}

function I(e) {
  let {
    channel: t
  } = e, n = (0, f.ZP)(t);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: o()(j.row, j.rowGuildName),
      children: (0, r.jsx)("span", {
        className: o()(j.guildNameText, j.guildNameTextLimitedSize),
        children: n
      })
    }), (0, r.jsx)(S, {
      channel: t
    })]
  })
}

function P(e) {
  let {
    channel: t,
    children: n
  } = e, i = (0, f.ZP)(t);
  return (0, r.jsx)(s.aML, {
    "data-migration-pending": true,
    hideOnClick: true,
    spacing: 12,
    position: "right",
    text: (0, r.jsx)(I, {
      channel: t
    }),
    "aria-label": null != i && i,
    tooltipClassName: x.listItemTooltip,
    tooltipContentClassName: x.listItemTooltipContent,
    children: e => {
      var t, i, {
          onFocus: l,
          onBlur: o
        } = e,
        a = function(e, t) {
          if (null == e) return {};
          var n, r, i = function(e, t) {
            if (null == e) return {};
            var n, r, i = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i
          }(e, t);
          if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
          }
          return i
        }(e, ["onFocus", "onBlur"]);
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
        onFocus: l,
        onBlur: o
      }, a), i = i = {
        children: n
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
      }), t))
    }
  })
}