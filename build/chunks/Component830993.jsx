/** Chunk was on 82477 **/
/** chunk id: 830993, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => P
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk26714 = require("./26714.js"),
  Chunk570291 = require("./570291.js");

function P(e) {
  var t, l;
  let {
    channel: a,
    guild: h,
    onAction: p,
    voiceStates: g,
    isChannelSelected: m,
    shouldShowSettingNudge: O
  } = e, j = i.useMemo(() => {
    var e;
    return null == g || g.length > 50 ? {} : {
      [a.getGuildId()]: null != (e = g.map(e => {
        let {
          user: t
        } = e;
        return t.id
      })) ? e : []
    }
  }, [a, g]);
  (0, c.$)(j, "VoiceChannelActivities");
  let C = (0, u.ZP)(a),
    x = Array.from((0, u.uF)(C).values()),
    _ = null != (t = null == g ? true : g.filter(y.lm)) ? t : [],
    P = (0, o.e7)([b.Z], () => {
      let e = {};
      return _.forEach(t => {
        let n = b.Z.findActivity(t.user.id, e => [E.IIU.PLAYING, E.IIU.WATCHING].includes(e.type) && (null != e.assets || null != e.state || null != e.details || null != e.party) && (null == e.session_id || e.session_id === t.voiceState.sessionId) || e.type === E.IIU.LISTENING);
        if (null != n && !(0, f.Z)(n)) {
          var r, i, l, a;
          let o = "".concat(null != (i = n.application_id) ? i : "", ":").concat(null != (l = null == (r = n.party) ? true : r.id) ? l : t.user.id),
            s = null != (a = e[o]) ? a : {
              members: [],
              activity: n
            };
          s.members.push(t), (0, d.Z)(s.activity, E.xjy.JOIN) || (s.activity = n), e[o] = s
        }
      }), Object.values(e)
    }, [_], o.pF);
  return P.length + x.length === 0 ? null : (0, r.jsxs)(s.Ttm, {
    className: I.container,
    children: [(0, r.jsx)(N, {
      channel: a,
      isChannelSelected: m,
      voiceStatesCount: null != (l = null == g ? true : g.length) ? l : 0
    }), (0, r.jsx)("div", {
      className: I.headerDivider
    }), x.map((e, t) => {
      var n;
      return (0, r.jsx)(v.Z, {
        embeddedApp: e,
        presenceActivity: null != (n = e.presenceActivity) ? n : true,
        channel: a,
        onAction: p
      }, t)
    }), P.map((e, t) => {
      let {
        members: n,
        activity: i
      } = e;
      return (0, r.jsx)(v.Z, {
        presenceActivity: i,
        channel: a,
        members: n,
        onAction: p
      }, t)
    }), O && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: I.headerDivider
      }), (0, r.jsx)("div", {
        className: I.settingNudgeText,
        children: (0, r.jsx)(s.Text, {
          variant: "text-xs/normal",
          tag: "span",
          children: S.intl.format(S.t.ePyoY2, {
            onClick: () => {
              (0, s.ZDy)(async () => {
                let {
                  default: e
                } = await n.e("86722").then(n.bind(n, 264333));
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
                    guild: h
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
  } = e, l = (0, o.e7)([g.Z], () => !g.Z.can(E.Plq.CONNECT, t)), s = (0, o.e7)([m.Z], () => m.Z.hasVideo(t.id)), c = (0, O.ZP)({
    channel: t,
    locked: l,
    video: s,
    selected: n
  }), u = (0, o.e7)([p.Z], () => p.Z.getGuild(t.guild_id));
  return null == (0, h.KS)(t, u) ? null : (0, r.jsxs)("div", {
    className: a()(I.popoutHeaderContainer, _.popoutHeaderContainer),
    children: [(0, r.jsx)(j.Z, {
      channel: t
    }), c ? (0, r.jsx)(C.Z, {
      userCount: i,
      video: s,
      channel: t
    }) : (0, r.jsx)(x.Z, {
      userCount: i
    })]
  })
}