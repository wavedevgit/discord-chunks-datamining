/** Chunk was on 44669 **/
/** chunk id: 439282, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => D
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk80682 = require("./80682.js"),
  Chunk845056 = require("./845056.js"),
  Chunk685399 = require("./685399.js"),
  Chunk833349 = require("./833349.js"),
  Chunk765379 = require("./765379.js"),
  Chunk713654 = require("./713654.js"),
  Chunk565688 = require("./565688.js"),
  Chunk93879 = require("./93879.jsx"),
  Chunk961350 = require("./961350.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk290863 = require("./290863.js"),
  Chunk461213 = require("./461213.js"),
  Chunk977997 = require("./977997.js"),
  Chunk403362 = require("./403362.js"),
  Chunk246084 = require("./246084.js"),
  Chunk667936 = require("./667936.jsx"),
  Chunk879349 = require("./879349.jsx"),
  Chunk884415 = require("./884415.jsx"),
  Chunk611330 = require("./611330.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk188275 = require("./188275.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk439792 = require("./439792.js"),
  Chunk335419 = require("./335419.js");

function D(e) {
  var t, i;
  let s, {
    channel: g,
    guild: A,
    onAction: y,
    voiceStates: _,
    isChannelSelected: v,
    shouldShowSettingNudge: C
  } = e;
  s = l.useMemo(() => {
    var e;
    return null == _ || _.length > 50 ? {} : {
      [g.getGuildId()]: null != (e = _.map(e => {
        let {
          user: t
        } = e;
        return t.id
      })) ? e : []
    }
  }, [g, _]), (0, c.E)(s, "VoiceChannelActivities");
  let S = (0, d.Ay)(g),
    I = Array.from((0, d.Rz)(S).values()),
    R = null != (t = null == _ ? true : _.filter(x.Vq)) ? t : [],
    D = (0, a.bG)([j.A, O.A, b.default], () => {
      let e = {};
      return R.forEach(t => {
        let n = t.user.id === b.default.getId() ? j.A.findActivity(u.N, true) : O.A.findActivity(t.user.id, u.N);
        if (null != n && !(0, h.A)(n)) {
          var r, l, i, s;
          let a = "".concat(null != (r = n.application_id) ? r : "", ":").concat(null != (l = null == (s = n.party) ? true : s.id) ? l : t.user.id),
            o = null != (i = e[a]) ? i : {
              members: [],
              activity: n
            };
          o.members.push(t), (0, p.A)(o.activity, N.jUm.JOIN) || (o.activity = n), e[a] = o
        }
      }), Object.values(e)
    }, [R], a.My),
    M = (0, f.m)({
      location: "voice_channel_activities"
    });
  return D.length + I.length === 0 ? null : (0, r.jsxs)(o.HOs, {
    className: w.kL,
    children: [(0, r.jsx)(L, {
      channel: g,
      isChannelSelected: v,
      voiceStatesCount: null != (i = null == _ ? true : _.length) ? i : 0
    }), (0, r.jsx)("div", {
      className: w.zN
    }), I.map((e, t) => {
      var n;
      return (0, r.jsx)(E.A, {
        embeddedApp: e,
        presenceActivity: null != (n = e.presenceActivity) ? n : true,
        channel: g,
        onAction: y
      }, t)
    }), D.map((e, t) => {
      let {
        members: n,
        activity: i
      } = e;
      return M && null != i.application_id && T.sQ.has(i.application_id) ? (0, r.jsxs)(l.Fragment, {
        children: [(0, r.jsx)(E.A, {
          presenceActivity: i,
          channel: g,
          members: n,
          onAction: y
        }), (0, r.jsx)(m.A, {
          className: w.L,
          applicationId: i.application_id,
          userIds: n.map(e => e.user.id),
          location: "voice_channel",
          guildId: g.guild_id,
          channelId: g.id
        })]
      }, "".concat(t, "-with-gifting-breadcrumb")) : (0, r.jsx)(E.A, {
        presenceActivity: i,
        channel: g,
        members: n,
        onAction: y
      }, t)
    }), C && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: w.zN
      }), (0, r.jsx)("div", {
        className: w.Vo,
        children: (0, r.jsx)(o.Text, {
          variant: "text-xs/normal",
          tag: "span",
          children: P.intl.format(P.t.ePyoY2, {
            onClick: () => {
              (0, o.mMO)(async () => {
                let {
                  default: e
                } = await n.e("62026").then(n.bind(n, 585265));
                return t => {
                  var n, l;
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
                  }({}, t), l = l = {
                    guild: A
                  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r)
                    }
                    return n
                  })(Object(l)).forEach(function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
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

function L(e) {
  let {
    channel: t,
    isChannelSelected: n,
    voiceStatesCount: l
  } = e, i = (0, a.bG)([y.A], () => !y.A.can(N.xBc.CONNECT, t)), o = (0, a.bG)([_.A], () => _.A.hasVideo(t.id)), c = (0, v.Ay)({
    channel: t,
    locked: i,
    video: o,
    selected: n
  }), u = (0, a.bG)([A.A], () => A.A.getGuild(t.guild_id));
  return null == (0, g.gU)(t, u) ? null : (0, r.jsxs)("div", {
    className: s()(w.oT, R.oT),
    children: [(0, r.jsx)(C.A, {
      channel: t
    }), c ? (0, r.jsx)(S.A, {
      userCount: l,
      video: o,
      channel: t
    }) : (0, r.jsx)(I.A, {
      userCount: l
    })]
  })
}