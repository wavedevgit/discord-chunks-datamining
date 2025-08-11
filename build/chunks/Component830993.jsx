/** Chunk was on 34779 **/
/** chunk id: 830993, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => P
}), require("./388685.js"), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk616780 = require("./616780.js"),
  Chunk619915 = require("./619915.js"),
  Chunk620662 = require("./620662.js"),
  Chunk841784 = require("./841784.js"),
  Chunk471445 = require("./471445.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk158776 = require("./158776.js"),
  Chunk979651 = require("./979651.js"),
  Chunk823379 = require("./823379.js"),
  Chunk355363 = require("./355363.js"),
  Chunk449932 = require("./449932.jsx"),
  Chunk561788 = require("./561788.jsx"),
  Chunk876548 = require("./876548.jsx"),
  Chunk543432 = require("./543432.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk642317 = require("./642317.js"),
  Chunk656855 = require("./656855.js");

function P(e) {
  var t, l;
  let {
    channel: o,
    guild: p,
    onAction: f,
    voiceStates: g,
    isChannelSelected: b,
    shouldShowSettingNudge: _
  } = e, C = i.useMemo(() => {
    var e;
    return null == g || g.length > 50 ? {} : {
      [o.getGuildId()]: null != (e = g.map(e => {
        let {
          user: t
        } = e;
        return t.id
      })) ? e : []
    }
  }, [o, g]);
  (0, c.$)(C);
  let v = (0, u.ZP)(o),
    j = Array.from((0, u.uF)(v).values()),
    I = null != (t = null == g ? true : g.filter(O.lm)) ? t : [],
    P = e => t => [E.IIU.PLAYING, E.IIU.WATCHING].includes(t.type) && (null != t.assets || null != t.state || null != t.details || null != t.party) && (null == t.session_id || t.session_id === e.voiceState.sessionId) || t.type === E.IIU.LISTENING,
    w = (0, s.e7)([m.Z], () => {
      let e = {};
      return I.forEach(t => {
        let n = m.Z.findActivity(t.user.id, P(t));
        if (null != n && !(0, h.Z)(n)) {
          var r, i, l, o;
          let s = "".concat(null != (i = n.application_id) ? i : "", ":").concat(null != (l = null == (r = n.party) ? true : r.id) ? l : t.user.id),
            a = null != (o = e[s]) ? o : {
              members: [],
              activity: n
            };
          a.members.push(t), (0, d.Z)(a.activity, E.xjy.JOIN) || (a.activity = n), e[s] = a
        }
      }), Object.values(e)
    }, [I], s.pF);
  return w.length + j.length === 0 ? null : (0, r.jsxs)(a.Ttm, {
    className: x.container,
    children: [(0, r.jsx)(N, {
      channel: o,
      isChannelSelected: b,
      voiceStatesCount: null != (l = null == g ? true : g.length) ? l : 0
    }), (0, r.jsx)("div", {
      className: x.headerDivider
    }), j.map((e, t) => {
      var n;
      return (0, r.jsx)(y.Z, {
        embeddedApp: e,
        presenceActivity: null != (n = e.presenceActivity) ? n : true,
        channel: o,
        onAction: f
      }, t)
    }), w.map((e, t) => {
      let {
        members: n,
        activity: i
      } = e;
      return (0, r.jsx)(y.Z, {
        presenceActivity: i,
        channel: o,
        members: n,
        onAction: f
      }, t)
    }), _ && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: x.headerDivider
      }), (0, r.jsx)("div", {
        className: x.settingNudgeText,
        children: (0, r.jsx)(a.Text, {
          variant: "text-xs/normal",
          tag: "span",
          children: S.intl.format(S.t.ePyoY2, {
            onClick: () => {
              (0, a.ZDy)(async () => {
                let {
                  default: e
                } = await n.e("59500").then(n.bind(n, 241420));
                return t => {
                  var n, i;
                  return (0, r.jsx)(e, (n = function(e) {
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
                  }({}, t), i = i = {
                    guild: p
                  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r)
                    }
                    return n
                  })(Object(i)).forEach(function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
                  }), n))
                }
              })
            }
          })
        })
      })]
    })]
  })
}

function N(e) {
  let {
    channel: t,
    isChannelSelected: n,
    voiceStatesCount: i
  } = e, l = (0, s.e7)([g.Z], () => !g.Z.can(E.Plq.CONNECT, t)), a = (0, s.e7)([b.Z], () => b.Z.hasVideo(t.id)), c = (0, _.ZP)({
    channel: t,
    locked: l,
    video: a,
    selected: n
  }), u = (0, s.e7)([f.Z], () => f.Z.getGuild(t.guild_id));
  return null == (0, p.KS)(t, u) ? null : (0, r.jsxs)("div", {
    className: o()(x.popoutHeaderContainer, I.popoutHeaderContainer),
    children: [(0, r.jsx)(C.Z, {
      channel: t
    }), c ? (0, r.jsx)(v.Z, {
      userCount: i,
      video: a,
      channel: t
    }) : (0, r.jsx)(j.Z, {
      userCount: i
    })]
  })
}